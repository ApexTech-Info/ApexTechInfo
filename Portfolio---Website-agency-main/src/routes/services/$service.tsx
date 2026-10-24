import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand, PageIntro } from "@/components/site-shell";
import { FaqList } from "@/components/faq-list";
import { faqs, services } from "@/lib/agency";
import { serviceDetails } from "@/lib/service-content";
import { pageMeta } from "@/lib/site-config";

const detailsBySlug = Object.fromEntries(serviceDetails.map((service) => [service.slug, service]));

export const Route = createFileRoute("/services/$service")({
  head: ({ params }) => {
    const service = detailsBySlug[params.service];
    return pageMeta(
      service?.seoTitle ?? "Service not found",
      service?.metaDescription ??
        "Explore our website, software, marketing and technology services.",
      `/services/${params.service}`,
    );
  },
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { service: slug } = Route.useParams();
  const service = detailsBySlug[slug];

  if (!service) {
    return (
      <section className="mx-auto max-w-3xl px-5 py-24 text-center sm:px-8">
        <p className="eyebrow">Service not found</p>
        <h1 className="mt-5 font-display text-4xl font-medium">That service is not listed.</h1>
        <Link to="/services" className="mt-6 inline-flex items-center gap-2 font-semibold">
          Browse all services <ArrowRight className="size-4" />
        </Link>
      </section>
    );
  }

  const serviceTitle =
    services.find((item) => item.slug === service.slug)?.title ?? service.headline;

  return (
    <>
      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-7xl px-5 pt-8 text-sm text-muted-foreground sm:px-8"
      >
        <Link to="/services" className="hover:text-foreground">
          Services
        </Link>
        <span aria-hidden="true"> / </span>
        <span className="text-foreground">{serviceTitle}</span>
      </nav>
      <PageIntro eyebrow={serviceTitle} title={service.headline} text={service.subheadline} />
      <section className="border-y border-border bg-secondary/45">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1.2fr_.8fr] lg:py-24">
          <div>
            <h2 className="font-display text-3xl font-medium">
              A practical solution for the way you work
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
              {service.introduction}
            </p>
            <h2 className="mt-10 font-display text-2xl font-medium">What we include</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {service.includes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-6">
                  <Check className="mt-1 size-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <aside className="border-l-2 border-primary pl-6">
            <p className="eyebrow">A good fit for</p>
            <p className="mt-3 text-lg leading-7">{service.idealFor}</p>
            <h2 className="mt-9 font-display text-2xl font-medium">What you get</h2>
            <ul className="mt-4 grid gap-3">
              {service.deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-6">
                  <Check className="mt-1 size-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <Button asChild variant="dark" className="mt-8">
              <Link to="/contact" search={{ service: service.slug }}>
                {service.cta} <ArrowUpRight />
              </Link>
            </Button>
          </aside>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <p className="eyebrow">Before you start</p>
            <h2 className="mt-4 font-display text-3xl font-medium sm:text-4xl">Common questions</h2>
          </div>
          <FaqList items={faqs.filter((_, index) => [0, 1, 3, 5, 6].includes(index))} />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
