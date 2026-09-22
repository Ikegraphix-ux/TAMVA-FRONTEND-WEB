import Link from "next/link";
import type { IconName } from "@/lib/types";
import { Icon } from "./Icon";

export function FeatureCard({
  icon,
  title,
  description,
  href,
}: {
  icon: IconName;
  title: string;
  description: string;
  href?: string;
}) {
  return (
    <div className="group flex h-full flex-col rounded-xl2 border border-surface-border bg-white p-7 shadow-card transition-shadow duration-200 hover:shadow-card-hover">
      <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent-50 text-accent-600">
        <Icon name={icon} className="h-6 w-6" />
      </span>
      <h3 className="mt-5 text-h3 font-semibold text-primary-900">{title}</h3>
      <p className="mt-2 flex-1 text-[15px] leading-relaxed text-ink-muted">{description}</p>
      {href && (
        <Link
          href={href}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600 transition-transform group-hover:translate-x-0.5"
        >
          Learn more
          <Icon name="arrow-right" className="h-4 w-4" />
        </Link>
      )}
    </div>
  );
}
