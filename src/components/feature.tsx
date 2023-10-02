"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { List } from "@/components/test-framer/test-feature";

export default function Feature() {
    const [animated, setAnimated] = useState(false);
    const [selectedId, setSelectedId] = useState(null) as [
        string | null,
        React.Dispatch<React.SetStateAction<string | null>>,
    ];

    const handleSelection = (id: string | null) => {
        console.log("selectionId:" + id);
    };

    return (
        <section className="py-20 px-10 relative bg-dark w-full min-h-[300px] lg:min-h-[500px] flex justify-start items-center flex-col text-background">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="flex flex-col items-center text-center max-w-2xl"
            >
                <p className="text-muted-foreground my-2">Engage Community</p>
                <h2 className="text-3xl font-semibold text-popover ">
                    A Modern Mutual Aid Movement
                </h2>
                <p className="text-muted-foreground mt-6 opacity-70 ">
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
