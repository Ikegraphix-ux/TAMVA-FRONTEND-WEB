import Link from "next/link";
import type { ArticleSummary } from "@/lib/types";
import { Icon } from "./Icon";

const categoryIcon: Record<ArticleSummary["category"], "docs" | "guides" | "faq" | "insights" | "announcements"> = {
  Documentation: "docs",
  Guides: "guides",
  FAQs: "faq",
  Insights: "insights",
  Announcements: "announcements",
};

export function ArticleCard({ article }: { article: ArticleSummary }) {
  return (
    <Link
      href={article.href}
      className="group flex h-full flex-col rounded-xl2 border border-surface-border bg-white p-6 shadow-card transition-shadow duration-200 hover:shadow-card-hover"
    >
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-accent-600">
        <Icon name={categoryIcon[article.category]} className="h-4 w-4" />
        {article.category}
      </div>
      <h3 className="mt-3 text-lg font-semibold text-primary-900">{article.title}</h3>
      <p className="mt-2 flex-1 text-[15px] leading-relaxed text-ink-muted">
        {article.description}
      </p>
      <div className="mt-5 flex items-center justify-between text-sm text-ink-faint">
        <span>{article.readingTime}</span>
        <span className="inline-flex items-center gap-1.5 font-semibold text-accent-600 transition-transform group-hover:translate-x-0.5">
          Read more
          <Icon name="arrow-right" className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
