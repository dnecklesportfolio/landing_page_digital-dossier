"use client";

import React from "react";
import ForensicHighlight from "./ForensicHighlight";

interface ContentRendererProps {
    content: string | React.ReactNode;
}

export default function ContentRenderer({ content }: ContentRendererProps) {
    if (typeof content !== "string") {
        return <>{content}</>;
    }

    // Split by == but keep the parts
    const parts = content.split(/(==.*?==)/g);

    return (
        <>
            {parts.map((part, index) => {
                if (part.startsWith("==") && part.endsWith("==")) {
                    const text = part.slice(2, -2);
                    return <ForensicHighlight key={index}>{text}</ForensicHighlight>;
                }
                return part;
            })}
        </>
    );
}
