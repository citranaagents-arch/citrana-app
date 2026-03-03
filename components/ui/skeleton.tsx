"use client";

import { cn } from "@/lib/utils";

export function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-skeleton-pulse rounded-md bg-[hsl(var(--border))]/60", className)}
      {...props}
    />
  );
}

export function SkeletonCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--background-card))] p-5",
        className
      )}
    >
      <Skeleton className="mb-4 h-4 w-24" />
      <Skeleton className="mb-2 h-8 w-32" />
      <Skeleton className="h-4 w-full max-w-[200px]" />
    </div>
  );
}
