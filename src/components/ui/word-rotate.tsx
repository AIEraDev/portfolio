"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface WordRotateProps {
    words: string[];
    className?: string;
    duration?: number;
}

export function WordRotate({
    words,
    className,
    duration = 2500,
}: WordRotateProps) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, duration);

        return () => clearInterval(interval);
    }, [words, duration]);

    return (
        <span className={cn("inline-grid grid-cols-1 text-left", className)}>
            {words.map((word, i) => (
                <span
                    key={word}
                    className={cn(
                        "col-start-1 row-start-1 transition-all duration-700 ease-in-out",
                        i === index
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-4 pointer-events-none absolute"
                    )}
                >
                    {word}
                </span>
            ))}
        </span>
    );
}
