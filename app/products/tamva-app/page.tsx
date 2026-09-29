import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Container } from "@/components/Container";
import { CTA } from "@/components/CTA";
import { SectionHeading } from "@/components/SectionHeading";
import { getCanonicalAlternates } from "@/lib/site";

export const metadata: Metadata = {
  alternates: getCanonicalAlternates("/products/tamva-app"),
  title: "TAMVA App",
  description:
    "Discover TAMVA's consumer-facing app vision, designed around financial identity, choice and access to financial services.",
};

const principles = [
  {
    title: "A consumer experience",
    description:
      "TAMVA App is the consumer-facing part of TAMVA's financial technology platform, intended to give individuals a clear place to engage with TAMVA services.",
  },
  {
    title: "Connected to Financial Passport",
    description:
      "The product direction brings the TAMVA App together with Financial Passport, supporting a more coherent way for people to engage with their financial identity.",
  },
  {
    title: "Choice and consent",
    description:
      "The experience is being shaped around giving people clarity and choice in how they engage with financial services and share information.",
  },
];

export default function TamvaAppPage() {
  return (
    <>
      <section className="border-b border-surface-border bg-primary-900 py-14 sm:py-20">
        <Container>
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              { label: "TAMVA App" },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-300">
              For individuals
            </p>
            <h1 className="mt-4 text-h2-mobile font-semibold text-white sm:text-h2">
              A more connected way to engage with financial services.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-primary-100">
              TAMVA App is the consumer-facing experience in TAMVA&apos;s broader
              financial technology platform. Its product direction brings
              together financial identity, personal choice and access to
              financial services, with Ghana as the initial market.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="The consumer experience"
            title="Built around people and their financial lives"
            description="TAMVA App is being shaped as a clear starting point for individuals engaging with TAMVA's platform."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {principles.map((item) => (
              <article
                key={item.title}
                className="rounded-xl2 border border-surface-border bg-white p-7 shadow-card"
              >
                <h2 className="text-xl font-semibold text-primary-900">
                  {item.title}
                </h2>
                <p className="mt-3 leading-relaxed text-ink-muted">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface-muted py-16 sm:py-24">
        <Container>
          <div className="max-w-3xl">
            <SectionHeading
              eyebrow="Product availability"
              title="Details will follow as the product develops"
              description="Specific features, supported services and availability will be shared when they are confirmed. The current website does not offer app registration or account access."
            />
          </div>
        </Container>
      </section>

      <CTA
        title="Interested in TAMVA App?"
        description="Contact the TAMVA team to discuss the platform and its product direction."
        primaryLabel="Contact TAMVA"
        primaryHref="/contact"
      />
    </>
  );
}
