"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check, ExternalLink, Github, Star } from "lucide-react";

import { PROJECTS, type Project } from "@/lib/constants";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Projects() {
  const featured = PROJECTS.filter((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Featured Projects"
        title="Products I've designed & engineered"
        description="A selection of full-stack and AI-powered applications built end to end."
      />

      <div className="mt-16 space-y-8">
        {featured.map((project) => (
          <FeaturedCard key={project.title} project={project} />
        ))}

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-8 md:grid-cols-2"
        >
          {rest.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

/* ---------------- Featured (wide) card ---------------- */
function FeaturedCard({ project }: { project: Project }) {
  const Icon = project.icon;
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="group relative overflow-hidden rounded-3xl border border-border bg-card/50 p-1"
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
        {/* Visual */}
        <div className="relative order-2 lg:order-1">
          <div
            className={cn(
              "relative flex aspect-[16/10] items-center justify-center overflow-hidden rounded-[22px] bg-gradient-to-br",
              project.gradient
            )}
          >
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="absolute inset-0 bg-black/10" />
            <div className="relative flex flex-col items-center gap-3 text-white">
              <Icon className="h-14 w-14 drop-shadow-lg" />
              <span className="text-2xl font-bold tracking-tight drop-shadow">
                {project.title}
              </span>
            </div>
            {/* Floating mock window */}
            <div className="absolute -bottom-4 left-6 right-6 h-16 rounded-t-xl border border-white/20 bg-white/10 backdrop-blur-md" />
          </div>
        </div>

        {/* Content */}
        <div className="order-1 flex flex-col justify-center p-6 lg:order-2 lg:p-8">
          <div className="mb-3 flex items-center gap-2">
            <Badge className="gap-1 bg-primary/15 text-primary">
              <Star className="h-3 w-3 fill-current" />
              {project.tag}
            </Badge>
          </div>
          <h3 className="text-2xl font-bold tracking-tight">{project.title}</h3>
          <p className="mt-3 text-pretty text-muted-foreground">
            {project.description}
          </p>

          <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
            {project.features.map((f) => (
              <div key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="h-4 w-4 shrink-0 text-primary" />
                {f}
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            {project.liveUrl && (
              <Button size="sm" asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button size="sm" variant="outline" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ---------------- Standard card ---------------- */
function ProjectCard({ project }: { project: Project }) {
  const Icon = project.icon;
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -6 }}
      className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card/50 transition-colors hover:border-primary/40"
    >
      <div
        className={cn(
          "relative flex aspect-[16/9] items-center justify-center overflow-hidden bg-gradient-to-br",
          project.gradient
        )}
      >
        <div className="absolute inset-0 bg-grid opacity-20" />
        <Icon className="relative h-12 w-12 text-white drop-shadow-lg transition-transform duration-500 group-hover:scale-110" />
        <span className="absolute bottom-3 left-4 text-lg font-bold text-white drop-shadow">
          {project.title}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm text-muted-foreground">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.features.slice(0, 4).map((f) => (
            <span
              key={f}
              className="rounded-md bg-primary/10 px-2 py-0.5 text-[11px] font-medium text-primary"
            >
              {f}
            </span>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-secondary/60 px-2.5 py-1 text-xs text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-auto flex gap-3 pt-6">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              Live Demo <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="h-3.5 w-3.5" /> Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
