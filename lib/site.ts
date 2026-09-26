const defaultSiteUrl = "https://www.tamva.com";

export function getSiteUrl(): URL {
  const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!configuredSiteUrl) return new URL(defaultSiteUrl);

  const candidate = /^https?:\/\//i.test(configuredSiteUrl)
    ? configuredSiteUrl
    : `https://${configuredSiteUrl}`;

  try {
    const url = new URL(candidate);
    return url.protocol === "http:" || url.protocol === "https:"
      ? url
      : new URL(defaultSiteUrl);
  } catch {
    return new URL(defaultSiteUrl);
  }
}

