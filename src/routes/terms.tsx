import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/site-shell";
import { pageMeta } from "@/lib/agency";

export const Route = createFileRoute("/terms")({
  head: () => {
    const meta = pageMeta(
      "Website Terms",
      "Draft information about using the ApexTechInfo website. Legal owner review is required before publication.",
      "/terms",
    );
    return { ...meta, meta: [...meta.meta, { name: "robots", content: "noindex,follow" }] };
  },
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Website terms"
        title="Information about using this website."
        text="This is an unpublished-policy placeholder and is not legal advice or a final set of terms. The site owner must add and review the applicable legal terms before relying on this page."
      />
      <article className="mx-auto max-w-3xl space-y-8 px-5 pb-24 sm:px-8">
        <section>
          <h2 className="font-display text-2xl font-semibold">Website information</h2>
          <p className="mt-3 leading-7 text-muted-foreground">
            Website content is provided for general information about possible digital services.
            Project scope, deliverables, fees, ownership, support and other commitments are governed
            by a separate written agreement when one is made.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl font-semibold">Terms to confirm before launch</h2>
          <p className="mt-3 leading-7 text-muted-foreground">
            The responsible legal entity, jurisdiction, intellectual property terms, acceptable use,
            liability language and dispute process must be supplied and reviewed by the site owner.
            No unprovided legal terms are represented here as agreed policy.
          </p>
        </section>
      </article>
    </>
  );
}
