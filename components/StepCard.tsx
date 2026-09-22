import type { IconName } from "@/lib/types";
import { Icon } from "./Icon";

export function StepCard({
  number,
  icon,
  title,
  description,
  isLast = false,
}: {
  number: string;
  icon: IconName;
  title: string;
  description: string;
  isLast?: boolean;
}) {
  return (
    <div className="relative flex flex-1 flex-col items-start">
      {!isLast && (
        <span
          aria-hidden="true"
          className="absolute left-6 top-6 hidden h-px w-full bg-surface-border sm:block"
        />
      )}
      <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary-900 text-white">
        <Icon name={icon} className="h-5 w-5" />
      </span>
      <p className="mt-4 text-sm font-semibold text-accent-600">{number}</p>
      <h3 className="mt-1 text-lg font-semibold text-primary-900">{title}</h3>
      <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">{description}</p>
    </div>
  );
}
