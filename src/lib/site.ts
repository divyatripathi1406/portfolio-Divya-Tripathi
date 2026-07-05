/**
 * Global site-wide configuration and personal information.
 * Everything that appears in metadata / structured data lives here.
 */
export const siteConfig = {
  name: "Divya Tripathi",
  role: "Associate Software Engineer",
  tagline: "Java & MERN Stack Developer · AI Enthusiast",
  company: "Credex Technology",
  location: "Kanpur, Uttar Pradesh, India",
  email: "divyatripathi1406@gmail.com",
  phone: "+91-7084958353",
  phoneHref: "+917084958353",
  description:
    "Associate Software Engineer with hands-on experience in Java, MERN Stack, and AI-powered web applications. Passionate about building scalable, user-centric software solutions using modern technologies and AI integrations.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://divyatripathi.dev",
  resume: "/resume.pdf",
  ogImage: "/og.png",
  links: {
    github: "https://github.com/divyatripathi1406",
    linkedin: "https://linkedin.com/in/divyatripathi14",
  },
  keywords: [
    "Divya Tripathi",
    "Associate Software Engineer",
    "Java Developer",
    "MERN Stack Developer",
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "AI Enthusiast",
    "Portfolio",
    "Kanpur",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
