import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import LoremIpsum from "react-lorem-ipsum";
import { StaticImageData } from "next/image";

import aPic from "../../../public/image/a.jpeg";
import bPic from "../../../public/image/b.jpeg";
import cPic from "../../../public/image/c.jpeg";
import dPic from "../../../public/image/d.jpeg";
import ePic from "../../../public/image/e.jpeg";
import fPic from "../../../public/image/f.jpeg";
import gPic from "../../../public/image/g.jpeg";

interface Item {
    id: string;
    category: string;
    title: string;
    pointOfInterest: number;
    backgroundColor: string;
    image: StaticImageData;
}

export const items: Item[] = [
    // Photo by ivan Torres on Unsplash
    {
        id: "c",
        category: "Pizza",
        title: "5 Food Apps Delivering the Best of Your City",
        pointOfInterest: 80,
        backgroundColor: "#814A0E",
        image: aPic,
    },
    // Photo by Dennis Brendel on Unsplash
    {
        id: "f",
        category: "How to",
        title: "Arrange Your Apple Devices for the Gram",
        pointOfInterest: 120,
        backgroundColor: "#959684",
        image: bPic,
    },
    // Photo by Alessandra Caretto on Unsplash
    {
        id: "a",
        category: "Pedal Power",
        title: "Map Apps for the Superior Mode of Transport",
        pointOfInterest: 260,
        backgroundColor: "#5DBCD2",
        image: cPic,
    },
    // Photo by Taneli Lahtinen on Unsplash
    {
        id: "g",
        category: "Holidays",
        title: "Our Pick of Apps to Help You Escape From Apps",
        pointOfInterest: 200,
        backgroundColor: "#8F986D",
        image: dPic,
    },
    // Photo by Simone Hutsch on Unsplash
    {
        id: "d",
        category: "Photography",
        title: "The Latest Ultra-Specific Photography Editing Apps",
        pointOfInterest: 150,
        backgroundColor: "#FA6779",
        image: ePic,
    },
    // Photo by Siora Photography on Unsplash
    {
        id: "h",
        category: "They're all the same",
        title: "100 Cupcake Apps for the Cupcake Connoisseur",
        pointOfInterest: 60,
        backgroundColor: "#282F49",
        image: fPic,
    },
    // Photo by Ali Abdul Rahman on Unsplash
    {
        id: "b",
        category: "Holidays",
        title: "Seriously the Only Escape is the Stratosphere",
        pointOfInterest: 260,
        backgroundColor: "#CC555B",
        image: gPic,
    },
];

const openSpring = { type: "spring", stiffness: 200, damping: 30 };

export function Item({ id }: { id: string }) {
    const category = items.find((item) => item.id === id)!.category;
    const title = items.find((item) => item.id === id)!.title;

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.15 } }}
                transition={{ duration: 0.2, delay: 0.15 }}
                style={{ pointerEvents: "auto" }}
                className="overlay"
            >
                <Link href="#" />
            </motion.div>
            <div className="card-content-container open">
                <motion.div
                    className="card-content"
                    layoutId={`card-container-${id}`}
                >
                    <motion.div
                        className="card-image-container"
                        layoutId={`card-image-container-${id}`}
                    >
                        <img
                            className="card-image"
                            src={`images/${id}.jpg`}
                            alt=""
                        />
                    </motion.div>
                    <motion.div
                        className="title-container"
                        layoutId={`title-container-${id}`}
                    >
                        <span className="category">{category}</span>
                        <h2>{title}</h2>
                    </motion.div>
                    <motion.div className="content-container" animate>
                        <LoremIpsum
                            p={6}
                            avgWordsPerSentence={6}
                            avgSentencesPerParagraph={4}
                        />
                    </motion.div>
                </motion.div>
            </div>
        </>
    );
}

export function Card({
    id,
    category,
    title,
    pointOfInterest,
    backgroundColor,
    image,
    selectedId,
    setSelectedId,
}: {
    id: string;
    category: string;
    title: string;
    pointOfInterest: number;
    backgroundColor: string;
    image: StaticImageData;
    selectedId: string | null;
    setSelectedId: any;
}) {
    return (
        <li className={`card`}>
            <div className="card-content-container">
                <motion.div
                    className="card-content"
                    layoutId={`card-container-${id}`}
                >
                    <motion.div
                        className="card-image-container"
                        layoutId={`card-image-container-${id}`}
                    >
                        <img className="card-image" src={image.src} alt="" />
                    </motion.div>
                    <motion.div
                        className="title-container"
                        layoutId={`title-container-${id}`}
                    >
                        <span className="category">{category}</span>
                        <h2>{title}</h2>
                    </motion.div>
                </motion.div>
            </div>
            <Link href={`#`} className={`card-open-link`} />
        </li>
    );
}

export function List({
    selectedId,
    setSelectedId,
}: {
    selectedId: string | null;
    setSelectedId: any;
}) {
    return (
        <div className=" w-full max-w-5xl flex-[1_1_100%] py-11 px-6">
            <ul className="card-list">
                {items.map((card) => (
                    <Card
                        key={card.id}
                        {...card}
                        selectedId={selectedId}
                        setSelectedId={setSelectedId}
                    />
                ))}
            </ul>
        </div>
    );
}

export function Store({
    match,
    setSelectedId,
}: {
    match: any;
    setSelectedId: any;
}) {
    let { id } = match.params;
    const imageHasLoaded = true;

    return (
        <>
            <List selectedId={id} setSelectedId={setSelectedId} />
            <AnimatePresence>
                {id && imageHasLoaded && <Item id={id} key="item" />}
            </AnimatePresence>
        </>
    );
}
