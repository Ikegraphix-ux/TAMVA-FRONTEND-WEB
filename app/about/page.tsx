import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "About",
  description: "Why TAMVA is building financial trust infrastructure for institutions in Ghana and across Africa.",
};

const beliefs = [
  { title: "Explainability is a product, not a feature.", description: "If a decision cannot be explained, it cannot be trusted." },
  { title: "Regulation is an input.", description: "We design around the Bank of Ghana Open Banking Directive from the start." },
  { title: "Consent belongs to the customer.", description: "Financial data flows only with permission." },
  { title: "Start narrow, build right.", description: "We focus on doing transaction risk well before expanding." },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-surface-border bg-primary-900 py-16 sm:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent-500/10 blur-3xl" />
        <Container className="relative">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About" }]} />
          <div className="mt-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-300">About TAMVA</p>
            <h1 className="mt-3 text-h1-mobile font-semibold tracking-tight text-white sm:text-h1">
              Trust is the missing layer in African finance.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-primary-100">
              Financial services in Ghana and across Africa are growing fast, but institutions
              still lack a shared, reliable way to know who they are transacting with and how
              risky a transaction is. TAMVA exists to close that gap.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-accent-600">Our mission</p>
              <h2 className="mt-3 text-h2-mobile font-semibold text-primary-900 sm:text-h2">
                Make trusted financial decisions possible for more people.
              </h2>
            </div>
            <div className="rounded-2xl border border-surface-border bg-surface-muted p-7 sm:p-9">
              <p className="text-lg leading-relaxed text-ink-muted">
                Give every institution the infrastructure to make fast, fair and explainable
                financial decisions, so more people can access trusted financial services.
              </p>
              <div className="mt-8 border-t border-surface-border pt-6">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-accent-600">Where we are</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">
                  Ghana is our launch market. Our roadmap extends to pan-African coverage.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-surface-muted py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="What we believe"
            title="Trust is earned through the details."
            description="These principles shape how we build financial identity and transaction-risk infrastructure."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2">
            {beliefs.map((belief, index) => (
              <li key={belief.title} className="rounded-xl2 border border-surface-border bg-white p-6 sm:p-7">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-50 text-sm font-bold text-accent-700">0{index + 1}</span>
                <h3 className="mt-5 text-lg font-semibold text-primary-900">{belief.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-muted">{belief.description}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Our team" title="People building the trust layer" />
          <div className="mt-8 max-w-3xl rounded-xl2 border border-surface-border bg-white p-7 shadow-card sm:p-9">
            <p className="leading-relaxed text-ink-muted">
              We are building TAMVA with the institutions and communities shaping Africa&apos;s
              financial future.
            </p>
            <p className="mt-4 text-sm italic text-ink-faint">[Founder and team bios, photos and roles to be confirmed.]</p>
          </div>
        </Container>
      </section>

      <CTA
        title="Build trusted finance with us."
        description="Work with us to bring clearer, more explainable financial decisions to institutions and their customers."
        primaryLabel="Request Access"
        primaryHref="/contact"
        secondaryLabel="Careers"
        secondaryHref="/careers"
      />
    </>
  );
}

