import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Link, useViewTransitionState } from "react-router";

export default function Card({
  title,
  description,
  href,
  viewTransitionName = "none",
}: {
  title: string;
  description: string;
  href?: string;
  viewTransitionName?: string;
}) {
  const isTransitioning = useViewTransitionState(href || "");

  const contents = (
    <div
      className="group w-3xs rounded-lg bg-linear-to-r from-neutral-950 to-neutral-900 p-4 font-[Roboto] shadow-lg"
      style={{
        viewTransitionName: isTransitioning ? viewTransitionName : "none",
      }}
    >
      <div
        style={{
          viewTransitionName:
            isTransitioning && viewTransitionName !== "none"
              ? viewTransitionName + "-inner"
              : "none",
        }}
      >
        <div className="flex justify-between text-neutral-50">
          <span className="font-bold">{title}</span>
          {href && (
            <ChevronRightIcon className="size-6 stroke-neutral-200 group-hover:stroke-neutral-100 group-hover:stroke-3" />
          )}
        </div>
        <hr className="my-4 text-neutral-800" />
        <div className="text-neutral-400">{description}</div>
      </div>
    </div>
  );

  return href ? (
    <Link to={href} viewTransition>
      {contents}
    </Link>
  ) : (
    contents
  );
}
