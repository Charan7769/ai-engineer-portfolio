"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface FadeInProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    duration?: number;
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
}

export function FadeIn({
    children,
    className,
    duration = 0.5,
    delay = 0,
    direction = "up",
    ...props
}: FadeInProps) {
    const getDirections = () => {
        switch (direction) {
            case "up": return { y: 20 };
            case "down": return { y: -20 };
            case "left": return { x: 20 };
            case "right": return { x: -20 };
            default: return {};
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, ...getDirections() }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration,
                delay,
                ease: "easeOut",
            }}
            className={cn(className)}
            {...props}
        >
            {children}
        </motion.div>
    );
}
export default FadeIn;
