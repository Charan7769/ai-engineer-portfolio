export interface NavigationItem {
    name: string;
    /** In-page section target on the homepage ("#about"); other routes prefix it with "/". */
    href: string;
}

export const navigationItems: NavigationItem[] = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
];
export default navigationItems;
