"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

interface ParticleFieldProps {
  count?: number;
}

/**
 * Lightweight floating particle background rendered with CSS + Framer Motion.
 * Deterministic positions so SSR and client markup match.
 */
export function ParticleField({ count = 26 }: ParticleFieldProps) {
  const particles = useMemo(() => {
    // Deterministic pseudo-random generator seeded per index.
    const rand = (seed: number) => {
      const x = Math.sin(seed * 99.13) * 10000;
      return x - Math.floor(x);
    };
    // Round to a fixed precision: browsers store CSS numbers as 32-bit floats,
    // so full float64 precision here would round differently after hydration
    // and trip a server/client mismatch warning.
    const round = (n: number, decimals = 2) => Number(n.toFixed(decimals));

    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: round(rand(i + 1) * 100),
      top: round(rand(i + 2) * 100),
      size: round(1.5 + rand(i + 3) * 3),
      duration: round(6 + rand(i + 4) * 8),
      delay: round(rand(i + 5) * 5),
      opacity: round(0.2 + rand(i + 6) * 0.4, 3),
    }));
  }, [count]);

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-primary"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
          }}
          animate={{ y: [0, -30, 0], opacity: [p.opacity, p.opacity * 0.3, p.opacity] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
