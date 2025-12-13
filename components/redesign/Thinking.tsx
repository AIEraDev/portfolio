"use client";

interface NoteProps {
    title: string;
    date: string;
    content: string;
    url?: string;
}

function Note({ title, date, content, url }: NoteProps) {
    return (
        <article className="group relative pl-6 border-l border-border hover:border-accent transition-colors py-2">
            <div className="absolute -left-[5px] top-3 w-2.5 h-2.5 rounded-full bg-border group-hover:bg-accent transition-colors" />
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-2">
                <h3 className="text-lg font-medium group-hover:text-accent transition-colors">
                    {url ? (
                        <a href={url} target="_blank" rel="noopener noreferrer" className="focus:outline-none">
                            <span className="absolute inset-0" aria-hidden="true" />
                            {title}
                        </a>
                    ) : (
                        title
                    )}
                </h3>
                <time className="text-xs text-muted-foreground font-mono">{date}</time>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">
                {content}
            </p>
        </article>
    );
}

export function Thinking() {
    return (
        <section className="py-24 max-w-4xl mx-auto px-6">
            <h2 className="text-sm font-mono text-muted-foreground mb-12 uppercase tracking-wider">
                02. Thinking & Engineering Depth
            </h2>

            <div className="space-y-12">
                <Note
                    title="You Need Your Code to Be More Reliable Than People Using It"
                    date="2024-12-10"
                    content="Reliability isn't just about uptime; it's about handling the unpredictability of human behavior. Systems must be resilient to misuse, not just error."
                    url="https://dev.to/aieradev/you-need-your-code-to-be-more-reliable-than-people-using-it-271o"
                />
                <Note
                    title="Context-First Architecture"
                    date="2024-11-15"
                    content="In the age of LLMs, context is the new database. Designing systems that efficiently manage, retrieve, and inject context is the primary challenge of modern AI engineering."
                />
                <Note
                    title="The Death of Boilerplate"
                    date="2024-10-01"
                    content="If you're writing CRUD handlers by hand in 2024, you're optimizing for the wrong metric. AI should generate the mechanism; engineers should design the policy."
                />
            </div>
        </section>
    );
}
