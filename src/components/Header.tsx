import { Link } from "react-router";

export default function Header({ title }: { title: string }) {
  return (
    <header className="grid w-full grid-cols-[1fr_auto_1fr] gap-4">
      <Link className="font-[Glory] tracking-tighter" to="/" viewTransition>
        <span style={{ viewTransitionName: "jargon" }} className="font-light">
          Jargon
        </span>
        <span style={{ viewTransitionName: "tools" }} className="font-medium">
          Tools
        </span>
      </Link>
      <h1 className="font-[Roboto] font-bold">{title}</h1>
    </header>
  );
}
