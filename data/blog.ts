/**
 * Canonical blog dataset — the single source of truth for the blog index,
 * the /blog/[slug] route, page metadata and the sitemap.
 *
 * Posts marked "placeholder" are sample articles carried over from the original
 * template copy. They are clearly labelled in the UI, kept out of the sitemap
 * and marked noindex until the owner replaces them with real writing.
 */
export type BlogPostStatus = "placeholder" | "published";

export interface BlogPost {
    slug: string;
    title: string;
    description: string;
    date: string;
    readingTime: string;
    image: string;
    content: string[];
    status: BlogPostStatus;
}

export const blogPosts: BlogPost[] = [
    {
        slug: "my-first-post",
        title: "Understanding Next.js 15 & React 19 Core Features",
        description:
            "An extensive deep-dive into compiler-driven hooks, server actions, client cache, and transition APIs.",
        date: "July 10, 2026",
        readingTime: "5 min read",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
        status: "placeholder",
        content: [
            "Next.js 15 introduces critical updates aiming for developers looking to craft robust React 19 apps. Key enhancements center on compiler optimizations, cache configurations, and server features.",
            "The primary architectural change is the introduction of compiler-driven UI renderings. React 19 compiler automates optimization rules, relieving developers from writing excessive useMemo and useCallback hooks manually.",
            "Additionally, Server Actions have matured. They now integrate neatly with Zod schema parsing and form states, simplifying form validation, submission pending details, and optimistic client updates.",
            "Finally, caching behavior has shifted. By default, Next.js page runs are now dynamic, making it simpler to fetch up-to-date data without manual opts-out. If necessary, static caching rules can still be configured via custom configuration fields.",
        ],
    },
    {
        slug: "another-post",
        title: "Tailwind CSS v4.0: CSS-in-CSS Theming Overhaul",
        description:
            "A summary explaining how utility theme bindings moved from config objects directly to styles CSS stylesheets.",
        date: "July 18, 2026",
        readingTime: "4 min read",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop",
        status: "placeholder",
        content: [
            "Tailwind CSS v4.0 signals a historical change in the way developers configuration utility class presets.",
            "Instead of writing javascript object configs inside tailwind.config.ts, styling configurations are now compiled directly within CSS files using standard CSS properties and a new compiler engine.",
            "This approach enhances compile speed, integrates smoothly with native css features (e.g. css custom attributes), and makes it much simpler to setup light/dark mode theme configurations directly inside stylesheet files.",
            "To extend styles, you can now write variables inside an inline `@theme` rule within your stylesheet. These variables are automatically compiled into utility classes (like `bg-custom`, `text-custom`), yielding a clean developer design template.",
        ],
    },
];

export const publishedBlogPosts = blogPosts.filter((post) => post.status === "published");

export function getBlogPost(slug: string): BlogPost | undefined {
    return blogPosts.find((post) => post.slug === slug);
}
