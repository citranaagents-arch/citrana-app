"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { startMockEventStream, stopMockEventStream } from "@/lib/mock/events";
import { useAgentsStore } from "@/lib/store/agents";
import { cn } from "@/lib/utils";

const badgeClass: Record<
  "pending" | "completed" | "failed" | "info",
  string
> = {
  pending: "terminal-badge--warning",
  completed: "terminal-badge--success",
  failed: "terminal-badge--error",
  info: "terminal-badge--info",
};

function formatTime(iso: string) {
  return new Date(iso).toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}

export function TerminalFeed({ maxItems = 20 }: { maxItems?: number }) {
  const events = useAgentsStore((s) => s.activityEvents);
  const list = events.slice(0, maxItems);
  const bottomRef = useRef<HTMLDivElement>(null);
  const pending = list.filter((e) => e.type === "pending").length;
  const completed = list.filter((e) => e.type === "completed").length;
  const failed = list.filter((e) => e.type === "failed").length;

  useEffect(() => {
    startMockEventStream(4500);
    return () => stopMockEventStream();
  }, []);

  return (
    <div className="terminal-feed glass-panel overflow-hidden rounded-xl">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[hsl(var(--border))] px-4 py-3">
        <span className="text-xs font-medium text-[hsl(var(--foreground-muted))]">
          Live execution feed
        </span>
        <div className="flex gap-4 text-xs">
          <span className="text-[hsl(var(--warning))]">Pending: {pending}</span>
          <span className="text-[hsl(var(--success))]">Completed: {completed}</span>
          <span className="text-[hsl(var(--error))]">Failed: {failed}</span>
        </div>
      </div>
      <div className="hide-scrollbar max-h-[420px] overflow-y-auto px-4 py-2">
        <AnimatePresence initial={false}>
          {list.length === 0 ? (
            <p className="py-8 text-center text-sm text-[hsl(var(--foreground-muted))]">
              Waiting for agent activity…
            </p>
          ) : (
            list.map((ev) => (
              <motion.div
                key={ev.id}
                initial={{ opacity: 1, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 1, height: 0 }}
                transition={{ duration: 0.2 }}
                className="terminal-line"
              >
                <span className="terminal-timestamp">
                  {formatTime(ev.timestamp)}
                </span>
                <span
                  className={cn(
                    "terminal-badge",
                    badgeClass[ev.type]
                  )}
                >
                  {ev.type}
                </span>
                <span className="min-w-0 flex-1 truncate text-[hsl(var(--foreground))]">
                  {ev.message}
                  {ev.agentId && (
                    <span className="ml-1 text-[hsl(var(--foreground-subtle))]">
                      · Agent {ev.agentId}
                    </span>
                  )}
                </span>
                {ev.gasEstimate && (
                  <span className="shrink-0 text-[hsl(var(--foreground-subtle))]">
                    {ev.gasEstimate}
                  </span>
                )}
                {ev.zkVerified && (
                  <span className="zk-glow shrink-0 rounded px-1.5 py-0.5 text-[hsl(var(--success))]">ZK ✓</span>
                )}
              </motion.div>
            ))
          )}
        </AnimatePresence>
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
