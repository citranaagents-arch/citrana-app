"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Sidebar } from "@/components/os/Sidebar";
import { Topbar } from "@/components/os/Topbar";
import { PageTransition } from "@/components/os/PageTransition";

export default function AppShellLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <div className="flex min-h-screen bg-[hsl(var(--background))]">
      <Sidebar mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
      <div className="flex min-h-0 w-full flex-1 flex-col pl-0 lg:pl-64">
        <Topbar onMenuClick={() => setMobileOpen(true)} />
        <main className="bg-ambient relative z-10 flex-1 overflow-auto p-4 md:p-6">
          <AnimatePresence mode="wait">
            <PageTransition>{children}</PageTransition>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
