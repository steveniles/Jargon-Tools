import { Button, Field, Label, Switch, Textarea } from "@headlessui/react";
import { CalculatorIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Header from "../components/Header";
import { calculate } from "./calculate";
import FrequencyChart from "./FrequencyChart";

export default function FrequencyCalculator() {
  const [showOutput, setShowOutput] = useState(false);
  const [sourceText, setSourceText] = useState("");
  const [output, setOutput] = useState<[string, number][]>([]);
  const [ignoreCase, setIgnoreCase] = useState(true);

  function handleProcessClick() {
    const inputText = ignoreCase ? sourceText.toUpperCase() : sourceText;
    const output = calculate(inputText.replace(/\s+/g, ""));
    setOutput(output);
    setShowOutput(true);
  }

  return (
    <main className="flex h-dvh justify-center bg-radial from-purple-950 to-neutral-950 font-[Roboto] text-purple-50 select-none">
      <title>Jargon Tools - Frequency Calculator</title>
      <section className="flex w-full max-w-[833px] flex-col overflow-auto p-4">
        <Header title="Frequency Calculator" />

        <div
          className="invisible relative top-4 z-1 mx-4"
          style={{ viewTransitionName: "frequency-calculator-inner" }}
        />

        {!showOutput && (
          <>
            <Textarea
              autoFocus
              className="my-4 min-h-14 w-full grow resize-none rounded-lg bg-neutral-950 p-4 font-[Roboto_Mono] text-purple-400 outline-1 outline-purple-900 selection:bg-purple-700 selection:text-purple-50 focus:outline-purple-500"
              cols={80}
              onChange={(event) => setSourceText(event.target.value)}
              placeholder="Enter some text in here..."
              spellCheck="false"
              style={{ viewTransitionName: "frequency-calculator" }}
              value={sourceText}
            />
            <div className="flex flex-wrap items-center justify-end gap-4">
              <Field className="flex items-center gap-2">
                <Switch
                  checked={ignoreCase}
                  onChange={() => {
                    setIgnoreCase(!ignoreCase);
                  }}
                  className="group inline-flex h-6 w-11 items-center rounded-full bg-purple-300 transition data-[checked]:bg-purple-600"
                >
                  <span className="size-4 translate-x-1 rounded-full bg-purple-50 transition group-data-[checked]:translate-x-6" />
                </Switch>
                <Label className="font-semibold hover:cursor-pointer">
                  Ignore Case
                </Label>
              </Field>

              <Button
                onClick={() => {
                  setSourceText("");
                }}
                className="rounded-lg border-1 border-purple-500 px-4 py-2 font-semibold hover:cursor-pointer hover:bg-purple-500 active:bg-purple-500 disabled:cursor-not-allowed disabled:hover:bg-transparent"
                disabled={sourceText === ""}
              >
                Clear
              </Button>

              <Button
                onClick={handleProcessClick}
                className="flex gap-2 rounded-lg border-1 border-purple-500 bg-purple-600 px-4 py-2 font-semibold hover:cursor-pointer hover:bg-purple-500 active:bg-purple-500 disabled:cursor-not-allowed disabled:hover:bg-purple-600"
                disabled={sourceText === ""}
              >
                <CalculatorIcon className="size-6" />
                <span>Calculate</span>
              </Button>
            </div>
          </>
        )}

        {showOutput && (
          <>
            <div
              className="my-4 min-h-14 grow overflow-auto rounded-lg bg-neutral-950 p-4 font-[Roboto_Mono] outline-1 outline-purple-900"
              style={{ viewTransitionName: "frequency-calculator" }}
            >
              <FrequencyChart data={output} />
            </div>
            <div className="flex justify-end">
              <Button
                onClick={() => setShowOutput(false)}
                className="rounded-lg border-1 border-purple-500 bg-purple-600 px-4 py-2 font-semibold hover:cursor-pointer hover:bg-purple-500 active:bg-purple-500"
              >
                <span>Back</span>
              </Button>
            </div>
          </>
        )}
      </section>
    </main>
  );
}
