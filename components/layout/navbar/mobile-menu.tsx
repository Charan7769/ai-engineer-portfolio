"use client";

import React from "react";
import { X, Menu } from "lucide-react";
import { NavLinks } from "./nav-links";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    onOpen: () => void;
    activeSection?: string;
}

export function MobileMenu({
    isOpen,
    onClose,
    onOpen,
    activeSection,
}: MobileMenuProps) {
    return (
        <div className="md:hidden flex items-center">
            <button
                onClick={isOpen ? onClose : onOpen}
                aria-label="Toggle menu"
                className="p-2 text-foreground/80 hover:text-foreground hover:bg-muted rounded-md transition-colors cursor-pointer"
            >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {isOpen && (
                <div className="fixed inset-x-0 top-16 z-40 bg-background/95 backdrop-blur-md border-b border-border p-6 shadow-xl animate-fade-in flex flex-col gap-6">
                    <NavLinks
                        activeSection={activeSection}
                        onClickItem={onClose}
                        orientation="vertical"
                    />
                    <div className="flex items-center justify-between border-t border-border pt-4">
                        <span className="text-sm text-muted-foreground">Select Theme</span>
                        <ThemeToggle />
                    </div>
                </div>
            )}
        </div>
    );
}
export default MobileMenu;
