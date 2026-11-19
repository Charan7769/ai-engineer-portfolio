import React from "react";
import { SectionContainer } from "@/components/shared/section-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerContainer } from "@/components/animations/stagger-container";
import { skillsData, skillCategories } from "@/data/skills";
import { cn } from "@/lib/utils";

const tiers = [
    { id: "core", label: "Core", dot: "bg-primary" },
    { id: "project", label: "Used in projects", dot: "bg-secondary" },
    { id: "familiar", label: "Familiar", dot: "bg-muted-foreground" },
] as const;

export function Skills() {
    return (
        <SectionContainer id="skills">
            <SectionHeading
                badge="Skills"
                title="Technical Skills"
                subtitle="Grouped by discipline, with the context each technology has actually been used in. No percentage scores — the projects on this site are the evidence."
            />

            {/* Tier legend */}
            <div className="mb-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
                {tiers.map((tier) => (
                    <span key={tier.id} className="inline-flex items-center gap-2">
                        <span className={cn("h-1.5 w-1.5 rounded-full", tier.dot)} />
                        {tier.label}
                    </span>
                ))}
            </div>

            <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {skillCategories.map((category) => {
                    const skills = skillsData.filter((skill) => skill.category === category);
                    if (!skills.length) return null;

                    return (
                        <FadeIn
                            key={category}
                            direction="up"
                            className="rounded-2xl border border-border/50 bg-card p-6 shadow-sm"
                        >
                            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                                {category}
                            </h3>

                            <ul className="mt-5 flex flex-col gap-4">
                                {skills.map((skill) => (
                                    <li key={skill.name} className="flex items-start gap-3">
                                        <span
                                            className={cn(
                                                "mt-1.5 h-1.5 w-1.5 flex-none rounded-full",
                                                skill.tier === "core" && "bg-primary",
                                                skill.tier === "project" && "bg-secondary",
                                                skill.tier === "familiar" && "bg-muted-foreground"
                                            )}
                                            aria-hidden="true"
                                        />
                                        <div>
                                            <span className="text-sm font-semibold text-foreground">
                                                {skill.name}
                                            </span>
                                            {skill.note ? (
                                                <span className="mt-0.5 block text-xs leading-5 text-muted-foreground">
                                                    {skill.note}
                                                </span>
                                            ) : null}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </FadeIn>
                    );
                })}
            </StaggerContainer>
        </SectionContainer>
    );
}

export default Skills;
