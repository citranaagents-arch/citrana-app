"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

const variants = {
  initial: { opacity: 1, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 1, y: -4 },
};

const reducedVariants = {
  initial: { opacity: 1, y: 0 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 1, y: 0 },
};

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reduced = useReducedMotion();
  return (
    <motion.div
      key={pathname}
      initial={reduced ? "animate" : "initial"}
      animate="animate"
      exit={reduced ? "animate" : "exit"}
      variants={reduced ? reducedVariants : variants}
      transition={
        reduced
          ? { duration: 0 }
          : { duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }
      }
      className="min-h-0 min-w-0 flex-1"
    >
      {children}
    </motion.div>
  );
}
