import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageIntro } from "@/components/site-shell";
import { pageMeta } from "@/lib/agency";

const values = [
  [
    "Understand before building",
    "Start with the business, the people using the product and the problem to solve.",
  ],
  ["Make the plan clear", "Agree scope, milestones, responsibilities and ownership in writing."],
  [
    "Build with care",
    "Make considered choices that support accessibility, maintainability and real workflows.",
  ],
  [
    "Stay accountable",
    "Share progress, surface decisions early and agree what support looks like after launch.",
  ],
];

export const Route = createFileRoute("/about")({
  head: () =>
    pageMeta(
      "About | Digital products, built thoughtfully",
      "Learn how ApexTechInfo approaches websites, apps and software: understand the need, agree a clear plan and build with care.",
      "/about",
    ),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About ApexTechInfo"
        title="We build. You grow."
        text="ApexTechInfo is a technology and digital solutions company focused on useful websites, mobile apps and custom software—designed, built and supported by one dedicated team."
      />
      <section className="bg-ink text-ink-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-24">
          <h2 className="font-display text-4xl font-semibold leading-tight sm:text-6xl">
            Technology should make the next step clearer.
          </h2>
          <div className="space-y-5 text-lg leading-8 text-ink-muted">
            <p>
              Every project begins with the business need—not a predetermined tool or technology.
              Together, we clarify what people need to do and what a useful outcome looks like.
            </p>
            <p>
              Then we agree a written scope, milestones and deliverables before work begins. The
              specific project history, founding details and location can be added here when
              confirmed by the company.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <p className="eyebrow">What guides our work</p>
        <div className="mt-9 grid gap-8 sm:grid-cols-2">
          {values.map(([title, text], index) => (
            <article key={title} className="border-t border-border pt-5">
              <span className="text-sm font-semibold text-primary">0{index + 1}</span>
              <h2 className="mt-4 font-display text-2xl font-semibold">{title}</h2>
              <p className="mt-3 max-w-xl leading-7 text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="border-y border-border bg-secondary/50">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="eyebrow">The team</p>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
              The right people for the agreed work.
            </h2>
          </div>
          <p className="leading-7 text-muted-foreground">
            Project roles and points of contact are confirmed during discovery and included in the
            proposal. Individual names, biographies and team sizes are not published until verified
            details are provided.
          </p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
