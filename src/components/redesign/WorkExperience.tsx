import { ArrowRight } from "lucide-react";

const EXPERIENCES = [
    {
        company: "Sizemug",
        location: "United Kingdom · Remote",
        roles: [
            {
                title: "Lead Frontend Developer",
                period: "Nov 2024 - Nov 2025",
                description: "Driving development of user-centric web apps and mentoring frontend teams. Combining technical leadership with hands-on coding to deliver high-quality solutions."
            },
            {
                title: "Frontend Developer",
                period: "Apr 2024 - Nov 2024",
                description: "Specialized in designing and developing visually captivating, user-friendly, and high-performance web applications. Bridged the gap between design and engineering."
            }
        ]
    },
    {
        company: "Deen Minder",
        location: "United Kingdom · Remote",
        roles: [
            {
                title: "Web Frontend Engineer",
                period: "Apr 2024 - Dec 2024",
                description: "Developed DeenMinder's responsive web UIs and public site (prayer widget, blog, admin dashboards), optimized for RTL, audio playback, and discoverability."
            },
            {
                title: "Mobile Frontend Engineer",
                period: "Jan 2024 - Dec 2024",
                description: "Contributed to developing and optimizing an Islamic app designed to support spiritual productivity. Focused on API integration and Dart development."
            }
        ]
    },
    {
        company: "DataQolo",
        location: "Federal Capital Territory, Nigeria · Remote",
        roles: [
            {
                title: "Full Stack Developer",
                period: "Apr 2024 - Sep 2024",
                description: "Played a pivotal role in bridging the gap between offline and online data. Designed and developed scalable web solutions that empowered data-driven decision making."
            }
        ]
    },
    {
        company: "OIC Hub",
        location: "Osogbo, Osun State, Nigeria · On-site",
        roles: [
            {
                title: "Frontend Development Tutor",
                period: "Oct 2023 - Oct 2024",
                description: "Combined passion for teaching with hands-on development. Tutored and mentored fellow developers while sharpening expertise in frontend development."
            }
        ]
    }
];

export function WorkExperience() {
    return (
        <section id="experience" className="py-24 max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-4 mb-16">
                <div className="h-px bg-border flex-1" />
                <h2 className="text-sm font-mono text-muted-foreground uppercase tracking-widest">
                    02. Experience
                </h2>
                <div className="h-px bg-border flex-1" />
            </div>

            <div className="space-y-16">
                {EXPERIENCES.map((exp, index) => (
                    <div key={index} className="group relative border-l-2 border-border/50 pl-8 hover:border-accent transition-colors">
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-border group-hover:border-accent transition-colors" />

                        <div className="mb-6">
                            <h3 className="text-2xl font-bold tracking-tight">{exp.company}</h3>
                            <p className="text-sm text-muted-foreground">{exp.location}</p>
                        </div>

                        <div className="space-y-8">
                            {exp.roles.map((role, roleIndex) => (
                                <div key={roleIndex} className="relative">
                                    {roleIndex > 0 && (
                                        <div className="absolute -left-[33px] top-2 w-2 h-2 rounded-full bg-border/50" />
                                    )}
                                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                                        <h4 className="text-lg text-accent font-medium">{role.title}</h4>
                                        <span className="font-mono text-sm text-muted-foreground">{role.period}</span>
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed max-w-2xl">
                                        {role.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

            </div>

            <div className="mt-12 text-center">
                <a
                    href="https://linkedin.com/in/abdulkabirmusa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors group"
                >
                    Connect on LinkedIn for more history
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
            </div>
        </section>
    );
}
