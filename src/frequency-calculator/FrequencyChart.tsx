import { Fragment } from "react/jsx-runtime";

export default function FrequencyChart({ data }: { data: [string, number][] }) {
  const highestCount = data[0][1];

  return (
    <div
      className="grid grid-cols-[max-content_max-content_1fr] gap-4 overflow-auto p-4 font-[Roboto_Mono]"
      style={{
        scrollbarWidth: "thin",
        scrollbarColor: "oklch(71.4% 0.203 305.504) transparent",
      }}
    >
      {data.map(([character, count]) => (
        <Fragment key={character}>
          <span>{character}</span>
          <span className="text-right">{count}</span>
          <div
            style={{ width: (count * 100) / highestCount + "%" }}
            className="rounded-xs bg-linear-to-r from-purple-800 via-purple-500 to-purple-200"
          ></div>
        </Fragment>
      ))}
    </div>
  );
}
