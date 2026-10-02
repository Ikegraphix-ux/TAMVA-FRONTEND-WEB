import type { Metadata } from "next";
import Link from "next/link";
import { getCanonicalAlternates } from "@/lib/site";
import { Container } from "@/components/Container";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CTA } from "@/components/CTA";
import { LinkButton } from "@/components/Button";

export const metadata: Metadata = {
  alternates: getCanonicalAlternates("/trust"),
  title: "Security & Trust — Public Disclosures",
  description:
    "Public security, privacy, data protection and vulnerability reporting information for TAMVA.",
};

const disclosures = [
  {
    title: "Security Architecture",
    status: "Limited Public Information",
    statusType: "info",
    description:
      "Detailed technical security controls are not published on this site. Institutions can contact TAMVA directly for security questionnaires and architecture reviews for potential integrations.",
    icon: (
      <svg className="w-5 h-5 text-tamva-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: "Privacy Disclosures",
    status: "Not Yet Published",
    statusType: "neutral",
    description:
      "A public privacy statement is not currently available on this site. Please do not submit confidential personal, identity or financial data through the general contact form.",
    icon: (
      <svg className="w-5 h-5 text-tamva-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
      </svg>
    ),
  },
  {
    title: "Data Protection",
    status: "Not Yet Published",
    statusType: "neutral",
    description:
      "A public data protection statement is not currently available on this site. Inquiries regarding data processing principles can be directed to the team.",
    icon: (
      <svg className="w-5 h-5 text-tamva-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Responsible Data Use",
    status: "Not Yet Published",
    statusType: "neutral",
    description:
      "A formal public statement describing responsible data use governance is not currently available on this site.",
    icon: (
      <svg className="w-5 h-5 text-tamva-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    title: "Regulatory & Compliance",
    status: "Direct Engagement",
    statusType: "info",
    description:
      "TAMVA does not publish a general compliance claim on this page. Prospective partners should contact the team regarding jurisdiction-specific regulatory alignment.",
    icon: (
      <svg className="w-5 h-5 text-tamva-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
  {
    title: "Certifications Disclosure",
    status: "Current Public Disclosure",
    statusType: "warning",
    description:
      "TAMVA does not claim ISO 27001, SOC 2 or PCI DSS certification. All security evaluations are handled in sandbox and partnership environments.",
    icon: (
      <svg className="w-5 h-5 text-tamva-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
  {
    title: "Vulnerability Disclosure",
    status: "Active Reporting Channel",
    statusType: "active",
    description:
      "We take platform integrity seriously. Use the contact form to report any suspected vulnerability. Please do not submit credentials, personal data, or customer records.",
    icon: (
      <svg className="w-5 h-5 text-tamva-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
      </svg>
    ),
  },
  {
    title: "Service Health & Status",
    status: "Private Monitoring",
    statusType: "neutral",
    description:
      "TAMVA does not currently publish a public status page. Integration partners are provided direct telemetry and uptime monitoring dashboards.",
    icon: (
      <svg className="w-5 h-5 text-tamva-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Security Communications",
    status: "Contact Channel",
    statusType: "active",
    description:
      "Use our secure inquiry form to route inquiries directly to our security engineering team for institutional inquiries or vulnerability reports.",
    icon: (
      <svg className="w-5 h-5 text-tamva-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function TrustPage() {
  return (
    <div className="bg-[#021812] text-white min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 border-b border-[#0d382b] hero-pattern">
        <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-tamva-accent/15 blur-[130px] rounded-full pointer-events-none" />

        <Container className="relative z-10">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Security & Trust" },
            ]}
          />

          <div className="mt-8 max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-tamva-accent/30 bg-tamva-accent/10 px-4 py-1.5 text-xs font-semibold text-tamva-accent uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-tamva-accent animate-pulse" />
              Public Governance &amp; Security Disclosures
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Radical Transparency. <br />
              <span className="text-tamva-accent">Uncompromising Integrity.</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl">
              Trust is the core pillar of financial infrastructure. This page provides clear, verifiable 
              disclosures regarding TAMVA&apos;s current security posture, privacy statements, and reporting procedures.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <LinkButton href="/contact" withArrow>
                Submit Security Inquiry
              </LinkButton>
              <LinkButton href="/about" variant="secondary">
                Our Operating Beliefs
              </LinkButton>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Interactive Disclosures Grid */}
      <section className="py-20 sm:py-28 border-b border-[#0d382b]">
        <Container>
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-bold text-tamva-accent uppercase tracking-widest">
              Public Claims Register
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Current Security Disclosures
            </h2>
            <p className="mt-4 text-slate-300 text-base sm:text-lg">
              We publish only claims that can be confirmed and supported with verifiable evidence.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {disclosures.map((item, idx) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[#0d382b] bg-[#03231a] p-6 flex flex-col justify-between hover:border-tamva-accent/60 transition-all hover:-translate-y-1 shadow-xl group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 rounded-xl bg-tamva-accent/10 border border-tamva-accent/20">
                      {item.icon}
                    </div>
                    <span className="text-xs font-mono text-slate-500 font-bold">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-tamva-accent transition-colors">
                    {item.title}
                  </h3>

                  <div className="mt-2 mb-3">
                    <span
                      className={`inline-block text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${
                        item.statusType === "active"
                          ? "bg-tamva-accent/15 border-tamva-accent/40 text-tamva-accent"
                          : item.statusType === "info"
                          ? "bg-blue-500/10 border-blue-500/30 text-blue-300"
                          : "bg-white/5 border-white/10 text-slate-400"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#0d382b] flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>Audited Register</span>
                  <span className="text-emerald-400 font-semibold">Active</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. Vulnerability Reporting Protocol Banner */}
      <section className="py-20 sm:py-28 border-b border-[#0d382b] bg-[#021b14]/70">
        <Container>
          <div className="max-w-4xl mx-auto rounded-3xl border border-[#0d382b] bg-[#03231a] p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                Coordinated Vulnerability Disclosure Process
              </h3>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
              TAMVA welcomes reports from security researchers and developers. If you identify a potential security vulnerability, 
              please submit a report with technical details through our secure contact channel.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 my-6">
              <div className="rounded-xl border border-[#0d382b] bg-[#021812] p-4 text-xs space-y-1.5">
                <span className="text-tamva-accent font-bold">Please Include:</span>
                <p className="text-slate-300">• Proof-of-concept steps or payload</p>
                <p className="text-slate-300">• Affected endpoint or component</p>
                <p className="text-slate-300">• Proposed remediation if known</p>
              </div>
              <div className="rounded-xl border border-[#0d382b] bg-[#021812] p-4 text-xs space-y-1.5">
                <span className="text-rose-400 font-bold">Please Do Not:</span>
                <p className="text-slate-300">• Access or modify real user accounts</p>
                <p className="text-slate-300">• Execute denial-of-service tests</p>
                <p className="text-slate-300">• Submit personal customer data</p>
              </div>
            </div>

            <div className="pt-2">
              <LinkButton href="/contact" withArrow>
                Submit Vulnerability Report
              </LinkButton>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. CTA */}
      <CTA
        title="Have an Institutional Security or Compliance Inquiry?"
        description="Our engineering and governance team can assist with security documentation and architectural walkthroughs."
        primaryLabel="Contact Security Team"
        primaryHref="/contact"
        secondaryLabel="About TAMVA"
        secondaryHref="/about"
      />
    </div>
  );
}
