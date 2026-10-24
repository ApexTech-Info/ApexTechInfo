import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site-shell";
import { FaqList } from "@/components/faq-list";
import {
  audiences,
  benefits,
  faqs,
  projectSteps,
  reasonsToChooseUs,
  serviceGroups,
} from "@/lib/agency";
import { pageMeta } from "@/lib/site-config";
import architecture from "@/assets/portfolio-architecture.jpg";
import bakery from "@/assets/portfolio-bakery.jpg";
import skincare from "@/assets/portfolio-skincare.jpg";

export const Route = createFileRoute("/")({
  head: () =>
    pageMeta(
      "Website, App & Software Development",
      "We design and build websites, mobile apps and custom software for growing businesses, plus SEO and marketing to bring in customers. Get a free quote.",
      "/",
    ),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <section className="grid-lines border-b border-border">
        <div className="mx-auto max-w-7xl px-5 pb-12 pt-14 sm:px-8 lg:pb-16 lg:pt-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
            <div>
              <p className="eyebrow animate-fade-in">Your digital team, from idea to impact</p>
              <h1 className="mt-6 max-w-3xl font-display text-5xl font-medium leading-[0.96] sm:text-7xl lg:text-8xl">
                Build digital.
                <br />
                <span className="text-primary">Grow smarter.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                Websites, mobile apps and custom software that help your business win more
                customers, designed, built and supported by one dedicated team.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild variant="dark" size="lg">
                  <Link to="/contact">
                    Get a Free Quote <ArrowUpRight />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/services">
                    See What We Build <ArrowRight />
                  </Link>
                </Button>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Free consultation · Reply within 1 business day · No obligation
              </p>
            </div>
            <div
              className="grid grid-cols-2 gap-3 sm:gap-4"
              aria-label="Digital work across industries"
            >
              <img
                src={architecture}
                alt="Architectural model on a studio desk"
                width={1408}
                height={1056}
                className="col-span-2 aspect-[1.8/1] w-full object-cover"
              />
              <img
                src={bakery}
                alt="Artisan bread and bakery products"
                width={1408}
                height={1056}
                className="aspect-square w-full object-cover"
              />
              <img
                src={skincare}
                alt="Skincare products arranged among green leaves"
                width={1408}
                height={1056}
                className="aspect-square w-full object-cover"
              />
            </div>
          </div>
          <ul className="mt-12 grid gap-4 border-t border-border pt-7 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3 text-sm font-medium">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-border bg-ink text-ink-foreground">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="eyebrow text-ink-muted">A straightforward place to start</p>
          <p className="font-display text-xl sm:text-2xl">
            Every project starts with a free consultation.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="max-w-3xl">
          <p className="eyebrow">What we do</p>
          <h2 className="mt-4 font-display text-4xl font-medium leading-tight sm:text-6xl">
            Everything you need to launch and grow online
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Choose one service or combine several. Either way, you work with one team that already
            knows your business.
          </p>
        </div>
        <div className="mt-12 grid gap-12 lg:grid-cols-3">
          {serviceGroups.map((group) => (
            <div key={group.title} className="border-t-2 border-primary pt-5">
              <h3 className="font-display text-2xl font-medium">{group.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{group.description}</p>
              <ul className="mt-6 grid gap-3">
                {group.services.map((service) => (
                  <li key={service.slug}>
                    <Link
                      to="/services/$service"
                      params={{ service: service.slug }}
                      className="group flex items-center justify-between gap-4 border-b border-border pb-3 text-sm font-medium hover:text-primary"
                    >
                      <span>{service.title}</span>
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-secondary/45">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <p className="eyebrow">Why choose us</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-medium leading-tight sm:text-6xl">
            What it&apos;s like to work with us
          </h2>
          <div className="mt-12 grid gap-x-10 md:grid-cols-2">
            {reasonsToChooseUs.map(([title, text], index) => (
              <article
                key={title}
                className="grid gap-4 border-t border-border py-6 sm:grid-cols-[3rem_1fr]"
              >
                <span className="text-sm font-medium text-primary">0{index + 1}</span>
                <div>
                  <h3 className="font-display text-xl font-medium sm:text-2xl">{title}</h3>
                  <p className="mt-2 max-w-xl leading-7 text-muted-foreground">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <p className="eyebrow">How a project works</p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-tight sm:text-6xl">
              From first call to first customer
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">Five steps. No surprises.</p>
          </div>
          <ol className="divide-y divide-border border-y border-border">
            {projectSteps.map((step, index) => (
              <li key={step.title} className="grid gap-3 py-5 sm:grid-cols-[3rem_1fr]">
                <span className="text-sm font-medium text-primary">0{index + 1}</span>
                <div>
                  <h3 className="font-display text-xl font-medium">{step.title}</h3>
                  <p className="mt-2 leading-7 text-muted-foreground">{step.text}</p>
                  <p className="mt-2 text-sm">
                    <span className="font-semibold">You get:</span> {step.outcome}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-ink text-ink-foreground">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow text-ink-muted">Who we help</p>
            <h2 className="mt-4 font-display text-4xl font-medium sm:text-6xl">
              Built for businesses like yours
            </h2>
          </div>
          <div className="mt-12 grid gap-x-10 md:grid-cols-2 lg:grid-cols-3">
            {audiences.map((audience, index) => (
              <article key={audience.title} className="border-t border-ink-line py-6">
                <span className="text-sm text-primary">0{index + 1}</span>
                <h3 className="mt-3 font-display text-xl font-medium">{audience.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink-muted">{audience.text}</p>
                <p className="mt-4 text-xs leading-5 text-ink-muted">
                  {audience.services.join(" · ")}
                </p>
              </article>
            ))}
          </div>
          <Link
            to="/who-we-help"
            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold"
          >
            See who we help <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-28">
        <div>
          <p className="eyebrow">Our work</p>
          <h2 className="mt-4 font-display text-4xl font-medium sm:text-5xl">
            Work we&apos;re proud to share
          </h2>
          <p className="mt-5 leading-7 text-muted-foreground">
            We publish case studies only when project details and results are verified and the
            client has approved sharing them. Approved examples are being prepared.
          </p>
          <Button asChild variant="outline" className="mt-6">
            <Link to="/portfolio">
              Explore our work <ArrowUpRight />
            </Link>
          </Button>
        </div>
        <div className="border-l-2 border-primary pl-6">
          <p className="eyebrow">Client stories</p>
          <p className="mt-4 font-display text-2xl font-medium">
            No invented reviews or client claims.
          </p>
          <p className="mt-3 leading-7 text-muted-foreground">
            Testimonials will be added here after clients approve the wording and attribution.
          </p>
          <Link to="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">
            Talk through your project <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/45">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="mb-10 grid gap-5 sm:grid-cols-[1fr_auto] sm:items-end">
            <div>
              <p className="eyebrow">FAQs</p>
              <h2 className="mt-4 font-display text-4xl font-medium sm:text-5xl">
                Good questions, clear answers.
              </h2>
            </div>
            <Link to="/faq" className="inline-flex items-center gap-2 text-sm font-semibold">
              All FAQs <ArrowRight className="size-4" />
            </Link>
          </div>
          <FaqList items={faqs.slice(0, 8)} />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
