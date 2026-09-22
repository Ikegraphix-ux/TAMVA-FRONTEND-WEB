"use client";

import { useId, useMemo, useState } from "react";
import { ArticleCard } from "./ArticleCard";
import { Icon } from "./Icon";
import type { ArticleSummary } from "@/lib/types";

const categories: (ArticleSummary["category"] | "All")[] = [
  "All",
  "Documentation",
  "Guides",
  "FAQs",
  "Insights",
  "Announcements",
];

export function ResourceGrid({ articles }: { articles: ArticleSummary[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const searchId = useId();

  const filtered = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory = category === "All" || article.category === category;
      const matchesQuery =
        query.trim().length === 0 ||
        `${article.title} ${article.description}`
          .toLowerCase()
          .includes(query.trim().toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [articles, query, category]);

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xs">
          <label htmlFor={searchId} className="sr-only">
            Search resources
          </label>
          <Icon
            name="search"
            className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-faint"
          />
          <input
            id={searchId}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search resources"
            className="min-h-[44px] w-full rounded-full border border-surface-border bg-white pl-10 pr-4 text-[15px] text-primary-900 outline-none transition-colors focus:border-accent-500"
          />
        </div>

        <div
          role="group"
          aria-label="Filter by category"
          className="flex flex-wrap gap-2"
        >
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              aria-pressed={category === c}
              className={`min-h-[36px] rounded-full border px-4 text-sm font-medium transition-colors cursor-pointer ${
                category === c
                  ? "border-primary-900 bg-primary-900 text-white"
                  : "border-surface-border bg-white text-ink-muted hover:border-primary-300"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" role="status">
          {filtered.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <div
          role="status"
          className="mt-10 rounded-xl2 border border-dashed border-surface-border p-12 text-center text-[15px] text-ink-muted"
        >
          No resources match your search. Try a different term or category.
        </div>
      )}
    </div>
  );
}
