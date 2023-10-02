import { Button } from "@/components/ui/button";

export default function LandingText() {
    return (
        <div className="absolute top-0 right-0 bottom-0 left-0 z-[20] pointer-events-none bg-[rgba(0,0,0,0.45)]">
            <div className="container absolute bottom-14 md:bottom-22 left-0 right-0">
                <div className="cols-container">
                    <div className="relative z-40 lg:ml-40 xs:w-6-cols md:w-8-cols lg:w-8-cols mr-20 md:mr-20 lg:mr-60 ">
                        <h1 className="f-display-2 pointer-events-auto">
                            Uniting community through action & solidarity
                        </h1>
                        <h2 className="sr-only" id="heroLinks">
                            Quicklinks
                        </h2>
                        <Button
                            variant="outline"
                            className="mt-6 hidden mt-spacing-6 mr-60 py-0 sm:flex flex-row flex-wrap items-center md:mr-0 pointer-events-auto border-secondary light"
                        >
                            <a
                                href="/about"
                                className="ui-link group inline-block pt-[.3rem] pb-[.3rem] px-3 hover-hover:hover:bg-inverse hover-hover:hover:text-inverse hover-hover:hover:border-primary relative ui-link--inherit"
                                aria-label="Learn about Misho"
                            >
                                <span className="flex items-center">
                                    <span className="f-ui-1">
                                        Learn about Thingy
                                    </span>
                                </span>
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
