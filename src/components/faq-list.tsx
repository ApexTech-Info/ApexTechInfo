import { faqs } from "@/lib/faqs";

export function FaqList({ questions = faqs }: { questions?: readonly (typeof faqs)[number][] }) {
  return (
    <div className="divide-y divide-border border-y border-border">
      {questions.map(({ question, answer }) => (
        <details key={question} className="group py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-foreground [&::-webkit-details-marker]:hidden">
            {question}
            <span
              aria-hidden="true"
              className="text-xl text-primary transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="mt-3 max-w-3xl leading-7 text-muted-foreground">{answer}</p>
        </details>
      ))}
    </div>
  );
}
