"use client";

import React, { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import { NavLinks } from "./nav-links";
import { ThemeToggle } from "./theme-toggle";
import { MobileMenu } from "./mobile-menu";
import { useScroll } from "@/hooks/use-scroll";
import { ACTIVE_SECTIONS } from "@/config/constants";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

export function Navbar() {
    const { scrolled } = useScroll();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const activeSection = useActiveSection(ACTIVE_SECTIONS);

    // Close mobile menu on resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setMobileMenuOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 inset-x-0 z-50 transition-all duration-300 w-full",
                scrolled
                    ? "h-16 border-b border-border/40 backdrop-blur-md bg-background/80 shadow-sm"
                    : "h-20 bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                {/* Logo */}
                <a href="#home" className="text-xl font-bold tracking-wider hover:opacity-85 transition-opacity">
                    <span className="text-primary">&lt;</span>
                    <span>{siteConfig.author}</span>
                    <span className="text-primary"> /&gt;</span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-6">
                    <NavLinks activeSection={activeSection} />
                    <div className="h-4 w-px bg-border/40" />
                    <ThemeToggle />
                </div>

                {/* Mobile Navigation */}
                <MobileMenu
                    isOpen={mobileMenuOpen}
                    onOpen={() => setMobileMenuOpen(true)}
                    onClose={() => setMobileMenuOpen(false)}
                    activeSection={activeSection}
                />
            </div>
        </header>
    );
}
export default Navbar;
