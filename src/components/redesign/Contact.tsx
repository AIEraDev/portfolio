

export function Contact() {
    return (
        <section id="contact" className="py-24 max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-4 mb-16">
                <div className="h-px bg-border flex-1" />
                <h2 className="text-sm font-mono text-muted-foreground uppercase tracking-widest">
                    05. Contact
                </h2>
                <div className="h-px bg-border flex-1" />
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                <div className="space-y-2">
                    <h2 className="text-2xl font-bold">Ready to ship?</h2>
                    <p className="text-muted-foreground">
                        Let's build systems that matter.
                    </p>
                </div>


            </div>

            <div className="mt-12 pt-8 text-xs text-muted-foreground/40 font-mono flex justify-between">
                <span>© {new Date().getFullYear()} AIEraDev.</span>
                <span>Designed with Technical Minimalism.</span>
            </div>
        </section>
    );
}
