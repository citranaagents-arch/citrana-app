"use client";

import { useEffect, useState } from "react";

const PARTICLE_COUNT = 28;

/* Deterministic values (no Math.random) to avoid hydration mismatch between server and client */
const PARTICLES = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
  id: i,
  x: ((i * 13) % 97) + 1.5,
  y: ((i * 17) % 89) + 2,
  size: 1.5 + ((i * 7) % 10) / 4,
  duration: 12 + ((i * 3) % 16),
  delay: ((i * 5) % 8),
  color: i % 3 === 0 ? "primary" : i % 3 === 1 ? "accent" : "primary",
  opacity: 0.06 + ((i * 11) % 8) / 100,
}));

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = () => setReduced(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

export function AmbientBackground() {
  const reducedMotion = usePrefersReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted || reducedMotion) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      {PARTICLES.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full animate-ambient-float"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            backgroundColor:
              p.color === "primary"
                ? "hsl(var(--primary))"
                : "hsl(var(--accent))",
            animationDuration: `${p.duration}s`,
            animationDelay: `-${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
