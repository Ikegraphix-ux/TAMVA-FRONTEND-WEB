import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { Breadcrumb } from "./Breadcrumb";
import { Icon } from "./Icon";
import { FAQ } from "./FAQ";
import { CTA } from "./CTA";
import { LinkButton } from "./Button";
import type { ProductDetail } from "@/lib/types";

export function ProductDetailTemplate({ product }: { product: ProductDetail }) {
  return (
    <>
      <section className="border-b border-surface-border bg-primary-900 py-14 sm:py-20">
        <Container>
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              { label: product.name },
            ]}
          />
          <div className="mt-8 flex items-center gap-4">
            <span className="flex h-14 w-14 items-center justify-center rounded-xl2 bg-white/10 text-white">
              <Icon name={product.icon} className="h-7 w-7" />
            </span>
            <div>
              <h1 className="text-h2-mobile sm:text-h2 font-semibold text-white">
                {product.name}
              </h1>
              <p className="mt-1 text-accent-300">{product.tagline}</p>
            </div>
          </div>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-100">
            {product.overview}
          </p>
          <div className="mt-8">
            <LinkButton href="/contact" withArrow>
              Talk to us about {product.name.replace("TAMVA ", "")}
            </LinkButton>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <SectionHeading eyebrow="Why it matters" title="The problem this solves" />
              <p className="mt-4 text-[15px] leading-relaxed text-ink-muted">
                {product.whyItMatters}
              </p>
            </div>
            <div>
              <SectionHeading eyebrow="Who it's for" title="Built for" />
              <ul className="mt-4 flex flex-col gap-3">
                {product.whoItsFor.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] text-ink-muted">
                    <Icon name="verification" className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-surface-muted py-16 sm:py-24">
        <Container>
          <SectionHeading eyebrow="How it works" title="A clear, structured process" />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {product.howItWorks.map((step, i) => (
              <div key={step.title} className="rounded-xl2 border border-surface-border bg-white p-7 shadow-card">
                <p className="text-sm font-semibold text-accent-600">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-primary-900">{step.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Capabilities" title="What's included" />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {product.capabilities.map((capability) => (
              <li
                key={capability}
                className="flex items-start gap-3 rounded-lg border border-surface-border bg-white p-4 text-[15px] text-ink-muted"
              >
                <Icon name="verification" className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-600" />
                {capability}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-primary-900 py-16 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Trust & security" title="Handled responsibly" light />
          <ul className="mt-8 flex flex-col gap-3">
            {product.trustNotes.map((note) => (
              <li key={note} className="flex items-start gap-3 text-[15px] text-primary-100">
                <Icon name="security" className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-300" />
                {note}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading eyebrow="FAQs" title="Common questions" />
          <div className="mt-10 max-w-2xl">
            <FAQ items={product.faqs} />
          </div>
        </Container>
      </section>

      <CTA
        title={`Ready to explore ${product.name}?`}
        primaryLabel="Contact us"
        primaryHref="/contact"
      />
    </>
  );
}
