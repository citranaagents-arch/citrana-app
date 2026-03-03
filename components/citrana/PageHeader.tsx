"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  description?: string;
  actions?: ReactNode;
  breadcrumb?: { label: string; href?: string }[];
}

export function PageHeader({ title, description, actions, breadcrumb }: PageHeaderProps) {
  return (
    <header className="space-y-4">
      {breadcrumb && breadcrumb.length > 0 && (
        <nav className="flex items-center gap-2 text-sm">
          {breadcrumb.map((b, i) => (
            <span key={i} className="flex items-center gap-2">
              {i > 0 && <span className="text-[hsl(var(--foreground-subtle))]">/</span>}
              {b.href ? (
                <Link href={b.href} className="text-[hsl(var(--foreground-muted))] hover:text-[hsl(var(--foreground))] transition-colors">
                  {b.label}
                </Link>
              ) : (
                <span className="text-[hsl(var(--foreground-muted))]">{b.label}</span>
              )}
            </span>
          ))}
        </nav>
      )}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-[hsl(var(--foreground))] md:text-3xl" style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}>
            {title}
          </h1>
          {description && (
            <p className="mt-1 text-[hsl(var(--foreground-muted))]">{description}</p>
          )}
        </div>
        {actions && <div className="shrink-0">{actions}</div>}
      </div>
    </header>
  );
}
