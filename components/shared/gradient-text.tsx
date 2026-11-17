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
                variant === "purple-blue" && "from-violet-400 to-indigo-500",
                variant === "emerald-teal" && "from-emerald-400 to-teal-500",
                className
            )}
        >
            {children}
        </span>
    );
}
export default GradientText;
