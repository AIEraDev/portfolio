import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="py-24 max-w-4xl mx-auto px-6 border-t border-border/50">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                <div className="space-y-2">
                    <h2 className="text-2xl font-bold">Ready to ship?</h2>
                    <p className="text-muted-foreground">
                        Let's build systems that matter.
                    </p>
                </div>

                <div className="flex gap-6">
                    <a
                        href="mailto:musaabdulkabeer19@gmail.com"
                        className="text-muted-foreground hover:text-accent transition-colors"
                        aria-label="Email"
                    >
                        <Mail className="w-6 h-6" />
                    </a>
                    <a
                        href="https://github.com/AIEraDev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-accent transition-colors"
                        aria-label="GitHub"
                    >
                        <Github className="w-6 h-6" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/abdulkabirmusa/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-accent transition-colors"
                        aria-label="LinkedIn"
                    >
                        <Linkedin className="w-6 h-6" />
                    </a>
                    <a
                        href="https://x.com/AIEraDev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-accent transition-colors"
                        aria-label="Twitter"
                    >
                        <Twitter className="w-6 h-6" />
                    </a>
                </div>
            </div>

            <div className="mt-12 pt-8 text-xs text-muted-foreground/40 font-mono flex justify-between">
                <span>© {new Date().getFullYear()} AIEraDev.</span>
                <span>Designed with Technical Minimalism.</span>
            </div>
        </section>
    );
}
