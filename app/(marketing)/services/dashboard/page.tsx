"use client";

import { ServiceHero } from "@/components/marketing/ServiceHero";
import { ServiceFeatures } from "@/components/marketing/ServiceFeatures";
import { ServiceFAQ } from "@/components/marketing/ServiceFAQ";
import { LayoutDashboard, BarChart3, Bot } from "lucide-react";
import Link from "next/link";

const FEATURES = [
  { icon: LayoutDashboard, title: "Unified view", desc: "See all agents, KPIs, and portfolio in one place. No tab switching, no fragmented dashboards." },
  { icon: BarChart3, title: "KPI tracking", desc: "Assets under automation, active agents, running tasks, success rate, gas saved. Real-time metrics." },
  { icon: Bot, title: "Agent management", desc: "Start, stop, and configure agents. View live execution and verifiable action history." },
];

const FAQ = [
  { q: "What KPIs are tracked?", a: "Assets under automation, active agents, running tasks, execution success rate, and gas saved. All metrics update in real time." },
  { q: "Can I manage multiple agents?", a: "Yes. The dashboard shows all your agents with their status. You can start, stop, and adjust settings from one place." },
];

export default function DashboardServicePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <ServiceHero
        title="One dashboard. All your agents."
        subtitle="Manage agents, view KPIs, portfolio, and live execution in one unified interface. Real-time metrics and verifiable action history."
        ctaText="Open Dashboard"
        ctaHref="/app/dashboard"
      />
      <ServiceFeatures features={FEATURES} title="What you get" />
      <ServiceFAQ items={FAQ} />
      <section className="py-10 text-center">
        <Link
          href="/app/dashboard"
          className="inline-flex items-center gap-2 rounded-xl bg-[hsl(var(--primary))] px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-[hsl(var(--primary))]/90"
        >
          Open Dashboard
        </Link>
      </section>
    </div>
  );
}
