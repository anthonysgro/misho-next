import Header from "@/components/header";
import React from "react";
import LandingVideo from "@/components/landing-video";
import LandingText from "@/components/landing-text";
import Feature from "@/components/feature";

const items = [{ title: "Okay", subtitle: "nuhuh", id: 0 }];

export default function Home() {
    return (
        <main>
            <Header />
            <div className="relative h-screen w-full min-h-[500px] lg:min-h-[600px] text-[color:white]">
                <LandingVideo />
                <LandingText />
            </div>
            <Feature />
        </main>
    );
}
