"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ContentRenderer from "./ContentRenderer";

gsap.registerPlugin(ScrollTrigger);

const events = [
    {
        id: "event-1",
        date: "2015",
        time: "THE FOUNDATION",
        title: "The Foundation",
        description:
            "Yvonne incorporates YLW Squared Inc. as sole owner.",
        evidenceType: "CORP_FILING",
        evidenceLabel: "Incorporation Papers",
        visualColor: "bg-gray-800",
    },
    {
        id: "event-2",
        date: "June 2021",
        time: "THE HIJACK",
        title: "The Hijack",
        description:
            "Extrinsic Fraud: A forged biennial registration is filed, changing the company address to a NJ office to ensure Yvonne never sees legal notices (Fraud on Service).",
        evidenceType: "FORGED_DOC",
        evidenceLabel: "Fake Registration",
        visualColor: "bg-alert-red",
    },
    {
        id: "event-3",
        date: "Aug 2, 2021",
        time: "THE CLOSING",
        title: "The 'Closing'",
        description:
            "Intrinsic Fraud: Signatures for Yvonne and her VP are forged on the mortgage. The ==lender’s attorney later admitted their secretary forged these signatures== on documents submitted to the court.",
        evidenceType: "FORGED_SIG",
        evidenceLabel: "Forged Mortgage",
        visualColor: "bg-black",
    },
    {
        id: "event-4",
        date: "Aug 6, 2021",
        time: "THE THREAT",
        title: "The Threat",
        description:
            "Attorney Lafleur David reviews 'closing documents' and flags zero issues despite obvious alterations and forgeries.",
        evidenceType: "LEGAL_DOC",
        evidenceLabel: "Closing Binder",
        visualColor: "bg-gray-700",
    },
    {
        id: "event-5",
        date: "June 2023",
        time: "THE DISCOVERY",
        title: "The Discovery",
        description:
            "Yvonne discovers a 2-year-old foreclosure filed against the 'stolen identity' (the NJ address), keeping her in the dark until the default was engineered.",
        evidenceType: "COURT_FILING",
        evidenceLabel: "Foreclosure Notice",
        visualColor: "bg-alert-red",
    },
    {
        id: "event-6",
        date: "March 2025",
        time: "JUDICIAL INTERFERENCE",
        title: "Judicial Interference",
        description:
            "Judge Robert Miller begins 'messing with' the case, eventually assembling a panel to dismiss appeals.",
        evidenceType: "COURT_SCENE",
        evidenceLabel: "Judicial Conduct",
        visualColor: "bg-black",
    },
    {
        id: "event-7",
        date: "Sept 2025",
        time: "THE RETALIATION",
        title: "The Retaliation",
        description:
            "After Yvonne requests Miller's recusal, the court moves to dismiss her appeals as 'untimely'—a direct contradiction of their previous 2024 rulings.",
        evidenceType: "COURT_RULING",
        evidenceLabel: "Dismissal Motion",
        visualColor: "bg-alert-red",
    },
    {
        id: "event-8",
        date: "Jan 2026",
        time: "THE RULE CONTRADICTION",
        title: "The Rule Contradiction",
        description:
            "System Failure: The Appellate Court upholds Miller’s decisions. They automatically consolidated appeals 4 months apart to engineer a 'failure to perfect,' despite telling Yvonne in 2024 they couldn't consolidate 2-month gaps.",
        evidenceType: "SYSTEM_FAILURE",
        evidenceLabel: "Appellate Ruling",
        visualColor: "bg-black",
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
        <section id="the-timeline" ref={containerRef} className="relative flex flex-col md:flex-row bg-background text-foreground">
            {/* Left Side (Sticky) */}
            <div
                ref={leftRef}
                className="hidden md:flex flex-col justify-center items-center w-full md:w-1/2 h-screen sticky top-0 bg-neutral-900/50 border-r border-white/5"
            >
                <div className="w-3/4 aspect-[3/4] bg-neutral-900 shadow-2xl border border-white/10 flex flex-col p-4 relative overflow-hidden transition-colors duration-500 ease-in-out">
                    <div className={`absolute inset-0 opacity-10 ${events[activeEvent].visualColor} transition-colors duration-500`} />

                    <div className="z-10 flex justify-between items-center mb-4 border-b pb-2 border-white/10">
                        <span className="font-mono text-xs uppercase tracking-wider text-gray-500">Evidence #{activeEvent + 1}</span>
                        <span className="font-mono text-xs uppercase tracking-wider text-alert-red">{events[activeEvent].evidenceType}</span>
                    </div>

                    <div className="flex-grow flex items-center justify-center">
                        {/* Placeholder for actual image */}
                        <div className="text-center space-y-2">
                            <p className="font-serif text-2xl font-bold text-white">{events[activeEvent].evidenceLabel}</p>
                            <p className="font-mono text-xs text-gray-500">[ Visual Data Loading ]</p>
                        </div>
                    </div>

                    <div className="mt-auto pt-4 border-t border-white/10">
                        <p className="font-mono text-xs text-right text-gray-500">{events[activeEvent].date}</p>
                    </div>
                </div>
            </div>

            {/* Right Side (Scroll) */}
            <div ref={rightRef} className="w-full md:w-1/2">
                {events.map((event) => (
                    <div
                        key={event.id}
                        id={event.id}
                        className="min-h-screen flex flex-col justify-center px-8 md:px-16 py-20 border-b border-white/5 last:border-0"
                    >
                        <div className="space-y-6 max-w-lg">
                            <span className="font-mono text-sm text-alert-red font-bold tracking-widest uppercase">
                                {event.date}
                            </span>
                            <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight text-white">
                                {event.title}
                            </h2>
                            <div className="h-1 w-20 bg-alert-red"></div>
                            <p className="font-serif text-lg leading-relaxed text-gray-300">
                                <ContentRenderer content={event.description} />
                            </p>

                            {/* Mobile only visual fallback */}
                            <div className="md:hidden mt-8 p-4 bg-neutral-900 border border-white/10">
                                <p className="font-mono text-xs uppercase text-gray-500 mb-2">Evidence for {event.title}</p>
                                <div className="aspect-video bg-neutral-800 flex items-center justify-center text-gray-400">
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
