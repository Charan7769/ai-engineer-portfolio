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
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent">
                  Charan
                </span>{" "}
                👋
              </h1>
            </FadeIn>

            {/* Subtitle */}
            <FadeIn direction="up" delay={0.2}>
              <h2 className="text-3xl font-bold leading-tight">
                Aspiring AI / Machine Learning Engineer
                <br />
                <span className="text-primary">
                  Machine Learning • Computer Vision • Generative AI
                </span>
              </h2>
            </FadeIn>

            {/* Description */}
            <FadeIn direction="up" delay={0.3}>
              <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
                I build practical AI applications — trained models,
                computer-vision experiments and LLM-backed workflows — and ship
                them as working software with Python, TypeScript and React.
                Final-year B.Tech student in Computer Science (AI &amp; ML),
                looking for internship and graduate roles where I can keep
                building with machine learning.
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
                    href="#contact"
                    variant="outline"
                    size="lg"
                    className="rounded-full border-2 px-8 py-6 transition-all duration-300 hover:bg-primary hover:text-white hover:shadow-lg"
                  >
                    Contact Me

                    <Mail size={18} className="ml-2" />
                  </Button>
                </MagneticButton>

                <MagneticButton>
                  {siteConfig.resumeAvailable ? (
                    <Button
                      href={siteConfig.resume}
                      variant="outline"
                      size="lg"
                      className="rounded-full border-2 px-8 py-6 transition-all duration-300 hover:bg-primary hover:text-white hover:shadow-lg"
                    >
                      Download Resume

                      <Download size={18} className="ml-2" />
                    </Button>
                  ) : (
                    <Button
                      type="button"
                      variant="outline"
                      size="lg"
                      disabled
                      aria-describedby="resume-unavailable-note"
                      className="rounded-full border-2 px-8 py-6"
                    >
                      Resume Coming Soon

                      <Download size={18} className="ml-2" />
                    </Button>
                  )}
                  <span id="resume-unavailable-note" className="sr-only">
                    The resume PDF has not been published yet.
                  </span>
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
                  aria-label="GitHub profile (opens in a new tab)"
                  className="flex h-11 w-11 items-center justify-center rounded-full border bg-card transition-all hover:scale-110 hover:bg-primary hover:text-white"
                >
                  <Github size={20} aria-hidden="true" />
                </a>

                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn profile (opens in a new tab)"
                  className="flex h-11 w-11 items-center justify-center rounded-full border bg-card transition-all hover:scale-110 hover:bg-primary hover:text-white"
                >
                  <Linkedin size={20} aria-hidden="true" />
                </a>

                <a
                  href={`mailto:${siteConfig.email}`}
                  aria-label="Email Ediga Charan"
                  className="flex h-11 w-11 items-center justify-center rounded-full border bg-card transition-all hover:scale-110 hover:bg-primary hover:text-white"
                >
                  <Mail size={20} aria-hidden="true" />
                </a>

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
        <a href="#about" aria-label="Scroll to About section">
          <ChevronDown className="h-7 w-7 text-primary" aria-hidden="true" />
        </a>
      </div>

    </section>
  );
}

export default Hero;