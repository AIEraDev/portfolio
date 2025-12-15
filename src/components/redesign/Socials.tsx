import { Linkedin, Mail, Twitter, Instagram, Facebook, Youtube, Github, BookOpen, Share2, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Socials() {
    const [isOpen, setIsOpen] = useState(false);

    const socials = [
        { icon: Github, href: "https://github.com/aieradev", label: "GitHub" },
        { icon: Twitter, href: "https://x.com/AIEraDev", label: "X (Twitter)" },
        { icon: Instagram, href: "https://instagram.com/aieradev", label: "Instagram" },
        { icon: Youtube, href: "https://youtube.com/@aieradev", label: "YouTube" },
        { icon: Facebook, href: "https://facebook.com/aieradev", label: "Facebook" },
        { icon: Linkedin, href: "https://linkedin.com/in/abdulkabirmusa", label: "LinkedIn" },
        { icon: BookOpen, href: "https://blog.abdulkabirmusa.com", label: "Blog" },
        { icon: Mail, href: "mailto:musaabdulkabeer19@gmail.com", label: "Email" },
    ];

    return (
        <>
            {/* Desktop View */}
            <div className="hidden md:flex fixed top-6 right-6 z-50 items-center gap-4 bg-background/80 backdrop-blur-sm p-2 rounded-full border border-border/50 shadow-sm">
                {socials.map((social) => (
                    <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-accent transition-colors p-2 hover:bg-muted/50 rounded-full"
                        aria-label={social.label}
                    >
                        <social.icon className="w-5 h-5" />
                    </a>
                ))}
            </div>

            {/* Mobile View */}
            <div className="md:hidden fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
                {isOpen && (
                    <div className="flex flex-col gap-2 mb-2 animate-in slide-in-from-bottom-4 fade-in duration-200">
                        {socials.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-background/80 backdrop-blur-sm p-3 rounded-full border border-border/50 shadow-sm text-muted-foreground hover:text-accent transition-colors hover:bg-muted/50"
                                aria-label={social.label}
                            >
                                <social.icon className="w-5 h-5" />
                            </a>
                        ))}
                    </div>
                )}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={cn(
                        "p-4 rounded-full shadow-lg transition-all duration-300 border border-border/50 backdrop-blur-sm",
                        isOpen
                            ? "bg-destructive text-destructive-foreground rotate-90"
                            : "bg-primary text-primary-foreground hover:scale-110"
                    )}
                    aria-label="Toggle social links"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Share2 className="w-6 h-6" />}
                </button>
            </div>
        </>
    );
}
