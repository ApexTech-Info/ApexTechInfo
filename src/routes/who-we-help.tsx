import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CtaBand, PageIntro } from "@/components/site-shell";
import { pageMeta } from "@/lib/agency";
import { services } from "@/lib/services";

const audiences = [
  {
    title: "Startups",
    need: "Turn an early idea into a scoped first release, test important assumptions and make the next product decisions with better information.",
    slugs: ["custom-software-development", "ui-ux-design", "mobile-app-development"],
  },
  {
    title: "Small and local businesses",
    need: "Explain services clearly, help customers find the right information and make enquiry paths straightforward.",
    slugs: ["website-development", "seo-services", "digital-marketing"],
  },
  {
    title: "Retail and D2C brands",
    need: "Make product discovery, storefront management and checkout easier to understand and improve.",
    slugs: ["ecommerce-development", "digital-marketing", "seo-services"],
  },
  {
    title: "Clinics and service businesses",
    need: "Organise service information and create clear journeys for people looking for help or making an appointment.",
    slugs: ["website-development", "ui-ux-design", "business-automation"],
  },
  {
    title: "Schools and coaching institutes",
    need: "Present courses, schedules and enquiry information in a clear digital experience for learners and families.",
    slugs: ["website-development", "business-automation", "mobile-app-development"],
  },
  {
    title: "Growing companies",
    need: "Connect business systems, support new digital services and reduce repeated manual work.",
    slugs: ["backend-api-development", "cloud-it-solutions", "business-automation"],
  },
] as const;

export const Route = createFileRoute("/who-we-help")({
  head: () =>
    pageMeta(
      "Who We Help",
      "Digital services for startups, small businesses, retailers, clinics, schools and growing companies.",
      "/who-we-help",
    ),
  component: WhoWeHelpPage,
});

function WhoWeHelpPage() {
  return (
    <>
      <PageIntro
        eyebrow="Who we help"
        title="Digital work for the way your business works."
        text="Different teams have different constraints. We start with your customers, workflows and goals, then plan the right next step."
      />
      <section className="border-y border-border bg-secondary/50">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-3 lg:py-24">
          {audiences.map((audience) => (
            <article
              key={audience.title}
              className="rounded-lg border border-border bg-background p-6"
            >
              <h2 className="font-display text-2xl font-semibold">{audience.title}</h2>
              <p className="mt-3 leading-7 text-muted-foreground">{audience.need}</p>
              <div className="mt-5 grid gap-2">
                {audience.slugs.map((slug) => {
                  const service = services.find((item) => item.slug === slug);
                  if (!service) return null;
                  return (
                    <Link
                      key={service.slug}
                      to="/services/$slug"
                      params={{ slug: service.slug }}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
                    >
                      {service.title} <ArrowRight className="size-4" />
                    </Link>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
