import type { Metadata } from "next";
import { getCanonicalAlternates } from "@/lib/site";
import { Container } from "@/components/Container";
import { CTA } from "@/components/CTA";
import { Hero } from "@/components/Hero";
import { LinkButton } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { products } from "@/lib/content";

export const metadata: Metadata = { alternates: getCanonicalAlternates("/") };

const audiences = [
  { title: "Individuals", description: "The TAMVA consumer experience and Financial Passport are being built to help people manage identity information and share it with consent.", href: "/solutions/individuals" },
  { title: "Businesses", description: "Explore identity, verification and risk information designed to support business workflows.", href: "/solutions/businesses" },
  { title: "Fintechs", description: "Learn how the TAMVA platform is intended to support fintech products and their customers.", href: "/solutions/businesses" },
  { title: "Financial institutions", description: "Review platform capabilities for institutions evaluating identity, verification and risk workflows.", href: "/solutions/organizations" },
];

const platformAreas = [
  ["Identity", "Establish and present identity information through the Financial Passport experience."],
  ["Verification", "Support identity and information checks through structured workflows."],
  ["Risk context", "Organize relevant signals to help organizations review information."],
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="py-16 sm:py-24"><Container>
        <SectionHeading eyebrow="The TAMVA platform" title="Financial technology infrastructure built for African markets." description="TAMVA is building connected products for people and organizations, with identity, verification and risk capabilities under one platform. Ghana is the initial market." />
        <p className="mt-8 max-w-3xl leading-relaxed text-ink-muted">Financial services work better when people and organizations can share reliable information with clarity and control. TAMVA is developing products to support those interactions.</p>
      </Container></section>
      <section className="bg-surface-muted py-16 sm:py-24"><Container>
        <SectionHeading eyebrow="Products" title="Capabilities for people and organizations." description="Explore the product areas being developed across the TAMVA platform." />
        <div className="mt-10 grid gap-5 md:grid-cols-3">{products.map((product) => <article key={product.slug} className="rounded-xl2 border border-surface-border bg-white p-6 shadow-card sm:p-7"><h3 className="text-xl font-semibold text-primary-900">{product.name}</h3><p className="mt-3 leading-relaxed text-ink-muted">{product.description}</p><LinkButton href={"/products/" + product.slug} variant="ghost" withArrow className="mt-5">Explore product</LinkButton></article>)}</div>
      </Container></section>
      <section className="py-16 sm:py-24"><Container>
        <SectionHeading eyebrow="How TAMVA works" title="A connected platform, shaped around real needs." description="TAMVA brings product capabilities together so people and organizations can use clearer information in their financial interactions." />
        <div className="mt-10 grid gap-5 md:grid-cols-3">{platformAreas.map(([title, description], index) => <article key={title} className="rounded-xl2 border border-surface-border bg-white p-6"><span className="text-sm font-bold tracking-widest text-accent-600">0{index + 1}</span><h3 className="mt-3 text-lg font-semibold text-primary-900">{title}</h3><p className="mt-2 leading-relaxed text-ink-muted">{description}</p></article>)}</div>
      </Container></section>
      <section className="bg-primary-900 py-16 sm:py-24"><Container>
        <SectionHeading eyebrow="Who TAMVA serves" title="Designed for people and the organizations around them." description="The platform brings together an individual experience and tools for the organizations that provide financial services." light />
        <div className="mt-10 grid gap-4 sm:grid-cols-2">{audiences.map((audience) => <a key={audience.title} href={audience.href} className="rounded-xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:bg-white/[0.08]"><h3 className="text-lg font-semibold text-white">{audience.title}</h3><p className="mt-2 leading-relaxed text-primary-100">{audience.description}</p><span className="mt-4 inline-block text-sm font-semibold text-accent-300">Explore solutions →</span></a>)}</div>
      </Container></section>
      <section className="py-16 sm:py-24"><Container><div className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-xl2 border border-surface-border bg-surface-muted p-7 sm:p-9"><p className="text-sm font-semibold uppercase tracking-wide text-accent-600">Trust and responsibility</p><h2 className="mt-3 text-2xl font-semibold text-primary-900">Clarity, consent and accountability.</h2><p className="mt-3 leading-relaxed text-ink-muted">These principles guide how TAMVA approaches identity information and decision support. Public technical and certification claims are limited to details that can be verified.</p><LinkButton href="/trust" variant="ghost" withArrow className="mt-5">Our security approach</LinkButton></article>
        <article className="rounded-xl2 border border-surface-border bg-surface-muted p-7 sm:p-9"><p className="text-sm font-semibold uppercase tracking-wide text-accent-600">For developers</p><h2 className="mt-3 text-2xl font-semibold text-primary-900">Integration materials are in preparation.</h2><p className="mt-3 leading-relaxed text-ink-muted">API specifications and sandbox availability should be confirmed with the TAMVA team before integration work begins.</p><LinkButton href="/developers" variant="ghost" withArrow className="mt-5">Developer documentation</LinkButton></article>
      </div></Container></section>
      <section className="bg-surface-muted py-16 sm:py-20"><Container><SectionHeading eyebrow="Our starting point" title="Built in Ghana, with an African outlook." description="Ghana is the initial market for TAMVA. The platform is being shaped with the ambition to serve financial needs across African markets." /></Container></section>
      <CTA title="Explore what TAMVA is building." description="Talk with our team about the platform, intended use cases and current availability." primaryLabel="Contact TAMVA" primaryHref="/contact" secondaryLabel="About TAMVA" secondaryHref="/about" />
    </>
  );
}
