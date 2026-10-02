import type { Metadata } from "next";
import Link from "next/link";
import { getCanonicalAlternates } from "@/lib/site";
import { Container } from "@/components/Container";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CTA } from "@/components/CTA";
import { LinkButton } from "@/components/Button";

export const metadata: Metadata = {
  alternates: getCanonicalAlternates("/about"),
  title: "About",
  description:
    "Learn about TAMVA's mission to build financial technology infrastructure for African markets, starting in Ghana.",
};

const pillars = [
  {
    icon: (
      <svg className="w-6 h-6 text-tamva-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 004 11a7.96 7.96 0 00.902 3.666m10.74 3.03a14.004 14.004 0 01-3.642 3.304" />
      </svg>
    ),
    title: "Sovereign Financial Identity",
    description:
      "Empowering individuals with portable, user-consented digital identities that reduce onboarding friction across banks, fintechs, and credit bureaus.",
    tag: "Core Technology",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-tamva-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Institutional Verification",
    description:
      "Enterprise verification pipelines designed for high-concurrency AML, KYC, and document proofing with millisecond response benchmarks.",
    tag: "Enterprise Engine",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-tamva-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: "Pan-African Risk Intelligence",
    description:
      "Context-aware risk assessment combining alternative behavioral metrics and verifiable credit histories for underserved emerging markets.",
    tag: "Analytics & ML",
  },
];

const roadmapMilestones = [
  {
    phase: "Phase 01",
    status: "Active Foundation",
    title: "Ghana Market Launch & Core API Setup",
    desc: "Establishing foundational regulatory relationships, verification nodes, and initial banking and telecom integration pipelines in Ghana.",
  },
  {
    phase: "Phase 02",
    status: "Upcoming",
    title: "TAMVA App & Financial Passport Beta",
    desc: "Rollout of consumer-facing mobile wallet experience and personal Financial Passport, putting consent directly in the user's hands.",
  },
  {
    phase: "Phase 03",
    status: "Planned",
    title: "West African Regional Expansion",
    desc: "Extending verification rails and interoperable financial identity to Nigeria, Côte d'Ivoire, and Kenya with localized regulatory compliance.",
  },
  {
    phase: "Phase 04",
    status: "Vision",
    title: "Continental Cross-Border Trust Mesh",
    desc: "Unified cross-border identity protocol enabling frictionless digital trade, credit portability, and remittance trust across the AfCFTA zone.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#021812] text-white min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 border-b border-[#0d382b] hero-pattern">
        {/* Ambient lighting glows */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-tamva-accent/15 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[400px] h-[250px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />

        <Container className="relative z-10">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "About TAMVA" },
            ]}
          />

          <div className="mt-8 max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-tamva-accent/30 bg-tamva-accent/10 px-4 py-1.5 text-xs font-semibold text-tamva-accent uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-tamva-accent animate-pulse" />
              Our Mission & Vision
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Building the <span className="text-tamva-accent">Trust Fabric</span> for Africa&apos;s Digital Economy.
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl">
              TAMVA is pioneering interconnected digital identity, real-time verification, and intelligent risk infrastructure. 
              Starting from Ghana, we are engineering the foundation for trusted, inclusive, and cross-border African finance.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <LinkButton href="/products" withArrow>
                Explore Platform
              </LinkButton>
              <LinkButton href="/contact" variant="secondary">
                Partner With Us
              </LinkButton>
            </div>
          </div>

          {/* Metric Stats Banner */}
          <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Initial Focus Market", val: "Ghana", sub: "Expanding across West Africa" },
              { label: "Core Technology Layers", val: "3 Pillars", sub: "Identity • Verification • Risk" },
              { label: "Verification Target Latency", val: "< 1.5s", sub: "Built for instant decisions" },
              { label: "Security Architecture", val: "256-bit", sub: "End-to-end encrypted telemetry" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-[#0d382b] bg-[#03231a]/80 backdrop-blur-md p-5 transition-all hover:border-tamva-accent/40 hover:scale-[1.02]"
              >
                <div className="text-2xl sm:text-3xl font-black text-tamva-accent tracking-tight">
                  {stat.val}
                </div>
                <div className="mt-1 text-sm font-semibold text-white">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 2. Visual Story / Problem & Solution Split */}
      <section className="py-20 sm:py-28 border-b border-[#0d382b] relative">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-tamva-accent uppercase tracking-widest">
                The Core Challenge
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Fragmented Identity Creates Friction for Millions.
              </h2>
              <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
                Across African markets, individuals encounter repeated verification hurdles when applying for bank accounts, 
                remittances, business loans, or mobile money services. Each institution operates in an isolated silo, 
                increasing operational costs and excluding viable consumers from the formal economy.
              </p>
              <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
                TAMVA resolves this by replacing fragmented verification with an interoperable, user-consented trust network. 
                Individuals retain sovereignty over their data, while institutions gain certified confidence in real time.
              </p>

              <div className="pt-2 flex items-center gap-6">
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <span className="w-2.5 h-2.5 rounded-full bg-tamva-accent" />
                  Self-Sovereign Consent
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <span className="w-2.5 h-2.5 rounded-full bg-tamva-accent" />
                  Universal Interoperability
                </div>
              </div>
            </div>

            {/* Right Interactive Architecture Blueprint Visual */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl border border-[#0d382b] bg-[#03231a] p-6 sm:p-8 shadow-2xl relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-[#0d382b] pb-4 mb-6">
                  <div className="flex items-center gap-2.5">
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 animate-pulse" />
                    <span className="text-xs font-mono font-semibold text-slate-300">TAMVA Trust Fabric Pipeline</span>
                  </div>
                  <span className="text-[11px] bg-tamva-accent/10 border border-tamva-accent/30 text-tamva-accent font-mono px-2 py-0.5 rounded-md">
                    v1.0 Ready
                  </span>
                </div>

                <div className="space-y-4">
                  {pillars.map((item, idx) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-[#0d382b] bg-[#021812]/90 p-4 transition-all hover:border-tamva-accent/50 group"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-xl bg-tamva-accent/10 border border-tamva-accent/20 group-hover:scale-110 transition-transform">
                            {item.icon}
                          </div>
                          <div>
                            <h3 className="text-base font-bold text-white group-hover:text-tamva-accent transition-colors">
                              {item.title}
                            </h3>
                            <span className="text-[11px] font-mono text-slate-400">
                              Module 0{idx + 1} • {item.tag}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed pl-12">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Interactive Strategic Roadmap Timeline */}
      <section className="py-20 sm:py-28 border-b border-[#0d382b] bg-[#021c15]/60">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-tamva-accent uppercase tracking-widest">
              Execution Horizon
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Our Strategic Milestones
            </h2>
            <p className="mt-4 text-slate-300 text-base sm:text-lg">
              A deliberate, phased approach to building compliant, secure, and continent-wide financial infrastructure.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {roadmapMilestones.map((m, idx) => (
              <div
                key={m.phase}
                className="relative rounded-2xl border border-[#0d382b] bg-[#03231a] p-6 flex flex-col justify-between hover:border-tamva-accent/60 transition-all hover:-translate-y-1 shadow-lg group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-black font-mono text-tamva-accent tracking-widest">
                      {m.phase}
                    </span>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                        idx === 0
                          ? "bg-tamva-accent text-[#021812] border-tamva-accent"
                          : "bg-white/5 text-slate-400 border-white/10"
                      }`}
                    >
                      {m.status}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-tamva-accent transition-colors">
                    {m.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {m.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#0d382b]/80 flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span>Milestone 0{idx + 1}</span>
                  <span className="text-tamva-accent">✓ Verified</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Values & Operating Principles */}
      <section className="py-20 sm:py-28 border-b border-[#0d382b]">
        <Container>
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-bold text-tamva-accent uppercase tracking-widest">
              Our Principles
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Values Rooted in Trust and Accountability
            </h2>
            <p className="mt-4 text-slate-300 text-base sm:text-lg">
              How we approach security, regulation, and engineering across all product decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                num: "01",
                title: "Build for people first, then the system.",
                desc: "Every API endpoint and UX wireframe is created with user consent, privacy protection, and dignity at its foundation.",
              },
              {
                num: "02",
                title: "Make trust measurable infrastructure.",
                desc: "Cryptographic audit trails and verifiable assertions eliminate ambiguity between financial partners.",
              },
              {
                num: "03",
                title: "Grounded locally, engineered globally.",
                desc: "Engineered specifically to handle the real-world connectivity, informal sector dynamics, and device diversities of emerging Africa.",
              },
              {
                num: "04",
                title: "Radical compliance without bureaucratic drag.",
                desc: "Meeting regulatory standards in Ghana and across African jurisdictions proactively with bank-grade telemetry.",
              },
            ].map((v) => (
              <div
                key={v.num}
                className="rounded-2xl border border-[#0d382b] bg-[#03231a]/60 p-7 hover:border-tamva-accent/40 transition-colors flex gap-5 items-start"
              >
                <span className="text-2xl font-black font-mono text-tamva-accent/40 shrink-0">
                  {v.num}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{v.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. CTA */}
      <CTA
        title="Ready to build alongside TAMVA?"
        description="Whether you are a fintech, bank, enterprise, or regulator, discover how our platform can accelerate your financial operations."
        primaryLabel="Contact the Team"
        primaryHref="/contact"
        secondaryLabel="Developer Docs"
        secondaryHref="/developers"
      />
    </div>
  );
}
