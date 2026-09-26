import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Products",
  description: "Transaction-risk decisioning and consent-aware financial data infrastructure for institutions.",
};

const buildingBlocks = [
  {
    id: "risk-decision-api",
    number: "01",
    title: "Risk Decision API",
    description: "Evaluate transactions in real time through POST /v1/risk/evaluate. Each response returns a decision, risk level and reason codes.",
  },
  {
    id: "rules-engine",
    number: "02",
    title: "Rules Engine",
    description: "A deterministic, configurable rules layer designed for predictable behaviour, auditability and tuning with your risk team.",
  },
  {
    id: "behavioural-features",
    number: "03",
    title: "Behavioural Features",
    description: "Signals computed from transaction history—such as velocity, amount patterns and recurring behaviour—can feed each decision.",
  },
  {
    id: "canonical-ledger",
    number: "04",
    title: "Canonical Transaction Ledger",
    description: "A normalised transaction schema helps make data from different sources consistent and comparable.",
  },
];

export default function ProductsPage() {
  return (
    <>
      <section className="border-b border-surface-border bg-surface-muted py-14 sm:py-20">
        <Container>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Products" }]} />
          <div className="mt-6">
            <SectionHeading
              eyebrow="Products"
              title="One platform. Four building blocks."
              description="Start with transaction-risk decisioning and add consent-aware data connectivity as you grow."
            />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2">
            {buildingBlocks.map((block) => (
              <article id={block.id} key={block.id} className="rounded-xl2 border border-surface-border bg-white p-7 shadow-card sm:p-8">
                <p className="text-sm font-bold tracking-widest text-accent-600">{block.number}</p>
                <h2 className="mt-4 text-h3 font-semibold text-primary-900">{block.title}</h2>
                <p className="mt-3 leading-relaxed text-ink-muted">{block.description}</p>
              </article>
            ))}
          </div>

          <div id="data-connectivity" className="mt-6 rounded-xl2 border border-accent-200 bg-accent-50 p-7 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-700">On the roadmap</p>
            <h2 className="mt-3 text-xl font-semibold text-primary-900">Consent-Aware Data Connectivity</h2>
            <p className="mt-2 max-w-3xl leading-relaxed text-ink-muted">
              Connect customer financial data through consent flows aligned with Open Banking principles. Availability and timing are to be confirmed.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-h3 font-semibold text-primary-900">Illustrative response</h2>
            <p className="mt-2 text-ink-muted">Example only; final fields and reason codes depend on the API specification.</p>
            <pre className="mt-5 overflow-x-auto rounded-xl2 bg-primary-900 p-6 text-sm leading-relaxed text-primary-100"><code>{`{
  "decision": "review",
  "risk_level": "medium",
  "reason_codes": ["VELOCITY_HIGH", "NEW_DEVICE"],
  "decision_id": "dec_..."
}`}</code></pre>
          </div>
        </Container>
      </section>

      <CTA
        title="Build with the TAMVA API."
        description="Explore the integration overview or request sandbox access for your team."
        primaryLabel="See the API docs"
        primaryHref="/resources"
        secondaryLabel="Request Sandbox Access"
        secondaryHref="/contact"
      />
    </>
  );
}

