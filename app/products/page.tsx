import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Container } from "@/components/Container";
import { CTA } from "@/components/CTA";
import { SectionHeading } from "@/components/SectionHeading";
import { getCanonicalAlternates } from "@/lib/site";

export const metadata: Metadata = {
  alternates: getCanonicalAlternates("/products"),
  title: "Products",
  description:
    "Explore TAMVA's financial technology platform for individuals, businesses, institutions and developers across African markets.",
};

const groups = [
  {
    eyebrow: "For individuals",
    title: "A consumer experience",
    description:
      "TAMVA App and Financial Passport are the consumer-facing part of the platform, shaped around financial identity, choice and consent.",
    links: [
      { label: "TAMVA App", href: "/products/tamva-app" },
      { label: "Financial Passport", href: "/products/passport" },
    ],
  },
  {
    eyebrow: "For businesses and institutions",
    title: "Tools for organizational workflows",
    description:
      "Verification and Risk Intelligence describe the platform's institutional product areas for identity checks and decision context.",
    links: [
      { label: "Verification", href: "/products/verification" },
      { label: "Risk Intelligence", href: "/products/risk-intelligence" },
      { label: "Solutions", href: "/solutions" },
    ],
  },
  {
    eyebrow: "For developers",
    title: "Integration information",
    description:
      "Explore developer materials for APIs, integrations and sandbox access. Technical documentation is being prepared against the backend contract.",
    links: [{ label: "Developer documentation", href: "/developers" }],
  },
];

export default function ProductsPage() {
  return (
    <>
      <section className="border-b border-surface-border bg-primary-900 py-14 sm:py-20">
        <Container>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Products" }]} />
          <div className="mt-8 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-300">
              TAMVA platform
            </p>
            <h1 className="mt-3 text-h1-mobile font-semibold tracking-tight text-white sm:text-h1">
              Financial technology infrastructure for African markets.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-primary-100">
              TAMVA is building connected products for individuals, businesses,
              financial institutions and developers. Ghana is the initial
              market, with a broader African outlook.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="One platform"
            title="Different experiences, connected by a shared direction."
            description="Explore the product areas being developed for people and the organizations that serve them."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {groups.map((group) => (
              <article
                key={group.title}
                className="flex flex-col rounded-xl2 border border-surface-border bg-white p-7 shadow-card sm:p-8"
              >
                <p className="text-sm font-semibold uppercase tracking-wide text-accent-600">
                  {group.eyebrow}
                </p>
                <h2 className="mt-3 text-h3 font-semibold text-primary-900">
                  {group.title}
                </h2>
                <p className="mt-3 flex-1 leading-relaxed text-ink-muted">
                  {group.description}
                </p>
                <ul className="mt-6 flex flex-col gap-3 border-t border-surface-border pt-5">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="font-semibold text-primary-800 hover:text-accent-700"
                      >
                        {link.label} <span aria-hidden="true">→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="mt-8 text-sm leading-relaxed text-ink-muted">
            Product descriptions outline TAMVA&apos;s current product direction.
            Contact the team to confirm specific capabilities and availability.
          </p>
        </Container>
      </section>

      <CTA
        title="Explore what TAMVA is building."
        description="Talk with the team about the platform, current product direction and availability."
        primaryLabel="Contact TAMVA"
        primaryHref="/contact"
        secondaryLabel="Developer information"
        secondaryHref="/developers"
      />
    </>
  );
}
