import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Container } from "@/components/Container";
import { CTA } from "@/components/CTA";
import { LinkButton } from "@/components/Button";
import { getCanonicalAlternates } from "@/lib/site";

export const metadata: Metadata = {
  alternates: getCanonicalAlternates("/products"),
  title: "Products",
  description:
    "Explore TAMVA's financial technology platform for individuals, businesses, institutions and developers across African markets.",
};

const productList = [
  {
    slug: "tamva-app",
    href: "/products/tamva-app",
    badge: "Consumer App",
    name: "TAMVA App",
    tagline: "Your Daily Financial Passport & Modern Mobile Wallet",
    description:
      "A consumer financial application designed to empower individuals across Africa. Manage your verifiable credentials, make instant transfers, save intelligently, and control how your data is shared.",
    features: [
      "Portable digital financial identity",
      "Instant low-cost regional transfers",
      "One-tap consent authorization",
      "Biometric secure authentication",
    ],
    accentColor: "from-emerald-500/20 to-emerald-900/10",
    previewVisual: (
      <div className="rounded-xl border border-[#0d382b] bg-[#021812] p-4 text-xs font-mono space-y-2">
        <div className="flex justify-between items-center text-slate-400 border-b border-[#0d382b] pb-2">
          <span>TAMVA WALLET</span>
          <span className="text-tamva-accent">ACTIVE ●</span>
        </div>
        <div className="text-lg font-bold text-white font-sans">GH₵ 14,850.00</div>
        <div className="flex gap-2 pt-1">
          <span className="bg-tamva-accent/15 text-tamva-accent text-[10px] px-2 py-0.5 rounded">✓ KYC Level 2</span>
          <span className="bg-white/5 text-slate-300 text-[10px] px-2 py-0.5 rounded">Passport Verified</span>
        </div>
      </div>
    ),
  },
  {
    slug: "passport",
    href: "/products/passport",
    badge: "Sovereign Identity",
    name: "Financial Passport",
    tagline: "Verifiable Credential Engine with Total User Consent",
    description:
      "An interoperable identity passport enabling consumers to carry their financial history, KYC validation, and credit credibility anywhere without filling repetitive paperwork.",
    features: [
      "Zero-knowledge proof privacy options",
      "Interoperable with commercial banks",
      "Granular, revokable user permissions",
      "Cryptographically signed attestations",
    ],
    accentColor: "from-tamva-accent/20 to-teal-950/20",
    previewVisual: (
      <div className="rounded-xl border border-[#0d382b] bg-[#021812] p-4 text-xs font-mono space-y-2">
        <div className="flex justify-between items-center text-slate-400 border-b border-[#0d382b] pb-2">
          <span>CREDENTIAL ID</span>
          <span className="text-tamva-accent">GH-PASSPORT-2026</span>
        </div>
        <div className="space-y-1 text-[11px] text-slate-300">
          <div>Issuer: Bank of Ghana Regulated Rail</div>
          <div>Status: <span className="text-emerald-400">Cryptographically Valid</span></div>
          <div>Last Verified: Just now</div>
        </div>
      </div>
    ),
  },
  {
    slug: "verification",
    href: "/products/verification",
    badge: "Enterprise API",
    name: "Verification Engine",
    tagline: "Instant Sub-Second KYC, AML, & Biometric Document Screening",
    description:
      "High-throughput enterprise verification API built for banks, fintechs, and digital lenders. Automate customer onboarding, fraud detection, and regulatory compliance at scale.",
    features: [
      "Sub-1.2s average API response latency",
      "Liveness detection & facial matching",
      "Ghana Card & African ID database checks",
      "Automated sanction & PEP lists scanning",
    ],
    accentColor: "from-blue-500/20 to-emerald-950/20",
    previewVisual: (
      <div className="rounded-xl border border-[#0d382b] bg-[#021812] p-4 text-xs font-mono space-y-2">
        <div className="flex justify-between items-center text-slate-400 border-b border-[#0d382b] pb-2">
          <span>POST /v1/verify</span>
          <span className="text-emerald-400">200 OK • 180ms</span>
        </div>
        <div className="text-[11px] text-slate-300">
          <span className="text-slate-500">{"{"}</span> <span className="text-tamva-accent">&quot;match&quot;</span>: <span className="text-white">true</span>, <span className="text-tamva-accent">&quot;confidence&quot;</span>: <span className="text-white">0.998</span>, <span className="text-tamva-accent">&quot;aml_clean&quot;</span>: <span className="text-white">true</span> <span className="text-slate-500">{"}"}</span>
        </div>
      </div>
    ),
  },
  {
    slug: "risk-intelligence",
    href: "/products/risk-intelligence",
    badge: "Analytics & ML",
    name: "Risk Intelligence",
    tagline: "Context-Aware Credit Intelligence for African Realities",
    description:
      "A next-generation risk assessment suite that combines verifiable financial behavior, telecom metrics, and alternative data to provide accurate underwriting insights for emerging markets.",
    features: [
      "Dynamic behavioral risk scoring",
      "Explainable AI underwriting insights",
      "Fraud pattern detection across networks",
      "Real-time default probability modeling",
    ],
    accentColor: "from-amber-500/20 to-emerald-950/20",
    previewVisual: (
      <div className="rounded-xl border border-[#0d382b] bg-[#021812] p-4 text-xs font-mono space-y-2">
        <div className="flex justify-between items-center text-slate-400 border-b border-[#0d382b] pb-2">
          <span>RISK PROFILE</span>
          <span className="text-tamva-accent">LOW RISK</span>
        </div>
        <div className="flex items-center gap-3 pt-1">
          <div className="text-2xl font-black text-tamva-accent">782</div>
          <div className="text-[10px] text-slate-400">Reliability Score (Scale 300 - 850)</div>
        </div>
      </div>
    ),
  },
];

export default function ProductsPage() {
  return (
    <div className="bg-[#021812] text-white min-h-screen">
      {/* 1. Products Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 border-b border-[#0d382b] hero-pattern">
        <div className="absolute top-0 right-1/3 w-[500px] h-[300px] bg-tamva-accent/15 blur-[130px] rounded-full pointer-events-none" />

        <Container className="relative z-10">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Products" }]} />

          <div className="mt-8 max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-tamva-accent/30 bg-tamva-accent/10 px-4 py-1.5 text-xs font-semibold text-tamva-accent uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-tamva-accent animate-pulse" />
              Modular Financial Suite
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Interconnected Products. <br />
              <span className="text-tamva-accent">One Unifying Trust Platform.</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl">
              From consumer wallets to high-concurrency enterprise verification APIs, TAMVA provides 
              the full-stack infrastructure required to verify identity, assess risk, and move funds across African markets.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <LinkButton href="/developers" withArrow>
                Explore Developer Docs
              </LinkButton>
              <LinkButton href="/contact" variant="secondary">
                Request API Access
              </LinkButton>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Interactive Product Cards Grid */}
      <section className="py-20 sm:py-28 border-b border-[#0d382b]">
        <Container>
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-bold text-tamva-accent uppercase tracking-widest">
              Core Architecture
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Designed for Scale, Precision, and Trust
            </h2>
            <p className="mt-4 text-slate-300 text-base sm:text-lg">
              Explore our four core pillars powering digital finance for consumers, businesses, and institutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {productList.map((product) => (
              <div
                key={product.slug}
                className="rounded-3xl border border-[#0d382b] bg-[#03231a] p-8 flex flex-col justify-between hover:border-tamva-accent/60 transition-all hover:-translate-y-1 shadow-2xl relative overflow-hidden group"
              >
                {/* Glow accent */}
                <div
                  className={`absolute -top-24 -right-24 w-60 h-60 rounded-full bg-gradient-to-br ${product.accentColor} blur-3xl pointer-events-none group-hover:scale-125 transition-transform`}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block text-xs font-bold uppercase tracking-wider text-tamva-accent bg-tamva-accent/10 border border-tamva-accent/30 px-3 py-1 rounded-full">
                      {product.badge}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">Module Active</span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-white group-hover:text-tamva-accent transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm font-semibold text-emerald-300 mt-1">
                    {product.tagline}
                  </p>

                  <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Interactive live preview widget */}
                  <div className="my-6">
                    {product.previewVisual}
                  </div>

                  {/* Feature bullets */}
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                        <svg className="w-4 h-4 text-tamva-accent shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#0d382b] flex items-center justify-between relative z-10">
                  <Link
                    href={product.href}
                    className="inline-flex items-center gap-2 text-sm font-bold text-tamva-accent hover:text-white transition-colors"
                  >
                    <span>View Product Details</span>
                    <span>→</span>
                  </Link>
                  <span className="text-xs text-slate-500 font-mono">Docs &amp; Specs Available</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. Interoperability Flow Diagram */}
      <section className="py-20 sm:py-28 border-b border-[#0d382b] bg-[#021b14]/70">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-tamva-accent uppercase tracking-widest">
              Unified Ecosystem
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              How the Products Work in Harmony
            </h2>
            <p className="mt-4 text-slate-300 text-base sm:text-lg">
              A continuous, user-consented data and transaction cycle designed for absolute security and speed.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 relative">
            {[
              {
                step: "01",
                title: "User Enrolls",
                desc: "User creates a verifiable credential in the TAMVA App, encrypting private keys locally.",
              },
              {
                step: "02",
                title: "Instant Verification",
                desc: "Enterprise verification API checks national registers & biometrics in under 1.2s.",
              },
              {
                step: "03",
                title: "Risk Scoring",
                desc: "Risk Intelligence evaluates behavioral trends with explainable AI models.",
              },
              {
                step: "04",
                title: "Trusted Settlement",
                desc: "Financial service is unlocked instantly with complete cryptographic proof.",
              },
            ].map((step, idx) => (
              <div
                key={step.step}
                className="rounded-2xl border border-[#0d382b] bg-[#03231a] p-6 relative hover:border-tamva-accent/60 transition-colors"
              >
                <div className="text-3xl font-black text-tamva-accent/30 font-mono mb-3">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{step.desc}</p>
                {idx < 3 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-tamva-accent z-20">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Enterprise Ready Security & Compliance Banner */}
      <section className="py-16 sm:py-20 border-b border-[#0d382b]">
        <Container>
          <div className="rounded-3xl border border-[#0d382b] bg-[#03231a]/60 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3">
              <span className="text-xs font-bold text-tamva-accent uppercase tracking-wider">
                Enterprise Ready
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Built to Regulated Financial Standards
              </h3>
              <p className="text-sm sm:text-base text-slate-300 max-w-xl">
                All TAMVA APIs and data structures comply with Ghana Data Protection Act (Act 843) principles, 
                ISO 27001 security baselines, and Bank of Ghana sandbox guidelines.
              </p>
            </div>
            <LinkButton href="/trust" variant="secondary" className="shrink-0">
              Read Security Disclosures
            </LinkButton>
          </div>
        </Container>
      </section>

      {/* 5. CTA */}
      <CTA
        title="Ready to Integrate TAMVA Products?"
        description="Get sandbox access to test our verification endpoints or explore consumer application partnerships."
        primaryLabel="Request Sandbox Credentials"
        primaryHref="/contact"
        secondaryLabel="View API Reference"
        secondaryHref="/developers"
      />
    </div>
  );
}
