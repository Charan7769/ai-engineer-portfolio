/**
 * Single source of truth for the production domain.
 *
 * The origin is read from NEXT_PUBLIC_SITE_URL only. No domain is hardcoded and
 * no deployment URL is guessed: when the variable is missing or is not a valid
 * http(s) URL, `siteUrl` is null and every consumer omits absolute URLs instead
 * of emitting a localhost address into production output.
 */
function resolveSiteUrl(): string | null {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return null;

  try {
    const parsed = new URL(raw);
    if (parsed.protocol !== "http:" && parsed.protocol !== "https:") return null;
    return parsed.origin;
  } catch {
    return null;
  }
}

export const siteUrl = resolveSiteUrl();

/** Absolute URL for a route, or undefined when no production origin is set. */
export function absoluteUrl(path = "/"): string | undefined {
  if (!siteUrl) return undefined;

  const normalized = path.startsWith("/") ? path : `/${path}`;
  return normalized === "/" ? siteUrl : `${siteUrl}${normalized}`;
}

export const siteConfig = {
  name: "Ediga Charan",

  title: "Charan — AI & Machine Learning Developer",

  description:
    "B.Tech Computer Science (Artificial Intelligence & Machine Learning) student portfolio showcasing AI, Machine Learning, Generative AI, Computer Vision, and Full-Stack development projects.",

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

  // Flipped to true only once a real resume PDF is placed at `resume`.
  // While false the download button is disabled instead of serving an empty file.
  resumeAvailable: false,
};

export type SiteConfig = typeof siteConfig;
