"use client";

import React, { useState } from "react";
import { SectionContainer } from "@/components/shared/section-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerContainer } from "@/components/animations/stagger-container";
import { skillsData } from "@/data/skills";
import { cn } from "@/lib/utils";

type Category =
  | "Programming, DSA & Databases"
  | "AI & Machine Learning"
  | "Generative AI"
  | "Developer Tools";

export function Skills() {
  const categories: Category[] = [
    "Programming, DSA & Databases",
    "AI & Machine Learning",
    "Generative AI",
    "Developer Tools",
  ];

  const [activeTab, setActiveTab] = useState<Category>(categories[0]);

  const filteredSkills = skillsData.filter(
    (skill) => skill.category === activeTab
  );

  return (
    <SectionContainer id="skills">
      <SectionHeading
        badge="My Skills"
        title="Technical Skills"
        subtitle="A snapshot of the technologies, AI frameworks, programming languages, databases, and development tools I use to build intelligent applications and solve real-world problems."
      />

      {/* Tabs */}
      <div className="flex justify-center mb-10">
        <div className="flex flex-wrap justify-center gap-2 bg-muted/60 p-1.5 rounded-xl border border-border/40 shadow-inner">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap",
                activeTab === cat
                  ? "bg-primary text-white shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Skills Grid */}
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {filteredSkills.map((skill, index) => (
          <FadeIn
            key={skill.name}
            direction="up"
            delay={index * 0.05}
            className="flex flex-col gap-2 p-4 rounded-xl border border-border/40 bg-card/35 backdrop-blur-sm"
          >
            <div className="flex justify-between items-center">
              <span className="font-semibold text-foreground">
                {skill.name}
              </span>

              <span className="font-mono text-sm text-muted-foreground">
                {skill.level}%
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full animate-progress-load transition-all duration-700"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </FadeIn>
        ))}
      </StaggerContainer>
    </SectionContainer>
  );
}

export default Skills;