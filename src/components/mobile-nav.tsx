import React from "react";
import { docsConfig } from "@/config/docs";
import { siteConfig } from "@/config/site";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Icons } from "./icons";
import { motion } from "framer-motion";
import Link, { LinkProps } from "next/link";
import { cn } from "@/lib/utils";
export default function MobileNav({
    mobileMenuOpen,
    toggleMobileMenu,
}: {
    mobileMenuOpen: boolean;
    toggleMobileMenu: any;
}) {
    return (
        <Sheet>
            <SheetTrigger asChild>
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
                        onClick={() => toggleMobileMenu(!mobileMenuOpen)}
                    >
                        {Icons.threeBar()}
                    </button>
                </motion.div>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0 z-100">
                <MobileLink
                    href="/"
                    className="flex items-center"
                    onOpenChange={toggleMobileMenu}
                >
                    <Icons.logo className="mr-2 h-4 w-4" />
                    <span className="font-bold">{siteConfig.name}</span>
                </MobileLink>
                <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
                    <div className="flex flex-col space-y-3">
                        {docsConfig.mainNav?.map(
                            (item) =>
                                item.href && (
                                    <MobileLink
                                        className="hover:underline"
                                        key={item.href}
                                        href={item.href}
                                        onOpenChange={toggleMobileMenu}
                                    >
                                        {item.title}
                                    </MobileLink>
                                ),
                        )}
                    </div>
                    <div className="flex flex-col space-y-2">
                        {docsConfig.sidebarNav.map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col space-y-3 pt-6 "
                            >
                                <h4 className="font-medium">{item.title}</h4>
                                {item?.items?.length &&
                                    item.items.map((item) => (
                                        <React.Fragment key={item.href}>
                                            {!item.disabled &&
                                                (item.href ? (
                                                    <MobileLink
                                                        href={item.href}
                                                        onOpenChange={
                                                            toggleMobileMenu
                                                        }
                                                        className="text-muted-foreground hover:underline"
                                                    >
                                                        {item.title}
                                                    </MobileLink>
                                                ) : (
                                                    item.title
                                                ))}
                                        </React.Fragment>
                                    ))}
                            </div>
                        ))}
                    </div>
                </ScrollArea>
            </SheetContent>
        </Sheet>
    );
}

interface MobileLinkProps extends LinkProps {
    onOpenChange?: (open: boolean) => void;
    children: React.ReactNode;
    className?: string;
}

function MobileLink({
    href,
    onOpenChange,
    className,
    children,
    ...props
}: MobileLinkProps) {
    // const router = useRouter();
    return (
        <Link
            href={href}
            onClick={() => {
                // router.push(href.toString());
                onOpenChange?.(false);
            }}
            className={cn(className)}
            {...props}
        >
            {children}
        </Link>
    );
}
