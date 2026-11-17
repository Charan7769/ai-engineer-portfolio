export interface Project {
    id: string;
    slug: string;
    title: string;
    description: string;
    longDescription?: string;
    image: string;
    tags: string[];
    githubUrl?: string;
    demoUrl?: string;
    category: "Frontend" | "Backend" | "Fullstack" | "AI" | "Mobile";
    featured?: boolean;
}

export interface Skill {
  name: string;
  level: number;
  category:
    | "Programming, DSA & Databases"
    | "AI & Machine Learning"
    | "Generative AI"
    | "Developer Tools";
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
    url?: string;
    image?: string;
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
