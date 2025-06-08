import { SparklesCore } from "./ui/sparkles";
import { Connect } from "./Connect";
import NavbarDemo from "./Navbar";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DoneAllIcon from '@mui/icons-material/DoneAll';

import { useState, useEffect } from "react";

import Skills from "./Skills";
import Projects from "./Projects";
import About from "./About";

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
        <main>
            {/* home */}
            <section id="home">
                <div className="relative min-h-screen w-full antialiased selection:bg-purple-600/20 selection:text-purple-400 overflow-hidden flex flex-col items-center">
                    {/* Background Gradient */}
                    <div className="absolute top-0 left-0 z-[-2] h-full w-full bg-gradient-to-br from-black via-[#0f0b1e] to-black" />

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

                    {/* Navbar */}
                    <div className="w-full">
                        <NavbarDemo />
                    </div>

                    {/* Main Content */}
                    <div className="animate-fade-in-up flex-grow flex flex-col justify-center items-center w-full px-4 text-center z-20 mt-12 sm:mt-0">
                        <h1 className="animate-fade-in hidden sm:block text-3xl sm:text-5xl lg:text-6xl font-semibold opacity-80 text-white leading-snug outfit-bold">
                            programming ideas into reality
                        </h1>
                        <h1 className="sm:hidden text-3xl sm:text-5xl lg:text-6xl font-semibold opacity-80 text-white leading-snug outfit-bold">
                            coding ideas into reality
                        </h1>

                        <p className="eb-garamond-font mt-4 opacity-90 bg-gradient-to-b from-zinc-700 via-zinc-200 to-zinc-50 bg-clip-text font-light tracking-wide text-transparent text-2xl sm:text-4xl lg:text-6xl leading-snug">
                            simple, scalable, secure.
                        </p>

                        <p className="mt-6 text-white text-lg sm:text-xl outfit-font outfit-bold max-w-2xl">
                            Hello, I'm Siddharth Aasal, aspiring Full Stack & Blockchain Developer
                        </p>

                        {/* Connect + Copy */}
                        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-16">
                            <Connect />

                            <div
                                onClick={handleCopy}
                                className="flex items-center gap-2 py-3 px-4 rounded-md text-sm sm:text-base font-light text-white/75 cursor-pointer hover:text-white/90 hover:bg-white/5 transition"
                                title="Click to copy email"
                            >
                                {copied ? (
                                    <>
                                        <DoneAllIcon className="h-5 w-5" />
                                        <span className="outfit-font">Copied to Clipboard</span>
                                    </>
                                ) : (
                                    <>
                                        <ContentCopyIcon className="h-5 w-5" />
                                        <span className="outfit-font">siddharthaasal@gmail.com</span>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Glowing Ambient Bottom Effect */}
                    <div
                        className="hidden sm:block absolute bottom-[-50px] left-1/2 z-[-1] h-[400px] w-[1200px] -translate-x-1/2 transform overflow-hidden"
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
            </section>
            <section id="skills">
                <Skills />
            </section>
            <section id="about">
                <About />
            </section>
            <section id="projects">
                <Projects />
            </section>
        </main>
    );
}
