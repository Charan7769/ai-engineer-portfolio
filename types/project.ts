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
  /**
   * Defaults to "published". A "draft" is retained in the dataset but excluded
   * from rendering, static params, sitemap and every other public surface.
   */
  visibility?: "published" | "draft";
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

  /** Concrete engineering work, restricted to what is documented. */
  implementation?: string[];

  /** Measured results only; omitted when nothing has been measured. */
  results?: {
    label: string;
    value: string;
    /** Supporting metrics shown under the headline value. */
    detail?: string;
  }[];

  /** Replaces the generic results footnote to scope what the figures cover. */
  resultsNote?: string;

  /** Honest limits of the current implementation / evidence. */
  limitations?: string[];

  /** Planned improvements, phrased as intentions rather than achievements. */
  futureWork?: string[];

  /**
   * Genuine artifacts (plots, evaluation screenshots) copied from a project's
   * own run output, each captioned with the model and split it came from.
   */
  evidence?: { src: string; alt: string; caption: string }[];

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