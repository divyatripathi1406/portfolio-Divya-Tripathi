"use client";

import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

import { NAV_LINKS } from "@/lib/constants";
import { siteConfig } from "@/lib/site";
import { scrollToSection } from "@/lib/utils";

const socials = [
  { label: "GitHub", href: siteConfig.links.github, icon: Github },
  { label: "LinkedIn", href: siteConfig.links.linkedin, icon: Linkedin },
  // { label: "Email", href: `mailto:${siteConfig.email}`, icon: Mail },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/60 bg-background">
      <div className="container py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div className="max-w-sm">
            <button
              onClick={() => scrollToSection("home")}
              className="flex items-center gap-2"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-purple-500 text-sm font-bold text-white">
                {siteConfig.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
              <span className="text-base font-semibold">{siteConfig.name}</span>
            </button>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {siteConfig.role} building scalable, user-centric software with
              Java, the MERN stack, and modern AI integrations.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Navigate</h4>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Connect</h4>
            <ul className="mt-4 space-y-2.5">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <s.icon className="h-4 w-4" />
                    {s.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-6 text-center text-sm text-muted-foreground sm:flex-row sm:text-left">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>
            Designed &amp; built with Next.js, Tailwind CSS &amp; Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
}
