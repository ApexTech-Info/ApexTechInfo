import { brand, absoluteUrl } from "@/lib/brand";

export const pageMeta = (title: string, description: string, path: string) => {
  const canonical = absoluteUrl(path);
  const pageTitle = title === brand.name ? brand.name : `${title} | ${brand.name}`;

  return {
    meta: [
      { title: pageTitle },
      { name: "description", content: description },
      { property: "og:site_name", content: brand.name },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      ...(canonical ? [{ property: "og:url", content: canonical }] : []),
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: pageTitle },
      { name: "twitter:description", content: description },
    ],
    links: canonical ? [{ rel: "canonical", href: canonical }] : [],
  };
};
