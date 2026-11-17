"use client";

import React from "react";
import { useTypewriter } from "@/hooks/use-typewriter";
import { cn } from "@/lib/utils";

interface TypewriterProps {
    words: string[];
    speed?: number;
    delay?: number;
    className?: string;
}

export function Typewriter({
    words,
    speed = 100,
    delay = 2000,
    className,
}: TypewriterProps) {
    const text = useTypewriter(words, speed, delay);
    return (
        <span className={cn("inline-block border-r-2 border-primary pr-1", className)}>
            {text}
        </span>
    );
}
export default Typewriter;
