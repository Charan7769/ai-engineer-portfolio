"use client";

import { Button } from "@/components/ui/button";
import { ProjectTechStack } from "./project-tech-stack";
import { ProjectFeatures } from "./project-features";
import { motion } from "framer-motion";
import { Project } from "@/types/project";
import { ProjectImage } from "./project-image";
import {
  ArrowUpRight,
  Github,
  PlayCircle,
  Sparkles,
} from "lucide-react";

interface FeaturedProjectProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

export function FeaturedProject({
  project,
  onOpenDetails,
}: FeaturedProjectProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -6,
        transition: { duration: 0.25 },
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-[2rem]
        border
        border-white/10
        bg-white/70
        shadow-[0_30px_80px_-30px_rgba(15,23,42,0.45)]
        backdrop-blur-2xl
        dark:bg-slate-900/70
      "
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.18),transparent_35%)]" />

      <div className="relative grid items-center gap-12 p-6 lg:min-h-[560px] lg:grid-cols-[1.15fr_0.85fr] lg:p-8">

        {/* ===========================
             LEFT : Browser Mockup
        ============================ */}

        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.35 }}
          className="relative"
        >
          <div
            className="
              overflow-hidden
              rounded-[28px]
              border
              border-white/15
              bg-slate-950
              shadow-2xl
            "
          >
            {/* Browser Top Bar */}

            <div className="flex items-center justify-between border-b border-white/10 bg-slate-900/95 px-5 py-3">

              <div className="flex items-center gap-2">

                <span className="h-3 w-3 rounded-full bg-red-500" />

                <span className="h-3 w-3 rounded-full bg-yellow-500" />

                <span className="h-3 w-3 rounded-full bg-green-500" />

              </div>

              <div className="hidden h-8 w-72 rounded-full bg-slate-800 md:block" />

              <div className="w-10" />

            </div>

            {/* Dashboard Preview */}

            <div className="relative h-[320px] sm:h-[380px] lg:h-[500px]">

              <ProjectImage
                src={project.image}
                alt={project.title}
                priority
                sizes="(max-width:1024px)100vw,55vw"
                className="h-full"
              />

              {/* Gradient Overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

              {/* Floating Badge */}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="
                  absolute
                  left-6
                  top-6
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-cyan-400/30
                  bg-slate-900/70
                  px-4
                  py-2
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-cyan-300
                  backdrop-blur-xl
                "
              >
                <Sparkles className="h-4 w-4" />
                Featured Project
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* ===========================
             RIGHT : Content
        ============================ */}

        <div className="flex h-full flex-col justify-center">

          {/* Metadata */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-8 flex flex-wrap gap-3"
          >

            <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-xs font-semibold text-cyan-300">
              ⭐ Featured
            </span>

            <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-xs font-semibold text-violet-300">
              {project.category}
            </span>

            <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-300">
              {project.status}
            </span>

            <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-300">
              {project.year}
            </span>

          </motion.div>

          {/* Title & Description */}

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >

            <h2
              className="
                text-4xl
                font-bold
                tracking-tight
                text-white
                lg:text-5xl
              "
            >
              {project.title}
            </h2>

            <p
              className="
                max-w-xl
                text-lg
                leading-8
                text-slate-300
              "
            >
              {project.shortDescription}
            </p>

          </motion.div>

                    {/* ===========================
              Technology Stack
          ============================ */}

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-10 space-y-4"
          >
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
                Technology Stack
              </h4>
            </div>

            <ProjectTechStack technologies={project.technologies} />
          </motion.div>

          {/* ===========================
              Key Features
          ============================ */}

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-8 space-y-4"
          >
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-violet-400" />
              <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
                Key Features
              </h4>
            </div>

            <ProjectFeatures
              features={project.features.slice(0, 5)}
            />
          </motion.div>

          {/* ===========================
              CTA Buttons
          ============================ */}

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 flex flex-wrap gap-4"
          >
            {project.liveDemo && (
              <Button
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                className="
                  min-w-[170px]
                  gap-2
                  rounded-xl
                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-600
                  text-white
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:shadow-xl
                  hover:shadow-cyan-500/30
                "
              >
                <PlayCircle className="h-5 w-5" />
                Live Demo
              </Button>
            )}

            {project.github && (
              <Button
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="lg"
                className="
                  min-w-[170px]
                  gap-2
                  rounded-xl
                  border-white/15
                  bg-white/5
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:border-violet-400/40
                  hover:bg-violet-500/10
                "
              >
                <Github className="h-5 w-5" />
                GitHub
              </Button>
            )}

            <Button
              onClick={() => onOpenDetails(project)}
              variant="outline"
              size="lg"
              className="
                min-w-[170px]
                gap-2
                rounded-xl
                transition-all
                duration-300
                hover:scale-105
              "
            >
              View Details
              <ArrowUpRight className="h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Decorative Glow */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-40
          bg-gradient-to-t
          from-cyan-500/5
          via-transparent
          to-transparent
        "
      />
    </motion.article>
  );
}

export default FeaturedProject;
