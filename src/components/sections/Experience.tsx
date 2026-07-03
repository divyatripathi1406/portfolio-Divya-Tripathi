"use client";

import { motion } from "framer-motion";
import { Briefcase, CheckCircle2 } from "lucide-react";

import { EXPERIENCES } from "@/lib/constants";
import { fadeInUp, viewportOnce } from "@/lib/animations";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Badge } from "@/components/ui/badge";

export function Experience() {
  return (
    <Section id="experience" className="relative">
      <SectionHeading
        eyebrow="Experience"
        title="A track record of shipping"
        description="From internships to full-time engineering, here's where I've made an impact."
      />

      <div className="relative mx-auto mt-16 max-w-3xl">
        {/* Timeline spine */}
        <div className="absolute left-4 top-2 h-full w-px bg-gradient-to-b from-primary/60 via-border to-transparent md:left-1/2" />

        <div className="space-y-10">
          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={`${exp.role}-${exp.period}`}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className={`relative flex flex-col gap-4 md:flex-row md:items-start ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Node */}
              <div className="absolute left-4 top-2 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-border bg-background md:left-1/2">
                <span className="flex h-3 w-3 items-center justify-center rounded-full bg-primary">
                  {exp.current && (
                    <span className="absolute h-3 w-3 animate-ping rounded-full bg-primary/70" />
                  )}
                </span>
              </div>

              {/* Card */}
              <div className="ml-12 w-full md:ml-0 md:w-1/2 md:px-8">
                <motion.div
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-border bg-card/50 p-6 transition-colors hover:border-primary/40"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Briefcase className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="text-base font-semibold leading-tight">
                          {exp.role}
                        </h3>
                        <p className="text-sm text-primary">{exp.company}</p>
                      </div>
                    </div>
                    {exp.current && (
                      <Badge className="shrink-0 bg-emerald-500/10 text-emerald-500">
                        Current
                      </Badge>
                    )}
                  </div>

                  <p className="mt-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {exp.period}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {exp.responsibilities.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary/70" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
