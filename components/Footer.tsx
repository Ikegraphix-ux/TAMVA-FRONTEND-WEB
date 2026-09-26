import Link from "next/link";
import { Container } from "./Container";

const columns: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Product",
    links: [
      { label: "Risk API", href: "/products#risk-decision-api" },
      { label: "Rules Engine", href: "/products#rules-engine" },
      { label: "Data Connectivity", href: "/products#data-connectivity" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Docs", href: "/resources" },
      { label: "API Reference", href: "/resources#api-reference" },
      { label: "Guides", href: "/resources#guides" },
      { label: "FAQs", href: "/resources#faqs" },
    ],
  },
  {
    title: "Trust & Legal",
    links: [
      { label: "Security", href: "/trust" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-surface-border bg-primary-900 text-primary-100">
      <Container className="py-14 sm:py-16">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <Link href="/" className="text-lg font-bold text-white">
              TAMVA
            </Link>
            <p className="mt-3 max-w-[220px] text-sm text-primary-300">
              Your financial identity, everywhere.
            </p>
            <p className="mt-4 text-xs font-medium uppercase tracking-wide text-primary-400">
              Trust infrastructure. Powered by technology.
            </p>
          </div>
          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="text-sm font-semibold text-white">{col.title}</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-primary-300 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-primary-400">
          © {new Date().getFullYear()} TAMVA. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}

