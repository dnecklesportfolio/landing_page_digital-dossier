"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface ForensicHighlightProps {
    children: ReactNode;
    className?: string;
}

export default function ForensicHighlight({ children, className = "" }: ForensicHighlightProps) {
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
                // Trigger at 60% threshold as requested
                setIsActive(entry.isIntersecting);
            },
            {
                threshold: 0.6,
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
            className={`forensic-highlight ${isActive ? "active-draw" : ""} ${className}`}
        >
            {children}
        </span>
    );
}
