export function Skills() {
    const skillGroups = [
        {
            category: "Build & Scale",
            skills: ["Next.js", "TypeScript", "Node.js", "NestJS", "PostgreSQL", "System Design"]
        },
        {
            category: "AI Systems",
            skills: ["Prompt Engineering", "Model Context Protocol", "RAG Pipelines", "Python", "LangChain", "Vector DBs"]
        },
        {
            category: "Developer Experience",
            skills: ["CI/CD", "Testing Strategy", "Documentation", "Tooling", "Performance Optimization"]
        }
    ];

    return (
        <section className="py-24 max-w-4xl mx-auto px-6">
            <h2 className="text-sm font-mono text-muted-foreground mb-12 uppercase tracking-wider">
                03. Technical Arsenal
            </h2>

            <div className="grid md:grid-cols-3 gap-12">
                {skillGroups.map((group) => (
                    <div key={group.category} className="space-y-6">
                        <h3 className="text-lg font-semibold border-b border-border pb-2">
                            {group.category}
                        </h3>
                        <ul className="space-y-3">
                            {group.skills.map((skill) => (
                                <li key={skill} className="text-muted-foreground hover:text-foreground transition-colors font-mono text-sm">
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
