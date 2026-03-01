"use client";

import { motion } from "framer-motion";
import { Activity, Bell, Sliders } from "lucide-react";
import { TerminalFeed } from "@/components/citrana/TerminalFeed";

const monitoredConditions = [
  { id: "1", label: "Gas below 25 gwei", value: "18 gwei", status: "ok" },
  { id: "2", label: "ETH price above", value: "$3,200", status: "ok" },
  { id: "3", label: "Execution interval", value: "Every 6h", status: "ok" },
];

const recentAlerts = [
  { id: "1", message: "Gas threshold met — execution queued", time: "2m ago", type: "info" },
  { id: "2", message: "Slippage exceeded on swap — retry scheduled", time: "15m ago", type: "warning" },
  { id: "3", message: "Agent DEX Trader completed rebalance", time: "1h ago", type: "success" },
];

export default function ActivityPage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-semibold tracking-tight text-[hsl(var(--foreground))] md:text-3xl">
          Activity Monitor
        </h1>
        <p className="mt-1 text-[hsl(var(--foreground-muted))]">
          Live execution feed, condition monitoring, and verification.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-2">
        <motion.section
          initial={{ opacity: 1, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="glass-panel rounded-xl p-5"
        >
          <h2 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[hsl(var(--foreground-muted))]">
            <Sliders className="size-4" />
            Condition monitoring
          </h2>
          <ul className="space-y-3">
            {monitoredConditions.map((c) => (
              <li
                key={c.id}
                className="flex items-center justify-between rounded-lg border border-[hsl(var(--border))]/50 bg-[hsl(var(--surface))]/50 px-3 py-2 text-sm"
              >
                <span className="text-[hsl(var(--foreground))]">{c.label}</span>
                <span className="font-mono text-[hsl(var(--foreground-muted))]">{c.value}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          initial={{ opacity: 1, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, delay: 0.05 }}
          className="glass-panel rounded-xl p-5"
        >
          <h2 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[hsl(var(--foreground-muted))]">
            <Bell className="size-4" />
            Alerts & triggers
          </h2>
          <ul className="space-y-2">
            {recentAlerts.map((a) => (
              <li
                key={a.id}
                className="flex items-start gap-2 rounded-lg border border-[hsl(var(--border))]/50 px-3 py-2 text-sm"
              >
                <Activity
                  className={`mt-0.5 size-4 shrink-0 ${
                    a.type === "success"
                      ? "text-[hsl(var(--success))]"
                      : a.type === "warning"
                        ? "text-[hsl(var(--warning))]"
                        : "text-[hsl(var(--accent))]"
                  }`}
                />
                <div className="min-w-0 flex-1">
                  <p className="text-[hsl(var(--foreground))]">{a.message}</p>
                  <p className="mt-0.5 text-xs text-[hsl(var(--foreground-subtle))]">{a.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </motion.section>
      </div>

      <section>
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[hsl(var(--foreground-muted))]">
          Real-time execution feed
        </h2>
        <TerminalFeed maxItems={24} />
      </section>
    </div>
  );
}
