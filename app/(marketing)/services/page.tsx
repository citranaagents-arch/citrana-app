"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Lightbulb, LayoutDashboard, Activity } from "lucide-react";

const SERVICES = [
  {
    title: "Intent Studio",
    href: "/app/intent-studio",
    desc: "Create automation from natural language. Set risk, triggers, and deploy agents that run continuously.",
    icon: Lightbulb,
  },
  {
    title: "Dashboard",
    href: "/app/dashboard",
    desc: "Manage agents, view KPIs, portfolio, and live execution in one place.",
    icon: LayoutDashboard,
  },
  {
    title: "Activity Monitor",
    href: "/app/activity",
    desc: "Live execution feed, conditions, alerts, and ZK verification for every action.",
    icon: Activity,
  },
];

export default function ServicesPage() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <motion.section
        initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="flex min-h-[40vh] flex-col justify-center py-14 sm:py-16 md:py-20"
      >
        <h1 className="text-center text-3xl font-bold tracking-tight text-[hsl(var(--foreground))] sm:text-4xl md:text-5xl" style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}>
          Services
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-[hsl(var(--foreground-muted))]">
          Intent-based agent tools: define what you want in plain language, deploy agents, and verify execution.
        </p>
      </motion.section>

      <motion.section
        initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35 }}
        className="py-10 sm:py-12"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.href}
                initial={reducedMotion ? {} : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="group rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--background-card))] p-6 transition-shadow hover:border-[hsl(var(--primary))]/30 hover:shadow-lg"
              >
                <div className="inline-flex size-12 items-center justify-center rounded-xl bg-[hsl(var(--primary))]/15 text-[hsl(var(--primary))]">
                  <Icon className="size-6" />
                </div>
                <h2 className="mt-4 text-xl font-semibold text-[hsl(var(--foreground))]">{s.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-[hsl(var(--foreground-muted))]">{s.desc}</p>
                <Link
                  href={s.href}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[hsl(var(--primary))] transition-colors hover:text-[hsl(var(--primary))]/90"
                >
                  Open
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      <motion.section
        initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-10 text-center"
      >
        <p className="text-[hsl(var(--foreground-muted))]">Ready to get started?</p>
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
