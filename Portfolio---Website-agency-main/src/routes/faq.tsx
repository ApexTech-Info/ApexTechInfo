import { createFileRoute } from "@tanstack/react-router";
import { FaqList } from "@/components/faq-list";
import { CtaBand, PageIntro } from "@/components/site-shell";
import { pageMeta } from "@/lib/site-config";

export const Route = createFileRoute("/faq")({
  head: () =>
    pageMeta(
      "Frequently Asked Questions",
      "Clear answers about project costs, timelines, ownership, SEO, hosting and support.",
      "/faq",
    ),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <PageIntro
        eyebrow="FAQs"
        title="A few things you may be wondering"
        text="Straight answers about planning, building and looking after a digital product."
      />
      <section className="mx-auto max-w-5xl px-5 pb-20 sm:px-8 lg:pb-28">
        <FaqList />
      </section>
      <CtaBand />
    </>
  );
}
