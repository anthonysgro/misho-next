"use client";

import Header from "@/components/header";
import UIHeroVideo from "../../public/video/misho-ui-hero-video-filter-1.mp4";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { useState, useRef, useEffect } from "react";
import React from "react";

export default function Home() {
    const videoRef: React.MutableRefObject<null | HTMLVideoElement> =
        useRef(null);
    const [paused, setPaused] = useState(false);

    const handleVideoPlayPause = () => {
        setPaused(!paused);
        paused ? videoRef?.current?.play() : videoRef?.current?.pause();
    };

    return (
        <div>
            <Header />
            <div className="relative h-screen w-full min-h-[500px] lg:min-h-[600px] text-[color:white]">
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
                        ref={videoRef}
                    >
                        Your browser does not support the video tag
                    </video>
                    <div className="absolute bottom-gutter bottom-14 right-[24px] z-50">
                        <Button
                            variant="outline"
                            className="mt-spacing-6 lg:mr-10 lg:w-[100px] py-0 flex flex-row flex-wrap items-center md:mr-0 pointer-events-auto"
                            onClick={() => handleVideoPlayPause()}
                        >
                            <span className="flex items-center">
                                {paused ? Icons.play() : Icons.pause()}{" "}
                                <span className="f-ui-1 hidden md:flex">
                                    {paused ? "Play" : "Pause"}
                                </span>
                            </span>
                        </Button>
                    </div>
                </div>
                <div className="absolute top-0 right-0 bottom-0 left-0 z-[20] pointer-events-none bg-[rgba(0,0,0,0.45)]">
                    <div className="container absolute bottom-14 md:bottom-22 left-0 right-0">
                        <div className="cols-container">
                            <div className="relative z-40 lg:ml-40 xs:w-6-cols md:w-8-cols lg:w-8-cols mr-20 md:mr-20 lg:mr-60 ">
                                <h1 className="f-display-2 pointer-events-auto">
                                    Uniting community through action &
                                    solidarity
                                </h1>
                                <h2 className="sr-only" id="heroLinks">
                                    Quicklinks
                                </h2>
                                <Button
                                    variant="outline"
                                    className="hidden mt-spacing-6 mr-60 py-0 sm:flex flex-row flex-wrap items-center md:mr-0 pointer-events-auto"
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
}
