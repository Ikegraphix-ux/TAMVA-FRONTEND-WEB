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
    "bg-tamva-accent text-[#021812] font-bold hover:bg-emerald-400 active:bg-emerald-500 shadow-[0_0_20px_rgba(0,230,118,0.25)] hover:scale-[1.02]",
  secondary:
    "bg-white/5 text-white border border-white/20 hover:border-tamva-accent/60 hover:bg-white/10 active:bg-white/15",
  ghost:
    "bg-[#03231a] text-tamva-accent border border-[#0d382b] hover:border-tamva-accent/50 hover:bg-[#042d22] active:bg-[#03231a]",
};

const base =
  "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full px-6 text-[14px] sm:text-[15px] font-semibold transition-all duration-200 ease-out cursor-pointer disabled:cursor-not-allowed disabled:opacity-50";

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
