import type { MetadataRoute } from "next";
import { products, solutions } from "@/lib/content";
import { getSiteUrl, isIndexingEnabled } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!isIndexingEnabled()) return [];

  const siteUrl = getSiteUrl().origin;

  const staticRoutes = [
    "",
    "/about",
    "/products",
    "/solutions",
    "/trust",
    "/resources",
    "/developers",
    "/careers",
    "/contact",
  ];

  const productRoutes = products.map((p) => `/products/${p.slug}`);
  const solutionRoutes = solutions.map((s) => `/solutions/${s.slug}`);

  return [...staticRoutes, ...productRoutes, ...solutionRoutes].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));
}

