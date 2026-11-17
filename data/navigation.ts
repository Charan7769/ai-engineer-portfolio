export interface NavigationItem {
    name: string;
    href: string;
}

export const navigationItems: NavigationItem[] = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];
export default navigationItems;
