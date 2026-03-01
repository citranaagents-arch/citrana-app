"use client";

import { use, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Bot, Settings2, ShieldCheck, Sliders, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ExecutionTimeline } from "@/components/citrana/ExecutionTimeline";
import { ZkProofBadge } from "@/components/citrana/ZkProofBadge";
import { ZkProofModal } from "@/components/citrana/ZkProofModal";
import { useAgentsStore } from "@/lib/store/agents";

export default function AgentDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [zkModalOpen, setZkModalOpen] = useState(false);
  const getAgentById = useAgentsStore((s) => s.getAgentById);
  const logs = useAgentsStore((s) => s.logs);
  const agent = getAgentById(id);

  if (!agent) {
    return (
      <div className="space-y-6">
        <Link
          href="/app/agents"
          className="inline-flex items-center gap-2 text-sm text-[hsl(var(--foreground-muted))] hover:text-[hsl(var(--foreground))]"
        >
          <ArrowLeft className="size-4" />
          Back to agents
        </Link>
        <p className="text-[hsl(var(--foreground-muted))]">
          Agent not found.
        </p>
      </div>
    );
  }

  const agentLogs = logs.filter((l) => l.agentId === agent.id);

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/app/agents"
          className="inline-flex items-center gap-2 text-sm text-[hsl(var(--foreground-muted))] hover:text-[hsl(var(--foreground))]"
        >
          <ArrowLeft className="size-4" />
          Back to agents
        </Link>
      </div>

      <div className="flex flex-col gap-6 md:flex-row md:items-start">
        <div className="glass-panel flex flex-1 flex-col gap-4 rounded-xl p-6">
          <div className="flex items-center gap-4">
            <div className="flex size-12 items-center justify-center rounded-xl bg-[hsl(var(--primary))]/15 text-[hsl(var(--primary))]">
              <Bot className="size-6" />
            </div>
            <div>
              <h1 className="text-2xl font-semibold tracking-tight">
                {agent.name}
              </h1>
              <p className="text-[hsl(var(--foreground-muted))]">
                {agent.type} · {agent.executionFrequency} · Risk:{" "}
                {agent.riskLevel}
              </p>
            </div>
            <span
              className={`ml-auto rounded-full px-3 py-1 text-sm font-medium ${
                agent.status === "active"
                  ? "bg-[hsl(var(--success))]/20 text-[hsl(var(--success))]"
                  : agent.status === "paused"
                    ? "bg-[hsl(var(--foreground-muted))]/20 text-[hsl(var(--foreground-muted))]"
                    : "bg-[hsl(var(--error))]/20 text-[hsl(var(--error))]"
              }`}
            >
              {agent.status}
            </span>
          </div>

          <section>
            <h2 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[hsl(var(--foreground-muted))]">
              <Settings2 className="size-4" />
              Configuration
            </h2>
            <dl className="grid gap-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-[hsl(var(--foreground-muted))]">
                  Execution frequency
                </dt>
                <dd>{agent.executionFrequency}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-[hsl(var(--foreground-muted))]">
                  Risk level
                </dt>
                <dd>{agent.riskLevel}</dd>
              </div>
            </dl>
          </section>

          <section>
            <h2 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[hsl(var(--foreground-muted))]">
              <Sliders className="size-4" />
              Adjust parameters
            </h2>
            <p className="text-sm text-[hsl(var(--foreground-muted))]">
              Execution frequency, risk level, and trigger conditions. Edit in
              Modify flow.
            </p>
            <dl className="mt-2 grid gap-1 text-sm">
              <div className="flex justify-between">
                <dt className="text-[hsl(var(--foreground-muted))]">Slippage tolerance</dt>
                <dd>0.5%</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-[hsl(var(--foreground-muted))]">Max gas per tx</dt>
                <dd>0.01 ETH</dd>
              </div>
            </dl>
          </section>

          <section>
            <h2 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[hsl(var(--foreground-muted))]">
              <ShieldCheck className="size-4" />
              Permissions
            </h2>
            <ul className="space-y-1 text-sm text-[hsl(var(--foreground))]">
              <li>· DEX routers (Uniswap, etc.)</li>
              <li>· Staking contracts</li>
              <li>· Account abstraction paymaster</li>
            </ul>
          </section>
        </div>

        <div className="glass-panel w-full rounded-xl p-6 md:w-[380px]">
          <h2 className="mb-4 text-lg font-semibold">Execution logs</h2>
          {agentLogs.length > 0 ? (
            <ExecutionTimeline entries={agentLogs} maxItems={10} />
          ) : (
            <p className="text-sm text-[hsl(var(--foreground-muted))]">
              No executions yet.
            </p>
          )}
          <div className="mt-4">
            <ZkProofBadge verified onViewProof={() => setZkModalOpen(true)} />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <Button variant="secondary">Pause agent</Button>
        <Button variant="outline">Modify</Button>
        <Button
          variant="outline"
          className="text-[hsl(var(--error))] hover:bg-[hsl(var(--error))]/10"
        >
          <Trash2 className="size-4" />
          Terminate agent
        </Button>
      </div>

      <ZkProofModal
        open={zkModalOpen}
        onClose={() => setZkModalOpen(false)}
        proofId="zkp-0x…a1b2"
        txHash={agentLogs[0]?.txHash ?? "0x…"}
      />
    </div>
  );
}
