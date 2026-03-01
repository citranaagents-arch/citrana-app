"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
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
  Sparkles,
  ChevronDown,
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

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.05 * i },
  }),
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 90, damping: 14 },
  },
};

export default function LandingPage() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[hsl(var(--background))]">
      {/* Animated background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.45]"
        aria-hidden
        style={{
          backgroundImage: `
            radial-gradient(ellipse 90% 60% at 50% -10%, hsl(var(--primary) / 0.18), transparent 50%),
            radial-gradient(ellipse 70% 50% at 85% 50%, hsl(var(--accent) / 0.1), transparent 45%),
            radial-gradient(ellipse 60% 40% at 15% 80%, hsl(var(--primary) / 0.08), transparent 40%)
          `,
        }}
      />
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-[0.35] landing-glow"
        aria-hidden
        style={{
          backgroundImage: `radial-gradient(ellipse 80% 40% at 50% 0%, hsl(var(--primary) / 0.2), transparent 60%)`,
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        aria-hidden
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='0.02' fill-rule='evenodd'%3E%3Cpath d='M24 0h2v2h-2V0zm0 4h2v2h-2V4zm0 4h2v2h-2V8zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zM0 24h2v2H0v-2zm4 0h2v2H4v-2zm4 0h2v2H8v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <header className="relative z-10 flex items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Link
            href="/"
            className="flex items-center gap-2.5 font-semibold tracking-tight text-[hsl(var(--foreground))] transition-opacity hover:opacity-90"
          >
            <motion.span whileHover={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 0.4 }}>
              <Image src="/logo.png" alt="Citrana" width={36} height={36} className="size-9 object-contain" priority />
            </motion.span>
            <span className="text-xl">Citrana</span>
          </Link>
        </motion.div>
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Link
            href="/app/dashboard"
            className="inline-flex items-center gap-2 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))] px-4 py-2.5 text-sm font-medium text-[hsl(var(--foreground))] transition-all duration-200 hover:border-[hsl(var(--primary))]/50 hover:bg-[hsl(var(--surface-hover))] hover:shadow-[0_0_24px_hsl(var(--primary)/0.1)]"
          >
            Open app
            <motion.span
              animate={reducedMotion ? {} : { x: [0, 3, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight className="size-4" />
            </motion.span>
          </Link>
        </motion.div>
      </header>

      <main className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Hero — fits viewport, no cut-off */}
        <motion.section
          id="hero"
          className="landing-section flex min-h-[75vh] flex-col justify-center py-12 sm:py-16 md:py-20 lg:py-24"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={item} className="mb-6 flex justify-center">
            <motion.p
              className="landing-badge-pulse inline-flex items-center gap-2 rounded-full border border-[hsl(var(--primary))]/40 bg-[hsl(var(--primary))]/10 px-4 py-2 text-sm font-medium text-[hsl(var(--primary))]"
              whileHover={{ scale: 1.03, transition: { type: "spring", stiffness: 400, damping: 17 } }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.span
                animate={reducedMotion ? {} : { rotate: [0, 15, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
              >
                <Sparkles className="size-4" />
              </motion.span>
              AI Agent Operating System for Web3
            </motion.p>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-center text-4xl font-bold tracking-tight text-[hsl(var(--foreground))] sm:text-5xl md:text-6xl lg:text-7xl md:leading-[1.08]"
            style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
          >
            <span className="block">Deploy autonomous</span>
            <span className="relative mt-1 inline-block">
              <span className="relative z-10 bg-gradient-to-r from-[hsl(var(--primary))] via-[hsl(var(--primary))]/90 to-[hsl(var(--accent))] bg-clip-text text-transparent">
                intelligence
              </span>
              <motion.span
                className="absolute inset-0 -z-10 rounded-lg bg-[hsl(var(--primary))]/10 blur-xl"
                animate={reducedMotion ? {} : { opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-2xl text-center text-lg leading-relaxed text-[hsl(var(--foreground-muted))] sm:text-xl"
          >
            Citrana is the <strong className="text-[hsl(var(--foreground))]">Intent-Based Execution Layer</strong> for
            Web3. Define intent in plain language—agents plan, execute, and verify on-chain and off-chain, continuously.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link
                href="/app/dashboard"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-[hsl(var(--primary))] px-8 py-3.5 text-base font-semibold text-white shadow-[0_0_32px_hsl(var(--primary)/0.35)] transition-shadow hover:shadow-[0_0_48px_hsl(var(--primary)/0.45)]"
              >
                <span className="relative z-10">Enter Citrana</span>
                <motion.span
                  className="relative z-10 landing-arrow-bounce"
                  initial={false}
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <ArrowRight className="size-5" />
                </motion.span>
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link
                href="/app/intent-studio"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[hsl(var(--border))] bg-[hsl(var(--surface))] px-8 py-3.5 text-base font-medium text-[hsl(var(--foreground))] transition-all duration-200 hover:border-[hsl(var(--primary))]/40 hover:bg-[hsl(var(--surface-hover))] hover:shadow-[0_0_20px_hsl(var(--primary)/0.06)]"
              >
                Try Intent Studio
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-14 flex justify-center"
            initial={reducedMotion ? {} : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.span
              animate={reducedMotion ? {} : { y: [0, 8, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex flex-col items-center gap-1 text-[hsl(var(--foreground-subtle))]"
            >
              <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
              <ChevronDown className="size-5" />
            </motion.span>
          </motion.div>
        </motion.section>

        {/* Positioning — card layout */}
        <motion.section
          id="positioning"
          className="landing-section py-16 sm:py-20 md:py-24"
          initial={reducedMotion ? {} : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--background-card))]/80 px-6 py-8 text-center shadow-lg sm:px-10 sm:py-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--primary))]">
              What Citrana is
            </p>
            <p className="mt-3 text-base font-medium text-[hsl(var(--foreground-subtle))] sm:text-lg">
              Not a wallet. Not a dashboard.
            </p>
            <p className="mt-2 text-xl font-semibold text-[hsl(var(--foreground))] sm:text-2xl">
              An Operating System for autonomous agents.
            </p>
            <p className="mx-auto mt-4 max-w-md text-sm italic text-[hsl(var(--foreground-muted))]">
              The experience: &ldquo;Deploying autonomous intelligence.&rdquo;
            </p>
          </div>
        </motion.section>

        {/* Example intents */}
        <motion.section
          id="intents"
          className="landing-section py-16 sm:py-20 md:py-24"
          initial={reducedMotion ? {} : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-[hsl(var(--foreground-muted))]">
            Define intent. Agents execute.
          </p>
          <h2 className="mt-2 text-center text-2xl font-semibold text-[hsl(var(--foreground))] sm:text-3xl">
            Say it in plain language
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {EXAMPLE_INTENTS.map((text, i) => (
              <motion.span
                key={text}
                initial={reducedMotion ? {} : { opacity: 0, scale: 0.9, y: 12 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ delay: i * 0.07, type: "spring", stiffness: 180, damping: 18 }}
                whileHover={{
                  scale: 1.05,
                  borderColor: "hsl(var(--primary) / 0.5)",
                  boxShadow: "0 0 24px hsl(var(--primary) / 0.12)",
                }}
                className="cursor-default rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--surface))] px-5 py-2.5 text-sm text-[hsl(var(--foreground-muted))] transition-colors hover:bg-[hsl(var(--surface-hover))] hover:text-[hsl(var(--foreground))]"
              >
                &ldquo;{text}&rdquo;
              </motion.span>
            ))}
          </div>
        </motion.section>

        {/* How it works */}
        <motion.section
          id="how-it-works"
          className="landing-section py-16 sm:py-20 md:py-24"
          initial={reducedMotion ? {} : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-[hsl(var(--foreground-muted))]">
            Lifecycle
          </p>
          <h2 className="mt-2 text-center text-2xl font-semibold text-[hsl(var(--foreground))] sm:text-3xl">
            How Citrana works
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-[hsl(var(--foreground-muted))]">
            One flow: intent → deploy → execute → verify.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {LIFECYCLE.map((phase, i) => (
              <motion.article
                key={phase.step}
                initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 90, damping: 16 }}
                whileHover={{
                  y: -6,
                  borderColor: "hsl(var(--primary) / 0.35)",
                  boxShadow: "0 12px 32px rgba(0,0,0,0.28), 0 0 0 1px hsl(var(--primary) / 0.1)",
                }}
                className="group relative rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--background-card))] p-6 text-left transition-all duration-200"
              >
                <motion.span
                  className="absolute -top-2.5 left-6 flex size-7 items-center justify-center rounded-full bg-[hsl(var(--primary))] text-xs font-bold text-white shadow-lg shadow-[hsl(var(--primary))]/30"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {phase.step}
                </motion.span>
                <motion.div
                  className="mt-2 inline-flex size-10 items-center justify-center rounded-xl bg-[hsl(var(--primary))]/15 text-[hsl(var(--primary))]"
                  whileHover={{ scale: 1.08, rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.35 }}
                >
                  <phase.icon className="size-5" />
                </motion.div>
                <h3 className="mt-4 font-semibold text-[hsl(var(--foreground))]">{phase.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[hsl(var(--foreground-muted))]">{phase.desc}</p>
              </motion.article>
            ))}
          </div>
        </motion.section>

        {/* Why Citrana / Features */}
        <motion.section
          id="why-citrana"
          className="landing-section py-16 sm:py-20 md:py-24"
          initial={reducedMotion ? {} : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-[hsl(var(--foreground-muted))]">
            Why choose us
          </p>
          <h2 className="mt-2 text-center text-2xl font-semibold text-[hsl(var(--foreground))] sm:text-3xl">
            Why Citrana
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.label}
                initial={reducedMotion ? {} : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.08, type: "spring", stiffness: 100, damping: 18 }}
                whileHover={{
                  y: -8,
                  borderColor: "hsl(var(--primary) / 0.3)",
                  boxShadow: "0 16px 40px rgba(0,0,0,0.3), 0 0 32px hsl(var(--primary) / 0.08)",
                }}
                className="group rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--background-card))] p-6 text-left transition-all duration-200"
              >
                <motion.div
                  className="inline-flex size-12 items-center justify-center rounded-xl bg-[hsl(var(--primary))]/15 text-[hsl(var(--primary))]"
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <f.icon className="size-6" />
                </motion.div>
                <p className="mt-4 font-semibold text-[hsl(var(--foreground))]">{f.label}</p>
                <p className="mt-1 text-sm leading-relaxed text-[hsl(var(--foreground-muted))]">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Final CTA */}
        <motion.section
          id="cta"
          className="landing-section py-20 sm:py-24 md:py-28"
          initial={reducedMotion ? {} : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--background-card))]/60 px-6 py-12 text-center sm:px-12 sm:py-14">
            <p className="text-lg text-[hsl(var(--foreground-muted))] sm:text-xl">
              Transform blockchain interaction from manual execution into{" "}
              <strong className="text-[hsl(var(--foreground))]">programmable autonomy</strong>.
            </p>
            <motion.div
              className="mt-8"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link
                href="/app/dashboard"
                className="inline-flex items-center gap-2 rounded-xl bg-[hsl(var(--primary))] px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-[hsl(var(--primary))]/30 transition-all hover:bg-[hsl(var(--primary))]/90 hover:shadow-[hsl(var(--primary))]/40"
              >
                Enter Citrana
                <ArrowRight className="size-5" />
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
