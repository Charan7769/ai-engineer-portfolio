"use client";

import React from "react";
import { Award, ExternalLink, ShieldCheck } from "lucide-react";
import { SectionContainer } from "@/components/shared/section-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerContainer } from "@/components/animations/stagger-container";
import { completedCertificates, inProgressCertificates } from "@/data/certificates";
import { formatDate } from "@/utils/formatting/date";
import { cn } from "@/lib/utils";

export function Certifications() {
    const groups = [
        { label: "Completed", items: completedCertificates },
        { label: "In progress", items: inProgressCertificates },
    ].filter((group) => group.items.length > 0);

    return (
        <SectionContainer id="certifications" className="bg-muted/5">
            <SectionHeading
                title="Licenses & Certifications"
                subtitle="Completed certifications, with the issuing organisation and completion date. A verification link is shown only where the credential itself is publicly available."
                badge="Certifications"
            />

            <div className="mx-auto flex max-w-5xl flex-col gap-10">
                {groups.map((group) => (
                    <div key={group.label}>
                        <div className="mb-4 flex items-center gap-3">
                            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                                {group.label}
                            </h3>
                            <span className="h-px flex-1 bg-border/50" />
                            <span className="text-xs text-muted-foreground">{group.items.length}</span>
                        </div>

                        <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {group.items.map((cert, index) => (
                                <FadeIn
                                    key={cert.id}
                                    direction="up"
                                    delay={index * 0.05}
                                    className="relative flex flex-col overflow-hidden rounded-xl border border-border/40 bg-card p-5 shadow-sm transition-colors hover:border-primary/30"
                                >
                                    <div className="absolute right-0 top-0 flex h-12 w-12 items-center justify-center rounded-bl-xl bg-primary/5 text-primary/35">
                                        <ShieldCheck size={18} />
                                    </div>

                                    <div className="mb-4 flex items-center gap-3">
                                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                            <Award size={18} />
                                        </div>
                                        <div className="flex-grow pr-4">
                                            <h4 className="text-sm font-bold leading-snug text-foreground">{cert.title}</h4>
                                            <p className="mt-1 text-xs text-muted-foreground">{cert.issuer}</p>
                                        </div>
                                    </div>

                                    <div className="mt-auto flex items-center justify-between gap-3 border-t border-border/20 pt-3">
                                        <span className="text-xs text-muted-foreground">
                                            {formatDate(cert.date)}
                                        </span>

                                        <span
                                            className={cn(
                                                "rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider",
                                                cert.status === "Completed"
                                                    ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300"
                                                    : "border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-300"
                                            )}
                                        >
                                            {cert.status}
                                        </span>
                                    </div>

                                    {cert.note ? (
                                        <p className="mt-3 text-[11px] leading-5 text-muted-foreground">
                                            {cert.note}
                                        </p>
                                    ) : null}

                                    {cert.credentialUrl ? (
                                        <a
                                            href={cert.credentialUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                                        >
                                            Verify credential <ExternalLink size={11} />
                                        </a>
                                    ) : null}
                                </FadeIn>
                            ))}
                        </StaggerContainer>
                    </div>
                ))}
            </div>
        </SectionContainer>
    );
}
export default Certifications;
