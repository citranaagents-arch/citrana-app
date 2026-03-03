"use client";

import { ServiceHero } from "@/components/marketing/ServiceHero";
import { ServiceFeatures } from "@/components/marketing/ServiceFeatures";
import { ServiceFAQ } from "@/components/marketing/ServiceFAQ";
import { Activity, Bell, Shield } from "lucide-react";
import Link from "next/link";

const FEATURES = [
  { icon: Activity, title: "Real-time feed", desc: "Live execution feed with timestamps, agent IDs, and status. See what your agents are doing as it happens." },
  { icon: Bell, title: "Condition monitoring", desc: "Gas thresholds, price alerts, time windows. Know when conditions are met and execution is queued." },
  { icon: Shield, title: "Cryptographic proof", desc: "Every completed action can produce a ZK proof. Verify execution validity without exposing private data." },
];

const FAQ = [
  { q: "What appears in the execution feed?", a: "Each line shows timestamp, agent ID, action type, chain, and status. Success, warning, and error badges make it easy to scan." },
  { q: "What is ZK verification?", a: "Zero-knowledge proofs let you prove an action was executed correctly without revealing sensitive details. Trustless verification for automation." },
];

export default function ActivityServicePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <ServiceHero
        title="Live execution. ZK-verified."
        subtitle="Real-time execution feed, condition monitoring, and cryptographic proof. See what your agents do and verify every action."
        ctaText="View Activity"
        ctaHref="/app/activity"
      />
      <ServiceFeatures features={FEATURES} title="Monitor & verify" />
      <ServiceFAQ items={FAQ} />
      <section className="py-10 text-center">
        <Link
          href="/app/activity"
          className="inline-flex items-center gap-2 rounded-xl bg-[hsl(var(--primary))] px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-[hsl(var(--primary))]/90"
        >
          View Activity
        </Link>
      </section>
    </div>
  );
}
