import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { pageMeta } from "@/lib/agency";
import { articles } from "@/lib/blog";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const article = articles.find((item) => item.slug === params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Article not found" }] };
    return pageMeta(
      loaderData.article.title,
      loaderData.article.description,
      `/blog/${loaderData.article.slug}`,
    );
  },
  component: ArticlePage,
});

function ArticlePage() {
  const { article } = Route.useLoaderData();
  return (
    <article>
      <header className="border-b border-border bg-secondary/50">
        <div className="mx-auto max-w-4xl px-5 py-14 sm:px-8 lg:py-20">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            <ArrowLeft className="size-4" /> All articles
          </Link>
          <p className="eyebrow mt-10">{article.category}</p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-6xl">
            {article.title}
          </h1>
          <p className="mt-6 text-xl leading-8 text-muted-foreground">{article.intro}</p>
        </div>
      </header>
      <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8 lg:py-20">
        {article.sections.map((section) => (
          <section key={section.heading} className="mb-10">
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-lg leading-8 text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </section>
        ))}
        <aside className="mt-14 rounded-lg bg-ink p-7 text-ink-foreground sm:p-10">
          <p className="eyebrow text-blue-300">Want to discuss your next step?</p>
          <h2 className="mt-3 font-display text-3xl font-semibold">
            Let&apos;s make a clear plan.
          </h2>
          <Button asChild className="mt-6">
            <Link to="/contact" search={{ package: "" }}>
              Get a Free Quote <ArrowUpRight />
            </Link>
          </Button>
        </aside>
      </div>
    </article>
  );
}
