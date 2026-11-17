import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProjectTechStackProps {
  technologies: string[];
  className?: string;
}

export function ProjectTechStack({ technologies, className }: ProjectTechStackProps) {
  if (!technologies.length) return null;

  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {technologies.map((tech) => (
        <motion.span
          key={tech}
          whileHover={{ y: -2, scale: 1.02 }}
          className="rounded-full border border-white/15 bg-white/70 px-3 py-1 text-xs font-medium text-foreground/80 shadow-sm backdrop-blur-sm dark:bg-slate-900/50"
        >
          {tech}
        </motion.span>
      ))}
    </div>
  );
}

export default ProjectTechStack;
