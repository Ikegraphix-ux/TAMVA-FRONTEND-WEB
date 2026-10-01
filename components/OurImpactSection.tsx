export function OurImpactSection() {
  return (
    <section className="bg-[#011610] text-white py-20 relative overflow-hidden">
      {/* Glow ambient background */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 w-96 h-96 bg-tamva-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Impact Intro */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs uppercase font-extrabold tracking-wider text-tamva-accent block">
              OUR IMPACT
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              Building a more inclusive financial future
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              TAMVA is more than a platform — it&apos;s a movement to expand financial access,
              create opportunities and empower communities across Africa.
            </p>
          </div>

          {/* Impact Metrics 2x2 Grid */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-6">
            {/* Metric 1 */}
            <div className="space-y-2">
              <div className="w-8 h-8 rounded-lg bg-tamva-accent/10 text-tamva-accent flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="text-3xl font-extrabold text-white">1M+</div>
              <p className="text-xs text-slate-300 leading-normal">
                People to be reached in the first year
              </p>
            </div>

            {/* Metric 2 */}
            <div className="space-y-2">
              <div className="w-8 h-8 rounded-lg bg-tamva-accent/10 text-tamva-accent flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="text-3xl font-extrabold text-white">99.9%</div>
              <p className="text-xs text-slate-300 leading-normal">
                System uptime and reliability
              </p>
            </div>

            {/* Metric 3 */}
            <div className="space-y-2">
              <div className="w-8 h-8 rounded-lg bg-tamva-accent/10 text-tamva-accent flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="text-2xl font-extrabold text-white">Bank-grade</div>
              <p className="text-xs text-slate-300 leading-normal">
                Security &amp; compliance standards
              </p>
            </div>

            {/* Metric 4 */}
            <div className="space-y-2">
              <div className="w-8 h-8 rounded-lg bg-tamva-accent/10 text-tamva-accent flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="text-2xl font-extrabold text-white">Pan-African</div>
              <p className="text-xs text-slate-300 leading-normal">
                Built for Africa, ready for global growth
              </p>
            </div>
          </div>

          {/* Pan-African Glowing Network Map Graphic */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center mt-8 lg:mt-0">
            <div className="w-full max-w-[320px] aspect-square relative flex items-center justify-center">
              {/* SVG African Nodes Mesh Map */}
              <svg className="w-full h-full" viewBox="0 0 320 320" fill="none">
                {/* Outer African Continental Outline Nodes */}
                <path
                  d="M120,40 L190,40 L240,80 L230,120 L270,160 L230,200 L180,290 L140,290 L120,200 L80,140 L80,100 Z"
                  fill="none"
                  stroke="#00e676"
                  strokeOpacity="0.3"
                  strokeWidth="1"
                />
                {/* Internal Interconnecting Financial Mesh Lines */}
                <line x1="120" y1="40" x2="160" y2="100" stroke="#00e676" strokeOpacity="0.5" strokeWidth="1.2" />
                <line x1="190" y1="40" x2="160" y2="100" stroke="#00e676" strokeOpacity="0.5" strokeWidth="1.2" />
                <line x1="160" y1="100" x2="240" y2="80" stroke="#00e676" strokeOpacity="0.5" strokeWidth="1.2" />
                <line x1="160" y1="100" x2="140" y2="150" stroke="#00e676" strokeOpacity="0.7" strokeWidth="1.5" />
                <line x1="80" y1="140" x2="140" y2="150" stroke="#00e676" strokeOpacity="0.7" strokeWidth="1.5" />
                <line x1="140" y1="150" x2="200" y2="160" stroke="#00e676" strokeOpacity="0.8" strokeWidth="1.5" />
                <line x1="200" y1="160" x2="270" y2="160" stroke="#00e676" strokeOpacity="0.6" strokeWidth="1.2" />
                <line x1="200" y1="160" x2="180" y2="220" stroke="#00e676" strokeOpacity="0.7" strokeWidth="1.5" />
                <line x1="140" y1="150" x2="180" y2="220" stroke="#00e676" strokeOpacity="0.5" strokeWidth="1.2" />
                <line x1="180" y1="220" x2="160" y2="280" stroke="#00e676" strokeOpacity="0.8" strokeWidth="1.5" />

                {/* Glowing Node Dots (Major African hubs: Accra, Lagos, Nairobi, Johannesburg, Cairo, Dakar) */}
                <circle cx="160" cy="100" r="4" fill="#00e676" className="glow-dot" />
                <circle cx="80" cy="140" r="3.5" fill="#00e676" />
                <circle cx="140" cy="150" r="5" fill="#ffffff" stroke="#00e676" strokeWidth="2" className="glow-dot" />
                <circle cx="200" cy="160" r="4.5" fill="#00e676" className="glow-dot" />
                <circle cx="270" cy="160" r="3.5" fill="#00e676" />
                <circle cx="180" cy="220" r="4" fill="#00e676" className="glow-dot" />
                <circle cx="160" cy="280" r="4.5" fill="#00e676" className="glow-dot" />
              </svg>
            </div>
            <p className="text-xs text-tamva-accent font-semibold tracking-wide text-center mt-2">
              One platform. Many possibilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
