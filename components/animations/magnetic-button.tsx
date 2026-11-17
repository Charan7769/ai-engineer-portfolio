"use client";

import React, { useRef } from "react";
import {
    motion,
    useMotionValue,
    useSpring,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
    children: React.ReactNode;
    className?: string;
    range?: number;
}

export function MagneticButton({
    children,
    className,
    range = 45,
}: MagneticButtonProps) {

    const ref = useRef<HTMLDivElement | null>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springX = useSpring(x, {
        stiffness: 150,
        damping: 15,
        mass: 0.1,
    });

    const springY = useSpring(y, {
        stiffness: 150,
        damping: 15,
        mass: 0.1,
    });


    const handleMouseMove = (
        e: React.MouseEvent
    ) => {

        if (!ref.current) return;

        const {
            left,
            top,
            width,
            height,
        } = ref.current.getBoundingClientRect();


        const moveX =
            e.clientX -
            (left + width / 2);

        const moveY =
            e.clientY -
            (top + height / 2);


        const distance =
            Math.sqrt(
                moveX * moveX +
                moveY * moveY
            );


        if(distance < range){

            x.set(moveX * 0.45);
            y.set(moveY * 0.45);

        }else{

            x.set(0);
            y.set(0);

        }
    };


    const reset = () =>{
        x.set(0);
        y.set(0);
    };


    return (

        <motion.div

            ref={ref}

            style={{
                x:springX,
                y:springY
            }}

            onMouseMove={handleMouseMove}

            onMouseLeave={reset}

            className={cn(
                "inline-block",
                className
            )}

        >

            {children}

        </motion.div>
    );
}


export default MagneticButton;