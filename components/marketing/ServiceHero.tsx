"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
}

export function ServiceHero({ title, subtitle, ctaText, ctaHref }: ServiceHeroProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.section
      initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="flex min-h-[50vh] flex-col justify-center py-14 sm:py-16 md:py-20"
    >
      <h1 className="text-center text-3xl font-bold tracking-tight text-[hsl(var(--foreground))] sm:text-4xl md:text-5xl lg:text-6xl" style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}>
        {title}
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-[hsl(var(--foreground-muted))]">
        {subtitle}
      </p>
      <motion.div
        initial={reducedMotion ? {} : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.1 }}
        className="mt-8 flex justify-center"
      >
        <Link
          href={ctaHref}
          className="inline-flex items-center gap-2 rounded-xl bg-[hsl(var(--primary))] px-6 py-3 text-base font-semibold text-white transition-all duration-200 hover:bg-[hsl(var(--primary))]/90 hover:shadow-[0_0_32px_hsl(var(--primary)/0.3)]"
        >
          {ctaText}
          <ArrowRight className="size-5" />
        </Link>
      </motion.div>
    </motion.section>
  );
}
