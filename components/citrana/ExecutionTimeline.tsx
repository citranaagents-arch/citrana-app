"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle, Clock } from "lucide-react";
import { ZkProofBadge } from "./ZkProofBadge";
import type { ExecutionLogEntry } from "@/lib/store/agents";

function formatTime(iso: string) {
  return new Date(iso).toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}

interface ExecutionTimelineProps {
  entries: ExecutionLogEntry[];
  maxItems?: number;
}

export function ExecutionTimeline({
  entries,
  maxItems = 8,
}: ExecutionTimelineProps) {
  const list = entries.slice(0, maxItems);
  return (
    <ul className="space-y-0">
      {list.map((entry, i) => (
        <motion.li
          key={entry.id}
          initial={{ opacity: 1, x: -6 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.22,
            delay: i * 0.04,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="flex items-start gap-3 border-b border-[hsl(var(--border))]/50 py-3 last:border-0"
        >
          <span className="mt-0.5 shrink-0">
            {entry.status === "completed" && (
              <CheckCircle2 className="size-4 text-[hsl(var(--success))]" />
            )}
            {entry.status === "failed" && (
              <XCircle className="size-4 text-[hsl(var(--error))]" />
            )}
            {entry.status === "pending" && (
              <Clock className="size-4 text-[hsl(var(--warning))]" />
            )}
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium text-[hsl(var(--foreground))]">
              {entry.action}
            </p>
            <p className="text-xs text-[hsl(var(--foreground-muted))]">
              {formatTime(entry.timestamp)}
              {entry.txHash && ` · ${entry.txHash}`}
            </p>
          </div>
          {entry.zkVerified && (
            <ZkProofBadge verified onViewProof={() => {}} />
          )}
        </motion.li>
      ))}
    </ul>
  );
}
