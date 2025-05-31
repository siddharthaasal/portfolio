import self1 from "../assets/self1.jpg";
import self2 from "../assets/self2.jpg";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import ContactPageIcon from '@mui/icons-material/ContactPage';

export default function About() {
    return (
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 font-mono">
            {/* Text Section */}
            <div className="flex-1">
                <h1 className="text-3xl font-bold mb-1">Hi, I'm Siddharth 👋</h1>
                <p className="font-bold text-muted-foreground">
                    Computer Science @ Chandigarh University | <br /> Full Stack & Blockchain Developer
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    Passionate about crafting scalable web systems, smart contracts, and intuitive UI experiences. I thrive at the intersection of product and engineering.
                </p>

                {/* Skills Section */}
                <div className="mt-5">
                    <h2 className="font-semibold text-lg mb-2">Skills 💻</h2>
                    <div className="flex flex-wrap gap-2">
                        {[
                            "React",
                            "Next.js",
                            "Node.js",
                            "TypeScript",
                            "Solidity",
                            "Tailwind CSS",
                            "PostgreSQL",
                            "Hardhat",
                            "Ethers.js",
                            "Git",
                        ].map((skill) => (
                            <span
                                key={skill}
                                className="bg-slate-800 text-white text-xs px-3 py-1 rounded-full"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Contact Icons Section */}
                <div className="mt-5">
                    <div className="flex">
                        <h2 className="font-semibold text-lg mb-2">Contact</h2>
                        <ContactPageIcon />
                    </div>
                    <div className="flex gap-4  items-center">
                        <a
                            href="https://www.linkedin.com/in/siddharthaasal/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-600 transition-colors"
                            title="LinkedIn"
                        >
                            <LinkedInIcon fontSize="large" />
                        </a>
                        <a
                            href="https://github.com/siddharthaasal"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-700 transition-colors"
                            title="GitHub"
                        >
                            <GitHubIcon fontSize="large" />
                        </a>
                        <a
                            href="mailto:siddharthaasal@gmail.com"
                            className="text-white hover:text-gray-700 transition-colors"
                            title="Email"
                        >
                            <EmailIcon fontSize="large" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Profile Image */}
            <div className="flex flex-col items-center gap-3">
                <img
                    src={self2}
                    alt="Siddharth's photo"
                    className="w-28 h-28 rounded-full object-cover border-2 border-slate-600"
                />
            </div>
        </div>
    );
}
