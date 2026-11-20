import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { publishedProjects } from "@/data/projects";
import { BadgePill } from "@/components/shared/badge-pill";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
    title: `Projects | ${siteConfig.name}`,
    description:
        "AI, machine learning, computer vision and full-stack projects, each with its architecture, approach and measured results.",
    path: "/projects",
});

export default function ProjectsIndexPage() {
    return (
        <div className="min-h-screen py-32 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back button */}
            <Link href="/" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline mb-8">
                <ArrowLeft size={16} /> Back to Home
            </Link>

            <div className="mb-12">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-violet-700 to-indigo-600 dark:from-violet-400 dark:to-indigo-500">
                    Projects
                </h1>
                <p className="max-w-2xl text-base text-muted-foreground mt-3">
                    {publishedProjects.length} applications documented as case studies: the problem each one
                    addresses, how it is built, and the results that have actually been measured.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {publishedProjects.map((project) => (
                    <div
                        key={project.id}
                        className="group flex flex-col bg-card border border-border/40 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                    >
                        {/* Image */}
                        <div className="relative h-48 w-full overflow-hidden bg-muted">
                            <Image
                                src={project.image}
                                alt={`${project.title} concept mockup`}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 512px"
                                className="object-cover group-hover:scale-102 transition-transform duration-500"
                            />
                            <span className="absolute bottom-3 left-3 rounded-full border border-white/20 bg-slate-950/60 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-white/80 backdrop-blur-sm">
                                Concept mockup
                            </span>
                        </div>

                        {/* Content */}
                        <div className="p-6 flex flex-col flex-grow gap-3">
                            <div className="flex items-center gap-2">
                                <BadgePill variant="secondary">{project.category}</BadgePill>
                            </div>

                            <h2 className="text-xl font-bold text-foreground mt-1">
                                {project.title}
                            </h2>

                            <p className="text-sm text-muted-foreground leading-relaxed flex-grow line-clamp-3">
                                {project.shortDescription}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-1.5 mt-2">
                                {project.technologies.map((tech) => (
                                    <span key={tech} className="text-xs bg-muted px-2 py-0.5 rounded text-muted-foreground border border-border/20">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-6 border-t border-border/20 pt-4 flex gap-3">
                                <Button
                                    href={`/projects/${project.slug}`}
                                    variant="outline"
                                    size="sm"
                                    aria-label={`View details for ${project.title}`}
                                >
                                    Details
                                </Button>
                                {project.liveDemo && (
                                    <Button
                                        href={project.liveDemo}
                                        target="_blank"
                                        rel="noreferrer"
                                        size="sm"
                                        aria-label={`Open live demo of ${project.title} (opens in a new tab)`}
                                    >
                                        <span className="flex items-center gap-1.5">
                                            Live <ExternalLink size={12} aria-hidden="true" />
                                        </span>
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
