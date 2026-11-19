import { siteConfig } from "@/config/site";

export interface SocialLink {
    name: string;
    url: string;
    iconName: string;
}

/**
 * Footer social links.
 *
 * Destinations come from `siteConfig` so the footer and the hero always point
 * at the same profiles. Entries without a configured URL are dropped, which is
 * why no placeholder profile is listed here.
 */
export const socialLinks: SocialLink[] = [
    {
        name: "GitHub",
        url: siteConfig.github,
        iconName: "Github",
    },
    {
        name: "LinkedIn",
        url: siteConfig.linkedin,
        iconName: "Linkedin",
    },
    {
        name: "Email",
        url: `mailto:${siteConfig.email}`,
        iconName: "Mail",
    },
].filter((social) => social.url.trim().length > 0);

export default socialLinks;
