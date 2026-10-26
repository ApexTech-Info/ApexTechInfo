import { createFileRoute } from "@tanstack/react-router";
import { AlertCircle, ArrowUpRight, CheckCircle2, LoaderCircle } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { FaqList } from "@/components/faq-list";
import { brand } from "@/lib/brand";
import { pageMeta } from "@/lib/agency";
import { faqs } from "@/lib/faqs";
import { services } from "@/lib/services";

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>) => ({
    package: typeof search["package"] === "string" ? search["package"] : "",
  }),
  head: () =>
    pageMeta(
      "Get a Free Quote | Contact",
      "Tell ApexTechInfo about your website, app or software project. Get a free consultation and a written estimate before work begins.",
      "/contact",
    ),
  component: ContactPage,
});

function ContactPage() {
  const { package: serviceName } = Route.useSearch();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>(
    services.some((service) => service.title === serviceName) ? [serviceName] : [],
  );

  async function submitEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (selectedServices.length === 0) {
      setStatus("error");
      setMessage("Please choose at least one service so we know how to direct your enquiry.");
      return;
    }
    if (!brand.siteUrl || window.location.origin !== brand.siteUrl) {
      setStatus("error");
      setMessage(
        "Enquiry submission is not configured for this site yet. Please set VITE_SITE_URL to the deployed site origin and enable Netlify Forms before accepting enquiries.",
      );
      return;
    }

    setStatus("sending");
    setMessage("");
    const values = new FormData(form);
    const body = new URLSearchParams();
    values.forEach((value, key) => body.append(key, String(value)));
    body.set("services", selectedServices.join(", "));

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
      if (!response.ok) throw new Error(`Form submission returned ${response.status}.`);
      setStatus("success");
      setMessage("Your enquiry was submitted. Thank you — we’ll be in touch.");
      form.reset();
      setSelectedServices([]);
    } catch (error) {
      console.error("Unable to submit ApexTechInfo enquiry", error);
      setStatus("error");
      setMessage(
        "We couldn’t submit your enquiry. Please try again later. Your message has not been sent.",
      );
    }
  }

  return (
    <section className="grid-lines">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:py-24">
        <div>
          <p className="eyebrow">Start a conversation</p>
          <h1 className="mt-5 font-display text-5xl font-semibold leading-[.98] sm:text-7xl">
            Tell us what you&apos;re working on.
          </h1>
          <p className="mt-7 max-w-lg text-lg leading-8 text-muted-foreground">
            Share the challenge, who it is for and what you want to make possible. We&apos;ll review
            the details and reply within one business day.
          </p>
          <p className="mt-5 text-sm text-muted-foreground">
            Free consultation · No obligation · Written quote before work begins
          </p>
          <div className="mt-10 border-t border-border pt-6">
            <h2 className="font-semibold">What happens next?</h2>
            <ol className="mt-4 grid gap-3 text-sm leading-6 text-muted-foreground">
              <li>1. We review your project details.</li>
              <li>2. We arrange a conversation to understand the goals and constraints.</li>
              <li>3. If we’re a fit, we prepare a written scope and estimate.</li>
            </ol>
            {(brand.email || brand.phone || brand.businessHours) && (
              <div className="mt-6 grid gap-2 text-sm">
                {brand.email && <a href={`mailto:${brand.email}`}>{brand.email}</a>}
                {brand.phone && <a href={`tel:${brand.phone}`}>{brand.phone}</a>}
                {brand.businessHours && <p>{brand.businessHours}</p>}
              </div>
            )}
          </div>
        </div>

        <div className="rounded-lg border border-border bg-background p-6 shadow-lg sm:p-9">
          {status === "success" ? (
            <div role="status" className="grid min-h-80 content-center text-center">
              <CheckCircle2 className="mx-auto size-12 text-teal" />
              <h2 className="mt-5 font-display text-3xl font-semibold">Enquiry submitted.</h2>
              <p className="mt-3 text-muted-foreground">{message}</p>
            </div>
          ) : (
            <form
              name="mindloom-enquiry"
              method="POST"
              action="/"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={submitEnquiry}
            >
              <input type="hidden" name="form-name" value="mindloom-enquiry" />
              <p className="hidden">
                <label>
                  Don’t fill this out: <input name="bot-field" />
                </label>
              </p>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full name" htmlFor="full-name">
                  <input
                    id="full-name"
                    required
                    name="name"
                    autoComplete="name"
                    className="field"
                  />
                </Field>
                <Field label="Company name (optional)" htmlFor="company">
                  <input
                    id="company"
                    name="company"
                    autoComplete="organization"
                    className="field"
                  />
                </Field>
                <Field label="Email" htmlFor="email">
                  <input
                    id="email"
                    required
                    type="email"
                    name="email"
                    autoComplete="email"
                    className="field"
                  />
                </Field>
                <Field label="Phone / WhatsApp number" htmlFor="phone">
                  <input
                    id="phone"
                    required
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    className="field"
                  />
                </Field>
                <fieldset className="sm:col-span-2">
                  <legend className="mb-2 text-sm font-semibold">
                    Services you’re interested in
                  </legend>
                  <p className="mb-3 text-xs text-muted-foreground">Choose one or more.</p>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {services.map((service) => (
                      <label key={service.slug} className="flex items-start gap-2 text-sm">
                        <input
                          type="checkbox"
                          name="services"
                          value={service.title}
                          checked={selectedServices.includes(service.title)}
                          onChange={(event) => {
                            setSelectedServices((current) =>
                              event.target.checked
                                ? [...current, service.title]
                                : current.filter((item) => item !== service.title),
                            );
                          }}
                          className="mt-1 accent-primary"
                        />
                        {service.title}
                      </label>
                    ))}
                  </div>
                </fieldset>
                <Field label="Estimated budget (optional)" htmlFor="budget">
                  <input
                    id="budget"
                    name="budget"
                    className="field"
                    placeholder="Your range and currency"
                  />
                </Field>
                <Field label="Preferred starting time" htmlFor="start-time">
                  <select id="start-time" name="start-time" defaultValue="" className="field">
                    <option value="">Choose an option</option>
                    <option>As soon as practical</option>
                    <option>Within 1–3 months</option>
                    <option>In 3+ months</option>
                    <option>Still exploring</option>
                  </select>
                </Field>
                <Field label="Project description" htmlFor="project-description" wide>
                  <textarea
                    id="project-description"
                    required
                    name="description"
                    rows={5}
                    className="field resize-y"
                    placeholder="What are you trying to achieve, and what should we know?"
                  />
                </Field>
              </div>
              {status === "error" && (
                <p role="alert" className="mt-5 flex gap-2 text-sm text-destructive">
                  <AlertCircle className="size-5 shrink-0" /> {message}
                </p>
              )}
              <Button
                type="submit"
                size="lg"
                className="mt-6 w-full"
                disabled={status === "sending"}
              >
                {status === "sending" ? (
                  <>
                    <LoaderCircle className="animate-spin" /> Sending…
                  </>
                ) : (
                  <>
                    Send My Enquiry <ArrowUpRight />
                  </>
                )}
              </Button>
              <p className="mt-4 text-center text-xs leading-5 text-muted-foreground">
                Your details are used to respond to this enquiry. Please don&apos;t include
                passwords or sensitive personal information.
              </p>
            </form>
          )}
        </div>
      </div>
      <div className="mx-auto max-w-5xl px-5 pb-16 sm:px-8 lg:pb-24">
        <h2 className="mb-6 font-display text-3xl font-semibold">Before you get in touch</h2>
        <FaqList
          questions={faqs.filter(({ question }) =>
            [
              "How much does a website or digital project cost?",
              "How long does a project take?",
              "Who owns the code and content?",
            ].includes(question),
          )}
        />
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  wide,
  children,
}: {
  label: string;
  htmlFor: string;
  wide?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={wide ? "sm:col-span-2" : ""}>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-semibold">
        {label}
      </label>
      {children}
    </div>
  );
}
