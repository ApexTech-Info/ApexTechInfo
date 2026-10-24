import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CtaBand, PageIntro } from "@/components/site-shell";
import { pageMeta } from "@/lib/site-config";
import { serviceGroups } from "@/lib/agency";

export const Route = createFileRoute("/services/")({
  head: () =>
    pageMeta(
      "IT & Digital Services",
      "Website development, mobile apps, custom software, SEO, marketing and automation. Everything your business needs online, from one team.",
      "/services",
    ),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Services"
        title="Everything you need to build and grow online"
        text="From your first idea to a complete digital setup, we cover design, development, marketing and support. Pick one service or combine several."
      />
      <section className="border-y border-border bg-secondary/45">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
          <div className="grid gap-14 lg:grid-cols-3">
            {serviceGroups.map((group) => (
              <section key={group.title}>
                <p className="eyebrow">{group.title}</p>
                <h2 className="mt-4 font-display text-3xl font-medium">{group.description}</h2>
                <div className="mt-7 divide-y divide-border border-y border-border">
                  {group.services.map((service) => (
                    <Link
                      key={service.slug}
                      to="/services/$service"
                      params={{ service: service.slug }}
                      className="group block py-5"
                    >
                      <span className="flex items-center justify-between gap-4 font-display text-xl font-medium group-hover:text-primary">
                        {service.title}
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                      </span>
                      <span className="mt-2 block text-sm leading-6 text-muted-foreground">
                        {service.text}
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
