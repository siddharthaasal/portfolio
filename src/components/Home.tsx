import { SparklesCore } from "./ui/sparkles";
import { Connect } from "./Connect";
import NavbarDemo from "./Navbar";

import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DoneAllIcon from '@mui/icons-material/DoneAll';

import { useState, useEffect } from "react";

export function Home() {

    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("siddharthaasal@gmail.com");
        setCopied(true);
    };

    useEffect(() => {
        if (copied) {
            const timeout = setTimeout(() => setCopied(false), 5000);
            return () => clearTimeout(timeout);
        }
    }, [copied]);


    return (

        <div className="relative h-screen w-full antialiased selection:bg-purple-600/20 selection:text-purple-400 overflow-hidden flex items-center justify-center">
            {/* Gradient Background: Black to deep purple */}
            <div className="absolute top-0 z-[-2] h-full w-full bg-gradient-to-br from-black via-[#0f0b1e] to-[#1a0e2a]" />

            {/* Sparkles Layer */}
            <div className="absolute inset-0 z-[-1] w-full h-full">
                <SparklesCore
                    id="tsparticlesfullpage"
                    background="transparent"
                    minSize={0.6}
                    maxSize={1}
                    particleDensity={4}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />
            </div>

            {/* Content */}

            <div>
                <NavbarDemo />
                <div className="w-full py-px text-center  relative z-20">
                    <h1 className="md:text-7xl text-3xl lg:text-6xl font-extrabold text-white leading-snug outfit-font">
                        Coding ideas into reality
                    </h1>
                    <p className="eb-garamond-font bg-gradient-to-b from-zinc-700 via-zinc-200 to-zinc-50 bg-clip-text font-light tracking-wide text-transparent md:text-5xl lg:text-6xl leading-snug">
                        simple reliable creative
                    </p>
                </div>
                <p className="mt-6 text-center text-lg outfit-font text-white/80">
                    Hello, I'm Siddharth Aasal, a Full Stack & Blockchain Developer
                </p>

                <div className="animate-fadeInUp z-100 mt-4 flex flex-col items-center justify-center gap-6 sm:flex-row md:mt-8 md:gap-10">


                    <Connect />

                    <div
                        onClick={handleCopy}
                        className="relative flex items-center gap-2 py-3 text-base font-light text-white/75 cursor-pointer hover:text-white/90 select-none"
                        title="Click to copy email"
                    >

                        {
                            copied ?
                                (
                                    <>
                                        <DoneAllIcon className="h-5 w-5" />
                                        <p>Copied to Clipboard</p>
                                    </>

                                )
                                :
                                (
                                    <>
                                        <ContentCopyIcon className="h-5 w-5" />
                                        <p>siddharthaasal@gmail.com</p>
                                    </>

                                )
                        }
                    </div>
                </div>


            </div>




        </div>
    );
}
