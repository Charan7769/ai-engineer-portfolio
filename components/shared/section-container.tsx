import React from "react";
import { cn } from "@/lib/utils";

interface SectionContainerProps {
    children: React.ReactNode;
    id: string;
    className?: string;
}

export function SectionContainer({
    children,
    id,
    className,
}: SectionContainerProps) {
    return (
        <section
            id={id}
            className={cn(
                "py-20 md:py-28 w-full border-b border-border/40 relative overflow-hidden",
                className
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {children}
            </div>
        </section>
    );
}
export default SectionContainer;
