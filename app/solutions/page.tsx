import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { SolutionCard } from "@/components/SolutionCard";
import { CTA } from "@/components/CTA";
import { Breadcrumb } from "@/components/Breadcrumb";
import { solutions } from "@/lib/content";

export const metadata: Metadata = {
  title: "Solutions",
  description: "Built for different trust needs — organizations, businesses, investigators and individuals.",
};

export default function SolutionsPage() {
  return (
    <>
      <section className="border-b border-surface-border bg-surface-muted py-14 sm:py-20">
        <Container>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Solutions" }]} />
          <div className="mt-6">
            <SectionHeading
              eyebrow="Solutions"
              title="Built for different trust needs."
              description="TAMVA supports different kinds of users, each with a distinct relationship to trust and information."
            />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {solutions.map((solution) => (
              <SolutionCard key={solution.slug} solution={solution} />
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
