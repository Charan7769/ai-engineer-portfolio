"use client";

import { useEffect, useState } from "react";
import { type ActiveSection } from "@/config/constants";

export function useActiveSection(sectionIds: readonly string[]) {
    const [activeSection, setActiveSection] = useState<string>("home");

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 3;

            for (const sectionId of sectionIds) {
                const el = document.getElementById(sectionId);
                if (!el) continue;

                const { top, bottom } = el.getBoundingClientRect();
                const absoluteTop = top + window.scrollY;
                const absoluteBottom = bottom + window.scrollY;

                if (scrollPosition >= absoluteTop && scrollPosition <= absoluteBottom) {
                    setActiveSection(sectionId);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [sectionIds]);

    return activeSection;
}
export default useActiveSection;
