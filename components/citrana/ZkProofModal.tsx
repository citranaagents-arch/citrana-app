"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { X, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

interface ZkProofModalProps {
  open: boolean;
  onClose: () => void;
  proofId?: string;
  txHash?: string;
}

export function ZkProofModal({
  open,
  onClose,
  proofId = "zkp-0x…a1b2",
  txHash = "0x…c3d4e5",
}: ZkProofModalProps) {
  useEffect(() => {
    if (!open) return;
    const onEscape = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onEscape);
    return () => document.removeEventListener("keydown", onEscape);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="ZK proof details"
    >
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 1, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 1, scale: 0.98 }}
        className="zk-glow glass-panel relative max-h-[90vh] w-full max-w-md overflow-auto rounded-xl p-6"
      >
        <div className="flex items-center justify-between">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-[hsl(var(--foreground))]">
            <ShieldCheck className="size-5 text-[hsl(var(--success))]" />
            ZK Proof verification
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1 text-[hsl(var(--foreground-muted))] hover:bg-[hsl(var(--surface-hover))] hover:text-[hsl(var(--foreground))]"
            aria-label="Close"
          >
            <X className="size-5" />
          </button>
        </div>
        <p className="mt-2 text-sm text-[hsl(var(--foreground-muted))]">
          Execution validity proven without exposing private data.
        </p>
        <dl className="mt-4 space-y-3 text-sm">
          <div>
            <dt className="text-[hsl(var(--foreground-muted))]">Proof ID</dt>
            <dd className="mt-0.5 font-mono text-[hsl(var(--foreground))]">
              {proofId}
            </dd>
          </div>
          <div>
            <dt className="text-[hsl(var(--foreground-muted))]">Transaction</dt>
            <dd className="mt-0.5 font-mono text-[hsl(var(--foreground))]">
              {txHash}
            </dd>
          </div>
          <div>
            <dt className="text-[hsl(var(--foreground-muted))]">Status</dt>
            <dd className="mt-0.5 text-[hsl(var(--success))]">Verified</dd>
          </div>
        </dl>
      </motion.div>
    </div>
  );
}
