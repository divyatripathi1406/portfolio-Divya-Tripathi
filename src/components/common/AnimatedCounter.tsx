"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  decimals?: number;
  duration?: number;
}

/** Counts up from 0 to `value` the first time it scrolls into view. */
export function AnimatedCounter({
  value,
  suffix = "",
  decimals = 0,
  duration = 1.6,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const node = ref.current;
    const controls = animate(0, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate(latest) {
        node.textContent = latest.toFixed(decimals) + suffix;
      },
    });
    return () => controls.stop();
  }, [inView, value, decimals, suffix, duration]);

  return <span ref={ref}>{(0).toFixed(decimals) + suffix}</span>;
}
