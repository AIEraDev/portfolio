"use client";

import { ProjectCard } from "@/components/project-card";

const projects = [
    {
        title: "Phantom",
        description: "A real-time 1v1 coding battle platform engineered with TypeScript and Kiro, delivering low-latency competitive environments for developer assessment.",
        tags: ["TypeScript", "Kiro", "Real-time", "WebSockets"],
        image: "/projects/phantom.jpg",
        repoUrl: "https://github.com/AIEraDev/phantom",
        demoUrl: "https://phantom.aieradev.com",
    },
    {
        title: "StayGoTransit",
        description: "A robust full-stack transportation logistics app built with the MERN stack and TypeScript, ensuring type-safe reliability for complex scheduling.",
        tags: ["React", "Node.js", "MongoDB", "TypeScript"],
        image: "/projects/staygotransit.jpg",
        repoUrl: "https://github.com/AIEraDev/staygotransit",
    },
    {
        title: "Blossom-Blend",
        description: "A dynamic e-commerce platform featuring seamless product management and optimized user flows, powered by a scalable MERN stack architecture.",
        tags: ["MERN Stack", "Redux", "Stripe"],
        image: "/projects/blossom.jpg",
        repoUrl: "https://github.com/AIEraDev/blossom-blend",
    },
    {
        title: "WorldWise",
        description: "An interactive map tracking application that enables users to document their global travels with geospatial precision and rich media integration.",
        tags: ["React", "Leaflet", "Geolocation"],
        image: "/projects/worldwise.jpg",
        repoUrl: "https://github.com/AIEraDev/worldwise",
    },
    {
        title: "Natour",
        description: "A travel booking system designed for immersive user experiences, streamlining the reservation process for global tours with a focus on usability.",
        tags: ["Node.js", "MongoDB", "Pug"],
        image: "/projects/natour.jpg",
        repoUrl: "https://github.com/AIEraDev/natour",
    },
    {
        title: "NovelNotion",
        description: "A full-stack blogging platform that fosters community engagement through intuitive content creation tools and a responsive reading experience.",
        tags: ["Next.js", "Tailwind CSS", "Prisma"],
        image: "/projects/novelnotion.jpg",
        repoUrl: "https://github.com/AIEraDev/novelnotion",
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
