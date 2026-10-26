import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageIntro } from "@/components/site-shell";
import { FaqList } from "@/components/faq-list";
import { pageMeta } from "@/lib/agency";

export const Route = createFileRoute("/faq")({
  head: () =>
    pageMeta(
      "Frequently Asked Questions",
      "Answers about project cost, timelines, ownership, SEO, hosting, support and communication.",
      "/faq",
    ),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <PageIntro
        eyebrow="FAQs"
        title="Clear answers for your next digital project."
        text="If you don’t see your question here, share it with us in an enquiry and we’ll be glad to discuss it."
      />
      <section className="mx-auto max-w-5xl px-5 pb-20 sm:px-8 lg:pb-28">
        <FaqList />
      </section>
      <CtaBand />
    </>
  );
}
