import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { PageIntro } from "@/components/site-shell";
import { pageMeta } from "@/lib/agency";
import { articles, blogCategories } from "@/lib/blog";

export const Route = createFileRoute("/blog")({
  head: () =>
    pageMeta(
      "Digital Product Insights",
      "Practical guidance on websites, mobile apps, software, SEO, digital marketing, automation and technology.",
      "/blog",
    ),
  component: BlogPage,
});

function BlogPage() {
  const [category, setCategory] = useState<string>("All");
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  if (pathname !== "/blog") return <Outlet />;

  const filteredArticles =
    category === "All" ? articles : articles.filter((article) => article.category === category);

  return (
    <>
      <PageIntro
        eyebrow="ApexTechInfo insights"
        title="Make clearer decisions about digital."
        text="Practical, plain-language guidance for planning websites, apps, software and the systems that help your business grow."
      />
      <section className="border-y border-border bg-secondary/50">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
          <div className="flex flex-wrap gap-2" aria-label="Filter articles by category">
            {["All", ...blogCategories].map((item) => (
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
          {filteredArticles.length > 0 ? (
            <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {filteredArticles.map((article) => (
                <article
                  key={article.slug}
                  className="rounded-lg border border-border bg-background p-6"
                >
                  <p className="eyebrow">{article.category}</p>
                  <h2 className="mt-4 font-display text-2xl font-semibold">{article.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {article.description}
                  </p>
                  <Link
                    to="/blog/$slug"
                    params={{ slug: article.slug }}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                  >
                    Read article <ArrowRight className="size-4" />
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <p className="mt-9 rounded-lg border border-dashed border-border bg-background p-8 text-muted-foreground">
              No articles in this category yet.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
