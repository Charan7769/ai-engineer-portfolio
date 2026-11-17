import React from "react";
import { navigationItems } from "@/data/navigation";

export function FooterLinks() {
    return (
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 max-w-md">
            {navigationItems.map((item) => (
                <li key={item.href}>
                    <a
                        href={item.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                        {item.name}
                    </a>
                </li>
            ))}
        </ul>
    );
}
export default FooterLinks;
