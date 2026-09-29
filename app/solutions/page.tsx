import type { Metadata } from "next";
import Link from "next/link";
import { getCanonicalAlternates } from "@/lib/site";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  alternates: getCanonicalAlternates("/solutions"),
  title: "Solutions",
  description:
    "Explore how TAMVA's financial technology platform is being shaped for individuals, businesses, fintechs and financial institutions.",
};

const audiences = [
  {
    id: "individuals",
    title: "Individuals",
    description:
      "TAMVA App and Financial Passport form the consumer-facing direction of the platform, with financial identity, choice and consent at its center.",
    href: "/solutions/individuals",
  },
  {
    id: "businesses",
    title: "Businesses",
    description:
      "Explore Verification and Risk Intelligence as product areas intended to support organizational identity and information workflows.",
    href: "/solutions/businesses",
  },
  {
    id: "fintechs",
    title: "Fintechs",
    description:
      "Learn about TAMVA's broader platform direction and contact the team to discuss integration information and current availability.",
    href: "/solutions#fintechs",
  },
  {
    id: "financial-institutions",
    title: "Financial institutions",
    description:
      "Explore how identity, verification and risk information fit within TAMVA's product direction for institutions.",
    href: "/solutions/organizations",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <section className="border-b border-surface-border bg-primary-900 py-14 sm:py-20">
        <Container>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Solutions" }]} />
          <div className="mt-8 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-300">
              Who TAMVA serves
            </p>
            <h1 className="mt-3 text-h1-mobile font-semibold tracking-tight text-white sm:text-h1">
              Financial technology for people and the organizations around them.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-primary-100">
              TAMVA is building a connected platform for individuals, businesses,
              fintechs and financial institutions. Ghana is the initial market,
              with a broader African outlook.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Solutions"
            title="One platform. Different needs."
            description="Explore the audiences TAMVA is building for and the product areas connected to each."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {audiences.map((audience, index) => (
              <article
                id={audience.id}
                key={audience.id}
                className="rounded-xl2 border border-surface-border bg-white p-7 shadow-card sm:p-8"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-50 text-sm font-bold text-accent-700">
                  0{index + 1}
                </span>
                <h2 className="mt-5 text-h3 font-semibold text-primary-900">
                  {audience.title}
                </h2>
                <p className="mt-3 leading-relaxed text-ink-muted">
                  {audience.description}
                </p>
                <Link
                  href={audience.href}
                  className="mt-5 inline-block font-semibold text-primary-800 hover:text-accent-700"
                >
                  Explore {audience.title.toLowerCase()} <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
          <p className="mt-8 text-sm leading-relaxed text-ink-muted">
            Product details describe TAMVA&apos;s current direction. Contact the
            team to confirm specific capabilities and availability.
          </p>
        </Container>
      </section>

      <CTA
        title="Find the right conversation."
        description="Talk with the TAMVA team about your needs, integration questions and current product availability."
        primaryLabel="Contact TAMVA"
        primaryHref="/contact"
      />
    </>
  );
}
