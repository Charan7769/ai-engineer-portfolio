import React from "react";
import { siteConfig } from "@/config/site";
import { SocialIcons } from "./social-icons";
import { FooterLinks } from "./footer-links";
import { FooterLogo } from "./footer-logo";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-background border-t border-border/40 py-12 md:py-16 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Left Side: Brand and Copyright */}
                <div className="flex flex-col items-center md:items-start gap-2">
                    <FooterLogo />
                    <p className="text-sm text-muted-foreground text-center md:text-left">
                        &copy; {currentYear} {siteConfig.name}. All rights reserved.
                    </p>
                </div>

                {/* Center: Quick Links */}
                <FooterLinks />

                {/* Right Side: Social Media Icons */}
                <SocialIcons />
            </div>
        </footer>
    );
}
export default Footer;
