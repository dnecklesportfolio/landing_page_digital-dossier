"use client";

import { useState } from "react";
import { useLenis } from "@studio-freight/react-lenis";
import { clsx } from "clsx";

export default function Navbar() {
    const lenis = useLenis();
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: "Abstract", target: "#abstract" },
        { name: "Narrative", target: "#narrative" },
        { name: "Timeline", target: "#the-timeline" },
        { name: "Accountability", target: "#accountability" },
        { name: "Evidence", target: "#the-evidence" },
        { name: "Action", target: "#take-action" },
    ];

    const handleScroll = (target: string) => {
        setIsOpen(false);
        if (lenis) {
            lenis.scrollTo(target, { duration: 1.5 });
        } else {
            // Fallback if Lenis isn't ready
            const element = document.querySelector(target);
            element?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-[60] bg-black border-y border-white mix-blend-normal">
            <div className="flex justify-between items-center px-4 md:px-8 h-14">
                {/* Brand / Home */}
                <button
                    onClick={() => handleScroll("#the-victim")}
                    className="font-mono text-white text-sm uppercase tracking-widest hover:text-alert-red transition-colors"
                >
                    Case #53-MAD
                </button>

                {/* Desktop Links */}
                <div className="hidden md:flex space-x-6">
                    {links.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => handleScroll(link.target)}
                            className="font-mono text-white text-xs uppercase tracking-wider hover:text-alert-red transition-colors"
                        >
                            {link.name}
                        </button>
                    ))}
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden font-mono text-white text-xs uppercase tracking-wider border border-white px-2 py-1"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? "Close" : "Menu"}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            <div
                className={clsx(
                    "md:hidden absolute top-14 left-0 w-full bg-black border-b border-white transition-all duration-300 overflow-hidden",
                    isOpen ? "max-h-60" : "max-h-0"
                )}
            >
                <div className="flex flex-col p-4 space-y-4">
                    {links.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => handleScroll(link.target)}
                            className="font-mono text-white text-left text-sm uppercase tracking-wider hover:text-alert-red transition-colors"
                        >
                            &gt; {link.name}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
}
