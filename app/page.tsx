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

      <main className="max-w-2xl mx-auto px-6 py-12 relative z-10" role="main">
        {/* Hero Section with Rainbow Elements */}
        <section id="hero" className="text-center mb-20 animate-fade-in" itemScope itemType="https://schema.org/Person">
          <div className="mb-8">
            <div className="relative inline-block">
              <Image src="https://avatars.githubusercontent.com/u/80651195" alt="Abdulkabir Musa (AIEraDev) - Full-Stack Developer Profile Photo" width={120} height={120} className="rounded-full mx-auto mb-6 ring-4 ring-gray-100 dark:ring-gray-800 hover:ring-blue-200 dark:hover:ring-blue-800 transition-all duration-300 hover:scale-105" priority itemProp="image" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-gray-900 animate-pulse" title="Available for work"></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300" itemProp="name">
              Abdulkabir Musa
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 animate-slide-up" itemProp="jobTitle">
              <span className="bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 bg-clip-text text-transparent font-semibold">Software Developer | AI Platform Developer</span>
            </p>
            <meta itemProp="alternateName" content="AIEraDev" />
            <meta itemProp="email" content="abdulkabir@aieradev.com" />
            <meta itemProp="url" content="https://aieradev.vercel.app" />
          </div>
        </section>

        {/* About Section with Colorful Accent */}
        <section id="about" className="mb-20 animate-fade-in-delay" itemScope itemType="https://schema.org/AboutPage">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 relative">
            About
            <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full"></div>
          </h2>
          <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed" itemProp="about">
            <p className="hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-300 relative">
              <span className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-red-500 to-pink-500 rounded-full opacity-30"></span>
              I'm Abdulkabir Musa, also known as <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">AIEraDev</span>, a passionate full-stack developer with 4+ years of experience building innovative web applications and AI-powered solutions. I specialize in React, Next.js, and Node.js, with a keen focus on integrating artificial intelligence into modern web experiences.
            </p>
            <p className="hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-300 relative">
              <span className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-green-500 to-blue-500 rounded-full opacity-30"></span>
              When I'm not coding, you'll find me exploring cutting-edge AI technologies, contributing to open-source projects, or sharing knowledge through technical content creation. I believe in leveraging technology to solve real-world problems and creating products that make a meaningful impact in the <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent font-semibold">AI era</span>.
            </p>
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
              <div key={index} className="group relative overflow-hidden p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg dark:hover:shadow-blue-900/20 transition-all duration-300 hover:-translate-y-1 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                {/* Colorful gradient border on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg`}>
                  <div className="absolute inset-[2px] bg-white dark:bg-gray-800 rounded-lg"></div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => {
                      const colors = ["from-red-500 to-pink-500", "from-blue-500 to-cyan-500", "from-green-500 to-emerald-500", "from-purple-500 to-violet-500", "from-orange-500 to-yellow-500", "from-indigo-500 to-blue-500"];
                      const colorClass = colors[techIndex % colors.length];

                      return (
                        <span key={techIndex} className={`px-2 py-1 text-xs bg-gradient-to-r ${colorClass} text-white rounded-full hover:scale-110 transition-transform duration-200 shadow-sm`}>
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                  <a href={project.link} className="inline-flex items-center text-sm bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-pink-600 transition-all duration-200 group/link font-semibold">
                    View Project
                    <ExternalLink className="ml-1 h-3 w-3 text-blue-600 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Colorful Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-700 py-8 bg-gradient-to-r from-purple-50 via-pink-50 to-red-50 dark:from-gray-800 dark:via-purple-900 dark:to-violet-900">
        <div className="max-w-2xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            © 2024 <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">Abdulkabir Musa (AIEraDev)</span>. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="mailto:abdulkabir@aieradev.com" className="text-sm bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent hover:from-blue-600 hover:to-purple-600 transition-all duration-200 font-medium">
              abdulkabir@aieradev.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
