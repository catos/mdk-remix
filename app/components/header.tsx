import { User } from "firebase/auth";
import { Link } from "remix";
import Logo from "./logo";

type Props = {
  user?: User | null
}

export default function Header({ user }: Props) {
  return (
    <header className="fixed z-50 w-full top-0 flex flex-wrap items-center justify-between h-16 bg-gray-100">
      <nav aria-label="Main navigation" className="container mx-auto flex">
        <Link to="/" title="Remix" className="flex-1">
          <Logo />
        </Link>
        <div className="flex gap-4 items-center">
          <Link to="/oppskrifter">Oppskrifter</Link>
          {user ?
            (
              <>
                <Link to="/admin">Admin</Link>
                <span>{user.displayName}</span>
                <form action="/logout" method="post">
                  <button type="submit" className="button">
                    Logout
                  </button>
                </form>
              </>
            )
            : <Link to="/logg-inn">Logg inn</Link>}
        </div>
      </nav>
    </header>
  )
}