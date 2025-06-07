import NavbarDemo from "./Navbar";
import { CardStack } from "./ui/card-stack";
import { cn } from "@/lib/utils";

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';

export default function About() {
    return (
        <div className="relative w-full min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a] to-[#0f0f0f] text-white overflow-x-hidden">
            <NavbarDemo />

            <div className="mx-auto max-w-6xl px-4 pt-28 pb-44 md:pt-36 md:pb-52">
                <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-start">

                    {/* Left: About Text */}
                    <div className="w-full md:w-2/3 text-zinc-300 text-sm md:text-base leading-relaxed space-y-4">
                        <h2 className="text-xs tracking-widest text-purple-500 font-semibold uppercase mb-4">
                            More About Me
                        </h2>

                        <p>
                            Hey there! I’m <span className="text-purple-400 font-semibold">Siddharth Aasal</span>, a full stack and blockchain developer who’s obsessed with building things that are fast, clean, and just feel right.
                        </p>
                        <p>
                            I’ve built everything from interactive web apps to blockchain-based solutions. One of my proudest research projects involved designing a decentralized supply chain system for medical supplies — all about stopping counterfeits and boosting transparency.
                        </p>
                        <p>
                            Outside of code, I’ve led volunteer teams as an event manager for Hyperledger India Chapter’s student community and secured a podium finish for my research at a university competition. When I’m not coding or fiddling with new tech, you’ll find me trekking, arm-wrestling with friends, or solving Rubik’s cubes.
                        </p>
                        <p className="italic text-zinc-400 border-l-4 border-purple-600 pl-4 mt-6">
                            "I am not a visionary. I'm an engineer. I'm happy with the people who are wandering around looking at the stars but I am looking at the ground and I want to fix the pothole before I fall in."
                        </p>

                        <div className="flex mt-6 gap-4 items-center">
                            <a href="https://x.com/siddharthaasal" target="_blank" rel="noopener noreferrer" className="text-neutral-200 hover:text-white transition-colors">
                                <span className="sr-only">Twitter</span>
                                <XIcon />
                            </a>
                            <a href="https://github.com/siddharthaasal" target="_blank" rel="noopener noreferrer" className="text-neutral-200 hover:text-white transition-colors">
                                <span className="sr-only">GitHub</span>
                                <GitHubIcon />
                            </a>
                            <a href="https://www.linkedin.com/in/siddharthaasal/" target="_blank" rel="noopener noreferrer" className="text-neutral-200 hover:text-white transition-colors">
                                <span className="sr-only">LinkedIn</span>
                                <LinkedInIcon sx={{ color: '#0a66c2' }} />
                            </a>
                            <a href="https://leetcode.com/u/siddharthaasal/" target="_blank" rel="noopener noreferrer" className="text-neutral-200 hover:text-white transition-colors">
                                <span className="sr-only">LeetCode</span>
                                <img
                                    src={"https://cdn.simpleicons.org/leetcode"}
                                    alt="leetcode-icon"
                                    className="w-4 sm:w-5"
                                />
                            </a>
                        </div>
                    </div>

                    {/* Right: Card Stack */}
                    <div>
                        <div className="w-full max-w-md flex items-center justify-center pb-24 sm:pb-0">
                            <CardStack items={CARDS} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const Highlight = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <span
            className={cn(
                "font-semibold px-1.5 py-0.5 rounded-sm",
                "bg-purple-200 text-purple-800",
                "dark:bg-purple-600/20 dark:text-purple-400",
                className
            )}
        >
            {children}
        </span>
    );
};

const CARDS = [
    {
        id: 0,
        name: "Blockchain Research",
        designation: "3rd Prize, Engineer’s Day",
        content: (
            <p>
                Designed a <Highlight>decentralized supply chain</Highlight> system using blockchain to secure medical supply authenticity and prevent counterfeiting.
            </p>
        ),
    },
    {
        id: 1,
        name: "Siddharth Aasal",
        designation: "Finalist - Hack-O-Octo (Microsoft)",
        content: (
            <p>
                Built a <Highlight>Blockchain-based Certificate Management System</Highlight> as part of a Microsoft-backed project. Secured a finalist spot in the Hack-O-Octo hackathon by focusing on transparency and fraud prevention in digital credentialing.
            </p>
        ),
    },
    {
        id: 2,
        name: "Tech Exploration",
        designation: "Research & Development",
        content: (
            <p>
                Benchmarked <Highlight>probabilistic data structures</Highlight> like HyperLogLog and Count-Min Sketch to analyze efficiency in memory-constrained environments.
            </p>
        ),
    },
    {
        id: 3,
        name: "Event Lead",
        designation: "Hyperledger India Chapter",
        content: (
            <p>
                Led a team of 15+ volunteers to organize and promote blockchain events, resulting in a <Highlight>30% increase</Highlight> in participation.
            </p>
        ),
    },
];
