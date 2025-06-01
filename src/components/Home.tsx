import { SparklesCore } from "./ui/sparkles";
import { Connect } from "./Connect";
import NavbarDemo from "./Navbar";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
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
            <div className="absolute top-0 z-[-2] h-full w-full bg-gradient-to-br from-black via-[#0f0b1e] to-black" />

            {/* Sparkles Layer */}
            <div className="absolute inset-0 z-[-1] w-full h-full">
                <SparklesCore
                    id="tsparticlesfullpage"
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.1}
                    particleDensity={5}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />
            </div>

            {/* Content */}
            <div>
                <NavbarDemo />
                <div className="w-full  text-center  relative z-20 -mt-20">
                    <h1 className="text-3xl md:text-5xl  lg:text-6xl font-semibold opacity-80 text-white leading-snug outfit-bold">
                        programming ideas into reality
                    </h1>
                    <p className="eb-garamond-font opacity-90 bg-gradient-to-b from-zinc-700 via-zinc-200 to-zinc-50 bg-clip-text font-light tracking-wide text-transparent md:text-5xl lg:text-6xl leading-snug">
                        simple, scalable, secure.
                    </p>
                </div>
                <p className="mt-10 mb-10 text-center text-2xl outfit-font text-white backdrop-blur-2xl outfit-bold  lg:2xl:">
                    Hello, I'm Siddharth Aasal, aspiring Full Stack & Blockchain Developer
                </p>

                <div className="animate-fadeInUp z-700 mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row md:mt-8 md:gap-16">


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
                                        <p className="outfit-font">Copied to Clipboard</p>
                                    </>

                                )
                                :
                                (
                                    <>
                                        <ContentCopyIcon className="h-5 w-5" />
                                        <p className="outfit-font">siddharthaasal@gmail.com</p>
                                    </>

                                )
                        }
                    </div>
                </div>


            </div>

            {/* Glowing Ambient Effect */}
            <div
                className="absolute bottom-[-50px] left-1/2 z-[-1] h-[400px] w-[1200px] -translate-x-1/2 transform overflow-hidden"
                style={{
                    maskImage: "linear-gradient(to right, transparent, black 30%, black 70%, transparent)",
                    WebkitMaskImage: "linear-gradient(to right, transparent, black 30%, black 70%, transparent)",
                }}
            >
                <div
                    className="absolute bottom-[167px] left-1/2 h-[111px] w-[787px] -translate-x-1/2 transform overflow-hidden bg-[radial-gradient(50%_50%_at_50%_50%,#5506ba_0%,rgba(10,10,10,0)_100%)] blur-[57px]"
                    style={{
                        transform: "translateX(57px)",
                    }}
                />
                <div className="absolute right-[-432px] bottom-[-753px] left-[-454px] h-[955px] rounded-[100%] bg-gradient-to-b from-white to-transparent" />
                <div
                    className="absolute right-[-510px] bottom-[-759px] left-[-532px] aspect-[2.34/1] h-[956px] rounded-[100%] bg-black shadow-[inset_0_2px_20px_#fff,0_-10px_50px_1px_#ffffff7d]"
                    style={{
                        boxShadow:
                            "inset 0 2px 23px #fff, 0 -10px 53px 1px rgba(255,255,255,0.5)",
                    }}
                />
            </div>


        </div>
    );
}
