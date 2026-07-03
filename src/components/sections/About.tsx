"use client";

import { motion } from "framer-motion";
import { Code2, Cpu, Layers, Sparkles } from "lucide-react";

import { STATS } from "@/lib/constants";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { AnimatedCounter } from "@/components/common/AnimatedCounter";

const paragraphs = [
  "I'm an Associate Software Engineer passionate about developing scalable web applications and AI-powered software solutions.",
  "My expertise lies in Java, JavaScript, React.js, Node.js, Express.js, MongoDB, REST APIs, and AI integrations.",
  "I enjoy solving real-world problems through clean architecture, maintainable code, and modern development practices.",
  "From internships to professional software development, I've worked on enterprise applications, AI-powered products, and full-stack web solutions while continuously improving my technical and problem-solving skills.",
];

const highlights = [
  { icon: Code2, title: "Clean Architecture", text: "Maintainable, scalable code by design." },
  { icon: Layers, title: "Full-Stack", text: "End-to-end MERN & Java development." },
  { icon: Cpu, title: "AI Integrations", text: "Gemini, Vapi.ai & Firebase powered apps." },
  { icon: Sparkles, title: "Product Mindset", text: "User-centric, performance-first delivery." },
];

export function About() {
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="About Me"
        title="Engineering software that scales and delights"
        description="A quick look at who I am and how I approach building products."
      />

      <div className="mt-16 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="space-y-5"
        >
          {paragraphs.map((p, i) => (
            <motion.p
              key={i}
              variants={fadeInUp}
              className="text-pretty text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              {p}
            </motion.p>
          ))}

          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 gap-4 pt-4 sm:grid-cols-4"
          >
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-border bg-card/50 p-4 text-center"
              >
                <div className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-3xl font-bold text-transparent">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals ?? 0}
                  />
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2"
        >
          {highlights.map((h) => (
            <motion.div
              key={h.title}
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              className="group rounded-2xl border border-border bg-card/50 p-5 transition-colors hover:border-primary/40"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                <h.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-sm font-semibold">{h.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{h.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
