import type { IconType } from "react-icons";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiFirebase,
  SiPostman,
  SiFigma,
  SiGit,
  SiGithub,
  SiMysql,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { Sparkles, Mic, UtensilsCrossed } from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* ------------------------------------------------------------------ */
/* Inline brand icons (no official react-icons glyph available)        */
/* ------------------------------------------------------------------ */
function GeminiIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 0c.3 6.36 5.64 11.7 12 12-6.36.3-11.7 5.64-12 12-.3-6.36-5.64-11.7-12-12C6.36 11.7 11.7 6.36 12 0Z" />
    </svg>
  );
}

function VapiIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2a3 3 0 0 1 3 3v6a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3Zm7 9a1 1 0 0 1 2 0 9 9 0 0 1-8 8.94V22a1 1 0 1 1-2 0v-2.06A9 9 0 0 1 3 11a1 1 0 1 1 2 0 7 7 0 0 0 14 0Z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */
export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;

export type SectionId = (typeof NAV_LINKS)[number]["id"];

/* ------------------------------------------------------------------ */
/* Hero rotating roles (typing animation)                              */
/* ------------------------------------------------------------------ */
export const HERO_ROLES = [
  "Associate Software Engineer",
  "Java & MERN Stack Developer",
  "AI Enthusiast",
] as const;

/* ------------------------------------------------------------------ */
/* Quick stats (animated counters)                                     */
/* ------------------------------------------------------------------ */
export interface Stat {
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
}

export const STATS: Stat[] = [
  { value: 3, suffix: "+", label: "Years Building" },
  { value: 10, suffix: "+", label: "Projects Shipped" },
  { value: 15, suffix: "+", label: "Technologies" },
  { value: 8.27, suffix: "", label: "CGPA", decimals: 2 },
];

/* ------------------------------------------------------------------ */
/* Work Experience                                                     */
/* ------------------------------------------------------------------ */
export interface Experience {
  role: string;
  company: string;
  period: string;
  current?: boolean;
  responsibilities: string[];
}

export const EXPERIENCES: Experience[] = [
  {
    role: "Associate Software Engineer",
    company: "Credex Technology",
    period: "July 2026 – Present",
    current: true,
    responsibilities: [
      "Developing enterprise-level web applications",
      "Building reusable React components",
      "Developing scalable REST APIs",
      "Backend development using Node.js and Express",
      "Working with MongoDB and SQL",
      "Debugging production issues",
      "Improving application performance",
      "Collaborating with cross-functional teams",
    ],
  },
  {
    role: "System Trainee",
    company: "Credex Technology",
    period: "January 2026 – June 2026",
    responsibilities: [
      "Worked on frontend and backend development",
      "Developed React modules",
      "Integrated REST APIs",
      "Worked on MERN Stack applications",
      "Fixed bugs and improved stability",
      "Followed Git workflow",
    ],
  },
  {
    role: "Web Development Intern",
    company: "SecPen Labs",
    period: "April 2025 – July 2025",
    responsibilities: [
      "Developed MERN Stack applications",
      "Built reusable React components",
      "Integrated backend APIs",
      "Worked on production projects",
      "Collaborated using GitHub",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Featured Projects                                                   */
/* ------------------------------------------------------------------ */
export interface Project {
  title: string;
  featured?: boolean;
  tag?: string;
  description: string;
  features: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  gradient: string;
  icon: LucideIcon;
}

export const PROJECTS: Project[] = [
  {
    title: "PREP AI",
    featured: true,
    tag: "Featured Project",
    description:
      "An AI-powered interview preparation platform designed to simulate real technical interviews using voice interaction and AI-generated questions.",
    features: [
      "Voice-based interview experience",
      "AI-generated interview questions",
      "Gemini API integration",
      "Vapi.ai voice agent",
      "User authentication",
      "Firebase integration",
      "Responsive dashboard",
      "Performance optimized",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "Gemini API",
      "Vapi.ai",
      "Tailwind CSS",
      "JavaScript",
    ],
    githubUrl: "https://github.com/divyatripathi1406",
    gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
    icon: Sparkles,
  },
  {
    title: "NoteNexus",
    description:
      "A collaborative notes-sharing platform that allows students to upload, organize, search, and share academic resources efficiently.",
    features: [
      "Authentication",
      "CRUD operations",
      "Powerful search",
      "Responsive design",
      "Notes management",
    ],
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    githubUrl: "https://github.com/divyatripathi1406",
    gradient: "from-sky-500 via-blue-500 to-indigo-500",
    icon: Mic,
  },
  {
    title: "Restaurant Website",
    description:
      "A responsive restaurant website developed using HTML, CSS and JavaScript with an elegant, conversion-focused user interface.",
    features: [
      "Elegant UI",
      "Fully responsive layout",
      "Interactive menu",
      "Smooth animations",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript"],
    githubUrl: "https://github.com/divyatripathi1406",
    gradient: "from-amber-500 via-orange-500 to-rose-500",
    icon: UtensilsCrossed,
  },
];

/* ------------------------------------------------------------------ */
/* Technical Skills                                                    */
/* ------------------------------------------------------------------ */
export interface Skill {
  name: string;
  icon: IconType | React.FC<React.SVGProps<SVGSVGElement>>;
  color: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Java", icon: FaJava, color: "#ea2d2e" },
      { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
      { name: "SQL", icon: SiMysql, color: "#4479a1" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: SiHtml5, color: "#e34f26" },
      { name: "CSS3", icon: SiCss, color: "#1572b6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38bdf8" },
      { name: "React.js", icon: SiReact, color: "#61dafb" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5fa04e" },
      { name: "Express.js", icon: SiExpress, color: "#9ca3af" },
      { name: "REST APIs", icon: SiPostman, color: "#ff6c37" },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
      { name: "SQL", icon: SiMysql, color: "#4479a1" },
    ],
  },
  {
    title: "AI Technologies",
    skills: [
      { name: "Gemini API", icon: GeminiIcon, color: "#8e75f8" },
      { name: "Vapi.ai", icon: VapiIcon, color: "#22c55e" },
      { name: "Firebase", icon: SiFirebase, color: "#ffca28" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: SiGit, color: "#f05032" },
      { name: "GitHub", icon: SiGithub, color: "#9ca3af" },
      { name: "VS Code", icon: VscVscode, color: "#0078d4" },
      { name: "Postman", icon: SiPostman, color: "#ff6c37" },
      { name: "Figma", icon: SiFigma, color: "#f24e1e" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Education                                                           */
/* ------------------------------------------------------------------ */
export const EDUCATION = {
  degree: "Bachelor of Technology",
  branch: "Computer Science & Engineering",
  institute: "Allenhouse Institute of Technology",
  year: "2026",
  cgpa: "8.27",
};

/* ------------------------------------------------------------------ */
/* Certifications                                                      */
/* ------------------------------------------------------------------ */
export const CERTIFICATIONS = [
  "MERN Stack Development",
  "SQL Fundamentals",
  "React.js Basics",
  "Web Development Training",
];

/* ------------------------------------------------------------------ */
/* Achievements                                                        */
/* ------------------------------------------------------------------ */
export const ACHIEVEMENTS = [
  {
    title: "Committee Member",
    detail:
      "International Conference on Mathematics & Logic in Computer Science",
  },
  {
    title: "Class Representative",
    detail: "Represented and coordinated the CSE cohort across academic years.",
  },
  {
    title: "Finalist",
    detail: "AllenTalk Public Speaking Competition",
  },
];
