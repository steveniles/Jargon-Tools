export default function FactorsList({
  factors,
}: {
  factors: { [factor: number]: number } | null;
}) {
  return (
    factors && (
      <div
        className="max-h-fit grow basis-[104px] overflow-auto rounded-lg bg-neutral-950 p-4 text-right font-[Roboto_Mono] text-2xl whitespace-pre-wrap text-lime-400 outline-1 outline-lime-900 select-text selection:bg-lime-700 selection:text-lime-50 min-[334px]:text-3xl min-[388px]:text-4xl min-[496px]:text-5xl min-[604px]:text-6xl min-[712px]:text-7xl"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "oklch(84.1% 0.238 128.85) transparent",
        }}
      >
        {Object.entries(factors)
          .map(([factor, exponent]) =>
            Array(exponent).fill(factor).join("\u200B\u00B7"),
          )
          .join("\n\u00B7\n")}
      </div>
    )
  );
}
