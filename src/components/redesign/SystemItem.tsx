"use client";

import { useState } from "react";
import { ChevronRight, ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";

interface SystemItemProps {
    name: string;
    description: string;
    techStack: string[];
    url?: string;
    repoUrl?: string; // Added repoUrl prop
    problem: string;
    approach: string;
    outcome: string;
}

export function SystemItem({ name, description, techStack, url, repoUrl, problem, approach, outcome }: SystemItemProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-border last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-8 flex items-start justify-between group text-left hover:bg-muted/5 transition-colors px-4 -mx-4 rounded-lg"
            >
                <div className="space-y-2">
                    <div className="flex items-center gap-3">
                        <ChevronRight
                            className={cn(
                                "w-5 h-5 text-muted-foreground transition-transform duration-300",
                                isOpen && "rotate-90 text-accent"
                            )}
                        />
                        <h3 className="text-2xl font-semibold group-hover:text-accent transition-colors">
                            {name}
                        </h3>
                    </div>
                    <p className="text-muted-foreground pl-8">{description}</p>
                </div>

                <div className="hidden md:flex flex-wrap gap-1 max-w-xs justify-end pl-8">
                    {techStack.map((tech, index) => (
                        <>
                            <span key={tech} className="text-sm text-muted-foreground/60">
                                {tech}
                            </span>
                            {index < techStack.length - 1 && <span className="text-sm text-muted-foreground/60">•</span>}
                        </>
                    ))}
                </div>
            </button>

            <div
                className={cn(
                    "grid transition-all duration-300 ease-in-out pl-8 pr-4",
                    isOpen ? "grid-rows-[1fr] opacity-100 pb-8" : "grid-rows-[0fr] opacity-0"
                )}
            >
                <div className="overflow-hidden">
                    <div className="grid md:grid-cols-3 gap-8 py-4 text-sm">
                        <div className="space-y-2">
                            <span className="text-accent font-mono text-xs uppercase tracking-wider">Problem</span>
                            <p className="text-muted-foreground leading-relaxed">{problem}</p>
                        </div>
                        <div className="space-y-2">
                            <span className="text-accent font-mono text-xs uppercase tracking-wider">Approach</span>
                            <p className="text-muted-foreground leading-relaxed">{approach}</p>
                        </div>
                        <div className="space-y-2">
                            <span className="text-accent font-mono text-xs uppercase tracking-wider">Outcome</span>
                            <p className="text-muted-foreground leading-relaxed">{outcome}</p>
                        </div>
                    </div>

                    <div className="flex gap-6 pt-4">
                        {url && (
                            <a
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors"
                            >
                                <ExternalLink className="w-4 h-4" />
                                Live Deployment
                            </a>
                        )}
                        {repoUrl && ( // Conditionally render GitHub link
                            <a
                                href={repoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors"
                            >
                                <Github className="w-4 h-4" />
                                View Source
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
