"use client";

import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";

/**
 * Wraps the app in Lenis for buttery smooth scrolling.
 * Respects the user's reduced-motion preference automatically via CSS.
 */
export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.5,
      }}
    >
      {children}
    </ReactLenis>
  );
}
