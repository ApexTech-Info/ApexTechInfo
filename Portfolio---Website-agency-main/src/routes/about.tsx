import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand, PageIntro } from "@/components/site-shell";
import { pageMeta, siteConfig } from "@/lib/site-config";

const values = [
  [
    "Plain language, always.",
    "If we cannot explain it simply, we have not understood it well enough.",
  ],
  [
    "Results over output.",
    "A finished project is not the goal. More enquiries, more sales or hours saved is.",
  ],
  [
    "Honest advice.",
    "If you do not need an app yet, we will say so, even if that means a smaller project.",
  ],
  [
    "Craft and care.",
    "We work toward fast, accessible and secure products without shortcuts that cost you later.",
  ],
];

export const Route = createFileRoute("/about")({
  head: () =>
    pageMeta(
      "About Us",
      "A technology and digital solutions company building websites, apps and software for growing businesses.",
      "/about",
    ),
  component: AboutPage,
});

function AboutPage() {
  const location = [siteConfig.city, siteConfig.state].filter(Boolean).join(", ");
  return (
    <>
      <PageIntro
        eyebrow={`About ${siteConfig.name}`}
        title="We build the digital side of your business, so you can focus on running it."
        text={`${siteConfig.name} is a technology and digital solutions company${location ? ` based in ${location}` : ""}. We help startups and growing businesses launch websites, mobile apps and software, then grow them with SEO and marketing.`}
      />
      <section className="bg-ink text-ink-foreground">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-28">
          <div>
            <p className="eyebrow text-ink-muted">Our story</p>
            <h2 className="mt-5 font-display text-4xl font-medium leading-tight sm:text-6xl">
              A digital partner for what comes next.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-ink-muted">
            <p>
              {siteConfig.foundingYear
                ? `${siteConfig.name} was founded in ${siteConfig.foundingYear}. The team is preparing a verified account of how the company began.`
                : `Our founding story and year will be added after the ${siteConfig.name} team confirms the details. We will not publish an invented company history.`}
            </p>
            <p>
              Our approach is simple: understand your business, build the right solution, launch it,
              improve it and help it grow.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <p className="eyebrow">What we believe</p>
        <div className="mt-8 grid gap-x-10 md:grid-cols-2">
          {values.map(([title, description], index) => (
            <article
              key={title}
              className="grid gap-4 border-t border-border py-6 sm:grid-cols-[3rem_1fr]"
            >
              <span className="text-sm text-primary">0{index + 1}</span>
              <div>
                <h2 className="font-display text-2xl font-medium">{title}</h2>
                <p className="mt-3 max-w-xl leading-7 text-muted-foreground">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="border-y border-border bg-secondary/45">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="eyebrow">The team</p>
              <h2 className="mt-4 font-display text-3xl font-medium sm:text-4xl">
                Meet the people behind the work
              </h2>
            </div>
            {siteConfig.team.length === 0 && (
              <p className="max-w-xl leading-7 text-muted-foreground">
                Team names, roles and biographies will be published here once confirmed by{" "}
                {siteConfig.name}. No staff profiles are invented.
              </p>
            )}
          </div>
          {siteConfig.team.length > 0 ? (
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {siteConfig.team.map((member) => (
                <article key={member.name} className="border-t border-border pt-5">
                  {member.photo && (
                    <img
                      src={member.photo}
                      alt={`${member.name}`}
                      loading="lazy"
                      className="mb-5 aspect-[4/3] w-full object-cover"
                    />
                  )}
                  <h3 className="font-display text-xl font-medium">{member.name}</h3>
                  <p className="mt-1 text-sm text-primary">{member.role}</p>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{member.bio}</p>
                </article>
              ))}
            </div>
          ) : (
            <p className="mt-7 flex items-center gap-2 border-t border-border pt-6 text-sm text-muted-foreground">
              <Check className="size-4 text-primary" />
              Real people, real details
            </p>
          )}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-5 border-t border-border pt-8">
          <h2 className="font-display text-3xl font-medium">
            Let&apos;s talk about what you&apos;re building.
          </h2>
          <Button asChild variant="dark">
            <Link to="/contact">
              Start a Conversation <ArrowUpRight />
            </Link>
          </Button>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
