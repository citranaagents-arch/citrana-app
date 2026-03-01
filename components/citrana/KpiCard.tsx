"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface KpiCardProps {
  label: string;
  value: string | number;
  sublabel?: string;
  className?: string;
  index?: number;
}

export function KpiCard({
  label,
  value,
  sublabel,
  className,
  index = 0,
}: KpiCardProps) {
  return (
    <motion.div
      initial={{ opacity: 1, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.25,
        delay: index * 0.04,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={cn(
        "glass-panel-subtle rounded-xl p-4 transition-shadow hover:shadow-lg hover:shadow-[hsl(var(--primary))]/5",
        className
      )}
    >
      <p className="text-xs font-medium uppercase tracking-wider text-[hsl(var(--foreground-muted))]">
        {label}
      </p>
      <p className="mt-1 text-2xl font-semibold tracking-tight text-[hsl(var(--foreground))]">
        {value}
      </p>
      {sublabel && (
        <p className="mt-0.5 text-xs text-[hsl(var(--foreground-subtle))]">
          {sublabel}
        </p>
      )}
    </motion.div>
  );
}
