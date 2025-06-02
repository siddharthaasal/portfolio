type ProjectInfoCardProps = {
    title: string;
    description: string;
    features: string[];
    techStack: { name: string; icon: string }[];
    gradient?: string;
};

export default function ProjectDetailsPanel({
    title,
    description,
    features,
    techStack,
    gradient
}: ProjectInfoCardProps) {
    return (
        <div className="sticky top-40">
            <div className="flex">
                <div
                    aria-hidden="true"
                    className={`my-4 mr-4 h-1 min-w-6 rounded-full bg-gradient-to-r ${gradient}`}
                ></div>
                <div className="flex flex-col items-start lg:h-[500px]">
                    {/* Title */}
                    <div className="flex items-center gap-3">
                        <h3 className="text-foreground text-2xl font-bold">{title}</h3>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground my-2 text-base font-light">
                        {description}
                    </p>

                    {/* Features */}
                    <ul className="text-accent-foreground/85 mt-2 flex flex-col gap-y-2 text-base">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-center text-sm">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    // className="mt-1 mr-2 size-5 shrink-0 fill-pink-600 text-pink-400 bg-pink-600/20 lg:bg-black"
                                    className={`mt-1 mr-2 size-5 shrink-0 fill-current text-current bg-clip-text bg-gradient-to-r ${gradient}`}
                                >
                                    <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z" />
                                </svg>
                                {feature}
                            </li>
                        ))}
                    </ul>

                    {/* Tech Stack */}
                    <div className="mt-10 flex flex-wrap gap-3 text-sm">
                        {techStack.map((tech, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2 rounded-xl border border-white/[0.14] bg-neutral-900 px-3 py-1 text-sm"
                            >
                                <img
                                    height={16}
                                    width={16}
                                    alt={tech.name}
                                    src={tech.icon}
                                />
                                {tech.name}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
