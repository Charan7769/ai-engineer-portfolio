"use client";

import React from "react";
import { navigationItems } from "@/data/navigation";
import { cn } from "@/lib/utils";

interface NavLinksProps {
    activeSection?: string;
    onClickItem?: () => void;
    orientation?: "horizontal" | "vertical";
}

export function NavLinks({
    activeSection,
    onClickItem,
    orientation = "horizontal",
}: NavLinksProps) {
    return (
        <nav
            className={cn(
                "flex",
                orientation === "horizontal" ? "flex-row items-center gap-6" : "flex-col gap-4"
            )}
        >
            {navigationItems.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                    <a
                        key={item.href}
                        href={item.href}
                        onClick={onClickItem}
                        className={cn(
                            "text-sm font-medium transition-colors hover:text-primary relative py-1.5",
                            isActive ? "text-primary" : "text-muted-foreground",
                            orientation === "horizontal" && isActive && "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:rounded-full"
                        )}
                    >
                        {item.name}
                    </a>
                );
            })}
        </nav>
    );
}
export default NavLinks;
