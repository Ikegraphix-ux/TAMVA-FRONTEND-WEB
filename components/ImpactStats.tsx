import { Container } from "./Container";
import { Icon } from "./Icon";
import type { IconName } from "@/lib/types";

const stats: { icon: IconName; label: string; value: string }[] = [
  {
    icon: "individuals",
    label: "People reached",
    value: "[Pending official figures]",
  },
  {
    icon: "security",
    label: "Platform reliability",
    value: "[Pending official figures]",
  },
  {
    icon: "verification",
    label: "Security standard",
    value: "[Pending certification status]",
  },
  {
    icon: "organizations",
    label: "Coverage",
    value: "Built for Africa",
  },
];

export function ImpactStats() {
  return (
    <section className="bg-primary-900 py-16 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-300">
              Our impact
            </p>
            <h2 className="mt-3 text-h2-mobile sm:text-h2 font-semibold text-white">
              Building a more inclusive financial future.
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-primary-200">
              TAMVA is more than a platform — it&apos;s a movement to expand trust, access and
              opportunity across Africa. We&apos;ll share verified figures here as they&apos;re published.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl2 border border-white/10 bg-white/[0.04] p-6"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-500/15 text-accent-300">
                  <Icon name={stat.icon} className="h-4 w-4" />
                </span>
                <p className="mt-4 text-sm font-semibold text-white">{stat.value}</p>
                <p className="mt-1 text-xs text-primary-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
