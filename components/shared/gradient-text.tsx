import React from "react";
import { cn } from "@/lib/utils";

interface GradientTextProps {
    children: React.ReactNode;
    className?: string;
    variant?: "purple-blue" | "emerald-teal";
}

export function GradientText({
    children,
    className,
    variant = "purple-blue",
}: GradientTextProps) {
    return (
        <span
            className={cn(
                "font-bold bg-clip-text text-transparent bg-gradient-to-r",
                // Light theme uses the darker stops so headings keep AA contrast on white.
                variant === "purple-blue" && "from-violet-700 to-indigo-600 dark:from-violet-400 dark:to-indigo-400",
                variant === "emerald-teal" && "from-emerald-700 to-teal-600 dark:from-emerald-400 dark:to-teal-400",
                className
            )}
        >
            {children}
        </span>
    );
}
export default GradientText;
