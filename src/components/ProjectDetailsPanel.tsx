type ProjectInfoCardProps = {
    title: string;
    description: string;
    features: string[];
    techStack: { name: string; icon: string }[];
    gradient?: string;
    link: string;
    linkName: string;
};

export default function ProjectDetailsPanel({
    title,
    description,
    features,
    techStack,
    gradient,
    link,
    linkName
}: ProjectInfoCardProps) {
    return (
        <div className="lg:sticky lg:top-40 w-full">
            <div className="flex flex-col sm:flex-row">
                {/* Side gradient bar (hidden on mobile) */}
                <div
                    aria-hidden="true"
                    className={`hidden sm:block my-4 mr-4 h-1 min-w-6 rounded-full bg-gradient-to-r ${gradient}`}
                ></div>

                <div className="flex flex-col items-start h-auto">
                    {/* link for mobile devices */}
                    <a
                        href={link}
                        target="__blank"
                        className="sm:hidden px-2 py-1 mb-2 text-xs rounded-xl bg-black dark:bg-white dark:text-black text-white "
                    >
                        {linkName} →
                    </a>
                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground">{title}</h3>

                    {/* Description */}
                    <p className="text-muted-foreground my-2 text-sm sm:text-base font-light">
                        {description}
                    </p>

                    {/* Features */}
                    <ul className="mt-2 flex flex-col gap-y-2 text-sm sm:text-base text-accent-foreground/85">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-center">
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`mt-1 mr-2 shrink-0 fill-current text-current bg-clip-text bg-gradient-to-r ${gradient}`}
                                >
                                    <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z" />
                                </svg>
                                {feature}
                            </li>
                        ))}
                    </ul>

                    {/* Tech Stack */}
                    <div className="mt-6 sm:mt-10 flex flex-wrap gap-2 sm:gap-3">
                        {techStack.map((tech, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2 rounded-xl border border-white/10 bg-neutral-900 px-2 py-1 sm:px-3 sm:py-1.5 text-xs sm:text-sm"
                            >
                                <img
                                    height={16}
                                    width={16}
                                    alt={tech.name}
                                    src={tech.icon}
                                    className="h-4 w-4"
                                />
                                <span>{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
