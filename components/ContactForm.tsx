"use client";

import { useId, useState, type FormEvent } from "react";
import { Button } from "./Button";
import { Icon } from "./Icon";
import { submitContactForm } from "@/services/contact";
import type { FormStatus } from "@/lib/types";

const reasons = [
  "Learn about TAMVA",
  "Product enquiry",
  "Organization enquiry",
  "Partnership",
  "Media",
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
    if (!name) nextErrors.name = "Enter your name.";
    if (!email) nextErrors.email = "Enter your email.";
    else if (!isValidEmail(email)) nextErrors.email = "Enter a valid email address.";
    if (!reason) nextErrors.reason = "Select a reason for your enquiry.";
    if (!message) nextErrors.message = "Enter a message.";

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
        className="flex flex-col items-center gap-4 rounded-xl2 border border-accent-200 bg-accent-50 p-10 text-center"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-500 text-white">
          <Icon name="verification" className="h-6 w-6" />
        </span>
        <h3 className="text-h3 font-semibold text-primary-900">Message sent</h3>
        <p className="max-w-sm text-[15px] text-ink-muted">
          Thank you for reaching out. The TAMVA team will get back to you shortly.
        </p>
        <Button variant="ghost" onClick={() => setStatus("idle")}>
          Send another message
        </Button>
      </div>
    );
  }

  const isSubmitting = status === "submitting";

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      {serverError && (
        <p role="alert" className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
          {serverError}
        </p>
      )}

      <Field
        id={`${formId}-name`}
        name="name"
        label="Name"
        autoComplete="name"
        error={errors.name}
        disabled={isSubmitting}
      />
      <Field
        id={`${formId}-email`}
        name="email"
        type="email"
        label="Email"
        autoComplete="email"
        error={errors.email}
        disabled={isSubmitting}
      />
      <Field
        id={`${formId}-organization`}
        name="organization"
        label="Organization"
        helperText="Optional"
        autoComplete="organization"
        disabled={isSubmitting}
      />

      <div>
        <label htmlFor={`${formId}-reason`} className="mb-1.5 block text-sm font-medium text-primary-900">
          Reason for enquiry
        </label>
        <select
          id={`${formId}-reason`}
          name="reason"
          disabled={isSubmitting}
          aria-invalid={Boolean(errors.reason)}
          aria-describedby={errors.reason ? `${formId}-reason-error` : undefined}
          defaultValue=""
          className="min-h-[44px] w-full rounded-lg border border-surface-border bg-white px-4 text-[15px] text-primary-900 outline-none transition-colors focus:border-accent-500 disabled:bg-surface-muted"
        >
          <option value="" disabled>
            Select a reason
          </option>
          {reasons.map((reason) => (
            <option key={reason} value={reason}>
              {reason}
            </option>
          ))}
        </select>
        {errors.reason && (
          <p id={`${formId}-reason-error`} className="mt-1.5 text-sm text-red-600">
            {errors.reason}
          </p>
        )}
      </div>

      <div>
        <label htmlFor={`${formId}-message`} className="mb-1.5 block text-sm font-medium text-primary-900">
          Message
        </label>
        <textarea
          id={`${formId}-message`}
          name="message"
          rows={5}
          disabled={isSubmitting}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? `${formId}-message-error` : undefined}
          className="w-full rounded-lg border border-surface-border bg-white px-4 py-3 text-[15px] text-primary-900 outline-none transition-colors focus:border-accent-500 disabled:bg-surface-muted"
        />
        {errors.message && (
          <p id={`${formId}-message-error`} className="mt-1.5 text-sm text-red-600">
            {errors.message}
          </p>
        )}
      </div>

      <Button type="submit" disabled={isSubmitting} className="self-start">
        {isSubmitting ? "Sending…" : "Send Message"}
      </Button>
    </form>
  );
}

function Field({
  id,
  name,
  label,
  type = "text",
  autoComplete,
  helperText,
  error,
  disabled,
}: {
  id: string;
  name: string;
  label: string;
  type?: string;
  autoComplete?: string;
  helperText?: string;
  error?: string;
  disabled?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-primary-900">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        disabled={disabled}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : helperText ? `${id}-helper` : undefined}
        className="min-h-[44px] w-full rounded-lg border border-surface-border bg-white px-4 text-[15px] text-primary-900 outline-none transition-colors focus:border-accent-500 disabled:bg-surface-muted"
      />
      {helperText && !error && (
        <p id={`${id}-helper`} className="mt-1.5 text-sm text-ink-faint">
          {helperText}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
