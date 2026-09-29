import type { Metadata } from "next";
import { getCanonicalAlternates } from "@/lib/site";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  alternates: getCanonicalAlternates("/about"),
  title: "About",
  description:
    "Learn about TAMVA's mission to build financial technology infrastructure for African markets, starting in Ghana.",
};

const beliefs = [
  {
    title: "Build for people and organizations.",
    description:
      "A connected platform should support individuals as well as the businesses and institutions serving them.",
  },
  {
    title: "Make trust part of the infrastructure.",
    description:
      "Identity, information and financial decisions need clear context and accountable use.",
  },
  {
    title: "Consent belongs to the customer.",
    description:
      "People should have clarity and choice in how their information is shared.",
  },
  {
    title: "Start in Ghana. Build for Africa.",
    description:
      "Our initial market is Ghana, with a broader African outlook shaping the platform.",
  },
];

const productAreas = [
  {
    title: "Individuals",
    description:
      "TAMVA App and Financial Passport are being developed as the consumer-facing product direction.",
  },
  {
    title: "Businesses & institutions",
    description:
      "Verification and Risk Intelligence are product areas being shaped for organizational needs.",
  },
  {
    title: "Developers",
    description:
      "API, integration and sandbox information will be published when confirmed against the backend contract.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-surface-border bg-primary-900 py-16 sm:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent-500/10 blur-3xl"
        />
        <Container className="relative">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "About TAMVA" },
            ]}
          />
          <div className="mt-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-300">
              About TAMVA
            </p>
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
              <p className="text-sm font-semibold uppercase tracking-wide text-accent-600">
                Our mission
              </p>
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
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-surface-muted py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="The problem"
            title="People and organizations need clearer ways to work with financial information."
            description="Individuals, businesses and financial institutions can have different needs when they interact. TAMVA is focused on building products around identity, verification and decision context."
          />
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="What we're building"
            title="One platform with products for different needs."
            description="TAMVA's product direction spans a consumer experience, organizational product areas and developer integrations."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {productAreas.map((area) => (
              <article
                key={area.title}
                className="rounded-xl2 border border-surface-border bg-white p-6 shadow-card sm:p-7"
              >
                <h3 className="text-xl font-semibold text-primary-900">
                  {area.title}
                </h3>
                <p className="mt-3 leading-relaxed text-ink-muted">
                  {area.description}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-ink-muted">
            Product descriptions outline TAMVA&apos;s direction. Contact the team
            to confirm specific capabilities and availability.
          </p>
        </Container>
      </section>

      <section className="bg-primary-900 py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Why Africa"
            title="Start in Ghana. Build with an African outlook."
            description="Ghana is TAMVA's initial market. The platform is being shaped with the ambition to serve financial needs across African markets."
            light
          />
        </Container>
      </section>

      <section className="bg-surface-muted py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Our principles"
            title="Trust is earned through the details."
            description="These principles guide how we build financial technology for people and the organizations around them."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2">
            {beliefs.map((belief, index) => (
              <li
                key={belief.title}
                className="rounded-xl2 border border-surface-border bg-white p-6 sm:p-7"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-50 text-sm font-bold text-accent-700">
                  0{index + 1}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-primary-900">
                  {belief.title}
                </h3>
                <p className="mt-2 leading-relaxed text-ink-muted">
                  {belief.description}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl rounded-xl2 border border-surface-border bg-white p-7 text-center shadow-card sm:p-9">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-600">
              Leadership & team
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-primary-900">
              Team profiles are not currently published.
            </h2>
            <p className="mt-3 leading-relaxed text-ink-muted">
              TAMVA will share leadership names, roles and biographies here when
              they are approved for publication.
            </p>
          </div>
        </Container>
      </section>

      <CTA
        title="Work with TAMVA."
        description="Explore career opportunities or contact the team about the platform."
        primaryLabel="Contact TAMVA"
        primaryHref="/contact"
        secondaryLabel="Careers"
        secondaryHref="/careers"
      />
    </>
  );
}
