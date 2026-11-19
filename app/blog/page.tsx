import React from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { blogPosts, publishedBlogPosts } from "@/data/blog";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
    title: "Blog — Ediga Charan",
    description:
        "Notes on AI, machine learning, and building with Next.js, React, and Tailwind CSS.",
    path: "/blog",
    // While every article is still a sample, the index stays out of the index.
    noIndex: publishedBlogPosts.length === 0,
});

export default function BlogIndexPage() {
    return (
        <div className="min-h-screen py-32 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back button */}
            <Link href="/" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline mb-8">
                <ArrowLeft size={16} /> Back to Home
            </Link>

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

                            {post.status === "placeholder" ? (
                                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                    Sample article — awaiting a real write-up
                                </p>
                            ) : null}

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
