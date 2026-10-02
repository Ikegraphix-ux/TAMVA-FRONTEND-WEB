import { Container } from "./Container";
import { Breadcrumb } from "./Breadcrumb";
import { Icon } from "./Icon";
import { FAQ } from "./FAQ";
import { CTA } from "./CTA";
import { LinkButton } from "./Button";
import type { ProductDetail } from "@/lib/types";

export function ProductDetailTemplate({ product }: { product: ProductDetail }) {
  return (
    <div className="bg-[#021812] text-white min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 border-b border-[#0d382b] hero-pattern">
        <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-tamva-accent/15 blur-[130px] rounded-full pointer-events-none" />

        <Container className="relative z-10">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              { label: product.name },
            ]}
          />

          <div className="mt-8 flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-tamva-accent/15 border border-tamva-accent/30 text-tamva-accent shadow-[0_0_20px_rgba(0,230,118,0.25)] shrink-0">
              <Icon name={product.icon} className="h-8 w-8" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-tamva-accent uppercase tracking-wider">
                Enterprise Product Module
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-1">
                {product.name}
              </h1>
              <p className="mt-1 text-base sm:text-lg text-emerald-300 font-medium">{product.tagline}</p>
            </div>
          </div>

          <p className="mt-6 max-w-3xl text-base sm:text-lg leading-relaxed text-slate-300">
            {product.overview}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <LinkButton href="/contact" withArrow>
              Talk to Us About {product.name.replace("TAMVA ", "")}
            </LinkButton>
            <LinkButton href="/developers" variant="secondary">
              View API Documentation
            </LinkButton>
          </div>
        </Container>
      </section>

      {/* 2. Why It Matters & Target Audience Split */}
      <section className="py-20 sm:py-28 border-b border-[#0d382b]">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-3xl border border-[#0d382b] bg-[#03231a] p-8 sm:p-10 shadow-xl">
              <span className="text-xs font-bold text-tamva-accent uppercase tracking-widest">
                Why It Matters
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-white">
                The Problem This Resolves
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-300">
                {product.whyItMatters}
              </p>
            </div>

            <div className="rounded-3xl border border-[#0d382b] bg-[#03231a] p-8 sm:p-10 shadow-xl">
              <span className="text-xs font-bold text-tamva-accent uppercase tracking-widest">
                Target Ecosystem
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-white">
                Who It&apos;s Built For
              </h2>
              <ul className="mt-4 flex flex-col gap-3">
                {product.whoItsFor.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="text-tamva-accent font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. How It Works: Step Process */}
      <section className="py-20 sm:py-28 border-b border-[#0d382b] bg-[#021c15]/60">
        <Container>
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-bold text-tamva-accent uppercase tracking-widest">
              Structured Workflow
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              How {product.name} Works
            </h2>
            <p className="mt-4 text-slate-300 text-sm sm:text-base">
              A streamlined, compliant process engineered for low friction and verifiable results.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {product.howItWorks.map((step, i) => (
              <div
                key={step.title}
                className="rounded-2xl border border-[#0d382b] bg-[#03231a] p-7 shadow-xl hover:border-tamva-accent/60 transition-all hover:-translate-y-1"
              >
                <p className="text-2xl font-black font-mono text-tamva-accent/50 mb-2">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="text-lg font-bold text-white">{step.title}</h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Capabilities Grid */}
      <section className="py-20 sm:py-28 border-b border-[#0d382b]">
        <Container>
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-bold text-tamva-accent uppercase tracking-widest">
              Functional Scope
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              What&apos;s Included
            </h2>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {product.capabilities.map((capability) => (
              <li
                key={capability}
                className="flex items-start gap-3 rounded-2xl border border-[#0d382b] bg-[#03231a] p-5 text-sm text-slate-300 shadow-md hover:border-tamva-accent/40 transition-colors"
              >
                <div className="w-5 h-5 rounded-full bg-tamva-accent/20 text-tamva-accent flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  ✓
                </div>
                <span>{capability}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 5. Trust & Security Notes */}
      <section className="py-16 sm:py-20 border-b border-[#0d382b] bg-[#021b14]/70">
        <Container>
          <div className="rounded-3xl border border-[#0d382b] bg-[#03231a] p-8 sm:p-12 shadow-xl">
            <span className="text-xs font-bold text-tamva-accent uppercase tracking-widest">
              Data Governance
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-white mb-6">
              Security &amp; Compliance Safeguards
            </h2>
            <ul className="grid sm:grid-cols-2 gap-4">
              {product.trustNotes.map((note) => (
                <li key={note} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 bg-[#021812] p-4 rounded-xl border border-[#0d382b]/80">
                  <span className="text-tamva-accent font-bold text-base leading-none">🛡</span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* 6. FAQs */}
      <section className="py-20 sm:py-28 border-b border-[#0d382b]">
        <Container>
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold text-tamva-accent uppercase tracking-widest">
              Frequently Asked Questions
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Clarifications &amp; Guidance
            </h2>
          </div>

          <div className="max-w-3xl">
            <FAQ items={product.faqs} />
          </div>
        </Container>
      </section>

      {/* 7. CTA */}
      <CTA
        title={`Ready to explore ${product.name}?`}
        description="Schedule a technical demo with our solutions engineering team or test with sandbox data."
        primaryLabel="Request Technical Consultation"
        primaryHref="/contact"
        secondaryLabel="Back to All Products"
        secondaryHref="/products"
      />
    </div>
  );
}
