import React from "react";
import { Hero } from "@/components/features/hero/hero";
import { About } from "@/components/features/about/about";
import { Skills } from "@/components/features/skills/skills";
import { Education } from "@/components/features/education/education";
import { Projects } from "@/components/features/projects/projects";
import { Certifications } from "@/components/features/certifications/certifications";
import { Contact } from "@/components/features/contact/contact";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({ path: "/" });

export default function HomePage() {
  return (
    <div className="flex flex-col w-full animate-fadeIn">
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Certifications />
      <Contact />
    </div>
  );
}
export { HomePage };
