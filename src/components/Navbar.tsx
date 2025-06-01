"use client";
import { cn } from "@/lib/utils";

const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Skills", href: "/skills" },
];

export default function NavbarDemo() {
    return (
        <div className="fixed top-6 left-0 w-full flex items-center justify-center z-50">
            <ul className="md:flex hidden items-center justify-center gap-1 rounded-full border border-white/20 bg-transparent px-2 py-1 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-md backdrop-saturate-150">
                {navItems.map((item, idx) => (
                    <li key={idx} className="relative">
                        <a
                            href={item.href ?? "#"}
                            className={cn(
                                "inline-block px-4 py-1.5 text-sm font-light text-white/80 transition-all duration-300 rounded-full",
                                "hover:text-white hover:bg-white/10 focus-visible:ring-2 focus-visible:outline-none"
                            )}
                        >
                            {item.label}
                            {item.label === "Home" && (
                                <div className="bg-white/10 absolute inset-0 -z-10 w-full rounded-full backdrop-blur-md"></div>
                            )}
                        </a>
                    </li>
                ))}
                <li className="relative">
                    <a
                        className="cursor-pointer relative inline-block px-4 py-1.5 text-sm font-light text-white/80 rounded-full bg-white/15 transition-all duration-300 hover:bg-white/20 hover:text-white"
                        download
                        href="/Resume_Siddharth_Aasal.pdf"
                    >
                        Get Resume
                        <div
                            aria-hidden="true"
                            className="absolute bottom-0 h-1/3 w-full -translate-x-4 rounded-full bg-white opacity-30 blur-sm"
                        />
                    </a>
                </li>
            </ul>
        </div>
    );
}
