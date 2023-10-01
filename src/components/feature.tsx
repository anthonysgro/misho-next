"use client";

import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function Feature() {
    const [animated, setAnimated] = useState(false);

    const x = useMotionValue(0);
    const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0]);

    return (
        <section className="py-20 px-10 relative dark bg-background w-full min-h-[300px] lg:min-h-[500px] flex justify-start items-center flex-col">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                // viewport={{ once: true,  }}
                className="flex flex-col items-center text-center max-w-2xl"
            >
                <p className="text-primary my-2">Engage Community</p>
                <h2 className="text-3xl font-semibold text-secondary-foreground ">
                    A Modern Mutual Aid Movement
                </h2>
                <p className="text-accent-foreground mt-6 opacity-70 ">
                    Mutual Aid is a practice and politics that emphasizes
                    solidarity rather than charity. What does that mean? It
                    means we recognize that our well-being, health and dignity
                    are all bound up in each other.
                </p>
            </motion.div>
            <motion.div
                layout
                className="bg-blue w-60 h-60"
                animate={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 270, 270, 0],
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }}
            />

            <button onClick={() => setAnimated(!animated)}>
                Click to animate
            </button>
        </section>
    );
}
