"use client";

import { motion } from "framer-motion";

const allocation = [
  { label: "ETH", value: 42, color: "hsl(var(--primary))" },
  { label: "USDC", value: 28, color: "hsl(var(--accent))" },
  { label: "WBTC", value: 18, color: "hsl(var(--warning))" },
  { label: "Other", value: 12, color: "hsl(var(--foreground-muted))" },
];

export function PortfolioOverview() {
  return (
    <motion.div
      initial={{ opacity: 1, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay: 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="glass-panel rounded-xl p-5"
    >
      <h3 className="text-sm font-semibold uppercase tracking-wider text-[hsl(var(--foreground-muted))]">
        Portfolio overview
      </h3>
      <p className="mt-1 text-2xl font-semibold tracking-tight text-[hsl(var(--foreground))]">
        $124,580
      </p>
      <p className="mt-0.5 text-xs text-[hsl(var(--success))]">+2.4% (7d)</p>
      <div className="mt-4 flex h-3 w-full overflow-hidden rounded-full bg-[hsl(var(--surface))]">
        {allocation.map((item, i) => (
          <div
            key={item.label}
            className="h-full transition-all first:rounded-l-full last:rounded-r-full"
            style={{ width: `${item.value}%`, backgroundColor: item.color }}
          />
        ))}
      </div>
      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs">
        {allocation.map((item) => (
          <span key={item.label} className="flex items-center gap-1.5">
            <span
              className="size-2 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            {item.label} {item.value}%
          </span>
        ))}
      </div>
    </motion.div>
  );
}
