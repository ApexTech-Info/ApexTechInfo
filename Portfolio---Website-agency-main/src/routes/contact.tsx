import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useState, type FormEvent, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { FaqList } from "@/components/faq-list";
import { pageMeta, siteConfig } from "@/lib/site-config";
import { faqs, serviceGroups } from "@/lib/agency";

const serviceOptions = serviceGroups.flatMap((group) => group.services);
const allServiceOptions = [...serviceOptions.map((item) => item.title), "Not sure yet"];
const startOptions = [
  "As soon as possible",
  "Within 1 to 3 months",
  "Later this year",
  "Just exploring",
];

type Enquiry = {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  services: string[];
  budget: string;
  preferredStart: string;
  description: string;
  website: string;
};

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>) =>
    typeof search["service"] === "string" && search["service"]
      ? { service: search["service"] }
      : {},
  head: () =>
    pageMeta(
      "Contact Us | Get a Free Quote",
      "Tell us about your website, app or software project. We reply within one business day with honest advice and a clear next step.",
      "/contact",
    ),
  component: ContactPage,
});

function ContactPage() {
  const { service } = Route.useSearch();
  const initialService = serviceOptions.find((item) => item.slug === service)?.title;
  const [enquiry, setEnquiry] = useState<Enquiry>(() => ({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    services: initialService ? [initialService] : [],
    budget: "",
    preferredStart: "",
    description: "",
    website: "",
  }));
  const [status, setStatus] = useState<"idle" | "loading" | "error" | "success">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function updateField<K extends keyof Enquiry>(field: K, value: Enquiry[K]) {
    setEnquiry((current) => ({ ...current, [field]: value }));
  }

  function toggleService(value: string) {
    setEnquiry((current) => {
      const selected = current.services.includes(value);
      if (value === "Not sure yet") return { ...current, services: selected ? [] : [value] };
      const remaining = current.services.filter((item) => item !== "Not sure yet");
      return {
        ...current,
        services: selected ? remaining.filter((item) => item !== value) : [...remaining, value],
      };
    });
  }

  async function submitEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(enquiry),
      });
      const result = (await response.json()) as { success?: boolean; message?: string };
      if (!response.ok || result.success !== true)
        throw new Error(result.message ?? "Your enquiry was not sent. Please try again.");
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong and your enquiry was not sent.",
      );
    }
  }

  const whatsapp = siteConfig.whatsapp.replace(/\D/g, "");

  return (
    <>
      <section className="grid-lines">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:items-start lg:py-24">
          <div>
            <p className="eyebrow">Contact {siteConfig.name}</p>
            <h1 className="mt-5 font-display text-5xl font-medium leading-[.98] sm:text-7xl">
              Let&apos;s talk about your project
            </h1>
            <p className="mt-7 max-w-lg text-lg leading-8 text-muted-foreground">
              Tell us what you&apos;re planning. It doesn&apos;t need to be polished. We&apos;ll
              reply within one business day with honest advice and a clear next step. No pressure,
              no jargon.
            </p>
            <div className="mt-10 border-t border-border pt-6">
              <h2 className="font-display text-2xl font-medium">What happens next</h2>
              <ol className="mt-5 grid gap-5">
                {[
                  "We read your brief and reply within one business day, with questions if needed.",
                  "We arrange a free 20 to 30 minute call to understand your goals.",
                  "You receive a written scope, timeline and cost, with no obligation to go ahead.",
                ].map((item, index) => (
                  <li key={item} className="grid grid-cols-[2rem_1fr] gap-3 text-sm leading-6">
                    <span className="text-primary">0{index + 1}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </div>
            {(siteConfig.email ||
              siteConfig.phone ||
              siteConfig.address ||
              siteConfig.businessHours ||
              whatsapp) && (
              <div className="mt-10 border-t border-border pt-6">
                <h2 className="font-display text-xl font-medium">Other ways to reach us</h2>
                <div className="mt-3 grid gap-2 text-sm">
                  {siteConfig.email && (
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="font-medium hover:text-primary"
                    >
                      {siteConfig.email}
                    </a>
                  )}
                  {siteConfig.phone && (
                    <a href={`tel:${siteConfig.phone}`} className="font-medium hover:text-primary">
                      {siteConfig.phone}
                    </a>
                  )}
                  {whatsapp && (
                    <a
                      href={`https://wa.me/${whatsapp}`}
                      target="_blank"
                      rel="noreferrer"
                      className="font-medium hover:text-primary"
                    >
                      Chat on WhatsApp
                    </a>
                  )}
                  {siteConfig.address && (
                    <p className="text-muted-foreground">{siteConfig.address}</p>
                  )}
                  {siteConfig.businessHours && (
                    <p className="text-muted-foreground">{siteConfig.businessHours}</p>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="border border-border bg-background p-5 sm:p-8">
            {status === "success" ? (
              <div role="status" className="grid min-h-[430px] place-items-center text-center">
                <div>
                  <CheckCircle2 className="mx-auto size-12 text-teal" />
                  <h2 className="mt-5 font-display text-3xl font-medium">
                    Thank you, {enquiry.fullName.trim().split(/\s+/)[0]}.
                  </h2>
                  <p className="mt-3 max-w-md text-muted-foreground">
                    Your enquiry was sent successfully. We&apos;ll reply within one business day.
                  </p>
                  {whatsapp && (
                    <a
                      href={`https://wa.me/${whatsapp}`}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-block text-sm font-semibold"
                    >
                      In a hurry? Message us on WhatsApp.
                    </a>
                  )}
                </div>
              </div>
            ) : (
              <form onSubmit={submitEnquiry} aria-busy={status === "loading"}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full name" required>
                    <input
                      required
                      autoComplete="name"
                      name="fullName"
                      value={enquiry.fullName}
                      onChange={(event) => updateField("fullName", event.target.value)}
                      className="field"
                      placeholder="Your name"
                    />
                  </Field>
                  <Field label="Company name">
                    <input
                      autoComplete="organization"
                      name="company"
                      value={enquiry.company}
                      onChange={(event) => updateField("company", event.target.value)}
                      className="field"
                      placeholder="Your company (optional)"
                    />
                  </Field>
                  <Field label="Email address" required>
                    <input
                      required
                      type="email"
                      autoComplete="email"
                      name="email"
                      value={enquiry.email}
                      onChange={(event) => updateField("email", event.target.value)}
                      className="field"
                      placeholder="you@example.com"
                    />
                  </Field>
                  <Field label="Phone / WhatsApp number" required>
                    <input
                      required
                      type="tel"
                      autoComplete="tel"
                      name="phone"
                      value={enquiry.phone}
                      onChange={(event) => updateField("phone", event.target.value)}
                      className="field"
                      placeholder="Include your country code"
                    />
                  </Field>
                  <fieldset className="sm:col-span-2">
                    <legend className="mb-3 text-sm font-semibold">
                      What do you need?{" "}
                      <span className="font-normal text-muted-foreground">
                        (select all that apply)
                      </span>
                    </legend>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {allServiceOptions.map((item) => (
                        <label key={item} className="flex items-start gap-3 text-sm">
                          <input
                            type="checkbox"
                            name="services"
                            value={item}
                            checked={enquiry.services.includes(item)}
                            onChange={() => toggleService(item)}
                            className="mt-0.5 size-4 accent-primary"
                          />
                          <span>{item}</span>
                        </label>
                      ))}
                    </div>
                  </fieldset>
                  <Field label="Estimated budget (optional)">
                    <input
                      name="budget"
                      value={enquiry.budget}
                      onChange={(event) => updateField("budget", event.target.value)}
                      className="field"
                      placeholder="Range and currency, if known"
                    />
                  </Field>
                  <Field label="When would you like to start?">
                    <select
                      name="preferredStart"
                      value={enquiry.preferredStart}
                      onChange={(event) => updateField("preferredStart", event.target.value)}
                      className="field"
                    >
                      <option value="">Choose a timeframe</option>
                      {startOptions.map((item) => (
                        <option key={item}>{item}</option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Tell us about your project" wide required>
                    <textarea
                      required
                      name="description"
                      value={enquiry.description}
                      onChange={(event) => updateField("description", event.target.value)}
                      className="field min-h-36"
                      placeholder="What are you trying to build or fix? Who is it for? Add any links or examples you like."
                    />
                  </Field>
                </div>
                <div
                  aria-hidden="true"
                  className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden"
                >
                  <label>
                    Leave this field empty
                    <input
                      tabIndex={-1}
                      autoComplete="off"
                      name="website"
                      value={enquiry.website}
                      onChange={(event) => updateField("website", event.target.value)}
                    />
                  </label>
                </div>
                {status === "error" && (
                  <p
                    role="alert"
                    className="mt-5 border-l-2 border-destructive pl-3 text-sm text-destructive"
                  >
                    {errorMessage || "Something went wrong and your enquiry was not sent."}
                    {siteConfig.email && (
                      <>
                        {" "}
                        Please try again, or email{" "}
                        <a className="font-semibold underline" href={`mailto:${siteConfig.email}`}>
                          {siteConfig.email}
                        </a>
                        .
                      </>
                    )}
                  </p>
                )}
                <Button
                  type="submit"
                  variant="dark"
                  size="lg"
                  className="mt-6 w-full"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? "Sending..." : "Send My Enquiry"}
                  <ArrowUpRight />
                </Button>
                <p className="mt-4 text-center text-xs leading-5 text-muted-foreground">
                  We reply within 1 business day. Your details are used to respond to your enquiry.
                  Please do not include sensitive information. Read our{" "}
                  <a href="/privacy" className="underline">
                    privacy notice
                  </a>
                  .
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <p className="eyebrow">FAQs</p>
            <h2 className="mt-4 font-display text-3xl font-medium">Before you send an enquiry</h2>
          </div>
          <FaqList items={faqs.filter((_, index) => [0, 1, 3, 5].includes(index))} />
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  wide,
  required,
  children,
}: {
  label: string;
  wide?: boolean;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <label className={wide ? "sm:col-span-2" : ""}>
      <span className="mb-2 block text-sm font-semibold">
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </span>
      {children}
    </label>
  );
}
