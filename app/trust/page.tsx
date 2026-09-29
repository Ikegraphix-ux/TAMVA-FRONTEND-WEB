import type { Metadata } from "next";
import { getCanonicalAlternates } from "@/lib/site";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  alternates: getCanonicalAlternates("/trust"),
  title: "Security",
  description: "TAMVA trust principles for consent, traceability and responsible public claims.",
};

const principles = [
  {
    title: "Consent-first data access",
    description: "Customer permission governs access to financial data. Data should be used only within the scope of the consent granted.",
  },
  {
    title: "Traceable decisions",
    description: "TAMVA's decisioning approach includes reason codes and an audit trail so decisions can be reviewed.",
  },
  {
    title: "Certification status",
    description: "TAMVA does not claim ISO 27001, SOC 2 or PCI DSS certification.",
  },
  {
    title: "Responsible claims",
    description: "Product, regulatory and certification statements should be supported by verified sources and evidence.",
  },
  {
    title: "Deterministic and explainable",
    description: "Rules-based decisions with reason codes are designed to make outcomes easier to understand than opaque model-only decisions.",
  },
];

export default function TrustPage() {
  return (
    <>
      <section className="border-b border-white/10 bg-primary-900 py-14 sm:py-20">
        <Container>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Security" }]} />
          <div className="mt-6">
            <SectionHeading
              eyebrow="Security & trust"
              title="A clear approach to trust and security."
              description="TAMVA is developing financial technology products with attention to consent, accountability and responsible handling of information."
              light
            />
          </div>
        </Container>
      </section>

      <section className="bg-primary-900 pb-16 sm:pb-20">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((principle, index) => (
              <article key={principle.title} className="rounded-xl2 border border-white/10 bg-white/[0.04] p-6 sm:p-7">
                <span className="text-sm font-bold tracking-widest text-accent-300">0{index + 1}</span>
                <h2 className="mt-4 text-lg font-semibold text-white">{principle.title}</h2>
                <p className="mt-2 text-[15px] leading-relaxed text-primary-100">{principle.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl rounded-xl2 border border-surface-border bg-surface-muted p-7 sm:p-9">
            <h2 className="text-xl font-semibold text-primary-900">Security details</h2>
            <p className="mt-3 leading-relaxed text-ink-muted">
              TAMVA does not claim ISO 27001, SOC 2 or PCI DSS certification. Technical controls and regulatory status should be discussed with TAMVA through a verified contact channel.
            </p>
          </div>
        </Container>
      </section>

      <CTA
        title="Need a security overview?"
        description="Contact our team to discuss security and compliance questions for your integration."
        primaryLabel="Request a security overview"
        primaryHref="/contact"
      />
    </>
  );
}

