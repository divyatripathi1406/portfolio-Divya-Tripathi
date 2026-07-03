"use client";

import { motion } from "framer-motion";

import { fadeInUp, viewportOnce } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      <span className="inline-flex items-center gap-2 self-start rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground data-[center=true]:self-center" data-center={align === "center"}>
        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        {eyebrow}
      </span>
      <h2 className="max-w-3xl text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-pretty text-base text-muted-foreground md:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
