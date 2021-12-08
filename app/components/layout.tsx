import { Link } from "remix";
import Logo from "./logo";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-300">

      <header className="border-b border-gray-600">
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

      <div className="container mx-auto my-4 px-4 bg-white">
        {children}
      </div>

      <footer className="border-t border-gray-600">
        <div className="container mx-auto p-4">
          <p>&copy; You!</p>
        </div>
      </footer>
      
    </div>
  );
}
