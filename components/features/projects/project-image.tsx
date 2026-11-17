"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ProjectImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export function ProjectImage({
  src,
  alt,
  className,
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
}: ProjectImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={cn("relative overflow-hidden rounded-[1.25rem] bg-slate-900/60", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        sizes={sizes}
        className={cn(
          "object-cover transition-all duration-700",
          isLoaded ? "scale-100 opacity-100" : "scale-110 opacity-0"
        )}
        onLoad={() => setIsLoaded(true)}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      {!isLoaded && <div className="absolute inset-0 animate-pulse bg-slate-900/70" />}
    </div>
  );
}

export default ProjectImage;
