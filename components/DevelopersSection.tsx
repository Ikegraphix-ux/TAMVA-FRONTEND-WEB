"use client";

import Link from "next/link";
import { useState } from "react";

type TabId = "api" | "guides" | "sdks" | "webhooks" | "faqs";
type CodeLang = "curl" | "python" | "node";

export function DevelopersSection() {
  const [activeTab, setActiveTab] = useState<TabId>("api");
  const [codeLang, setCodeLang] = useState<CodeLang>("curl");
  const [copiedSdk, setCopiedSdk] = useState<string | null>(null);
  const [simulating, setSimulating] = useState(false);
  const [simulatedPayload, setSimulatedPayload] = useState<{
    eventId: string;
    timestamp: string;
  }>({
    eventId: "evt_preview_90248201a4",
    timestamp: "2025-05-18T10:45:14.102Z",
  });

  const handleCopy = (text: string, id: string) => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedSdk(id);
      setTimeout(() => setCopiedSdk(null), 2000);
    }
  };

  const handleSimulateWebhook = () => {
    setSimulating(true);
    setTimeout(() => {
      const now = new Date().toISOString();
      const randomId = "evt_preview_" + Math.random().toString(36).substring(2, 10);
      setSimulatedPayload({
        eventId: randomId,
        timestamp: now,
      });
      setSimulating(false);
    }, 450);
  };

  return (
    <section className="py-20 bg-[#fafcfb]" id="docs">
      <div className="max-w-[1400px] mx-auto px-6 space-y-8">
        {/* Header & Overview Block with Tab Navigation */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2 border-b border-slate-200">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-600 block">
                DEVELOPERS &amp; INTEGRATION
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 text-emerald-800">
                Developer Preview
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
              Explore Our Documentation
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
              Explore planned developer tools, integration workflows, and API architectures designed for African financial connectivity.
            </p>
          </div>

          {/* Right Side CTA / Developer Quick Actions */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#021812] hover:bg-black text-tamva-accent border border-tamva-accent/40 font-semibold text-xs px-5 py-2.5 rounded-full transition-all shadow-sm"
            >
              <span>Ask About Sandbox</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </Link>
            <Link
              href="/developers"
              className="inline-flex items-center gap-2 bg-tamva-accent hover:bg-emerald-400 text-black font-bold text-xs px-5 py-2.5 rounded-full transition-all shadow-[0_0_15px_rgba(0,230,118,0.25)]"
            >
              <span>View Documentation Map</span>
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* Informational Preview Notice */}
        <div className="bg-emerald-50 border border-emerald-200/80 rounded-2xl p-4 text-xs text-emerald-900 flex items-start gap-3">
          <span className="text-base shrink-0">ℹ️</span>
          <div>
            <p className="font-semibold">Integration Direction &amp; Preview</p>
            <p className="text-emerald-800 mt-0.5 leading-relaxed">
              The examples below illustrate TAMVA&apos;s planned developer architecture. Specifications and sandbox availability are being prepared and will be verified against the backend contract prior to public release.
            </p>
          </div>
        </div>

        {/* Interactive Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200 no-scrollbar" role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "api"}
            onClick={() => setActiveTab("api")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs transition-all whitespace-nowrap ${
              activeTab === "api"
                ? "bg-[#021812] text-tamva-accent font-bold shadow-sm border border-emerald-500/30"
                : "font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-transparent"
            }`}
          >
            <span>&lt;/&gt;</span>
            <span>API Architecture</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "guides"}
            onClick={() => setActiveTab("guides")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs transition-all whitespace-nowrap ${
              activeTab === "guides"
                ? "bg-[#021812] text-tamva-accent font-bold shadow-sm border border-emerald-500/30"
                : "font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-transparent"
            }`}
          >
            <span>📖</span>
            <span>Developer Guides</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "sdks"}
            onClick={() => setActiveTab("sdks")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs transition-all whitespace-nowrap ${
              activeTab === "sdks"
                ? "bg-[#021812] text-tamva-accent font-bold shadow-sm border border-emerald-500/30"
                : "font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-transparent"
            }`}
          >
            <span>📦</span>
            <span>SDK Libraries</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "webhooks"}
            onClick={() => setActiveTab("webhooks")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs transition-all whitespace-nowrap ${
              activeTab === "webhooks"
                ? "bg-[#021812] text-tamva-accent font-bold shadow-sm border border-emerald-500/30"
                : "font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-transparent"
            }`}
          >
            <span>⚡</span>
            <span>Webhooks &amp; Events</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "faqs"}
            onClick={() => setActiveTab("faqs")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs transition-all whitespace-nowrap ${
              activeTab === "faqs"
                ? "bg-[#021812] text-tamva-accent font-bold shadow-sm border border-emerald-500/30"
                : "font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-transparent"
            }`}
          >
            <span>💬</span>
            <span>Guides &amp; FAQs</span>
          </button>
        </div>

        {/* Dynamic Tab Panes */}
        <div>
          {/* TAB 1: API DOCS */}
          {activeTab === "api" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left: API Highlights & Quick Specs */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold tracking-wider uppercase text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                        Planned Schema
                      </span>
                      <span className="text-xs text-slate-400 font-mono">
                        Base: https://api.tamva.com/v1
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">
                      Multi-Rail Transfer Architecture
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Conceptual endpoint structure for handling cross-rail transactions, mobile money integration, and payout execution.
                    </p>
                    <div className="space-y-2 pt-2 text-xs">
                      <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                        <div className="flex items-center gap-2 font-mono">
                          <span className="px-2 py-0.5 rounded bg-emerald-600 text-white font-bold text-[10px]">
                            POST
                          </span>
                          <span className="text-slate-800 font-semibold">/v1/transfers</span>
                        </div>
                        <span className="text-[11px] text-slate-500">Initiate Transfer</span>
                      </div>

                      <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                        <div className="flex items-center gap-2 font-mono">
                          <span className="px-2 py-0.5 rounded bg-blue-600 text-white font-bold text-[10px]">
                            GET
                          </span>
                          <span className="text-slate-800 font-semibold">/v1/transfers/&#123;id&#125;</span>
                        </div>
                        <span className="text-[11px] text-slate-500">Fetch Status</span>
                      </div>

                      <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                        <div className="flex items-center gap-2 font-mono">
                          <span className="px-2 py-0.5 rounded bg-amber-600 text-white font-bold text-[10px]">
                            POST
                          </span>
                          <span className="text-slate-800 font-semibold">/v1/charges</span>
                        </div>
                        <span className="text-[11px] text-slate-500">Collect Payment</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 pt-2 text-center text-xs">
                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                        <span className="block text-[10px] text-slate-400 uppercase font-semibold">
                          Auth Model
                        </span>
                        <span className="font-bold text-slate-800">Bearer Token</span>
                      </div>
                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                        <span className="block text-[10px] text-slate-400 uppercase font-semibold">
                          Format
                        </span>
                        <span className="font-bold text-emerald-600">JSON REST</span>
                      </div>
                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                        <span className="block text-[10px] text-slate-400 uppercase font-semibold">
                          Status
                        </span>
                        <span className="font-bold text-slate-800">Preview</span>
                      </div>
                    </div>
                  </div>

                  {/* Feature mini callouts */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-tamva-lightMint flex items-center justify-center text-emerald-700 text-sm">
                        🔒
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-900">Signed Payloads</p>
                        <p className="text-[10px] text-slate-500">Cryptographic headers</p>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-tamva-lightMint flex items-center justify-center text-emerald-700 text-sm">
                        ⚡
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-900">Sandbox Preview</p>
                        <p className="text-[10px] text-slate-500">Available on request</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Interactive Code Studio & Live Response Preview */}
                <div className="lg:col-span-7 bg-[#021812] text-white rounded-3xl border border-[#0d382b] shadow-2xl overflow-hidden flex flex-col">
                  {/* Terminal Header & Language Selector */}
                  <div className="px-5 py-3.5 bg-[#03231a] border-b border-[#0d382b] flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                        <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                        <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                      </div>
                      <span className="text-xs font-mono text-slate-300 font-semibold">
                        POST /v1/transfers (Example)
                      </span>
                    </div>

                    {/* Code Language Switcher */}
                    <div className="flex items-center bg-[#01140e] p-1 rounded-xl border border-[#0d382b] text-[11px] font-mono">
                      <button
                        type="button"
                        onClick={() => setCodeLang("curl")}
                        className={`px-2.5 py-1 rounded-lg transition-all ${
                          codeLang === "curl"
                            ? "font-semibold text-[#021812] bg-tamva-accent"
                            : "text-slate-400 hover:text-white"
                        }`}
                      >
                        cURL
                      </button>
                      <button
                        type="button"
                        onClick={() => setCodeLang("python")}
                        className={`px-2.5 py-1 rounded-lg transition-all ${
                          codeLang === "python"
                            ? "font-semibold text-[#021812] bg-tamva-accent"
                            : "text-slate-400 hover:text-white"
                        }`}
                      >
                        Python
                      </button>
                      <button
                        type="button"
                        onClick={() => setCodeLang("node")}
                        className={`px-2.5 py-1 rounded-lg transition-all ${
                          codeLang === "node"
                            ? "font-semibold text-[#021812] bg-tamva-accent"
                            : "text-slate-400 hover:text-white"
                        }`}
                      >
                        Node.js
                      </button>
                    </div>
                  </div>

                  {/* Code Snippet Area */}
                  <div className="p-5 font-mono text-xs leading-relaxed overflow-x-auto code-scroll border-b border-[#0d382b] bg-[#021812]">
                    {codeLang === "curl" && (
                      <pre className="text-slate-200">
                        <code>
                          <span className="text-slate-500"># Conceptual transfer request example</span>
                          {"\n"}curl -X POST https://api.tamva.com/v1/transfers \{"\n"}  -H{" "}
                          <span className="text-tamva-accent">&quot;Authorization: Bearer sec_preview_...&quot;</span> \
                          {"\n"}  -H <span className="text-tamva-accent">&quot;Content-Type: application/json&quot;</span> \
                          {"\n"}  -d <span className="text-emerald-300">
                            {`'{\n    "source": "balance_ghs",\n    "amount": 25000,\n    "currency": "GHS",\n    "recipient": {\n      "type": "mobile_money",\n      "provider": "MTN",\n      "phone": "+233244123456",\n      "name": "Kofi Mensah"\n    },\n    "reference": "TAM-TRF-982104"\n  }'`}
                          </span>
                        </code>
                      </pre>
                    )}

                    {codeLang === "python" && (
                      <pre className="text-slate-200">
                        <code>
                          <span className="text-slate-500"># Conceptual Python SDK usage</span>
                          {"\n"}
                          <span className="text-purple-400">import</span> tamva
                          {"\n\n"}client = tamva.Client(api_key=
                          <span className="text-tamva-accent">&quot;sec_preview_...&quot;</span>)
                          {"\n\n"}transfer = client.transfers.create(
                          {"\n"}    amount=<span className="text-amber-300">250.00</span>,
                          {"\n"}    currency=<span className="text-emerald-300">&quot;GHS&quot;</span>,
                          {"\n"}    recipient=&#123;
                          {"\n"}        <span className="text-emerald-300">&quot;type&quot;</span>:{" "}
                          <span className="text-emerald-300">&quot;mobile_money&quot;</span>,
                          {"\n"}        <span className="text-emerald-300">&quot;provider&quot;</span>:{" "}
                          <span className="text-emerald-300">&quot;MTN&quot;</span>,
                          {"\n"}        <span className="text-emerald-300">&quot;phone&quot;</span>:{" "}
                          <span className="text-emerald-300">&quot;+233244123456&quot;</span>
                          {"\n"}    &#125;,
                          {"\n"}    reference=<span className="text-emerald-300">&quot;TAM-TRF-982104&quot;</span>
                          {"\n"})
                          {"\n"}
                          <span className="text-purple-400">print</span>(transfer.status)
                        </code>
                      </pre>
                    )}

                    {codeLang === "node" && (
                      <pre className="text-slate-200">
                        <code>
                          <span className="text-slate-500">{"// Conceptual Node.js client usage"}</span>
                          {"\n"}
                          <span className="text-purple-400">const</span> &#123; Tamva &#125; ={" "}
                          <span className="text-purple-400">require</span>(
                          <span className="text-emerald-300">&apos;@tamva/sdk&apos;</span>);
                          {"\n"}
                          <span className="text-purple-400">const</span> tamva ={" "}
                          <span className="text-purple-400">new</span> Tamva(&#123; apiKey:{" "}
                          <span className="text-tamva-accent">&apos;sec_preview_...&apos;</span> &#125;);
                          {"\n\n"}
                          <span className="text-purple-400">const</span> payout ={" "}
                          <span className="text-purple-400">await</span> tamva.transfers.create(&#123;
                          {"\n"}  amount: <span className="text-amber-300">250.00</span>,
                          {"\n"}  currency: <span className="text-emerald-300">&apos;GHS&apos;</span>,
                          {"\n"}  recipient: &#123;
                          {"\n"}    type: <span className="text-emerald-300">&apos;mobile_money&apos;</span>,
                          {"\n"}    provider: <span className="text-emerald-300">&apos;MTN&apos;</span>,
                          {"\n"}    phone: <span className="text-emerald-300">&apos;+233244123456&apos;</span>
                          {"\n"}  &#125;,
                          {"\n"}  reference: <span className="text-emerald-300">&apos;TAM-TRF-982104&apos;</span>
                          {"\n"}&#125;);
                          {"\n\n"}console.log(payout.id, payout.status);
                        </code>
                      </pre>
                    )}
                  </div>

                  {/* Schema Response Preview Box */}
                  <div className="p-5 bg-[#011610] font-mono text-xs">
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#0d382b]/80">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold">
                          Sample Response Structure
                        </span>
                      </div>
                      <span className="text-[10px] text-tamva-accent font-semibold bg-emerald-950/60 border border-emerald-500/20 px-2 py-0.5 rounded">
                        200 OK Example
                      </span>
                    </div>
                    <pre className="text-slate-300 text-[11px] leading-relaxed overflow-x-auto code-scroll">
                      <code>
                        &#123;
                        {"\n"}  <span className="text-emerald-400">&quot;status&quot;</span>:{" "}
                        <span className="text-tamva-accent">&quot;completed&quot;</span>,
                        {"\n"}  <span className="text-emerald-400">&quot;transfer_id&quot;</span>:{" "}
                        <span className="text-white">&quot;trf_ghs_9841289410&quot;</span>,
                        {"\n"}  <span className="text-emerald-400">&quot;amount&quot;</span>:{" "}
                        <span className="text-amber-300">25000</span>,
                        {"\n"}  <span className="text-emerald-400">&quot;currency&quot;</span>:{" "}
                        <span className="text-emerald-300">&quot;GHS&quot;</span>,
                        {"\n"}  <span className="text-emerald-400">&quot;recipient_name&quot;</span>:{" "}
                        <span className="text-white">&quot;Kofi Mensah&quot;</span>,
                        {"\n"}  <span className="text-emerald-400">&quot;network&quot;</span>:{" "}
                        <span className="text-white">&quot;MTN Mobile Money&quot;</span>,
                        {"\n"}  <span className="text-emerald-400">&quot;settled_at&quot;</span>:{" "}
                        <span className="text-slate-400">&quot;2025-05-18T10:45:12.308Z&quot;</span>
                        {"\n"}&#125;
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: DEVELOPER GUIDES */}
          {activeTab === "guides" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Guide 1 */}
              <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700">
                      Planned Topic
                    </span>
                    <span className="text-xs text-slate-400">Quickstart</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Mobile Money Integration Concepts
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Overview of planned payment collection workflows across major mobile network operators in West Africa.
                  </p>
                  <div className="pt-2 flex items-center gap-2 text-[11px] text-slate-500 font-mono">
                    <span className="bg-slate-100 px-2 py-0.5 rounded">REST</span>
                    <span className="bg-slate-100 px-2 py-0.5 rounded">MoMo</span>
                  </div>
                </div>
                <div className="pt-5 border-t border-slate-100 mt-4 flex items-center justify-between">
                  <Link href="/developers" className="text-xs font-semibold text-emerald-600 hover:underline">
                    View in doc map →
                  </Link>
                  <span className="text-xs text-slate-400">Overview</span>
                </div>
              </div>

              {/* Guide 2 */}
              <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700">
                      Planned Topic
                    </span>
                    <span className="text-xs text-slate-400">Payouts</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Automated Batch Disbursements
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Architectural design for disbursing settlements, vendor payments, and recurring payrolls programmatically.
                  </p>
                  <div className="pt-2 flex items-center gap-2 text-[11px] text-slate-500 font-mono">
                    <span className="bg-slate-100 px-2 py-0.5 rounded">Batch API</span>
                    <span className="bg-slate-100 px-2 py-0.5 rounded">Webhooks</span>
                  </div>
                </div>
                <div className="pt-5 border-t border-slate-100 mt-4 flex items-center justify-between">
                  <Link href="/developers" className="text-xs font-semibold text-emerald-600 hover:underline">
                    View in doc map →
                  </Link>
                  <span className="text-xs text-slate-400">Overview</span>
                </div>
              </div>

              {/* Guide 3 */}
              <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-purple-50 text-purple-700">
                      Planned Topic
                    </span>
                    <span className="text-xs text-slate-400">Security</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Webhook Verification &amp; Security
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Guidelines for verifying cryptographic payload signatures and safeguarding listener endpoints.
                  </p>
                  <div className="pt-2 flex items-center gap-2 text-[11px] text-slate-500 font-mono">
                    <span className="bg-slate-100 px-2 py-0.5 rounded">HMAC-SHA256</span>
                    <span className="bg-slate-100 px-2 py-0.5 rounded">Signing</span>
                  </div>
                </div>
                <div className="pt-5 border-t border-slate-100 mt-4 flex items-center justify-between">
                  <Link href="/developers" className="text-xs font-semibold text-emerald-600 hover:underline">
                    View in doc map →
                  </Link>
                  <span className="text-xs text-slate-400">Overview</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: SDKs & LIBRARIES */}
          {activeTab === "sdks" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Node.js / TS */}
              <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl">⚡</span>
                  <span className="text-[10px] font-mono text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                    Planned
                  </span>
                </div>
                <h4 className="font-bold text-slate-900 text-sm">Node.js &amp; TypeScript</h4>
                <p className="text-xs text-slate-500">
                  Client library structure with complete type declarations and Promise wrappers.
                </p>
                <div className="bg-slate-900 text-tamva-accent font-mono text-[11px] p-2.5 rounded-xl flex items-center justify-between">
                  <code>@tamva/sdk</code>
                  <button
                    type="button"
                    onClick={() => handleCopy("@tamva/sdk", "node")}
                    className="text-slate-400 hover:text-white cursor-pointer text-xs ml-2"
                    title="Copy name"
                  >
                    {copiedSdk === "node" ? "✓" : "📋"}
                  </button>
                </div>
              </div>

              {/* Python */}
              <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl">🐍</span>
                  <span className="text-[10px] font-mono text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                    Planned
                  </span>
                </div>
                <h4 className="font-bold text-slate-900 text-sm">Python</h4>
                <p className="text-xs text-slate-500">
                  Planned Python package supporting synchronous and asynchronous client workflows.
                </p>
                <div className="bg-slate-900 text-tamva-accent font-mono text-[11px] p-2.5 rounded-xl flex items-center justify-between">
                  <code>tamva-python</code>
                  <button
                    type="button"
                    onClick={() => handleCopy("tamva-python", "python")}
                    className="text-slate-400 hover:text-white cursor-pointer text-xs ml-2"
                    title="Copy name"
                  >
                    {copiedSdk === "python" ? "✓" : "📋"}
                  </button>
                </div>
              </div>

              {/* PHP / Laravel */}
              <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl">🐘</span>
                  <span className="text-[10px] font-mono text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                    Planned
                  </span>
                </div>
                <h4 className="font-bold text-slate-900 text-sm">PHP &amp; Laravel</h4>
                <p className="text-xs text-slate-500">
                  Planned PHP package with Laravel integration helpers and webhook handling.
                </p>
                <div className="bg-slate-900 text-tamva-accent font-mono text-[11px] p-2.5 rounded-xl flex items-center justify-between">
                  <code>tamva-php</code>
                  <button
                    type="button"
                    onClick={() => handleCopy("tamva-php", "php")}
                    className="text-slate-400 hover:text-white cursor-pointer text-xs ml-2"
                    title="Copy name"
                  >
                    {copiedSdk === "php" ? "✓" : "📋"}
                  </button>
                </div>
              </div>

              {/* React Native / Mobile */}
              <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl">📱</span>
                  <span className="text-[10px] font-mono text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                    Planned
                  </span>
                </div>
                <h4 className="font-bold text-slate-900 text-sm">Mobile SDK</h4>
                <p className="text-xs text-slate-500">
                  Planned mobile client SDK for native and cross-platform mobile frameworks.
                </p>
                <div className="bg-slate-900 text-tamva-accent font-mono text-[11px] p-2.5 rounded-xl flex items-center justify-between">
                  <code>@tamva/react-native</code>
                  <button
                    type="button"
                    onClick={() => handleCopy("@tamva/react-native", "rn")}
                    className="text-slate-400 hover:text-white cursor-pointer text-xs ml-2"
                    title="Copy name"
                  >
                    {copiedSdk === "rn" ? "✓" : "📋"}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: WEBHOOKS & EVENTS */}
          {activeTab === "webhooks" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 space-y-4">
                <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm space-y-3">
                  <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-600 block">
                    EVENT NOTIFICATIONS
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">
                    Event-Driven Architecture
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    TAMVA&apos;s planned webhook framework is designed to deliver asynchronous event updates whenever transaction or account states change.
                  </p>
                  <div className="space-y-2 pt-2 text-xs">
                    <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-xl">
                      <span className="font-mono font-semibold text-slate-800">charge.success</span>
                      <span className="text-emerald-600 text-[11px] font-semibold">Payment captured</span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-xl">
                      <span className="font-mono font-semibold text-slate-800">transfer.completed</span>
                      <span className="text-emerald-600 text-[11px] font-semibold">Payout settled</span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-xl">
                      <span className="font-mono font-semibold text-slate-800">customer.verified</span>
                      <span className="text-emerald-600 text-[11px] font-semibold">Verification event</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleSimulateWebhook}
                    disabled={simulating}
                    className="w-full mt-3 bg-[#021812] hover:bg-black text-tamva-accent text-xs font-bold py-2.5 rounded-full border border-tamva-accent/30 transition-all cursor-pointer shadow-sm disabled:opacity-60"
                  >
                    {simulating ? "🚀 Generating sample payload..." : "⚡ Generate Sample Webhook Event"}
                  </button>
                </div>
              </div>

              <div className="lg:col-span-7 bg-[#021812] text-white rounded-3xl border border-[#0d382b] p-6 shadow-2xl">
                <div className="flex items-center justify-between pb-3 border-b border-[#0d382b]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-tamva-accent animate-pulse" />
                    <span className="text-xs font-mono font-bold text-slate-200">
                      Webhook Payload Schema Example
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">Header: X-TAMVA-Signature</span>
                </div>
                <pre className="pt-4 text-xs font-mono text-slate-300 overflow-x-auto code-scroll leading-relaxed">
                  <code>
                    &#123;
                    {"\n"}  <span className="text-emerald-400">&quot;event&quot;</span>:{" "}
                    <span className="text-tamva-accent">&quot;transfer.completed&quot;</span>,
                    {"\n"}  <span className="text-emerald-400">&quot;event_id&quot;</span>:{" "}
                    <span className="text-white">&quot;{simulatedPayload.eventId}&quot;</span>,
                    {"\n"}  <span className="text-emerald-400">&quot;created_at&quot;</span>:{" "}
                    <span className="text-slate-400">&quot;{simulatedPayload.timestamp}&quot;</span>,
                    {"\n"}  <span className="text-emerald-400">&quot;data&quot;</span>: &#123;
                    {"\n"}    <span className="text-emerald-400">&quot;id&quot;</span>:{" "}
                    <span className="text-white">&quot;trf_ghs_9841289410&quot;</span>,
                    {"\n"}    <span className="text-emerald-400">&quot;status&quot;</span>:{" "}
                    <span className="text-tamva-accent">&quot;completed&quot;</span>,
                    {"\n"}    <span className="text-emerald-400">&quot;amount&quot;</span>:{" "}
                    <span className="text-amber-300">250.00</span>,
                    {"\n"}    <span className="text-emerald-400">&quot;currency&quot;</span>:{" "}
                    <span className="text-emerald-300">&quot;GHS&quot;</span>,
                    {"\n"}    <span className="text-emerald-400">&quot;fee&quot;</span>:{" "}
                    <span className="text-amber-300">1.25</span>,
                    {"\n"}    <span className="text-emerald-400">&quot;reference&quot;</span>:{" "}
                    <span className="text-white">&quot;TAM-TRF-982104&quot;</span>,
                    {"\n"}    <span className="text-emerald-400">&quot;destination&quot;</span>: &#123;
                    {"\n"}      <span className="text-emerald-400">&quot;type&quot;</span>:{" "}
                    <span className="text-white">&quot;mobile_money&quot;</span>,
                    {"\n"}      <span className="text-emerald-400">&quot;channel&quot;</span>:{" "}
                    <span className="text-white">&quot;MTN&quot;</span>,
                    {"\n"}      <span className="text-emerald-400">&quot;phone&quot;</span>:{" "}
                    <span className="text-white">&quot;+233244123456&quot;</span>
                    {"\n"}    &#125;
                    {"\n"}  &#125;
                    {"\n"}&#125;
                  </code>
                </pre>
              </div>
            </div>
          )}

          {/* TAB 5: USER GUIDES & FAQS */}
          {activeTab === "faqs" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* FAQ 1 */}
              <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold text-xs bg-emerald-50 px-2 py-0.5 rounded">
                    Integrations
                  </span>
                  <h4 className="font-bold text-slate-900 text-sm">
                    What integration models will TAMVA support?
                  </h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  TAMVA is designing REST API interfaces and webhook event listeners for mobile money, verification workflows, and business account operations.
                </p>
              </div>

              {/* FAQ 2 */}
              <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold text-xs bg-emerald-50 px-2 py-0.5 rounded">
                    Sandbox
                  </span>
                  <h4 className="font-bold text-slate-900 text-sm">
                    How can developers inquire about sandbox access?
                  </h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Sandbox availability is being prepared. Teams interested in early integration discussions can reach out directly to the TAMVA team.
                </p>
              </div>

              {/* FAQ 3 */}
              <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold text-xs bg-emerald-50 px-2 py-0.5 rounded">
                    Security &amp; Trust
                  </span>
                  <h4 className="font-bold text-slate-900 text-sm">
                    How does TAMVA approach security and data handling?
                  </h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  TAMVA follows principled data protection practices with an emphasis on explicit user consent and transparency. Specific compliance details will be published as they are finalized.
                </p>
              </div>

              {/* FAQ 4 */}
              <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold text-xs bg-emerald-50 px-2 py-0.5 rounded">
                    Markets
                  </span>
                  <h4 className="font-bold text-slate-900 text-sm">
                    Which markets is TAMVA focused on initially?
                  </h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Ghana is TAMVA&apos;s initial launch market, with a platform architecture designed for broader expansion across African markets.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Developer Ecosystem Strip */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-4">
          {/* Quick Developer Links */}
          <div className="md:col-span-8 bg-white rounded-3xl p-6 border border-slate-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-tamva-lightMint flex items-center justify-center text-emerald-700 text-xl font-bold">
                🛠
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">
                  Interested in building with TAMVA?
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Explore our documentation map or contact our engineering team to discuss integrations.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <Link
                href="/developers"
                className="text-xs font-semibold text-slate-700 hover:text-emerald-600 border border-slate-200 px-4 py-2 rounded-full transition-colors"
              >
                Documentation Map
              </Link>
              <Link
                href="/contact"
                className="text-xs font-bold text-[#021812] bg-tamva-accent hover:bg-emerald-400 px-4 py-2 rounded-full transition-colors"
              >
                Contact Team →
              </Link>
            </div>
          </div>

          {/* Preserved Brand Kit Block */}
          <div className="md:col-span-4 bg-white rounded-3xl p-6 border border-slate-100 shadow-sm flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase font-extrabold tracking-wider text-emerald-600 block">
                OUR BRAND
              </span>
              <h4 className="text-sm font-bold text-slate-900 mt-1">Same Vision. One Identity.</h4>
              <div className="flex items-center gap-1.5 mt-2">
                <span className="w-3.5 h-3.5 rounded-full bg-[#00e676]" title="#00e676" />
                <span className="w-3.5 h-3.5 rounded-full bg-[#00df82]" title="#00df82" />
                <span className="w-3.5 h-3.5 rounded-full bg-[#021812]" title="#021812" />
                <span className="w-3.5 h-3.5 rounded-full bg-[#94a3b8]" title="#94a3b8" />
              </div>
            </div>
            <Link
              href="/about"
              className="border border-slate-200 hover:border-emerald-500 hover:text-emerald-700 text-slate-700 font-semibold text-xs px-4 py-2 rounded-full transition-colors"
            >
              Brand Kit →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
