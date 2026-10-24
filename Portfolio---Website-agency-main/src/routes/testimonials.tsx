import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CtaBand, PageIntro } from "@/components/site-shell";
import { pageMeta } from "@/lib/site-config";

export const Route = createFileRoute("/testimonials")({
  head: () =>
    pageMeta(
      "Client Stories",
      "Client stories will be shared with permission and verified attribution. Learn how our team approaches projects.",
      "/testimonials",
    ),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Client stories"
        title="Good work deserves an honest story."
        text="We will share client experiences only when the words, names and project details are verified and approved for publication."
      />
      <section className="border-y border-border bg-secondary/45">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8 lg:py-28">
          <p className="eyebrow">No invented reviews</p>
          <h2 className="mt-5 font-display text-3xl font-medium sm:text-4xl">
            Client testimonials are being prepared with permission.
          </h2>
          <p className="mt-5 leading-7 text-muted-foreground">
            There are no approved testimonials available to publish yet. We will not substitute
            made-up quotes, names or ratings.
          </p>
          <Link to="/contact" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold">
            Talk with the team <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
