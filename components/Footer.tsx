"use client";

import Link from "next/link";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-[#021812] text-white pt-16 pb-8 border-t border-[#0d382b]">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Top Row: Brand, Navigation columns, Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#0d382b]">
          {/* Brand identity */}
          <div className="lg:col-span-4 space-y-3">
            <Link href="/" className="flex items-center gap-3">
              <svg className="w-7 h-7 text-tamva-accent" viewBox="0 0 36 36" fill="none">
                <path d="M7 11L18 4L29 11L18 18L7 11Z" fill="#00E676" />
                <path d="M7 18L18 25L29 18L18 11L7 18Z" fill="#00df82" />
              </svg>
              <span className="text-xl font-bold tracking-tight text-white uppercase">TAMVA</span>
            </Link>
            <p className="text-xs text-slate-400 max-w-xs leading-relaxed">
              Financial inclusion. Powered by technology.
            </p>
          </div>

          {/* Product links */}
          <div className="lg:col-span-2 space-y-2">
            <h4 className="text-xs font-bold text-white tracking-wider uppercase">Product</h4>
            <ul className="text-xs space-y-2 text-slate-400">
              <li>
                <Link href="/products/tamva-app" className="hover:text-tamva-accent transition-colors">
                  Personal
                </Link>
              </li>
              <li>
                <Link href="/solutions/businesses" className="hover:text-tamva-accent transition-colors">
                  Business
                </Link>
              </li>
              <li>
                <Link href="/solutions/organizations" className="hover:text-tamva-accent transition-colors">
                  Institutional
                </Link>
              </li>
            </ul>
          </div>

          {/* Company links */}
          <div className="lg:col-span-2 space-y-2">
            <h4 className="text-xs font-bold text-white tracking-wider uppercase">Company</h4>
            <ul className="text-xs space-y-2 text-slate-400">
              <li>
                <Link href="/about" className="hover:text-tamva-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-tamva-accent transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-tamva-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources links */}
          <div className="lg:col-span-2 space-y-2">
            <h4 className="text-xs font-bold text-white tracking-wider uppercase">Resources</h4>
            <ul className="text-xs space-y-2 text-slate-400">
              <li>
                <Link href="/developers" className="hover:text-tamva-accent transition-colors">
                  Docs
                </Link>
              </li>
              <li>
                <Link href="/developers#api-reference" className="hover:text-tamva-accent transition-colors">
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="/trust" className="hover:text-tamva-accent transition-colors">
                  Help &amp; Trust Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Stay Connected & Newsletter form */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-white tracking-wider uppercase">Stay connected</h4>
            {/* Social Icons */}
            <div className="flex items-center space-x-3 text-slate-400 text-sm">
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
                className="hover:text-tamva-accent transition-colors"
              >
                𝕏
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="hover:text-tamva-accent transition-colors"
              >
                in
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="hover:text-tamva-accent transition-colors"
              >
                ▶
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="hover:text-tamva-accent transition-colors"
              >
                
              </a>
            </div>

            {/* Newsletter Input Form */}
            <form onSubmit={handleSubscribe} className="flex items-center rounded-full bg-white/5 border border-white/10 p-1 focus-within:border-tamva-accent">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="bg-transparent text-xs text-white placeholder-slate-500 px-3 py-1.5 focus:outline-none w-full"
              />
              <button
                type="submit"
                className="bg-tamva-accent hover:bg-emerald-400 text-[#021812] text-xs font-bold px-3 py-1.5 rounded-full shrink-0 transition-colors"
              >
                {subscribed ? "✓" : "Subscribe"}
              </button>
            </form>
            {subscribed && (
              <p className="text-[10px] text-tamva-accent font-medium">Thank you for subscribing!</p>
            )}
          </div>
        </div>

        {/* Bottom Row: Copyright & Legal Policies */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>© {new Date().getFullYear()} TAMVA. All rights reserved.</div>
          <div className="flex items-center space-x-6">
            <Link href="/trust" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/trust" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
            <button
              type="button"
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Cookie Settings
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
