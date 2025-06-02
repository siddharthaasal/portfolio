import NavbarDemo from "./Navbar";
import projectSvg from "../assets/projectSvg.png"; // still useful for URL
import ProjectCard from "./ProjectCard";

export default function Projects() {
    const projects = [
        {
            title: "Binary Clock",
            description: "A real-time binary clock in the browser.",
            link: "https://binary-clock-ten.vercel.app/",
            gradient: "from-[#91a3b0] to-[#B3CEE5]",
            image: "/thumbnails/binary-clock-thumbnail.png",
        },
        {
            title: "Binary Clock",
            description: "A real-time binary clock in the browser.",
            link: "https://binary-clock-ten.vercel.app/",
            gradient: "from-[#91a3b0] to-[#B3CEE5]",
            image: "/thumbnails/binary-clock-thumbnail.png",
        },
    ];

    return (
        <div className="min-h-screen w-screen bg-[#000000] text-white outfit-font overflow-x-hidden">
            <NavbarDemo />

            {/* Background image section */}
            <div
                className="flex justify-center mx-auto mt-36  w-3/4 h-[60vh] bg-cover bg-center relative"
                style={{
                    backgroundImage: `url(${projectSvg})`,
                    opacity: 80
                }}
            >
                {/* Optional gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />

                {/* Heading content */}
                <div className=" w-full text-center px-6 mt-8">
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
            </div>

            {/* Project cards */}
            <div className="flex flex-wrap gap-6 justify-center px-12 py-20">
                {projects.map((project, idx) => (
                    <ProjectCard key={idx} {...project} />
                ))}
            </div>
        </div>
    );
}
