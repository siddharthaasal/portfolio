import NavbarDemo from "./Navbar";
import projectSvg2 from "../assets/projectSvg2.png"; // still useful for URL
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import ProjectDetailsPanel from "./ProjectDetailsPanel";


export default function Projects() {
    const projects = [
        {
            title: "Benchmarking Probabilistic Data Structures",
            description: "This project benchmarks probabilistic data structures like HyperLogLog (HLL) and Bloom Filters against brute-force methods for membership testing and cardinality estimation",
            descriptionCard: "Benchmarking PDS like HyperLogLog and Bloom Filters",
            link: "https://github.com/siddharthaasal/benchmarking-probabilistic-data-structures/",
            linkName: "GitHub",
            gradient: "from-gray-800 via-blue-800 to-gray-900",
            // gradient: "from-slate-900 to-slate-700",
            // bg- linear - to - r 
            image: "/thumbnails/researchPaperT.png",
            features: [

                "Brute - force method(PostgreSQL) : Exact results (but high memory usage)",
                "HyperLogLog(Redis) : Approximate unique IP counting (low memory usage)",
                "Bloom Filter(Redis) : Fast blocked IP detection (probabilistic false positives)",
                // "Performance comparison : Speed, accuracy, memory usage",

            ],
            techStack: [
                { name: "NodeJs", icon: "https://cdn.simpleicons.org/nodedotjs" },
                { name: "ExpressJs", icon: "https://cdn.simpleicons.org/express/white" },
                { name: "Redis", icon: "https://cdn.simpleicons.org/redis" },
                { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
                { name: "Python", icon: "https://cdn.simpleicons.org/python" },
            ],
        },
        {
            title: "Binary Clock",
            description: "A real-time binary clock in the browser",
            // description: "This project benchmarks probabilistic data structures like HyperLogLog (HLL) and Bloom Filters against brute-force methods for membership testing and cardinality estimation",
            descriptionCard: "A minimalistic binary clock with a retro aesthetic",
            link: "https://binary-clock-ten.vercel.app/",
            linkName: "Live",
            image: "/thumbnails/binClockT.png",
            // gradient: "from-gray-800 via-blue-800 to-gray-900",
            gradient: "from-emerald-900 via-emerald-700 to-emerald-900",

            features: [
                "Live Time Updates – Auto-updating clock in binary format",
                "Responsive UI – Optimized for all screen sizes",
                "Minimal & Lightweight – No unnecessary dependencies",
            ],
            techStack: [
                { name: "React", icon: "https://cdn.simpleicons.org/react" },
                { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss" },
                { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
            ],
        },
        {
            title: "Image Cipher",
            description: "img-cipher is a client-side web app for securely encrypting and decrypting images directly in your browser. ",
            descriptionCard: "In browser image encryption and decryption",
            link: "https://img-cipher.vercel.app/",
            linkName: "Live",
            gradient: "from-gray-700 via-gray-500 to-gray-700",
            // gradient: "from-slate-900 to-slate-700",
            image: "/thumbnails/imgCipherT.png",
            features: [
                "AES-256 encryption to securely encode image data",
                "Client-side only — your images and passwords never leave your device",
                "Base64 encoding to represent binary data as safe text",
            ],
            techStack: [
                { name: "React", icon: "https://cdn.simpleicons.org/react" },
                { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss" },
                { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
            ],
        },

        // More projects...
    ];

    // bg-gradient-to-r from-slate-900 to-slate-700
    return (
        <div className="min-h-screen w-screen bg-[#0f0f0f] text-white outfit-font overflow-x-hidden ">
            <NavbarDemo />

            {/* Background image section */}
            <div
                className="w-4/5  mx-auto mt-24 h-[60vh] bg-cover bg-center relative"
                style={{
                    backgroundImage: `url(${projectSvg2})`,
                    backgroundColor: '#0f0f0f',
                    backgroundBlendMode: 'lighten',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}
            >
                {/* masking gradient */}
                <div className="hidden sm:block  absolute inset-0 bg-gradient-to-b from-transparent to-[#0f0f0f]" />

                {/* content */}
                <>
                    {/* Heading */}
                    <div className="w-full text-center px-6 z-10 relative">
                        <p className="text-sm text-zinc-400 mb-2">FEATURED CASE STUDIES</p>
                        <div className="flex gap-3 justify-center items-center">
                            <h1 className="text-3xl md:text-6xl font-bold">Curated</h1>
                            <span
                                className="text-3xl md:text-6xl bg-clip-text text-transparent tracking-wide eb-garamond-font"
                                style={{
                                    backgroundImage: "linear-gradient(288deg, #ff8000, #f0c 53.2394%, #04f)",
                                }}
                            >
                                Works
                            </span>
                        </div>
                    </div>

                    {/* Cards */}

                    <div className="flex flex-col items-center gap-16 mt-16">
                        {projects.map((project, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col lg:flex-row w-full max-w-7xl justify-center items-center lg:items-start px-4 gap-0 sm:gap-8"
                            >
                                {/* Left card */}
                                <div className="w-full lg:w-2/3">
                                    <CardContainer className="inter-var">
                                        <CardBody
                                            className={`w-full h-auto rounded-xl p-4 sm:p-6 border dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]
          dark:border-white/[0.2] border-black/[0.1]
          ${project.gradient.startsWith("from-") ? `bg-gradient-to-r ${project.gradient}` : ""}`}
                                        >
                                            <div className="flex justify-between items-center sm:mt-4 flex-wrap gap-2">
                                                <CardItem
                                                    translateZ="0"
                                                    className="hidden sm:block text-base sm:text-lg md:text-xl font-bold text-neutral-600 dark:text-white"
                                                >
                                                    {project.descriptionCard}
                                                </CardItem>
                                                <CardItem
                                                    translateZ={0}
                                                    as="a"
                                                    href={project.link}
                                                    target="__blank"
                                                    className="hidden sm:block px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs sm:text-sm font-bold"
                                                >
                                                    {project.linkName} →
                                                </CardItem>
                                            </div>
                                            <CardItem translateZ="20" rotateZ={-2} className="w-full sm:mt-6 relative aspect-[16/9]">
                                                <img
                                                    src={project.image}
                                                    className="w-full h-full object-cover rounded-2xl group-hover/card:shadow-xl border-[1.5px] border-white/20"
                                                    alt="thumbnail"
                                                />
                                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                                            </CardItem>

                                        </CardBody>
                                    </CardContainer>
                                </div>

                                {/* Right details */}
                                <div className="w-full lg:w-1/3 mt-6 lg:mt-0">
                                    <ProjectDetailsPanel
                                        title={project.title}
                                        description={project.description}
                                        features={project.features}
                                        techStack={project.techStack}
                                        gradient={project.gradient}
                                        link={project.link}
                                        linkName={project.linkName}
                                    />
                                </div>
                            </div>

                        ))}
                    </div>

                </>

            </div >


        </div >
    );
}

