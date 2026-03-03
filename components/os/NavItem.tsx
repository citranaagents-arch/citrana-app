"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface NavItemProps {
  href: string;
  label: string;
  icon: LucideIcon;
}

export function NavItem({ href, label, icon: Icon }: NavItemProps) {
  const pathname = usePathname();
  const isActive =
    pathname === href || (href !== "/" && href !== "/app" && pathname.startsWith(href));

  return (
    <Link
      href={href}
      className={cn(
        "relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
        isActive
          ? "text-[hsl(var(--primary))]"
          : "text-[hsl(var(--foreground-muted))] hover:bg-[hsl(var(--surface-hover))] hover:text-[hsl(var(--foreground))]"
      )}
    >
      {isActive && (
        <motion.span
          layoutId="nav-active"
          className="absolute inset-0 rounded-lg bg-[hsl(var(--primary))]/10"
          transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
        />
      )}
      <span className="relative z-10 flex items-center gap-3">
        <Icon className="size-5 shrink-0" strokeWidth={1.8} />
        <span>{label}</span>
      </span>
    </Link>
  );
}
