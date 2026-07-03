import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind class names while resolving conflicts intelligently.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Smoothly scroll to an element by id, accounting for the fixed navbar.
 */
export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const offset = 80;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
}
