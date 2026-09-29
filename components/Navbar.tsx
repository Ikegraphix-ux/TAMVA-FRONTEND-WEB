"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "./Container";
import { Icon } from "./Icon";
import { LinkButton } from "./Button";
import { primaryNav } from "@/lib/content";

function isCurrentPath(pathname: string, href: string): boolean {
  const path = href.split("#")[0];
  return pathname === path || (path !== "/" && pathname.startsWith(path + "/"));
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
  }, [pathname]);

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
            aria-label="TAMVA home"
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
            <ul className="flex items-center gap-7">
              {primaryNav.map((item) => (
                <li key={item.label}>
                  {item.href ? (
                    <Link
                      href={item.href}
                      aria-current={isCurrentPath(pathname, item.href) ? "page" : undefined}
                      className="py-3 text-[15px] font-medium text-ink-muted transition-colors hover:text-primary-900"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <details className="group relative">
                      <summary
                        className="flex cursor-pointer list-none items-center gap-1 py-3 text-[15px] font-medium text-ink-muted transition-colors hover:text-primary-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-600"
                        aria-current={item.items?.some((link) => isCurrentPath(pathname, link.href)) ? "page" : undefined}
                      >
                        {item.label}
                        <span aria-hidden="true" className="text-xs">▾</span>
                      </summary>
                      <ul className="absolute left-0 top-full z-50 min-w-56 rounded-xl border border-surface-border bg-white p-2 shadow-card">
                        {item.items?.map((link) => (
                          <li key={link.href}>
                            <Link
                              href={link.href}
                              aria-current={isCurrentPath(pathname, link.href) ? "page" : undefined}
                              className="block rounded-lg px-4 py-3 text-sm font-medium text-ink-muted transition-colors hover:bg-surface-muted hover:text-primary-900"
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
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
        aria-hidden={!isOpen}
      >
        <Container className="py-8">
          <nav aria-label="Mobile primary">
            <ul className="flex flex-col gap-1">
              {primaryNav.map((item) => (
                <li key={item.label}>
                  {item.href ? (
                    <Link
                      href={item.href}
                      aria-current={isCurrentPath(pathname, item.href) ? "page" : undefined}
                      onClick={() => setIsOpen(false)}
                      className="block min-h-[44px] border-b border-surface-border py-3 text-lg font-medium text-primary-900"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <details className="border-b border-surface-border">
                      <summary className="flex min-h-[48px] cursor-pointer list-none items-center justify-between py-3 text-lg font-medium text-primary-900">
                        {item.label}<span aria-hidden="true">＋</span>
                      </summary>
                      <ul className="pb-3 pl-4">
                        {item.items?.map((link) => (
                          <li key={link.href}>
                            <Link
                              href={link.href}
                              aria-current={isCurrentPath(pathname, link.href) ? "page" : undefined}
                              onClick={() => setIsOpen(false)}
                              className="block min-h-[44px] py-3 text-base text-ink-muted"
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <LinkButton href="/contact" className="mt-6 w-full" onClick={() => setIsOpen(false)}>
            Request Access
          </LinkButton>
        </Container>
      </div>
    </header>
  );
}
