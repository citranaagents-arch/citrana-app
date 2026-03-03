"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";

export function MarketingHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <header className="relative z-50 flex items-center justify-between gap-4 px-4 py-5 sm:px-6 lg:px-8">
      <div className="flex items-center gap-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5 font-semibold tracking-tight text-[hsl(var(--foreground))] transition-opacity hover:opacity-90"
        >
          <Image src="/logo.png" alt="Citrana" width={36} height={36} className="size-9 object-contain" priority />
          <span className="text-xl">Citrana</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Main">
          <Link href="/" className="nav-link-underline relative text-sm font-medium text-[hsl(var(--foreground-muted))] hover:text-[hsl(var(--foreground))] transition-colors">
            Home
          </Link>
          <Link href="/services" className="nav-link-underline relative text-sm font-medium text-[hsl(var(--foreground-muted))] hover:text-[hsl(var(--foreground))] transition-colors">
            Services
          </Link>
          <Link href="/about" className="nav-link-underline relative text-sm font-medium text-[hsl(var(--foreground-muted))] hover:text-[hsl(var(--foreground))] transition-colors">
            About
          </Link>
          <Link href="/app/governance" className="nav-link-underline relative text-sm font-medium text-[hsl(var(--foreground-muted))] hover:text-[hsl(var(--foreground))] transition-colors">
            $CITRA
          </Link>
        </nav>
      </div>
      <div className="flex items-center gap-3">
        <Link
          href="/app/dashboard"
          className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-[hsl(var(--primary))] px-4 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-[hsl(var(--primary))]/90 hover:shadow-[0_0_24px_hsl(var(--primary)/0.2)]"
        >
          Get Started
          <ArrowRight className="size-4" />
        </Link>
        <button
          type="button"
          className="md:hidden flex size-10 items-center justify-center rounded-lg text-[hsl(var(--foreground-muted))] hover:bg-[hsl(var(--surface-hover))] hover:text-[hsl(var(--foreground))] transition-colors"
          aria-expanded={mobileOpen}
          aria-label="Open menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[73px] z-40 bg-black/60 md:hidden"
            aria-hidden
            onClick={closeMobile}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed right-0 top-[73px] z-50 flex w-full max-w-[280px] flex-col gap-0 border-l-2 border-white/20 bg-[hsl(222_12%_14%)] p-4 shadow-2xl md:hidden"
            aria-label="Mobile menu"
          >
            <Link href="/" className="rounded-lg px-4 py-3.5 text-base font-medium text-white hover:bg-white/10" onClick={closeMobile}>
              Home
            </Link>
            <Link href="/services" className="rounded-lg px-4 py-3.5 text-base font-medium text-white hover:bg-white/10" onClick={closeMobile}>
              Services
            </Link>
            <Link href="/about" className="rounded-lg px-4 py-3.5 text-base font-medium text-white hover:bg-white/10" onClick={closeMobile}>
              About
            </Link>
            <Link href="/app/governance" className="rounded-lg px-4 py-3.5 text-base font-medium text-white hover:bg-white/10" onClick={closeMobile}>
              $CITRA
            </Link>
            <Link
              href="/app/dashboard"
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-xl bg-[hsl(var(--primary))] px-4 py-3.5 text-base font-semibold text-white sm:hidden"
              onClick={closeMobile}
            >
              Get Started
              <ArrowRight className="size-4" />
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
