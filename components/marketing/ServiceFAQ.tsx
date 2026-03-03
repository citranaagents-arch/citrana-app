"use client";

import { ChevronDown } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

interface ServiceFAQProps {
  items: FAQItem[];
  title?: string;
}

export function ServiceFAQ({ items, title = "Frequently Asked Questions" }: ServiceFAQProps) {
  return (
    <section className="py-10 sm:py-12 md:py-14">
      <h2 className="text-center text-2xl font-semibold text-[hsl(var(--foreground))] sm:text-3xl">
        {title}
      </h2>
      <p className="mx-auto mt-2 max-w-lg text-center text-sm text-[hsl(var(--foreground-muted))]">
        Find answers to common questions.
      </p>
      <div className="mx-auto mt-8 max-w-2xl space-y-2">
        {items.map((faq) => (
          <details
            key={faq.q}
            className="group rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--background-card))] px-4 transition-colors hover:border-[hsl(var(--primary))]/20 [&[open]]:border-[hsl(var(--accent))]/30"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-left font-medium text-[hsl(var(--foreground))] focus:outline-none">
              {faq.q}
              <ChevronDown className="size-5 shrink-0 text-[hsl(var(--foreground-muted))] transition-transform group-open:rotate-180 group-open:text-[hsl(var(--accent))]" />
            </summary>
            <p className="border-t border-[hsl(var(--border))] pb-4 pt-2 text-sm text-[hsl(var(--foreground-muted))]">
              {faq.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
