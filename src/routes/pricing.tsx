import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand, PageIntro } from "@/components/site-shell";
import { pageMeta } from "@/lib/agency";

const proposalDetails = [
  "The goals and outcomes you want to achieve",
  "The agreed deliverables and what is outside scope",
  "Milestones, review points and estimated timing",
  "Project investment and payment schedule",
  "Ownership, access and any ongoing support",
];

export const Route = createFileRoute("/pricing")({
  head: () =>
    pageMeta(
      "Project Planning & Estimates",
      "Learn how ApexTechInfo scopes digital projects and prepares written estimates based on your needs.",
      "/pricing",
    ),
  component: PricingPage,
});

function PricingPage() {
  return (
    <>
      <PageIntro
        eyebrow="Project planning"
        title="Clear scope before the work begins."
        text="Every business and digital product is different. We begin with a conversation, understand the requirements and prepare a written estimate for the agreed scope."
      />
      <section className="border-y border-border bg-secondary/50">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="eyebrow">Your proposal</p>
            <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">
              Know what you&apos;re agreeing to.
            </h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              We don&apos;t publish fixed package prices because the right scope depends on your
              goals, content, integrations and existing systems. You receive a written quote before
              work starts.
            </p>
          </div>
          <ul className="grid content-start gap-4">
            {proposalDetails.map((item) => (
              <li key={item} className="flex gap-3 leading-7">
                <Check className="mt-1 size-4 shrink-0 text-primary" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <h2 className="font-display text-3xl font-semibold">Start with a conversation</h2>
        <p className="mt-3 max-w-2xl leading-7 text-muted-foreground">
          Share what you&apos;re trying to do, who it is for and any timing or technical
          constraints. The first consultation is free and does not oblige you to proceed.
        </p>
        <Button asChild className="mt-6">
          <Link to="/contact" search={{ package: "" }}>
            Get a Free Quote <ArrowUpRight />
          </Link>
        </Button>
      </section>
      <CtaBand />
    </>
  );
}
