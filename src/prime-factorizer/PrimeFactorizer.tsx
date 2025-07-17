import { useState } from "react";
import { flushSync } from "react-dom";
import { Button, Input } from "@headlessui/react";
import Header from "../components/Header";
import FactorsList from "./FactorsList";

function factorize(target: number) {
  if (!Number.isInteger(target) || target < 2)
    throw new Error("Target must be an integer");
  if (target < 2) throw new Error("Target must be greater than 1");
  if (target > 999999999999999)
    throw new Error("Target must be an integer less than 1000000000000000");

  let currentFactor = 1;
  let currentTarget = target;
  const factors: { [factor: number]: number } = {};

  do {
    currentFactor++;
    while (currentTarget % currentFactor == 0) {
      factors[currentFactor] = (factors[currentFactor] ?? 0) + 1;
      currentTarget = currentTarget / currentFactor;
    }
  } while (currentFactor * currentFactor <= currentTarget);

  if (currentTarget > 1)
    factors[currentTarget] = factors[currentTarget] ?? 0 + 1;

  return factors;
}

export default function PrimeFactorizer() {
  const [target, setTarget] = useState(0);
  const [results, setResults] = useState<{ [i: number]: number } | null>(null);

  return (
    <main className="flex h-dvh justify-center bg-radial from-lime-950 to-neutral-950 font-[Roboto] text-lime-50 select-none">
      <title>Jargon Tools - Prime Factorizer</title>
      <section className="flex w-full flex-col items-center gap-4 overflow-auto p-4">
        <Header title="Prime Factorizer" />
        <div className="w-full max-w-[801px]">
          <div
            className="invisible relative z-1 mx-4"
            style={{ viewTransitionName: "prime-factorizer-inner" }}
          />
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setResults(factorize(target));
            }}
          >
            <div
              className="flex h-[132px] gap-4 rounded-lg bg-neutral-950 p-4 outline-1 outline-lime-900 has-invalid:!outline-red-500 has-[input:focus]:outline-lime-500"
              style={{ viewTransitionName: "prime-factorizer" }}
            >
              <Input
                autoFocus
                className="w-full font-[Roboto_Mono] text-lime-400 outline-none selection:bg-lime-700 selection:text-lime-50 min-[321px]:text-lg min-[339px]:text-xl min-[375px]:text-2xl min-[429px]:text-3xl min-[483px]:text-4xl min-[591px]:text-5xl min-[699px]:text-6xl min-[807px]:text-7xl"
                inputMode="numeric"
                max={999999999999999}
                min={2}
                onChange={(event) => {
                  if (event.target.value === "") setTarget(0);
                  if (!Number.isInteger(event.target.valueAsNumber)) return;
                  else if (event.target.valueAsNumber > 999999999999999) return;
                  else if (event.target.valueAsNumber < 1) return;
                  else setTarget(event.target.valueAsNumber);
                }}
                placeholder="Enter a number"
                disabled={results !== null}
                type="number"
                value={target || ""}
              />
              <div className="flex flex-col gap-4" hidden={results !== null}>
                <Button
                  className="rounded-lg border-1 border-lime-500 px-4 py-2 font-semibold hover:cursor-pointer hover:bg-lime-600 active:bg-lime-600"
                  onClick={() => {
                    //Change target value to 1 and back to 0, to reset any characters left in the input (e.g. "-", "+", ".")
                    flushSync(() => setTarget(1));
                    flushSync(() => setTarget(0));
                  }}
                >
                  Clear
                </Button>
                <Button
                  className="rounded-lg border-1 border-lime-500 bg-lime-700 px-4 py-2 font-semibold hover:cursor-pointer hover:bg-lime-600 active:bg-lime-600 disabled:cursor-not-allowed disabled:hover:bg-lime-700"
                  disabled={target < 2}
                  type="submit"
                >
                  Factor
                </Button>
              </div>
              <div
                className="flex flex-col justify-center"
                hidden={results === null}
              >
                <Button
                  className="rounded-lg border-1 border-lime-500 bg-lime-700 px-4 py-2 font-semibold hover:cursor-pointer hover:bg-lime-600 active:bg-lime-600"
                  onClick={() => setResults(null)}
                >
                  Reset
                </Button>
              </div>
            </div>
          </form>
        </div>
        <div className="flex w-full max-w-[801px] grow flex-col justify-center">
          <FactorsList factors={results} />
        </div>
      </section>
    </main>
  );
}
