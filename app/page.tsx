import { Container } from "@/components/Container";
import { CTA } from "@/components/CTA";
import { FeatureCard } from "@/components/FeatureCard";
import { Hero } from "@/components/Hero";
import { LinkButton } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { StepCard } from "@/components/StepCard";
import { Reveal } from "@/components/Reveal";

const features = [
  { icon: "risk" as const, title: "Real-Time Risk Decisions", description: "Evaluate a transaction in a single API call and get a clear approve, review or decline signal." },
  { icon: "auditability" as const, title: "Explainable by Design", description: "Every decision returns reason codes your risk and compliance teams can read, audit and defend." },
  { icon: "privacy" as const, title: "Consent-Aware Data", description: "Connect financial data only with the customer's consent, in line with Open Banking principles." },
  { icon: "businesses" as const, title: "For PSPs & Fintechs", description: "Add fraud and risk controls without building a risk engine from scratch." },
  { icon: "organizations" as const, title: "For Lenders & Banks", description: "Enrich credit and onboarding decisions with behavioural signals from a canonical transaction ledger." },
  { icon: "governance" as const, title: "Built for Ghana", description: "Grounded in the Bank of Ghana Draft Open Banking Directive, with a path to pan-African expansion." },
];

const steps = [
  { number: "01", icon: "discover" as const, title: "Connect", description: "Get sandbox credentials and send transactions to TAMVA through the REST API." },
  { number: "02", icon: "analyze" as const, title: "Evaluate", description: "Our rules engine and behavioural features score each transaction in real time." },
  { number: "03", icon: "auditability" as const, title: "Explain", description: "Receive a decision with reason codes, and keep a full audit trail." },
];

const principles = [
  "Reason codes on every decision: no black boxes",
  "Consent first: customer permission governs data access",
  "Ghana first: regulatory grounding from day one",
  "Pan-African ready: one architecture, many markets",
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="One API. Clear decisions."
            title="Financial trust infrastructure for institutions"
            description="TAMVA delivers real-time, explainable transaction-risk decisions and consent-aware financial data through one API. Built in Ghana, designed for Africa."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Reveal key={feature.title}>
                <FeatureCard {...feature} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface-muted py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="How TAMVA works"
            title="From sandbox to shadow-mode pilot"
            description="Getting started is simple. Three steps take you from your first API call to a pilot your team can evaluate."
          />
          <div className="mt-14 flex flex-col gap-12 sm:flex-row sm:gap-8">
            {steps.map((step, index) => (
              <Reveal key={step.number} className="flex-1">
                <StepCard {...step} isLast={index === steps.length - 1} />
              </Reveal>
            ))}
          </div>
          <LinkButton href="/resources" variant="ghost" withArrow className="mt-12">
            Explore the API
          </LinkButton>
        </Container>
      </section>

      <section className="bg-primary-900 py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Why TAMVA"
            title="Trust you can see in every decision."
            description="Financial institutions need risk signals they can understand, govern and explain. TAMVA puts those principles at the centre of each transaction decision."
            light
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {principles.map((principle) => (
              <li key={principle} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-5 text-primary-100">
                <span aria-hidden="true" className="mt-1 text-accent-300">✓</span>
                <span>{principle}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="rounded-2xl border border-surface-border bg-white p-7 shadow-card sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-accent-600">For developers</p>
              <h2 className="mt-2 text-h2-mobile font-semibold text-primary-900 sm:text-h2">Explore our documentation.</h2>
              <p className="mt-3 max-w-2xl leading-relaxed text-ink-muted">Endpoints, schemas and integration guides for <code className="rounded bg-surface-muted px-1.5 py-0.5 text-sm">POST /v1/risk/evaluate</code> and more.</p>
            </div>
            <LinkButton href="/resources" withArrow className="mt-6 shrink-0 sm:mt-0">View Documentation</LinkButton>
          </div>
        </Container>
      </section>

      <CTA
        title="Ready to build trust into every transaction?"
        description="Talk to our partnerships team about sandbox access and your use case."
        primaryLabel="Request Access"
        primaryHref="/contact"
        secondaryLabel="About TAMVA"
        secondaryHref="/about"
      />
    </>
  );
}

