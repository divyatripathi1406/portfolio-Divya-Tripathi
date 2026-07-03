import dynamic from "next/dynamic";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";

// Below-the-fold sections are code-split & lazy loaded for a lean first paint.
const Experience = dynamic(() =>
  import("@/components/sections/Experience").then((m) => m.Experience)
);
const Projects = dynamic(() =>
  import("@/components/sections/Projects").then((m) => m.Projects)
);
const Skills = dynamic(() =>
  import("@/components/sections/Skills").then((m) => m.Skills)
);
const Education = dynamic(() =>
  import("@/components/sections/Education").then((m) => m.Education)
);
const Contact = dynamic(() =>
  import("@/components/sections/Contact").then((m) => m.Contact)
);

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
