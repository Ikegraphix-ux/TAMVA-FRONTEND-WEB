import type { Metadata } from "next";
import Link from "next/link";
import { getCanonicalAlternates } from "@/lib/site";
import { Container } from "@/components/Container";
import { CTA } from "@/components/CTA";
import { Hero } from "@/components/Hero";
import { LinkButton } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { products } from "@/lib/content";

export const metadata: Metadata = { alternates: getCanonicalAlternates("/") };

const audiences = [
  {
    title: "Individuals",
    description:
      "TAMVA App and Financial Passport are the consumer-facing part of the platform, shaped around financial identity, choice and consent.",
    href: "/solutions/individuals",
  },
  {
    title: "Businesses & institutions",
    description:
      "Explore Verification and Risk Intelligence as product areas for organizations working with identity information and decision context.",
    href: "/solutions",
  },
  {
    title: "Developers",
    description:
      "Find information about APIs, integrations and sandbox access. Technical details are published when verified against the backend contract.",
    href: "/developers",
  },
];

const platformAreas = [
  [
    "Financial identity",
    "TAMVA App and Financial Passport are being developed for the individual experience.",
  ],
  [
    "Verification",
    "Structured workflows are part of TAMVA's product direction for organizations.",
  ],
  [
    "Risk intelligence",
    "Relevant information and signals are organized to support review and decisions.",
  ],
];

const featuredProducts = [
  {
    name: "TAMVA App",
    description:
      "The consumer-facing experience in TAMVA's broader financial technology platform.",
    href: "/products/tamva-app",
  },
  ...products.map((product) => ({
    name: product.name,
    description: product.description,
    href: "/products/" + product.slug,
  })),
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="The TAMVA platform"
            title="One platform for people and the organizations around them."
            description="TAMVA is building connected financial technology for African markets. Ghana is the initial market."
          />
          <p className="mt-8 max-w-3xl leading-relaxed text-ink-muted">
            Individuals, businesses, financial institutions and developers have
            different needs. TAMVA brings its consumer experience and
            organizational product areas under one broader platform direction.
          </p>
        </Container>
      </section>

      <section className="bg-surface-muted py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Products"
            title="Product areas for people and organizations."
            description="Explore the products being developed across the TAMVA platform."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <article
                key={product.name}
                className="rounded-xl2 border border-surface-border bg-white p-6 shadow-card sm:p-7"
              >
                <h3 className="text-xl font-semibold text-primary-900">
                  {product.name}
                </h3>
                <p className="mt-3 leading-relaxed text-ink-muted">
                  {product.description}
                </p>
                <LinkButton
                  href={product.href}
                  variant="ghost"
                  withArrow
                  className="mt-5"
                >
                  Explore
                </LinkButton>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-ink-muted">
            Product descriptions outline TAMVA&apos;s current direction. Contact
            the team to confirm specific capabilities and availability.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="How the platform fits together"
            title="A connected direction across identity, verification and decision support."
            description="TAMVA's product areas are intended to serve individuals and organizations as part of one financial technology platform."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {platformAreas.map(([title, description], index) => (
              <article
                key={title}
                className="rounded-xl2 border border-surface-border bg-white p-6"
              >
                <span className="text-sm font-bold tracking-widest text-accent-600">
                  0{index + 1}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-primary-900">
                  {title}
                </h3>
                <p className="mt-2 leading-relaxed text-ink-muted">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-primary-900 py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Who TAMVA serves"
            title="One platform, designed for different needs."
            description="The platform includes a consumer experience, product areas for businesses and institutions, and integration information for developers."
            light
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {audiences.map((audience) => (
              <Link
                key={audience.title}
                href={audience.href}
                className="rounded-xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:bg-white/[0.08]"
              >
                <h3 className="text-lg font-semibold text-white">
                  {audience.title}
                </h3>
                <p className="mt-2 leading-relaxed text-primary-100">
                  {audience.description}
                </p>
                <span className="mt-4 inline-block text-sm font-semibold text-accent-300">
                  Explore {audience.title.toLowerCase()} →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-xl2 border border-surface-border bg-surface-muted p-7 sm:p-9">
              <p className="text-sm font-semibold uppercase tracking-wide text-accent-600">
                Trust and responsibility
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-primary-900">
                Clarity, consent and accountability.
              </h2>
              <p className="mt-3 leading-relaxed text-ink-muted">
                These principles guide TAMVA&apos;s approach to financial
                identity information and decision support. Public technical and
                certification claims are limited to details that can be verified.
              </p>
              <LinkButton href="/trust" variant="ghost" withArrow className="mt-5">
                Our trust approach
              </LinkButton>
            </article>
            <article className="rounded-xl2 border border-surface-border bg-surface-muted p-7 sm:p-9">
              <p className="text-sm font-semibold uppercase tracking-wide text-accent-600">
                For developers
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-primary-900">
                Integration information for the TAMVA platform.
              </h2>
              <p className="mt-3 leading-relaxed text-ink-muted">
                API specifications, integration guides and sandbox availability
                are being prepared and should be confirmed with the TAMVA team.
              </p>
              <LinkButton
                href="/developers"
                variant="ghost"
                withArrow
                className="mt-5"
              >
                Developer information
              </LinkButton>
            </article>
          </div>
        </Container>
      </section>

      <section className="bg-surface-muted py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Our starting point"
            title="Built in Ghana, with an African outlook."
            description="Ghana is TAMVA's initial market. The platform is being shaped with the ambition to serve financial needs across African markets."
          />
        </Container>
      </section>

      <CTA
        title="Explore what TAMVA is building."
        description="Talk with our team about the platform, intended use cases and current availability."
        primaryLabel="Contact TAMVA"
        primaryHref="/contact"
        secondaryLabel="About TAMVA"
        secondaryHref="/about"
      />
    </>
  );
}
