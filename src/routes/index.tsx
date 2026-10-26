import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Compass,
  Handshake,
  Layers3,
  LifeBuoy,
  MessageSquareText,
  Rocket,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site-shell";
import { FaqList } from "@/components/faq-list";
import { pageMeta } from "@/lib/agency";
import { brand } from "@/lib/brand";
import { faqs } from "@/lib/faqs";
import { serviceGroups } from "@/lib/services";

const benefits = [
  "Written quote before work begins",
  "Weekly progress updates",
  "You own paid-for code and content",
  "Support available after launch",
];

const reasons = [
  ["Understand first", "We learn how your business works before recommending technology.", Compass],
  ["One team", "Design, development and delivery are coordinated from start to finish.", Handshake],
  [
    "Clear plan",
    "Written quotes, agreed milestones and practical progress updates.",
    MessageSquareText,
  ],
  ["Built to grow", "A thoughtful foundation makes future improvements easier to plan.", Layers3],
  [
    "Clear ownership",
    "Your proposal defines access and ownership for paid-for deliverables.",
    ShieldCheck,
  ],
  [
    "After launch",
    "Support options are discussed as part of your project, not left a mystery.",
    LifeBuoy,
  ],
] as const;

const process = [
  ["Discover", "Talk through your customers, goals and current challenges."],
  ["Plan & design", "Agree priorities, scope, user journeys and a written estimate."],
  ["Build", "Create the experience in clear, reviewable milestones."],
  ["Test & launch", "Check the agreed journeys, prepare the release and hand over."],
  ["Support & grow", "Plan ongoing care and improvements around real needs."],
] as const;

const audiences = [
  [
    "Startups",
    "Shape a useful first product and a clear path to launch.",
    "custom-software-development",
  ],
  [
    "Small and local businesses",
    "Make it easier for customers to understand your service and get in touch.",
    "website-development",
  ],
  [
    "Retail and D2C brands",
    "Create a straightforward storefront and shopping journey.",
    "ecommerce-development",
  ],
  [
    "Clinics and service businesses",
    "Help people find information, understand services and request an appointment.",
    "website-development",
  ],
  [
    "Schools and coaching institutes",
    "Organise course information, enquiries and digital learning journeys.",
    "website-development",
  ],
  [
    "Growing companies",
    "Connect systems, improve workflows and support new digital services.",
    "business-automation",
  ],
] as const;

export const Route = createFileRoute("/")({
  head: () =>
    pageMeta(
      "Build digital. Grow smarter",
      "Websites, mobile apps and custom software, designed, built and supported by one dedicated team.",
      "/",
    ),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <section className="grid-lines relative overflow-hidden border-b border-border">
        <div className="mx-auto max-w-7xl px-5 pb-16 pt-16 sm:px-8 lg:pb-24 lg:pt-24">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
            <div>
              <p className="eyebrow">
                {brand.name} · {brand.tagline}
              </p>
              <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[0.98] tracking-tight sm:text-7xl lg:text-8xl">
                Build digital.
                <br />
                <span className="text-primary">Grow smarter.</span>
              </h1>
            </div>
            <div className="pb-2 lg:pb-3">
              <p className="text-lg leading-8 text-muted-foreground">
                Websites, mobile apps and custom software—designed, built and supported by one
                dedicated team.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link to="/contact" search={{ package: "" }}>
                    Get a Free Quote <ArrowUpRight />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="#services">
                    See What We Build <ArrowDownRight />
                  </a>
                </Button>
              </div>
              <p className="mt-5 text-sm text-muted-foreground">
                Free consultation · Reply within 1 business day · No obligation
              </p>
            </div>
          </div>

          <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-start gap-3 rounded-md border border-border bg-background p-4 text-sm font-medium"
              >
                <Check className="mt-0.5 size-4 shrink-0 text-teal" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-label="How we work" className="border-b border-border bg-secondary/60">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-7 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
          {[
            "No unverified project counts",
            "No invented client list",
            "No unsupported ratings",
            "A written scope before work",
          ].map((item) => (
            <p key={item} className="flex items-center gap-3 text-sm font-medium text-foreground">
              <Check className="size-4 shrink-0 text-primary" />
              {item}
            </p>
          ))}
        </div>
      </section>

      <section id="services" className="scroll-mt-24 border-b border-border">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <p className="eyebrow">Services</p>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-5">
            <h2 className="max-w-3xl font-display text-4xl font-semibold sm:text-6xl">
              The digital work your business needs.
            </h2>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 font-semibold text-primary"
            >
              All services <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-10 lg:grid-cols-3">
            {serviceGroups.map((group) => (
              <div key={group.name} className="border-t-2 border-primary pt-5">
                <h3 className="font-display text-2xl font-semibold">{group.name}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{group.description}</p>
                <ul className="mt-5 grid gap-3">
                  {group.services.map((service) => (
                    <li key={service.slug}>
                      <Link
                        to="/services/$slug"
                        params={{ slug: service.slug }}
                        className="group flex items-start justify-between gap-3 rounded-md border border-border p-4 transition-colors hover:border-primary/50 hover:bg-secondary"
                      >
                        <span>
                          <span className="block font-semibold">{service.title}</span>
                          <span className="mt-1 block text-sm leading-6 text-muted-foreground">
                            {service.summary}
                          </span>
                        </span>
                        <ArrowUpRight className="mt-1 size-4 shrink-0 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-ink-foreground">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <p className="eyebrow text-blue-300">Why ApexTechInfo</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold sm:text-6xl">
            Practical thinking. Clear delivery.
          </h2>
          <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map(([title, text, Icon]) => (
              <article key={title} className="border-t border-ink-line pt-5">
                <Icon className="size-6 text-teal" aria-hidden="true" />
                <h3 className="mt-4 font-display text-xl font-semibold">{title}</h3>
                <p className="mt-2 leading-7 text-ink-muted">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <p className="eyebrow">How we work together</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold sm:text-6xl">
            A clear path from idea to launch.
          </h2>
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {process.map(([title, text], index) => (
              <li key={title} className="border-t border-border pt-5">
                <span className="text-sm font-semibold text-primary">0{index + 1}</span>
                <h3 className="mt-4 font-display text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-secondary/60">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <p className="eyebrow">Who we help</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold sm:text-6xl">
            Good digital work starts with your people.
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map(([title, text, slug]) => (
              <article key={title} className="rounded-lg border border-border bg-background p-6">
                <h3 className="font-display text-xl font-semibold">{title}</h3>
                <p className="mt-2 leading-7 text-muted-foreground">{text}</p>
                <Link
                  to="/services/$slug"
                  params={{ slug }}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                >
                  Explore a relevant service <ArrowRight className="size-4" />
                </Link>
              </article>
            ))}
          </div>
          <Link
            to="/who-we-help"
            className="mt-8 inline-flex items-center gap-2 font-semibold text-primary"
          >
            More about who we help <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Work & feedback</p>
            <h2 className="mt-4 font-display text-4xl font-semibold sm:text-6xl">
              Honest work speaks for itself.
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-muted-foreground">
              We don&apos;t publish sample clients, unverified outcomes or invented reviews.
              Approved case studies and customer feedback will be added here when available.
            </p>
            <Link
              to="/portfolio"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-primary"
            >
              About our work <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="rounded-lg border border-dashed border-border bg-secondary/50 p-8">
            <Code2 className="size-8 text-primary" aria-hidden="true" />
            <p className="mt-5 font-semibold">No case studies published yet</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              This space is reserved for approved project details, technologies and client quotes.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/50">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
          <p className="eyebrow">FAQs</p>
          <h2 className="mb-9 mt-4 font-display text-4xl font-semibold sm:text-5xl">
            Useful answers before we begin.
          </h2>
          <FaqList questions={faqs} />
          <Link
            to="/faq"
            className="mt-6 inline-flex items-center gap-2 font-semibold text-primary"
          >
            More frequently asked questions <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
