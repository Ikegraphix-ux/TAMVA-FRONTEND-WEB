import type { Metadata } from "next";
import Link from "next/link";
import { getCanonicalAlternates } from "@/lib/site";
import { Container } from "@/components/Container";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CTA } from "@/components/CTA";
import { LinkButton } from "@/components/Button";

export const metadata: Metadata = {
  alternates: getCanonicalAlternates("/resources"),
  title: "Resources & Research — Insights for African Digital Finance",
  description:
    "Articles, insights, research and analysis on sovereign digital identity, verification, and fintech infrastructure across African markets.",
};

const topics = [
  {
    category: "Identity & Consent",
    readTime: "5 min read",
    title: "Why Portable Financial Identity is the Missing Rail in African Trade",
    description: "An analysis of cross-border verification bottlenecks in the AfCFTA era and how self-sovereign credentials unlock instant merchant credit.",
    tag: "Featured Research",
  },
  {
    category: "Open Banking",
    readTime: "4 min read",
    title: "Moving Beyond Fragmented Bureau Checks in West Africa",
    description: "How combining alternative telecom and utility payment behavior with cryptographic assertions reduces default rates by up to 35%.",
    tag: "Risk Intelligence",
  },
  {
    category: "API Engineering",
    readTime: "6 min read",
    title: "Designing Sub-Second National ID Relays for High-Concurrency Fintechs",
    description: "Architecture patterns for caching, cryptographic verification, and fallback handling when interfacing with regional government registries.",
    tag: "Technical Explainer",
  },
  {
    category: "Regulatory Landscape",
    readTime: "4 min read",
    title: "Ghana Data Protection Act (Act 843): Practical Compliance for Tech Teams",
    description: "A developer-friendly breakdown of explicit consent requirements, data minimization principles, and local storage obligations.",
    tag: "Compliance Brief",
  },
  {
    category: "Financial Inclusion",
    readTime: "5 min read",
    title: "Offline-First Mobile Verification: Bridging the Last-Mile Connectivity Gap",
    description: "Techniques for biometric matching and asymmetric credential storage that operate reliably in low-bandwidth rural locations.",
    tag: "Product Design",
  },
  {
    category: "Institutional Finance",
    readTime: "3 min read",
    title: "The Economics of Automated AML Screening in Retail Banking",
    description: "Replacing manual compliance review teams with real-time PEP list webhooks and automated sanction monitoring.",
    tag: "Industry Guide",
  },
];

export default function ResourcesPage() {
  return (
    <div className="bg-[#021812] text-white min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 border-b border-[#0d382b] hero-pattern">
        <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-tamva-accent/15 blur-[130px] rounded-full pointer-events-none" />

        <Container className="relative z-10">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Resources" }]} />

          <div className="mt-8 max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-tamva-accent/30 bg-tamva-accent/10 px-4 py-1.5 text-xs font-semibold text-tamva-accent uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-tamva-accent animate-pulse" />
              Insights &amp; Research Hub
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Knowledge &amp; Perspectives on <br />
              <span className="text-tamva-accent">African Financial Infrastructure.</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl">
              Research briefs, regulatory insights, technical explainers, and practical guides exploring 
              the evolution of digital identity, credit intelligence, and open banking in Africa.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <LinkButton href="/developers" withArrow>
                Explore Developer Docs
              </LinkButton>
              <LinkButton href="/products" variant="secondary">
                View Product Suite
              </LinkButton>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Interactive Insights Grid */}
      <section className="py-20 sm:py-28 border-b border-[#0d382b]">
        <Container>
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-bold text-tamva-accent uppercase tracking-widest">
              Latest Publications
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Articles, Guides &amp; Research
            </h2>
            <p className="mt-4 text-slate-300 text-base sm:text-lg">
              Explore in-depth analyses authored by our research and solutions engineering teams.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topics.map((t) => (
              <div
                key={t.title}
                className="rounded-3xl border border-[#0d382b] bg-[#03231a] p-8 flex flex-col justify-between hover:border-tamva-accent/60 transition-all hover:-translate-y-1 shadow-xl group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-tamva-accent bg-tamva-accent/10 border border-tamva-accent/30 px-3 py-0.5 rounded-full">
                      {t.category}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      {t.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-tamva-accent transition-colors">
                    {t.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {t.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#0d382b] flex items-center justify-between">
                  <span className="text-xs text-emerald-400 font-mono font-semibold">{t.tag}</span>
                  <span className="text-sm font-bold text-tamva-accent group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. Research Briefing Spotlight */}
      <section className="py-20 sm:py-28 border-b border-[#0d382b] bg-[#021c15]/60">
        <Container>
          <div className="rounded-3xl border border-[#0d382b] bg-[#03231a] p-8 sm:p-14 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="space-y-4 max-w-2xl">
              <span className="text-xs font-bold text-tamva-accent uppercase tracking-widest">
                Quarterly Research
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                The State of Digital Identity &amp; Verification in West Africa
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                A comprehensive examination of national ID adoption in Ghana, Nigeria, and Côte d&apos;Ivoire, 
                identifying key friction points in commercial onboarding and the role of consent-based architectures.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs text-slate-400 font-mono">
                <span>📄 Format: Whitepaper</span>
                <span>📅 Published: Q3 2026</span>
                <span>🔒 Unrestricted Access</span>
              </div>
            </div>

            <div className="shrink-0">
              <LinkButton href="/contact" withArrow>
                Request Research Copy
              </LinkButton>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. CTA */}
      <CTA
        title="Stay Informed on the Future of African Fintech"
        description="Connect with our team to discuss research partnerships or subscribe to our developer updates."
        primaryLabel="Contact the Research Team"
        primaryHref="/contact"
        secondaryLabel="Explore Product Suite"
        secondaryHref="/products"
      />
    </div>
  );
}
