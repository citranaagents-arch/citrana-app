"use client";

import { motion } from "framer-motion";
import { Landmark, TrendingUp, Zap, Bot, PieChart } from "lucide-react";
import { KpiCard } from "@/components/citrana/KpiCard";

const chains = [
  { name: "Ethereum", balance: "$78,240", change: "+1.8%", color: "hsl(var(--primary))" },
  { name: "Arbitrum", balance: "$32,100", change: "+3.2%", color: "hsl(var(--accent))" },
  { name: "Base", balance: "$14,240", change: "+0.9%", color: "hsl(var(--warning))" },
];

const allocation = [
  { label: "ETH", value: 42, color: "hsl(var(--primary))" },
  { label: "USDC", value: 28, color: "hsl(var(--accent))" },
  { label: "WBTC", value: 18, color: "hsl(var(--warning))" },
  { label: "Other", value: 12, color: "hsl(var(--foreground-muted))" },
];

const performancePoints = [118, 122, 119, 126, 121, 132, 124];
const performanceLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const agentContributions = [
  { name: "DeFi Optimizer", type: "DeFi", roi: "+5.2%", share: "41%" },
  { name: "DEX Trader", type: "Trading", roi: "+3.8%", share: "30%" },
  { name: "Treasury Runner", type: "Treasury", roi: "+2.1%", share: "16%" },
  { name: "Cross-chain Bridge", type: "Cross-Chain", roi: "+1.7%", share: "13%" },
];

export default function TreasuryPage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-semibold tracking-tight text-[hsl(var(--foreground))] md:text-3xl">
          Treasury
        </h1>
        <p className="mt-1 text-[hsl(var(--foreground-muted))]">
          Portfolio and asset overview across chains.
        </p>
      </header>

      <section>
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[hsl(var(--foreground-muted))]">
          Total assets
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <KpiCard label="Total balance" value="$124,580" index={0} />
          <KpiCard label="7d change" value="+2.4%" sublabel="vs last week" index={1} />
          <KpiCard label="Automation ROI" value="+12.8%" sublabel="30d" index={2} />
          <KpiCard label="Smart wallets" value="2" sublabel="Active" index={3} />
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[hsl(var(--foreground-muted))]">
          Balances by chain
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {chains.map((chain, i) => (
            <motion.div
              key={chain.name}
              initial={{ opacity: 1, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: i * 0.05 }}
              className="glass-panel flex items-center gap-4 rounded-xl p-5"
            >
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[hsl(var(--primary))]/15 text-[hsl(var(--primary))]">
                <Landmark className="size-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-[hsl(var(--foreground))]">{chain.name}</p>
                <p className="text-xl font-semibold">{chain.balance}</p>
                <p className="text-xs text-[hsl(var(--success))]">{chain.change}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="grid gap-6 lg:grid-cols-2">
        <motion.section
          initial={{ opacity: 1, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, delay: 0.1 }}
          className="glass-panel rounded-xl p-5"
        >
          <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[hsl(var(--foreground-muted))]">
            <PieChart className="size-4" />
            Asset allocation
          </h2>
          <p className="mt-2 text-2xl font-semibold text-[hsl(var(--foreground))]">$124,580</p>
          <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row sm:items-center">
            <div
              className="size-36 shrink-0 rounded-full border-4 border-[hsl(var(--surface))]"
              style={{
                background: `conic-gradient(${allocation.map((a, i) => {
                  const start = allocation.slice(0, i).reduce((s, x) => s + x.value, 0);
                  return `${a.color} ${start}% ${start + a.value}%`;
                }).join(", ")})`,
              }}
            />
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[hsl(var(--foreground-muted))]">
              {allocation.map((item) => (
                <span key={item.label} className="flex items-center gap-1.5">
                  <span className="size-2 rounded-full" style={{ backgroundColor: item.color }} />
                  {item.label} {item.value}%
                </span>
              ))}
            </div>
          </div>
          <div className="mt-4 flex h-2 w-full overflow-hidden rounded-full bg-[hsl(var(--surface))]">
            {allocation.map((item) => (
              <div
                key={item.label}
                className="h-full first:rounded-l-full last:rounded-r-full"
                style={{ width: item.value + "%", backgroundColor: item.color }}
              />
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 1, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, delay: 0.15 }}
          className="glass-panel rounded-xl p-5"
        >
          <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[hsl(var(--foreground-muted))]">
            <TrendingUp className="size-4" />
            Performance (7d) — line
          </h2>
          <div className="mt-4 h-24 w-full">
            <svg viewBox="0 0 280 80" className="h-full w-full" preserveAspectRatio="none">
              <polyline
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                points={performancePoints
                  .map((v, i) => {
                    const x = (i / (performancePoints.length - 1)) * 280;
                    const min = Math.min(...performancePoints);
                    const max = Math.max(...performancePoints);
                    const y = 70 - ((v - min) / (max - min || 1)) * 60;
                    return `${x},${y}`;
                  })
                  .join(" ")}
              />
            </svg>
          </div>
          <div className="mt-1 flex justify-between text-xs text-[hsl(var(--foreground-subtle))]">
            {performanceLabels.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </div>
          <p className="mt-2 text-xs text-[hsl(var(--foreground-subtle))]">Portfolio value over last 7 days</p>
        </motion.section>
      </div>

      <section>
        <h2 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[hsl(var(--foreground-muted))]">
          <Bot className="size-4" />
          Agent contribution breakdown
        </h2>
        <motion.div
          initial={{ opacity: 1, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, delay: 0.2 }}
          className="glass-panel overflow-hidden rounded-xl"
        >
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[hsl(var(--border))] text-left text-xs font-medium uppercase tracking-wider text-[hsl(var(--foreground-muted))]">
                <th className="px-4 py-3">Agent</th>
                <th className="px-4 py-3">Type</th>
                <th className="px-4 py-3 text-right">ROI (30d)</th>
                <th className="px-4 py-3 text-right">Share of automation</th>
              </tr>
            </thead>
            <tbody className="text-[hsl(var(--foreground))]">
              {agentContributions.map((row) => (
                <tr key={row.name} className="border-b border-[hsl(var(--border))]/50 last:border-0">
                  <td className="px-4 py-3 font-medium">{row.name}</td>
                  <td className="px-4 py-3 text-[hsl(var(--foreground-muted))]">{row.type}</td>
                  <td className="px-4 py-3 text-right text-[hsl(var(--success))]">{row.roi}</td>
                  <td className="px-4 py-3 text-right">{row.share}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </section>
    </div>
  );
}
