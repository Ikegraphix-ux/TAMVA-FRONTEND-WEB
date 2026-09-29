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
      "Explore TAMVA App and Financial Passport, the consumer-facing product direction shaped around identity, choice and consent.",
    href: "/solutions/individuals",
  },
  {
    title: "Businesses",
    description:
      "Learn about Verification and Risk Intelligence as product areas for business workflows.",
    href: "/solutions/businesses",
  },
  {
    title: "Fintechs",
    description:
      "Discuss how TAMVA's platform may fit your product and integration needs.",
    href: "/solutions#fintechs",
  },
  {
    title: "Financial institutions",
    description:
      "Explore TAMVA's broader product direction for institutional identity and information workflows.",
    href: "/solutions/organizations",
  },
];

const platformAreas = [
  [
    "For individuals",
    "TAMVA App and Financial Passport are being developed as part of the consumer experience.",
  ],
  [
    "For organizations",
    "Verification and Risk Intelligence describe product areas for businesses and institutions.",
  ],
  [
    "For developers",
    "Integration materials are being prepared and will be published when confirmed against the backend contract.",
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
            title="Financial technology infrastructure for African markets."
            description="TAMVA is building connected products for people and organizations. Ghana is the initial market, with a broader African outlook."
          />
          <p className="mt-8 max-w-3xl leading-relaxed text-ink-muted">
            People and organizations need clear, reliable ways to engage with
            financial services. TAMVA is developing a platform that brings
            consumer experiences, organizational products and developer
            integrations under one direction.
          </p>
        </Container>
      </section>

      <section className="bg-surface-muted py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Products"
            title="Four product areas. One broader platform."
            description="Explore TAMVA App, Financial Passport, Risk Intelligence and Verification."
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
            eyebrow="How TAMVA works"
            title="Connected product areas for different financial needs."
            description="TAMVA brings an individual experience together with organizational workflows and developer integration information."
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
            title="Designed around people and their financial partners."
            description="TAMVA is building for individuals, businesses, fintechs and financial institutions."
            light
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
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
          <SectionHeading
            eyebrow="Security & trust"
            title="Clear principles. Careful public claims."
            description="TAMVA shares trust and security information that can be supported, and identifies areas where details are not yet publicly available."
          />
          <div className="mt-8 rounded-xl2 border border-surface-border bg-surface-muted p-7 sm:p-9">
            <p className="max-w-3xl leading-relaxed text-ink-muted">
              We aim to make financial identity and information use understandable.
              Our public trust page describes current disclosures and how to
              contact the team with questions.
            </p>
            <LinkButton href="/trust" variant="ghost" withArrow className="mt-5">
              Visit Security & Trust
            </LinkButton>
          </div>
        </Container>
      </section>

      <section className="bg-surface-muted py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Developers"
            title="APIs, integrations and documentation."
            description="Developer information for the TAMVA platform is being prepared. API details and sandbox availability should be confirmed with the team."
          />
          <div className="mt-6 flex flex-wrap gap-4">
            <LinkButton href="/developers" withArrow>
              Developer documentation
            </LinkButton>
            <LinkButton href="/contact" variant="secondary">
              Ask about sandbox access
            </LinkButton>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
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
