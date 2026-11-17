export const siteConfig = {
  name: "Ediga Charan",

  title: "Charan — AI & Machine Learning Developer",

  description:
    "B.Tech Computer Science (Artificial Intelligence & Machine Learning) student portfolio showcasing AI, Machine Learning, Generative AI, Computer Vision, and Full-Stack development projects.",

  url: process.env.NEXT_PUBLIC_SITE_URL || "https://charan.dev",

  ogImage: "/portfolio.jpeg",

  author: "Ediga Charan",

  email: "charangowd2005@gmail.com",

  phone: "+91 7989027769",

  location: "Bengaluru, Karnataka",

  github: "https://github.com/charan7769",

  linkedin: "https://linkedin.com/in/charan7769",

  twitter: "",

  medium: "",

  resume: "/resume.pdf",
};

export type SiteConfig = typeof siteConfig;