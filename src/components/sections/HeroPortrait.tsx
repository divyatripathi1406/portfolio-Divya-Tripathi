"use client";

import { motion } from "framer-motion";
import { SiReact, SiNodedotjs, SiMongodb, SiTailwindcss } from "react-icons/si";
import { FaJava } from "react-icons/fa";

const codeLines = [
  { indent: 0, tokens: [["const", "text-purple-400"], [" developer", "text-sky-400"], [" = {", "text-foreground/70"]] },
  { indent: 1, tokens: [["name:", "text-fuchsia-400"], [" 'Divya Tripathi',", "text-emerald-400"]] },
  { indent: 1, tokens: [["role:", "text-fuchsia-400"], [" 'Software Engineer',", "text-emerald-400"]] },
  { indent: 1, tokens: [["stack:", "text-fuchsia-400"], [" ['Java', 'MERN'],", "text-emerald-400"]] },
  { indent: 1, tokens: [["passion:", "text-fuchsia-400"], [" 'AI + Scale',", "text-emerald-400"]] },
  { indent: 0, tokens: [["};", "text-foreground/70"]] },
];

const floatingIcons = [
  { icon: SiReact, color: "#61dafb", className: "-left-6 top-10", delay: 0 },
  { icon: SiNodedotjs, color: "#5fa04e", className: "-right-5 top-24", delay: 0.6 },
  { icon: FaJava, color: "#ea2d2e", className: "-left-4 bottom-16", delay: 1.2 },
  { icon: SiMongodb, color: "#47a248", className: "right-2 -bottom-4", delay: 1.8 },
  { icon: SiTailwindcss, color: "#38bdf8", className: "left-1/2 -top-6", delay: 2.4 },
];

export function HeroPortrait() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto hidden w-full max-w-md lg:block"
    >
      {/* Glow */}
      <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-tr from-primary/30 to-purple-500/30 blur-3xl" />

      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative rounded-3xl border border-border/60 bg-card/70 p-1.5 shadow-2xl backdrop-blur-xl"
      >
        {/* Window chrome */}
        <div className="flex items-center gap-2 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
          <span className="h-3 w-3 rounded-full bg-green-400/80" />
          <span className="ml-3 text-xs text-muted-foreground">developer.ts</span>
        </div>

        <div className="rounded-2xl bg-background/60 p-6 font-mono text-sm leading-7">
          {codeLines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 + i * 0.15 }}
              className="flex whitespace-pre"
              style={{ paddingLeft: line.indent * 20 }}
            >
              <span className="mr-4 select-none text-muted-foreground/40">
                {i + 1}
              </span>
              <span>
                {line.tokens.map((t, j) => (
                  <span key={j} className={t[1]}>
                    {t[0]}
                  </span>
                ))}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Floating tech badges */}
      {floatingIcons.map((f, i) => (
        <motion.div
          key={i}
          className={`absolute ${f.className} flex h-12 w-12 items-center justify-center rounded-2xl border border-border/60 bg-card/80 shadow-lg backdrop-blur-xl`}
          animate={{ y: [0, -14, 0] }}
          transition={{
            duration: 5 + i,
            delay: f.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <f.icon className="h-6 w-6" style={{ color: f.color }} />
        </motion.div>
      ))}
    </motion.div>
  );
}
