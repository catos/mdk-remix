import { createCookieSessionStorage, redirect } from "remix"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
} from "@firebase/auth"
import { auth } from "./firebase"

type LoginForm = {
  username: string
  password: string
}

// TODO: create user in firebase/users
export async function register({ username, password }: LoginForm) {
  const user = await createUserWithEmailAndPassword(auth, username, password)
    .then((userCredential) => userCredential.user)
    .catch(function (error): any {
      const errorCode = error.code
      const errorMessage = error.message
      if (errorCode == "auth/weak-password") {
        return "The password is too weak."
      } else {
        return errorMessage
      }
    })

  return user
}

export async function login({ username, password }: LoginForm) {
  const user = await signInWithEmailAndPassword(auth, username, password)
    .then((userCredential) => userCredential.user)
    .catch((err) => {
      err.code
      err.message
    })
  return user
}

// const sessionSecret = process.env.SESSION_SECRET
// if (!sessionSecret) {
//   throw new Error("SESSION_SECRET must be set")
// }

const storage = createCookieSessionStorage({
  cookie: {
    name: "RJ_session",
    secure: true,
    secrets: ["weee1234weee"],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true,
  },
})

export async function getUserId(request: Request) {
  const session = await storage.getSession(request.headers.get("Cookie"))
  const userId = session.get("userId")
  if (!userId || typeof userId !== "string") return null
  return userId
}

export async function requireUserId(
  request: Request,
  redirectTo: string = new URL(request.url).pathname
) {
  const session = await storage.getSession(request.headers.get("Cookie"))
  const userId = session.get("userId")
  if (!userId || typeof userId !== "string") {
    const searchParams = new URLSearchParams([["redirectTo", redirectTo]])
    throw redirect(`/logg-inn?${searchParams}`)
  }
  return userId
}

// TODO: get user from firebase/users, not auth
export async function getUser(request: Request): Promise<User | null> {
  const userId = auth.currentUser?.email
  if (typeof userId !== "string") {
    return null
  }

  try {
    const user = auth.currentUser
    onAuthStateChanged(auth, (user) => user)
    return user
  } catch {
    throw logout(request)
  }
}

export async function logout(request: Request) {
  signOut(auth)
  const session = await storage.getSession(request.headers.get("Cookie"))
  return redirect("/logg-inn", {
    headers: {
      "Set-Cookie": await storage.destroySession(session),
    },
  })
}

export async function createUserSession(
  userId: string | null,
  redirectTo: string
) {
  const session = await storage.getSession()
  session.set("userId", userId)
  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session),
    },
  })
}
