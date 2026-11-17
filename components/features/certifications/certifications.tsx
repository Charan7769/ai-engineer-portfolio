"use client";

import React from "react";
import { Award, ExternalLink, ShieldCheck } from "lucide-react";
import { SectionContainer } from "@/components/shared/section-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerContainer } from "@/components/animations/stagger-container";
import { certificatesData } from "@/data/certificates";
import { formatDate } from "@/utils/formatting/date";

export function Certifications() {
    return (
        <SectionContainer id="certifications" className="bg-muted/5">
            <SectionHeading
                title="Licenses & Certifications"
                subtitle="A selection of professional certifications earned from industrial platforms."
                badge="Quality Checked"
            />

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {certificatesData.map((cert, index) => (
                    <FadeIn
                        key={cert.id}
                        direction="up"
                        delay={index * 0.05}
                        className="flex flex-col bg-card border border-border/40 rounded-xl p-5 hover:border-primary/30 transition-colors shadow-sm relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-12 h-12 bg-primary/5 rounded-bl-xl flex items-center justify-center text-primary/35">
                            <ShieldCheck size={18} />
                        </div>

                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                <Award size={18} />
                            </div>
                            <div className="flex-grow pr-4">
                                <h3 className="font-bold text-sm text-foreground line-clamp-2 leading-snug">{cert.title}</h3>
                                <p className="text-xs text-muted-foreground mt-1">{cert.issuer}</p>
                            </div>
                        </div>

                        <div className="mt-auto flex items-center justify-between border-t border-border/20 pt-3">
                            <span className="text-xs text-muted-foreground">
                                Issued {formatDate(cert.date)}
                            </span>

                            {cert.url && (
                                <a
                                    href={cert.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-xs text-primary font-semibold flex items-center gap-1 hover:underline"
                                >
                                    Verify <ExternalLink size={10} />
                                </a>
                            )}
                        </div>
                    </FadeIn>
                ))}
            </StaggerContainer>
        </SectionContainer>
    );
}
export default Certifications;
