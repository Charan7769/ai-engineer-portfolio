"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface SlideInProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    duration?: number;
    delay?: number;
    from?: "left" | "right" | "top" | "bottom";
}

export function SlideIn({
    children,
    className,
    duration = 0.5,
    delay = 0,
    from = "left",
    ...props
}: SlideInProps) {
    const getOffsets = () => {
        switch (from) {
            case "left": return { x: -100, y: 0 };
            case "right": return { x: 100, y: 0 };
            case "top": return { x: 0, y: -100 };
            case "bottom": return { x: 0, y: 100 };
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, ...getOffsets() }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.1, 0.25, 1], // Cubic bezier easing
            }}
            className={cn(className)}
            {...props}
        >
            {children}
        </motion.div>
    );
}
export default SlideIn;
