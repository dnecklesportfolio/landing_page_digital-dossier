"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface HighlighterProps {
    children: ReactNode;
    className?: string;
}

export default function Highlighter({ children, className = "" }: HighlighterProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const [isActive, setIsActive] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted || !ref.current) return;

        const currentRef = ref.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsActive(entry.isIntersecting);
            },
            {
                threshold: 0.2, // Lower threshold for better trigger
            }
        );

        observer.observe(currentRef);

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [mounted]);

    if (!mounted) {
        return <span className={className}>{children}</span>;
    }

    return (
        <span
            ref={ref}
            className={`marker-highlight ${isActive ? "active-draw" : ""} ${className}`}
        >
            {children}
        </span>
    );
}
