import type { Metadata } from "next";

function configuredOfficialSiteUrl(): URL | undefined {
  const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!configuredSiteUrl) return undefined;

  try {
    const url = new URL(
      /^https?:\/\//i.test(configuredSiteUrl)
        ? configuredSiteUrl
        : `https://${configuredSiteUrl}`,
    );
    if (url.protocol !== "https:") return undefined;
    if (url.hostname === "localhost" || url.hostname.endsWith(".vercel.app")) return undefined;
    return url;
  } catch {
    return undefined;
  }
}

export function isIndexingEnabled(): boolean {
  return (
    process.env.VERCEL_ENV === "production" &&
    process.env.NEXT_PUBLIC_INDEXING_ENABLED === "true" &&
    configuredOfficialSiteUrl() !== undefined
  );
}

export function getSiteUrl(): URL {
  const officialUrl = configuredOfficialSiteUrl();
  if (officialUrl) return officialUrl;

  const deploymentUrl = process.env.VERCEL_URL?.trim();
  if (deploymentUrl) {
    try {
      return new URL(`https://${deploymentUrl}`);
    } catch {
      // Fall through to the local development URL.
    }
  }

  return new URL("http://localhost:3000");
}

export function getCanonicalAlternates(path: string): Metadata["alternates"] {
  if (!isIndexingEnabled()) return undefined;
  return { canonical: new URL(path, getSiteUrl()) };
}

export function getRobotsPolicy(): Metadata["robots"] {
  return isIndexingEnabled()
    ? { index: true, follow: true }
    : { index: false, follow: false };
}
