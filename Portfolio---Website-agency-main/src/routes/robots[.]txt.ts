import { createFileRoute } from "@tanstack/react-router";
import { env } from "node:process";
import { siteConfig } from "@/lib/site-config";

export const Route = createFileRoute("/robots.txt")({
  server: {
    handlers: {
      GET: ({ request }) => {
        const origin =
          siteConfig.url || env["URL"] || env["DEPLOY_PRIME_URL"] || new URL(request.url).origin;
        const content = `User-agent: *\nAllow: /\nSitemap: ${new URL("/sitemap.xml", `${origin}/`).toString()}\n`;
        return new Response(content, {
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
