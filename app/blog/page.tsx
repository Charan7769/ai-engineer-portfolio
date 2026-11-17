import React from "react";
import { ArrowLeft, Calendar, Clock } from "lucide-react";


const blogPosts = [
    {
        slug: "my-first-post",
        title: "Understanding Next.js 15 & React 19 Core Features",
        description: "An extensive deep-dive into compiler-driven hooks, server actions, client cache, and transition APIs.",
        date: "July 10, 2026",
        readingTime: "5 min read",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    },
    {
        slug: "another-post",
        title: "Tailwind CSS v4.0: CSS-in-CSS Theming Overhaul",
        description: "A summary explaining how utility theme bindings moved from config objects directly to styles CSS stylesheets.",
        date: "July 18, 2026",
        readingTime: "4 min read",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop",
    },
];

export default function BlogIndexPage() {
    return (
        <div className="min-h-screen py-32 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back button */}
            <a href="/" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline mb-8">
                <ArrowLeft size={16} /> Back to Home
            </a>

            <div className="mb-12">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-indigo-500">
                    My Publications
                </h1>
                <p className="max-w-2xl text-base text-muted-foreground mt-3">
                    Deep-dives, lessons, and journals discussing modern full-stack web construction and UI animations.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                    <div
                        key={post.slug}
                        className="group flex flex-col bg-card border border-border/40 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                    >
                        {/* Image */}
                        <div className="relative h-48 w-full overflow-hidden bg-muted">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-6 flex flex-col flex-grow gap-2">
                            <div className="flex items-center gap-3 text-xs text-muted-foreground font-mono">
                                <span className="flex items-center gap-1">
                                    <Calendar size={12} />
                                    {post.date}
                                </span>
                                <span>•</span>
                                <span className="flex items-center gap-1">
                                    <Clock size={12} />
                                    {post.readingTime}
                                </span>
                            </div>

                            <h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 mt-1">
                                {post.title}
                            </h2>

                            <p className="text-sm text-muted-foreground leading-relaxed flex-grow line-clamp-3">
                                {post.description}
                            </p>

                            <div className="mt-4 border-t border-border/20 pt-4">
                                <a
                                    href={`/blog/${post.slug}`}
                                    className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 group-hover:underline gap-1"
                                >
                                    Read full article &rarr;
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
