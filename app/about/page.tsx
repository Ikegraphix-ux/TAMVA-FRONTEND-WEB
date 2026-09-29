import type { Metadata } from "next";
import { getCanonicalAlternates } from "@/lib/site";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  alternates: getCanonicalAlternates("/about"),
  title: "About",
  description: "Why TAMVA is building financial technology infrastructure for African markets, starting in Ghana.",
};

const beliefs = [
  { title: "Build for people and organizations.", description: "A connected platform should support individuals as well as the businesses and institutions serving them." },
  { title: "Make trust part of the infrastructure.", description: "Identity, information and financial decisions need clear context and accountable use." },
  { title: "Consent belongs to the customer.", description: "People should have clarity and choice in how their information is shared." },
  { title: "Start in Ghana. Build for Africa.", description: "Our initial market is Ghana, with a broader African outlook shaping the platform." },
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
              Financial technology infrastructure for African markets.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-primary-100">
              TAMVA is building a platform for people and organizations to engage
              with financial services through clearer identity, information and
              decision support. Ghana is our initial market; our outlook extends
              across Africa.
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
                Make trusted financial services more accessible.
              </h2>
            </div>
            <div className="rounded-2xl border border-surface-border bg-surface-muted p-7 sm:p-9">
              <p className="text-lg leading-relaxed text-ink-muted">
                We are developing financial technology infrastructure for
                individuals, businesses and institutions, with products designed
                to support more informed and trustworthy financial interactions.
              </p>
              <div className="mt-8 border-t border-surface-border pt-6">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-accent-600">Where we are</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">
                  Ghana is TAMVA&apos;s initial market. The platform is being
                  shaped with the ambition to serve financial needs across
                  African markets.
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
            description="These principles guide how we build financial technology for people and the organizations around them."
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

      <CTA
        title="Build trusted finance with us."
        description="Work with us to bring clearer financial technology to people, businesses and institutions."
        primaryLabel="Contact TAMVA"
        primaryHref="/contact"
        secondaryLabel="Careers"
        secondaryHref="/careers"
      />
    </>
  );
}
