export interface NavLink {
  label: string;
  href: string;
}

export interface ProductSummary {
  slug: "passport" | "risk-intelligence" | "verification";
  name: string;
  tagline: string;
  description: string;
  icon: IconName;
}

export interface ProductDetail extends ProductSummary {
  overview: string;
  whyItMatters: string;
  howItWorks: { title: string; description: string }[];
  capabilities: string[];
  whoItsFor: string[];
  trustNotes: string[];
  faqs: { question: string; answer: string }[];
}

export interface SolutionSummary {
  slug: "organizations" | "businesses" | "investigators" | "individuals";
  name: string;
  headline: string;
  description: string;
  icon: IconName;
}

export interface SolutionDetail extends SolutionSummary {
  challenges: string[];
  howTamvaHelps: { title: string; description: string }[];
  relatedProducts: ProductSummary["slug"][];
}

export interface ArticleSummary {
  id: string;
  category: "Documentation" | "Guides" | "FAQs" | "Insights" | "Announcements";
  title: string;
  description: string;
  readingTime: string;
  href: string;
  content: string[];
}

export type IconName =
  | "identity"
  | "verification"
  | "risk"
  | "organizations"
  | "businesses"
  | "investigators"
  | "individuals"
  | "security"
  | "privacy"
  | "governance"
  | "auditability"
  | "responsible-data"
  | "docs"
  | "guides"
  | "faq"
  | "insights"
  | "announcements"
  | "discover"
  | "analyze"
  | "decide"
  | "arrow-right"
  | "menu"
  | "close"
  | "search";

export type FormStatus = "idle" | "submitting" | "success" | "error";
