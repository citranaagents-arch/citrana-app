"use client";

import Image from "next/image";
import Link from "next/link";
import { Wallet, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TopbarProps {
  onMenuClick: () => void;
}

export function Topbar({ onMenuClick }: TopbarProps) {
  return (
    <header className="sticky top-0 z-30 flex h-14 shrink-0 items-center justify-between border-b border-[hsl(var(--border))] bg-[hsl(var(--background-elevated))] px-4">
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={onMenuClick}
          className="flex size-10 shrink-0 items-center justify-center rounded-lg text-[hsl(var(--foreground))] hover:bg-[hsl(var(--surface-hover))] lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="size-5" />
        </button>
        <Link
          href="/app/dashboard"
          className="flex items-center gap-2.5 text-sm text-[hsl(var(--foreground-muted))] hover:text-[hsl(var(--foreground))]"
        >
          <Image
            src="/logo.png"
            alt="Citrana"
            width={28}
            height={28}
            className="size-7 shrink-0 object-contain"
          />
          <span>AI Agent OS</span>
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="secondary" size="sm" className="gap-2">
          <Wallet className="size-4" />
          Connect wallet
        </Button>
      </div>
    </header>
  );
}
