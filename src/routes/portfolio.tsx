import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { CtaBand, PageIntro } from "@/components/site-shell";
import { pageMeta } from "@/lib/agency";

const categories = [
  "All",
  "Websites",
  "Mobile Apps",
  "Software",
  "E-Commerce",
  "Marketing & SEO",
] as const;

export const Route = createFileRoute("/portfolio")({
  head: () =>
    pageMeta(
      "Our Work",
      "Explore ApexTechInfo project case studies. Approved work and customer outcomes will be published here as they become available.",
      "/portfolio",
    ),
  component: PortfolioPage,
});

function PortfolioPage() {
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  return (
    <>
      <PageIntro
        eyebrow="Our work"
        title="Useful work, honestly presented."
        text="A case study should show the challenge, the decisions and what changed. We publish project details only when the work and outcomes are approved for sharing."
      />
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:pb-28">
        <div className="flex flex-wrap gap-2" aria-label="Filter case studies">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={category === item}
              onClick={() => setCategory(item)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${category === item ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background hover:border-primary hover:text-primary"}`}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="mt-10 rounded-lg border border-dashed border-border bg-secondary/50 p-8 sm:p-12">
          <p className="eyebrow">{category === "All" ? "Case studies" : category}</p>
          <h2 className="mt-3 font-display text-3xl font-semibold">
            No approved case studies published yet.
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
            Project examples, client names, technologies and measurable results will appear here
            once verified and approved. We won&apos;t present sample projects or unconfirmed
            outcomes as customer work.
          </p>
          <Link
            to="/contact"
            search={{ package: "" }}
            className="mt-6 inline-flex items-center gap-2 font-semibold text-primary"
          >
            Discuss your project <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
