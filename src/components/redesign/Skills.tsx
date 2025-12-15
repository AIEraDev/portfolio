export function Skills() {
    const skillGroups = [
        {
            category: "Build & Scale",
            skills: ["Next.js", "React", "TypeScript", "Node", "Express", "Socket", "PostgreSQL", "Redis", "TailwindCSS", "Supabase", "Prisma", "Elysia.js", "System Design"]
        },
        {
            category: "AI Systems",
            skills: ["LLMs", "Prompt Engineering", "Model Context Protocol", "RAG Pipelines", "LangChain", "Vector DBs"]
        },
        {
            category: "Infrastructure & Tools",
            skills: ["Docker", "Railway", "Render", "CI/CD", "Testing Strategy", "Documentation", "Performance Optimization"]
        }
    ];

    return (
        <section className="py-32 max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-4 mb-16">
                <div className="h-px bg-border flex-1" />
                <h2 className="text-sm font-mono text-muted-foreground uppercase tracking-widest">
                    04. Technical Arsenal
                </h2>
                <div className="h-px bg-border flex-1" />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {skillGroups.map((group, i) => (
                    <div
                        key={group.category}
                        className="group relative p-6 border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/20 transition-colors duration-500"
                    >
                        {/* Decorative corner markers */}
                        <div className="absolute -top-px -left-px w-2 h-2 border-t border-l border-primary/20 group-hover:border-primary/50 transition-colors" />
                        <div className="absolute -top-px -right-px w-2 h-2 border-t border-r border-primary/20 group-hover:border-primary/50 transition-colors" />
                        <div className="absolute -bottom-px -left-px w-2 h-2 border-b border-l border-primary/20 group-hover:border-primary/50 transition-colors" />
                        <div className="absolute -bottom-px -right-px w-2 h-2 border-b border-r border-primary/20 group-hover:border-primary/50 transition-colors" />

                        <div className="mb-8 flex items-center justify-between">
                            <h3 className="text-lg font-medium tracking-tight">
                                {group.category}
                            </h3>
                            <span className="text-xs font-mono text-muted-foreground/50">
                                SYS_MOD_0{i + 1}
                            </span>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {group.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-2.5 py-1 text-xs font-mono text-muted-foreground border border-border/50 bg-background/50 hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 cursor-default"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
