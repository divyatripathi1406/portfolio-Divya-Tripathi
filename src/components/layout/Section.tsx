import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

/** Consistent scroll-anchored section wrapper with vertical rhythm. */
export function Section({ id, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-24 py-20 md:py-28 lg:py-32", className)}
    >
      <div className="container">{children}</div>
    </section>
  );
}
