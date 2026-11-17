"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useScroll } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";

export function ScrollToTop() {
    const { scrolled } = useScroll();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(scrolled);
    }, [scrolled]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    if (!visible) return null;

    return (
        <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className={cn(
                "fixed bottom-8 right-8 z-50 p-3 rounded-full shadow-lg transition-all duration-300",
                "bg-primary hover:bg-primary/95 text-white hover:scale-110 active:scale-95",
                "glass-morphism border border-primary/30"
            )}
        >
            <ArrowUp size={20} className="animate-pulse" />
        </button>
    );
}
export default ScrollToTop;
