"use client";

import { useRef, useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  Download,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

import { siteConfig } from "@/lib/site";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Status = "idle" | "sending" | "success" | "error";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phoneHref}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: siteConfig.location,
    href: undefined,
  },
];

const socials = [
  { icon: Github, label: "GitHub", href: siteConfig.links.github },
  { icon: Linkedin, label: "LinkedIn", href: siteConfig.links.linkedin },
];

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    const data = new FormData(formRef.current);

    // Graceful fallback: if EmailJS isn't configured, open the user's mail client.
    if (!serviceId || !templateId || !publicKey) {
      const subject = encodeURIComponent(String(data.get("subject") ?? ""));
      const body = encodeURIComponent(
        `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get(
          "message"
        )}`
      );
      window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
      return;
    }

    try {
      setStatus("sending");
      setError("");
      await emailjs.sendForm(serviceId, templateId, formRef.current, {
        publicKey,
      });
      setStatus("success");
      formRef.current.reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      setStatus("error");
      setError("Something went wrong. Please try again or email me directly.");
    }
  };

  return (
    <Section id="contact" className="relative">
      <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-72 bg-gradient-to-b from-primary/5 to-transparent" />
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something great together"
        description="Have a role, a project, or just want to say hi? My inbox is always open."
      />

      <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Info panel */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col gap-4"
        >
          {contactMethods.map((m) => {
            const content = (
              <div className="flex items-center gap-4 rounded-2xl border border-border bg-card/50 p-5 transition-colors hover:border-primary/40">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <m.icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    {m.label}
                  </p>
                  <p className="truncate text-sm font-medium">{m.value}</p>
                </div>
              </div>
            );
            return (
              <motion.div key={m.label} variants={fadeInUp}>
                {m.href ? (
                  <a href={m.href} className="block">
                    {content}
                  </a>
                ) : (
                  content
                )}
              </motion.div>
            );
          })}

          <motion.div variants={fadeInUp} className="flex items-center gap-3 pt-2">
            {socials.map((s) => (
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
            <Button variant="outline" size="sm" asChild className="ml-auto">
              <a href={siteConfig.resume} download>
                <Download className="h-4 w-4" />
                Resume
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Form */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="rounded-3xl border border-border bg-card/50 p-6 sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Name" htmlFor="name">
              <input
                id="name"
                name="name"
                required
                placeholder="Your name"
                className={inputClass}
              />
            </Field>
            <Field label="Email" htmlFor="email">
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className={inputClass}
              />
            </Field>
          </div>

          <Field label="Subject" htmlFor="subject" className="mt-5">
            <input
              id="subject"
              name="subject"
              required
              placeholder="What's this about?"
              className={inputClass}
            />
          </Field>

          <Field label="Message" htmlFor="message" className="mt-5">
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Tell me a little about it..."
              className={cn(inputClass, "resize-none")}
            />
          </Field>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              type="submit"
              size="lg"
              disabled={status === "sending"}
              className="w-full sm:w-auto"
            >
              {status === "sending" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Send Message
                </>
              )}
            </Button>

            {status === "success" && (
              <motion.p
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2 text-sm text-emerald-500"
              >
                <CheckCircle2 className="h-4 w-4" />
                Message sent — thank you!
              </motion.p>
            )}
            {status === "error" && (
              <motion.p
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2 text-sm text-red-500"
              >
                <AlertCircle className="h-4 w-4" />
                {error}
              </motion.p>
            )}
          </div>
        </motion.form>
      </div>
    </Section>
  );
}

const inputClass =
  "w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/60 focus:ring-2 focus:ring-primary/20";

function Field({
  label,
  htmlFor,
  children,
  className,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-sm font-medium text-muted-foreground"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
