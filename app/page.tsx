import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { SkillsSection } from "@/components/skills-section";
import { WorkExperience } from "@/components/work-experience";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Full-stack Next.js app with Stripe integration and real-time inventory management.",
      tech: ["Next.js", "TypeScript", "Stripe", "Prisma"],
      link: "https://github.com",
      gradient: "from-pink-500 via-red-500 to-yellow-500",
    },
    {
      title: "Task Management App",
      description: "Collaborative workspace with real-time updates and team management features.",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
      link: "https://github.com",
      gradient: "from-green-400 via-blue-500 to-purple-600",
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather app with location-based forecasts and interactive maps.",
      tech: ["Vue.js", "OpenWeather API", "Chart.js"],
      link: "https://github.com",
      gradient: "from-blue-400 via-purple-500 to-pink-500",
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio built with modern web technologies and smooth animations.",
      tech: ["Next.js", "Tailwind", "Framer Motion"],
      link: "https://github.com",
      gradient: "from-orange-400 via-red-500 to-pink-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-900 dark:via-purple-900 dark:to-violet-900 transition-colors duration-300">
      {/* Multi-color floating orbs background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-gradient-to-r from-yellow-400 to-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-blue-400 to-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Theme Toggle with colorful background */}
      <div className="fixed top-6 right-6 z-50">
        <div className="p-1 rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
          <div className="bg-white dark:bg-gray-900 rounded-md">
            <ThemeToggle />
          </div>
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-6 py-12" role="main">
        {/* Hero Section */}
        <section id="hero" className="text-center mb-20 animate-fade-in" itemScope itemType="https://schema.org/Person">
          <div className="mb-8">
            <div className="relative inline-block">
              <Image src="/placeholder.svg?height=120&width=120" alt="Abdulkabir Musa (AIEraDev) - Full-Stack Developer Profile Photo" width={120} height={120} className="rounded-full mx-auto mb-6 ring-4 ring-gray-100 dark:ring-gray-800 hover:ring-blue-200 dark:hover:ring-blue-800 transition-all duration-300 hover:scale-105" priority itemProp="image" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-gray-900 animate-pulse" title="Available for work"></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300" itemProp="name">
              Abdulkabir Musa
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 animate-slide-up" itemProp="jobTitle">
              Full-stack developer crafting <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent font-semibold">intelligent digital solutions</span>
            </p>
            <meta itemProp="alternateName" content="AIEraDev" />
            <meta itemProp="email" content="abdulkabir@aieradev.com" />
            <meta itemProp="url" content="https://aieradev.com" />
          </div>
        </section>

        {/* About Section with Colorful Accent */}
        <section id="about" className="mb-20 animate-fade-in-delay" itemScope itemType="https://schema.org/AboutPage">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 relative">
            About
            <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full"></div>
          </h2>
          <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed" itemProp="about">
            <p className="hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-300">I'm Abdulkabir Musa, also known as AIEraDev, a passionate full-stack developer with 4+ years of experience building innovative web applications and AI-powered solutions. I specialize in React, Next.js, and Node.js, with a keen focus on integrating artificial intelligence into modern web experiences.</p>
            <p className="hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-300">When I'm not coding, you'll find me exploring cutting-edge AI technologies, contributing to open-source projects, or sharing knowledge through technical content creation. I believe in leveraging technology to solve real-world problems and creating products that make a meaningful impact in the AI era.</p>
          </div>
        </section>

        {/* Skills Section */}
        <SkillsSection />

        {/* Work Experience Section */}
        <WorkExperience />

        {/* Projects Section with Colorful Cards */}
        <section id="projects" className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 relative">
            Projects
            <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 rounded-full"></div>
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <div key={index} className="group p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg dark:hover:shadow-blue-900/20 transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-200">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 group/link">
                  View Project
                  <ExternalLink className="ml-1 h-3 w-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-700 py-8">
        <div className="max-w-2xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600 dark:text-gray-300">© 2024 Abdulkabir Musa (AIEraDev). All rights reserved.</p>
          <div className="flex gap-4">
            <a href="mailto:abdulkabir@aieradev.com" className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 hover-underline">
              abdulkabir@aieradev.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
