const configuredSiteUrl = import.meta.env["VITE_SITE_URL"]?.trim().replace(/\/+$/, "");
const parsedSiteUrl = configuredSiteUrl ? new URL(configuredSiteUrl) : undefined;
if (
  parsedSiteUrl &&
  (parsedSiteUrl.pathname !== "/" || parsedSiteUrl.search || parsedSiteUrl.hash)
) {
  throw new Error("VITE_SITE_URL must be a site origin without a path, query, or hash.");
}

export const brand = {
  name: "ApexTechInfo",
  wordmark: {
    prefix: "Apex",
    accent: "TechInfo",
  },
  tagline: "Apex Technology Information",
  description:
    "ApexTechInfo designs, builds and supports websites, mobile apps and custom software for growing businesses.",
  siteUrl: parsedSiteUrl?.origin ?? "",
  email: "",
  phone: "",
  whatsapp: "",
  address: "",
  businessHours: "",
  socialLinks: [],
} as const;

export const absoluteUrl = (path: string) =>
  brand.siteUrl ? new URL(path, `${brand.siteUrl}/`).toString() : undefined;
