"use client";

import { useState } from "react";
import { useAgentsStore } from "@/lib/store/agents";
import { AgentCard } from "@/components/citrana/AgentCard";
import type { AgentStatus } from "@/lib/store/agents";

export default function AgentsPage() {
  const agents = useAgentsStore((s) => s.agents);
  const [statusFilter, setStatusFilter] = useState<AgentStatus | "all">("all");

  const filtered =
    statusFilter === "all"
      ? agents
      : agents.filter((a) => a.status === statusFilter);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Agents</h1>
          <p className="mt-1 text-[hsl(var(--foreground-muted))]">
            Manage all deployed agents.
          </p>
        </div>
        <div className="flex gap-2">
          {(["all", "active", "paused", "error"] as const).map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => setStatusFilter(value)}
              className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                statusFilter === value
                  ? "bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]"
                  : "bg-[hsl(var(--surface))] text-[hsl(var(--foreground-muted))] hover:bg-[hsl(var(--surface-hover))]"
              }`}
            >
              {value === "all" ? "All" : value}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {filtered.map((agent, i) => (
          <AgentCard key={agent.id} agent={agent} index={i} />
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="py-12 text-center text-[hsl(var(--foreground-muted))]">
          No agents match the selected filter.
        </p>
      )}
    </div>
  );
}
