import type { Metadata } from "next";
import Link from "next/link";
import { getCanonicalAlternates } from "@/lib/site";
import { Container } from "@/components/Container";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CTA } from "@/components/CTA";
import { LinkButton } from "@/components/Button";

export const metadata: Metadata = {
  alternates: getCanonicalAlternates("/solutions"),
  title: "Solutions — Interconnected Financial Ecosystem",
  description:
    "Explore how TAMVA's financial technology platform is shaped for individuals, businesses, fintechs, and financial institutions.",
};

const solutions = [
  {
    id: "individuals",
    title: "For Individuals & Creators",
    badge: "Consumer Tier",
    kpi: "100% Consent Control",
    tagline: "Own your financial identity and unlock digital opportunities.",
    description:
      "Take your verified financial identity everywhere. Access personal banking, make low-cost transfers, and share verified income statements with lenders without compromising private documents.",
    href: "/solutions/individuals",
    features: [
      "Portable Financial Passport",
      "Instant multi-network money transfers",
      "One-tap data sharing authorization",
      "Autonomous savings & vaults",
    ],
    icon: (
      <svg className="w-6 h-6 text-tamva-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    id: "businesses",
    title: "For Growing Businesses & Merchants",
    badge: "Commercial Tier",
    kpi: "3x Faster Onboarding",
    tagline: "Streamline customer onboarding and eliminate fraud in transactions.",
    description:
      "Verify customers and suppliers instantly, accept low-fee cross-border payments, and leverage verifiable business credentials to access working capital from partner lenders.",
    href: "/solutions/businesses",
    features: [
      "Automated business partner verification",
      "Low-fee merchant payment collection",
      "Tamper-proof supplier invoices",
      "Instant merchant credit qualification",
    ],
    icon: (
      <svg className="w-6 h-6 text-tamva-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    id: "fintechs",
    title: "For Modern Fintechs & Digital Lenders",
    badge: "Developer Tier",
    kpi: "< 1.2s API Response",
    tagline: "Plug-and-play APIs to verify users, assess risk, and scale across Africa.",
    description:
      "Integrate unified verification and alternative credit scoring directly into your apps. Reduce customer acquisition friction, prevent identity fraud, and make real-time underwriting decisions.",
    href: "/developers",
    features: [
      "Plug-and-play REST & GraphQL APIs",
      "Alternative behavioral risk modeling",
      "Ghana Card biometric verification",
      "Continuous webhook event streams",
    ],
    icon: (
      <svg className="w-6 h-6 text-tamva-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    id: "organizations",
    title: "For Banks & Financial Institutions",
    badge: "Enterprise Tier",
    kpi: "99.99% Enterprise SLA",
    tagline: "Institutional-grade AML, PEP, and identity verification infrastructure.",
    description:
      "Modernize legacy core banking verification with certified cryptographic proof, end-to-end regulatory compliance, and seamless cross-institution identity reconciliation.",
    href: "/solutions/organizations",
    features: [
      "Bank of Ghana sandbox compliant",
      "Dedicated institutional data sandboxes",
      "High-concurrency AML & PEP screening",
      "Auditable cryptographic trails",
    ],
    icon: (
      <svg className="w-6 h-6 text-tamva-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
  },
];

export default function SolutionsPage() {
  return (
    <div className="bg-[#021812] text-white min-h-screen">
      {/* 1. Solutions Hero */}
      <section className="relative overflow-hidden pt-12 pb-20 border-b border-[#0d382b] hero-pattern">
        <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-tamva-accent/15 blur-[130px] rounded-full pointer-events-none" />

        <Container className="relative z-10">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Solutions" }]} />

          <div className="mt-8 max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-tamva-accent/30 bg-tamva-accent/10 px-4 py-1.5 text-xs font-semibold text-tamva-accent uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-tamva-accent animate-pulse" />
              Tailored Ecosystem Solutions
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Engineered for the Entire <br />
              <span className="text-tamva-accent">African Financial Value Chain.</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl">
              Whether you are an individual managing personal credentials, a fast-growing merchant, 
              an innovative fintech, or an established commercial bank, TAMVA delivers purpose-built tools.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <LinkButton href="/contact" withArrow>
                Schedule Solution Demo
              </LinkButton>
              <LinkButton href="/developers" variant="secondary">
                View API Specs
              </LinkButton>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Interactive Solutions Grid */}
      <section className="py-20 sm:py-28 border-b border-[#0d382b]">
        <Container>
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-bold text-tamva-accent uppercase tracking-widest">
              Who We Serve
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Four Core Audiences. One Connected Network.
            </h2>
            <p className="mt-4 text-slate-300 text-base sm:text-lg">
              Choose your sector to explore how TAMVA can optimize your digital finance operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((sol) => (
              <div
                key={sol.id}
                className="rounded-3xl border border-[#0d382b] bg-[#03231a] p-8 flex flex-col justify-between hover:border-tamva-accent/60 transition-all hover:-translate-y-1 shadow-2xl relative overflow-hidden group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-tamva-accent/10 border border-tamva-accent/20">
                        {sol.icon}
                      </div>
                      <span className="text-xs font-mono font-bold text-tamva-accent uppercase">
                        {sol.badge}
                      </span>
                    </div>
                    <span className="text-xs font-bold bg-white/5 border border-white/10 text-white px-3 py-1 rounded-full">
                      {sol.kpi}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white group-hover:text-tamva-accent transition-colors">
                    {sol.title}
                  </h3>
                  <p className="text-sm font-semibold text-emerald-300 mt-1">
                    {sol.tagline}
                  </p>
                  <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                    {sol.description}
                  </p>

                  <div className="my-6 pt-4 border-t border-[#0d382b]/80 space-y-2">
                    {sol.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                        <span className="text-tamva-accent font-bold">✓</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#0d382b] flex items-center justify-between">
                  <Link
                    href={sol.href}
                    className="inline-flex items-center gap-2 text-sm font-bold text-tamva-accent hover:text-white transition-colors"
                  >
                    <span>Explore Solution Workflow</span>
                    <span>→</span>
                  </Link>
                  <span className="text-xs text-slate-500 font-mono">Dedicated Overview</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. Capability Comparison Matrix */}
      <section className="py-20 sm:py-28 border-b border-[#0d382b] bg-[#021c15]/60">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-tamva-accent uppercase tracking-widest">
              Capabilities Across Audiences
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Enterprise Technology for Every Scale
            </h2>
            <p className="mt-4 text-slate-300 text-base sm:text-lg">
              How features and access levels map to each ecosystem participant.
            </p>
          </div>

          <div className="rounded-2xl border border-[#0d382b] bg-[#03231a] overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-[#0d382b] bg-[#021812]/80 text-xs font-mono text-slate-400">
                    <th className="py-4 px-6 font-semibold">Capability</th>
                    <th className="py-4 px-6 font-semibold text-center">Individuals</th>
                    <th className="py-4 px-6 font-semibold text-center">Businesses</th>
                    <th className="py-4 px-6 font-semibold text-center">Fintechs</th>
                    <th className="py-4 px-6 font-semibold text-center">Banks</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#0d382b]/60 text-slate-300">
                  {[
                    { cap: "Personal Sovereign Identity", ind: "Full", biz: "Admin", fin: "Via API", bnk: "Via API" },
                    { cap: "Verification & Document Proofing", ind: "Self-Check", biz: "Batch", fin: "High-Speed API", bnk: "High-Speed API" },
                    { cap: "Real-Time Risk Scoring", ind: "Score View", biz: "Vendor Risk", fin: "Underwriting API", bnk: "Enterprise Models" },
                    { cap: "Instant Regional Settlement", ind: "P2P", biz: "B2B", fin: "Programmatic", bnk: "Core Banking Rail" },
                    { cap: "Dedicated Sandbox & Custom SLA", ind: "—", biz: "Standard", fin: "Priority", bnk: "99.99% Enterprise" },
                  ].map((row) => (
                    <tr key={row.cap} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-4 px-6 font-semibold text-white">{row.cap}</td>
                      <td className="py-4 px-6 text-center text-tamva-accent font-medium">{row.ind}</td>
                      <td className="py-4 px-6 text-center text-emerald-300 font-medium">{row.biz}</td>
                      <td className="py-4 px-6 text-center text-emerald-300 font-medium">{row.fin}</td>
                      <td className="py-4 px-6 text-center text-emerald-300 font-medium">{row.bnk}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. CTA */}
      <CTA
        title="Find the Right TAMVA Solution for Your Organization"
        description="Our solutions architecture team is available to map integration workflows and conduct pilot tests."
        primaryLabel="Schedule Architecture Consultation"
        primaryHref="/contact"
        secondaryLabel="Explore All Products"
        secondaryHref="/products"
      />
    </div>
  );
}
