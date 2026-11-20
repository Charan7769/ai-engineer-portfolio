"use client";

import React from "react";
import { usePathname } from "next/navigation";
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
    const pathname = usePathname();
    const isHomepage = pathname === "/";

    return (
        <nav
            className={cn(
                "flex",
                orientation === "horizontal" ? "flex-row items-center gap-3 lg:gap-6" : "flex-col gap-4"
            )}
        >
            {navigationItems.map((item) => {
                const sectionId = item.href.slice(1);
                // Sections only exist on the homepage, so an active section never
                // applies to other routes.
                const isActive = isHomepage && activeSection === sectionId;
                const href = isHomepage ? item.href : `/${item.href}`;
                const linkClassName = cn(
                    "text-sm font-medium transition-colors hover:text-primary relative py-1.5 before:absolute before:inset-x-0 before:-inset-y-2 before:content-['']",
                    isActive ? "text-primary" : "text-muted-foreground",
                    orientation === "horizontal" && isActive && "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:rounded-full"
                );

                // Native anchors are used in both cases: on the homepage they keep
                // the existing smooth in-page scrolling, and from another route the
                // absolute "/#section" URL is the only form that reliably lands on
                // the anchor (a client-side Link changes the URL without scrolling).
                return (
                    <a
                        key={item.href}
                        href={href}
                        onClick={onClickItem}
                        className={linkClassName}
                    >
                        {item.name}
                    </a>
                );
            })}
        </nav>
    );
}
export default NavLinks;
