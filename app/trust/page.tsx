import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Security",
  description: "How TAMVA approaches consent, auditability, security and regulatory alignment.",
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
    title: "Secure by design",
    description: "The architecture is designed for authenticated APIs, encryption in transit and at rest, and least-privilege access. Each control must be confirmed against the SRD before it is claimed as implemented.",
  },
  {
    title: "Regulatory alignment",
    description: "TAMVA is designed around the Bank of Ghana Draft Open Banking Directive. Regulatory alignment does not imply approval or certification.",
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
              eyebrow="Security & compliance"
              title="Security is built in, not bolted on."
              description="TAMVA handles sensitive financial data. Its architecture is designed around a documented threat model and regulatory requirements."
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
              Specific technical controls are being confirmed against the system requirements before publication. TAMVA does not claim ISO 27001, SOC 2 or PCI DSS certification.
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

