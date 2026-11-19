import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { BadgePill } from "@/components/shared/badge-pill";
import { publishedProjects } from "@/data/projects";
import { constructMetadata } from "@/lib/metadata";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export function generateStaticParams() {
    return publishedProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    const project = publishedProjects.find((p) => p.slug === slug);
    if (!project) return {};

    return constructMetadata({
        title: `${project.title} | ${siteConfig.name}`,
        description: project.shortDescription,
        path: `/projects/${project.slug}`,
    });
}

const gitHubIcon = (size: number = 16) => (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className="inline-block">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
);

function CaseSection({
    id,
    title,
    children,
    className = "",
}: {
    id: string;
    title: string;
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <section aria-labelledby={id} className={className}>
            <h2 id={id} className="border-b border-border/40 pb-2 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                {title}
            </h2>
            <div className="mt-4">{children}</div>
        </section>
    );
}

export default async function ProjectDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const project = publishedProjects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    const hasLinks = Boolean(project.github || project.liveDemo);

    return (
        <div className="min-h-screen py-32 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/projects" className="mb-8 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
                <ArrowLeft size={16} /> Back to Projects
            </Link>

            {/* Header */}
            <header className="mb-8 flex flex-col gap-4">
                <div className="flex flex-wrap items-center gap-2">
                    <BadgePill variant="secondary">{project.category}</BadgePill>
                    <BadgePill variant="outline">{project.status}</BadgePill>
                    <BadgePill variant="outline">{project.year}</BadgePill>
                    {project.featured && <BadgePill variant="primary">Featured Project</BadgePill>}
                </div>

                <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                    {project.title}
                </h1>

                <p className="mt-2 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                    {project.shortDescription}
                </p>

                <div className="mt-2 flex flex-wrap gap-3">
                    {project.liveDemo && (
                        <Button href={project.liveDemo} target="_blank" rel="noreferrer">
                            <span className="flex items-center gap-1.5">
                                <ExternalLink size={16} /> Live Demo
                            </span>
                        </Button>
                    )}
                    {project.github && (
                        <Button href={project.github} target="_blank" rel="noreferrer" variant="outline">
                            <span className="flex items-center gap-1.5">
                                {gitHubIcon(16)} GitHub Source
                            </span>
                        </Button>
                    )}
                </div>
            </header>

            {/* Poster */}
            <figure className="mb-12">
                <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-muted shadow-md sm:h-[450px]">
                    <Image
                        src={project.image}
                        alt={`${project.title} concept mockup`}
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 896px"
                        className="object-cover"
                    />
                </div>
                <figcaption className="mt-2 text-xs text-muted-foreground">
                    Concept mockup — a design illustration of the interface, not a screenshot of a running product.
                </figcaption>
            </figure>

            {/* Case study */}
            <div className="flex flex-col gap-10">
                <CaseSection id="overview" title="Project overview">
                    <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                        {project.longDescription}
                    </p>
                </CaseSection>

                <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                    {project.challenge ? (
                        <CaseSection id="problem" title="Problem statement">
                            <p className="leading-relaxed text-muted-foreground">{project.challenge}</p>
                        </CaseSection>
                    ) : null}

                    {project.solution ? (
                        <CaseSection id="solution" title="Proposed solution">
                            <p className="leading-relaxed text-muted-foreground">{project.solution}</p>
                        </CaseSection>
                    ) : null}
                </div>

                {project.architecture ? (
                    <CaseSection id="architecture" title="Technical architecture">
                        <p className="leading-relaxed text-muted-foreground">{project.architecture}</p>
                    </CaseSection>
                ) : null}

                <CaseSection id="technologies" title="Technologies used">
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                            <span
                                key={tech}
                                className="rounded-full border border-border/60 bg-muted/40 px-3 py-1 text-xs font-medium text-foreground"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </CaseSection>

                {project.features.length ? (
                    <CaseSection id="features" title="Key features">
                        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                            {project.features.map((feature) => (
                                <li key={feature} className="flex items-start gap-2 text-sm leading-6 text-muted-foreground">
                                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-primary" aria-hidden="true" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </CaseSection>
                ) : null}

                {project.implementation?.length ? (
                    <CaseSection id="implementation" title="Implementation details">
                        <ol className="flex flex-col gap-4">
                            {project.implementation.map((step, index) => (
                                <li key={step} className="flex gap-4">
                                    <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                                        {index + 1}
                                    </span>
                                    <p className="leading-relaxed text-muted-foreground">{step}</p>
                                </li>
                            ))}
                        </ol>
                    </CaseSection>
                ) : null}

                <CaseSection id="results" title="Results and evaluation">
                    {project.results?.length ? (
                        <>
                            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                {project.results.map((result) => (
                                    <div
                                        key={result.label}
                                        className="rounded-xl border border-border/50 bg-card p-4"
                                    >
                                        <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                                            {result.label}
                                        </dt>
                                        <dd className="mt-1 font-mono text-xl font-bold text-foreground">
                                            {result.value}
                                        </dd>
                                        {result.detail ? (
                                            <dd className="mt-1 text-xs text-muted-foreground">
                                                {result.detail}
                                            </dd>
                                        ) : null}
                                    </div>
                                ))}
                            </dl>
                            <p className="mt-3 text-xs text-muted-foreground">
                                {project.resultsNote ??
                                    "Values as reported for this project. They describe performance on the dataset described above and should not be read as guarantees on other data."}
                            </p>
                        </>
                    ) : (
                        <p className="leading-relaxed text-muted-foreground">
                            No measured results are published for this project yet, so no accuracy or
                            performance figures are claimed here.
                        </p>
                    )}
                </CaseSection>

                {project.evidence?.length ? (
                    <CaseSection id="evidence" title="Experimental evidence">
                        <div className="flex flex-col gap-8">
                            {project.evidence.map((item) => (
                                <figure key={item.src}>
                                    <div className="overflow-hidden rounded-xl border border-border/50 bg-card">
                                        <Image
                                            src={item.src}
                                            alt={item.alt}
                                            width={1350}
                                            height={1200}
                                            sizes="(max-width: 768px) 100vw, 896px"
                                            className="h-auto w-full"
                                        />
                                    </div>
                                    <figcaption className="mt-3 text-xs leading-5 text-muted-foreground">
                                        {item.caption}
                                    </figcaption>
                                </figure>
                            ))}
                        </div>
                    </CaseSection>
                ) : null}

                <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                    {project.limitations?.length ? (
                        <CaseSection id="limitations" title="Limitations">
                            <ul className="flex flex-col gap-3">
                                {project.limitations.map((item) => (
                                    <li key={item} className="flex items-start gap-2 text-sm leading-6 text-muted-foreground">
                                        <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-destructive/70" aria-hidden="true" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CaseSection>
                    ) : null}

                    {project.futureWork?.length ? (
                        <CaseSection id="future" title="Future improvements">
                            <ul className="flex flex-col gap-3">
                                {project.futureWork.map((item) => (
                                    <li key={item} className="flex items-start gap-2 text-sm leading-6 text-muted-foreground">
                                        <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-secondary" aria-hidden="true" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CaseSection>
                    ) : null}
                </div>

                <CaseSection id="links" title="Repository and demo">
                    {hasLinks ? (
                        <div className="flex flex-wrap gap-3">
                            {project.github && (
                                <Button href={project.github} target="_blank" rel="noreferrer" variant="outline">
                                    <span className="flex items-center gap-1.5">
                                        {gitHubIcon(16)} GitHub Source
                                    </span>
                                </Button>
                            )}
                            {project.liveDemo && (
                                <Button href={project.liveDemo} target="_blank" rel="noreferrer">
                                    <span className="flex items-center gap-1.5">
                                        <ExternalLink size={16} /> Live Demo
                                    </span>
                                </Button>
                            )}
                        </div>
                    ) : (
                        <p className="leading-relaxed text-muted-foreground">
                            No public repository or live demo is published for this project. The source can be
                            shared on request.
                        </p>
                    )}
                </CaseSection>
            </div>

            <div className="mt-14 border-t border-border/40 pt-8">
                <Link
                    href="/projects"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                >
                    <ArrowLeft size={16} /> All projects
                </Link>
            </div>
        </div>
    );
}
