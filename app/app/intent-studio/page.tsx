"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Sparkles, Zap, Network, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RiskSlider } from "@/components/citrana/RiskSlider";
import { TriggerBuilder, type TriggerCondition } from "@/components/citrana/TriggerBuilder";
import { PageHeader } from "@/components/citrana/PageHeader";
import type { AgentType } from "@/lib/store/agents";

const EXAMPLE_INTENTS = [
  "Optimize my ETH portfolio with moderate risk.",
  "Execute DEX swaps when gas is below 20 gwei.",
  "Bridge assets to Arbitrum when fees are low.",
];

export default function IntentStudioPage() {
  const [prompt, setPrompt] = useState("");
  const [risk, setRisk] = useState<"low" | "medium" | "high">("medium");
  const [triggers, setTriggers] = useState<TriggerCondition[]>([
    { type: "gas", label: "Gas below (gwei)", value: "25" },
    { type: "time", label: "Every (hours)", value: "6" },
  ]);
  const [plan, setPlan] = useState<{
    steps: string[];
    estimatedCost: string;
    triggers: string;
    agentType: AgentType;
    riskEvaluation: string;
    networkInteractions: string[];
  } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setPlan(null);
    setTimeout(() => {
      setPlan({
        steps: [
          "Parse intent and select DeFi protocols",
          "Simulate transactions and estimate gas",
          "Set triggers (e.g. gas threshold, time window)",
          "Deploy agent with selected permissions",
        ],
        estimatedCost: "~0.002 ETH",
        triggers: "Gas < 25 gwei, execution every 6h",
        agentType: "defi",
        riskEvaluation:
          risk === "low"
            ? "Low — Conservative execution limits and slippage tolerance."
            : risk === "medium"
              ? "Medium — Balanced execution with standard limits."
              : "High — Aggressive execution; higher reward and risk.",
        networkInteractions: [
          "Ethereum mainnet — DEX swaps, staking",
          "Account abstraction — Gas sponsorship",
          "ZK verifier — Proof submission",
        ],
      });
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <PageHeader
        title="Intent Studio"
        description="Create automation using natural language. The AI converts your intent into an executable workflow."
      />

      <div className="glass-panel rounded-xl p-4 md:p-6">
        <label className="mb-2 block text-sm font-medium text-[hsl(var(--foreground))]">
          Describe your objective
        </label>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="e.g. Optimize my ETH portfolio with moderate risk."
          className="input-focus w-full min-h-[100px] resize-none rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--surface))] px-4 py-3 text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--foreground-subtle))] focus:border-[hsl(var(--primary))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]/20"
          rows={3}
        />
        <div className="mt-2 flex flex-wrap gap-2">
          {EXAMPLE_INTENTS.map((text) => (
            <button
              key={text}
              type="button"
              onClick={() => setPrompt(text)}
              className="rounded-full border border-[hsl(var(--border))] bg-transparent px-3 py-1 text-xs text-[hsl(var(--foreground-muted))] hover:bg-[hsl(var(--surface-hover))] hover:text-[hsl(var(--foreground))]"
            >
              {text}
            </button>
          ))}
        </div>
        <div className="mt-4">
          <RiskSlider value={risk} onChange={(v) => setRisk(v)} />
        </div>
        <div className="mt-4">
          <TriggerBuilder conditions={triggers} onChange={setTriggers} />
        </div>
        <Button
          className="mt-6 gap-2"
          onClick={handleSubmit}
          disabled={loading || !prompt.trim()}
        >
          {loading ? (
            <>
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                className="size-4 rounded-full border-2 border-current border-t-transparent"
              />
              Parsing intent…
            </>
          ) : (
            <>
              <Send className="size-4" />
              Parse intent
            </>
          )}
        </Button>
      </div>

      {plan && (
        <motion.div
          initial={{ opacity: 1, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-panel rounded-xl p-4 md:p-6"
        >
          <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold">
            <Sparkles className="size-5 text-[hsl(var(--primary))]" />
            Structured plan preview
          </h2>
          <ul className="mb-4 space-y-2">
            {plan.steps.map((step, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-[hsl(var(--foreground))]"
              >
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[hsl(var(--primary))]/20 text-xs font-medium text-[hsl(var(--primary))]">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ul>
          <dl className="grid gap-2 text-sm">
            <div className="flex justify-between">
              <dt className="text-[hsl(var(--foreground-muted))]">
                Estimated cost
              </dt>
              <dd>{plan.estimatedCost}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-[hsl(var(--foreground-muted))]">Triggers</dt>
              <dd>{plan.triggers}</dd>
            </div>
          </dl>
          <div className="mt-4 flex items-start gap-2 rounded-lg border border-[hsl(var(--warning))]/20 bg-[hsl(var(--warning))]/5 p-3">
            <AlertTriangle className="mt-0.5 size-4 shrink-0 text-[hsl(var(--warning))]" />
            <div>
              <p className="text-xs font-medium text-[hsl(var(--warning))]">
                Risk evaluation
              </p>
              <p className="mt-0.5 text-sm text-[hsl(var(--foreground))]">
                {plan.riskEvaluation}
              </p>
            </div>
          </div>
          <div className="mt-4">
            <p className="mb-2 flex items-center gap-2 text-xs font-medium text-[hsl(var(--foreground-muted))]">
              <Network className="size-4" />
              Network interactions
            </p>
            <ul className="space-y-1 text-sm text-[hsl(var(--foreground))]">
              {plan.networkInteractions.map((line, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-[hsl(var(--accent))]" />
                  {line}
                </li>
              ))}
            </ul>
          </div>
          <Button className="mt-6 w-full gap-2 soft-glow-primary" size="lg">
            <Zap className="size-4" />
            Deploy agent
          </Button>
        </motion.div>
      )}
    </div>
  );
}
