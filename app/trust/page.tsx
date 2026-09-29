import type { Metadata } from "next";
import { getCanonicalAlternates } from "@/lib/site";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  alternates: getCanonicalAlternates("/trust"),
  title: "Security & Trust",
  description: "Public security, certification, privacy and vulnerability reporting information for TAMVA.",
};

const disclosures = [
  {
    title: "Security information",
    description: "Detailed technical security controls are not published on this site. Institutions can contact TAMVA to discuss security questions relevant to a potential integration.",
  },
  {
    title: "Certifications",
    description: "TAMVA does not claim ISO 27001, SOC 2 or PCI DSS certification.",
  },
  {
    title: "Privacy and data protection",
    description: "A public privacy statement is not currently available on this site. Do not submit personal, identity or financial data through the general contact form.",
  },
  {
    title: "Vulnerability reporting",
    description: "Use the contact form to report a suspected vulnerability. No dedicated security email is published. Do not include credentials or real customer data.",
  },
  {
    title: "Service status",
    description: "TAMVA does not currently publish a public service status page.",
  },
];

export default function TrustPage() {
  return (
    <>
      <section className="border-b border-white/10 bg-primary-900 py-14 sm:py-20">
        <Container>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Security & Trust" }]} />
          <div className="mt-6">
            <SectionHeading
              eyebrow="Security & trust"
              title="Trust information for TAMVA."
              description="This page shares the security and trust information currently available for public review."
              light
            />
          </div>
        </Container>
      </section>

      <section className="bg-primary-900 pb-16 sm:pb-20">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {disclosures.map((item, index) => (
              <article key={item.title} className="rounded-xl2 border border-white/10 bg-white/[0.04] p-6 sm:p-7">
                <span className="text-sm font-bold tracking-widest text-accent-300">0{index + 1}</span>
                <h2 className="mt-4 text-lg font-semibold text-white">{item.title}</h2>
                <p className="mt-2 text-[15px] leading-relaxed text-primary-100">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CTA
        title="Have a security question?"
        description="Contact TAMVA to discuss an institutional security enquiry or report a suspected vulnerability."
        primaryLabel="Contact TAMVA"
        primaryHref="/contact"
      />
    </>
  );
}
