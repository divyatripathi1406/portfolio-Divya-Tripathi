"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { siteConfig } from "@/lib/site";

/** Full-screen intro loader shown briefly on first paint. */
export function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1900);
    return () => clearTimeout(timeout);
  }, []);

  const initials = siteConfig.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex h-24 w-24 items-center justify-center"
          >
            <motion.span
              className="absolute inset-0 rounded-2xl border-2 border-primary/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            <motion.span
              className="absolute inset-2 rounded-xl border-2 border-transparent border-t-primary"
              animate={{ rotate: -360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
            <span className="bg-gradient-to-br from-primary to-purple-500 bg-clip-text text-2xl font-bold text-transparent">
              {initials}
            </span>
          </motion.div>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 160 }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
            className="mt-8 h-[3px] overflow-hidden rounded-full bg-secondary"
          >
            <div className="h-full w-full bg-gradient-to-r from-primary to-purple-500" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-sm text-muted-foreground"
          >
            {siteConfig.name}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
