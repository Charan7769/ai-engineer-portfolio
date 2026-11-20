"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, PlayCircle, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Project } from "@/types/project";
import { ProjectImage } from "./project-image";
import { ProjectTechStack } from "./project-tech-stack";
import { ProjectFeatures } from "./project-features";

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

export function ProjectCard({ project, onOpenDetails }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ y: -8, scale: 1.01, transition: { duration: 0.2 } }}
      className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-white/15 bg-white/70 p-3 shadow-[0_12px_50px_-24px_rgba(15,23,42,0.35)] backdrop-blur-xl dark:bg-slate-900/60"
    >
      <div className="relative overflow-hidden rounded-[1.2rem]">
        <ProjectImage src={project.image} alt={project.title} className="h-60" sizes="(max-width: 768px) 100vw, 50vw" />
        <div className="absolute inset-0 flex items-start justify-between p-8">
          <span className="rounded-full border border-white/15 bg-white/15 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
            {project.category}
          </span>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => onOpenDetails(project)}
              className="rounded-full border border-white/20 bg-white/15 p-2 text-white backdrop-blur-sm transition hover:bg-white/25"
              aria-label={`View details for ${project.title}`}
            >
              <Eye className="h-4 w-4" />
            </button>
          </div>
        </div>
        <span className="absolute bottom-3 left-3 rounded-full border border-white/20 bg-slate-950/60 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-white/80 backdrop-blur-sm">
          Concept mockup
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-2 pt-4 sm:p-3">
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-slate-300/40 bg-white/70 px-2.5 py-1 text-[11px] font-semibold text-slate-600 dark:bg-slate-800/70 dark:text-slate-300">
              {project.status}
            </span>
            <span className="rounded-full border border-slate-300/40 bg-white/70 px-2.5 py-1 text-[11px] font-semibold text-slate-600 dark:bg-slate-800/70 dark:text-slate-300">
              {project.year}
            </span>
          </div>
          <h3 className="text-2xl font-bold tracking-tight text-foreground">{project.title}</h3>
          <p className="text-base leading-7 text-muted-foreground">{project.shortDescription}</p>
        </div>

        <ProjectTechStack technologies={project.technologies.slice(0, 4)} />
        <ProjectFeatures features={project.features.slice(0, 3)} />

        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {project.github ? (
            <Button href={project.github} target="_blank" rel="noreferrer" variant="outline" size="sm" className="gap-2">
              <Github className="h-4 w-4" /> GitHub
            </Button>
          ) : null}
          {project.liveDemo ? (
            <Button
              href={project.liveDemo}
              target="_blank"
              rel="noreferrer"
              size="sm"
              className="gap-2"
              aria-label={`Open live demo of ${project.title} (opens in a new tab)`}
            >
              <PlayCircle className="h-4 w-4" aria-hidden="true" /> Demo
            </Button>
          ) : null}
          <Button
            onClick={() => onOpenDetails(project)}
            variant="ghost"
            size="sm"
            className="gap-2"
            aria-label={`View details for ${project.title}`}
          >
            Details <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
