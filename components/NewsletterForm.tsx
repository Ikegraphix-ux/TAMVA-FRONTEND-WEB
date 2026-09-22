"use client";

import { useId, useState, type FormEvent } from "react";
import type { FormStatus } from "@/lib/types";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function NewsletterForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState<string | null>(null);
  const id = useId();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const email = String(new FormData(event.currentTarget).get("email") ?? "").trim();

    if (!isValidEmail(email)) {
      setError("Enter a valid email address.");
      setStatus("error");
      return;
    }

    setError(null);
    setStatus("submitting");
    try {
      // No newsletter backend configured yet — simulate the round trip.
      await new Promise((resolve) => setTimeout(resolve, 700));
      setStatus("success");
      event.currentTarget.reset();
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return <p className="text-sm font-medium text-accent-300">You&apos;re subscribed. Thank you.</p>;
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-2 sm:flex-row sm:items-start">
      <div>
        <label htmlFor={id} className="sr-only">
          Email address
        </label>
        <input
          id={id}
          name="email"
          type="email"
          placeholder="Enter your email address"
          disabled={status === "submitting"}
          aria-invalid={status === "error"}
          aria-describedby={error ? `${id}-error` : undefined}
          className="min-h-[44px] w-full min-w-[240px] rounded-full border border-white/15 bg-white/5 px-4 text-[15px] text-white placeholder:text-primary-400 outline-none transition-colors focus:border-accent-400 sm:w-auto"
        />
        {error && (
          <p id={`${id}-error`} className="mt-1.5 text-sm text-red-300">
            {error}
          </p>
        )}
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="min-h-[44px] rounded-full bg-accent-500 px-6 text-[15px] font-semibold text-white transition-colors hover:bg-accent-600 disabled:opacity-50"
      >
        {status === "submitting" ? "Subscribing…" : "Subscribe"}
      </button>
    </form>
  );
}
