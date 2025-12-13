"use client";

import { ProjectCard } from "@/components/project-card";

const projects = [
    {
        title: "Phantom",
        description: "A real-time 1v1 coding battle platform engineered with TypeScript and Kiro, delivering low-latency competitive environments for developer assessment.",
        tags: ["TypeScript", "Kiro", "Real-time", "WebSockets"],
        image: "/projects/phantom.jpg",
        repoUrl: "https://github.com/AIEraDev/phantom",
        demoUrl: "https://kiroween-phantom.vercel.app/",
    },
];

export function ProjectsSection() {
    return (
        <section id="projects" className="py-20 bg-gray-50 dark:bg-black/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 relative inline-block">
                        Featured Projects
                        <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transform scale-x-0 animate-slide-up" style={{ animationFillMode: 'forwards' }}></div>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        A selection of projects that demonstrate my passion for building complex, user-centric applications.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={project.title} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                            <ProjectCard {...project} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
