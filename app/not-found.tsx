import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BadgePill } from "@/components/shared/badge-pill";

/**
 * Branded 404 page.
 *
 * Rendered by Next.js for unmatched routes and by notFound() calls in draft
 * project segments. Next marks 404 responses noindex automatically. The root
 * layout deliberately carries no canonical/og:url, so this page is not given
 * the homepage's canonical identity.
 */
export default function NotFound() {
    return (
        <section
            aria-labelledby="not-found-title"
            className="flex min-h-screen w-full items-center justify-center px-4 py-32 sm:px-6 lg:px-8"
        >
            <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-border/50 bg-card/80 p-8 text-center shadow-sm backdrop-blur-sm sm:p-12">
                <div className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-3xl" aria-hidden="true" />

                <div className="relative flex flex-col items-center gap-4">
                    <BadgePill variant="primary">404</BadgePill>

                    <h1
                        id="not-found-title"
                        className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
                    >
                        This page could not be found
                    </h1>

                    <p className="max-w-md text-base leading-7 text-muted-foreground">
                        The address may be mistyped, or the page may have moved. Use the links below
                        to get back to the portfolio.
                    </p>

                    <div className="mt-4 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
                        <Button href="/" size="lg" className="gap-2 rounded-full">
                            <ArrowLeft size={16} aria-hidden="true" />
                            Back to homepage
                        </Button>

                        <Button
                            href="/projects"
                            variant="outline"
                            size="lg"
                            className="gap-2 rounded-full"
                        >
                            View projects
                            <ArrowUpRight size={16} aria-hidden="true" />
                        </Button>
                    </div>

                    <p className="mt-2 text-sm text-muted-foreground">
                        Or return to the{" "}
                        <Link href="/" className="font-semibold text-primary hover:underline">
                            portfolio home page
                        </Link>
                        .
                    </p>
                </div>
            </div>
        </section>
    );
}
