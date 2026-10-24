import { createFileRoute } from "@tanstack/react-router";
import { env } from "node:process";
import { articles } from "@/lib/blog-content";
import { serviceDetails } from "@/lib/service-content";
import { siteConfig } from "@/lib/site-config";

const staticPaths = [
  "/",
  "/services",
  "/who-we-help",
  "/portfolio",
  "/about",
  "/blog",
  "/contact",
  "/faq",
  "/privacy",
  "/terms",
];
const allPaths = [
  ...staticPaths,
  ...serviceDetails.map((service) => `/services/${service.slug}`),
  ...articles.map((article) => `/blog/${article.slug}`),
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: ({ request }) => {
        const origin =
          siteConfig.url || env["URL"] || env["DEPLOY_PRIME_URL"] || new URL(request.url).origin;
        const urls = allPaths
          .map((path) => `<url><loc>${new URL(path, `${origin}/`).toString()}</loc></url>`)
          .join("");
        const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
