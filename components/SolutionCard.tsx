import Link from "next/link";
import type { SolutionSummary } from "@/lib/types";
import { Icon } from "./Icon";

export function SolutionCard({ solution }: { solution: SolutionSummary }) {
  return (
    <Link
      href={`/solutions/${solution.slug}`}
      className="group flex h-full flex-col rounded-xl2 border border-surface-border bg-surface-muted p-7 transition-colors duration-200 hover:border-accent-200 hover:bg-white hover:shadow-card"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-accent-600 shadow-card">
        <Icon name={solution.icon} className="h-5 w-5" />
      </span>
      <h3 className="mt-5 text-lg font-semibold text-primary-900">{solution.name}</h3>
      <p className="mt-2 flex-1 text-[15px] leading-relaxed text-ink-muted">
        {solution.description}
      </p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600 transition-transform group-hover:translate-x-0.5">
        Explore
        <Icon name="arrow-right" className="h-4 w-4" />
      </span>
    </Link>
  );
}
