"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TypewriterEffectProps {
    words: string[];
    className?: string;
    cursorClassName?: string;
    waitTime?: number;
    deleteSpeed?: number;
    typeSpeed?: number;
}

export function TypewriterEffect({
    words,
    className,
    cursorClassName,
    waitTime = 2000,
    deleteSpeed = 50,
    typeSpeed = 100,
}: TypewriterEffectProps) {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [blink, setBlink] = useState(true);

    // Blinking cursor
    useEffect(() => {
        const timeout2 = setTimeout(() => {
            setBlink((prev) => !prev);
        }, 500);
        return () => clearTimeout(timeout2);
    }, [blink]);

    useEffect(() => {
        if (words.length === 0) return;

        const currentWord = words[index];
        let timeout: NodeJS.Timeout;

        if (!reverse) {
            // Typing
            if (subIndex < currentWord.length) {
                timeout = setTimeout(() => {
                    setSubIndex((prev) => prev + 1);
                }, typeSpeed);
            } else {
                // Finished typing, wait before deleting
                timeout = setTimeout(() => {
                    setReverse(true);
                }, waitTime);
            }
        } else {
            // Deleting
            if (subIndex > 0) {
                timeout = setTimeout(() => {
                    setSubIndex((prev) => prev - 1);
                }, deleteSpeed);
            } else {
                // Finished deleting, move to next word
                setReverse(false);
                setIndex((prev) => (prev + 1) % words.length);
            }
        }

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse, words, waitTime, deleteSpeed, typeSpeed]);

    return (
        <span className={cn("inline-flex items-center", className)}>
            {words[index].substring(0, subIndex)}
            <span
                className={cn(
                    "ml-1 block h-[1em] w-[2px] bg-blue-600 dark:bg-blue-400",
                    blink ? "opacity-100" : "opacity-0",
                    cursorClassName
                )}
            />
        </span>
    );
}
