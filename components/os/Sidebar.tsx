"use client";

import Link from "next/link";
import Image from "next/image";
import {
  LayoutDashboard,
  Bot,
  Lightbulb,
  Activity,
  X,
  Landmark,
  Store,
  Vote,
  Settings,
  Home,
} from "lucide-react";
import { NavItem } from "./NavItem";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/app/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/app/agents", label: "Agents", icon: Bot },
  { href: "/app/intent-studio", label: "Intent Studio", icon: Lightbulb },
  { href: "/app/activity", label: "Activity Monitor", icon: Activity },
  { href: "/app/treasury", label: "Treasury", icon: Landmark },
  { href: "/app/marketplace", label: "Marketplace", icon: Store },
  { href: "/app/governance", label: "Governance", icon: Vote },
  { href: "/app/settings", label: "Settings", icon: Settings },
];

interface SidebarProps {
  mobileOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ mobileOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/70 lg:hidden",
          mobileOpen ? "block" : "hidden"
        )}
        onClick={onClose}
        aria-hidden
      />
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-40 flex h-full w-64 flex-col border-r border-[hsl(var(--border))] bg-[hsl(var(--background-elevated))] transition-transform duration-200 ease-out lg:translate-x-0",
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-14 items-center justify-between border-b border-[hsl(var(--border))] px-4">
          <Link
            href="/app/dashboard"
            className="flex items-center gap-2.5 font-semibold tracking-tight text-[hsl(var(--foreground))]"
            onClick={onClose}
          >
            <Image
              src="/logo.png"
              alt="Citrana"
              width={32}
              height={32}
              className="size-8 shrink-0 object-contain"
              priority
            />
            <span>Citrana</span>
          </Link>
          <button
            type="button"
            onClick={onClose}
            className="flex size-9 items-center justify-center rounded-lg text-[hsl(var(--foreground-muted))] hover:bg-[hsl(var(--surface-hover))] lg:hidden"
            aria-label="Close menu"
          >
            <X className="size-5" />
          </button>
        </div>
        <nav className="sidebar-nav-scroll flex-1 space-y-1 overflow-y-auto p-3">
          {navItems.map((item) => (
            <div key={item.href} onClick={onClose}>
              <NavItem
                href={item.href}
                label={item.label}
                icon={item.icon}
              />
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}
