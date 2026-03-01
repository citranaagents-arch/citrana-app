"use client";

import { useAgentsStore } from "@/lib/store/agents";
import { KpiCard } from "@/components/citrana/KpiCard";
import { AgentCard } from "@/components/citrana/AgentCard";
import { ExecutionTimeline } from "@/components/citrana/ExecutionTimeline";
import { SystemStatusPanel } from "@/components/citrana/SystemStatusPanel";
import { PortfolioOverview } from "@/components/citrana/PortfolioOverview";

export default function DashboardPage() {
  const stats = useAgentsStore((s) => s.stats);
  const agents = useAgentsStore((s) => s.agents);
  const logs = useAgentsStore((s) => s.logs);
  const activeAgents = agents.filter((a) => a.status === "active");

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-semibold tracking-tight text-[hsl(var(--foreground))] md:text-3xl" style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}>
          Dashboard
        </h1>
        <p className="mt-1 text-[hsl(var(--foreground-muted))]">
          Your autonomous intelligence layer — system overview and live agent activity.
        </p>
      </header>

      <SystemStatusPanel />

      <section>
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[hsl(var(--foreground-muted))]">
          Key metrics
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          <KpiCard
            label="Assets under automation"
            value={stats.totalAssetsUnderAutomation}
            index={0}
          />
          <KpiCard
            label="Active agents"
            value={stats.activeAgents}
            index={1}
          />
          <KpiCard
            label="Running tasks"
            value={stats.runningTasks}
            index={2}
          />
          <KpiCard
            label="Success rate"
            value={stats.executionSuccessRate}
            index={3}
          />
          <KpiCard
            label="Gas saved"
            value={stats.gasSaved}
            index={4}
          />
        </div>
      </section>

      <div className="grid gap-6 lg:grid-cols-3">
        <section className="lg:col-span-1">
          <PortfolioOverview />
        </section>
        <section className="lg:col-span-2">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[hsl(var(--foreground-muted))]">
            Live agents
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {activeAgents.length > 0
              ? activeAgents.map((agent, i) => (
                  <AgentCard key={agent.id} agent={agent} index={i} />
                ))
              : agents.slice(0, 3).map((agent, i) => (
                  <AgentCard key={agent.id} agent={agent} index={i} />
                ))}
          </div>
        </section>
      </div>

      <section className="glass-panel rounded-xl p-5">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[hsl(var(--foreground-muted))]">
          Recent verifiable actions
        </h2>
        <ExecutionTimeline entries={logs} maxItems={6} />
      </section>
    </div>
  );
}
