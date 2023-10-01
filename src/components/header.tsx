"use client";
import Image from "next/image";
import React, { Fragment, useState } from "react";
import { Icons } from "./icons";
import NavigationMenuUIHero from "./navigation-menu-ui-hero";
import MobileNav from "@/components/mobile-nav";
import { motion } from "framer-motion";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link, { LinkProps } from "next/link";
import { cn } from "@/lib/utils";

export default function Header() {
    const [mobileMenuOpen, toggleMobileMenu] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-[60] py-4  md:py-22 transition-all duration-300 text-[color:white]">
            <div className="container flex h-14 items-center flex-row justify-between">
                <div className="mr-4 flex flex-row">
                    {Icons.logoWithTitle()}
                    <nav className="hidden md:flex items-center space-x-6 font-normal justify-between">
                        <NavigationMenuUIHero />
                    </nav>
                </div>
                <div className="flex flex-row">
                    <NavigationMenu className="hidden md:flex justify-end items-end">
                        <NavigationMenuList>
                            <NavigationMenuItem className="flex flex-row flex-wrap justify-end xs:w-3-cols md:w-5-cols lg:w-4-cols">
                                <motion.div whileHover={{ scale: 1.05 }}>
                                    <Link href="/login" legacyBehavior passHref>
                                        <NavigationMenuLink
                                            className={cn(
                                                navigationMenuTriggerStyle(),
                                                "text-md font-normal hover:bg-accent/50 hover:outline-none outline",
                                            )}
                                        >
                                            Coming Soon
                                        </NavigationMenuLink>
                                    </Link>
                                </motion.div>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    <MobileNav
                        mobileMenuOpen={mobileMenuOpen}
                        toggleMobileMenu={toggleMobileMenu}
                    />
                </div>
            </div>
        </header>
    );
}
