"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionContainer } from "@/components/shared/section-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { projects } from "@/data/projects-data";
import { Project } from "@/types/project";
import { FeaturedProject } from "./featured-project";
import { ProjectCard } from "./project-card";
import { ProjectDialog } from "./project-dialog";
import { ProjectFilter, ProjectFilterValue } from "./project-filter";

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilterValue>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      if (activeFilter === "All") return true;
      return project.category === activeFilter;
    });
  }, [activeFilter]);

  const featuredProject = filteredProjects.find((project) => project.featured) ?? null;
  const remainingProjects = filteredProjects.filter((project) => project.id !== featuredProject?.id);

  return (
    <SectionContainer id="projects" className="relative isolate overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_32%),radial-gradient(circle_at_85%_20%,_rgba(167,139,250,0.18),_transparent_28%),linear-gradient(135deg,_rgba(255,255,255,0.06),_transparent_70%)]" />
      <div className="absolute left-[-10%] top-10 h-48 w-48 rounded-full bg-cyan-400/15 blur-3xl" />
      <div className="absolute bottom-0 right-[-8%] h-56 w-56 rounded-full bg-violet-400/15 blur-3xl" />
      <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:36px_36px]" />

      <div className="relative z-10">
        <SectionHeading
          title="Featured Projects"
          subtitle="A curated selection of AI and product experiences designed to feel polished, performant, and production-ready."
          badge="Selected Work"
          className="mb-10"
        />

        <ProjectFilter value={activeFilter} onChange={setActiveFilter} />

        <div className="space-y-8">
          {featuredProject ? (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <FeaturedProject project={featuredProject} onOpenDetails={setSelectedProject} />
            </motion.div>
          ) : null}

          {remainingProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {remainingProjects.map((project) => (
                <ProjectCard key={project.id} project={project} onOpenDetails={setSelectedProject} />
              ))}
            </div>
          ) : (
            <div className="rounded-[1.5rem] border border-white/15 bg-white/70 px-6 py-10 text-center text-muted-foreground shadow-sm backdrop-blur-xl dark:bg-slate-900/60">
              No projects match this filter yet.
            </div>
          )}
        </div>

        <ProjectDialog project={selectedProject} onClose={() => setSelectedProject(null)} />
      </div>
    </SectionContainer>
  );
}

export default Projects;
