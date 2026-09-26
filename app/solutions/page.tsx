import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Solutions",
  description: "Explainable transaction-risk infrastructure for the institutions that move Africa's money.",
};

const audiences = [
  {
    title: "Payment Service Providers",
    description: "Screen transactions in real time, reduce fraud losses and support healthy approval rates.",
  },
  {
    title: "Digital Lenders",
    description: "Add behavioural risk signals to onboarding and lending decisions, with reason codes behind each outcome.",
  },
  {
    title: "Banks",
    description: "Layer explainable risk decisions over existing channels, with an audit trail designed for review.",
  },
  {
    title: "Fintechs",
    description: "Use TAMVA's risk layer to support fraud and risk workflows as you build and scale your product.",
  },
];

const useCases = [
  "Transaction fraud screening",
  "Onboarding risk checks",
  "Lending decision support",
  "Ongoing monitoring",
  "Audit reporting",
];

export default function SolutionsPage() {
  return (
    <>
      <section className="border-b border-surface-border bg-surface-muted py-14 sm:py-20">
        <Container>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Solutions" }]} />
          <div className="mt-6">
            <SectionHeading
              eyebrow="Solutions"
              title="Built for the institutions that move Africa's money."
              description="TAMVA gives financial institutions a shared risk layer for clearer, more explainable transaction decisions."
            />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2">
            {audiences.map((audience, index) => (
              <article key={audience.title} className="rounded-xl2 border border-surface-border bg-white p-7 shadow-card sm:p-8">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-50 text-sm font-bold text-accent-700">0{index + 1}</span>
                <h2 className="mt-5 text-h3 font-semibold text-primary-900">{audience.title}</h2>
                <p className="mt-3 leading-relaxed text-ink-muted">{audience.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-16">
            <SectionHeading eyebrow="Use cases" title="Risk workflows, with context."
              description="Use TAMVA to support the transaction and onboarding workflows your institution needs to review." />
            <ul className="mt-8 flex flex-wrap gap-3">
              {useCases.map((useCase) => (
                <li key={useCase} className="rounded-full border border-surface-border bg-surface-muted px-4 py-2 text-sm font-medium text-primary-900">{useCase}</li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <CTA
        title="Not sure where you fit?"
        description="Talk with our team about your institution, workflows and integration needs."
        primaryLabel="Talk to our team"
        primaryHref="/contact"
      />
    </>
  );
}

