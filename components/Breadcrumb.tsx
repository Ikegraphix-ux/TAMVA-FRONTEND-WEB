import Link from "next/link";

export interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumb({ items, light = true }: { items: Crumb[]; light?: boolean }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className={`flex flex-wrap items-center gap-2 text-xs sm:text-sm ${light ? "text-slate-400" : "text-ink-muted"}`}>
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-2">
            {item.href ? (
              <Link
                href={item.href}
                className={`transition-colors ${light ? "hover:text-tamva-accent text-slate-400" : "hover:text-accent-600"}`}
              >
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className={light ? "text-white font-medium" : "text-ink"}>
                {item.label}
              </span>
            )}
            {i < items.length - 1 && (
              <span aria-hidden="true" className={light ? "text-slate-600" : "text-surface-border"}>
                /
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
