"use client";

import React from "react";
import { GraduationCap, Calendar } from "lucide-react";
import { SectionContainer } from "@/components/shared/section-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/animations/fade-in";
import { educationData } from "@/data/education";

export function Education() {
  return (
    <SectionContainer id="education">
      <SectionHeading
        badge="Education"
        title="Education"
        subtitle="My academic journey and the foundation of my knowledge in Computer Science, Artificial Intelligence, and Machine Learning."
      />

      <div className="max-w-5xl mx-auto">
        {educationData.map((edu) => (
          <FadeIn
            key={edu.id}
            direction="up"
            className="relative overflow-hidden rounded-3xl border border-border/50 bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            {/* Decorative Background */}
            <div className="absolute -top-6 -right-6 h-40 w-40 rounded-full bg-primary/5" />

            <div className="relative flex gap-6">
              {/* Icon */}
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <GraduationCap size={30} />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar size={16} />
                  <span>{edu.period}</span>
                </div>

                <h3 className="text-2xl font-bold text-foreground">
                  {edu.degree}
                </h3>

                <h4 className="mt-2 text-lg font-semibold text-primary">
                  {edu.branch}
                </h4>

                <p className="mt-1 font-medium text-foreground">
                  {edu.school}
                </p>

                <p className="mt-5 leading-8 text-muted-foreground">
                  {edu.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </SectionContainer>
  );
}

export default Education;