import Header from "@/components/header";
import React from "react";
import LandingVideo from "@/components/landing-video";
import LandingText from "@/components/landing-text";
export default function Home() {
    return (
        <main>
            <Header />
            <div className="relative h-screen w-full min-h-[500px] lg:min-h-[600px] text-[color:white]">
                <LandingVideo />
                <LandingText />
            </div>
            <section>Something</section>
        </main>
    );
}
