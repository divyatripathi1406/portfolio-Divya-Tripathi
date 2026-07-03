"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which section is currently in the viewport using IntersectionObserver.
 * Returns the id of the active section for nav highlighting.
 */
export function useActiveSection(sectionIds: readonly string[]): string {
  const [active, setActive] = useState<string>(sectionIds[0] ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    const els = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds]);

  return active;
}
