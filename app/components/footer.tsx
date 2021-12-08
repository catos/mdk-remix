import { Link } from "remix";
import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-4 items-center mt-8 py-8 bg-gray-200">
      <section className="container mx-auto text-center">
        <Logo />
        <p className="text-xl leading-tight">
          Lorem ipsum dolor amet consectetur, adipisicing elit. Illo maiores
          iure in vitae iusto fuga ratione?
        </p>
      </section>

      <section className="flex gap-8">
        <Link to="/">
          Om oss
        </Link>
        <Link to="/">
          Hjelp
        </Link>
        <Link to="/">
          Vilkår
        </Link>
      </section>

      <section className="text-sm">
        {"Copyright © "}
        <span className="font-bold">ca7o.com</span> {new Date().getFullYear()}
        {"."}
      </section>

    </footer>
  )
}
