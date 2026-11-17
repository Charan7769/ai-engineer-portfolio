export interface SocialLink {
    name: string;
    url: string;
    iconName: string;
}

export const socialLinks: SocialLink[] = [
    {
        name: "GitHub",
        url: "https://github.com",
        iconName: "Github",
    },
    {
        name: "LinkedIn",
        url: "https://linkedin.com",
        iconName: "Linkedin",
    },
    {
        name: "Twitter",
        url: "https://twitter.com",
        iconName: "Twitter",
    },
    {
        name: "Email",
        url: "mailto:alex@example.com",
        iconName: "Mail",
    },
];
export default socialLinks;
