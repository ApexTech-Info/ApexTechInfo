import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/site-shell";
import { pageMeta, siteConfig } from "@/lib/site-config";

export const Route = createFileRoute("/terms")({
  head: () =>
    pageMeta(
      "Terms of Use",
      "General terms for browsing this website and requesting information about services.",
      "/terms",
    ),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Terms"
        title="Using this website"
        text={`These notes explain the general purpose of this site. A signed project proposal or agreement governs any work ${siteConfig.name} undertakes.`}
      />
      <article className="mx-auto max-w-3xl space-y-10 px-5 pb-20 sm:px-8 lg:pb-28">
        <section>
          <h2 className="font-display text-2xl font-medium">Website information</h2>
          <p className="mt-3 leading-7 text-muted-foreground">
            The website describes {siteConfig.name}&apos;s services for general information. Project
            scope, deliverables, timelines, fees, payment milestones, ownership and support are
            agreed in writing for each project before work begins.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl font-medium">Enquiries</h2>
          <p className="mt-3 leading-7 text-muted-foreground">
            Submitting an enquiry is a request for a conversation, not an obligation to buy services
            and not acceptance of a project proposal.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl font-medium">Third-party services</h2>
          <p className="mt-3 leading-7 text-muted-foreground">
            Links to external sites and services are provided for convenience. Those services have
            their own terms, availability and privacy practices.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl font-medium">Review before launch</h2>
          <p className="mt-3 leading-7 text-muted-foreground">
            The owner should confirm the legal operating entity, jurisdiction and any additional
            terms needed for the business before treating this page as final legal advice.
          </p>
        </section>
      </article>
    </>
  );
}
