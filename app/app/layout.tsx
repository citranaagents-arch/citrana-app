"use client";

import { useState, useEffect } from "react";
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

  // Prevent body/html scroll — only main content scrolls (fixes double scrollbar)
  useEffect(() => {
    const prevHtml = document.documentElement.style.overflow;
    const prevBody = document.body.style.overflow;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = prevHtml;
      document.body.style.overflow = prevBody;
    };
  }, []);

  return (
    <div className="flex h-screen overflow-hidden bg-[hsl(var(--background))]">
      <Sidebar mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
      <div className="flex min-h-0 w-full flex-1 flex-col overflow-hidden pl-0 lg:pl-64">
        <Topbar onMenuClick={() => setMobileOpen(true)} />
        <main className="bg-ambient relative z-10 min-h-0 flex-1 overflow-y-auto overflow-x-hidden p-4 md:p-6">
          <AnimatePresence mode="wait">
            <PageTransition>{children}</PageTransition>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
