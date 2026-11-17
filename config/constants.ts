export const ANIMATION_DURATION = {
    fast: 0.2,
    normal: 0.4,
    slow: 0.7,
};

export const BREAKPOINTS = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536,
};

export const ACTIVE_SECTIONS = [
    "home",
    "about",
    "skills",
    "education",
    "projects",
    "certifications",
    "contact",
] as const;

export type ActiveSection = typeof ACTIVE_SECTIONS[number];
