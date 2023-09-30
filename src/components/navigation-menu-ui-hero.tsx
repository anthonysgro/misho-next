"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Give100",
        href: "/initiatives/give100",
        description:
            "A giving model encouraging monthly gifts to our community members.",
    },
    {
        title: "Membership",
        href: "/docs/primitives/hover-card",
        description: "Support our digital efforts with a recurring membership.",
    },
    {
        title: "Volunteer",
        href: "/docs/primitives/progress",
        description: "Help us host events to uplift and support our community",
    },
];

export default function NavigationMenuUIHero() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-md font-normal">
                        Get Involved
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <a
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        href="/"
                                    >
                                        <Icons.logo className="h-6 w-6" />
                                        <div className="mb-2 mt-4 text-lg font-medium">
                                            Donate
                                        </div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            Make an immediate impact with your
                                            financial gift today.
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            <ListItem href="/volunteer" title="Volunteer">
                                Get active in the community and help combat
                                poverty.
                            </ListItem>
                            <ListItem href="/connect" title="Connect">
                                Spread the word and interact with our social
                                media pages.
                            </ListItem>
                            <ListItem
                                href="/docs/primitives/typography"
                                title="Learn More"
                            >
                                Read more about our organization, mission, and
                                activism.
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-md font-normal">
                        Initiatives
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {components.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/docs" legacyBehavior passHref>
                        <NavigationMenuLink
                            className={cn(
                                navigationMenuTriggerStyle(),
                                "text-md font-normal",
                            )}
                        >
                            About Us
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className,
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">
                        {title}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";

// export default function NavigationMenuUIHero() {
//     return (
//         <NavigationMenu className="lg:flex lg:flex-1 lg:justify-end">
//             <NavigationMenuList>
//                 <NavigationMenuItem>
//                     <NavigationMenuTrigger
//                         className={cn(
//                             navigationMenuTriggerStyle(),
//                             navigationMenuHeroStyle2(),
//                         )}
//                     >
//                         Get Involved
//                     </NavigationMenuTrigger>
//                     <NavigationMenuContent>
//                         <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
//                             <li className="text-md row-span-3">
//                                 <NavigationMenuLink asChild>
//                                     <a
//                                         className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
//                                         href="/"
//                                     >
//                                         <Icons.logo className="h-6 w-6" />
//                                         <div className="mb-2 mt-4 text-md font-medium">
//                                             Donate
//                                         </div>
//                                         <p className="text-sm leading-tight text-muted-foreground">
//                                             Make an immediate impact with your
//                                             financial gift today.
//                                         </p>
//                                     </a>
//                                 </NavigationMenuLink>
//                             </li>
//                             <NagationListItemUIHero
//                                 href="/volunteer"
//                                 title="Volunteer"
//                             >
//                                 Get active in the community and help combat
//                                 poverty.
//                             </NagationListItemUIHero>
//                             <NagationListItemUIHero
//                                 href="/connect"
//                                 title="Connect"
//                             >
//                                 Spread the word and interact with our social
//                                 media pages.
//                             </NagationListItemUIHero>
//                             <NagationListItemUIHero
//                                 href="/learn-more"
//                                 title="Learn more"
//                             >
//                                 Read more about our organization, mission, and
//                                 activism.
//                             </NagationListItemUIHero>
//                         </ul>
//                     </NavigationMenuContent>
//                 </NavigationMenuItem>
//                 <NavigationMenuItem>
//                     <NavigationMenuTrigger
//                         className={cn(
//                             navigationMenuTriggerStyle(),
//                             navigationMenuHeroStyle2(),
//                         )}
//                     >
//                         Components
//                     </NavigationMenuTrigger>
//                     <NavigationMenuContent>
//                         <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
//                             {components.map((component) => (
//                                 <NagationListItemUIHero
//                                     key={component.title}
//                                     title={component.title}
//                                     href={component.href}
//                                 >
//                                     {component.description}
//                                 </NagationListItemUIHero>
//                             ))}
//                         </ul>
//                     </NavigationMenuContent>
//                 </NavigationMenuItem>
//             </NavigationMenuList>
//             <NavigationMenuList>
//                 <NavigationMenuItem>
//                     <Link href="/docs" legacyBehavior passHref>
//                         <NavigationMenuTriggerNoChevron
//                             className={cn(
//                                 navigationMenuTriggerStyle(),
//                                 navigationMenuHeroStyle2(),
//                             )}
//                         >
//                             About Us
//                         </NavigationMenuTriggerNoChevron>
//                     </Link>
//                 </NavigationMenuItem>
//             </NavigationMenuList>
//         </NavigationMenu>
//     );
// }

const NagationListItemUIHero = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className,
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">
                        {title}
                    </div>
                    <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
NagationListItemUIHero.displayName = "NagationListItemUIHero";
