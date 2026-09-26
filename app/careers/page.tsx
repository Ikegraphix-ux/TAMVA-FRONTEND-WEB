import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Careers",
  description: "Help build the trust layer for African finance with TAMVA.",
};

const waysOfWorking = [
  "Ship early and iterate with partners",
  "Own your work end to end",
  "Write things down: clear docs, clear decisions",
  "Build for the market we live in",
];

export default function CareersPage() {
  return (
    <>
      <section className="border-b border-surface-border bg-surface-muted py-14 sm:py-20">
        <Container>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Careers" }]} />
          <div className="mt-6">
            <SectionHeading
              eyebrow="Careers"
              title="Help build the trust layer for African finance."
              description="We're a small team solving a hard problem: making financial decisions fast, fair and explainable. If you care about fintech infrastructure, come build it with us."
            />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading eyebrow="How we work" title="Build carefully. Learn quickly." />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {waysOfWorking.map((item, index) => (
              <li key={item} className="flex items-start gap-4 rounded-xl2 border border-surface-border bg-white p-5 shadow-card">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-50 text-sm font-bold text-accent-700">0{index + 1}</span>
                <span className="pt-1 leading-relaxed text-primary-900">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-14 rounded-xl2 border border-surface-border bg-surface-muted p-7 sm:p-9">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-600">Open roles</p>
            <h2 className="mt-3 text-xl font-semibold text-primary-900">We&apos;re confirming current opportunities.</h2>
            <p className="mt-2 leading-relaxed text-ink-muted">
              Roles such as Backend Engineer, Risk Analyst, Product Designer and Partnerships Lead are examples only; current openings are to be confirmed.
            </p>
            <p className="mt-3 text-sm text-ink-faint">No role fits? Contact us with your CV and a short note. A careers email address will be added once confirmed.</p>
          </div>
        </Container>
      </section>

      <CTA
        title="Come build with us."
        description="Get in touch to ask about opportunities at TAMVA."
        primaryLabel="Contact TAMVA"
        primaryHref="/contact"
      />
    </>
  );
}

