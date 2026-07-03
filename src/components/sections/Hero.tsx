"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Mail,
  MapPin,
  Github,
  Linkedin,
  Sparkles,
} from "lucide-react";

import { HERO_ROLES } from "@/lib/constants";
import { siteConfig } from "@/lib/site";
import { scrollToSection } from "@/lib/utils";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/common/MagneticButton";
import { TypingAnimation } from "@/components/common/TypingAnimation";
import { ParticleField } from "@/components/common/ParticleField";
import { HeroPortrait } from "@/components/sections/HeroPortrait";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      {/* Animated gradient backdrop */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-[0.35]" />
        <div className="absolute left-1/2 top-0 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-primary/25 via-purple-500/20 to-fuchsia-500/20 blur-[120px] animate-gradient-shift bg-300%" />
        <div className="absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-sky-500/15 blur-[120px]" />
      </div>
      <ParticleField />

      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Available for opportunities
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="mt-6 text-lg font-medium text-muted-foreground"
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              variants={fadeInUp}
              className="mt-2 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
            >
              <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                {siteConfig.name}
              </span>
            </motion.h1>

            <motion.div
              variants={fadeInUp}
              className="mt-4 flex h-9 items-center text-xl font-semibold sm:text-2xl"
            >
              <TypingAnimation
                words={HERO_ROLES}
                className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent"
              />
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              {siteConfig.description}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-6 flex items-center gap-2 text-sm text-muted-foreground"
            >
              <MapPin className="h-4 w-4 text-primary" />
              {siteConfig.location}
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <MagneticButton>
                <Button size="lg" onClick={() => scrollToSection("projects")}>
                  View Projects
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button size="lg" variant="outline" asChild>
                  <a href={siteConfig.resume} download>
                    <Download className="h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button
                  size="lg"
                  variant="ghost"
                  onClick={() => scrollToSection("contact")}
                >
                  <Mail className="h-4 w-4" />
                  Contact Me
                </Button>
              </MagneticButton>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-8 flex items-center gap-3"
            >
              {[
                { href: siteConfig.links.github, icon: Github, label: "GitHub" },
                {
                  href: siteConfig.links.linkedin,
                  icon: Linkedin,
                  label: "LinkedIn",
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/50 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
                >
                  <s.icon className="h-5 w-5" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          <HeroPortrait />
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground lg:flex"
      >
        <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-border p-1">
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="h-1.5 w-1.5 rounded-full bg-primary"
          />
        </span>
      </motion.div>

      <div className="pointer-events-none absolute right-8 top-32 hidden lg:block">
        <Sparkles className="h-5 w-5 animate-pulse text-primary/60" />
      </div>
    </section>
  );
}
