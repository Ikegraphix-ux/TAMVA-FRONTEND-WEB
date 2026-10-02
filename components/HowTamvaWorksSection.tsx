export function HowTamvaWorksSection() {
  return (
    <section className="py-20 bg-[#fafcfb] border-b border-slate-100">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Step-by-Step Instructions */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-600">
                GET STARTED
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
                How TAMVA Works
              </h2>
              <p className="text-slate-600 mt-3 text-sm sm:text-base leading-relaxed">
                Getting started is simple. In just a few steps, you can access a full range of financial services.
              </p>
            </div>

            {/* Steps list */}
            <div className="space-y-6 pt-2">
              {/* Step 1 */}
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-[#021812] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-sm">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">Create your account</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Sign up in minutes with your phone number or email.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-[#021812] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-sm">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">Verify your identity</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Complete a quick and secure KYC process.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-[#021812] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-sm">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">Start using TAMVA</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Send, receive, save and manage your finances.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Interactive Device Showcases (Laptop, Phone, Tablet) */}
          <div className="lg:col-span-7 relative flex items-center justify-center py-6">
            {/* Dashboard Laptop Frame */}
            <div className="w-full max-w-[620px] bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden relative z-0">
              {/* Window Chrome Bar */}
              <div className="bg-slate-900 px-4 py-3 flex items-center justify-between text-white border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold">
                  <span className="text-tamva-accent">TAMVA</span>
                  <span className="text-slate-400">Dashboard</span>
                </div>
                <div className="w-4" />
              </div>

              {/* Dashboard Body Preview */}
              <div className="p-6 bg-slate-50/70 text-slate-800 grid grid-cols-12 gap-4">
                {/* Dashboard Sidebar preview */}
                <div className="col-span-3 bg-white p-3 rounded-xl border border-slate-100 hidden sm:block space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" /> Dashboard
                  </div>
                  <div className="text-[11px] text-slate-500 space-y-2">
                    <div className="hover:text-slate-900 cursor-pointer">Customers</div>
                    <div className="hover:text-slate-900 cursor-pointer">Transactions</div>
                    <div className="hover:text-slate-900 cursor-pointer">Risk &amp; Fraud</div>
                    <div className="hover:text-slate-900 cursor-pointer">Reports</div>
                    <div className="hover:text-slate-900 cursor-pointer">Settings</div>
                  </div>
                </div>

                {/* Dashboard Main area */}
                <div className="col-span-12 sm:col-span-9 space-y-4">
                  {/* Metric Cards */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-white p-3 rounded-xl border border-slate-100">
                      <span className="text-[10px] text-slate-400 block font-medium">Total Balance</span>
                      <span className="text-xs sm:text-sm font-bold text-slate-900">GHS 128,450.00</span>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-slate-100">
                      <span className="text-[10px] text-slate-400 block font-medium">Transactions</span>
                      <span className="text-xs sm:text-sm font-bold text-slate-900">2,842</span>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-slate-100">
                      <span className="text-[10px] text-slate-400 block font-medium">Customers</span>
                      <span className="text-xs sm:text-sm font-bold text-slate-900">1,205</span>
                    </div>
                  </div>

                  {/* Transaction Volume Line Graph Preview */}
                  <div className="bg-white p-4 rounded-xl border border-slate-100">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-bold text-slate-800">Transaction Volume</span>
                      <span className="text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded font-semibold">
                        +24.5%
                      </span>
                    </div>
                    {/* Vector Chart representation */}
                    <div className="h-28 w-full">
                      <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 100">
                        <defs>
                          <linearGradient id="gradientMint" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0%" stopColor="#00e676" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#00e676" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M0,80 Q50,60 100,75 T200,45 T300,30 T400,20 L400,100 L0,100 Z"
                          fill="url(#gradientMint)"
                        />
                        <path
                          d="M0,80 Q50,60 100,75 T200,45 T300,30 T400,20"
                          fill="none"
                          stroke="#00df82"
                          strokeWidth="2.5"
                        />
                        <circle cx="200" cy="45" fill="#00e676" r="4" stroke="#ffffff" strokeWidth="2" />
                        <circle cx="300" cy="30" fill="#00e676" r="4" stroke="#ffffff" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Overlapping Tablet / Transactions UI Card */}
            <div className="hidden sm:block absolute -right-4 -bottom-6 w-[280px] bg-white rounded-2xl shadow-2xl border border-slate-200 p-4 z-20">
              <div className="flex justify-between items-center pb-2 border-b border-slate-100 mb-2">
                <span className="text-xs font-bold text-slate-800">Transactions</span>
                <span className="text-[10px] text-slate-400">All • Pending • Done</span>
              </div>
              <div className="space-y-2 text-[10px]">
                <div className="flex justify-between items-center py-1 border-b border-slate-50">
                  <div>
                    <span className="font-bold text-slate-800 block">Send</span>
                    <span className="text-slate-400 text-[9px]">12 Apr, 10:24</span>
                  </div>
                  <span className="font-bold text-slate-700">GHS 250.00</span>
                  <span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-700 text-[8px] font-semibold">
                    Successful
                  </span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-50">
                  <div>
                    <span className="font-bold text-slate-800 block">Receive</span>
                    <span className="text-slate-400 text-[9px]">12 Apr, 09:12</span>
                  </div>
                  <span className="font-bold text-slate-700">GHS 500.00</span>
                  <span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-700 text-[8px] font-semibold">
                    Successful
                  </span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <div>
                    <span className="font-bold text-slate-800 block">Top Up</span>
                    <span className="text-slate-400 text-[9px]">11 Apr, 17:45</span>
                  </div>
                  <span className="font-bold text-slate-700">GHS 100.00</span>
                  <span className="px-1.5 py-0.5 rounded bg-amber-100 text-amber-700 text-[8px] font-semibold">
                    Pending
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
