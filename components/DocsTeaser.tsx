import Link from "next/link";
import { Container } from "./Container";
import { Icon } from "./Icon";
import { LinkButton } from "./Button";
import type { IconName } from "@/lib/types";

const items: { icon: IconName; title: string; description: string }[] = [
  {
    icon: "docs",
    title: "API Docs",
    description: "Explore endpoints and integration references.",
  },
  {
    icon: "guides",
    title: "Developer Guides",
    description: "Step-by-step guides for integrating TAMVA.",
  },
  {
    icon: "faq",
    title: "FAQs",
    description: "Answers to common questions about TAMVA.",
  },
];

export function DocsTeaser() {
  return (
    <section className="border-t border-surface-border py-16 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-600">
              Developers
            </p>
            <h2 className="mt-3 text-h3 font-semibold text-primary-900">
              Explore our documentation
            </h2>
            <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-ink-muted">
              Everything you need to understand and integrate with TAMVA.
            </p>
            <LinkButton href="/resources" variant="ghost" withArrow className="mt-6">
              View documentation
            </LinkButton>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {items.map((item) => (
              <Link
                key={item.title}
                href="/resources"
                className="rounded-xl2 border border-surface-border bg-surface-muted p-5 transition-colors hover:border-accent-200 hover:bg-white"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-accent-600 shadow-card">
                  <Icon name={item.icon} className="h-4 w-4" />
                </span>
                <h3 className="mt-4 text-sm font-semibold text-primary-900">{item.title}</h3>
                <p className="mt-1 text-sm text-ink-muted">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
