# Divya Tripathi — Portfolio

A premium, production-ready developer portfolio built with **Next.js 15**, **React 19**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Dark-mode first, fully responsive, SEO-optimized, and buttery smooth.

## ✨ Features

- **Next.js 15 App Router** + React 19 + TypeScript
- **Tailwind CSS** design system with light/dark themes (dark by default)
- **Framer Motion** micro-interactions, timeline & card animations
- **Lenis** smooth scrolling
- **Shadcn-style** UI primitives (Button, Badge)
- **EmailJS** contact form (with graceful `mailto:` fallback)
- Loading screen, scroll progress bar, back-to-top, magnetic buttons, typing animation, animated counters, active-section navbar
- SEO: Open Graph + Twitter cards, dynamic OG image, `robots.txt`, `sitemap.xml`, JSON-LD structured data
- Performance: code-splitting, dynamic imports, lazy loading, optimized fonts

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## 🔧 Configuration

The site runs out of the box. To enable the contact form, copy `.env.local.example` to `.env.local` and add your [EmailJS](https://www.emailjs.com/) credentials:

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=...
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=...
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=...
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

Without these, the form falls back to opening the user's email client.

> **Note:** Replace `public/resume.pdf` with your actual resume.

## 📁 Project Structure

```
src/
├── app/                # App Router: layout, page, globals, SEO routes
├── components/
│   ├── common/         # Reusable animated UI (counters, typing, toggle…)
│   ├── layout/         # Navbar, Footer, Section wrapper
│   ├── providers/      # Theme + smooth scroll providers
│   ├── sections/       # Hero, About, Experience, Projects, Skills…
│   └── ui/             # Shadcn-style primitives
├── hooks/              # Custom React hooks
└── lib/                # Config, content data, utils, animation variants
```

## 🛠 Scripts

| Command         | Description               |
| --------------- | ------------------------- |
| `npm run dev`   | Start the dev server      |
| `npm run build` | Production build          |
| `npm run start` | Run the production build  |
| `npm run lint`  | Lint the project          |

---

Built with ♥ by Divya Tripathi.
