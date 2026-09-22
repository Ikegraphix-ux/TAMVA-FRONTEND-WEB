import type { MetadataRoute } from "next";
import { products, solutions } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.tamva.com";

  const staticRoutes = [
    "",
    "/about",
    "/products",
    "/solutions",
    "/trust",
    "/resources",
    "/contact",
  ];

  const productRoutes = products.map((p) => `/products/${p.slug}`);
  const solutionRoutes = solutions.map((s) => `/solutions/${s.slug}`);

  return [...staticRoutes, ...productRoutes, ...solutionRoutes].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));
}
