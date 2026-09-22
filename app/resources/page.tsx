import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CTA } from "@/components/CTA";
import { ResourceGrid } from "@/components/ResourceGrid";
import { articles } from "@/lib/content";

export const metadata: Metadata = {
  title: "Resources",
  description: "Documentation, guides, FAQs, insights and announcements from TAMVA.",
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
              title="Documentation, guides and insights."
              description="Everything you need to understand and work with TAMVA, organized by category."
            />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <ResourceGrid articles={articles} />
        </Container>
      </section>

      <CTA
        title="Can't find what you're looking for?"
        description="Reach out and we'll point you in the right direction."
      />
    </>
  );
}
