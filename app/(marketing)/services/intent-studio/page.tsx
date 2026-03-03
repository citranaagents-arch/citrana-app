"use client";

import { ServiceHero } from "@/components/marketing/ServiceHero";
import { ServiceFeatures } from "@/components/marketing/ServiceFeatures";
import { ServiceFAQ } from "@/components/marketing/ServiceFAQ";
import { MessageSquare, Sliders, Rocket } from "lucide-react";
import Link from "next/link";

const FEATURES = [
  { icon: MessageSquare, title: "Natural language input", desc: "Describe your objective in plain English. The AI parses intent and converts it into executable workflows." },
  { icon: Sliders, title: "Risk & triggers", desc: "Set execution frequency, gas thresholds, time windows, and risk limits. Full control over when and how agents run." },
  { icon: Rocket, title: "Deploy agents", desc: "One-click deploy. Agents run continuously, executing on-chain and off-chain with ZK-verifiable actions." },
];

const FAQ = [
  { q: "What can I automate?", a: "DeFi optimizations, DEX swaps, treasury management, cross-chain bridging, yield strategies, and more. Describe your goal; the AI builds the workflow." },
  { q: "How do risk settings work?", a: "You choose low, medium, or high risk. This controls slippage tolerance, execution limits, and gas sensitivity. Higher risk can mean faster execution with wider parameters." },
  { q: "Is my data private?", a: "Yes. Your intent and agent configurations stay private. Execution proofs can be shared without exposing sensitive data." },
];

export default function IntentStudioServicePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <ServiceHero
        title="Create automation from natural language"
        subtitle="Describe your objective in plain English. The AI converts it into an executable workflow with risk settings and triggers. Deploy agents that run continuously."
        ctaText="Try Intent Studio"
        ctaHref="/app/intent-studio"
      />
      <ServiceFeatures features={FEATURES} title="How it works" />
      <ServiceFAQ items={FAQ} />
      <section className="py-10 text-center">
        <Link
          href="/app/intent-studio"
          className="inline-flex items-center gap-2 rounded-xl bg-[hsl(var(--primary))] px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-[hsl(var(--primary))]/90"
        >
          Try Intent Studio
        </Link>
      </section>
    </div>
  );
}
