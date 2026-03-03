"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "framer-motion";

export function ParallaxBackground() {
  const reducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const parallaxAmount = (reducedMotion ?? false) ? 0 : -120;
  const y = useTransform(scrollY, [0, 800], [0, parallaxAmount]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 -z-10"
      style={{ y }}
      aria-hidden
    >
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 90% 60% at 50% -10%, hsl(var(--primary) / 0.15), transparent 50%),
            radial-gradient(ellipse 70% 50% at 85% 50%, hsl(var(--accent) / 0.1), transparent 45%),
            radial-gradient(ellipse 60% 40% at 15% 80%, hsl(var(--accent) / 0.06), transparent 40%)
          `,
        }}
      />
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='0.02' fill-rule='evenodd'%3E%3Cpath d='M24 0h2v2h-2V0zm0 4h2v2h-2V4zm0 4h2v2h-2V8zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
    </motion.div>
  );
}

