"use client";

// https://www.pexels.com/license/
import UIHeroVideo from "../../public/video/misho-ui-hero-video-filter-1.mp4";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";

export default function LandingVideo() {
    const videoRef: React.MutableRefObject<null | HTMLVideoElement> =
        useRef(null);
    const [paused, setPaused] = useState(false);

    const handleVideoPlayPause = () => {
        setPaused(!paused);
        paused ? videoRef.current?.play() : videoRef.current?.pause();
    };

    return (
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
    );
}
