"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export function Hero() {
    const [text, setText] = useState("");
    const fullText = "Architecting Intelligence.";

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, i + 1));
            i++;
            if (i > fullText.length) clearInterval(interval);
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="min-h-[80vh] flex flex-col justify-center max-w-4xl mx-auto px-6 py-24">
            <div className="space-y-8">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
                    {text}
                    <span className="animate-pulse text-accent">_</span>
                </h1>

                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
                    AI Platform Engineer | Context-first product thinker.
                    <br />
                    I design prompts & systems where AI generates the code.
                </p>

                <div className="flex flex-wrap gap-6 pt-8">
                    <a
                        href="#systems"
                        className="group flex items-center gap-2 text-lg font-medium hover:text-accent transition-colors"
                    >
                        View Systems
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                        href="#contact"
                        className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                        Contact
                    </a>
                </div>
            </div>
        </section>
    );
}
