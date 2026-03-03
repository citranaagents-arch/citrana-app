"use client";

import { ReactNode } from "react";

interface CardCarouselProps {
  children: ReactNode;
  label?: string;
}

export function CardCarousel({ children, label }: CardCarouselProps) {
  return (
    <div className="py-8 sm:py-10">
      {label && (
        <p className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-[hsl(var(--foreground-muted))]">
          {label}
        </p>
      )}
      <div className="overflow-x-auto scroll-smooth pb-2">
        <div className="flex gap-4 pb-2" style={{ scrollSnapType: "x mandatory" }}>
          {children}
        </div>
      </div>
    </div>
  );
}
