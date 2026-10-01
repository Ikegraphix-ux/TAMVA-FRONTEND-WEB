"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Solutions", href: "/solutions" },
  { label: "Security", href: "/trust" },
  { label: "Docs", href: "/developers" },
  { label: "Careers", href: "/careers" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-200 bg-[#021812] ${
        isScrolled
          ? "border-b border-[#0d382b] shadow-lg shadow-black/20"
          : "border-b border-[#0d382b]/60"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="TAMVA Home">
          <svg className="w-8 h-8 text-tamva-accent transition-transform group-hover:scale-105" viewBox="0 0 36 36" fill="none">
            <path d="M7 11L18 4L29 11L18 18L7 11Z" fill="#00E676" />
            <path d="M7 18L18 25L29 18L18 11L7 18Z" fill="#00df82" opacity="0.8" />
            <path d="M7 25L18 32L29 25L18 18L7 25Z" fill="#00B050" opacity="0.6" />
          </svg>
          <span className="text-2xl font-bold tracking-tight text-white uppercase font-sans">
            TAMVA
          </span>
        </Link>

        {/* Primary Navigation Links */}
        <nav aria-label="Primary" className="hidden md:flex items-center space-x-8 text-[14px] font-medium text-slate-300">
          {navLinks.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`transition-colors flex flex-col items-center py-1 ${
                  active ? "text-white font-semibold" : "hover:text-tamva-accent"
                }`}
                aria-current={active ? "page" : undefined}
              >
                <span>{item.label}</span>
                {active && (
                  <span className="h-0.5 w-6 bg-tamva-accent rounded-full mt-1" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Utility Actions */}
        <div className="flex items-center space-x-3 sm:space-x-5">
          <Link
            href="/contact"
            aria-label="Search or inquiry"
            className="text-slate-300 hover:text-white transition-colors p-1.5"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 10-10.61-10.61 7.5 7.5 0 0010.61 10.61z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </Link>
          <Link
            href="/contact"
            className="hidden sm:inline-block text-[14px] font-medium text-white hover:text-tamva-accent transition-colors px-3 py-2"
          >
            Log in
          </Link>
          <Link
            href="/contact"
            className="bg-tamva-accent hover:bg-emerald-400 text-[#021812] text-[13px] sm:text-[14px] font-bold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all shadow-[0_0_20px_rgba(0,230,118,0.3)] hover:scale-[1.02]"
          >
            Get Started
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg text-slate-300 hover:text-white"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        id="mobile-nav"
        className={`fixed inset-x-0 top-20 bottom-0 z-40 bg-[#021812] border-t border-[#0d382b] overflow-y-auto transition-transform duration-200 ease-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full pointer-events-none"
        }`}
      >
        <div className="px-6 py-6 space-y-4">
          <nav aria-label="Mobile Navigation" className="space-y-1">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block py-3 px-3 rounded-xl text-base font-medium transition-colors ${
                  isActive(item.href)
                    ? "bg-[#03231a] text-tamva-accent font-semibold border border-[#0d382b]"
                    : "text-slate-300 hover:bg-[#03231a]/60 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="pt-4 border-t border-[#0d382b] flex flex-col gap-3">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="text-center py-3 text-sm font-medium text-slate-300 hover:text-white border border-[#0d382b] rounded-full"
            >
              Log in
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="text-center py-3 text-sm font-bold bg-tamva-accent text-[#021812] rounded-full shadow-[0_0_20px_rgba(0,230,118,0.3)]"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
