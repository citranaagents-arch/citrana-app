"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

interface ServiceFeaturesProps {
  features: Feature[];
  title?: string;
}

export function ServiceFeatures({ features, title = "Features" }: ServiceFeaturesProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.section
      initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.35 }}
      className="py-10 sm:py-12 md:py-14"
    >
      <h2 className="text-center text-2xl font-semibold text-[hsl(var(--foreground))] sm:text-3xl">
        {title}
      </h2>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <motion.div
              key={f.title}
              initial={reducedMotion ? {} : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--background-card))] p-6 transition-shadow hover:border-[hsl(var(--primary))]/30 hover:shadow-lg"
            >
              <div className="inline-flex size-12 items-center justify-center rounded-xl bg-[hsl(var(--primary))]/15 text-[hsl(var(--primary))]">
                <Icon className="size-6" />
              </div>
              <h3 className="mt-4 font-semibold text-[hsl(var(--foreground))]">{f.title}</h3>
              <p className="mt-2 text-sm text-[hsl(var(--foreground-muted))]">{f.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
