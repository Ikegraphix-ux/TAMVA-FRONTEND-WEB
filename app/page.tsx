import { Hero } from "@/components/Hero";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { FeatureCard } from "@/components/FeatureCard";
import { StepCard } from "@/components/StepCard";
import { ProductCard } from "@/components/ProductCard";
import { SolutionCard } from "@/components/SolutionCard";
import { TrustCard } from "@/components/TrustCard";
import { CTA } from "@/components/CTA";
import { LinkButton } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { products, solutions } from "@/lib/content";

const problems = [
  {
    icon: "identity" as const,
    title: "Identity",
    description: "Know who you are dealing with.",
    href: "/products/passport",
  },
  {
    icon: "verification" as const,
    title: "Verification",
    description: "Validate information with confidence.",
    href: "/products/verification",
  },
  {
    icon: "risk" as const,
    title: "Risk Intelligence",
    description: "Understand relevant signals before making decisions.",
    href: "/products/risk-intelligence",
  },
];

const steps = [
  { number: "01", icon: "discover" as const, title: "Discover", description: "Understand the identity and information relevant to a decision." },
  { number: "02", icon: "verification" as const, title: "Verify", description: "Validate that information against a consistent standard." },
  { number: "03", icon: "analyze" as const, title: "Analyze", description: "Structure relevant signals into a clear, reviewable view." },
  { number: "04", icon: "decide" as const, title: "Decide", description: "Make an informed decision with the context you need." },
];

const trustPrinciples = [
  { icon: "security" as const, title: "Security", description: "Access to information is controlled and protected." },
  { icon: "privacy" as const, title: "Privacy", description: "Information is handled with care and used for its intended purpose." },
  { icon: "governance" as const, title: "Governance", description: "Clear ownership and accountability over how the platform is run." },
  { icon: "auditability" as const, title: "Auditability", description: "Verification and risk events are traceable." },
  { icon: "responsible-data" as const, title: "Responsible Data Use", description: "Data is used deliberately, not opportunistically." },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Problem section */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Why TAMVA"
            title="Trust starts with knowing."
            description="Organizations and individuals need clear, structured ways to understand who they are dealing with and what the relevant signals are."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {problems.map((item) => (
              <Reveal key={item.title}>
                <FeatureCard {...item} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* How TAMVA works */}
      <section className="bg-surface-muted py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Get started" title="How TAMVA works" />
          <div className="mt-14 flex flex-col gap-12 sm:flex-row sm:gap-8">
            {steps.map((step, i) => (
              <Reveal key={step.number} className="flex-1">
                <StepCard {...step} isLast={i === steps.length - 1} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Products */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading title="Technology built around trust." />
            <LinkButton href="/products" variant="ghost" withArrow className="self-start sm:self-auto">
              View all products
            </LinkButton>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {products.map((product) => (
              <Reveal key={product.slug}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Solutions */}
      <section className="bg-surface-muted py-20 sm:py-28">
        <Container>
          <SectionHeading title="Built for different trust needs." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {solutions.map((solution) => (
              <Reveal key={solution.slug}>
                <SolutionCard solution={solution} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Trust & Security teaser */}
      <section className="bg-primary-900 py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Trust & Security"
            title="Trust is built into the experience."
            light
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {trustPrinciples.map((p) => (
              <Reveal key={p.title}>
                <TrustCard {...p} />
              </Reveal>
            ))}
          </div>
          <div className="mt-10">
            <LinkButton href="/trust" variant="secondary" withArrow>
              Explore Trust & Security
            </LinkButton>
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
