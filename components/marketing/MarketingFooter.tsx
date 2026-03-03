"use client";

import Link from "next/link";
import Image from "next/image";

const PRODUCTS = [
  { label: "Dashboard", href: "/app/dashboard" },
  { label: "Agents", href: "/app/agents" },
  { label: "Intent Studio", href: "/app/intent-studio" },
  { label: "Activity", href: "/app/activity" },
  { label: "Treasury", href: "/app/treasury" },
  { label: "Marketplace", href: "/app/marketplace" },
  { label: "Governance", href: "/app/governance" },
];

export function MarketingFooter() {
  return (
    <footer className="border-t border-[hsl(var(--border))] py-10 sm:py-12">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <Link href="/" className="flex items-center gap-2 font-semibold text-[hsl(var(--foreground))]">
            <Image src="/logo.png" alt="Citrana" width={28} height={28} className="size-7 object-contain" />
            Citrana
          </Link>
          <p className="mt-2 text-sm text-[hsl(var(--foreground-muted))]">
            AI Agent Operating System for Web3. Deploy autonomous intelligence.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-[hsl(var(--foreground-muted))]">
            Products
          </h4>
          <ul className="mt-3 space-y-2">
            {PRODUCTS.map(({ label, href }) => (
              <li key={label}>
                <Link href={href} className="text-sm text-[hsl(var(--foreground-muted))] hover:text-[hsl(var(--foreground))] transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-[hsl(var(--foreground-muted))]">
            Company
          </h4>
          <ul className="mt-3 space-y-2">
            <li>
              <Link href="/about" className="text-sm text-[hsl(var(--foreground-muted))] hover:text-[hsl(var(--foreground))] transition-colors">
                About
              </Link>
            </li>
            <li>
              <a href="#" className="text-sm text-[hsl(var(--foreground-muted))] hover:text-[hsl(var(--foreground))] transition-colors">
                Contact
              </a>
            </li>
            <li>
              <Link href="#" className="text-sm text-[hsl(var(--foreground-muted))] hover:text-[hsl(var(--foreground))] transition-colors">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-[hsl(var(--foreground-muted))] hover:text-[hsl(var(--foreground))] transition-colors">
                Terms
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="mt-8 text-center text-xs text-[hsl(var(--foreground-subtle))]">
        © 2026 Citrana. All rights reserved.
      </p>
    </footer>
  );
}
