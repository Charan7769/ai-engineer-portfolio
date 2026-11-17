"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Project } from "@/types/project";
import { ProjectImage } from "./project-image";
import { ProjectTechStack } from "./project-tech-stack";
import { ProjectFeatures } from "./project-features";

interface ProjectDialogProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectDialog({ project, onClose }: ProjectDialogProps) {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-3 backdrop-blur-xl sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${project.title} details`}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            onClick={(event) => event.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/15 bg-white/85 shadow-[0_24px_100px_-30px_rgba(15,23,42,0.55)] backdrop-blur-2xl dark:bg-slate-900/85"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 z-10 rounded-full border border-white/15 bg-white/70 p-2 text-slate-700 shadow-sm backdrop-blur-sm transition hover:bg-white dark:bg-slate-900/70 dark:text-slate-200"
              aria-label="Close project dialog"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="max-h-[90vh] overflow-y-auto p-4 sm:p-6 lg:p-8">
              <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="overflow-hidden rounded-[1.4rem]">
                  <ProjectImage src={project.image} alt={project.title} className="h-[280px] sm:h-[340px]" priority sizes="(max-width: 768px) 100vw, 50vw" />
                </div>

                <div className="space-y-5">
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full border border-violet-300/40 bg-violet-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-violet-700 dark:text-violet-300">
                        {project.category}
                      </span>
                      <span className="rounded-full border border-slate-300/40 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-600 dark:bg-slate-800/70 dark:text-slate-300">
                        {project.status}
                      </span>
                      <span className="rounded-full border border-slate-300/40 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-600 dark:bg-slate-800/70 dark:text-slate-300">
                        {project.year}
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{project.title}</h3>
                    <p className="text-sm leading-7 text-muted-foreground sm:text-base">{project.longDescription}</p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">Technologies</h4>
                    <ProjectTechStack technologies={project.technologies} />
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">Highlights</h4>
                    <ProjectFeatures features={project.features} />
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <Button href={project.github} target="_blank" rel="noreferrer" variant="outline" size="sm" className="gap-2">
                      <Github className="h-4 w-4" /> GitHub
                    </Button>
                    {project.liveDemo ? (
                      <Button href={project.liveDemo} target="_blank" rel="noreferrer" size="sm" className="gap-2">
                        <ExternalLink className="h-4 w-4" /> Live Demo
                      </Button>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default ProjectDialog;
