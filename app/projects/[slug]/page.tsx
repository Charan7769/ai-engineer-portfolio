import React from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { BadgePill } from "@/components/shared/badge-pill";
import { projectsData } from "@/data/projects";
import { constructMetadata } from "@/lib/metadata";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    const project = projectsData.find((p) => p.slug === slug);
    if (!project) return {};

    return constructMetadata({
        title: `${project.title} — Software Proof`,
        description: project.description,
    });
}

export default async function ProjectDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const project = projectsData.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    const gitHubIcon = (size: number = 16) => (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className="inline-block">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
    );

    return (
        <div className="min-h-screen py-32 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back button */}
            <a href="/projects" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline mb-8">
                <ArrowLeft size={16} /> Back to Projects
            </a>

            {/* Header */}
            <div className="flex flex-col gap-4 mb-8">
                <div className="flex items-center gap-2">
                    <BadgePill variant="secondary">{project.category}</BadgePill>
                    {project.featured && <BadgePill variant="primary">Featured Project</BadgePill>}
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                    {project.title}
                </h1>

                <p className="text-lg text-muted-foreground leading-relaxed mt-2 max-w-2xl">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-4">
                    {project.demoUrl && (
                        <Button href={project.demoUrl} target="_blank" rel="noreferrer">
                            <span className="flex items-center gap-1.5">
                                <ExternalLink size={16} /> Live Demo
                            </span>
                        </Button>
                    )}
                    {project.githubUrl && (
                        <Button href={project.githubUrl} target="_blank" rel="noreferrer" variant="outline">
                            <span className="flex items-center gap-1.5">
                                {gitHubIcon(16)} GitHub Source
                            </span>
                        </Button>
                    )}
                </div>
            </div>

            {/* Poster Image */}
            <div className="h-64 sm:h-[450px] w-full rounded-2xl overflow-hidden bg-muted mb-10 shadow-md">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Details Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Long description */}
                <div className="lg:col-span-8 flex flex-col gap-6">
                    <h2 className="text-2xl font-bold border-b border-border/40 pb-2">Project Case Study</h2>
                    <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                        {project.longDescription || project.description}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                        This workspace includes robust component separations, dynamic theme checks, local database caches, and is optimised for fast builds and search index mappings.
                    </p>
                </div>

                {/* Sidebar details */}
                <div className="lg:col-span-4 flex flex-col gap-6 bg-card border border-border/40 p-6 rounded-2xl h-fit">
                    <h3 className="font-bold text-lg">Tech Stack Details</h3>
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                            <span key={tag} className="text-xs bg-muted px-2.5 py-1.5 rounded-lg text-muted-foreground border border-border/40">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
