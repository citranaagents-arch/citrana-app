"use client";

import { cn } from "@/lib/utils";

type RiskLevel = "low" | "medium" | "high";

interface RiskSliderProps {
  value: RiskLevel;
  onChange: (value: RiskLevel) => void;
  className?: string;
}

const opts: { value: RiskLevel; label: string }[] = [
  { value: "low", label: "Low" },
  { value: "medium", label: "Medium" },
  { value: "high", label: "High" },
];

export function RiskSlider({ value, onChange, className }: RiskSliderProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <p className="text-sm font-medium text-[hsl(var(--foreground))]">
        Risk level
      </p>
      <div className="flex gap-2">
        {opts.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            className={
              value === opt.value
                ? "rounded-lg bg-[hsl(var(--primary))] px-4 py-2 text-sm font-medium text-[hsl(var(--primary-foreground))]"
                : "rounded-lg bg-[hsl(var(--surface))] px-4 py-2 text-sm font-medium text-[hsl(var(--foreground-muted))] hover:bg-[hsl(var(--surface-hover))]"
            }
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
