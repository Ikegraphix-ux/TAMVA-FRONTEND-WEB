import type { Metadata } from "next";
import Link from "next/link";
import { getCanonicalAlternates } from "@/lib/site";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  alternates: getCanonicalAlternates("/developers"),
  title: "Developers",
  description:
    "Developer documentation and integration information for the TAMVA financial technology platform.",
};

type DocumentationItem = {
  id: string;
  title: string;
  description: string;
  status?: string;
  href?: string;
  actionLabel?: string;
};

type DocumentationSection = {
  id: string;
  title: string;
  description: string;
  items: DocumentationItem[];
};

const sections: DocumentationSection[] = [
  {
    id: "getting-started",
    title: "Getting started",
    description: "Start here for an introduction and access information.",
    items: [
      {
        id: "introduction",
        title: "Introduction",
        description:
          "This page is the current overview of TAMVA developer information and its publication status.",
        status: "Current page",
      },
      {
        id: "quickstart",
        title: "Quickstart",
        description:
          "Setup steps and a first request will be published after they are verified against the current backend contract.",
      },
      {
        id: "sandbox",
        title: "Sandbox",
        description:
          "Contact TAMVA to ask about current sandbox availability.",
        status: "Ask the team",
        href: "/contact",
        actionLabel: "Ask about sandbox access",
      },
      {
        id: "authentication",
        title: "Authentication",
        description:
          "Authentication methods and credential setup are not documented until confirmed against the backend implementation.",
      },
      {
        id: "first-api-request",
        title: "First API request",
        description:
          "A verified endpoint, request example and expected response will be added when the API specification is available.",
      },
      {
        id: "going-live",
        title: "Going live",
        description:
          "Production access requirements and launch steps will be published after they are confirmed.",
      },
    ],
  },
  {
    id: "core-concepts",
    title: "Core concepts",
    description:
      "Product concepts and data models will be documented against approved product and backend specifications.",
    items: [
      { id: "customers", title: "Customers", description: "Customer models and supported operations are not yet published." },
      { id: "accounts", title: "Accounts", description: "Account models and supported operations are not yet published." },
      { id: "transactions", title: "Transactions", description: "Transaction models and supported operations are not yet published." },
      { id: "financial-passport", title: "Financial Passport", description: "The integration model and available capabilities are not yet published." },
      { id: "consent", title: "Consent", description: "Consent flows and data-sharing behavior are not yet published." },
      { id: "risk-decisions", title: "Risk decisions", description: "Decision models and supported behavior are not yet published." },
      { id: "verification", title: "Verification", description: "Verification workflows and supported operations are not yet published." },
    ],
  },
  {
    id: "api-reference-section",
    title: "API reference",
    description:
      "Endpoint documentation will be generated from or checked against the actual backend or OpenAPI specification.",
    items: [
      {
        id: "api-reference",
        title: "API Reference",
        description:
          "No endpoint list, schema or request example is published here until it is verified against the backend contract.",
      },
    ],
  },
  {
    id: "platform",
    title: "Platform",
    description:
      "Platform behavior must be confirmed before it is documented for integration use.",
    items: [
      { id: "environments", title: "Environments", description: "Environment details are not yet published." },
      { id: "idempotency", title: "Idempotency", description: "Idempotency behavior is not yet documented." },
      { id: "pagination", title: "Pagination", description: "Pagination behavior is not yet documented." },
      { id: "errors", title: "Errors", description: "Error formats and codes are not yet documented." },
      { id: "rate-limits", title: "Rate limits", description: "Rate limits are not yet published." },
      { id: "webhooks", title: "Webhooks", description: "Webhook events and delivery behavior are not yet documented." },
      { id: "versioning", title: "Versioning", description: "API versioning policy is not yet published." },
    ],
  },
  {
    id: "security",
    title: "Security",
    description:
      "Security guidance will describe verified implementation and operational requirements.",
    items: [
      { id: "api-security", title: "API security", description: "API security guidance is being prepared." },
      { id: "credential-management", title: "Credential management", description: "Credential lifecycle guidance is being prepared." },
      { id: "webhook-verification", title: "Webhook verification", description: "Webhook signing and verification details are not yet documented." },
    ],
  },
  {
    id: "developer-resources",
    title: "Resources",
    description:
      "Updates, service information and support for developers.",
    items: [
      {
        id: "changelog",
        title: "Changelog",
        description: "A public changelog has not yet been published.",
        status: "Not yet published",
      },
      {
        id: "status",
        title: "Service status",
        description: "A public service status page is not currently available.",
        status: "Not yet published",
      },
      {
        id: "support",
        title: "Support",
        description: "Contact the TAMVA team with developer questions.",
        status: "Contact TAMVA",
        href: "/contact",
        actionLabel: "Contact the team",
      },
      {
        id: "glossary",
        title: "Glossary",
        description: "A developer glossary has not yet been published.",
      },
    ],
  },
];

export default function DevelopersPage() {
  return (
    <>
      <section className="border-b border-surface-border bg-surface-muted py-14 sm:py-20">
        <Container>
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Developers" },
            ]}
          />
          <div className="mt-6">
            <SectionHeading
              eyebrow="Developers"
              title="Documentation for building with TAMVA."
              description="The documentation map below shows planned topics and their current publication status. Technical instructions will be published only when confirmed against the actual backend contract."
            />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="flex flex-col gap-14">
            {sections.map((section) => (
              <section key={section.id} id={section.id} aria-labelledby={section.id + "-title"}>
                <div className="max-w-3xl">
                  <h2
                    id={section.id + "-title"}
                    className="text-h2-mobile font-semibold text-primary-900 sm:text-h2"
                  >
                    {section.title}
                  </h2>
                  <p className="mt-3 leading-relaxed text-ink-muted">
                    {section.description}
                  </p>
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {section.items.map((item) => (
                    <article
                      id={item.id}
                      key={item.id}
                      className="rounded-xl2 border border-surface-border bg-white p-6 shadow-card"
                    >
                      <span className="inline-flex rounded-full bg-accent-50 px-3 py-1 text-xs font-semibold text-accent-700">
                        {item.status ?? "In preparation"}
                      </span>
                      <h3 className="mt-4 text-lg font-semibold text-primary-900">
                        {item.title}
                      </h3>
                      <p className="mt-2 leading-relaxed text-ink-muted">
                        {item.description}
                      </p>
                      {item.href && item.actionLabel && (
                        <Link
                          href={item.href}
                          className="mt-4 inline-block text-sm font-semibold text-primary-800 hover:text-accent-700"
                        >
                          {item.actionLabel} <span aria-hidden="true">→</span>
                        </Link>
                      )}
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </Container>
      </section>

      <CTA
        title="Discuss a potential integration."
        description="Contact TAMVA with questions about documentation, integration needs or current sandbox availability."
        primaryLabel="Contact TAMVA"
        primaryHref="/contact"
      />
    </>
  );
}
