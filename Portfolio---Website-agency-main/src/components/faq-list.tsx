import { faqs } from "@/lib/agency";

export function FaqList({ items = faqs }: { items?: typeof faqs }) {
  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((faq) => (
        <details key={faq.question} className="group py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-lg font-medium focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring sm:text-xl">
            {faq.question}
            <span
              aria-hidden="true"
              className="text-primary transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="max-w-3xl pb-2 pt-4 leading-7 text-muted-foreground">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
