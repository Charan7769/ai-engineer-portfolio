"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface StaggerContainerProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    staggerChildren?: number;
    delayChildren?: number;
}

export function StaggerContainer({
    children,
    className,
    staggerChildren = 0.1,
    delayChildren = 0,
    ...props
}: StaggerContainerProps) {
    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
                hidden: {},
                show: {
                    transition: {
                        staggerChildren,
                        delayChildren,
                    },
                },
            }}
            className={cn(className)}
            {...props}
        >
            {children}
        </motion.div>
    );
}
export default StaggerContainer;
