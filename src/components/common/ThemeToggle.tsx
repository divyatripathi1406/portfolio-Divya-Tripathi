"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

import { useMounted } from "@/hooks/useMounted";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();
  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "relative flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/50 text-foreground transition-colors hover:border-primary/50 hover:text-primary",
        className
      )}
    >
      {mounted && (
        <motion.span
          key={isDark ? "moon" : "sun"}
          initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          {isDark ? (
            <Moon className="h-[18px] w-[18px]" />
          ) : (
            <Sun className="h-[18px] w-[18px]" />
          )}
        </motion.span>
      )}
    </button>
  );
}
