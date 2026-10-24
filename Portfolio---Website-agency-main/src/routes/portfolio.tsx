import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { CtaBand, PageIntro } from "@/components/site-shell";
import { pageMeta } from "@/lib/site-config";
import { caseStudies, portfolioCategories } from "@/lib/portfolio-content";

const categories = ["All", ...portfolioCategories];

export const Route = createFileRoute("/portfolio")({
  head: () =>
    pageMeta(
      "Our Work | Websites, Apps & Software",
      "See verified websites, apps and software projects. Case studies are published with client approval.",
      "/portfolio",
    ),
  component: PortfolioPage,
});

function PortfolioPage() {
  const [category, setCategory] = useState("All");
  const visibleCaseStudies = caseStudies.filter(
    (caseStudy) => caseStudy.approved && (category === "All" || caseStudy.category === category),
  );
  return (
    <>
      <PageIntro
        eyebrow="Our work"
        title="Work that speaks for itself"
        text="A selection of projects, with the problem, the solution and the results. We publish client details only when they are verified and approved for sharing."
      />
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:pb-28">
        <div
          className="flex flex-wrap gap-2 border-b border-border pb-5"
          role="group"
          aria-label="Filter case studies by category"
        >
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={category === item}
              onClick={() => setCategory(item)}
              className={`border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${category === item ? "border-primary bg-primary text-primary-foreground" : "border-border hover:bg-secondary"}`}
            >
              {item}
            </button>
          ))}
        </div>
        {visibleCaseStudies.length > 0 ? (
          <div className="grid gap-12 pt-10">
            {visibleCaseStudies.map((caseStudy) => (
              <article key={caseStudy.slug} className="border-t border-border pt-8">
                {caseStudy.image && (
                  <img
                    src={caseStudy.image.src}
                    alt={caseStudy.image.alt}
                    loading="lazy"
                    className="mb-8 aspect-[16/8] w-full object-cover"
                  />
                )}
                <p className="eyebrow">
                  {caseStudy.category} · {caseStudy.industry}
                </p>
                <h2 className="mt-3 font-display text-3xl font-medium">{caseStudy.clientName}</h2>
                <div className="mt-8 grid gap-8 md:grid-cols-2">
                  <CaseStudySection title="The challenge" text={caseStudy.challenge} />
                  <CaseStudySection title="What we did" text={caseStudy.solution} />
                  <CaseStudySection title="The result" text={caseStudy.result} />
                  <div>
                    <h3 className="eyebrow">Built with</h3>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {caseStudy.technologies.map((technology) => (
                        <li key={technology} className="border border-border px-3 py-1.5 text-sm">
                          {technology}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {caseStudy.quote && (
                  <blockquote className="mt-8 border-l-2 border-primary pl-5">
                    <p className="font-display text-xl">“{caseStudy.quote.text}”</p>
                    <footer className="mt-3 text-sm text-muted-foreground">
                      {caseStudy.quote.attribution}
                    </footer>
                  </blockquote>
                )}
                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold"
                >
                  Want results like this? Get a Free Quote <ArrowRight className="size-4" />
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="grid min-h-64 place-items-center py-16 text-center">
            <div className="max-w-xl">
              <p className="eyebrow">{category === "All" ? "Case studies" : category}</p>
              <h2 className="mt-4 font-display text-3xl font-medium">
                Approved case studies are being prepared.
              </h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                There are no verified projects published in this category yet. We will not present
                sample client names, quotes or results as real work.
              </p>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold"
              >
                Tell us about your project <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        )}
      </section>
      <CtaBand />
    </>
  );
}

function CaseStudySection({ title, text }: { title: string; text: string }) {
  return (
    <section>
      <h3 className="eyebrow">{title}</h3>
      <p className="mt-3 leading-7 text-muted-foreground">{text}</p>
    </section>
  );
}
