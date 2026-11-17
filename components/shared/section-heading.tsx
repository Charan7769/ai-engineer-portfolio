import React from "react";
import { cn } from "@/lib/utils";
import { BadgePill } from "./badge-pill";
import { GradientText } from "./gradient-text";

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    badge?: string;
    className?: string;
    align?: "left" | "center";
}

export function SectionHeading({
    title,
    subtitle,
    badge,
    className,
    align = "center",
}: SectionHeadingProps) {
    return (
        <div
            className={cn(
                "mb-12 flex flex-col gap-3",
                align === "center" ? "items-center text-center" : "items-start text-left",
                className
            )}
        >
            {badge && <BadgePill variant="primary">{badge}</BadgePill>}
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                <GradientText>{title}</GradientText>
            </h2>
            {subtitle && (
                <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
                    {subtitle}
                </p>
            )}
        </div>
    );
}
export default SectionHeading;
