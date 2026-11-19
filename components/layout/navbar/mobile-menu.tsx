"use client";

import React, { useEffect, useRef } from "react";
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

const PANEL_ID = "mobile-menu-panel";

export function MobileMenu({
    isOpen,
    onClose,
    onOpen,
    activeSection,
}: MobileMenuProps) {
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const panelRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
                buttonRef.current?.focus();
            }
        };

        const handlePointerDown = (event: PointerEvent) => {
            const target = event.target as Node | null;
            if (!target) return;
            if (panelRef.current?.contains(target)) return;
            if (buttonRef.current?.contains(target)) return;
            onClose();
        };

        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("pointerdown", handlePointerDown);

        // Move focus into the panel so keyboard users land on the menu.
        const firstLink = panelRef.current?.querySelector<HTMLElement>("a, button");
        firstLink?.focus();

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("pointerdown", handlePointerDown);
        };
    }, [isOpen, onClose]);

    return (
        <div className="md:hidden flex items-center">
            <button
                ref={buttonRef}
                onClick={isOpen ? onClose : onOpen}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                aria-controls={PANEL_ID}
                className="p-2 text-foreground/80 hover:text-foreground hover:bg-muted rounded-md transition-colors cursor-pointer"
            >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {isOpen && (
                <div
                    ref={panelRef}
                    id={PANEL_ID}
                    className={cn(
                        "fixed inset-x-0 top-16 z-40 bg-background/95 backdrop-blur-md border-b border-border p-6 shadow-xl animate-fade-in flex flex-col gap-6"
                    )}
                >
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
