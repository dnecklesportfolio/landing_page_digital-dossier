"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate redacted bars
            gsap.to(".redacted-bar", {
                scaleX: 0,
                duration: 1.5,
                ease: "power2.inOut",
                stagger: 0.2,
                delay: 0.5,
                transformOrigin: "right center",
            });

            // Fade in text slightly after
            gsap.from(".hero-text", {
                y: 20,
                opacity: 0,
                duration: 1,
                ease: "power2.out",
                stagger: 0.2,
                delay: 0.8,
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="the-victim"
            ref={containerRef}
            className="relative min-h-screen flex flex-col justify-center items-center px-4 py-20 bg-background text-foreground"
        >
            <div className="max-w-4xl w-full space-y-8 text-center">
                <p className="font-mono text-sm md:text-base tracking-widest uppercase opacity-70 mb-4 hero-text">
                    The 53 Madison Street Investigation
                </p>

                <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight font-black">
                    <div className="relative inline-block mx-2">
                        <span className="relative z-10 hero-text">Scientist.</span>
                        <span className="absolute inset-0 bg-black z-20 redacted-bar origin-right" />
                    </div>
                    <br className="md:hidden" />
                    <div className="relative inline-block mx-2">
                        <span className="relative z-10 hero-text">Grandmother.</span>
                        <span className="absolute inset-0 bg-black z-20 redacted-bar origin-right" />
                    </div>
                    <br />
                    <div className="relative inline-block mx-2 text-alert-red">
                        <span className="relative z-10 hero-text">Victim.</span>
                        <span className="absolute inset-0 bg-black z-20 redacted-bar origin-right" />
                    </div>
                </h1>

                <div className="mt-12 max-w-xl mx-auto hero-text opacity-0">
                    <p className="font-serif text-lg md:text-xl leading-relaxed">
                        How a predatory lending scheme targeted a vulnerable homeowner and
                        stole a legacy.
                    </p>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
                <span className="font-mono text-xs">SCROLL TO INVESTIGATE</span>
            </div>
        </section>
    );
}
