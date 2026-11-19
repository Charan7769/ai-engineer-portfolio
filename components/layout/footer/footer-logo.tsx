"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";

/**
 * Footer brand link. Kept as its own client component so the rest of the footer
 * stays a server component.
 */
export function FooterLogo() {
    const pathname = usePathname();
    const isHomepage = pathname === "/";

    const content = (
        <>
            <span className="text-primary">&lt;</span>
            <span>{siteConfig.author}</span>
            <span className="text-primary"> /&gt;</span>
        </>
    );

    return isHomepage ? (
        <a href="#home" className="text-lg font-bold tracking-wider">
            {content}
        </a>
    ) : (
        <Link href="/" className="text-lg font-bold tracking-wider">
            {content}
        </Link>
    );
}
export default FooterLogo;
