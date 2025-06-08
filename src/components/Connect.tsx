import {
    Modal,
    ModalBody,
    ModalContent,
    ModalTrigger,
} from "./ui/animated-modal";

import CallMadeIcon from '@mui/icons-material/CallMade';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DoneAllIcon from '@mui/icons-material/DoneAll';

import { useState, useEffect } from "react";

export function Connect() {

    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("9548734342");
        setCopied(true);
    };

    useEffect(() => {
        if (copied) {
            const timeout = setTimeout(() => setCopied(false), 5000);
            return () => clearTimeout(timeout);
        }
    }, [copied]);

    return (
        <div className="flex items-center justify-center">
            <Modal>
                <ModalTrigger className="bg-[#121212] border border-white cursor-pointer dark:text-white text-white flex justify-center group/modal-btn">
                    <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500 outfit-font">
                        Let's Connect
                    </span>
                    <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                        <CallMadeIcon />
                    </div>
                </ModalTrigger>
                <ModalBody>
                    <div className="w-full">
                        <ModalContent className="bg-[#121212] p-4 sm:p-6 m-0 border-none rounded-none shadow-none max-w-screen-sm w-full">
                            <div className="text-white">
                                {/* Divider */}
                                <div className="mx-auto mt-4 h-1 w-20 sm:w-24 rounded-full bg-[#2a2a2a]" />

                                {/* Social Icons */}
                                <div className="flex flex-wrap justify-center gap-4 my-6 items-center">
                                    <a
                                        href="https://www.linkedin.com/in/siddharthaasal/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-white"
                                    >
                                        <LinkedInIcon sx={{ color: '#0a66c2', fontSize: 28 }} />
                                    </a>
                                    <a
                                        href="https://github.com/siddharthaasal"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-neutral-300 hover:text-white"
                                    >
                                        <GitHubIcon sx={{ fontSize: 28 }} />
                                    </a>
                                    <a
                                        href="https://x.com/siddharthaasal"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-neutral-300 hover:text-white"
                                    >
                                        <XIcon sx={{ fontSize: 28 }} />
                                    </a>
                                    <a
                                        href="https://leetcode.com/u/siddharthaasal/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-white"
                                    >
                                        <img
                                            src="https://cdn.simpleicons.org/leetcode"
                                            alt="leetcode"
                                            className="w-5 h-5"
                                        />
                                    </a>
                                </div>

                                {/* Tab Heading */}
                                <div className="text-center rounded-lg bg-[#1e1e1e] p-2 w-full mb-4">
                                    <p className="text-white text-sm font-medium">Quick Connect</p>
                                </div>

                                {/* Contact Methods */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {/* Email */}
                                    <a
                                        href="mailto:siddharthaasal@gmail.com?subject=Let's%20catch%20up%20for%20a%20cool%20opportunity!"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group block rounded-lg border border-[#2a2a2a] bg-[#1a1a1a] hover:border-blue-500/30 hover:shadow-md hover:shadow-blue-900/5 transition-all"
                                    >
                                        <div className="flex gap-x-3 items-center border-b border-[#2a2a2a] bg-gradient-to-r from-blue-900/20 to-transparent p-4">
                                            <svg className="h-6 w-6 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                                                <rect x="2" y="4" width="20" height="16" rx="2" />
                                            </svg>
                                            <h3 className="text-base font-medium text-white">Email</h3>
                                        </div>
                                        <div className="p-4 text-left">
                                            <div className="text-sm font-medium text-neutral-200 group-hover:text-white">siddharthaasal@gmail.com</div>
                                            <p className="mt-2 text-sm text-neutral-400">Send me an email directly</p>
                                        </div>
                                    </a>

                                    {/* Phone Number */}
                                    <div className="group block rounded-lg border border-[#2a2a2a] bg-[#1a1a1a] hover:border-purple-500/30 hover:shadow-md hover:shadow-purple-900/5 transition-all">
                                        <div className="flex gap-x-3 items-center border-b border-[#2a2a2a] bg-gradient-to-r from-purple-900/20 to-transparent p-4">
                                            <svg className="h-6 w-6 text-purple-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path d="M8 2v4" />
                                                <path d="M16 2v4" />
                                                <rect width="18" height="18" x="3" y="4" rx="2" />
                                                <path d="M3 10h18" />
                                            </svg>
                                            <h3 className="text-base font-medium text-white">Phone Number</h3>
                                        </div>
                                        <div className="p-4 gap-2">
                                            <div
                                                onClick={handleCopy}
                                                className="flex items-center gap-2 py-3 text-base font-light text-white/75 cursor-pointer hover:text-white transition select-none"
                                                title="Click to copy number"
                                            >
                                                {copied ? (
                                                    <>
                                                        <DoneAllIcon className="h-5 w-5" />
                                                        <p>Copied to Clipboard</p>
                                                    </>
                                                ) : (
                                                    <div className="outfit-font gap-2 flex items-center">
                                                        <p>+91-9548734342</p>
                                                        <ContentCopyIcon fontSize="small" />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Availability */}
                                <div className="mt-4 flex items-center justify-center rounded-md border border-green-900/30 bg-green-900/10 p-2.5 text-center">
                                    <div className="mr-2 flex h-3 w-3 items-center justify-center relative">
                                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                                        <div className="absolute h-3 w-3 animate-ping rounded-full bg-green-500 opacity-75"></div>
                                    </div>
                                    <p className="text-sm text-green-300">Currently available for new opportunities</p>
                                </div>
                            </div>

                        </ModalContent>
                    </div>


                </ModalBody>
            </Modal>
        </div>
    );
}