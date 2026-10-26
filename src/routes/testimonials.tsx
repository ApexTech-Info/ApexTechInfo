import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand, PageIntro } from "@/components/site-shell";
import { pageMeta } from "@/lib/agency";

export const Route = createFileRoute("/testimonials")({
  head: () =>
    pageMeta(
      "Client Feedback",
      "ApexTechInfo shares client feedback only when it has been verified and approved for publication.",
      "/testimonials",
    ),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Client feedback"
        title="Trust is built through the work."
        text="We don’t publish invented reviews, ratings or client names. When verified customer feedback is approved for sharing, it will be presented here with the customer’s permission."
      />
      <section className="border-y border-border bg-secondary/50">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
          <div className="rounded-lg border border-dashed border-border bg-background p-8 sm:p-12">
            <h2 className="font-display text-3xl font-semibold">No public testimonials yet.</h2>
            <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
              This page will be updated when ApexTechInfo has customer statements cleared for
              publication. In the meantime, project scope, deliverables and communication
              expectations are set out in writing before work begins.
            </p>
            <Button asChild className="mt-6">
              <Link to="/contact" search={{ package: "" }}>
                Talk through your project <ArrowUpRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
