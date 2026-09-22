import type { IconName } from "@/lib/types";

const paths: Record<IconName, React.ReactNode> = {
  identity: (
    <>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M4.5 20c1.4-3.6 4.3-5.5 7.5-5.5s6.1 1.9 7.5 5.5" />
    </>
  ),
  verification: (
    <>
      <path d="M9 12.5 11 14.5 15.5 9.5" />
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" />
    </>
  ),
  risk: (
    <>
      <path d="M12 3 2.5 20h19L12 3z" />
      <path d="M12 10v4" />
      <path d="M12 17.2v.1" />
    </>
  ),
  organizations: (
    <>
      <path d="M4 21V6l7-3 7 3v15" />
      <path d="M9 21v-6h4v6" />
      <path d="M9 10h.01M13 10h.01M9 14h.01M13 14h.01" />
    </>
  ),
  businesses: (
    <>
      <rect x="3.5" y="8" width="17" height="12" rx="1.5" />
      <path d="M8.5 8V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v2" />
    </>
  ),
  investigators: (
    <>
      <circle cx="10.5" cy="10.5" r="6" />
      <path d="M15 15l5 5" />
    </>
  ),
  individuals: (
    <>
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5.5 19.5c1.3-3.3 3.8-5 6.5-5s5.2 1.7 6.5 5" />
    </>
  ),
  security: (
    <>
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" />
      <path d="M12 8v5" />
      <path d="M12 15.2v.1" />
    </>
  ),
  privacy: (
    <>
      <rect x="5" y="10.5" width="14" height="9" rx="1.5" />
      <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" />
    </>
  ),
  governance: (
    <>
      <path d="M12 3v3" />
      <path d="M5 8h14" />
      <path d="M6.5 8 4 13.5a2.5 2.5 0 0 0 5 0L6.5 8z" />
      <path d="M17.5 8 15 13.5a2.5 2.5 0 0 0 5 0L17.5 8z" />
      <path d="M8 21h8" />
      <path d="M12 6v15" />
    </>
  ),
  auditability: (
    <>
      <path d="M6 4.5h9l3 3V19.5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5.5a1 1 0 0 1 1-1z" />
      <path d="M9 11h6" />
      <path d="M9 14.5h6" />
      <path d="M9 7.5h3" />
    </>
  ),
  "responsible-data": (
    <>
      <path d="M12 3c3.5 3 7 4 7 4s.3 8-7 14c-7.3-6-7-14-7-14s3.5-1 7-4z" />
      <path d="M9.5 12.3 11.3 14 15 10" />
    </>
  ),
  docs: (
    <>
      <path d="M7 3.5h7l3 3V20a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1z" />
      <path d="M9.5 12h5" />
      <path d="M9.5 15.5h5" />
      <path d="M9.5 8.5h2.5" />
    </>
  ),
  guides: (
    <>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H12v18H6.5A2.5 2.5 0 0 1 4 18.5v-13z" />
      <path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H12v18h5.5a2.5 2.5 0 0 0 2.5-2.5v-13z" />
    </>
  ),
  faq: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 9.3a2.5 2.5 0 1 1 3.7 2.2c-.9.5-1.2 1-1.2 2" />
      <path d="M12 17v.1" />
    </>
  ),
  insights: (
    <>
      <path d="M4 19h16" />
      <path d="M7 19v-5" />
      <path d="M12 19V8" />
      <path d="M17 19v-9" />
    </>
  ),
  announcements: (
    <>
      <path d="M4 10.5v3a1 1 0 0 0 1 1h2l6 4v-13l-6 4H5a1 1 0 0 0-1 1z" />
      <path d="M17 9a4 4 0 0 1 0 6" />
    </>
  ),
  discover: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="M20 20l-4.35-4.35" />
    </>
  ),
  analyze: (
    <>
      <path d="M4 19h16" />
      <rect x="6" y="12" width="3" height="7" />
      <rect x="10.5" y="8" width="3" height="11" />
      <rect x="15" y="4" width="3" height="15" />
    </>
  ),
  decide: (
    <>
      <path d="M9 12.5 11 14.5 16 9" />
      <circle cx="12" cy="12" r="9" />
    </>
  ),
  "arrow-right": <path d="M4 12h15M13 6l6 6-6 6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  search: (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M20 20l-4.5-4.5" />
    </>
  ),
};

export function Icon({
  name,
  className = "h-6 w-6",
  "aria-hidden": ariaHidden = true,
  title,
}: {
  name: IconName;
  className?: string;
  "aria-hidden"?: boolean;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden={title ? undefined : ariaHidden}
      role={title ? "img" : undefined}
    >
      {title ? <title>{title}</title> : null}
      {paths[name]}
    </svg>
  );
}
