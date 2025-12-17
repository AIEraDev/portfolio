"use client";

import { useEffect, useState } from "react";
import { ArrowRight, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { WordRotate } from "@/components/ui/word-rotate";

const HERO_WORDS = [
    "AI",
    "System Design",
    "Intelligence",
    "Scalability"
];

export function Hero() {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowContent(true);
        }, 2500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="min-h-[80vh] flex flex-col justify-center max-w-6xl mx-auto px-6 py-24">
            <div className="space-y-8">
                <div className="flex items-center gap-4 mb-4">
                    <img
                        src="https://avatars.githubusercontent.com/u/80651195"
                        alt="Abdulkabir Musa"
                        className="w-16 h-16 rounded-full border-2 border-accent/50 object-cover"
                    />
                    <div>
                        <h2 className="text-xl font-semibold tracking-tight">Abdulkabir Musa</h2>
                        <p className="text-muted-foreground text-sm">@AIEraDev</p>
                    </div>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
                    <span className="text-foreground">Architecting </span>
                    <WordRotate words={HERO_WORDS} className="text-accent inline-flex" />
                </h1>

                <div className={`transition-all duration-1000 ease-out ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
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
                        <Link
                            to="/resume"
                            className="group flex items-center gap-2 text-lg font-medium hover:text-accent transition-colors"
                        >
                            Resume
                            <FileText className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                        </Link>
                        <a
                            href="#contact"
                            className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
