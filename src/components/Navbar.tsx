"use client";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const navItems = [
    { label: "Home", href: "/" },
    { label: "Skills", href: "/skills" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
];

export default function NavbarDemo() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const [activeSection, setActiveSection] = useState<string | null>(null);

    useEffect(() => {
        if (location.pathname !== "/") {
            setActiveSection(null); // reset if not on homepage
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id); // home, skills, about...
                    }
                });
            },
            { threshold: 0.5 }
        );

        const sectionIds = ["home", "skills", "about", "projects"];
        const sections = sectionIds
            .map((id) => document.getElementById(id))
            .filter(Boolean);

        sections.forEach((section) => observer.observe(section!));

        return () => {
            sections.forEach((section) => observer.unobserve(section!));
        };
    }, [location.pathname]);

    function handleNavClick(href: string) {
        if (location.pathname === "/") {
            const id = href === "/" ? "home" : href.replace("/", "");
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
                setActiveSection(id);
            }
        } else {
            navigate(href);
        }
        setSidebarOpen(false);
    }

    return (
        <>
            {/* Desktop Navbar */}
            <div className="fixed top-6 left-0 w-full flex items-center justify-center z-50 opacity-90">
                <ul className="outfit-font hidden md:flex items-center justify-center gap-2 px-4 py-2 rounded-full border bg-[#1B1B1B] shadow-[0_8px_32px_0_rgba(31,38,135,0.2)] transition-all duration-300">
                    {navItems.map((item, idx) => {
                        const id = item.href === "/" ? "home" : item.href.replace("/", "");
                        const isActive =
                            location.pathname === "/"
                                ? activeSection === id
                                : location.pathname === item.href;

                        return (
                            <li key={idx} className="relative group">
                                <button
                                    onClick={() => handleNavClick(item.href)}
                                    className={cn(
                                        "inline-block px-4 py-1.5 text-sm font-light transition-all duration-200 rounded-full",
                                        isActive
                                            ? "bg-white/20 text-white"
                                            : "text-white/80 group-hover:bg-white/10 group-hover:text-white"
                                    )}
                                >
                                    {item.label}
                                </button>
                            </li>
                        );
                    })}
                    <li>
                        <a
                            download
                            href="/Resume_Siddharth_Aasal.pdf"
                            className="inline-block px-4 py-1.5 text-sm font-light text-white/90 bg-white/10 rounded-full hover:bg-white/20 transition-all"
                        >
                            Get Resume
                        </a>
                    </li>
                </ul>
            </div>

            {/* Mobile Hamburger */}
            <div className="fixed top-6 left-4 z-50 md:hidden">
                <button
                    onClick={() => setSidebarOpen(true)}
                    className="text-white p-2 rounded-md transition"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {/* Sidebar Overlay */}
            <div
                className={cn(
                    "fixed inset-0 z-40 bg-black bg-opacity-40 backdrop-blur-sm transition-opacity duration-300",
                    sidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}
                onClick={() => setSidebarOpen(false)}
            />

            {/* Mobile Sidebar */}
            <aside
                className={cn(
                    "fixed top-0 left-0 h-full w-64 bg-neutral-900 z-50 p-6 transform transition-transform duration-300 shadow-2xl border-r border-white/10",
                    sidebarOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                <div className="flex justify-end">
                    <button
                        onClick={() => setSidebarOpen(false)}
                        className="text-white hover:text-red-500 transition"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>
                <nav className="mt-8 space-y-4">
                    {navItems.map((item, idx) => {
                        const id = item.href === "/" ? "home" : item.href.replace("/", "");
                        const isActive =
                            location.pathname === "/"
                                ? activeSection === id
                                : location.pathname === item.href;

                        return (
                            <button
                                key={idx}
                                onClick={() => handleNavClick(item.href)}
                                className={cn(
                                    "block px-3 py-2 rounded-md transition-all w-full text-left",
                                    isActive
                                        ? "text-white bg-white/10"
                                        : "text-white/80 hover:bg-white/10 hover:text-white"
                                )}
                            >
                                {item.label}
                            </button>
                        );
                    })}
                    <a
                        download
                        href="/Resume_Siddharth_Aasal.pdf"
                        className="block mt-6 text-center px-4 py-2 rounded-md bg-white/10 text-white hover:bg-white/20 transition"
                    >
                        Get Resume
                    </a>
                </nav>
            </aside>
        </>
    );
}
