import type { Metadata } from "next";
import { getCanonicalAlternates } from "@/lib/site";
import { Container } from "@/components/Container";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SectionHeading } from "@/components/SectionHeading";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  alternates: getCanonicalAlternates("/resources"),
  title: "Resources",
  description: "Articles, insights and general information about financial technology in African markets.",
};

export default function ResourcesPage() {
  return (
    <>
      <section className="border-b border-surface-border bg-surface-muted py-14 sm:py-20">
        <Container>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Resources" }]} />
          <div className="mt-6">
            <SectionHeading
              eyebrow="Resources"
              title="Ideas and information for a changing financial landscape."
              description="This section will bring together articles, insights, research and practical guides about financial technology and financial services across African markets."
            />
          </div>
        </Container>
      </section>
      <section className="py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl rounded-xl2 border border-surface-border bg-white p-7 shadow-card sm:p-9">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-600">No articles published yet</p>
            <h2 className="mt-3 text-xl font-semibold text-primary-900">Resources are being prepared.</h2>
            <p className="mt-3 leading-relaxed text-ink-muted">
              Articles and research will appear here after they are reviewed and approved for publication.
            </p>
          </div>
        </Container>
      </section>
      <CTA
        title="Looking for technical integration information?"
        description="Developer documentation and current sandbox availability are listed separately."
        primaryLabel="Visit Developers"
        primaryHref="/developers"
        secondaryLabel="Contact TAMVA"
        secondaryHref="/contact"
      />
    </>
  );
}
