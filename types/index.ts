export type SkillCategory =
  | "Programming Languages"
  | "AI & Machine Learning"
  | "Data & Analysis"
  | "Databases & Backend"
  | "Frameworks & Tools";

export type SkillTier =
  /** Used across most of the work in this portfolio. */
  | "core"
  /** Used to deliver specific projects. */
  | "project"
  /** Working familiarity rather than day-to-day use. */
  | "familiar";

export interface Skill {
  name: string;
  category: SkillCategory;
  tier: SkillTier;
  /** Optional short note describing where the skill was applied. */
  note?: string;
}

export interface Education {
  id: number;
  period: string;
  degree: string;
  branch: string;
  school: string;
  description: string;
}

export interface Certificate {
    id: string;
    title: string;
    issuer: string;
    date: string;
    status: "Completed" | "In Progress";
    /** Only a URL that resolves to the actual credential. */
    credentialUrl?: string;
    /** Extra context shown with the entry, e.g. a verification caveat. */
    note?: string;
}

export interface BlogPost {
    slug: string;
    title: string;
    description: string;
    date: string;
    readingTime: string;
    image: string;
    tags: string[];
    content: string;
}
