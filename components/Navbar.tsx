"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { primaryNav } from "@/lib/content";

function isCurrentPath(pathname: string, href?: string): boolean {
  if (!href) return false;
  const path = href.split("#")[0];
  if (path === "/") return pathname === "/";
  return pathname === path || pathname.startsWith(path + "/");
}

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
    // Close any open desktop details dropdowns on route navigation
    document.querySelectorAll("details[open]").forEach((el) => {
      el.removeAttribute("open");
    });
  }, [pathname]);

  // Click outside and Escape key handler for details dropdowns
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("details")) {
        document.querySelectorAll("header details[open]").forEach((el) => {
          el.removeAttribute("open");
        });
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        document.querySelectorAll("header details[open]").forEach((el) => {
          el.removeAttribute("open");
        });
      }
    };
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const isNavActive = (item: (typeof primaryNav)[number]) => {
    if (item.href && isCurrentPath(pathname, item.href)) return true;
    if (item.items?.some((sub) => isCurrentPath(pathname, sub.href))) return true;
    return false;
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-200 bg-[#021812] ${
        isScrolled
          ? "border-b border-[#0d382b] shadow-lg shadow-black/20 backdrop-blur-md"
          : "border-b border-[#0d382b]/60"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group shrink-0" aria-label="TAMVA Home">
          <svg
            className="w-8 h-8 text-tamva-accent transition-transform group-hover:scale-105"
            viewBox="0 0 36 36"
            fill="none"
          >
            <path d="M7 11L18 4L29 11L18 18L7 11Z" fill="#00E676" />
            <path d="M7 18L18 25L29 18L18 11L7 18Z" fill="#00df82" opacity="0.8" />
            <path d="M7 25L18 32L29 25L18 18L7 25Z" fill="#00B050" opacity="0.6" />
          </svg>
          <span className="text-2xl font-bold tracking-tight text-white uppercase font-sans">
            TAMVA
          </span>
        </Link>

        {/* Primary Navigation Links with Dropdowns — visible on lg (1024px+) screens */}
        <nav aria-label="Primary" className="hidden lg:flex items-center space-x-7 text-[14px]">
          {primaryNav.map((item) => {
            const active = isNavActive(item);

            if (item.href) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`relative py-1 font-medium transition-colors ${
                    active ? "text-white font-semibold" : "text-slate-300 hover:text-tamva-accent"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  <span>{item.label}</span>
                  {active && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-tamva-accent rounded-full shadow-[0_0_8px_#00e676]" />
                  )}
                </Link>
              );
            }

            return (
              <details key={item.label} className="group relative">
                <summary
                  className={`flex cursor-pointer list-none items-center gap-1.5 py-1 font-medium transition-colors select-none ${
                    active ? "text-white font-semibold" : "text-slate-300 hover:text-tamva-accent"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  <span>{item.label}</span>
                  <svg
                    className="w-3.5 h-3.5 transition-transform duration-200 group-open:rotate-180 text-slate-400 group-hover:text-tamva-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                  {active && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-tamva-accent rounded-full shadow-[0_0_8px_#00e676]" />
                  )}
                </summary>
                <ul className="absolute left-0 top-full mt-3 min-w-[240px] rounded-2xl border border-[#0d382b] bg-[#021812]/95 backdrop-blur-xl p-2 shadow-2xl shadow-black/80 z-50">
                  {item.items?.map((subLink) => {
                    const subActive = isCurrentPath(pathname, subLink.href);
                    return (
                      <li key={subLink.label}>
                        <Link
                          href={subLink.href}
                          onClick={(event) => {
                            event.currentTarget.closest("details")?.removeAttribute("open");
                          }}
                          className={`block rounded-xl px-4 py-2.5 text-sm transition-colors ${
                            subActive
                              ? "bg-[#03231a] text-tamva-accent font-semibold border border-[#0d382b]/70"
                              : "text-slate-300 hover:text-white hover:bg-[#03231a]"
                          }`}
                          aria-current={subActive ? "page" : undefined}
                        >
                          {subLink.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </details>
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

          {/* Mobile/Tablet Hamburger Menu Button — visible up to lg (1023px) */}
          <button
            type="button"
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg text-slate-300 hover:text-white"
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

      {/* Mobile/Tablet Drawer Menu */}
      <div
        id="mobile-nav"
        className={`fixed inset-x-0 top-20 bottom-0 z-40 bg-[#021812] border-t border-[#0d382b] overflow-y-auto transition-transform duration-200 ease-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full pointer-events-none"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="px-6 py-6 space-y-4">
          <nav aria-label="Mobile Navigation" className="space-y-2">
            {primaryNav.map((item) => {
              const active = isNavActive(item);

              if (item.href) {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-3 px-3 rounded-xl text-base font-medium transition-colors ${
                      active
                        ? "bg-[#03231a] text-tamva-accent font-semibold border border-[#0d382b]"
                        : "text-slate-300 hover:bg-[#03231a]/60 hover:text-white"
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <details key={item.label} className="group border-b border-[#0d382b]/60 pb-2">
                  <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between px-3 py-2 text-base font-medium text-slate-300 hover:text-white rounded-xl transition-colors">
                    <span className={active ? "text-tamva-accent font-semibold" : ""}>{item.label}</span>
                    <svg
                      className="w-4 h-4 transition-transform duration-200 group-open:rotate-180 text-slate-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <ul className="pl-4 pr-2 pt-1 pb-2 space-y-1">
                    {item.items?.map((subLink) => {
                      const subActive = isCurrentPath(pathname, subLink.href);
                      return (
                        <li key={subLink.label}>
                          <Link
                            href={subLink.href}
                            onClick={() => setIsOpen(false)}
                            className={`block py-2 px-3 rounded-lg text-sm transition-colors ${
                              subActive
                                ? "bg-[#03231a] text-tamva-accent font-semibold"
                                : "text-slate-400 hover:text-white hover:bg-[#03231a]/40"
                            }`}
                            aria-current={subActive ? "page" : undefined}
                          >
                            {subLink.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </details>
              );
            })}
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
