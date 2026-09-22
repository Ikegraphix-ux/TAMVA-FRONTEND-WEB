import { Icon } from "./Icon";

/**
 * A lightweight, stylized recreation of the TAMVA consumer app's own
 * screens (Financial Confidence, Financial Passport) — not the internal
 * admin/risk dashboard, which stays off the public site per the brief.
 */
export function ConfidenceCard() {
  return (
    <div className="w-full max-w-[280px] rounded-2xl bg-white p-5 shadow-card-hover">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-ink-muted">Financial Confidence</p>
        <span className="rounded-full bg-accent-50 px-2.5 py-0.5 text-xs font-semibold text-accent-700">
          Good
        </span>
      </div>
      <p className="mt-2 text-4xl font-bold text-primary-900">
        89<span className="text-lg font-medium text-ink-faint">/100</span>
      </p>
      <div className="mt-3 flex items-center gap-1.5 text-sm font-medium text-accent-600">
        <Icon name="insights" className="h-4 w-4" />
        +6 this month
      </div>
      <svg viewBox="0 0 240 60" className="mt-4 h-12 w-full" aria-hidden="true">
        <polyline
          points="0,50 40,42 80,44 120,28 160,30 200,14 240,8"
          fill="none"
          stroke="#10A574"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export function PassportPreview() {
  return (
    <div className="w-full max-w-[300px] rounded-2xl bg-primary-900 p-5 text-white shadow-card-hover">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2 text-sm font-semibold">
          <Icon name="identity" className="h-4 w-4 text-accent-300" />
          Financial Passport
        </span>
        <span className="flex items-center gap-1 text-xs font-medium text-accent-300">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
          Active
        </span>
      </div>
      <p className="mt-4 text-sm text-primary-200">Elijah Dery · Verified Identity</p>
      <div className="mt-4 flex items-center justify-center rounded-xl bg-white/5 py-6">
        <svg viewBox="0 0 60 60" className="h-14 w-14 text-white/70" aria-hidden="true">
          <rect x="4" y="4" width="16" height="16" fill="currentColor" opacity="0.8" />
          <rect x="40" y="4" width="16" height="16" fill="currentColor" opacity="0.8" />
          <rect x="4" y="40" width="16" height="16" fill="currentColor" opacity="0.8" />
          <rect x="26" y="26" width="8" height="8" fill="currentColor" />
          <rect x="40" y="40" width="6" height="6" fill="currentColor" />
          <rect x="50" y="40" width="6" height="6" fill="currentColor" />
          <rect x="40" y="50" width="6" height="6" fill="currentColor" />
        </svg>
      </div>
      <p className="mt-3 text-center text-xs text-primary-300">Tap to view</p>
    </div>
  );
}

export function HomeScreenPreview() {
  return (
    <div className="w-full max-w-[280px] rounded-2xl bg-white p-5 shadow-card-hover">
      <p className="text-sm text-ink-faint">Good morning, Elijah</p>
      <p className="mt-1 text-2xl font-bold text-primary-900">GH₵ 12,450.75</p>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {(["identity", "verification", "insights"] as const).map((icon) => (
          <div
            key={icon}
            className="flex flex-col items-center gap-1.5 rounded-lg bg-surface-muted py-3"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-500 text-white">
              <Icon name={icon} className="h-4 w-4" />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
