import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CtaBand, PageIntro } from "@/components/site-shell";
import { pageMeta } from "@/lib/agency";
import { serviceGroups } from "@/lib/services";

export const Route = createFileRoute("/services")({
  head: () =>
    pageMeta(
      "Digital Services",
      "Website, app, software, design, marketing, SEO, automation and cloud services for growing businesses.",
      "/services",
    ),
  component: ServicesPage,
});

function ServicesPage() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  if (pathname !== "/services") return <Outlet />;

  return (
    <>
      <PageIntro
        eyebrow="Our services"
        title="One team for the digital work ahead."
        text="Choose a focused service or bring us a wider challenge. We begin by understanding your business, then agree what to design and build."
      />
      <section className="border-y border-border bg-secondary/50">
        <div className="mx-auto max-w-7xl space-y-16 px-5 py-16 sm:px-8 lg:py-24">
          {serviceGroups.map((group) => (
            <div key={group.name}>
              <p className="eyebrow">{group.name}</p>
              <p className="mt-3 max-w-2xl text-muted-foreground">{group.description}</p>
              <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {group.services.map((service) => (
                  <article
                    key={service.slug}
                    className="rounded-lg border border-border bg-background p-6"
                  >
                    <h2 className="font-display text-2xl font-semibold">{service.title}</h2>
                    <p className="mt-3 leading-7 text-muted-foreground">{service.summary}</p>
                    <Link
                      to="/services/$slug"
                      params={{ slug: service.slug }}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                    >
                      Explore service <ArrowRight className="size-4" />
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
