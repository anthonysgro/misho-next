"use client";
import Image from "next/image";
import { Fragment, useState } from "react";
import { Icons } from "./icons";
// import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import NavigationMenuUIHero from "./navigation-menu-ui-hero";
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
} from "@heroicons/react/24/outline";
import {
    ChevronDownIcon,
    PhoneIcon,
    PlayCircleIcon,
} from "@heroicons/react/20/solid";
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
import Link from "next/link";
import { cn } from "@/lib/utils";

import ThemeToggle from "@/components/theme-toggle";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleMobileMenuClick = () => {
        // TODO: Handle the mobile menu click
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-[60] py-4 xs:h-64 md:h-80 md:py-22 transition-all duration-300 text-[color:white]">
            <div className="container flex h-14 items-center flex-row justify-between">
                <div className="mr-4 flex flex-row">
                    <a href="#" className="mr-24 flex items-center space-x-2">
                        {Icons.connectLogo()}
                        <span className="font-semibold sm:inline-block text-xl">
                            Thingy
                        </span>
                    </a>
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
                                            Log In
                                        </NavigationMenuLink>
                                    </Link>
                                </motion.div>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{
                            scale: 0.95,
                            borderRadius: "100%",
                        }}
                    >
                        <button
                            className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 py-2 mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                            type="button"
                            aria-haspopup="dialog"
                            aria-expanded="false"
                            aria-controls="radix-:R15hja:"
                            data-state="closed"
                            onClick={() => handleMobileMenuClick()}
                        >
                            {Icons.threeBar()}
                        </button>
                    </motion.div>
                </div>
            </div>
        </header>
    );
}
