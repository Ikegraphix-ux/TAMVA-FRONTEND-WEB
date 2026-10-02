import { LinkButton } from "./Button";
import { Container } from "./Container";

export function CTA({
  title = "Ready to build the future of African digital finance?",
  description = "Connect with our team to explore integration opportunities, sandbox access, and partnership discussions.",
  primaryLabel = "Request Sandbox Access",
  primaryHref = "/contact",
  secondaryLabel = "Explore Documentation",
  secondaryHref = "/developers",
}: {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-[#021812] py-20 sm:py-28 border-t border-[#0d382b]">
      {/* Background ambient radial gradients & grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-tamva-accent/15 blur-[120px] rounded-full" />
        <svg className="w-full h-full" fill="none" viewBox="0 0 1440 400">
          <defs>
            <pattern id="cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#00e676" strokeWidth="0.5" strokeOpacity="0.08" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>
      </div>

      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl rounded-3xl border border-[#0d382b] bg-[#03231a]/80 backdrop-blur-xl p-8 sm:p-14 text-center shadow-2xl shadow-black/60 relative overflow-hidden">
          <div className="inline-flex items-center gap-2 rounded-full border border-tamva-accent/30 bg-tamva-accent/10 px-3.5 py-1 text-xs font-semibold text-tamva-accent uppercase tracking-wider mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-tamva-accent animate-pulse" />
            Empowering African Economies
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.2]">
            {title}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <LinkButton href={primaryHref} withArrow>
              {primaryLabel}
            </LinkButton>
            {secondaryLabel && secondaryHref && (
              <LinkButton href={secondaryHref} variant="secondary">
                {secondaryLabel}
              </LinkButton>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
