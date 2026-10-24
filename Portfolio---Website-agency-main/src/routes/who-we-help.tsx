import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CtaBand, PageIntro } from "@/components/site-shell";
import { audiences, services } from "@/lib/agency";
import { pageMeta } from "@/lib/site-config";

export const Route = createFileRoute("/who-we-help")({
  head: () =>
    pageMeta(
      "Who We Help",
      "Digital services for startups, local businesses, retail brands, clinics, schools and growing companies.",
      "/who-we-help",
    ),
  component: WhoWeHelpPage,
});

function WhoWeHelpPage() {
  return (
    <>
      <PageIntro
        eyebrow="Who we help"
        title="Built for businesses like yours"
        text="Different businesses have different constraints. We learn how you work, then connect you with the services that fit your next step."
      />
      <section className="border-y border-border bg-secondary/45">
        <div className="mx-auto grid max-w-7xl gap-0 px-5 py-12 sm:px-8 md:grid-cols-2 lg:grid-cols-3">
          {audiences.map((audience, index) => (
            <article
              key={audience.title}
              className="border-t border-border py-8 md:px-6 md:odd:border-r lg:px-8 lg:nth-[3n+1]:border-r-0 lg:nth-[3n+2]:border-r"
            >
              <span className="text-sm text-primary">0{index + 1}</span>
              <h2 className="mt-4 font-display text-2xl font-medium">{audience.title}</h2>
              <p className="mt-3 leading-7 text-muted-foreground">{audience.text}</p>
              <ul className="mt-6 grid gap-2">
                {audience.services.map((name) => {
                  const service = services.find((item) => item.title === name);
                  return service ? (
                    <li key={service.slug}>
                      <Link
                        to="/services/$service"
                        params={{ service: service.slug }}
                        className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary"
                      >
                        {service.title}
                        <ArrowRight className="size-3.5" />
                      </Link>
                    </li>
                  ) : null;
                })}
              </ul>
            </article>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
