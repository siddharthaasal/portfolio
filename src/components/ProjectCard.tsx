import React from "react";

interface ProjectCardProps {
    title: string;
    description: string;
    link: string;
    gradient: string;
    image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    link,
    gradient,
    image,
}) => {
    return (
        <div className="flex flex-col lg:mx-10 lg:w-[45rem]">
            <a
                draggable="false"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative cursor-pointer rounded-2xl border border-white/15 bg-[#f2f2f20c] p-1.5 shadow-2xl lg:h-[560px] lg:rounded-3xl lg:p-2"
            >
                {/* Top Gradient Border Line */}
                <div
                    className="absolute inset-x-0 top-0 h-px"
                    style={{
                        background:
                            "linear-gradient(90deg, rgba(0, 0, 0, 0) 5%, rgba(255, 255, 255, 0.8) 35%, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0.8) 65%, rgba(0, 0, 0, 0) 95%)",
                    }}
                />

                {/* Inner Container */}
                <div className="group relative flex size-full flex-col items-center justify-between  rounded-xl lg:rounded-2xl transition-all duration-300">
                    {/* Background Gradient */}
                    <div
                        className="absolute inset-0 -z-10"
                        style={{
                            background:
                                "linear-gradient(188.62deg, rgb(107, 13, 51) 49.9%, rgb(219, 39, 119) 81.7%, rgb(244, 114, 182) 93.88%, rgb(249, 215, 147) 113.5%)",
                        }}
                    />

                    {/* Top Subtle Line */}
                    <div
                        className="absolute inset-x-0 top-px z-10 h-[0.8px] opacity-70"
                        style={{
                            background:
                                "linear-gradient(90deg, rgba(0, 0, 0, 0) 20%, rgb(255, 255, 255) 50%, rgba(0, 0, 0, 0) 80%)",
                        }}
                    />

                    {/* Header */}
                    <div className="hidden w-full flex-row items-center justify-between px-12 py-8 lg:flex text-pink-300">
                        <h3 className="max-w-[90%] text-2xl">{description}</h3>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-arrow-right size-6"
                            aria-hidden="true"
                        >
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                        </svg>
                    </div>

                    {/* Image */}
                    <img
                        src={image}
                        alt={title}
                        className="lg:group-hover:translate-y-10 w-full max-w-[70%] max-h-[70%] translate-y-5 -rotate-3 rounded-t-lg border-[1.5px] border-white/20 transition-all duration-300 will-change-transform lg:block lg:rotate-0 lg:group-hover:scale-[1.08] lg:group-hover:-rotate-3 shadow-[0_0_30px_#DB2777]"
                        loading="lazy"
                        decoding="async"
                    />
                </div>
            </a>
        </div>
    );
};

export default ProjectCard;
