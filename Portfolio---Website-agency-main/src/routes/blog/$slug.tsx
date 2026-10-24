import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CtaBand } from "@/components/site-shell";
import { articles } from "@/lib/blog-content";
import { pageMeta } from "@/lib/site-config";

const articlesBySlug = Object.fromEntries(articles.map((article) => [article.slug, article]));

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const article = articlesBySlug[params.slug];
    return pageMeta(
      article?.seoTitle ?? "Article not found",
      article?.excerpt ?? "Plain-English guides for business owners.",
      `/blog/${params.slug}`,
    );
  },
  component: BlogArticlePage,
});

function BlogArticlePage() {
  const { slug } = Route.useParams();
  const article = articlesBySlug[slug];

  if (!article) {
    return (
      <section className="mx-auto max-w-3xl px-5 py-24 text-center sm:px-8">
        <p className="eyebrow">Article not found</p>
        <h1 className="mt-5 font-display text-4xl font-medium">This guide is not available.</h1>
        <Link to="/blog" className="mt-6 inline-flex items-center gap-2 font-semibold">
          Browse the blog <ArrowRight className="size-4" />
        </Link>
      </section>
    );
  }

  return (
    <>
      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-3xl px-5 pt-8 text-sm text-muted-foreground sm:px-8"
      >
        <Link to="/blog" className="hover:text-foreground">
          Blog
        </Link>
        <span aria-hidden="true"> / </span>
        <span className="text-foreground">{article.category}</span>
      </nav>
      <article className="mx-auto max-w-3xl px-5 pb-20 pt-10 sm:px-8 lg:pb-28">
        <p className="eyebrow">{article.category}</p>
        <h1 className="mt-5 font-display text-4xl font-medium leading-tight sm:text-6xl">
          {article.title}
        </h1>
        <p className="mt-6 text-xl leading-8 text-muted-foreground">{article.excerpt}</p>
        <div className="mt-12 space-y-10">
          {article.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-display text-2xl font-medium sm:text-3xl">{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-4 leading-8 text-muted-foreground">
                  {paragraph}
                </p>
              ))}
              {section.points && (
                <ul className="mt-5 grid gap-3">
                  {section.points.map((point) => (
                    <li key={point} className="flex gap-3 leading-7 text-muted-foreground">
                      <span
                        aria-hidden="true"
                        className="mt-3 size-1.5 shrink-0 rounded-full bg-primary"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
        <aside className="mt-14 border-l-2 border-primary pl-6">
          <h2 className="font-display text-2xl font-medium">
            Planning a website, app or software project?
          </h2>
          <p className="mt-3 leading-7 text-muted-foreground">
            Tell us what you need and we&apos;ll send a free, no-obligation estimate.
          </p>
          <Link to="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">
            Get a Free Quote <ArrowRight className="size-4" />
          </Link>
        </aside>
      </article>
      <CtaBand />
    </>
  );
}
