import type { MetadataRoute } from "next";
import { getSiteUrl, isIndexingEnabled } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  if (!isIndexingEnabled()) {
    return {
      rules: { userAgent: "*", allow: "/" },
    };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: new URL("/sitemap.xml", getSiteUrl()).toString(),
  };
}
