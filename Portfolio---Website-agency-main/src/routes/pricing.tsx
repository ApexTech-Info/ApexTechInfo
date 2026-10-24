import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand, PageIntro } from "@/components/site-shell";
import { pageMeta } from "@/lib/site-config";

const estimateIncludes = [
  "A written scope and list of deliverables",
  "A timeline with review milestones",
  "A clear project estimate",
  "Any assumptions, exclusions and third-party costs",
  "Ownership and support terms",
];

export const Route = createFileRoute("/pricing")({
  head: () =>
    pageMeta(
      "Plan a Digital Project",
      "Get a written project scope, timeline and estimate for your website, app or software project.",
      "/pricing",
    ),
  component: ProjectPlanningPage,
});

function ProjectPlanningPage() {
  return (
    <>
      <PageIntro
        eyebrow="Project planning"
        title="Clear scope. A written estimate."
        text="Every project is different. Tell us what you need and we will prepare a scope, timeline and cost breakdown before work begins. No fixed packages or surprise pricing."
      />
      <section className="border-y border-border bg-secondary/45">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:py-24">
          <div>
            <p className="eyebrow">Before work starts</p>
            <h2 className="mt-4 font-display text-3xl font-medium sm:text-4xl">
              Know what you are agreeing to.
            </h2>
            <p className="mt-5 leading-7 text-muted-foreground">
              A useful estimate starts with your goals, content, integrations and constraints. We
              will ask questions before recommending a scope.
            </p>
            <Button asChild variant="dark" className="mt-7">
              <Link to="/contact">
                Get a Free Quote <ArrowUpRight />
              </Link>
            </Button>
          </div>
          <ul className="grid gap-5 border-y border-border py-6">
            {estimateIncludes.map((item) => (
              <li key={item} className="flex gap-3">
                <Check className="mt-1 size-4 shrink-0 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
