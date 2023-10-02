"use client";

import React, { useState } from "react";
import {
    motion,
    useMotionValue,
    useTransform,
    AnimateSharedLayout,
} from "framer-motion";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {
    Store,
    Card,
    List,
    items,
} from "@/components/test-framer/test-feature";

export default function Feature() {
    const [animated, setAnimated] = useState(false);
    const [selectedId, setSelectedId] = useState(null) as [
        string | null,
        React.Dispatch<React.SetStateAction<string | null>>,
    ];

    return (
        <section className="py-20 px-10 relative dark bg-background w-full min-h-[300px] lg:min-h-[500px] flex justify-start items-center flex-col">
            <motion.div
                initial={{ opacity: 1 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
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
            <List selectedId={selectedId} setSelectedId={setSelectedId} />
        </section>
    );
}
