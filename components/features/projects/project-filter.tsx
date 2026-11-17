"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type ProjectFilterValue =
  | "All"
  | "AI"
  | "Machine Learning"
  | "Generative AI"
  | "Computer Vision"
  | "Automation"
  | "Full Stack";

interface ProjectFilterProps {
  value: ProjectFilterValue;
  onChange: (value: ProjectFilterValue) => void;
}

const filters: ProjectFilterValue[] = [
  "All",
  "AI",
  "Machine Learning",
  "Generative AI",
  "Computer Vision",
  "Automation",
  "Full Stack",
];

export function ProjectFilter({ value, onChange }: ProjectFilterProps) {
  return (
    <div className="mb-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
      {filters.map((filter) => {
        const isActive = value === filter;

        return (
          <motion.button
            key={filter}
            type="button"
            layout
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onChange(filter)}
            aria-pressed={isActive}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/60 focus:ring-offset-2 focus:ring-offset-background",
              isActive
                ? "border-transparent bg-gradient-to-r from-violet-500/90 via-indigo-500/90 to-cyan-500/90 text-white shadow-lg shadow-violet-500/20"
                : "border-white/10 bg-white/70 text-muted-foreground shadow-sm shadow-black/5 backdrop-blur-sm hover:border-violet-300/60 hover:bg-white hover:text-foreground dark:bg-white/10 dark:hover:bg-white/20"
            )}
          >
            {filter}
          </motion.button>
        );
      })}
    </div>
  );
}

export default ProjectFilter;
