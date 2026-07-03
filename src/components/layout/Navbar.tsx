"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { NAV_LINKS } from "@/lib/constants";
import { siteConfig } from "@/lib/site";
import { cn, scrollToSection } from "@/lib/utils";
import { useActiveSection } from "@/hooks/useActiveSection";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { Button } from "@/components/ui/button";

const SECTION_IDS = NAV_LINKS.map((l) => l.id);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id: string) => {
    setOpen(false);
    scrollToSection(id);
  };

  const initials = siteConfig.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={cn(
          "flex w-full max-w-5xl items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-500",
          scrolled
            ? "border-border bg-background/70 shadow-lg shadow-black/5 backdrop-blur-xl"
            : "border-transparent bg-transparent"
        )}
      >
        <button
          onClick={() => handleNav("home")}
          className="group flex items-center gap-2 pl-2"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-purple-500 text-sm font-bold text-white">
            {initials}
          </span>
          <span className="hidden text-sm font-semibold sm:block">
            {siteConfig.name}
          </span>
        </button>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNav(link.id)}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  active === link.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {active === link.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full bg-secondary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            size="sm"
            className="hidden md:inline-flex"
            onClick={() => handleNav("contact")}
          >
            Let&apos;s Talk
          </Button>
          <button
            aria-label="Toggle menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="absolute inset-x-4 top-20 z-40 rounded-3xl border border-border bg-background/90 p-3 shadow-xl backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNav(link.id)}
                    className={cn(
                      "w-full rounded-2xl px-4 py-3 text-left text-sm font-medium transition-colors",
                      active === link.id
                        ? "bg-secondary text-foreground"
                        : "text-muted-foreground hover:bg-secondary/60"
                    )}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
