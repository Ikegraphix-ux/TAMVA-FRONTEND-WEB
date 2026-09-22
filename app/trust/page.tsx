import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Breadcrumb } from "@/components/Breadcrumb";
import { TrustCard } from "@/components/TrustCard";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Trust & Security",
  description: "The principles TAMVA follows for security, privacy, governance, auditability and responsible data use.",
};

const sections = [
  {
    icon: "security" as const,
    title: "Security",
    description:
      "Access to systems and information is controlled, and security practices are reviewed as the platform evolves.",
  },
  {
    icon: "privacy" as const,
    title: "Privacy",
    description:
      "Personal information is collected and used for the purpose it was provided for, with consent at the center of how identity information is shared.",
  },
  {
    icon: "responsible-data" as const,
    title: "Data protection",
    description:
      "Information is protected in transit and at rest, with access limited to what a given workflow requires.",
  },
  {
    icon: "verification" as const,
    title: "Access control",
    description:
      "Roles and permissions determine what each person or system can see and do within TAMVA.",
  },
  {
    icon: "auditability" as const,
    title: "Auditability",
    description:
      "Verification and risk-related events are recorded so activity can be traced and reviewed.",
  },
  {
    icon: "responsible-data" as const,
    title: "Responsible data use",
    description:
      "Data is used deliberately and in line with its intended purpose, not opportunistically expanded.",
  },
  {
    icon: "governance" as const,
    title: "Governance",
    description:
      "Clear ownership and accountability govern how TAMVA's products and data practices are run.",
  },
];

export default function TrustPage() {
  return (
    <>
      <section className="border-b border-white/10 bg-primary-900 py-14 sm:py-20">
        <Container>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Trust & Security" }]} />
          <div className="mt-6">
            <SectionHeading
              eyebrow="Trust & Security"
              title="Trust is built into the experience."
              description="TAMVA is built around a clear set of principles rather than blanket claims. Here is how those principles apply."
              light
            />
          </div>
        </Container>
      </section>

      <section className="bg-primary-900 pb-20 sm:pb-28">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {sections.map((s) => (
              <TrustCard key={s.title} {...s} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-2xl rounded-xl2 border border-surface-border bg-surface-muted p-8 text-center">
            <p className="text-[15px] leading-relaxed text-ink-muted">
              [Security certifications and compliance details — pending official publication]
            </p>
          </div>
        </Container>
      </section>

      <CTA
        title="Questions about how TAMVA handles trust and security?"
        primaryLabel="Contact us"
        primaryHref="/contact"
      />
    </>
  );
}
