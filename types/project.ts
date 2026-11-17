export type ProjectCategory =
  | "AI"
  | "Machine Learning"
  | "Generative AI"
  | "Computer Vision"
  | "Automation"
  | "Full Stack";

export interface Project {
  // Basic information
  id: number;
  slug: string;
  title: string;
  featured: boolean;
  category: ProjectCategory;
  status: "Completed" | "In Progress";
  year: string;

  // Descriptions
  shortDescription: string;
  longDescription: string;

  // Project story
  challenge?: string;
  solution?: string;
  architecture?: string;

  // Images
  image: string;
  gallery?: string[];

  // Technologies
  technologies: string[];

  // Features
  features: string[];

  // Highlights
  highlights?: string[];

  // Links
  github?: string;
  liveDemo?: string;
}