"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState, type ReactNode } from "react";

type TransitionPhase = "idle" | "exiting" | "entering";

export function PageTransitions({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [phase, setPhase] = useState<TransitionPhase>("idle");
  const isNavigating = useRef(false);
  const lastPathname = useRef(pathname);

  useEffect(() => {
    if (pathname === lastPathname.current) return;

    lastPathname.current = pathname;
    isNavigating.current = false;
    setPhase("entering");

    const timeout = window.setTimeout(() => setPhase("idle"), 240);
    return () => window.clearTimeout(timeout);
  }, [pathname]);

  useEffect(() => {
    let exitTimeout: number | undefined;

    function handleInternalNavigation(event: MouseEvent) {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        isNavigating.current
      ) {
        return;
      }

      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest("a");
      if (
        !anchor ||
        anchor.target ||
        anchor.hasAttribute("download") ||
        anchor.hasAttribute("data-no-page-transition")
      ) {
        return;
      }

      const destination = new URL(anchor.href, window.location.href);
      if (
        destination.origin !== window.location.origin ||
        destination.pathname === window.location.pathname
      ) {
        return;
      }

      event.preventDefault();
      isNavigating.current = true;
      setPhase("exiting");

      exitTimeout = window.setTimeout(() => {
        router.push(destination.pathname + destination.search + destination.hash);
      }, 140);
    }

    document.addEventListener("click", handleInternalNavigation, true);
    return () => {
      document.removeEventListener("click", handleInternalNavigation, true);
      if (exitTimeout !== undefined) window.clearTimeout(exitTimeout);
    };
  }, [router]);

  return (
    <div className="page-transition" data-transition-phase={phase}>
      {children}
    </div>
  );
}
