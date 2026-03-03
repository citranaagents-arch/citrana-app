"use client";

interface MarqueeSliderProps {
  items: string[];
  label?: string;
  speed?: number;
}

export function MarqueeSlider({ items, label, speed = 28 }: MarqueeSliderProps) {
  const duplicated = [...items, ...items];

  return (
    <section className="py-10 sm:py-12">
      {label && (
        <p className="mb-5 text-center text-xs font-semibold uppercase tracking-widest text-[hsl(var(--foreground-muted))]">
          {label}
        </p>
      )}
      <div className="relative overflow-hidden marquee-wrap">
        <div
          className="flex gap-6 sm:gap-8 will-change-transform"
          style={{
            animation: `marquee ${speed}s linear infinite`,
            width: "max-content",
          }}
        >
          {duplicated.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="shrink-0 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--background-card))] px-5 py-3 text-sm font-medium text-[hsl(var(--foreground-muted))] shadow-sm transition-colors hover:text-[hsl(var(--foreground))] hover:border-[hsl(var(--primary))]/30"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
