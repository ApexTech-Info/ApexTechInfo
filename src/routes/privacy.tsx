import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/site-shell";
import { pageMeta } from "@/lib/agency";

export const Route = createFileRoute("/privacy")({
  head: () => {
    const meta = pageMeta(
      "Privacy Information",
      "Privacy information for enquiries submitted through the ApexTechInfo website. Owner review is required before publication.",
      "/privacy",
    );
    return { ...meta, meta: [...meta.meta, { name: "robots", content: "noindex,follow" }] };
  },
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <PageIntro
        eyebrow="Privacy information"
        title="Your information and this website."
        text="This page is a draft disclosure, not a substitute for a reviewed privacy policy. The site owner must confirm the details below before using this page as a final policy."
      />
      <article className="mx-auto max-w-3xl space-y-8 px-5 pb-24 sm:px-8">
        <section>
          <h2 className="font-display text-2xl font-semibold">
            Information submitted through the enquiry form
          </h2>
          <p className="mt-3 leading-7 text-muted-foreground">
            The contact form asks for information needed to respond to a project enquiry. When the
            site is deployed with Netlify Forms enabled, the submission is processed by Netlify.
            Before launch, the owner must confirm retention, access, deletion, applicable legal
            requirements and any other services that receive form data.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl font-semibold">Information not to submit</h2>
          <p className="mt-3 leading-7 text-muted-foreground">
            Do not include passwords, payment details or sensitive personal information in the
            enquiry form.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl font-semibold">
            Owner details to confirm before launch
          </h2>
          <p className="mt-3 leading-7 text-muted-foreground">
            Add the legal entity responsible for this website, contact details for privacy
            questions, retention period, access and deletion process, and details of any analytics,
            cookies or other data processing actually in use.
          </p>
        </section>
      </article>
    </>
  );
}
