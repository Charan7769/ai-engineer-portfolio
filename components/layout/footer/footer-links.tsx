"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { navigationItems } from "@/data/navigation";

export function FooterLinks() {
    const pathname = usePathname();
    const isHomepage = pathname === "/";

    return (
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 max-w-md">
            {navigationItems.map((item) => (
                <li key={item.href}>
                    {/* Sections only exist on the homepage, so other routes link to
                        the homepage target instead of a fragment on the current page. */}
                    <a
                        href={isHomepage ? item.href : `/${item.href}`}
                        className="inline-block py-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                        {item.name}
                    </a>
                </li>
            ))}
        </ul>
    );
}
export default FooterLinks;
