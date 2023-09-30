// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { ThemeToggle } from "@/components/theme-toggle";

import Header from "@/components/header";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import UIHeroVideo from "../../public/video/misho-ui-hero-video-filter-1.mp4";
import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <div>
            <Header />
            <div className="relative h-screen w-full min-h-[500px] lg:min-h-[600px]">
                <div className="theme-light-gray relative h-full w-full">
                    <video
                        src={UIHeroVideo}
                        className="relative z-20 h-full w-full object-cover transition-opacity duration-300 pointer  visible opacity-100"
                        autoPlay
                        muted
                        aria-hidden="true"
                        playsInline
                        loop
                        typeof="video/mp4"
                    >
                        Your browser does not support the video tag
                    </video>
                    <div className="absolute bottom-gutter right-gutter z-50">
                        <button
                            aria-label="Pause video"
                            className="ui-button relative inline-block px-16 xs:pt-9 xs:pb-10 lg:pt-10 lg:pb-12 h-44 lg:h-48 bg-inverse text-inverse hover-hover:hover:bg-primary hover-hover:hover:text-primary border border-primary hover-hover:hover:border-primary active:border-primary active:bg-primary active:text-primary w-44 flex xs:px-0 justify-center md:w-auto md:px-16 z-[300] focus:before:border-inverse"
                            type="button"
                            aria-hidden="true"
                        >
                            {/* <span className="flex items-center justify-center">
                                <svg
                                    data-v-cbc994d7=""
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    className="a-icon--pause400 a-icon--text a-icon--no-align flex mt-5 md:mt-0 f-ui-1 lg:mt-1 md:-ml-4"
                                    data-new=""
                                    // style="width: 1em; height: 1em;"
                                >
                                    <g data-v-cbc994d7="" fill="currentColor">
                                        <rect
                                            x="9.81"
                                            y="2"
                                            width="1.38"
                                            height="12"
                                        ></rect>
                                        <rect
                                            x="4.81"
                                            y="2"
                                            width="1.38"
                                            height="12"
                                        ></rect>
                                    </g>
                                </svg>
                                <span className="ml-8 hidden md:inline f-ui-1">
                                    Pause video
                                </span>
                            </span> */}
                        </button>
                    </div>
                </div>
                <div className="absolute top-0 right-0 bottom-0 left-0 z-[20] pointer-events-none bg-[rgba(0,0,0,0.45)] text-[color:white]">
                    {/* <div className="container absolute bottom-13 md:bottom-22 left-0 right-0"> */}
                    <div className="container absolute bottom-14 md:bottom-22 left-0 right-0">
                        <div className="cols-container">
                            <div className="relative z-40 lg:ml-40 xs:w-6-cols md:w-8-cols lg:w-8-cols lg:mr-60 md:mr-20 sm:mr-10">
                                <h1 className="f-display-2 pointer-events-auto">
                                    Uniting community through action &
                                    solidarity
                                </h1>
                                <h2 className="sr-only" id="heroLinks">
                                    Quicklinks
                                </h2>
                                <Button
                                    variant="outline"
                                    className="mt-spacing-6 mr-60 py-0 flex flex-row flex-wrap items-center md:mr-0 pointer-events-auto"
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
            </div>
        </div>
    );
    // return (
    //     <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //         <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
    //             <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
    //                 Get started by editing&nbsp;
    //                 <code className="font-mono font-bold">
    //                     src/app/page.tsx
    //                 </code>
    //             </p>
    //             <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
    //                 <a
    //                     className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
    //                     href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //                     target="_blank"
    //                     rel="noopener noreferrer"
    //                 >
    //                     By{" "}
    //                     <Image
    //                         src="/vercel.svg"
    //                         alt="Vercel Logo"
    //                         className="dark:invert"
    //                         width={100}
    //                         height={24}
    //                         priority
    //                     />
    //                 </a>
    //             </div>
    //         </div>

    //         <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
    //             <Image
    //                 className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
    //                 src="/next.svg"
    //                 alt="Next.js Logo"
    //                 width={180}
    //                 height={37}
    //                 priority
    //             />
    //         </div>

    //         <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
    //             <a
    //                 href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //                 className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //                 target="_blank"
    //                 rel="noopener noreferrer"
    //             >
    //                 <h2 className={`mb-3 text-2xl font-semibold`}>
    //                     Docs{" "}
    //                     <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //                         -&gt;
    //                     </span>
    //                 </h2>
    //                 <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //                     Find in-depth information about Next.js features and
    //                     API.
    //                 </p>
    //             </a>

    //             <a
    //                 href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //                 className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //                 target="_blank"
    //                 rel="noopener noreferrer"
    //             >
    //                 <h2 className={`mb-3 text-2xl font-semibold`}>
    //                     Learn{" "}
    //                     <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //                         -&gt;
    //                     </span>
    //                 </h2>
    //                 <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //                     Learn about Next.js in an interactive course
    //                     with&nbsp;quizzes!
    //                 </p>
    //             </a>

    //             <a
    //                 href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //                 className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //                 target="_blank"
    //                 rel="noopener noreferrer"
    //             >
    //                 <h2 className={`mb-3 text-2xl font-semibold`}>
    //                     Templates{" "}
    //                     <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //                         -&gt;
    //                     </span>
    //                 </h2>
    //                 <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //                     Explore the Next.js 13 playground.
    //                 </p>
    //             </a>

    //             <a
    //                 href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //                 className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //                 target="_blank"
    //                 rel="noopener noreferrer"
    //             >
    //                 <h2 className={`mb-3 text-2xl font-semibold`}>
    //                     Deploy{" "}
    //                     <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //                         -&gt;
    //                     </span>
    //                 </h2>
    //                 <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //                     Instantly deploy your Next.js site to a shareable URL
    //                     with Vercel.
    //                 </p>
    //             </a>
    //         </div>
    //         <Button>Click me</Button>
    //         <ThemeToggle />
    //     </main>
    // );
}
