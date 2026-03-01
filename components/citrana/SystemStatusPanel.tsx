"use client";

import { motion } from "framer-motion";
import { Activity, Shield, Cpu, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const statusItems = [
  { label: "Agent runtime", value: "Operational", status: "ok", icon: Cpu },
  { label: "Intent engine", value: "Connected", status: "ok", icon: Zap },
  { label: "ZK verification", value: "Active", status: "ok", icon: Shield },
  { label: "Live executions", value: "Streaming", status: "live", icon: Activity },
];

export function SystemStatusPanel() {
  return (
    <motion.div
      initial={{ opacity: 1, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="glass-panel flex flex-wrap items-center gap-4 rounded-xl border-[hsl(var(--primary))]/10 px-4 py-3 md:gap-6 md:px-5 md:py-4"
    >
      {statusItems.map((item, i) => {
        const Icon = item.icon;
        return (
          <div
            key={item.label}
            className="flex items-center gap-3"
          >
            <div
              className={cn(
                "flex size-9 shrink-0 items-center justify-center rounded-lg",
                item.status === "live"
                  ? "execution-pulse bg-[hsl(var(--success))]/15 text-[hsl(var(--success))]"
                  : "bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))]"
              )}
            >
              <Icon className="size-4" strokeWidth={2} />
            </div>
            <div>
              <p className="text-sm font-medium text-[hsl(var(--foreground-muted))]">
                {item.label}
              </p>
              <p className="text-sm font-semibold text-[hsl(var(--foreground))]">
                {item.value}
              </p>
            </div>
            {i < statusItems.length - 1 && (
              <div className="hidden h-8 w-px bg-[hsl(var(--border))] md:block" />
            )}
          </div>
        );
      })}
    </motion.div>
  );
}
