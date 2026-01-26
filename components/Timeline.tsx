"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const events = [
    {
        id: "event-1",
        date: "June 29, 2021",
        title: "The Zombie Hijack",
        description:
            "A mysterious entity files a change of address form. Suddenly, all official correspondence for 53 Madison Street is redirected to a PO Box in New Jersey.",
        evidenceType: "Document",
        evidenceLabel: "Change of Address Form",
        visualColor: "bg-gray-800", // Placeholder color
    },
    {
        id: "event-2",
        date: "Aug 2, 2021",
        title: "The Missing ID",
        description:
            "A new deed is recorded. The signature doesn't match Yvonne's. The notary stamp belongs to someone who claims they never signed it. It's a clear forgery.",
        evidenceType: "Signature",
        evidenceLabel: "Forged Deed",
        visualColor: "bg-alert-red", // Placeholder color
    },
    {
        id: "event-3",
        date: "Present Day",
        title: "The Standoff",
        description:
            "Judge Knipel presides over the case. Despite the overwhelming evidence of fraud, the legal battle drags on, leaving Yvonne in limbo.",
        evidenceType: "Photo",
        evidenceLabel: "Courtroom Sketch",
        visualColor: "bg-gray-900", // Placeholder color
    },
];

export default function Timeline() {
    const containerRef = useRef<HTMLDivElement>(null);
    const leftRef = useRef<HTMLDivElement>(null);
    const rightRef = useRef<HTMLDivElement>(null);
    const [activeEvent, setActiveEvent] = useState(0);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Use matchMedia to only pin on desktop (min-width: 768px)
            const mm = gsap.matchMedia();

            mm.add("(min-width: 768px)", () => {
                // Pin the left side
                ScrollTrigger.create({
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom bottom",
                    pin: leftRef.current,
                });
            });

            // Detect active event based on scroll position - works on mobile too
            events.forEach((event, index) => {
                ScrollTrigger.create({
                    trigger: `#${event.id}`,
                    start: "top center",
                    end: "bottom center",
                    onToggle: (self) => {
                        if (self.isActive) {
                            setActiveEvent(index);
                        }
                    },
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="the-timeline" ref={containerRef} className="relative flex flex-col md:flex-row bg-background">
            {/* Left Side (Sticky) */}
            <div
                ref={leftRef}
                className="hidden md:flex flex-col justify-center items-center w-full md:w-1/2 h-screen sticky top-0 bg-gray-50 border-r border-gray-200"
            >
                <div className="w-3/4 aspect-[3/4] bg-white shadow-2xl border border-gray-200 flex flex-col p-4 relative overflow-hidden transition-colors duration-500 ease-in-out">
                    <div className={`absolute inset-0 opacity-10 ${events[activeEvent].visualColor} transition-colors duration-500`} />

                    <div className="z-10 flex justify-between items-center mb-4 border-b pb-2 border-black/10">
                        <span className="font-mono text-xs uppercase tracking-wider text-gray-500">Evidence #{activeEvent + 1}</span>
                        <span className="font-mono text-xs uppercase tracking-wider text-alert-red">{events[activeEvent].evidenceType}</span>
                    </div>

                    <div className="flex-grow flex items-center justify-center">
                        {/* Placeholder for actual image */}
                        <div className="text-center space-y-2">
                            <p className="font-serif text-2xl font-bold">{events[activeEvent].evidenceLabel}</p>
                            <p className="font-mono text-xs text-gray-400">[ Visual Data Loading ]</p>
                        </div>
                    </div>

                    <div className="mt-auto pt-4 border-t border-black/10">
                        <p className="font-mono text-xs text-right">{events[activeEvent].date}</p>
                    </div>
                </div>
            </div>

            {/* Right Side (Scroll) */}
            <div ref={rightRef} className="w-full md:w-1/2">
                {events.map((event, index) => (
                    <div
                        key={event.id}
                        id={event.id}
                        className="min-h-screen flex flex-col justify-center px-8 md:px-16 py-20 border-b border-gray-100 last:border-0"
                    >
                        <div className="space-y-6 max-w-lg">
                            <span className="font-mono text-sm text-alert-red font-bold tracking-widest uppercase">
                                {event.date}
                            </span>
                            <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight">
                                {event.title}
                            </h2>
                            <div className="h-1 w-20 bg-black"></div>
                            <p className="font-serif text-lg leading-relaxed text-gray-700">
                                {event.description}
                            </p>

                            {/* Mobile only visual fallback */}
                            <div className="md:hidden mt-8 p-4 bg-gray-50 border border-gray-200">
                                <p className="font-mono text-xs uppercase text-gray-500 mb-2">Evidence for {event.title}</p>
                                <div className="aspect-video bg-gray-200 flex items-center justify-center">
                                    <span className="font-mono text-xs">{event.evidenceLabel}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
