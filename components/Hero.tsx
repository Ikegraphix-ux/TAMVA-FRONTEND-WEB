import Link from "next/link";

export function Hero() {
  return (
    <section className="hero-pattern text-white relative pt-12 pb-20 overflow-hidden">
      {/* Polygonal background lines and glowing gradient shapes */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <svg className="w-full h-full" fill="none" viewBox="0 0 1440 700">
          <path
            d="M200,0 L600,700 M800,0 L1200,700"
            stroke="#00e676"
            strokeDasharray="4 8"
            strokeWidth="0.5"
          />
          <polygon
            fill="none"
            opacity="0.3"
            points="620,140 720,240 680,380 540,320"
            stroke="#00e676"
            strokeWidth="1"
          />
          <polygon
            fill="none"
            opacity="0.2"
            points="1100,280 1280,360 1200,520 1020,440"
            stroke="#00df82"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Copy & Call-to-actions */}
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-block text-tamva-accent font-semibold text-sm tracking-wide">
              Financial Freedom. For Everyone.
            </span>
            <h1 className="text-4xl sm:text-5xl xl:text-[56px] font-extrabold leading-[1.15] tracking-tight">
              <span className="text-tamva-accent">TAMVA</span> — Your Trusted Partner in Digital Finance
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
              Simple. Secure. Inclusive. TAMVA is a modern financial platform built for individuals,
              businesses and institutions across Africa. Send, receive, save and grow — all in one place.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="bg-tamva-accent hover:bg-emerald-400 text-[#021812] font-bold px-7 py-3 rounded-full inline-flex items-center gap-2 text-sm transition-all shadow-[0_0_20px_rgba(0,230,118,0.25)] hover:scale-[1.02]"
              >
                <span>Get Started</span>
                <span>→</span>
              </Link>
              <Link
                href="/products"
                className="border border-white/20 hover:border-tamva-accent hover:text-tamva-accent text-white font-medium px-7 py-3 rounded-full text-sm transition-all"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Showcase (Woman with phone + Mobile App Floating Card) */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end items-center mt-6 lg:mt-0">
            {/* Geometric polygon background frames */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[340px] h-[340px] border border-tamva-accent/20 rounded-full blur-2xl pointer-events-none" />

            {/* Main Portrait of Young African Woman using smartphone */}
            <div className="relative z-10 w-full max-w-[460px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-[#04281e]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhKq6OmIpEWx2I-Vtiu_PKuQ-t0LX3GTFcJgqnC0-L768Y8ur4bwJrFg-yf4cnoXinE9JkoieQoJwzTqWSoTQ6sGreO1Lwrqd2sByBA9WtoJT8XN7OnBP13L2C7FEN2cepYGZeZAWdLEQaOmvu_xJIu-FH1LbIwX_Puf7dXYvfEIy47_N-yX2opggUdvkyM6EBEdokGsB1aushUIYCXFBVPUCgfoly-JDQaecrJrQoVw9xE3JeRoX8"
                alt="Young smiling African professional looking at her phone"
                className="w-full h-[460px] sm:h-[520px] object-cover object-top"
                loading="eager"
              />
              {/* Subtle gradient overlay on portrait */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#021812] via-transparent to-transparent opacity-60 pointer-events-none" />
            </div>

            {/* Floating Mobile App UI Mockup Card */}
            <div className="absolute -bottom-6 -left-4 sm:left-4 z-20 w-[275px] bg-[#021c15]/95 backdrop-blur-md border border-tamva-accent/30 rounded-2xl p-4 shadow-2xl text-white">
              {/* App Card Header */}
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-tamva-accent rounded-sm flex items-center justify-center text-[10px] text-black font-bold">
                    T
                  </div>
                  <span className="text-xs font-bold tracking-wide">TAMVA</span>
                </div>
                <div className="w-6 h-6 rounded-full bg-slate-700 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAo0ZXu-dOwQUwbARz74AEwFZAe7pz0Pyo8X1ih-UU1IbDd7d8H5Z0b-Ey7orhWkxewNoSo_EzisBhuE3Qwb9rXsyCC_kuuoeQyYdYHY1mP7Rredw3uRaQhXxbxzDV-0kz8C6QUTqssZzjGgJFOfBDrbcB8q4c-ETweEI2FBaO-MRyydGPp5ilZmcv1_OHG0-n8YKKy4PBT9CaEQ_CA5cEmOtoVbguG0TTv4WO8RcFCXcY2egK11BHq"
                    alt="Ama avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <p className="text-[11px] text-slate-400">Good morning, Ama</p>

              {/* Available Balance Component */}
              <div className="bg-[#052d21] rounded-xl p-3 my-2 flex items-center justify-between border border-tamva-accent/20">
                <div>
                  <span className="text-[10px] text-slate-400 block">Available balance</span>
                  <span className="text-base font-bold text-white tracking-tight">GHS 4,850.00</span>
                </div>
                <button
                  type="button"
                  aria-label="Deposit"
                  className="w-6 h-6 rounded-full bg-tamva-accent text-black flex items-center justify-center font-bold text-xs hover:scale-110 transition-transform"
                >
                  +
                </button>
              </div>

              {/* Quick Action Icon Buttons */}
              <div className="grid grid-cols-4 gap-1 text-center py-2 text-[10px] text-slate-300">
                <div className="flex flex-col items-center">
                  <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center mb-1">↗</div>
                  <span>Send</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center mb-1">↙</div>
                  <span>Receive</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center mb-1">⇪</div>
                  <span>Top Up</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center mb-1">⋯</div>
                  <span>More</span>
                </div>
              </div>

              {/* Recent Transactions List */}
              <div className="mt-2">
                <div className="flex justify-between items-center text-[10px] mb-1">
                  <span className="font-semibold text-slate-300">Recent Transactions</span>
                  <Link href="/products/tamva-app" className="text-tamva-accent hover:underline">
                    View all
                  </Link>
                </div>
                <div className="space-y-1.5 text-[10px]">
                  <div className="flex justify-between items-center bg-black/20 p-1.5 rounded-lg">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs">📥</span>
                      <div>
                        <p className="font-medium text-slate-200 leading-tight">Received from John</p>
                        <p className="text-[9px] text-slate-400">Today, 10:34 AM</p>
                      </div>
                    </div>
                    <span className="font-semibold text-tamva-accent">+ GHS 500.00</span>
                  </div>

                  <div className="flex justify-between items-center bg-black/20 p-1.5 rounded-lg">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs">📤</span>
                      <div>
                        <p className="font-medium text-slate-200 leading-tight">Sent to Akosua</p>
                        <p className="text-[9px] text-slate-400">Today, 09:12 AM</p>
                      </div>
                    </div>
                    <span className="font-semibold text-rose-400">- GHS 250.00</span>
                  </div>

                  <div className="flex justify-between items-center bg-black/20 p-1.5 rounded-lg">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs">💳</span>
                      <div>
                        <p className="font-medium text-slate-200 leading-tight">Top Up (Mobile Money)</p>
                        <p className="text-[9px] text-slate-400">Yesterday, 6:45 PM</p>
                      </div>
                    </div>
                    <span className="font-semibold text-tamva-accent">+ GHS 100.00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right-Hand Tagline / Geometric Callout */}
            <div className="hidden xl:block absolute -right-20 top-1/4 max-w-[150px] text-right pointer-events-none">
              <p className="text-xs uppercase font-extrabold tracking-widest text-slate-300">
                MORE THAN A WALLET.
              </p>
              <p className="text-xs uppercase font-extrabold tracking-widest text-tamva-accent mt-1">
                A FINANCIAL ECOSYSTEM.
              </p>
              <div className="flex justify-end gap-1 mt-3">
                <span className="w-8 h-1 bg-tamva-accent rounded" />
                <span className="w-2 h-1 bg-tamva-accent/40 rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
