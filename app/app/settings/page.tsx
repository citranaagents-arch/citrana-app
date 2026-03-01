"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Wallet, Shield, Key, Bell, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const settingsSections = [
  {
    id: "wallet",
    icon: Wallet,
    title: "Wallet",
    items: [
      { label: "Connected address", value: "0x742d…3f9A", copy: true },
      { label: "Account abstraction", value: "Enabled", configLink: true },
    ],
  },
  {
    id: "security",
    icon: Shield,
    title: "Security",
    items: [
      { label: "Permissions panel", value: "3 contracts allowed", configLink: true },
      { label: "Session expiry", value: "7 days" },
      { label: "2FA", value: "Not enabled" },
    ],
  },
  {
    id: "api",
    icon: Key,
    title: "API keys",
    items: [
      { label: "Primary key", value: "cit_••••••••••••••••••••", copy: true },
    ],
  },
  {
    id: "notifications",
    icon: Bell,
    title: "Notifications",
    toggles: [
      { label: "Agent alerts", enabled: true },
      { label: "Execution summaries", enabled: true },
      { label: "Governance proposals", enabled: false },
    ],
  },
];

export default function SettingsPage() {
  const [notif, setNotif] = useState([true, true, false]);
  const setNotifAt = (i: number) => setNotif((prev) => prev.map((v, j) => (j === i ? !v : v)));

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-semibold tracking-tight text-[hsl(var(--foreground))] md:text-3xl">
          Settings
        </h1>
        <p className="mt-1 text-[hsl(var(--foreground-muted))]">
          Wallet, security, and preferences.
        </p>
      </header>

      <div className="space-y-6">
        {settingsSections.map((section, sectionIndex) => {
          const Icon = section.icon;
          return (
            <motion.section
              key={section.id}
              initial={{ opacity: 1, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: sectionIndex * 0.06,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="glass-panel rounded-xl p-5"
            >
              <h2 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[hsl(var(--foreground))]">
                <Icon className="size-4" />
                {section.title}
              </h2>
              {"items" in section &&
                section.items?.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between border-b border-[hsl(var(--border))]/50 py-3 last:border-0"
                  >
                    <div>
                      <p className="text-sm font-medium text-[hsl(var(--foreground))]">
                        {item.label}
                      </p>
                      <p className="mt-0.5 font-mono text-base text-[hsl(var(--foreground))] antialiased">
                        {item.value}
                      </p>
                    </div>
                    <div className="flex shrink-0 items-center gap-1">
                      {"configLink" in item && item.configLink && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/10"
                        >
                          Configure
                        </Button>
                      )}
                      {"copy" in item && item.copy && (
                        <Button
                          variant="secondary"
                          size="icon"
                          className="text-[hsl(var(--foreground-muted))] hover:text-[hsl(var(--foreground))]"
                          aria-label="Copy"
                        >
                          <Copy className="size-4" strokeWidth={2} />
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              {"toggles" in section &&
                section.toggles?.map((t, ti) => {
                  const enabled = section.id === "notifications" ? notif[ti] : t.enabled;
                  return (
                    <div
                      key={t.label}
                      className="flex items-center justify-between border-b border-[hsl(var(--border))]/50 py-3 last:border-0"
                    >
                      <p className="text-sm font-medium text-[hsl(var(--foreground))]">
                        {t.label}
                      </p>
                      <button
                        type="button"
                        role="switch"
                        aria-checked={enabled}
                        onClick={() => section.id === "notifications" && setNotifAt(ti)}
                        className="flex items-center gap-2"
                      >
                        <span className="text-sm font-medium text-[hsl(var(--foreground))]">
                          {enabled ? "On" : "Off"}
                        </span>
                        <span
                          className={cn(
                            "inline-flex h-6 w-11 shrink-0 items-center rounded-full border-2 transition-colors",
                            enabled
                              ? "border-[hsl(var(--primary))] bg-[hsl(var(--primary))]"
                              : "border-[hsl(var(--border))] bg-[hsl(var(--surface))]"
                          )}
                        >
                          <span
                            className={cn(
                              "block size-5 rounded-full bg-white shadow-sm transition-transform",
                              enabled ? "translate-x-5" : "translate-x-0.5"
                            )}
                          />
                        </span>
                      </button>
                    </div>
                  );
                })}
            </motion.section>
          );
        })}
      </div>
    </div>
  );
}
