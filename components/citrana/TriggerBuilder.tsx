"use client";

import { cn } from "@/lib/utils";

export type TriggerCondition = {
  type: "gas" | "time" | "price";
  label: string;
  value: string;
};

interface TriggerBuilderProps {
  conditions: TriggerCondition[];
  onChange: (conditions: TriggerCondition[]) => void;
  className?: string;
}

export function TriggerBuilder({
  conditions,
  onChange,
  className,
}: TriggerBuilderProps) {
  const gas = conditions.find((c) => c.type === "gas")?.value ?? "25";
  const interval = conditions.find((c) => c.type === "time")?.value ?? "6";

  const update = (type: "gas" | "time", value: string) => {
    const next = conditions.filter((c) => c.type !== type);
    if (type === "gas" && value)
      next.push({ type: "gas", label: "Gas below (gwei)", value });
    if (type === "time" && value)
      next.push({ type: "time", label: "Every (hours)", value });
    onChange(next.length ? next : conditions);
  };

  return (
    <div className={cn("space-y-3", className)}>
      <p className="text-sm font-medium text-[hsl(var(--foreground))]">
        Trigger builder
      </p>
      <p className="text-xs text-[hsl(var(--foreground-muted))]">
        Conditions that trigger execution (e.g. gas &lt; X, time interval).
      </p>
      <div className="flex flex-wrap gap-4">
        <div>
          <label className="mb-1 block text-xs text-[hsl(var(--foreground-muted))]">
            Gas below (gwei)
          </label>
          <input
            type="number"
            value={gas}
            onChange={(e) => update("gas", e.target.value)}
            placeholder="25"
            className="w-24 rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--surface))] px-3 py-2 text-sm focus:border-[hsl(var(--primary))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]/20"
          />
        </div>
        <div>
          <label className="mb-1 block text-xs text-[hsl(var(--foreground-muted))]">
            Every (hours)
          </label>
          <input
            type="number"
            value={interval}
            onChange={(e) => update("time", e.target.value)}
            placeholder="6"
            className="w-24 rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--surface))] px-3 py-2 text-sm focus:border-[hsl(var(--primary))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]/20"
          />
        </div>
      </div>
    </div>
  );
}
