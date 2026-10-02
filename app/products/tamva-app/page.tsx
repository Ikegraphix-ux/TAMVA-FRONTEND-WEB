import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Container } from "@/components/Container";
import { CTA } from "@/components/CTA";
import { LinkButton } from "@/components/Button";
import { getCanonicalAlternates } from "@/lib/site";

export const metadata: Metadata = {
  alternates: getCanonicalAlternates("/products/tamva-app"),
  title: "TAMVA App — Next-Gen Consumer Finance",
  description:
    "Discover TAMVA's consumer-facing app vision, designed around financial identity, choice and seamless digital payments across Africa.",
};

const appFeatures = [
  {
    icon: (
      <svg className="w-6 h-6 text-tamva-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "All-in-One African Digital Wallet",
    description: "Store Cedis, Naira, and digital currencies. Send money instantly to bank accounts and mobile money wallets across networks.",
    tag: "Instant Payments",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-tamva-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Integrated Financial Passport",
    description: "Your verified credit reputation and KYC history travel with you. Apply for loans and institutional services in seconds.",
    tag: "Credit Portability",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-tamva-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Granular Consent Controls",
    description: "You decide who sees your financial data. Grant or revoke bank access anytime with single-tap verifiable authorization.",
    tag: "Privacy First",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-tamva-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Targeted Automated Savings",
    description: "Lock funds for school fees, rent, or business capital with customizable rules and daily interest yields.",
    tag: "Wealth Building",
  },
];

export default function TamvaAppPage() {
  return (
    <div className="bg-[#021812] text-white min-h-screen">
      {/* 1. App Hero with Floating Mobile Mockup */}
      <section className="relative overflow-hidden pt-12 pb-24 border-b border-[#0d382b] hero-pattern">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[350px] bg-tamva-accent/15 blur-[140px] rounded-full pointer-events-none" />

        <Container className="relative z-10">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              { label: "TAMVA App" },
            ]}
          />

          <div className="mt-10 grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-tamva-accent/30 bg-tamva-accent/10 px-4 py-1.5 text-xs font-semibold text-tamva-accent uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-tamva-accent animate-pulse" />
                Consumer Experience
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Your Sovereign Financial Identity. <br />
                <span className="text-tamva-accent">Everywhere You Go.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
                TAMVA App is the consumer interface connecting individuals in Ghana and across Africa to modern 
                digital banking, instant cross-network money transfers, and portable credit credentials.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <LinkButton href="/contact" withArrow>
                  Join Early Access Waitlist
                </LinkButton>
                <LinkButton href="/products/passport" variant="secondary">
                  Explore Financial Passport
                </LinkButton>
              </div>

              {/* Badges */}
              <div className="pt-4 flex items-center gap-4 text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <span className="text-tamva-accent">✓</span> iOS &amp; Android Apps in Beta
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-tamva-accent">✓</span> Bank-Grade 256-bit Encryption
                </div>
              </div>
            </div>

            {/* Right Phone Mockup */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[320px] rounded-[44px] border-[6px] border-[#0d382b] bg-[#021812] p-4 shadow-[0_25px_60px_-15px_rgba(0,230,118,0.25)]">
                {/* Notch */}
                <div className="mx-auto h-4 w-28 rounded-full bg-[#0d382b] mb-4" />

                {/* Status Bar */}
                <div className="flex justify-between items-center text-[11px] font-mono text-slate-400 px-2 pb-3">
                  <span>09:41</span>
                  <div className="flex items-center gap-1.5 text-tamva-accent">
                    <span>5G</span>
                    <span>100%</span>
                  </div>
                </div>

                {/* Balance Card */}
                <div className="rounded-2xl border border-tamva-accent/30 bg-gradient-to-br from-[#03231a] to-[#043326] p-4 relative overflow-hidden">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[11px] font-medium text-slate-400">Total Available Balance</span>
                      <div className="text-2xl font-black text-white mt-0.5 tracking-tight">GH₵ 14,850.00</div>
                    </div>
                    <span className="text-xs bg-tamva-accent/20 text-tamva-accent font-bold px-2 py-0.5 rounded-full">
                      Ghana
                    </span>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 flex justify-between items-center text-[10px] text-slate-300">
                    <span>Passport ID: GH-8820-T</span>
                    <span className="text-tamva-accent font-semibold">Tier 2 Verified</span>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-4 gap-2 py-4">
                  {[
                    { label: "Send", icon: "↑" },
                    { label: "Receive", icon: "↓" },
                    { label: "Passport", icon: "★" },
                    { label: "Save", icon: "🔒" },
                  ].map((act) => (
                    <div
                      key={act.label}
                      className="rounded-xl border border-[#0d382b] bg-[#03231a] p-2 text-center hover:border-tamva-accent transition-colors cursor-pointer"
                    >
                      <div className="text-sm font-bold text-tamva-accent">{act.icon}</div>
                      <div className="text-[10px] font-medium text-slate-300 mt-0.5">{act.label}</div>
                    </div>
                  ))}
                </div>

                {/* Recent Activities List */}
                <div className="space-y-2 pt-1">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-1">
                    Recent Activity
                  </div>
                  {[
                    { title: "MTN MoMo Deposit", time: "Today, 08:30 AM", amount: "+GH₵ 2,500.00", pos: true },
                    { title: "GCB Bank Transfer", time: "Yesterday", amount: "-GH₵ 420.00", pos: false },
                    { title: "ECG Power Utility", time: "Sep 28", amount: "-GH₵ 180.00", pos: false },
                  ].map((tx) => (
                    <div
                      key={tx.title}
                      className="rounded-xl border border-[#0d382b]/80 bg-[#03231a]/60 p-2.5 flex items-center justify-between"
                    >
                      <div>
                        <div className="text-xs font-semibold text-white">{tx.title}</div>
                        <div className="text-[10px] text-slate-400">{tx.time}</div>
                      </div>
                      <div className={`text-xs font-mono font-bold ${tx.pos ? "text-tamva-accent" : "text-slate-300"}`}>
                        {tx.amount}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Key App Features */}
      <section className="py-20 sm:py-28 border-b border-[#0d382b]">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-tamva-accent uppercase tracking-widest">
              Capabilities
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Designed for Convenience and Complete Sovereignty
            </h2>
            <p className="mt-4 text-slate-300 text-base sm:text-lg">
              Everything an individual needs to navigate modern finance with confidence, transparency, and speed.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {appFeatures.map((feat) => (
              <div
                key={feat.title}
                className="rounded-2xl border border-[#0d382b] bg-[#03231a] p-6 hover:border-tamva-accent/60 transition-all hover:-translate-y-1 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 rounded-xl bg-tamva-accent/10 border border-tamva-accent/20 w-fit mb-5">
                    {feat.icon}
                  </div>
                  <span className="text-[10px] font-mono text-tamva-accent font-bold uppercase tracking-wider">
                    {feat.tag}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1 mb-2">{feat.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{feat.description}</p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#0d382b] text-[11px] text-slate-500 font-mono">
                  Optimized for Android &amp; iOS
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. Consent Demonstration Split */}
      <section className="py-20 sm:py-28 border-b border-[#0d382b] bg-[#021b14]/70">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-tamva-accent uppercase tracking-widest">
                Data Sovereignty
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                No Data Leaves Your Phone Without Explicit Consent
              </h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Traditional platforms sell or share personal credit data without transparency. 
                With TAMVA, when a bank, micro-financier, or employer requests your identity or income history, 
                you receive a prompt detailing exactly what is requested, why, and for how long.
              </p>
              <div className="space-y-3">
                {[
                  "Choose which specific fields to disclose (e.g. proof of age without revealing birthday)",
                  "Automatic expiration of shared permissions after completed approvals",
                  "Tamper-proof audit logs visible right in your app activity timeline",
                ].map((pt) => (
                  <div key={pt} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="text-tamva-accent font-bold">✓</span>
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl border border-[#0d382b] bg-[#03231a] p-6 sm:p-8 shadow-2xl">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4 flex items-center justify-between">
                  <span>Sample Consent Prompt</span>
                  <span className="text-tamva-accent font-bold">Encrypted End-to-End</span>
                </div>

                <div className="rounded-2xl border border-tamva-accent/30 bg-[#021812] p-5 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center font-bold text-white text-sm">
                      GCB
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">GCB Bank Loan Application</h4>
                      <p className="text-[11px] text-slate-400">Requesting verification of income &amp; KYC Level 2</p>
                    </div>
                  </div>

                  <div className="rounded-xl bg-[#03231a] p-3 text-xs space-y-2 border border-[#0d382b]">
                    <div className="flex justify-between text-slate-300">
                      <span>Full Legal Name</span>
                      <span className="text-tamva-accent">✓ Included</span>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>Monthly Income Range</span>
                      <span className="text-tamva-accent">✓ Included</span>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>Account Balance &amp; Transactions</span>
                      <span className="text-rose-400">✗ Hidden</span>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      className="flex-1 py-2.5 rounded-full bg-tamva-accent text-[#021812] font-bold text-xs hover:bg-emerald-400 transition-colors shadow-md"
                    >
                      Authorize (Touch ID)
                    </button>
                    <button
                      type="button"
                      className="px-5 py-2.5 rounded-full border border-white/20 text-white font-medium text-xs hover:bg-white/10 transition-colors"
                    >
                      Decline
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. CTA */}
      <CTA
        title="Experience the Future of African Mobile Banking"
        description="Join the waitlist to receive early invite access when the TAMVA App launches in Ghana."
        primaryLabel="Join Early Access Waitlist"
        primaryHref="/contact"
        secondaryLabel="Explore Institutional Solutions"
        secondaryHref="/solutions"
      />
    </div>
  );
}
