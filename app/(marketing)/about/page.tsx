"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const STATS = [
  { value: "3", label: "Active Agents" },
  { value: "1.2k", label: "Verifiable Actions" },
  { value: "6", label: "Agent Types" },
];

const HISTORY = [
  { year: "2023", text: "Citrana was conceived from a simple insight: Web3 automation should be intent-based. Define what you want; agents figure out how to do it." },
  { year: "2024", text: "We built Intent Studio, the natural-language layer for agent creation. Risk settings, triggers, and ZK verification became core to the stack." },
  { year: "2025", text: "The full Citrana OS launched: Dashboard, Activity Monitor, Treasury, and Marketplace. One platform for intent-based Web3 automation." },
];

const ROADMAP = [
  {
    phase: "Phase 1",
    title: "Foundation",
    items: ["Intent Studio launch", "ZK verification pipeline", "Multi-chain support", "Agent marketplace"],
  },
  {
    phase: "Phase 2",
    title: "Scale",
    items: ["DAO treasury integration", "Governance token $CITRA", "API access", "Analytics dashboard"],
  },
  {
    phase: "Phase 3",
    title: "Ecosystem",
    items: ["Third-party agent plugins", "Institutional features", "Cross-chain orchestration", "Community governance"],
  },
];

export default function AboutPage() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      {/* Hero */}
      <motion.section
        initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="flex min-h-[45vh] flex-col justify-center py-14 sm:py-16 md:py-20"
      >
        <h1 className="text-center text-3xl font-bold tracking-tight text-[hsl(var(--foreground))] sm:text-4xl md:text-5xl" style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}>
          The Citrana Team
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-[hsl(var(--foreground-muted))]">
          Intent-based Web3 automation for everyone. Define what you want—agents execute and verify.
        </p>
      </motion.section>

      {/* Vision */}
      <motion.section
        initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35 }}
        className="py-10 sm:py-12"
      >
        <h2 className="text-center text-2xl font-semibold text-[hsl(var(--foreground))]">Our Vision</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-[hsl(var(--foreground-muted))]">
          At Citrana, we believe Web3 automation should be as simple as stating your intent. No complex scripts, no fragmented tools. You describe objectives in plain language; autonomous agents plan, execute, and verify on-chain and off-chain—continuously.
        </p>
      </motion.section>

      {/* Stats */}
      <motion.section
        initial={reducedMotion ? {} : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35 }}
        className="py-10 sm:py-12"
      >
        <div className="flex flex-wrap justify-center gap-12">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl font-bold text-[hsl(var(--foreground))] sm:text-3xl">{s.value}</p>
              <p className="mt-0.5 text-sm text-[hsl(var(--foreground-muted))]">{s.label}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* History */}
      <motion.section
        initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35 }}
        className="py-10 sm:py-12"
      >
        <h2 className="text-center text-2xl font-semibold text-[hsl(var(--foreground))]">Our History</h2>
        <div className="mt-8 space-y-6">
          {HISTORY.map((h, i) => (
            <motion.div
              key={h.year}
              initial={reducedMotion ? {} : { opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--background-card))] p-5"
            >
              <span className="text-sm font-semibold text-[hsl(var(--primary))]">{h.year}</span>
              <p className="mt-2 text-[hsl(var(--foreground-muted))]">{h.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Roadmap */}
      <motion.section
        initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35 }}
        className="py-10 sm:py-12"
      >
        <h2 className="text-center text-2xl font-semibold text-[hsl(var(--foreground))]">Our Roadmap</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {ROADMAP.map((r, i) => (
            <motion.div
              key={r.phase}
              initial={reducedMotion ? {} : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--background-card))] p-5"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-[hsl(var(--primary))]">{r.phase}</p>
              <h3 className="mt-2 font-semibold text-[hsl(var(--foreground))]">{r.title}</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-[hsl(var(--foreground-muted))]">
                {r.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-[hsl(var(--accent))]" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-10 text-center"
      >
        <p className="text-[hsl(var(--foreground-muted))]">Join the community.</p>
        <Link
          href="/app/dashboard"
          className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[hsl(var(--primary))] px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-[hsl(var(--primary))]/90"
        >
          Get Started
          <ArrowRight className="size-5" />
        </Link>
      </motion.section>
    </div>
  );
}
