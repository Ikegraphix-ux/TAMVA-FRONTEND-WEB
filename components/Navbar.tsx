"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "./Container";
import { Icon } from "./Icon";
import { LinkButton } from "./Button";
import { primaryNav } from "@/lib/content";

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

  // Close the mobile menu on route change.
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-200 ${
        isScrolled
          ? "border-surface-border bg-surface/90 backdrop-blur"
          : "border-transparent bg-surface"
      }`}
    >
      <Container>
        <div className="flex h-16 items-center justify-between sm:h-20">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-bold text-primary-900"
          >
            <span
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-900 text-white"
              aria-hidden="true"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M4 12l5 8 3-6 3 6 5-8-3-8-2 5-3-6-3 6-2-5-3 8z" />
              </svg>
            </span>
            TAMVA
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {primaryNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={pathname === link.href ? "page" : undefined}
                    className={`text-[15px] font-medium transition-colors hover:text-primary-900 ${pathname === link.href ? "text-primary-900" : "text-ink-muted"}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <button
              type="button"
              disabled
              title="Partner portal link to be confirmed"
              className="min-h-[44px] cursor-not-allowed px-2 text-sm font-medium text-ink-faint"
            >
              Partner Login
            </button>
            <LinkButton href="/contact">Request Access</LinkButton>
          </div>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-lg text-primary-900 lg:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen((v) => !v)}
          >
            <Icon name={isOpen ? "close" : "menu"} className="h-6 w-6" />
          </button>
        </div>
      </Container>

      <div
        id="mobile-nav"
        className={`fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-surface transition-transform duration-200 ease-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Container className="py-8">
          <ul className="flex flex-col gap-1">
            {[...primaryNav, { label: "Contact", href: "/contact" }].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block min-h-[44px] border-b border-surface-border py-3 text-lg font-medium text-primary-900"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <button
            type="button"
            disabled
            title="Partner portal link to be confirmed"
            className="mt-6 min-h-[44px] w-full cursor-not-allowed rounded-full border border-surface-border px-6 text-sm font-semibold text-ink-faint"
          >
            Partner Login
          </button>
          <LinkButton href="/contact" className="mt-3 w-full">
            Request Access
          </LinkButton>
        </Container>
      </div>
    </header>
  );
}

