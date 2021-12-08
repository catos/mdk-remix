import { Link } from "remix";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="fixed z-50 w-full top-0 flex flex-wrap items-center justify-between h-16 bg-gray-200">
      <nav aria-label="Main navigation" className="container mx-auto px-4 flex py-4">
        <Link to="/" title="Remix" className="flex-1">
          <Logo />
        </Link>
        <div className="flex gap-4 items-center">
          <Link to="/oppskrifter">Oppskrifter</Link>
          <Link to="/admin">Admin</Link>
        </div>
      </nav>
    </header>
  )
}