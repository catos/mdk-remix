import type { ActionFunction } from "remix"
import { Form, useSearchParams, useTransition } from "remix";
import Input from "~/components/ui/input";
import { createUserSession, login } from "~/firebase/session.server";

function validateUsername(username: unknown) {
  if (typeof username !== "string" || username.length < 3) {
    return `Usernames must be at least 3 characters long`;
  }
}

function validatePassword(password: unknown) {
  if (typeof password !== "string" || password.length < 6) {
    return `Passwords must be at least 6 characters long`;
  }
}

type ActionData = {
  formError?: string;
  fieldErrors?: {
    username: string | undefined;
    password: string | undefined;
  };
  fields?: {
    username: string;
    password: string;
  };
};

export const action: ActionFunction = async ({ request }): Promise<Response | ActionData> => {
  const form = await request.formData();
  const username = form.get("username");
  const password = form.get("password");
  const redirectTo = form.get("redirectTo") || "/";
  
  if (
    typeof username !== "string" ||
    typeof password !== "string" ||
    typeof redirectTo !== "string"
  ) {
    return { formError: `Form not submitted correctly.` };
  }

  const fields = { username, password };
  const fieldErrors = {
    username: validateUsername(username),
    password: validatePassword(password)
  };
  if (Object.values(fieldErrors).some(Boolean))
    return { fieldErrors, fields };

  const user = await login({ username, password });
  if (!user) {
    return {
      fields,
      formError: `Username/Password combination is incorrect`
    };
  }

  return createUserSession(user.uid, redirectTo);
}

export default function Login() {
  const transition = useTransition()
  const [searchParams] = useSearchParams();

  return (
    <div className="container mx-auto">
      <h1>Logg inn</h1>
      <Form method="post" className="flex flex-col gap-4">
        <Input name="redirectTo" type="hidden" value={searchParams.get("redirectTo") ?? undefined} />
        <Input name="username" label="Brukernavn" type="email" />
        <Input name="password" label="Passord" type="password" />

        <button className="button-primary" type="submit">
          {transition.submission ? "Logger inn..." : "Logg inn"}
        </button>
      </Form>
    </div>
  )
}