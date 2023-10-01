import { MainNavItem, SidebarNavItem } from "@/types/nav";

interface DocsConfig {
    mainNav: MainNavItem[];
    sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
    mainNav: [
        {
            title: "Documentation",
            href: "/docs",
        },
        {
            title: "Components",
            href: "/docs/components/accordion",
        },
        {
            title: "Themes",
            href: "/themes",
        },
        {
            title: "Examples",
            href: "/examples",
        },
        {
            title: "Figma",
            href: "/docs/figma",
        },
        {
            title: "GitHub",
            href: "https://github.com/shadcn/ui",
            external: true,
        },
        {
            title: "Twitter",
            href: "https://twitter.com/shadcn",
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
                    title: "components.json",
                    href: "/docs/components-json",
                    items: [],
                },
                {
                    title: "Theming",
                    href: "/docs/theming",
                    items: [],
                },
                {
                    title: "Dark mode",
                    href: "/docs/dark-mode",
                    items: [],
                },
                {
                    title: "CLI",
                    href: "/docs/cli",
                    items: [],
                },
                {
                    title: "Typography",
                    href: "/docs/components/typography",
                    items: [],
                },
                {
                    title: "Figma",
                    href: "/docs/figma",
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
