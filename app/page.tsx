"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { MarketingHeader } from "@/components/marketing/MarketingHeader";
import { MarketingFooter } from "@/components/marketing/MarketingFooter";
import { MarqueeSlider } from "@/components/marketing/MarqueeSlider";
import { AmbientBackground } from "@/components/marketing/AmbientBackground";
import { ParallaxBackground } from "@/components/marketing/ParallaxBackground";
import { LifecycleLine } from "@/components/marketing/LifecycleLine";
import {
  ArrowRight,
  Bot,
  Shield,
  Zap,
  Layers,
  MessageSquare,
  Rocket,
  Cpu,
  CheckCircle2,
  ChevronDown,
  Lightbulb,
  LayoutDashboard,
  Activity,
  Landmark,
  Vote,
  TrendingUp,
  ChevronRight,
} from "lucide-react";

const EXAMPLE_INTENTS = [
  "Optimize my portfolio",
  "Execute trades under market conditions",
  "Bridge assets when gas is low",
  "Manage DAO treasury automatically",
];

const LIFECYCLE = [
  { step: 1, icon: MessageSquare, title: "Intent", desc: "Describe objectives in natural language. AI converts intent into executable workflows." },
  { step: 2, icon: Rocket, title: "Deploy", desc: "Set execution frequency, triggers, risk limits & permissions. Agents run continuously." },
  { step: 3, icon: Cpu, title: "Execute", desc: "Agents interact with chains, contracts & APIs—reasoning, monitoring, decision-making." },
  { step: 4, icon: CheckCircle2, title: "Verify", desc: "Every action generates cryptographic proof. ZK ensures transparency & privacy." },
];

const FEATURES = [
  { icon: Bot, label: "Intent-based", desc: "Natural language → executable workflows" },
  { icon: Layers, label: "Multi-agent", desc: "DeFi, trading, treasury, cross-chain" },
  { icon: Shield, label: "ZK-verified", desc: "Every action cryptographically proven" },
  { icon: Zap, label: "Always on", desc: "Agents run even when you're offline" },
];

const PRODUCT_CARDS = [
  { title: "Intent Studio", desc: "Create automation from natural language. Set risk, triggers, deploy agents.", href: "/app/intent-studio", icon: Lightbulb },
  { title: "Agents & Dashboard", desc: "Manage agents, view KPIs, portfolio and live execution.", href: "/app/dashboard", icon: LayoutDashboard },
  { title: "Activity Monitor", desc: "Live execution feed, conditions, alerts and ZK verification.", href: "/app/activity", icon: Activity },
];

const PROBLEM_SOLUTION = [
  { problem: "Manual execution", solution: "Intent-based.", detail: "Define intent; agents execute and verify." },
  { problem: "Fragmented tools", solution: "One OS.", detail: "Dashboard, agents, intent studio, activity, treasury in one place." },
  { problem: "Trust & transparency", solution: "ZK-verified.", detail: "Every action cryptographically proven." },
];

const WHO_FOR = [
  { subtitle: "For DeFi users", title: "DeFi & portfolio", desc: "Automate yield, rebalancing and risk.", href: "/app/intent-studio", icon: Landmark },
  { subtitle: "For DAOs", title: "DAOs & treasury", desc: "Manage treasury and governance with agents.", href: "/app/treasury", icon: Vote },
  { subtitle: "For traders", title: "Traders & researchers", desc: "Execution and monitoring under your conditions.", href: "/app/agents", icon: TrendingUp },
];

const FAQ_ITEMS = [
  { q: "What is Citrana?", a: "Citrana is an AI Agent Operating System for Web3. It lets you define intent in plain language; autonomous agents then plan, execute, and verify on-chain and off-chain tasks continuously." },
  { q: "What is Intent Studio?", a: "Intent Studio is where you describe your objective in natural language. The AI turns it into a structured workflow with risk settings and triggers; you then deploy an agent that runs continuously." },
  { q: "How do agents work?", a: "Agents follow a single lifecycle: you set intent, deploy with frequency and permissions, and they execute against chains and contracts. Every completed action can generate a cryptographic proof (ZK)." },
  { q: "What is ZK verification?", a: "Every completed action can produce a zero-knowledge proof so execution validity is verifiable without exposing private data—giving transparency, privacy, and trustless automation." },
];

const HERO_STATS = [
  { value: "3", label: "Active Agents" },
  { value: "1.2k", label: "Verifiable Actions" },
  { value: "6", label: "Agent Types" },
];

const MARQUEE_ITEMS = ["DeFi Optimizer", "DEX Trader", "Treasury Runner", "Cross-chain Bridge", "Gas Watcher", "Yield Harvester"];
const PARTNER_ITEMS = ["Web3", "ZK Proofs", "Multi-chain", "Intent-based", "Autonomous", "Citrana"];

/* Strong, visible animation variants for every section */
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08 + i * 0.03,
    },
  }),
};
const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 20, mass: 0.8 },
  },
};
const itemVariantsScale = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 150, damping: 22 },
  },
};
const sectionTitleVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 18 },
  },
};
const slideInLeft = {
  hidden: { opacity: 0, x: -48 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 80, damping: 18 } },
};
const slideInRight = {
  hidden: { opacity: 0, x: 48 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 80, damping: 18 } },
};
const scaleBlurIn = {
  hidden: { opacity: 0, scale: 0.94, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 100, damping: 22 },
  },
};
const springTransition = { type: "spring" as const, stiffness: 120, damping: 20 };

export default function LandingPage() {
  const reducedMotion = useReducedMotion();
  const noMotion = reducedMotion ?? false;

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[hsl(var(--background))]">
      <AmbientBackground />
      <ParallaxBackground />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <MarketingHeader />
      </div>

      <main className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Hero — gradient blob + badge → headline word reveal → subtext → stats → CTAs */}
        <section id="hero" className="landing-section relative flex min-h-[70vh] flex-col justify-center pt-6 pb-10 sm:pt-8 sm:pb-12 md:pt-10 md:pb-14">
          <div
            className="pointer-events-none absolute inset-0 -z-[1] flex items-center justify-center overflow-hidden"
            aria-hidden
          >
            <div
              className="h-[400px] w-[600px] rounded-full opacity-[0.12] blur-[120px] animate-gradient-blob"
              style={{
                background: "radial-gradient(circle, hsl(var(--primary) / 0.6) 0%, hsl(var(--accent) / 0.4) 50%, transparent 70%)",
              }}
            />
          </div>
          <motion.div
            initial={noMotion ? false : { opacity: 0, scale: 0.9, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 22 }}
            className="flex justify-center"
          >
            <span className="glass-badge rounded-full border border-[hsl(var(--primary))]/40 bg-[hsl(var(--primary))]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--primary))] backdrop-blur-md">
              Intent Studio live now
            </span>
          </motion.div>
          <h1
            className="mt-4 text-center text-4xl font-bold tracking-tight text-[hsl(var(--foreground))] sm:text-5xl md:text-6xl lg:text-7xl md:leading-[1.06]"
            style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
          >
            {["Define intent.", "Deploy agents.", "Verify execution."].map((phrase, i) => (
              <motion.span
                key={phrase}
                initial={noMotion ? false : { opacity: 0, y: 28, clipPath: "inset(0 100% 0 0)" }}
                animate={{ opacity: 1, y: 0, clipPath: "inset(0 0% 0 0)" }}
                transition={{ type: "spring", stiffness: 90, damping: 20, delay: 0.08 + i * 0.12 }}
                className={i === 1 ? "hero-gradient-text inline-block" : "inline-block"}
              >
                {phrase}
                {i < 2 ? " " : ""}
              </motion.span>
            ))}
          </h1>
          <motion.p
            initial={noMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.14 }}
            className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-[hsl(var(--foreground-muted))] sm:text-lg"
          >
            Use and customize autonomous agents in one place. No complex scripts—define what you want in plain language; agents plan, execute, and verify on-chain and off-chain, continuously.
          </motion.p>

          {/* Stats — animated in with stagger */}
          <motion.div
            initial={noMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-10 sm:gap-16"
          >
            {HERO_STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={noMotion ? false : { opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 180, damping: 22, delay: 0.28 + i * 0.06 }}
                className="text-center"
              >
                <p className="text-3xl font-bold tabular-nums text-[hsl(var(--foreground))] sm:text-4xl">{stat.value}</p>
                <p className="mt-1 text-sm text-[hsl(var(--foreground-muted))]">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={noMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.38 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.96 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
              <Link
                href="/app/dashboard"
                className="btn-primary-glow btn-ripple inline-flex items-center gap-2 rounded-xl bg-[hsl(var(--primary))] px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-[hsl(var(--primary))/0.25] hover:bg-[hsl(var(--primary))]/90"
              >
                Get Started
                <ArrowRight className="size-5" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
              <Link
                href="/app/intent-studio"
                className="btn-ripple inline-flex items-center gap-2 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))] px-8 py-3.5 text-base font-medium text-[hsl(var(--foreground))] transition-all duration-200 hover:border-[hsl(var(--primary))]/40 hover:bg-[hsl(var(--surface-hover))]"
              >
                Try Intent Studio
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* Three pillars — strong stagger + scale + hover lift */}
        <section id="products" className="landing-section py-16 sm:py-20 md:py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px", amount: 0.2 }}
            variants={sectionVariants}
            className="grid gap-6 sm:grid-cols-3"
          >
            {PRODUCT_CARDS.map((card, i) => {
              const CardIcon = card.icon;
              const colors = [ "text-[hsl(var(--primary))]", "text-[hsl(var(--accent))]", "text-[hsl(var(--primary))]" ];
              return (
                <motion.div key={card.title} variants={itemVariants}>
                  <motion.div
                    whileHover={{ y: -10, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  >
                    <Link
                      href={card.href}
                      className="card-hover-glow group flex h-full flex-col rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--background-card))] p-6 sm:p-8 hover:border-[hsl(var(--primary))]/30"
                    >
                      <motion.div whileHover={{ scale: 1.12, rotate: 4 }} transition={{ type: "spring", stiffness: 400, damping: 18 }} className="inline-flex">
                        <CardIcon className={`size-9 ${colors[i]}`} />
                      </motion.div>
                      <h3 className="mt-5 text-lg font-semibold text-[hsl(var(--foreground))] sm:text-xl">{card.title}</h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-[hsl(var(--foreground-muted))]">{card.desc}</p>
                      <span className={`mt-5 inline-flex items-center gap-1 text-sm font-medium ${colors[i]}`}>
                        Open
                        <ChevronRight className="size-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* Positioning strip — scale + blur reveal */}
        <section id="positioning" className="landing-section py-10 sm:py-12">
          <motion.div
            initial={noMotion ? { opacity: 1, scale: 1, filter: "blur(0px)" } : "hidden"}
            whileInView={noMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.3 }}
            variants={scaleBlurIn}
            className="glass-panel-card rounded-2xl border border-[hsl(var(--border))]/80 bg-[hsl(var(--background-card))]/80 px-6 py-8 text-center shadow-lg backdrop-blur-sm sm:px-10 sm:py-10"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--primary))]">What Citrana is</p>
            <p className="mt-3 text-base text-[hsl(var(--foreground-subtle))] sm:text-lg">Not a wallet. Not a dashboard.</p>
            <p className="mt-2 text-xl font-semibold text-[hsl(var(--foreground))] sm:text-2xl">An Operating System for autonomous agents.</p>
            <p className="mx-auto mt-4 max-w-md text-sm italic text-[hsl(var(--foreground-muted))]">The experience: &ldquo;Deploying autonomous intelligence.&rdquo;</p>
          </motion.div>
        </section>

        {/* Example intents — title animate + pills pop in with stagger */}
        <section id="intents" className="landing-section py-12 sm:py-14 md:py-16">
          <motion.p
            initial={noMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springTransition}
            className="text-center text-xs font-semibold uppercase tracking-widest text-[hsl(var(--foreground-muted))]"
          >
            Define intent. Agents execute.
          </motion.p>
          <motion.h2
            initial={noMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springTransition}
            className="mt-2 text-center text-2xl font-semibold text-[hsl(var(--foreground))] sm:text-3xl"
          >
            Say it in plain language
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            {EXAMPLE_INTENTS.map((text) => (
              <motion.span
                key={text}
                variants={itemVariantsScale}
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 400, damping: 18 }}
                className="rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--surface))] px-5 py-2.5 text-sm text-[hsl(var(--foreground-muted))] transition-colors hover:border-[hsl(var(--primary))]/40 hover:bg-[hsl(var(--surface-hover))] hover:text-[hsl(var(--foreground))] cursor-default"
              >
                &ldquo;{text}&rdquo;
              </motion.span>
            ))}
          </motion.div>
        </section>

        {/* The Citrana Ecosystem — section title animate + cards stagger + hover */}
        <section id="ecosystem" className="landing-section py-16 sm:py-20 md:py-24">
          <motion.p
            initial={noMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springTransition}
            className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--foreground-muted))]"
          >
            The Citrana Ecosystem
          </motion.p>
          <motion.h2
            initial={noMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springTransition}
            className="mt-2 text-center text-2xl font-semibold text-[hsl(var(--foreground))] sm:text-3xl"
          >
            Intent-based agent magic
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px", amount: 0.15 }}
            variants={sectionVariants}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {FEATURES.map((f, i) => {
              const useAccent = i % 2 === 1;
              return (
                <motion.div
                  key={f.label}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 280, damping: 22 }}
                  className="card-hover-glow rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--background-card))] p-6"
                >
                  <motion.div whileHover={{ scale: 1.1, rotate: -3 }} transition={{ type: "spring", stiffness: 400, damping: 18 }} className={`inline-flex size-12 items-center justify-center rounded-xl ${useAccent ? "bg-[hsl(var(--accent))]/15 text-[hsl(var(--accent))]" : "bg-[hsl(var(--primary))]/15 text-[hsl(var(--primary))]"}`}>
                    <f.icon className="size-6" />
                  </motion.div>
                  <h3 className="mt-4 text-base font-semibold text-[hsl(var(--foreground))]">{f.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[hsl(var(--foreground-muted))]">{f.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* How it works — title animate + staggered lifecycle cards + hover */}
        <section id="how-it-works" className="landing-section py-16 sm:py-20 md:py-24">
          <motion.p
            initial={noMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springTransition}
            className="text-center text-xs font-semibold uppercase tracking-widest text-[hsl(var(--foreground-muted))]"
          >
            Lifecycle
          </motion.p>
          <motion.h2
            initial={noMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springTransition}
            className="mt-2 text-center text-2xl font-semibold text-[hsl(var(--foreground))] sm:text-3xl"
          >
            How Citrana works
          </motion.h2>
          <motion.p
            initial={noMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springTransition}
            className="mx-auto mt-3 max-w-xl text-center text-sm text-[hsl(var(--foreground-muted))]"
          >
            One flow: intent → deploy → execute → verify.
          </motion.p>
          <LifecycleLine />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px", amount: 0.2 }}
            variants={sectionVariants}
            className="mt-6 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4"
          >
            {LIFECYCLE.map((phase) => (
              <motion.article
                key={phase.step}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className="card-hover-glow relative rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--background-card))] p-6"
              >
                <span className="absolute -top-2.5 left-6 flex size-7 items-center justify-center rounded-full bg-[hsl(var(--primary))] text-xs font-bold text-white">
                  {phase.step}
                </span>
                <motion.div whileHover={{ scale: 1.15 }} transition={{ type: "spring", stiffness: 400, damping: 18 }} className="mt-2 inline-flex size-10 items-center justify-center rounded-xl bg-[hsl(var(--primary))]/15 text-[hsl(var(--primary))]">
                  <phase.icon className="size-5" />
                </motion.div>
                <h3 className="mt-4 font-semibold text-[hsl(var(--foreground))]">{phase.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[hsl(var(--foreground-muted))]">{phase.desc}</p>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <motion.div
          initial={noMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={springTransition}
          className="landing-section"
        >
          <MarqueeSlider items={MARQUEE_ITEMS} label="Agent Types" speed={28} />
          <MarqueeSlider items={PARTNER_ITEMS} label="Powered by" speed={35} />
        </motion.div>

        {/* Real challenges — title animate + alternating slide-in rows */}
        <section id="problem-solution" className="landing-section py-16 sm:py-20 md:py-24">
          <motion.h2
            initial={noMotion ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springTransition}
            className="text-center text-2xl font-semibold text-[hsl(var(--foreground))] sm:text-3xl"
          >
            Real challenges. Smarter solutions.
          </motion.h2>
          <motion.p
            initial={noMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springTransition}
            className="mx-auto mt-3 max-w-2xl text-center text-sm text-[hsl(var(--foreground-muted))]"
          >
            AI and Web3 are powerful; using them shouldn&apos;t be manual, fragmented, or opaque. Here&apos;s how Citrana makes it better.
          </motion.p>
          <div className="mt-14 space-y-8">
            {PROBLEM_SOLUTION.map((row, i) => (
              <motion.div
                key={row.problem}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px", amount: 0.25 }}
                variants={i % 2 === 0 ? slideInLeft : slideInRight}
                className={`grid gap-8 rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--background-card))] p-6 sm:grid-cols-2 sm:items-center sm:p-8 ${i % 2 === 1 ? "sm:flex-row-reverse" : ""}`}
              >
                <div className={i % 2 === 1 ? "sm:order-2" : ""}>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-[hsl(var(--foreground-subtle))]">{row.problem}</h4>
                  <p className="mt-2 text-xl font-semibold text-[hsl(var(--accent))]">{row.solution}</p>
                </div>
                <p className={`text-sm leading-relaxed text-[hsl(var(--foreground-muted))] sm:text-base ${i % 2 === 1 ? "sm:order-1" : ""}`}>{row.detail}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Who is it for? — title animate + cards stagger + hover lift */}
        <section id="who-for" className="landing-section py-16 sm:py-20 md:py-24">
          <motion.h2
            initial={noMotion ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springTransition}
            className="text-center text-2xl font-semibold text-[hsl(var(--foreground))] sm:text-3xl"
          >
            Who is it for?
          </motion.h2>
          <motion.p
            initial={noMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springTransition}
            className="mx-auto mt-3 max-w-xl text-center text-sm text-[hsl(var(--foreground-muted))]"
          >
            Citrana brings intent-based automation to everyone—from DeFi users to DAOs to traders.
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px", amount: 0.2 }}
            variants={sectionVariants}
            className="mt-12 grid gap-6 sm:grid-cols-3"
          >
            {WHO_FOR.map((audience, i) => {
              const useAccent = i === 1;
              return (
                <motion.div key={audience.title} variants={itemVariants}>
                  <motion.div whileHover={{ y: -10, scale: 1.02 }} transition={{ type: "spring", stiffness: 280, damping: 22 }}>
                    <Link
                      href={audience.href}
                      className="card-hover-glow flex h-full flex-col rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--background-card))] p-6 sm:p-8 hover:border-[hsl(var(--primary))]/30"
                    >
                      <p className="text-xs font-semibold uppercase tracking-wider text-[hsl(var(--foreground-muted))]">{audience.subtitle}</p>
                      <audience.icon className={`mt-4 size-9 ${useAccent ? "text-[hsl(var(--accent))]" : "text-[hsl(var(--primary))]"}`} />
                      <h3 className="mt-4 text-lg font-semibold text-[hsl(var(--foreground))]">{audience.title}</h3>
                      <p className="mt-2 flex-1 text-sm text-[hsl(var(--foreground-muted))]">{audience.desc}</p>
                      <span className={`mt-5 inline-flex items-center gap-1 text-sm font-medium ${useAccent ? "text-[hsl(var(--accent))]" : "text-[hsl(var(--primary))]"}`}>
                        Explore
                        <ChevronRight className="size-4" />
                      </span>
                    </Link>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* FAQ — title animate + staggered accordion */}
        <section id="faq" className="landing-section py-16 sm:py-20 md:py-24">
          <motion.h2
            initial={noMotion ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springTransition}
            className="text-center text-2xl font-semibold text-[hsl(var(--foreground))] sm:text-3xl"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={noMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springTransition}
            className="mx-auto mt-2 max-w-lg text-center text-sm text-[hsl(var(--foreground-muted))]"
          >
            Find answers to common questions about Citrana.
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px", amount: 0.2 }}
            variants={sectionVariants}
            className="mx-auto mt-10 max-w-2xl space-y-3"
          >
            {FAQ_ITEMS.map((faq, i) => (
              <motion.div key={faq.q} variants={itemVariants}>
                <details
                  className="group rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--background-card))] px-5 transition-all duration-200 hover:border-[hsl(var(--primary))]/20 [&[open]]:border-[hsl(var(--accent))]/30 [&[open]]:shadow-lg"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-left font-medium text-[hsl(var(--foreground))] focus:outline-none">
                    {faq.q}
                    <ChevronDown className="size-5 shrink-0 text-[hsl(var(--foreground-muted))] transition-transform duration-200 group-open:rotate-180 group-open:text-[hsl(var(--accent))]" />
                  </summary>
                  <p className="border-t border-[hsl(var(--border))] pb-4 pt-2 text-sm leading-relaxed text-[hsl(var(--foreground-muted))]">{faq.a}</p>
                </details>
              </motion.div>
            ))}
          </motion.div>
          <p className="mt-6 text-center text-sm text-[hsl(var(--foreground-muted))]">
            Didn&apos;t find an answer?{" "}
            <a href="#" className="font-medium text-[hsl(var(--primary))] hover:underline">Contact us</a>.
          </p>
        </section>

        {/* Final CTA — scale + fade in + button hover */}
        <section id="cta" className="landing-section py-16 sm:py-20 md:py-24">
          <motion.div
            initial={noMotion ? false : { opacity: 0, y: 36, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--background-card))]/90 px-6 py-14 text-center shadow-xl sm:px-12 sm:py-16"
          >
            <h2 className="text-xl font-semibold text-[hsl(var(--foreground))] sm:text-2xl">Your intent-based AI partner for Web3</h2>
            <p className="mt-3 text-base text-[hsl(var(--foreground-muted))] sm:text-lg">
              Transform blockchain interaction from manual execution into{" "}
              <strong className="text-[hsl(var(--foreground))]">programmable autonomy</strong>.
            </p>
            <motion.div className="mt-8" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.96 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
              <Link
                href="/app/dashboard"
                className="btn-primary-glow btn-ripple inline-flex items-center gap-2 rounded-xl bg-[hsl(var(--primary))] px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-[hsl(var(--primary))]/30 hover:bg-[hsl(var(--primary))]/90"
              >
                Enter Citrana
                <ArrowRight className="size-5" />
              </Link>
            </motion.div>
          </motion.div>
        </section>

        <MarketingFooter />
      </main>
    </div>
  );
}
