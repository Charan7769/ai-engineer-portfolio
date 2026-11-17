import React from "react";
import { cn } from "@/lib/utils";

interface BadgePillProps {
    children: React.ReactNode;
    className?: string;
    variant?: "primary" | "secondary" | "outline";
}

export function BadgePill({
    children,
    className,
    variant = "primary",
}: BadgePillProps) {
    return (
        <span
            className={cn(
                "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold select-none transition-colors",
                variant === "primary" && "bg-primary/10 text-primary border border-primary/20",
                variant === "secondary" && "bg-secondary/10 text-secondary border border-secondary/20",
                variant === "outline" && "border border-border text-muted-foreground",
                className
            )}
        >
            {children}
        </span>
    );
}
export default BadgePill;
