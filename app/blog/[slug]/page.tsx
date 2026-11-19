import React from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost } from "@/data/blog";
import { siteConfig } from "@/config/site";
import { constructMetadata } from "@/lib/metadata";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export function generateStaticParams() {
    return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    const post = getBlogPost(slug);
    if (!post) return {};

    return constructMetadata({
        title: `${post.title} | ${siteConfig.name}`,
        description: post.description,
        path: `/blog/${post.slug}`,
        noIndex: post.status === "placeholder",
    });
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;
    const post = getBlogPost(slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="min-h-screen py-32 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back button */}
            <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline mb-8">
                <ArrowLeft size={16} /> Back to Articles
            </Link>

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
                    <span className="text-sm font-semibold text-foreground">{siteConfig.author}</span>
                </div>

                {post.status === "placeholder" ? (
                    <p className="rounded-lg border border-border/60 bg-muted/40 px-4 py-3 text-xs text-muted-foreground">
                        Sample article: this text is placeholder content kept for layout demonstration. It is not a
                        published write-up and is excluded from the sitemap.
                    </p>
                ) : null}
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
