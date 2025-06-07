import steelFlower1 from "../assets/steel-flower.webp"
import NavbarDemo from "./Navbar"
import hardhatIcon from "../assets/Hardhat.png";
import ganacheIcon from "../assets/ganacheIcon.svg";
import hyperledgerIcon from "../assets/hyperledger.svg";
import javaIcon from "../assets/java.svg"

import { useState, useEffect } from "react";

export default function Skills() {

    const skillsData = [
        {
            category: "Frontend",
            items: [
                { name: "ReactJS", icon: "https://cdn.simpleicons.org/react" },
                { name: "NextJS", icon: "https://cdn.simpleicons.org/nextdotjs/white" },
                { name: "TailwindCSS", icon: "https://cdn.simpleicons.org/tailwindcss" },
                { name: "ShadCN", icon: "https://cdn.simpleicons.org/shadcnui/white" },
                { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
                { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
                { name: "Java", icon: javaIcon }, // imported
                { name: "Python", icon: "https://cdn.simpleicons.org/python" },
            ],
        },
        {
            category: "Backend",
            items: [
                { name: "NodeJS", icon: "https://cdn.simpleicons.org/nodedotjs" },
                { name: "ExpressJS", icon: "https://cdn.simpleicons.org/express/white" },
                { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql" },
                { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/white" },
                { name: "Prisma", icon: "https://cdn.simpleicons.org/prisma/blue" },
                { name: "Zod", icon: "https://cdn.simpleicons.org/zod" },
                { name: "Recoil", icon: "https://cdn.simpleicons.org/recoil" },
                { name: "Supabase", icon: "https://cdn.simpleicons.org/supabase" },
            ],
        },
        {
            category: "Blockchain",
            items: [
                { name: "Ethereum", icon: "https://cdn.simpleicons.org/ethereum/white" },
                { name: "Solidity", icon: "https://cdn.simpleicons.org/solidity/white" },
                { name: "IPFS", icon: "https://cdn.simpleicons.org/ipfs" },
                { name: "Hardhat", icon: hardhatIcon }, // imported
                { name: "Ganache", icon: ganacheIcon }, // imported
                { name: "Web3.js", icon: "https://cdn.simpleicons.org/web3dotjs" },
                { name: "Hyperledger", icon: hyperledgerIcon }, // imported
            ],
        },
        {
            category: "Tools",
            items: [
                { name: "Git", icon: "https://cdn.simpleicons.org/git" },
                { name: "GitHub", icon: "https://cdn.simpleicons.org/github/white" },
                { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/silver" },
                { name: "Docker", icon: "https://cdn.simpleicons.org/docker" },
                { name: "Kubernetes", icon: "https://cdn.simpleicons.org/kubernetes" },
            ],
        },
    ];

    const [rotate, setRotate] = useState(0);

    useEffect(
        () => {
            const handleScroll = () => {
                const scrollTop = window.scrollY;
                const maxRotation = 100; // rotates between 0 and 30 deg
                const maxScroll = 600;
                const rotation = Math.min(maxRotation, scrollTop / maxScroll * maxRotation);
                setRotate(rotation);
            }
            window.addEventListener("scroll", handleScroll);
            // return () => window.removeEventListener("scroll", handleScroll);
        },
        []
    )
    return (
        <>
            <div className="relative w-screen h-screen bg-[#0a0a0a] text-white overflow-hidden">

                <NavbarDemo />

                {/* Decorative Flower */}
                <div
                    className="mt-12 absolute top-0 left-1/2 -translate-x-1/2 transition-transform duration-300 z-0 pointer-events-none select-none opacity-40"
                    style={{
                        // transform: `rotate(${rotate}deg)`,
                        WebkitMaskImage:
                            "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0.4) 80%, rgba(0,0,0,0) 100%)",
                        maskImage:
                            "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0.4) 80%, rgba(0,0,0,0) 100%)",
                    }}
                >
                    <img
                        src={steelFlower1}
                        alt="skills background"
                        className="w-[300px] md:w-[380px] object-cover opacity-50 transition-transform duration-300"
                        draggable="false"
                        style={{
                            transform: `rotate(${rotate}deg)`,
                            //     WebkitMaskImage:
                            //         "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0) 100%)",
                            //     maskImage:
                            //         "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0) 100%)",
                        }}
                    />
                </div>

                {/* Content Section */}
                <section className="relative z-10 mt-[160px] sm:mt-[240px] flex flex-col items-center justify-start px-4 sm:px-6 lg:px-8">
                    {/* Headings */}
                    <h2 className="text-center text-balance text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight outfit-font text-white">
                        <p className="mb-3 text-xs md:text-sm font-normal uppercase tracking-widest text-white/70">
                            My Skills
                        </p>
                        <span>
                            <span>The Digital </span>
                            <span
                                className="bg-clip-text text-transparent tracking-wide eb-garamond-font"
                                style={{
                                    backgroundImage: "linear-gradient(288deg, #ff8000, #f0c 53.2394%, #04f)",
                                }}
                            >
                                Palette
                            </span>
                        </span>
                    </h2>

                    {/* Skills Grid */}
                    <div className="mt-10 outfit-font">
                        {skillsData.map((section, index) => (
                            <div key={index} className="mb-4">
                                <ul className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
                                    {section.items.map((skill, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-center gap-2 px-3 py-1.5 text-xs sm:text-sm md:text-base rounded-xl border border-white/20 bg-neutral-900 text-white/80"
                                        >
                                            <img
                                                src={skill.icon}
                                                alt={skill.name}
                                                className="w-4 sm:w-5"
                                            />
                                            <span>{skill.name}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>



            </div>

            {/* strip */}
            {/* Vertical scrolling strip on right with vertical words */}
            {/* <div className="fixed top-0 right-8 h-full w-12 bg-transparent flex items-center justify-center pointer-events-none select-none z-20">
                <div className="overflow-hidden h-full relative w-full">
                    <ul
                        className="absolute animate-scroll-vertical outfit-font font-bold w-full text-center bg-white/85 text-black tracking-wider leading-tight space-y-1"
                        style={{
                            animationTimingFunction: "linear",
                            animationIterationCount: "infinite",
                            animationDirection: "alternate",
                        }}
                    >
                        {[
                            "SECURE",
                            "RESPONSIVE",
                            "DYNAMIC",
                            "SCALABLE",
                            "OPTIMIZED",
                            "RELIABLE",
                        ].flatMap((word, idx) => [
                            ...word.split("").map((letter, i) => (
                                <li key={`${idx}-${i}`} className="text-xl">
                                    {letter}
                                </li>
                            )),
                            // Add a blank spacer after each word to separate vertically
                            <li key={`${idx}-spacer`} className="h-4"></li>,
                        ])}

                        {[
                            "SECURE",
                            "RESPONSIVE",
                            "DYNAMIC",
                            "SCALABLE",
                            "OPTIMIZED",
                            "RELIABLE",
                        ].flatMap((word, idx) => [
                            ...word.split("").map((letter, i) => (
                                <li key={`repeat-${idx}-${i}`} className="text-xl">
                                    {letter}
                                </li>
                            )),
                            <li key={`repeat-${idx}-spacer`} className="h-4"></li>,
                        ])}
                    </ul>
                </div>
            </div> */}



        </>
    )
}