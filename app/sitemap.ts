import type { MetadataRoute } from "next";
import { products, solutions } from "@/lib/content";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl().origin;

  const staticRoutes = [
    "",
    "/about",
    "/products",
    "/solutions",
    "/trust",
    "/resources",
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

