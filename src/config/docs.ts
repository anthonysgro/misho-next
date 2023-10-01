import { MainNavItem, SidebarNavItem } from "@/types/nav";

interface DocsConfig {
    mainNav: MainNavItem[];
    sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
    mainNav: [
        {
            title: "Log In / Sign Up",
            href: "/login",
        },
        {
            title: "Donate",
            href: "/docs/components/accordion",
        },
        {
            title: "Volunteer",
            href: "/themes",
        },
        {
            title: "Learn More",
            href: "/examples",
        },
        {
            title: "GitHub",
            href: "https://github.com/anthonysgro",
            external: true,
        },
        {
            title: "Twitter",
            href: "https://twitter.com/MishoAid",
            external: true,
        },
    ],
    sidebarNav: [
        {
            title: "Getting Started",
            items: [
                {
                    title: "Introduction",
                    href: "/docs",
                    items: [],
                },
                {
                    title: "Installation",
                    href: "/docs/installation",
                    items: [],
                },
                {
                    title: "Changelog",
                    href: "/docs/changelog",
                    items: [],
                },
                {
                    title: "About",
                    href: "/docs/about",
                    items: [],
                },
            ],
        },
    ],
};
