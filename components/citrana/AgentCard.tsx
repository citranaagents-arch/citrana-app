"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Bot, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Agent, AgentType } from "@/lib/store/agents";

const typeLabels: Record<AgentType, string> = {
  defi: "DeFi",
  trading: "Trading",
  treasury: "Treasury",
  "cross-chain": "Cross-Chain",
  research: "Research",
  scheduler: "Scheduler",
};

function formatRelativeTime(iso: string) {
  const d = new Date(iso);
  const now = Date.now();
  const diff = Math.floor((now - d.getTime()) / 1000);
  if (diff < 60) return "Just now";
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return `${Math.floor(diff / 86400)}d ago`;
}

interface AgentCardProps {
  agent: Agent;
  index?: number;
}

export function AgentCard({ agent, index = 0 }: AgentCardProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const statusClass =
    agent.status === "active"
      ? "bg-[hsl(var(--success))]/20 text-[hsl(var(--success))]"
      : agent.status === "paused"
        ? "bg-[hsl(var(--foreground-muted))]/20 text-[hsl(var(--foreground-muted))]"
        : "bg-[hsl(var(--error))]/20 text-[hsl(var(--error))]";

  return (
    <motion.div
      initial={{ opacity: 1, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.25,
        delay: index * 0.05,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <Link
        href={`/app/agents/${agent.id}`}
        className="glass-panel block rounded-xl p-4 transition-all hover:border-[hsl(var(--primary))]/30 hover:shadow-md hover:shadow-[hsl(var(--primary))]/10"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex min-w-0 flex-1 gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[hsl(var(--primary))]/15 text-[hsl(var(--primary))]">
              <Bot className="size-5" />
            </div>
            <div className="min-w-0">
              <h3 className="truncate font-semibold text-[hsl(var(--foreground))]">
                {agent.name}
              </h3>
              <p className="text-sm text-[hsl(var(--foreground-muted))]">
                {typeLabels[agent.type]} · {agent.executionFrequency}
              </p>
            </div>
          </div>
          <span className={cn("shrink-0 rounded-full px-2.5 py-0.5 text-sm font-medium", statusClass)}>
            {agent.status}
          </span>
        </div>
        <div className="mt-3 flex items-center gap-4 text-sm text-[hsl(var(--foreground-subtle))]">
          <span>Risk: {agent.riskLevel}</span>
          <span>Last: {mounted ? formatRelativeTime(agent.lastActionAt) : "—"}</span>
          {agent.metrics?.profit && (
            <span className="flex items-center gap-1 text-[hsl(var(--success))]">
              <TrendingUp className="size-3.5" />
              {agent.metrics.profit}
            </span>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
