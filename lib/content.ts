import type {
  ArticleSummary,
  NavLink,
  ProductDetail,
  SolutionDetail,
} from "./types";

export const primaryNav: NavLink[] = [
  { label: "Products", href: "/products" },
  { label: "Solutions", href: "/solutions" },
  { label: "Trust & Security", href: "/trust" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
];

export const utilityNav: NavLink[] = [{ label: "Contact", href: "/contact" }];

export const products: ProductDetail[] = [
  {
    slug: "passport",
    name: "TAMVA Passport",
    tagline: "A trusted digital identity experience.",
    description:
      "A trusted digital identity experience designed to help establish and verify identity information.",
    icon: "identity",
    overview:
      "TAMVA Passport gives people and organizations a single, trusted way to present and confirm identity information across digital interactions.",
    whyItMatters:
      "Fragmented identity checks slow people down and leave organizations guessing. A shared, trusted identity layer reduces friction while keeping information handling accountable.",
    howItWorks: [
      {
        title: "Establish",
        description: "An identity profile is created from the information a person chooses to provide.",
      },
      {
        title: "Verify",
        description: "Relevant details are checked against trusted sources as part of the verification workflow.",
      },
      {
        title: "Present",
        description: "The verified profile can be presented to organizations that need to confirm identity.",
      },
    ],
    capabilities: [
      "Structured identity profile",
      "Reusable verification status",
      "Consent-based information sharing",
      "Audit trail of verification events",
    ],
    whoItsFor: [
      "Individuals managing their digital identity",
      "Organizations that need to confirm who they are dealing with",
    ],
    trustNotes: [
      "Information is shared only with explicit consent.",
      "Verification history is auditable.",
    ],
    faqs: [
      {
        question: "Who can use TAMVA Passport?",
        answer:
          "TAMVA Passport is designed for individuals who want a trusted identity profile and for organizations that need to verify identity information.",
      },
      {
        question: "Is my information shared automatically?",
        answer:
          "No. Information is shared only when you choose to share it as part of a specific verification request.",
      },
    ],
  },
  {
    slug: "risk-intelligence",
    name: "Risk Intelligence",
    tagline: "Structured signals for informed decisions.",
    description:
      "Structured intelligence and risk signals designed to support informed decisions.",
    icon: "risk",
    overview:
      "Risk Intelligence organizes relevant signals into a structured view so teams can make informed decisions with clearer context.",
    whyItMatters:
      "Decisions made without adequate context carry more risk. Structured intelligence helps teams understand relevant signals before acting.",
    howItWorks: [
      { title: "Collect", description: "Relevant signals are gathered from configured sources." },
      { title: "Structure", description: "Signals are organized into a consistent, reviewable format." },
      { title: "Inform", description: "Teams use the structured view to support their decision." },
    ],
    capabilities: [
      "Structured signal summaries",
      "Configurable sources",
      "Reviewable decision context",
      "Exportable reports",
    ],
    whoItsFor: [
      "Risk and compliance teams",
      "Organizations evaluating counterparties",
    ],
    trustNotes: [
      "Signals are presented as context, not as automated verdicts.",
      "Sources and methodology are disclosed where relevant.",
    ],
    faqs: [
      {
        question: "Does Risk Intelligence make decisions automatically?",
        answer:
          "No. It structures relevant signals so your team can make an informed decision; the decision itself remains with your team.",
      },
    ],
  },
  {
    slug: "verification",
    name: "Verification",
    tagline: "Workflows to validate identity and information.",
    description:
      "Verification workflows designed to help validate relevant identity and information.",
    icon: "verification",
    overview:
      "Verification provides configurable workflows for validating identity and supporting information as part of an organization's process.",
    whyItMatters:
      "Manual verification is slow and inconsistent. A structured workflow helps teams apply the same standard every time.",
    howItWorks: [
      { title: "Request", description: "A verification request is configured for the information that matters." },
      { title: "Validate", description: "Submitted information is checked against the configured requirements." },
      { title: "Confirm", description: "A verification outcome is recorded and made available to the requesting team." },
    ],
    capabilities: [
      "Configurable verification workflows",
      "Consistent validation standards",
      "Status tracking",
      "Integration with Passport and Risk Intelligence",
    ],
    whoItsFor: [
      "Organizations onboarding customers or partners",
      "Teams that need a consistent verification standard",
    ],
    trustNotes: [
      "Workflows are configurable to the information actually required.",
      "Verification outcomes are recorded for accountability.",
    ],
    faqs: [
      {
        question: "Can verification requirements be customized?",
        answer:
          "Yes. Verification workflows are configured around the information your organization actually needs to validate.",
      },
    ],
  },
];

export const solutions: SolutionDetail[] = [
  {
    slug: "organizations",
    name: "Organizations",
    headline: "Strengthen verification and risk workflows.",
    description: "Strengthen verification and risk workflows.",
    icon: "organizations",
    challenges: [
      "Inconsistent verification standards across teams",
      "Limited visibility into relevant risk signals",
    ],
    howTamvaHelps: [
      { title: "Consistent workflows", description: "Apply the same verification standard across the organization." },
      { title: "Structured risk context", description: "Give teams a clearer, structured view of relevant signals." },
    ],
    relatedProducts: ["verification", "risk-intelligence"],
  },
  {
    slug: "businesses",
    name: "Businesses",
    headline: "Make informed decisions using trusted information.",
    description: "Make informed decisions using trusted information.",
    icon: "businesses",
    challenges: [
      "Hard to confirm who you're dealing with",
      "Decisions made with incomplete information",
    ],
    howTamvaHelps: [
      { title: "Trusted identity checks", description: "Confirm identity information with a consistent process." },
      { title: "Informed decisions", description: "Use structured intelligence to support day-to-day decisions." },
    ],
    relatedProducts: ["passport", "risk-intelligence"],
  },
  {
    slug: "investigators",
    name: "Investigators",
    headline: "Access structured information to support investigations.",
    description: "Access structured information to support investigations.",
    icon: "investigators",
    challenges: [
      "Information scattered across sources",
      "Time-consuming manual research",
    ],
    howTamvaHelps: [
      { title: "Structured records", description: "Review relevant information in a consistent, organized format." },
      { title: "Auditable history", description: "Trace verification and risk events as part of an investigation." },
    ],
    relatedProducts: ["risk-intelligence", "verification"],
  },
  {
    slug: "individuals",
    name: "Individuals",
    headline: "Understand and manage trusted digital identity experiences.",
    description: "Understand and manage trusted digital identity experiences.",
    icon: "individuals",
    challenges: [
      "Repeating the same identity checks across services",
      "Uncertainty about how identity information is used",
    ],
    howTamvaHelps: [
      { title: "One trusted profile", description: "Manage a single identity profile you control." },
      { title: "Consent-based sharing", description: "Choose what information is shared and with whom." },
    ],
    relatedProducts: ["passport"],
  },
];

export const articles: ArticleSummary[] = [
  {
    id: "getting-started-passport",
    category: "Documentation",
    title: "Getting started with TAMVA Passport",
    description: "A walkthrough of setting up an identity profile and requesting verification.",
    readingTime: "6 min read",
    href: "/resources/getting-started-passport",
    content: [
      "TAMVA Passport is designed to give people a structured way to manage and present identity information during digital interactions.",
      "Getting started begins with establishing an identity profile using the information required for the workflow. Verification can then be requested where a stronger level of assurance is needed.",
      "Once verification is complete, the resulting status can be presented to an organization as part of an interaction. Sharing is intended to be controlled by the person and recorded as part of the verification workflow.",
    ],
  },
  {
    id: "risk-intelligence-overview",
    category: "Guides",
    title: "Understanding Risk Intelligence signals",
    description: "How structured signals are organized and what they're designed to support.",
    readingTime: "8 min read",
    href: "/resources/risk-intelligence-overview",
    content: [
      "Risk Intelligence organizes relevant signals into a structured view so teams can review context before making a decision.",
      "Signals can be gathered from configured sources and presented consistently, making it easier to compare relevant information and identify what needs further review.",
      "The purpose is decision support rather than automated judgment. Teams remain responsible for reviewing the available context and making the final decision.",
    ],
  },
  {
    id: "verification-workflows",
    category: "Guides",
    title: "Configuring a verification workflow",
    description: "A practical guide to setting up a verification workflow for your team.",
    readingTime: "5 min read",
    href: "/resources/verification-workflows",
    content: [
      "A verification workflow starts by defining the information an organization actually needs to validate.",
      "The workflow then applies those requirements consistently to submitted information, tracks progress, and records the resulting status.",
      "Keeping requirements explicit helps teams reduce manual variation while maintaining an auditable process for verification activity.",
    ],
  },
  {
    id: "faq-data-use",
    category: "FAQs",
    title: "How is my information used?",
    description: "Answers to common questions about consent, data handling, and access.",
    readingTime: "3 min read",
    href: "/resources/faq-data-use",
    content: [
      "TAMVA is designed around deliberate information use. Identity information should be collected and shared for a defined purpose rather than reused without context.",
      "Consent is central to identity-sharing workflows. Access should also be limited according to the role and workflow that requires the information.",
      "Specific data practices depend on the product, workflow, and applicable requirements. Contact TAMVA for questions about a particular use case.",
    ],
  },
  {
    id: "principles-of-trust",
    category: "Insights",
    title: "What 'trust infrastructure' actually means",
    description: "A look at the principles behind TAMVA's approach to identity and risk.",
    readingTime: "7 min read",
    href: "/resources/principles-of-trust",
    content: [
      "Trust infrastructure is the combination of identity, verification, risk context, controls, and auditability that helps digital participants interact with greater confidence.",
      "For TAMVA, this means structuring information so it can be verified, reviewed, and used responsibly rather than relying on broad claims of trust.",
      "The approach also keeps human decision-makers involved. Technology can organize evidence and workflow, while accountable people remain responsible for decisions.",
    ],
  },
  {
    id: "product-updates",
    category: "Announcements",
    title: "Product updates",
    description: "A concise overview of how TAMVA approaches product changes, platform improvements, and published updates.",
    readingTime: "2 min read",
    href: "/resources/product-updates",
    content: [
      "TAMVA product updates will be published here as features, workflows, and public documentation change.",
      "Published updates should explain what changed, who is affected, and any relevant actions users or organizations need to take.",
      "For questions about a specific release or capability, use the contact page to reach the TAMVA team.",
    ],
  },
];

export function getProduct(slug: string): ProductDetail | undefined {
  return products.find((p) => p.slug === slug);
}

export function getSolution(slug: string): SolutionDetail | undefined {
  return solutions.find((s) => s.slug === slug);
}
