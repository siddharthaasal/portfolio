import steelFlower1 from "../assets/steel-flower.webp"
import NavbarDemo from "./Navbar"
import hardhatIcon from "../assets/Hardhat.png";
import ganacheIcon from "../assets/ganacheIcon.svg";
import hyperledgerIcon from "../assets/hyperledger.svg";
import javaIcon from "../assets/java.svg"

export default function Skills() {
    return (
        <>
            <div className="relative w-screen h-screen bg-[#0a0a0a] text-white overflow-hidden">
                <NavbarDemo />
                {/* Decorative Flower */}
                <div
                    className="mt-12 absolute top-0 left-1/2 -translate-x-1/2 z-0 pointer-events-none select-none opacity-40"
                    style={{
                        WebkitMaskImage:
                            "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0.4) 80%, rgba(0,0,0,0) 100%)",
                        maskImage:
                            "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0.4) 80%, rgba(0,0,0,0) 100%)",
                    }}
                >
                    <img
                        src={steelFlower1}
                        alt="skills background"
                        className="w-[300px] md:w-[380px] object-cover opacity-40"
                        draggable="false"
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
                        {/* frontend */}
                        <ul className=" flex flex-wrap justify-center gap-2 text-lg text-gray-800 lg:gap-4">
                            <li className="flex items-center gap-2 px-4 py-1.5 text-sm lg:text-base rounded-xl border border-white/20 bg-neutral-900 text-white/80">
                                <img src="https://cdn.simpleicons.org/react" alt="ReactJS" className="w-4 lg:w-5" />
                                <span>ReactJS</span>
                            </li>
                            <li className="flex items-center gap-2 px-4 py-1.5 text-sm lg:text-base rounded-xl border border-white/20 bg-neutral-900 text-white/80">
                                <img src="https://cdn.simpleicons.org/nextdotjs/white" alt="ReactJS" className="w-4 lg:w-5" />
                                <span>NextJS</span>
                            </li>
                            <li className="flex items-center gap-2 px-4 py-1.5 text-sm lg:text-base rounded-xl border border-white/20 bg-neutral-900 text-white/80">
                                <img src="https://cdn.simpleicons.org/tailwindcss" alt="ReactJS" className="w-4 lg:w-5" />
                                <span>TailwindCSS</span>
                            </li>
                            <li className="flex items-center gap-2 px-4 py-1.5 text-sm lg:text-base rounded-xl border border-white/20 bg-neutral-900 text-white/80">
                                <img src="https://cdn.simpleicons.org/shadcnui/white" alt="ReactJS" className="w-4 lg:w-5" />
                                <span>ShadCN</span>
                            </li>
                            <li className="flex items-center gap-2 px-4 py-1.5 text-sm lg:text-base rounded-xl border border-white/20 bg-neutral-900 text-white/80">
                                <img src="https://cdn.simpleicons.org/javascript" alt="ReactJS" className="w-4 lg:w-5" />
                                <span>JavaScript</span>
                            </li>
                            <li className="flex items-center gap-2 px-4 py-1.5 text-sm lg:text-base rounded-xl border border-white/20 bg-neutral-900 text-white/80">
                                <img src="https://cdn.simpleicons.org/typescript" alt="ReactJS" className="w-4 lg:w-5" />
                                <span>TypeScript</span>
                            </li>
                            <li className="flex items-center gap-2 px-4 py-1.5 text-sm lg:text-base rounded-xl border border-white/20 bg-neutral-900 text-white/80">
                                <img src={javaIcon} alt="ReactJS" className="w-4 lg:w-5" />
                                <span>Java</span>
                            </li>
                            <li className="flex items-center gap-2 px-4 py-1.5 text-sm lg:text-base rounded-xl border border-white/20 bg-neutral-900 text-white/80">
                                <img src="https://cdn.simpleicons.org/python" alt="ReactJS" className="w-4 lg:w-5" />
                                <span>Python</span>
                            </li>
                        </ul>
                        {/* backend */}
                        <ul className="mt-4 flex flex-wrap justify-center gap-2 text-lg text-gray-800 lg:gap-4">
                            <li className="flex items-center gap-2 px-4 py-1.5 text-sm lg:text-base rounded-xl border border-white/20 bg-neutral-900 text-white/80">
                                <img src="https://cdn.simpleicons.org/nodedotjs" alt="ReactJS" className="w-4 lg:w-5" />
                                <span>NodeJS</span>
                            </li>
                            <li className="flex items-center gap-2 px-4 py-1.5 text-sm lg:text-base rounded-xl border border-white/20 bg-neutral-900 text-white/80">
                                <img src="https://cdn.simpleicons.org/express/white" alt="ReactJS" className="w-4 lg:w-5" />
                                <span>ExpressJS</span>
                            </li>
                            <li className="flex items-center gap-2 px-4 py-1.5 text-sm lg:text-base rounded-xl border border-white/20 bg-neutral-900 text-white/80">
                                <img src="https://cdn.simpleicons.org/postgresql" alt="ReactJS" className="w-4 lg:w-5" />
                                <span>PostgreSQL</span>
                            </li>
                            <li className="flex items-center gap-2 px-4 py-1.5 text-sm lg:text-base rounded-xl border border-white/20 bg-neutral-900 text-white/80">
                                <img src="https://cdn.simpleicons.org/mysql/white" alt="ReactJS" className="w-4 lg:w-5" />
                                <span>MySQL</span>
                            </li>
                            <li className="flex items-center gap-2 px-4 py-1.5 text-sm lg:text-base rounded-xl border border-white/20 bg-neutral-900 text-white/80">
                                <img src="https://cdn.simpleicons.org/prisma/blue" alt="ReactJS" className="w-4 lg:w-5" />
                                <span>Prisma</span>
                            </li>
                            <li className="flex items-center gap-2 px-4 py-1.5 text-sm lg:text-base rounded-xl border border-white/20 bg-neutral-900 text-white/80">
                                <img src="https://cdn.simpleicons.org/zod" alt="ReactJS" className="w-4 lg:w-5" />
                                <span>Zod</span>
                            </li>
                            <li className="flex items-center gap-2 px-4 py-1.5 text-sm lg:text-base rounded-xl border border-white/20 bg-neutral-900 text-white/80">
                                <img src="https://cdn.simpleicons.org/recoil" alt="ReactJS" className="w-4 lg:w-5" />
                                <span>Recoil</span>
                            </li> <li className="flex items-center gap-2 px-4 py-1.5 text-sm lg:text-base rounded-xl border border-white/20 bg-neutral-900 text-white/80">
                                <img src="https://cdn.simpleicons.org/supabase" alt="ReactJS" className="w-4 lg:w-5" />
                                <span>Supabase</span>
                            </li>
                        </ul>
                        {/* blockchain */}
                        <ul className="mt-4 flex flex-wrap justify-center gap-2 text-lg text-gray-800 lg:gap-4">
                            <li className="flex items-center gap-2 px-4 py-1.5 text-sm lg:text-base rounded-xl border border-white/20 bg-neutral-900 text-white/80">
                                <img src="https://cdn.simpleicons.org/ethereum/white" alt="ReactJS" className="w-4 lg:w-5" />
                                <span>Ethereum</span>
                            </li>
                            <li className="flex items-center gap-2 px-4 py-1.5 text-sm lg:text-base rounded-xl border border-white/20 bg-neutral-900 text-white/80">
                                <img src="https://cdn.simpleicons.org/solidity/white" alt="ReactJS" className="w-4 lg:w-5" />
                                <span>Solidity</span>
                            </li>
                            <li className="flex items-center gap-2 px-4 py-1.5 text-sm lg:text-base rounded-xl border border-white/20 bg-neutral-900 text-white/80">
                                <img src="https://cdn.simpleicons.org/ipfs" alt="ReactJS" className="w-4 lg:w-5" />
                                <span>IPFS</span>
                            </li>
                            <li className="flex items-center gap-2 px-4 py-1.5 text-sm lg:text-base rounded-xl border border-white/20 bg-neutral-900 text-white/80">
                                <img src={hardhatIcon} alt="ReactJS" className="w-4 lg:w-5" />
                                <span>Hardhat</span>
                            </li>
                            <li className="flex items-center gap-2 px-4 py-1.5 text-sm lg:text-base rounded-xl border border-white/20 bg-neutral-900 text-white/80">
                                <img src={ganacheIcon} alt="ReactJS" className="w-4 lg:w-5" />
                                <span>Ganache</span>
                            </li>
                            <li className="flex items-center gap-2 px-4 py-1.5 text-sm lg:text-base rounded-xl border border-white/20 bg-neutral-900 text-white/80">
                                <img src="https://cdn.simpleicons.org/web3dotjs" alt="ReactJS" className="w-4 lg:w-5" />
                                <span>Web3.js</span>
                            </li>
                            <li className="flex items-center gap-2 px-4 py-1.5 text-sm lg:text-base rounded-xl border border-white/20 bg-neutral-900 text-white/80">
                                <img src={hyperledgerIcon} alt="ReactJS" className="w-4 lg:w-5" />
                                <span>Hyperledger</span>
                            </li>
                        </ul>
                        {/* tools */}
                        <ul className="mt-4 flex flex-wrap justify-center gap-2 text-lg text-gray-800 lg:gap-4">
                            <li className="flex items-center gap-2 px-4 py-1.5 text-sm lg:text-base rounded-xl border border-white/20 bg-neutral-900 text-white/80">
                                <img src="https://cdn.simpleicons.org/git" alt="ReactJS" className="w-4 lg:w-5" />
                                <span>Git</span>
                            </li>
                            <li className="flex items-center gap-2 px-4 py-1.5 text-sm lg:text-base rounded-xl border border-white/20 bg-neutral-900 text-white/80">
                                <img src="https://cdn.simpleicons.org/github/white" alt="ReactJS" className="w-4 lg:w-5" />
                                <span>GitHub</span>
                            </li>
                            <li className="flex items-center gap-2 px-4 py-1.5 text-sm lg:text-base rounded-xl border border-white/20 bg-neutral-900 text-white/80">
                                <img src="https://cdn.simpleicons.org/vercel/silver" alt="ReactJS" className="w-4 lg:w-5" />
                                <span>Vercel</span>
                            </li>
                            <li className="flex items-center gap-2 px-4 py-1.5 text-sm lg:text-base rounded-xl border border-white/20 bg-neutral-900 text-white/80">
                                <img src="https://cdn.simpleicons.org/docker" alt="ReactJS" className="w-4 lg:w-5" />
                                <span>Docker</span>
                            </li>
                            <li className="flex items-center gap-2 px-4 py-1.5 text-sm lg:text-base rounded-xl border border-white/20 bg-neutral-900 text-white/80">
                                <img src="https://cdn.simpleicons.org/kubernetes" alt="ReactJS" className="w-4 lg:w-5" />
                                <span>Kubernetes</span>
                            </li>
                        </ul>
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