"use client";

import React from "react";
import { User, Award, BookOpen, Clock } from "lucide-react";
import { SectionContainer } from "@/components/shared/section-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/animations/fade-in";
import { useGitHubStats } from "@/hooks/use-github-stats";
import { publishedProjects } from "@/data/projects";
import { certificatesData } from "@/data/certificates";

export function About() {
    const stats = useGitHubStats();

    return (
        <SectionContainer id="about">
            <SectionHeading
                title="About Me"
                subtitle="Passionate about building AI-powered applications, intelligent automation systems, and scalable software solutions using Artificial Intelligence, Machine Learning, and modern web technologies."
                badge="About Me"
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Left column: Biography */}
                <div className="lg:col-span-7 flex flex-col gap-6">
                    <FadeIn direction="right">
                        <h3 className="text-2xl font-bold">
                            Who is <span className="text-primary">Charan</span>?
                        </h3>
                        <p className="text-muted-foreground leading-relaxed mt-2 text-sm sm:text-base">
                            I am a final-year B.Tech student in Computer Science and Engineering (Artificial
                            Intelligence &amp; Machine Learning) at Nagarjuna College of Engineering and
                            Technology. My work centres on turning models into usable software rather than
                            stopping at a notebook: a computer-vision classifier that estimates blood group from
                            fingerprint images, and an LLM-backed email assistant that summarises mail,
                            extracts tasks and drafts suggested replies.
                        </p>
                        <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                            I work in Python for modelling and evaluation, then build the parts a user
                            actually touches — Streamlit interfaces for models, and React, TypeScript and
                            Express when a project needs a full web application. Every project page on this
                            site documents the problem, the architecture, and where available the measured
                            results, including the limitations of what has been tested.
                        </p>

                    </FadeIn>

                    {/* Academic Info Grid & Interests */}
                    <FadeIn direction="up" delay={0.1}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-border/20 pt-6 mt-2">
                            {/* Credentials details */}
                            <div className="flex flex-col gap-4">
                                <div>
                                    <span className="text-muted-foreground block text-[10px] uppercase font-bold tracking-widest mb-1">College</span>
                                    <span className="text-foreground font-semibold text-sm">Nagarjuna College of Engineering and Technology</span>
                                </div>
                                <div>
                                    <span className="text-muted-foreground block text-[10px] uppercase font-bold tracking-widest mb-1">Degree & Branch</span>
                                    <span className="text-foreground font-semibold text-sm">B.Tech in Computer Science & Engineering (AI & ML)</span>
                                </div>
                                <div className="flex gap-6">
                                    <div>
                                        <span className="text-muted-foreground block text-[10px] uppercase font-bold tracking-widest mb-1">Current Status</span>
                                        <span className="text-foreground font-semibold text-sm">Final Year</span>
                                    </div>
                                    <div>
                                        <span className="text-muted-foreground block text-[10px] uppercase font-bold tracking-widest mb-1">Graduation</span>
                                        <span className="text-foreground font-semibold text-sm">2027</span>
                                    </div>
                                </div>
                            </div>

                            {/* Interests & Certifications fields */}
                            <div className="flex flex-col gap-4">
                                <div>
                                    <span className="text-muted-foreground block text-[10px] uppercase font-bold tracking-widest mb-1">Areas of Interest</span>
                                    <div className="flex flex-wrap gap-1.5 mt-1.5 animate-fadeIn">
                                        {["Artificial Intelligence", "Machine Learning", "Generative AI", "AI Agents"].map((interest) => (
                                            <span
                                                key={interest}
                                                className="text-[11px] bg-primary/10 border border-primary/20 text-primary px-2.5 py-0.5 rounded-full font-semibold"
                                            >
                                                {interest}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <span className="text-muted-foreground block text-[10px] uppercase font-bold tracking-widest mb-1">Certifications Include</span>
                                    <p className="text-xs text-muted-foreground leading-normal mt-1">
                                        {certificatesData.map((cert) => cert.title).join(" · ")}.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Quick stats/cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                        <FadeIn direction="up" delay={0.2}>
                            <div className="p-4 bg-muted/40 rounded-xl border border-border/40 text-center flex flex-col items-center justify-center gap-1.5 h-full">
                                <Clock className="text-primary" size={24} />
                                <span className="text-xl font-bold font-mono">0</span>
                                <span className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Years of Experience</span>
                                <span className="text-[10px] text-primary/80 uppercase font-black tracking-widest mt-0.5">Fresher</span>
                            </div>
                        </FadeIn>

                        <FadeIn direction="up" delay={0.3}>
                            <div className="p-4 bg-muted/40 rounded-xl border border-border/40 text-center flex flex-col items-center justify-center gap-1.5 h-full">
                                <Award className="text-secondary" size={24} />
                                <span className="text-xl font-bold font-mono">{publishedProjects.length}</span>
                                <span className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Projects Documented</span>
                            </div>
                        </FadeIn>

                        <FadeIn direction="up" delay={0.4}>
                            <div className="p-4 bg-muted/40 rounded-xl border border-border/40 text-center flex flex-col items-center justify-center gap-1.5 h-full">
                                <BookOpen className="text-violet-400" size={24} />
                                <span className="text-xl font-bold font-mono">{certificatesData.length}</span>
                                <span className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Certifications Completed</span>
                            </div>
                        </FadeIn>
                    </div>
                </div>

                {/* Right column: GitHub Stats Card */}
                <div className="lg:col-span-5 flex justify-center">
                    <FadeIn direction="left">
                        <div className="w-full max-w-sm bg-card text-card-foreground backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden border border-primary/20">
                            {/* Header */}
                            <div className="p-6 border-b border-border/30 bg-primary/5 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-violet-500/10 flex items-center justify-center text-violet-600 dark:text-violet-400">
                                        <User size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground">GitHub Profile</h4>
                                        <p className="text-xs text-muted-foreground">@charan7769</p>
                                    </div>
                                </div>
                            </div>

                            {/* Stats Body */}
                            <div className="p-6 flex flex-col gap-4">
                                {stats.loading ? (
                                    <div className="flex flex-col gap-3 py-6 justify-center items-center">
                                        <div className="w-8 h-8 rounded-full border-2 border-t-primary border-r-transparent border-b-transparent border-l-transparent animate-spin" />
                                        <p className="text-xs text-muted-foreground">Fetching profile details...</p>
                                    </div>
                                ) : stats.error ? (
                                    <p className="py-6 text-center text-xs text-muted-foreground">
                                        GitHub stats are currently unavailable.
                                    </p>
                                ) : (
                                    <>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-muted-foreground">Followers</span>
                                            <span className="font-mono font-bold text-foreground">{stats.followers ?? "—"}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-muted-foreground">Public Repos</span>
                                            <span className="font-mono font-bold text-foreground">{stats.publicRepos ?? "—"}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-muted-foreground">Total Stars</span>
                                            <span className="font-mono font-bold text-foreground">{stats.totalStars ?? "—"}</span>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </SectionContainer>
    );
}
export default About;
