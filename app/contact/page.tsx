import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ContactForm } from "@/components/ContactForm";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact TAMVA about partnerships, sandbox access and press enquiries.",
};

const contactDetails = [
  {
    icon: "docs" as const,
    label: "Email",
    value: "[Company email — pending official publication]",
  },
  {
    icon: "organizations" as const,
    label: "Office",
    value: "Accra, Ghana",
  },
];

export default function ContactPage() {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
        <div className="mt-6">
          <SectionHeading
            eyebrow="Contact"
            title="Let's talk."
            description="Partnerships, sandbox access and press enquiries—tell us how we can help and our team will follow up."
          />
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-xl2 border border-surface-border bg-white p-6 shadow-card sm:p-10">
            <ContactForm />
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-xl2 border border-surface-border bg-surface-muted p-8">
              <h3 className="text-lg font-semibold text-primary-900">Company contact information</h3>
              <ul className="mt-5 flex flex-col gap-4">
                {contactDetails.map((detail) => (
                  <li key={detail.label} className="flex items-start gap-3">
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-white text-accent-600 shadow-card">
                      <Icon name={detail.icon} className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-sm font-medium text-primary-900">{detail.label}</p>
                      <p className="text-sm text-ink-muted">{detail.value}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

