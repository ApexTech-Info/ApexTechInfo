import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/site-shell";
import { pageMeta, siteConfig } from "@/lib/site-config";

export const Route = createFileRoute("/privacy")({
  head: () =>
    pageMeta(
      "Privacy Policy",
      "How this website handles information submitted through the project enquiry form.",
      "/privacy",
    ),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <PageIntro
        eyebrow="Privacy"
        title="How project enquiries are handled"
        text={`This page describes the information handled by the current ${siteConfig.name} website. Confirm the operating entity, jurisdiction and retention practices before launch.`}
      />
      <article className="mx-auto max-w-3xl space-y-10 px-5 pb-20 sm:px-8 lg:pb-28">
        <section>
          <h2 className="font-display text-2xl font-medium">Information you submit</h2>
          <p className="mt-3 leading-7 text-muted-foreground">
            The project enquiry form asks for your name, company if relevant, email address, phone
            number, requested services, estimated budget, preferred start time and project
            description. Please do not include passwords, payment details or other sensitive
            personal information.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl font-medium">How it is used</h2>
          <p className="mt-3 leading-7 text-muted-foreground">
            The information is used to review and respond to your project enquiry. When the email
            service is configured, the form forwards the details to {siteConfig.name} through
            Resend. The current application does not save submissions to its own database. The
            hosting platform and email service may process request and message data under their own
            terms and privacy information.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl font-medium">Choices and contact</h2>
          <p className="mt-3 leading-7 text-muted-foreground">
            You can choose not to submit the form. To ask about information you have sent, contact
            {siteConfig.name} using the verified contact address configured by the site owner
            {siteConfig.email ? (
              <>
                :{" "}
                <a className="font-medium underline" href={`mailto:${siteConfig.email}`}>
                  {siteConfig.email}
                </a>
              </>
            ) : (
              ". The contact email has not yet been supplied."
            )}
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl font-medium">Before publication</h2>
          <p className="mt-3 leading-7 text-muted-foreground">
            The site owner should review this notice with the correct company identity, operating
            location, retention period and any additional analytics or service providers before
            relying on it as a final legal policy.
          </p>
        </section>
      </article>
    </>
  );
}
