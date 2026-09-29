import type { Metadata } from "next";
import { getCanonicalAlternates } from "@/lib/site";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  alternates: getCanonicalAlternates("/developers"),
  title: "Developers",
  description: "Developer information and integration availability for the TAMVA platform.",
};

const resources = [
  { id: "quickstart", title: "Quickstart", description: "Get sandbox credentials and make your first risk call." },
  { id: "api-reference", title: "API Reference", description: "REST reference for POST /v1/risk/evaluate, including request and response examples." },
  { id: "guides", title: "Guides", description: "Integration patterns, reason-code handling and rule configuration." },
  { id: "data-model", title: "Data Model", description: "The canonical transaction schema and event contracts." },
  { id: "faqs", title: "FAQs", description: "Answers to common questions about access, consent and environments." },
  { id: "changelog", title: "Changelog", description: "A public changelog has not yet been published.", status: "Not yet published" },
  { id: "status", title: "Status", description: "A public service status page is not currently available.", status: "Not yet published" },
];

export default function ResourcesPage() {
  return (
    <>
      <section className="border-b border-surface-border bg-surface-muted py-14 sm:py-20">
        <Container>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Developers" }]} />
          <div className="mt-6">
            <SectionHeading
              eyebrow="Developers"
              title="Developer documentation is in preparation."
              description="The API reference, quickstart, integration guides and sandbox details will be published when verified against the backend contract. Contact the team to discuss current availability."
            />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource) => (
              <article id={resource.id} key={resource.id} className="rounded-xl2 border border-surface-border bg-white p-6 shadow-card sm:p-7">
                <span className="inline-flex rounded-full bg-accent-50 px-3 py-1 text-xs font-semibold text-accent-700">{resource.status ?? "In preparation"}</span>
                <h2 className="mt-4 text-lg font-semibold text-primary-900">{resource.title}</h2>
                <p className="mt-2 leading-relaxed text-ink-muted">{resource.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CTA
        title="Discuss a potential integration."
        description="Ask the TAMVA team about documentation and current sandbox availability."
        primaryLabel="Request Sandbox Access"
        primaryHref="/contact"
      />
    </>
  );
}

