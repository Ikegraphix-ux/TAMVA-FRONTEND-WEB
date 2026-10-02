import type { Metadata } from "next";
import Link from "next/link";
import { getCanonicalAlternates } from "@/lib/site";
import { Container } from "@/components/Container";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CTA } from "@/components/CTA";
import { LinkButton } from "@/components/Button";

export const metadata: Metadata = {
  alternates: getCanonicalAlternates("/developers"),
  title: "Developers — APIs, Webhooks & SDKs",
  description:
    "Developer documentation, API reference, sandbox access, and integration specifications for the TAMVA platform.",
};

const apiModules = [
  {
    name: "Verification API",
    endpoint: "POST /v1/identity/verify",
    desc: "Perform sub-second identity verification against national ID databases, AML screening registers, and biometric liveness checks.",
    badge: "Core API",
    status: "Sandbox Ready",
    samplePayload: `{
  "document_type": "GH_NATIONAL_ID",
  "id_number": "GHA-001928374-1",
  "biometric_hash": "a9f8e72c0192b..."
}`,
  },
  {
    name: "Financial Passport API",
    endpoint: "POST /v1/passport/exchange",
    desc: "Request user-consented portable credit and income credentials. Exchange one-time auth tokens for cryptographically signed records.",
    badge: "Consent Rail",
    status: "Beta Active",
    samplePayload: `{
  "user_consent_token": "tok_consent_991823",
  "requested_scopes": ["identity.legal_name", "credit.summary"]
}`,
  },
  {
    name: "Risk Intelligence API",
    endpoint: "POST /v1/risk/score",
    desc: "Query predictive risk and creditworthiness scores formulated from alternative behavioral data for emerging African markets.",
    badge: "Analytics ML",
    status: "Private Alpha",
    samplePayload: `{
  "entity_id": "usr_8829031",
  "loan_amount_ghs": 5000,
  "tenor_months": 6
}`,
  },
  {
    name: "Webhooks & Settlement",
    endpoint: "POST /v1/webhooks/subscribe",
    desc: "Listen for real-time customer KYC state transitions, sanction watchlist alerts, and instant cross-border settlement confirmations.",
    badge: "Event Stream",
    status: "Sandbox Ready",
    samplePayload: `{
  "url": "https://api.merchant.com/webhooks",
  "events": ["verification.passed", "passport.revoked"]
}`,
  },
];

export default function DevelopersPage() {
  return (
    <div className="bg-[#021812] text-white min-h-screen">
      {/* 1. Developer Hero */}
      <section className="relative overflow-hidden pt-12 pb-20 border-b border-[#0d382b] hero-pattern">
        <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-tamva-accent/15 blur-[130px] rounded-full pointer-events-none" />

        <Container className="relative z-10">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Developers" }]} />

          <div className="mt-8 max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-tamva-accent/30 bg-tamva-accent/10 px-4 py-1.5 text-xs font-semibold text-tamva-accent uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-tamva-accent animate-pulse" />
              API Documentation &amp; Sandbox Hub
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Modern APIs for <br />
              <span className="text-tamva-accent">African Financial Infrastructure.</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl">
              Integrate real-time identity verification, consent-driven financial passport exchange, 
              and predictive risk intelligence into your fintech or banking applications with simple REST APIs.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <LinkButton href="/contact" withArrow>
                Request Sandbox API Keys
              </LinkButton>
              <LinkButton href="/products" variant="secondary">
                Explore Product Architecture
              </LinkButton>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Quickstart Code Sandbox Terminal */}
      <section className="py-20 sm:py-28 border-b border-[#0d382b]">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold text-tamva-accent uppercase tracking-widest">
                Developer Quickstart
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Integrate in Minutes, Not Months
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Our RESTful architecture follows predictable resource-oriented URLs, standard HTTP response codes, 
                and authenticated Bearer tokens. Test endpoints immediately in our sandboxed environment.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "Predictable JSON schemas with OpenAPI 3.1 specification",
                  "Idempotency keys on all state-mutating requests",
                  "Webhook signatures verified with SHA-256 HMAC",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                    <span className="text-tamva-accent font-bold">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-[#0d382b] bg-[#03231a] p-6 shadow-2xl overflow-hidden font-mono text-xs">
                <div className="flex items-center justify-between border-b border-[#0d382b] pb-3 mb-4 text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="ml-2 text-slate-300 text-[11px]">curl -X POST https://api.tamva.org/v1/identity/verify</span>
                  </div>
                  <span className="text-tamva-accent text-[11px]">cURL • Shell</span>
                </div>

                <pre className="text-slate-300 overflow-x-auto p-2 leading-relaxed bg-[#021812] rounded-xl border border-[#0d382b]">
                  <span className="text-emerald-400">curl</span> -X POST https://api.tamva.org/v1/identity/verify \<br />
                  &nbsp;&nbsp;-H <span className="text-amber-300">&quot;Authorization: Bearer tmv_test_9019283746&quot;</span> \<br />
                  &nbsp;&nbsp;-H <span className="text-amber-300">&quot;Content-Type: application/json&quot;</span> \<br />
                  &nbsp;&nbsp;-d <span className="text-amber-300">&apos;{"{"}</span><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-tamva-accent">&quot;document_type&quot;</span>: <span className="text-emerald-300">&quot;GH_NATIONAL_ID&quot;</span>,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-tamva-accent">&quot;id_number&quot;</span>: <span className="text-emerald-300">&quot;GHA-729104820-2&quot;</span>,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-tamva-accent">&quot;consent_verified&quot;</span>: <span className="text-emerald-400">true</span><br />
                  &nbsp;&nbsp;<span className="text-amber-300">{"}"}&apos;</span>
                </pre>

                <div className="mt-4 pt-3 border-t border-[#0d382b] flex items-center justify-between text-[11px] text-slate-400">
                  <span className="text-emerald-400 font-bold">200 OK • Latency: 142ms</span>
                  <span>Ghana National Registry Relay</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. API Modules Grid */}
      <section className="py-20 sm:py-28 border-b border-[#0d382b] bg-[#021c15]/60">
        <Container>
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-bold text-tamva-accent uppercase tracking-widest">
              API Catalogue
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Modular Integration Endpoints
            </h2>
            <p className="mt-4 text-slate-300 text-base sm:text-lg">
              Explore the four primary API suites powering identity, risk, and settlements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {apiModules.map((m) => (
              <div
                key={m.name}
                className="rounded-3xl border border-[#0d382b] bg-[#03231a] p-8 flex flex-col justify-between hover:border-tamva-accent/60 transition-all shadow-xl group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-tamva-accent bg-tamva-accent/10 border border-tamva-accent/30 px-3 py-0.5 rounded-full">
                      {m.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400 font-medium">
                      {m.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-tamva-accent transition-colors">
                    {m.name}
                  </h3>
                  <div className="mt-1 font-mono text-xs text-emerald-400 bg-[#021812] px-3 py-1.5 rounded-lg border border-[#0d382b] w-fit">
                    {m.endpoint}
                  </div>

                  <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {m.desc}
                  </p>

                  <div className="my-5 rounded-xl border border-[#0d382b] bg-[#021812] p-3 text-xs font-mono text-slate-300 overflow-x-auto">
                    <pre>{m.samplePayload}</pre>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#0d382b] flex items-center justify-between">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-tamva-accent hover:text-white transition-colors"
                  >
                    <span>Request Endpoint Credentials</span>
                    <span>→</span>
                  </Link>
                  <span className="text-xs text-slate-500 font-mono">REST / JSON</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. CTA */}
      <CTA
        title="Ready to Start Building with TAMVA APIs?"
        description="Our developer engineering team will issue sandbox credentials and assist your engineers with technical integration."
        primaryLabel="Request Sandbox Keys"
        primaryHref="/contact"
        secondaryLabel="Explore Institutional Solutions"
        secondaryHref="/solutions"
      />
    </div>
  );
}
