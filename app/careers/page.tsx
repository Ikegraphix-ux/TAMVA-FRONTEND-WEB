import type { Metadata } from "next";
import { getCanonicalAlternates } from "@/lib/site";
import { Container } from "@/components/Container";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CTA } from "@/components/CTA";
import { LinkButton } from "@/components/Button";

export const metadata: Metadata = {
  alternates: getCanonicalAlternates("/careers"),
  title: "Careers — Build African Financial Rails with TAMVA",
  description: "Join TAMVA in building sovereign identity, instant verification, and risk intelligence infrastructure for Africa.",
};

const waysOfWorking = [
  {
    num: "01",
    title: "Ship deliberately & iterate with partners",
    desc: "We co-design with banks, fintechs, and regulators on the ground to solve practical economic friction.",
  },
  {
    num: "02",
    title: "Own your systems end-to-end",
    desc: "From database schema migrations to latency observability, our team takes complete ownership of mission-critical rails.",
  },
  {
    num: "03",
    title: "Extreme clarity through written documentation",
    desc: "Decisions, API contracts, and architecture design records are documented with precision and openness.",
  },
  {
    num: "04",
    title: "Engineered for real-world African networks",
    desc: "We optimize for unpredictable mobile network latency, diverse hardware, and seamless offline-friendly operations.",
  },
];

const openTracks = [
  {
    role: "Backend & Systems Infrastructure Engineer",
    team: "Core Platform",
    location: "Accra / Hybrid",
    stack: "TypeScript, Go, PostgreSQL, Redis, Docker",
  },
  {
    role: "Risk & Machine Learning Scientist",
    team: "Risk Intelligence",
    location: "Accra / Remote Africa",
    stack: "Python, PyTorch, Scikit-learn, Feature Stores",
  },
  {
    role: "Frontend & Mobile Experience Engineer",
    team: "TAMVA App",
    location: "Accra / Hybrid",
    stack: "React Native, Next.js, Tailwind CSS, TypeScript",
  },
  {
    role: "Regulatory & Institutional Partnerships Lead",
    team: "Growth & Governance",
    location: "Accra / Lagos",
    stack: "Banking Relations, Central Bank Sandboxes, AML/CFT",
  },
];

export default function CareersPage() {
  return (
    <div className="bg-[#021812] text-white min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 border-b border-[#0d382b] hero-pattern">
        <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-tamva-accent/15 blur-[130px] rounded-full pointer-events-none" />

        <Container className="relative z-10">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Careers" }]} />

          <div className="mt-8 max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-tamva-accent/30 bg-tamva-accent/10 px-4 py-1.5 text-xs font-semibold text-tamva-accent uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-tamva-accent animate-pulse" />
              Join the Mission
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Help Build the <br />
              <span className="text-tamva-accent">Trust Layer for African Finance.</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl">
              We are a dedicated team solving hard technical and institutional problems: making identity portable, 
              verifications instant, and risk assessments fair and explainable across emerging markets.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <LinkButton href="/contact" withArrow>
                Submit General Application
              </LinkButton>
              <LinkButton href="/about" variant="secondary">
                Learn About Our Vision
              </LinkButton>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Ways of Working */}
      <section className="py-20 sm:py-28 border-b border-[#0d382b]">
        <Container>
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-bold text-tamva-accent uppercase tracking-widest">
              Engineering Culture
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Build Carefully. Move with Conviction.
            </h2>
            <p className="mt-4 text-slate-300 text-base sm:text-lg">
              Operating principles that govern how we write code, make decisions, and collaborate.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {waysOfWorking.map((item) => (
              <div
                key={item.num}
                className="rounded-3xl border border-[#0d382b] bg-[#03231a] p-8 shadow-xl hover:border-tamva-accent/60 transition-all hover:-translate-y-1 flex gap-5 items-start group"
              >
                <span className="text-3xl font-black font-mono text-tamva-accent/40 group-hover:text-tamva-accent transition-colors shrink-0">
                  {item.num}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. Open Exploration Tracks */}
      <section className="py-20 sm:py-28 border-b border-[#0d382b] bg-[#021c15]/60">
        <Container>
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-bold text-tamva-accent uppercase tracking-widest">
              Growth Areas
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Areas of Interest &amp; Upcoming Roles
            </h2>
            <p className="mt-4 text-slate-300 text-sm sm:text-base">
              We frequently invite conversations with talented builders in the following core focus areas:
            </p>
          </div>

          <div className="space-y-4">
            {openTracks.map((role) => (
              <div
                key={role.role}
                className="rounded-2xl border border-[#0d382b] bg-[#03231a] p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-tamva-accent/50 transition-colors shadow-lg"
              >
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-lg font-bold text-white">{role.role}</h3>
                    <span className="text-xs font-mono text-tamva-accent bg-tamva-accent/10 px-2.5 py-0.5 rounded-full border border-tamva-accent/30">
                      {role.team}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 font-mono mt-1">
                    Stack: {role.stack}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-xs text-slate-300 font-mono bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
                    📍 {role.location}
                  </span>
                  <LinkButton href="/contact" variant="ghost">
                    Express Interest
                  </LinkButton>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. CTA */}
      <CTA
        title="Don&apos;t See an Exact Match?"
        description="We are always eager to talk with passionate engineers, cryptographers, and product designers who care about African financial infrastructure."
        primaryLabel="Send an Open Application"
        primaryHref="/contact"
        secondaryLabel="Explore Our Technology"
        secondaryHref="/developers"
      />
    </div>
  );
}
