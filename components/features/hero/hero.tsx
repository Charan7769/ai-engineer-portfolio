"use client";

import React from "react";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  ChevronDown,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/fade-in";
import { MagneticButton } from "@/components/animations/magnetic-button";
import { StaggerContainer } from "@/components/animations/stagger-container";
import ProfileCard from "@/components/ui/profile-card";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden border-b border-border/40 pt-24 pb-16"
    >
      {/* Background Glow */}
      <div className="absolute left-1/4 top-1/3 h-[420px] w-[420px] rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="absolute right-1/4 bottom-0 h-[450px] w-[450px] rounded-full bg-pink-500/10 blur-[120px]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,transparent_40%,rgba(124,58,237,0.03)_100%)]" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-12">

        {/* LEFT */}
        <div className="md:col-span-7">

          <StaggerContainer className="space-y-7">

            {/* Badge */}
            <FadeIn direction="up">
              <div className="inline-flex items-center rounded-full border border-green-400/30 bg-green-400/10 px-4 py-2 text-sm font-medium text-green-600">
                🟢 Open to Internships & Full-Time Opportunities
              </div>
            </FadeIn>

            {/* Heading */}
            <FadeIn direction="up" delay={0.1}>
              <h1 className="text-5xl font-extrabold tracking-tight lg:text-6xl">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent">
                  Charan
                </span>{" "}
                👋
              </h1>
            </FadeIn>

            {/* Subtitle */}
            <FadeIn direction="up" delay={0.2}>
              <h2 className="text-3xl font-bold leading-tight">
                AI Engineer
                <br />
                <span className="text-primary">
                  Machine Learning • Generative AI
                </span>
              </h2>
            </FadeIn>

            {/* Description */}
            <FadeIn direction="up" delay={0.3}>
              <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
                Final Year B.Tech student specializing in Computer Science
                (Artificial Intelligence & Machine Learning), passionate about
                building AI-powered applications, intelligent automation
                systems, AI Agents, and scalable software solutions using modern
                Machine Learning and Generative AI technologies.
              </p>
            </FadeIn>

            {/* Buttons */}
            <FadeIn direction="up" delay={0.4}>
              <div className="flex flex-wrap gap-5">

                <MagneticButton>
                  <Button
                    href="#projects"
                    size="lg"
                    className="group rounded-full px-8 py-6 shadow-xl shadow-violet-500/20 transition-all duration-300 hover:scale-105 hover:shadow-violet-500/50"
                  >
                    View Projects

                    <ArrowRight
                      size={18}
                      className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Button>
                </MagneticButton>

                <MagneticButton>
                  <Button
                    href={siteConfig.resume}
                    variant="outline"
                    size="lg"
                    className="rounded-full border-2 px-8 py-6 transition-all duration-300 hover:bg-primary hover:text-white hover:shadow-lg"
                  >
                    Download Resume

                    <Download size={18} className="ml-2" />
                  </Button>
                </MagneticButton>

              </div>
            </FadeIn>

            {/* Social */}
            <FadeIn direction="up" delay={0.5}>
              <div className="flex gap-4">

                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border bg-card transition-all hover:scale-110 hover:bg-primary hover:text-white"
                >
                  <Github size={20} />
                </a>

                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border bg-card transition-all hover:scale-110 hover:bg-primary hover:text-white"
                >
                  <Linkedin size={20} />
                </a>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex h-11 w-11 items-center justify-center rounded-full border bg-card transition-all hover:scale-110 hover:bg-primary hover:text-white"
                >
                  <Mail size={20} />
                </a>

              </div>
            </FadeIn>

            {/* Stats */}
            <FadeIn direction="up" delay={0.6}>
              <div className="mt-6 flex flex-wrap gap-10">

                <div>
                  <h3 className="text-3xl font-bold text-primary">3+</h3>
                  <p className="text-sm text-muted-foreground">
                    Projects Built
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-primary">5+</h3>
                  <p className="text-sm text-muted-foreground">
                    Certifications
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-primary">AI</h3>
                  <p className="text-sm text-muted-foreground">
                    Career Focus
                  </p>
                </div>

              </div>
            </FadeIn>

          </StaggerContainer>

        </div>

        {/* RIGHT */}
        <div className="relative flex items-center justify-center md:col-span-5">
             <FadeIn
              direction="none"
              className="flex w-full items-center justify-center"
             >
              <ProfileCard />
             </FadeIn>
      </div>
     </div>
      {/* Scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about">
          <ChevronDown className="h-7 w-7 text-primary" />
        </a>
      </div>

    </section>
  );
}

export default Hero;