"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

/* Flowing connector path between 4 lifecycle steps (visible on lg+ when cards are in a row) */
const PATH =
  "M 0 20 Q 50 15 100 20 T 200 20 T 300 20 T 400 20";

export function LifecycleLine() {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const reducedMotion = useReducedMotion();

  const shouldDraw = inView && !(reducedMotion ?? false);

  return (
    <svg
      ref={ref}
      viewBox="0 0 400 40"
      className="mx-auto hidden h-10 w-full max-w-2xl overflow-visible px-4 opacity-60 lg:block"
      aria-hidden
    >
      <motion.path
        d={PATH}
        fill="none"
        stroke="hsl(var(--primary) / 0.5)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={1}
        strokeDasharray={1}
        initial={{ strokeDashoffset: 1 }}
        animate={{ strokeDashoffset: shouldDraw ? 0 : 1 }}
        transition={{ duration: reducedMotion ? 0 : 1.2, ease: "easeInOut" }}
      />
    </svg>
  );
}
