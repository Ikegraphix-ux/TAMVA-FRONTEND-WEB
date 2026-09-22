import type { IconName } from "@/lib/types";
import { Icon } from "./Icon";

export function TrustCard({
  icon,
  title,
  description,
}: {
  icon: IconName;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl2 border border-white/10 bg-white/[0.04] p-7">
      <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-500/15 text-accent-300">
        <Icon name={icon} className="h-5 w-5" />
      </span>
      <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-[15px] leading-relaxed text-primary-200">{description}</p>
    </div>
  );
}
