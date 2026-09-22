import Link from "next/link";
import { Container } from "./Container";

const columns: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Products",
    links: [
      { label: "Passport", href: "/products/passport" },
      { label: "Risk Intelligence", href: "/products/risk-intelligence" },
      { label: "Verification", href: "/products/verification" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Organizations", href: "/solutions/organizations" },
      { label: "Businesses", href: "/solutions/businesses" },
      { label: "Investigators", href: "/solutions/investigators" },
      { label: "Individuals", href: "/solutions/individuals" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "/resources" },
      { label: "Guides", href: "/resources" },
      { label: "FAQs", href: "/resources" },
      { label: "Insights", href: "/resources" },
    ],
  },
  {
    title: "Trust",
    links: [
      { label: "Security", href: "/trust" },
      { label: "Privacy", href: "/trust" },
      { label: "Terms", href: "/trust" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-surface-border bg-primary-900 text-primary-100">
      <Container className="py-14 sm:py-16">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <Link href="/" className="text-lg font-bold text-white">
              TAMVA
            </Link>
            <p className="mt-3 max-w-[220px] text-sm text-primary-300">
              Trusted digital identity, verification and risk intelligence.
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
