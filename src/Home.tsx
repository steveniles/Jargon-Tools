import { Transition } from "@headlessui/react";
import { Link } from "react-router";
import Card from "./components/Card";

export default function Home() {
  return (
    <main className="flex h-dvh flex-col items-center overflow-auto bg-radial from-indigo-950 to-neutral-950 select-none">
      <section className="flex grow flex-col items-center justify-center gap-16">
        <div className="font-[Glory] text-white text-shadow-lg">
          <div className="text-7xl tracking-tighter sm:text-9xl">
            <span
              style={{ viewTransitionName: "jargon" }}
              className="font-light opacity-66"
            >
              Jargon
            </span>
            <span
              style={{ viewTransitionName: "tools" }}
              className="font-medium opacity-75"
            >
              Tools
            </span>
          </div>
          <div className="text-center text-2xl italic opacity-50 sm:-mt-4 sm:mr-1 sm:text-right sm:text-3xl sm:tracking-tight">
            a collection of weird web toys
          </div>
        </div>
        <div className="mx-4 flex flex-col flex-wrap justify-center gap-8 sm:flex-row">
          <Card
            title="Frequency Calculator"
            description="See how many times each letter, number, and character appears in a piece of text"
            href="/frequency-calculator"
            viewTransitionName="frequency-calculator"
          />
          <Card
            title="Prime Factorizer"
            description="Find the prime factors of a given number"
            href="/prime-factorizer"
            viewTransitionName="prime-factorizer"
          />
          <Card
            title="Dimensionizer (Coming Soon)"
            description="Unfold a one-dimensional string of text into multiple dimensions"
          />
        </div>
      </section>
      <footer className="shrink-0 overflow-hidden font-[Roboto]">
        <Transition show={true} appear={true}>
          <div className="mt-4 rounded-t-lg bg-black p-1 text-xs text-white opacity-50 transition data-[closed]:translate-y-6">
            site design and functionality by{" "}
            <Link
              className="font-bold"
              to="https://www.steveniles.me"
              viewTransition
            >
              Steve Niles
            </Link>
          </div>
        </Transition>
      </footer>
    </main>
  );
}
