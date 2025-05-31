
import { useState } from "react";
import About from "./About";
import Projects from "./Projects";
import Settings from "./Settings";

import DownloadIcon from '@mui/icons-material/Download';


const tabs = [
    { name: "About", component: <About /> },
    { name: "Projects", component: <Projects /> },
    { name: "Settings", component: <Settings /> },
];

export default function Page() {
    const [activeTab, setActiveTab] = useState(tabs[0]);

    return (
        <div className="relative flex items-center justify-center  ">
            {/* Fixed Size Container */}
            <div className="w-[900px] h-[500px] rounded-2xl overflow-hidden bg-white border border-black  transition-all duration-700 flex flex-col">

                {/* Top Bar */}
                <div className="bg-muted p-3 flex flex-col items-start gap-2 border-b border-border">
                    {/* Window Dots */}
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>

                    {/* Tab Buttons */}
                    <div className="flex gap-3 ">
                        {tabs.map((tab) => (
                            <button
                                key={tab.name}
                                onClick={() => setActiveTab(tab)}
                                className={`cursor-pointer text-sm px-3 py-1 rounded-md transition ${activeTab.name === tab.name
                                    ? "bg-slate-800 text-white"
                                    : "text-muted-foreground hover:text-white"
                                    }`}
                            >
                                {tab.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Scrollable Content Area */}
                <div className="p-6 flex-1 overflow-auto">
                    <div className="flex flex-col lg:flex-row gap-6 h-full">
                        <div className="flex-1 z-50">{activeTab.component}</div>
                    </div>
                </div>

                {/* resume */}
                <div className="mt-4">
                    <a
                        href="/Resume_Siddharth_Aasal.pdf"
                        download
                        className="absolute bottom-4 right-4 inline-flex items-center gap-1 bg-slate-800 hover:bg-slate-700 text-white text-sm px-4 py-2 rounded-lg transition-colors shadow-lg"
                    >
                        Resume
                        <DownloadIcon fontSize="small" />

                    </a>
                </div>
            </div>
        </div >
    );
}
