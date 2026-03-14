import { Mail, Linkedin, Github, MessageCircle, ArrowRight } from "lucide-react";

export function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "musaabdulkabeer19@gmail.com",
      href: "mailto:musaabdulkabeer19@gmail.com",
      description: "Best for project inquiries and collaborations",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "abdulkabirmusa",
      href: "https://linkedin.com/in/abdulkabirmusa",
      description: "Professional networking and opportunities",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@AIEraDev",
      href: "https://github.com/aieradev",
      description: "Code collaboration and open source projects",
    },
    {
      icon: MessageCircle,
      label: "X (Twitter)",
      value: "@AIEraDev",
      href: "https://x.com/AIEraDev",
      description: "Quick questions and tech discussions",
    },
  ];

  return (
    <section id="contact" className="py-24 max-w-6xl mx-auto px-6">
      <div className="flex items-center gap-4 mb-16">
        <div className="h-px bg-border flex-1" />
        <h2 className="text-sm font-mono text-muted-foreground uppercase tracking-widest">05. Contact</h2>
        <div className="h-px bg-border flex-1" />
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Ready to ship?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">Let's build systems that matter. I'm always interested in discussing new opportunities, technical challenges, and innovative projects.</p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-widest">What I'm looking for</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <ArrowRight className="w-3 h-3 text-accent" />
                AI/ML Engineering roles
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="w-3 h-3 text-accent" />
                Full-stack development projects
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="w-3 h-3 text-accent" />
                Technical consulting opportunities
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="w-3 h-3 text-accent" />
                Open source collaborations
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-widest mb-6">Get in touch</h3>

          <div className="space-y-4">
            {contactMethods.map((method) => (
              <a key={method.label} href={method.href} target="_blank" rel="noopener noreferrer" className="group block p-4 rounded-lg border border-border/60 bg-background/50 hover:bg-muted/20 hover:border-accent/30 transition-all duration-200">
                <div className="flex items-start gap-3">
                  <method.icon className="w-5 h-5 text-accent mt-0.5 group-hover:scale-110 transition-transform" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-foreground">{method.label}</span>
                      <ArrowRight className="w-3 h-3 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                    </div>
                    <p className="text-sm text-accent font-mono">{method.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{method.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-lg bg-accent/5 border border-accent/20">
            <p className="text-sm text-muted-foreground">
              <span className="text-accent font-medium">Response time:</span> I typically respond within 24-48 hours. For urgent matters, LinkedIn or email work best.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-border/60 text-xs text-muted-foreground/60 font-mono flex flex-col md:flex-row justify-between items-center gap-4">
        <span>© {new Date().getFullYear()} AIEraDev. All rights reserved.</span>
        <span>Designed with Technical Minimalism.</span>
      </div>
    </section>
  );
}
