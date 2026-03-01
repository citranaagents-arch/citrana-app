"use client";

import { motion } from "framer-motion";
import { Download, BarChart3, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";

const modules = [
  { id: "1", name: "Yield Farming Strategy", description: "Auto-rotates liquidity across top pools for optimal APY.", risk: "medium", strategy: "Rebalance when APY delta > 2%.", rating: 4.8, installs: "2.4k", simulationPnl: "+18.2% (90d backtest)" },
  { id: "2", name: "Arbitrage Agent", description: "Monitors DEX price gaps and executes arb when spread exceeds threshold.", risk: "low", strategy: "Gas < 25 gwei; min profit 0.1%.", rating: 4.6, installs: "1.8k", simulationPnl: "+8.1% (90d backtest)" },
  { id: "3", name: "Auto-Compounder", description: "Compounds staking and LP rewards on a schedule.", risk: "low", strategy: "Daily or when rewards > $50.", rating: 4.9, installs: "3.1k", simulationPnl: "+12.4% (90d backtest)" },
  { id: "4", name: "DAO Payroll Agent", description: "Executes recurring payments from treasury to contributors.", risk: "medium", strategy: "Time-based + approval workflow.", rating: 4.5, installs: "892", simulationPnl: "N/A (operational)" },
];

export default function MarketplacePage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-semibold tracking-tight text-[hsl(var(--foreground))] md:text-3xl">Agent Marketplace</h1>
        <p className="mt-1 text-[hsl(var(--foreground-muted))]">Install prebuilt automation modules.</p>
      </header>
      <section>
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[hsl(var(--foreground-muted))]">Featured modules</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {modules.map((mod, i) => (
            <motion.article
              key={mod.id}
              initial={{ opacity: 1, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: i * 0.05 }}
              className="glass-panel flex flex-col rounded-xl p-5 transition-shadow hover:shadow-lg hover:shadow-[hsl(var(--primary))]/5"
            >
              <div className="flex items-start gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[hsl(var(--primary))]/15 text-[hsl(var(--primary))]">
                  <BarChart3 className="size-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-[hsl(var(--foreground))]">{mod.name}</h3>
                  <p className="mt-1 text-sm text-[hsl(var(--foreground-muted))]">{mod.description}</p>
                  <p className="mt-2 text-xs text-[hsl(var(--foreground-subtle))]">{mod.strategy}</p>
                  <p className="mt-2 flex items-center gap-1.5 text-xs text-[hsl(var(--accent))]">
                    <LineChart className="size-3.5" />
                    Historical simulation: {mod.simulationPnl}
                  </p>
                </div>
                <span className={"shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium " + (mod.risk === "low" ? "bg-[hsl(var(--success))]/20 text-[hsl(var(--success))]" : "bg-[hsl(var(--warning))]/20 text-[hsl(var(--warning))]")}>
                  {mod.risk} risk
                </span>
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-[hsl(var(--border))]/50 pt-4">
                <div className="flex items-center gap-3 text-sm text-[hsl(var(--foreground-muted))]">
                  <span>★ {mod.rating}</span>
                  <span>{mod.installs} installs</span>
                </div>
                <Button size="sm" className="gap-2">
                  <Download className="size-4" />
                  Install
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}
