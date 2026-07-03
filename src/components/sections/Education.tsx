"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Trophy, BadgeCheck } from "lucide-react";

import {
  EDUCATION,
  CERTIFICATIONS,
  ACHIEVEMENTS,
} from "@/lib/constants";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/common/SectionHeading";

export function Education() {
  return (
    <Section id="education">
      <SectionHeading
        eyebrow="Education & Beyond"
        title="Credentials, certifications & achievements"
        description="The academic foundation and milestones behind my engineering journey."
      />

      <div className="mt-16 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
        {/* Education card */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative overflow-hidden rounded-3xl border border-border bg-card/50 p-8"
        >
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <GraduationCap className="h-6 w-6" />
          </span>
          <h3 className="mt-5 text-xl font-bold">{EDUCATION.degree}</h3>
          <p className="text-primary">{EDUCATION.branch}</p>
          <p className="mt-2 text-muted-foreground">{EDUCATION.institute}</p>

          <div className="mt-6 flex gap-4">
            <div className="flex-1 rounded-2xl border border-border bg-background/50 p-4 text-center">
              <div className="text-2xl font-bold">{EDUCATION.year}</div>
              <div className="text-xs text-muted-foreground">Graduation</div>
            </div>
            <div className="flex-1 rounded-2xl border border-border bg-background/50 p-4 text-center">
              <div className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-2xl font-bold text-transparent">
                {EDUCATION.cgpa}
              </div>
              <div className="text-xs text-muted-foreground">CGPA</div>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="flex items-center gap-2 text-sm font-semibold">
              <BadgeCheck className="h-4 w-4 text-primary" />
              Certifications
            </h4>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {CERTIFICATIONS.map((c) => (
                <div
                  key={c}
                  className="flex items-center gap-2 rounded-xl border border-border bg-background/50 px-3 py-2.5 text-sm"
                >
                  <Award className="h-4 w-4 shrink-0 text-primary/70" />
                  {c}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col gap-4"
        >
          <motion.h3
            variants={fadeInUp}
            className="flex items-center gap-2 text-lg font-semibold"
          >
            <Trophy className="h-5 w-5 text-primary" />
            Achievements
          </motion.h3>

          {ACHIEVEMENTS.map((a) => (
            <motion.div
              key={a.title}
              variants={fadeInUp}
              whileHover={{ x: 4 }}
              className="group flex items-start gap-4 rounded-2xl border border-border bg-card/50 p-5 transition-colors hover:border-primary/40"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-purple-500/20 text-primary">
                <Trophy className="h-5 w-5" />
              </span>
              <div>
                <h4 className="font-semibold">{a.title}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{a.detail}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
