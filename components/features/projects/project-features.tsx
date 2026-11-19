import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface ProjectFeaturesProps {
  features: string[];
}

export function ProjectFeatures({ features }: ProjectFeaturesProps) {
  if (!features.length) return null;

  return (
    <ul className="space-y-2.5" aria-label="Project key features">
      {features.map((feature, index) => (
        <motion.li
          key={feature}
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.25, delay: index * 0.04 }}
          className="flex items-start gap-2 text-sm text-muted-foreground"
        >
          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-violet-500" />
          <span>{feature}</span>
        </motion.li>
      ))}
    </ul>
  );
}

export default ProjectFeatures;
