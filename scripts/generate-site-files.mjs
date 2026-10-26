import { readFile, mkdir, writeFile } from "node:fs/promises";

const configuredUrl = process.env.VITE_SITE_URL?.trim();
if (!configuredUrl) {
  console.warn("VITE_SITE_URL is not set; skipping sitemap generation.");
  process.exit(0);
}

const parsedUrl = new URL(configuredUrl);
if (parsedUrl.pathname !== "/" || parsedUrl.search || parsedUrl.hash) {
  throw new Error("VITE_SITE_URL must be a site origin without a path, query, or hash.");
}
const origin = parsedUrl.origin;
const [serviceSource, articleSource] = await Promise.all([
  readFile(new URL("../src/lib/services.ts", import.meta.url), "utf8"),
  readFile(new URL("../src/lib/blog.ts", import.meta.url), "utf8"),
]);
const serviceSlugs = [...serviceSource.matchAll(/slug:\s*"([^"]+)"/g)].map((match) => match[1]);
const articleSlugs = [...articleSource.matchAll(/slug:\s*"([^"]+)"/g)].map((match) => match[1]);
if (serviceSlugs.length !== 11 || articleSlugs.length !== 12) {
  throw new Error("Expected all 11 services and 12 articles when generating the sitemap.");
}
const routes = [
  "/",
  "/services",
  ...serviceSlugs.map((slug) => `/services/${slug}`),
  "/who-we-help",
  "/portfolio",
  "/about",
  "/pricing",
  "/testimonials",
  "/blog",
  ...articleSlugs.map((slug) => `/blog/${slug}`),
  "/contact",
  "/faq",
];

const urlEntries = routes.map((route) => `  <url><loc>${origin}${route}</loc></url>`).join("\n");
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>\n`;
const robots = `User-agent: *\nAllow: /\nDisallow: /api/\nSitemap: ${origin}/sitemap.xml\n`;

await mkdir("dist", { recursive: true });
await Promise.all([
  writeFile("dist/sitemap.xml", sitemap, "utf8"),
  writeFile("dist/robots.txt", robots, "utf8"),
]);
console.info(`Generated sitemap and robots.txt for ${origin}.`);
