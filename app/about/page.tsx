import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "About",
  description: "Technology designed to strengthen trust — who TAMVA is, why it exists, and the principles it follows.",
};

const principles = [
  "Trust is earned through consistent, verifiable behavior — not claimed through marketing.",
  "People should understand and control how their identity information is used.",
  "Structured information should support human decisions, not replace them.",
  "Technology built for African markets should be built with local context in mind.",
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-surface-border bg-surface-muted py-16 sm:py-24">
        <Container>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About" }]} />
          <div className="mt-6">
            <SectionHeading
              eyebrow="About TAMVA"
              title="Technology designed to strengthen trust."
              description="TAMVA builds trust infrastructure for a digital world — identity, verification and risk intelligence brought together in one place."
            />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-h3 font-semibold text-primary-900">Who We Are</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
                TAMVA is a modern African technology company focused on trusted digital identity,
                verification and risk intelligence — infrastructure designed to help organizations
                and individuals make informed decisions.
              </p>
            </div>
            <div>
              <h2 className="text-h3 font-semibold text-primary-900">Why TAMVA Exists</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
                Trust is difficult to establish digitally when identity checks are fragmented and
                risk signals are scattered. TAMVA exists to bring that information together in a
                structured, accountable way.
              </p>
            </div>
            <div>
              <h2 className="text-h3 font-semibold text-primary-900">Mission</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
                To build the trust infrastructure that helps organizations and individuals across
                Africa make informed, confident decisions.
              </p>
            </div>
            <div>
              <h2 className="text-h3 font-semibold text-primary-900">Vision</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
                A digital ecosystem where identity, verification and risk information are handled
                responsibly and are accessible to those who need them.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-primary-900 py-16 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Principles" title="What guides how we build" light />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2">
            {principles.map((principle) => (
              <li
                key={principle}
                className="rounded-xl2 border border-white/10 bg-white/[0.04] p-6 text-[15px] leading-relaxed text-primary-100"
              >
                {principle}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Team" title="The people behind TAMVA" />
          <div className="mt-8 max-w-2xl rounded-xl2 border border-surface-border bg-surface-muted p-8">
            <p className="text-[15px] leading-relaxed text-ink-muted">
              [Team profiles — pending official publication]
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-16 sm:pb-24">
        <Container>
          <SectionHeading eyebrow="Ecosystem" title="Partners & ecosystem" />
          <div className="mt-8 max-w-2xl rounded-xl2 border border-surface-border bg-surface-muted p-8">
            <p className="text-[15px] leading-relaxed text-ink-muted">
              [Partner and ecosystem information — pending official publication]
            </p>
          </div>
        </Container>
      </section>

      <CTA title="Learn more about TAMVA" primaryLabel="Contact us" primaryHref="/contact" />
    </>
  );
}
