import React from "react";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { notFound } from "next/navigation";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

const blogPostsContent: Record<string, {
    title: string;
    date: string;
    readingTime: string;
    image: string;
    content: string[];
}> = {
    "my-first-post": {
        title: "Understanding Next.js 15 & React 19 Core Features",
        date: "July 10, 2026",
        readingTime: "5 min read",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
        content: [
            "Next.js 15 introduces critical updates aiming for developers looking to craft robust React 19 apps. Key enhancements center on compiler optimizations, cache configurations, and server features.",
            "The primary architectural change is the introduction of compiler-driven UI renderings. React 19 compiler automates optimization rules, relieving developers from writing excessive useMemo and useCallback hooks manually.",
            "Additionally, Server Actions have matured. They now integrate neatly with Zod schema parsing and form states, simplifying form validation, submission pending details, and optimistic client updates.",
            "Finally, caching behavior has shifted. By default, Next.js page runs are now dynamic, making it simpler to fetch up-to-date data without manual opts-out. If necessary, static caching rules can still be configured via custom configuration fields."
        ]
    },
    "another-post": {
        title: "Tailwind CSS v4.0: CSS-in-CSS Theming Overhaul",
        date: "July 18, 2026",
        readingTime: "4 min read",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop",
        content: [
            "Tailwind CSS v4.0 signals a historical change in the way developers configuration utility class presets.",
            "Instead of writing javascript object configs inside tailwind.config.ts, styling configurations are now compiled directly within CSS files using standard CSS properties and a new compiler engine.",
            "This approach enhances compile speed, integrates smoothly with native css features (e.g. css custom attributes), and makes it much simpler to setup light/dark mode theme configurations directly inside stylesheet files.",
            "To extend styles, you can now write variables inside an inline `@theme` rule within your stylesheet. These variables are automatically compiled into utility classes (like `bg-custom`, `text-custom`), yielding a clean developer design template."
        ]
    }
};

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;
    const post = blogPostsContent[slug];

    if (!post) {
        notFound();
    }

    return (
        <article className="min-h-screen py-32 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back button */}
            <a href="/blog" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline mb-8">
                <ArrowLeft size={16} /> Back to Articles
            </a>

            {/* Header */}
            <div className="flex flex-col gap-4 mb-8">
                <div className="flex items-center gap-4 text-sm text-muted-foreground font-mono">
                    <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {post.readingTime}
                    </span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                    {post.title}
                </h1>

                <div className="flex items-center gap-2 mt-2">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <User size={16} />
                    </div>
                    <span className="text-sm font-semibold text-foreground">Alex Dev</span>
                </div>
            </div>

            {/* Poster Image */}
            <div className="h-64 sm:h-[400px] w-full rounded-2xl overflow-hidden bg-muted mb-10 shadow-md">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content Body */}
            <div className="flex flex-col gap-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
                {post.content.map((para, idx) => (
                    <p key={idx}>{para}</p>
                ))}
            </div>
        </article>
    );
}
