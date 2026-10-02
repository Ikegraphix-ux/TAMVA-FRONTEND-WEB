import type { Metadata } from "next";
import { getCanonicalAlternates } from "@/lib/site";
import { Container } from "@/components/Container";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  alternates: getCanonicalAlternates("/contact"),
  title: "Contact TAMVA — Partnerships & Integration Support",
  description: "Connect with TAMVA about institutional partnerships, developer sandbox access, and media inquiries.",
};

const contactChannels = [
  {
    title: "Institutional Partnerships",
    desc: "For commercial banks, micro-finance institutions, and regulatory sandbox coordination.",
    tag: "Priority Routing",
  },
  {
    title: "Developer & Sandbox Access",
    desc: "API credentials, technical documentation walkthroughs, and webhook test keys.",
    tag: "Technical Support",
  },
  {
    title: "Press & Media Inquiries",
    desc: "Executive briefings, research insights, and corporate communication requests.",
    tag: "Communications",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-[#021812] text-white min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-16 border-b border-[#0d382b] hero-pattern">
        <div className="absolute top-0 right-1/3 w-[500px] h-[250px] bg-tamva-accent/15 blur-[120px] rounded-full pointer-events-none" />

        <Container className="relative z-10">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />

          <div className="mt-8 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-tamva-accent/30 bg-tamva-accent/10 px-4 py-1.5 text-xs font-semibold text-tamva-accent uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-tamva-accent animate-pulse" />
              Direct Engagement Channels
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
              Let&apos;s Build <span className="text-tamva-accent">Together.</span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Whether you are an institution exploring verification infrastructure, a fintech integrating our sandbox APIs, 
              or a potential partner, our team is ready to assist.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. Interactive Form & Details Split */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 items-start">
            {/* Form Column */}
            <div className="lg:col-span-7 rounded-3xl border border-[#0d382b] bg-[#03231a] p-8 sm:p-12 shadow-2xl relative overflow-hidden">
              <div className="mb-8">
                <span className="text-xs font-mono text-tamva-accent uppercase tracking-wider font-semibold">
                  Secure Inquiry Form
                </span>
                <h2 className="text-2xl font-bold text-white mt-1">
                  Transmit Your Message
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  All transmissions are routed through encrypted corporate channels.
                </p>
              </div>

              <ContactForm />
            </div>

            {/* Channels & Location Column */}
            <div className="lg:col-span-5 space-y-6">
              {/* Response commitment badge */}
              <div className="rounded-2xl border border-tamva-accent/30 bg-[#03231a] p-6 shadow-xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-tamva-accent/15 border border-tamva-accent/30 flex items-center justify-center text-tamva-accent shrink-0 text-xl font-bold">
                  ⚡
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">&lt; 24-Hour Response</h3>
                  <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                    Inquiries are monitored and routed by our executive and solutions engineering teams.
                  </p>
                </div>
              </div>

              {/* Hub Location Card */}
              <div className="rounded-2xl border border-[#0d382b] bg-[#03231a] p-6 shadow-xl">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Operational Hub
                </span>
                <h3 className="text-lg font-bold text-white mt-1 mb-2">Accra, Ghana</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Headquartered in the vibrant technology and financial hub of Accra, serving the initial Ghanaian market and expanding throughout West Africa.
                </p>
                <div className="mt-4 pt-4 border-t border-[#0d382b] flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>Timezone: GMT+0</span>
                  <span className="text-tamva-accent">● Active Operations</span>
                </div>
              </div>

              {/* Specialized Inquiries Grid */}
              <div className="rounded-2xl border border-[#0d382b] bg-[#03231a] p-6 shadow-xl space-y-4">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
                  Inquiry Tracks
                </span>

                {contactChannels.map((c) => (
                  <div key={c.title} className="rounded-xl border border-[#0d382b]/80 bg-[#021812] p-4">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-sm font-bold text-white">{c.title}</h4>
                      <span className="text-[10px] text-tamva-accent font-mono font-semibold bg-tamva-accent/10 px-2 py-0.5 rounded">
                        {c.tag}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
