"use client";

import { useEffect, useState } from "react";

export function useScroll() {
    const [scrollY, setScrollY] = useState(0);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); // Call once on mount

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return { scrollY, scrolled };
}
export default useScroll;
