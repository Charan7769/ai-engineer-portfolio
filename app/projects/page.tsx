import React from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { projectsData } from "@/data/projects";
import { BadgePill } from "@/components/shared/badge-pill";
import { Button } from "@/components/ui/button";

export default function ProjectsIndexPage() {
    const gitHubIcon = (size: number = 14) => (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className="inline-block">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
    );

    return (
        <div className="min-h-screen py-32 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back button */}
            <a href="/" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline mb-8">
                <ArrowLeft size={16} /> Back to Home
            </a>

            <div className="mb-12">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-indigo-500">
                    My Creations
                </h1>
                <p className="max-w-2xl text-base text-muted-foreground mt-3">
                    A deep-dive index of software applications, platforms, integrations, and tools.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projectsData.map((project) => (
                    <div
                        key={project.id}
                        className="group flex flex-col bg-card border border-border/40 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                    >
                        {/* Image */}
                        <div className="relative h-48 w-full overflow-hidden bg-muted">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                            />
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
                                {project.description}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-1.5 mt-2">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="text-xs bg-muted px-2 py-0.5 rounded text-muted-foreground border border-border/20">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-6 border-t border-border/20 pt-4 flex gap-3">
                                <Button href={`/projects/${project.slug}`} variant="outline" size="sm">
                                    Details
                                </Button>
                                {project.demoUrl && (
                                    <Button href={project.demoUrl} target="_blank" rel="noreferrer" size="sm">
                                        <span className="flex items-center gap-1.5">
                                            Live <ExternalLink size={12} />
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
