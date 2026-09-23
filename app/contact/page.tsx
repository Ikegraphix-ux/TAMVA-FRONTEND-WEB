import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the TAMVA team.",
};

export default function ContactPage() {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
        <div className="mt-6">
          <SectionHeading
            eyebrow="Contact"
            title="Let's build trust together."
            description="Tell us what you're looking for and the right person on our team will follow up."
          />
        </div>

        <div className="mx-auto mt-14 max-w-3xl rounded-xl2 border border-surface-border bg-white p-6 shadow-card sm:p-10">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
