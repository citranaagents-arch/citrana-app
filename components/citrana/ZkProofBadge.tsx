"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

interface ZkProofBadgeProps {
  verified: boolean;
  onViewProof?: () => void;
  className?: string;
}

export function ZkProofBadge({
  verified,
  onViewProof,
  className,
}: ZkProofBadgeProps) {
  if (!verified) return null;
  return (
    <motion.button
      type="button"
      onClick={onViewProof}
      initial={{ opacity: 1, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "zk-glow flex shrink-0 items-center gap-1.5 rounded-md border border-[hsl(var(--success))]/30 bg-[hsl(var(--success))]/10 px-2 py-1 text-xs font-medium text-[hsl(var(--success))] transition-colors hover:bg-[hsl(var(--success))]/20",
        className
      )}
    >
      <ShieldCheck className="size-3.5" />
      <span>ZK verified</span>
    </motion.button>
  );
}
