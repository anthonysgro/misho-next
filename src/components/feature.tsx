"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Feature() {
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
        </section>
    );
}
