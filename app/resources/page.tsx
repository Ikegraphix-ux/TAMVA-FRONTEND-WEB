import type { Metadata } from "next";
import Link from "next/link";
import { getCanonicalAlternates } from "@/lib/site";
import { Container } from "@/components/Container";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CTA } from "@/components/CTA";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  alternates: getCanonicalAlternates("/resources"),
  title: "Resources",
  description:
    "Articles, insights, research and general financial technology information for African markets.",
};

const topics = [
  {
    title: "Articles & insights",
    description: "Perspectives on financial technology and the changing financial landscape.",
  },
  {
    title: "Research",
    description: "Research and explainers on financial services and data in African markets.",
  },
  {
    title: "Fintech education",
    description: "Accessible material about fintech concepts and how the industry works.",
  },
  {
    title: "Open banking",
    description: "General educational information, with regulatory references checked against verified sources before publication.",
  },
  {
    title: "Company announcements",
    description: "Updates about TAMVA when they are approved for public release.",
  },
  {
    title: "Industry guides",
    description: "Practical, non-technical guides for people working across financial services.",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <section className="border-b border-surface-border bg-surface-muted py-14 sm:py-20">
        <Container>
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Resources" },
            ]}
          />
          <div className="mt-6">
            <SectionHeading
              eyebrow="Resources"
              title="Ideas and information for a changing financial landscape."
              description="Explore general articles, insights, research and guides about fintech and financial services across African markets."
            />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Explore topics"
            title="General resources for the TAMVA community."
            description="These topics are for general information and editorial content. Technical integration instructions live in the Developers section."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic) => (
              <article
                key={topic.title}
                className="rounded-xl2 border border-surface-border bg-white p-6 shadow-card sm:p-7"
              >
                <span className="inline-flex rounded-full bg-accent-50 px-3 py-1 text-xs font-semibold text-accent-700">
                  Coming soon
                </span>
                <h2 className="mt-4 text-lg font-semibold text-primary-900">
                  {topic.title}
                </h2>
                <p className="mt-2 leading-relaxed text-ink-muted">
                  {topic.description}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-8 text-sm leading-relaxed text-ink-muted">
            No articles are currently published. Public material will be reviewed
            for accuracy and approval before it appears here.
          </p>
          <Link
            href="/developers"
            className="mt-5 inline-block font-semibold text-primary-800 hover:text-accent-700"
          >
            Looking for technical documentation? Visit Developers
            <span aria-hidden="true"> →</span>
          </Link>
        </Container>
      </section>

      <CTA
        title="Looking for technical integration information?"
        description="Developer documentation, API topics and current sandbox information are listed separately."
        primaryLabel="Visit Developers"
        primaryHref="/developers"
        secondaryLabel="Contact TAMVA"
        secondaryHref="/contact"
      />
    </>
  );
}
