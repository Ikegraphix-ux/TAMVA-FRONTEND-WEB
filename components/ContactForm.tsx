"use client";

import { useId, useState, type FormEvent } from "react";
import { Button } from "./Button";
import { Icon } from "./Icon";
import { submitContactForm } from "@/services/contact";
import type { FormStatus } from "@/lib/types";

const reasons = [
  "Learn about TAMVA",
  "Product & API sandbox enquiry",
  "Institutional / Banking partnership",
  "Fintech integration",
  "Security / Vulnerability disclosure",
  "Media & Press",
  "Careers",
  "Other",
];

interface Errors {
  name?: string;
  email?: string;
  reason?: string;
  message?: string;
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const formId = useId();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setServerError(null);

    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const organization = String(data.get("organization") ?? "").trim();
    const reason = String(data.get("reason") ?? "");
    const message = String(data.get("message") ?? "").trim();

    const nextErrors: Errors = {};
    if (!name) nextErrors.name = "Enter your full name.";
    if (!email) nextErrors.email = "Enter your business email.";
    else if (!isValidEmail(email)) nextErrors.email = "Enter a valid email address.";
    if (!reason) nextErrors.reason = "Select a reason for your enquiry.";
    if (!message) nextErrors.message = "Enter your message.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("submitting");
    try {
      await submitContactForm({ name, email, organization, reason, message });
      setStatus("success");
    } catch {
      setStatus("error");
      setServerError("Something went wrong sending your message. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-center gap-4 rounded-3xl border border-tamva-accent/40 bg-[#03231a] p-10 text-center shadow-2xl animate-in fade-in zoom-in-95 duration-200"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-tamva-accent text-[#021812] shadow-[0_0_20px_rgba(0,230,118,0.4)]">
          <Icon name="verification" className="h-7 w-7" />
        </span>
        <h3 className="text-2xl font-bold text-white">Message Transmitted</h3>
        <p className="max-w-sm text-sm text-slate-300 leading-relaxed">
          Thank you for connecting with TAMVA. A member of our partnerships or engineering team will respond within 24 hours.
        </p>
        <Button variant="ghost" onClick={() => setStatus("idle")}>
          Send another inquiry
        </Button>
      </div>
    );
  }

  const isSubmitting = status === "submitting";

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      {serverError && (
        <p role="alert" className="rounded-xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-300">
          {serverError}
        </p>
      )}

      <Field
        id={`${formId}-name`}
        name="name"
        label="Full Name"
        placeholder="e.g. Kwesi Mensah"
        autoComplete="name"
        error={errors.name}
        disabled={isSubmitting}
      />
      <Field
        id={`${formId}-email`}
        name="email"
        type="email"
        label="Work Email"
        placeholder="name@company.com"
        autoComplete="email"
        error={errors.email}
        disabled={isSubmitting}
      />
      <Field
        id={`${formId}-organization`}
        name="organization"
        label="Organization / Company"
        placeholder="e.g. Stanbic Bank, Paystack, EcoLend"
        helperText="Optional"
        autoComplete="organization"
        disabled={isSubmitting}
      />

      <div>
        <label htmlFor={`${formId}-reason`} className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-300">
          Reason for Enquiry
        </label>
        <select
          id={`${formId}-reason`}
          name="reason"
          disabled={isSubmitting}
          aria-invalid={Boolean(errors.reason)}
          aria-describedby={errors.reason ? `${formId}-reason-error` : undefined}
          defaultValue=""
          className="min-h-[48px] w-full rounded-xl border border-[#0d382b] bg-[#021812] px-4 text-sm text-white outline-none transition-colors focus:border-tamva-accent focus:ring-1 focus:ring-tamva-accent disabled:opacity-50"
        >
          <option value="" disabled className="bg-[#021812] text-slate-500">
            Select a category
          </option>
          {reasons.map((reason) => (
            <option key={reason} value={reason} className="bg-[#021812] text-white">
              {reason}
            </option>
          ))}
        </select>
        {errors.reason && (
          <p id={`${formId}-reason-error`} className="mt-1.5 text-xs text-rose-400">
            {errors.reason}
          </p>
        )}
      </div>

      <div>
        <label htmlFor={`${formId}-message`} className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-300">
          Message &amp; Scope
        </label>
        <textarea
          id={`${formId}-message`}
          name="message"
          rows={5}
          placeholder="Describe your use case, planned volume, or inquiry specifics..."
          disabled={isSubmitting}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? `${formId}-message-error` : undefined}
          className="w-full rounded-xl border border-[#0d382b] bg-[#021812] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-tamva-accent focus:ring-1 focus:ring-tamva-accent disabled:opacity-50"
        />
        {errors.message && (
          <p id={`${formId}-message-error`} className="mt-1.5 text-xs text-rose-400">
            {errors.message}
          </p>
        )}
      </div>

      <Button type="submit" disabled={isSubmitting} className="self-start mt-2">
        {isSubmitting ? "Transmitting…" : "Send Message →"}
      </Button>
    </form>
  );
}

function Field({
  id,
  name,
  label,
  placeholder,
  type = "text",
  autoComplete,
  helperText,
  error,
  disabled,
}: {
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  autoComplete?: string;
  helperText?: string;
  error?: string;
  disabled?: boolean;
}) {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <label htmlFor={id} className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
          {label}
        </label>
        {helperText && !error && (
          <span id={`${id}-helper`} className="text-[11px] text-slate-500">
            {helperText}
          </span>
        )}
      </div>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        disabled={disabled}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : helperText ? `${id}-helper` : undefined}
        className="min-h-[48px] w-full rounded-xl border border-[#0d382b] bg-[#021812] px-4 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-tamva-accent focus:ring-1 focus:ring-tamva-accent disabled:opacity-50"
      />
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-rose-400">
          {error}
        </p>
      )}
    </div>
  );
}
