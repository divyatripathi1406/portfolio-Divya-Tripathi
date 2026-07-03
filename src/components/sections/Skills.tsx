"use client";

import { motion } from "framer-motion";

import { SKILL_CATEGORIES } from "@/lib/constants";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/common/SectionHeading";

export function Skills() {
  return (
    <Section id="skills" className="relative">
      <SectionHeading
        eyebrow="Technical Skills"
        title="My toolbox for building great software"
        description="Technologies I use day to day across the stack — from UI to AI."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {SKILL_CATEGORIES.map((category) => (
          <motion.div
            key={category.title}
            variants={fadeInUp}
            whileHover={{ y: -4 }}
            className="group rounded-3xl border border-border bg-card/50 p-6 transition-colors hover:border-primary/40"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {category.title}
              </h3>
              <span className="h-2 w-2 rounded-full bg-primary/60 transition-transform group-hover:scale-150" />
            </div>

            <div className="mt-5 flex flex-wrap gap-2.5">
              {category.skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.06, y: -2 }}
                    className="flex items-center gap-2 rounded-xl border border-border bg-background/60 px-3 py-2 text-sm font-medium transition-colors hover:border-primary/40"
                  >
                    <Icon
                      className="h-4 w-4 transition-transform group-hover:scale-110"
                      style={{ color: skill.color }}
                    />
                    {skill.name}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
