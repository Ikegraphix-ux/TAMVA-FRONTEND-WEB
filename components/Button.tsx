import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Icon } from "./Icon";

type Variant = "primary" | "secondary" | "ghost";

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  withArrow?: boolean;
  className?: string;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-accent-500 text-white hover:bg-accent-600 active:bg-accent-700 shadow-sm",
  secondary:
    "bg-transparent text-white border border-white/30 hover:bg-white/10 active:bg-white/15",
  ghost:
    "bg-transparent text-primary-900 border border-surface-border hover:bg-surface-muted active:bg-surface-subtle",
};

const base =
  "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full px-6 text-[15px] font-semibold transition-colors duration-200 ease-out cursor-pointer disabled:cursor-not-allowed disabled:opacity-50";

export function LinkButton({
  href,
  children,
  variant = "primary",
  withArrow = false,
  className = "",
}: BaseProps & { href: string }) {
  return (
    <Link href={href} className={`${base} ${variantClasses[variant]} ${className}`}>
      {children}
      {withArrow && <Icon name="arrow-right" className="h-4 w-4" />}
    </Link>
  );
}

export function Button({
  children,
  variant = "primary",
  withArrow = false,
  className = "",
  ...rest
}: BaseProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`${base} ${variantClasses[variant]} ${className}`} {...rest}>
      {children}
      {withArrow && <Icon name="arrow-right" className="h-4 w-4" />}
    </button>
  );
}
