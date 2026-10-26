import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site-shell";
import { FaqList } from "@/components/faq-list";
import { pageMeta } from "@/lib/agency";
import { faqs } from "@/lib/faqs";
import { findService, services } from "@/lib/services";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = findService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Service not found" }] };
    return pageMeta(
      loaderData.service.title,
      `${loaderData.service.summary} ApexTechInfo agrees a clear scope and written estimate before work begins.`,
      `/services/${loaderData.service.slug}`,
    );
  },
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { service } = Route.useLoaderData();
  const serviceFaqs = faqs.filter((faq) =>
    [
      "How much does a website or digital project cost?",
      "How long does a project take?",
      "Who owns the code and content?",
      "How will we communicate during the project?",
    ].includes(faq.question),
  );
  return (
    <>
      <section className="grid-lines border-b border-border">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-20">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            <ArrowLeft className="size-4" /> All services
          </Link>
          <p className="eyebrow mt-10">{service.group}</p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl font-semibold leading-tight sm:text-7xl">
            {service.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-muted-foreground">
            {service.subheadline}
          </p>
          <p className="mt-5 max-w-2xl leading-7">{service.introduction}</p>
          <Button asChild size="lg" className="mt-8">
            <Link to="/contact" search={{ package: service.title }}>
              Discuss your project <ArrowUpRight />
            </Link>
          </Button>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_1fr] lg:py-24">
        <div>
          <p className="eyebrow">What&apos;s included</p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            A useful scope, agreed up front.
          </h2>
          <ul className="mt-6 grid gap-4">
            {service.included.map((item) => (
              <li key={item} className="flex gap-3 leading-7">
                <Check className="mt-1 size-4 shrink-0 text-primary" /> {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg border border-border bg-secondary/60 p-7 sm:p-9">
          <p className="eyebrow">A good fit for</p>
          <p className="mt-4 leading-7 text-muted-foreground">{service.idealFor}</p>
          <h2 className="mt-8 font-display text-2xl font-semibold">Typical deliverables</h2>
          <ul className="mt-4 grid gap-3">
            {service.deliverables.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-6">
                <Check className="mt-1 size-4 shrink-0 text-teal" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="border-y border-border bg-secondary/50">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
          <h2 className="mb-8 font-display text-3xl font-semibold">
            Questions about working together?
          </h2>
          <FaqList questions={serviceFaqs} />
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <h2 className="font-display text-3xl font-semibold">More services</h2>
        <div className="mt-5 flex flex-wrap gap-3">
          {services
            .filter((item) => item.slug !== service.slug)
            .slice(0, 4)
            .map((item) => (
              <Link
                key={item.slug}
                to="/services/$slug"
                params={{ slug: item.slug }}
                className="rounded-full border border-border px-4 py-2 text-sm font-medium hover:border-primary"
              >
                {item.title}
              </Link>
            ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
