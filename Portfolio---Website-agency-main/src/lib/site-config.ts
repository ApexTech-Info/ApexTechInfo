const productionUrl = import.meta.env["VITE_SITE_URL"]?.trim().replace(/\/$/, "") ?? "";
const companyName = "ApexTechInfo";

export const siteConfig = {
  name: companyName,
  tagline: "Apex Technology Information",
  description: `${companyName} provides website development, mobile apps, custom software, SEO, digital marketing and technology support for growing businesses.`,
  url: productionUrl,
  logoUrl: import.meta.env["VITE_BRAND_LOGO_URL"]?.trim() ?? "",
  faviconUrl: import.meta.env["VITE_BRAND_FAVICON_URL"]?.trim() ?? "",
  socialImageUrl: import.meta.env["VITE_SOCIAL_IMAGE_URL"]?.trim() ?? "",
  email: import.meta.env["VITE_CONTACT_EMAIL"]?.trim() ?? "",
  phone: import.meta.env["VITE_CONTACT_PHONE"]?.trim() ?? "",
  whatsapp: import.meta.env["VITE_WHATSAPP_NUMBER"]?.trim() ?? "",
  city: import.meta.env["VITE_BUSINESS_CITY"]?.trim() ?? "",
  state: import.meta.env["VITE_BUSINESS_STATE"]?.trim() ?? "",
  address: import.meta.env["VITE_BUSINESS_ADDRESS"]?.trim() ?? "",
  businessHours: import.meta.env["VITE_BUSINESS_HOURS"]?.trim() ?? "",
  foundingYear: import.meta.env["VITE_FOUNDING_YEAR"]?.trim() ?? "",
  team: [] as { name: string; role: string; bio: string; photo?: string }[],
  social: {
    instagram: import.meta.env["VITE_INSTAGRAM_URL"]?.trim() ?? "",
    linkedin: import.meta.env["VITE_LINKEDIN_URL"]?.trim() ?? "",
  },
};

export function pageMeta(title: string, description: string, path: string) {
  const brandSuffix = ` | ${siteConfig.name}`;
  const cleanTitle = title.endsWith(brandSuffix) ? title.slice(0, -brandSuffix.length) : title;
  const fullTitle = `${cleanTitle.slice(0, 60 - brandSuffix.length).trimEnd()}${brandSuffix}`;
  const canonical = siteConfig.url ? new URL(path, `${siteConfig.url}/`).toString() : undefined;
  const socialImage =
    canonical && siteConfig.socialImageUrl
      ? new URL(siteConfig.socialImageUrl, `${siteConfig.url}/`).toString()
      : undefined;

  return {
    meta: [
      { title: fullTitle },
      { name: "description", content: description },
      { property: "og:title", content: fullTitle },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      ...(canonical ? [{ property: "og:url", content: canonical }] : []),
      ...(socialImage ? [{ property: "og:image", content: socialImage }] : []),
      { name: "twitter:card", content: socialImage ? "summary_large_image" : "summary" },
      { name: "twitter:title", content: fullTitle },
      { name: "twitter:description", content: description },
      ...(socialImage ? [{ name: "twitter:image", content: socialImage }] : []),
    ],
    ...(canonical ? { links: [{ rel: "canonical", href: canonical }] } : {}),
  };
}
