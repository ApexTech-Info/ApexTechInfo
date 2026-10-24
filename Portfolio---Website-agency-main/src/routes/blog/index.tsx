import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { CtaBand, PageIntro } from "@/components/site-shell";
import { articles, blogCategories } from "@/lib/blog-content";
import { pageMeta, siteConfig } from "@/lib/site-config";

export const Route = createFileRoute("/blog/")({
  head: () =>
    pageMeta(
      "Blog | Business Tech & Marketing Guides",
      "Plain-English guides on website costs, app development, SEO and automation, written for business owners, not developers.",
      "/blog",
    ),
  component: BlogPage,
});

function BlogPage() {
  const [category, setCategory] = useState("All");
  const filteredArticles =
    category === "All" ? articles : articles.filter((article) => article.category === category);
  const filters = ["All", ...blogCategories];

  return (
    <>
      <PageIntro
        eyebrow={`${siteConfig.name} guides`}
        title="Plain-English guides to websites, apps and online growth"
        text="Costs, comparisons and checklists for business owners, not developers."
      />
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:pb-28">
        <div
          className="mb-10 flex flex-wrap gap-2"
          role="group"
          aria-label="Filter articles by category"
        >
          {filters.map((item) => (
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
        {filteredArticles.length > 0 ? (
          <div className="grid gap-x-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((article) => (
              <article key={article.slug} className="border-t border-border py-6">
                <p className="eyebrow">{article.category}</p>
                <h2 className="mt-4 font-display text-2xl font-medium leading-tight">
                  <Link
                    to="/blog/$slug"
                    params={{ slug: article.slug }}
                    className="hover:text-primary"
                  >
                    {article.title}
                  </Link>
                </h2>
                <p className="mt-3 leading-7 text-muted-foreground">{article.excerpt}</p>
                <Link
                  to="/blog/$slug"
                  params={{ slug: article.slug }}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold"
                >
                  Read article <ArrowRight className="size-4" />
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="grid min-h-56 place-items-center border-y border-border py-12 text-center">
            <div>
              <h2 className="font-display text-2xl font-medium">
                More {category.toLowerCase()} guides are in progress.
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                We publish a guide when it is useful and ready, not just to fill a category.
              </p>
            </div>
          </div>
        )}
        <p className="mt-12 border-t border-border pt-6 text-sm text-muted-foreground">
          Newsletter signup is not enabled until it can be connected to a real submission service.
        </p>
      </section>
      <CtaBand />
    </>
  );
}
