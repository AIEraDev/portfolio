import { Linkedin, Mail, Twitter, Instagram, Facebook, Youtube, Github, BookOpen } from "lucide-react";

export function Socials() {
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
        <div className="w-full overflow-x-auto">
            <div className="ml-auto flex w-max items-center gap-1 rounded-full border border-border/60 bg-background/70 px-2 py-1 backdrop-blur-sm md:gap-2 md:px-3 md:py-2">
                {socials.map((social) => (
                    <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted/40 hover:text-accent"
                        aria-label={social.label}
                    >
                        <social.icon className="h-4 w-4 md:h-5 md:w-5" />
                    </a>
                ))}
            </div>
        </div>
    );
}
