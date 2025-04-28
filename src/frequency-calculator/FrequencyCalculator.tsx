import { Button, Field, Label, Switch, Textarea } from "@headlessui/react";
import { useState } from "react";
import Header from "../components/Header";
import { calculate } from "./calculate";
import FrequencyChart from "./FrequencyChart";

export default function FrequencyCalculator() {
  const [sourceText, setSourceText] = useState("");
  const [output, setOutput] = useState<[string, number][] | null>(null);
  const [ignoreCase, setIgnoreCase] = useState(true);

  function handleProcessClick() {
    const inputText = ignoreCase ? sourceText.toUpperCase() : sourceText;
    setOutput(calculate(inputText.replace(/\s+/g, "")));
  }

  return (
    <main className="flex h-dvh justify-center bg-radial from-purple-950 to-neutral-950 font-[Roboto] text-purple-50 select-none">
      <title>Jargon Tools - Frequency Calculator</title>
      <section className="flex w-full max-w-[833px] flex-col gap-4 p-4">
        <Header title="Frequency Calculator" />

        <div
          className="grow overflow-auto rounded-lg bg-neutral-950 outline-1 outline-purple-900 has-[textarea:focus]:outline-purple-500"
          style={{ viewTransitionName: "frequency-calculator" }}
        >
          <div
            className="invisible relative z-1 mx-4"
            style={{ viewTransitionName: "frequency-calculator-inner" }}
          />

          <div className="flex h-full flex-col justify-between">
            {!output && (
              <>
                <Textarea
                  autoFocus
                  className="h-full resize-none p-4 font-[Roboto_Mono] text-purple-400 outline-none selection:bg-purple-700 selection:text-purple-50"
                  cols={80}
                  onChange={(event) => setSourceText(event.target.value)}
                  placeholder="Enter some text in here..."
                  spellCheck="false"
                  style={{
                    scrollbarWidth: "thin",
                    scrollbarColor: "oklch(71.4% 0.203 305.504) transparent",
                  }}
                  value={sourceText}
                />
                <div className="flex flex-wrap items-center justify-end gap-4 p-4">
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
                  >
                    Clear
                  </Button>

                  <Button
                    onClick={handleProcessClick}
                    className="rounded-lg border-1 border-purple-500 bg-purple-600 px-4 py-2 font-semibold hover:cursor-pointer hover:bg-purple-500 active:bg-purple-500 disabled:cursor-not-allowed disabled:hover:bg-purple-600"
                    disabled={sourceText === ""}
                  >
                    <span>Calculate</span>
                  </Button>
                </div>
              </>
            )}

            {output && (
              <>
                <FrequencyChart data={output} />
                <div className="flex justify-end p-4">
                  <Button
                    onClick={() => setOutput(null)}
                    className="rounded-lg border-1 border-purple-500 bg-purple-600 px-4 py-2 font-semibold hover:cursor-pointer hover:bg-purple-500 active:bg-purple-500"
                  >
                    <span>Back</span>
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
