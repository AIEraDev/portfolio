"use client"

import { Mail, Github, Twitter, Linkedin, Youtube, Code, ExternalLink } from "lucide-react"

const contactLinks = [
  {
    name: "Email",
    href: "mailto:abdulkabir@aieradev.com",
    icon: Mail,
    description: "Get in touch",
    color: "bg-red-500 hover:bg-red-600",
    textColor: "text-red-600 dark:text-red-400",
  },
  {
    name: "GitHub",
    href: "https://github.com/aieradev",
    icon: Github,
    description: "View my code",
    color: "bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600",
    textColor: "text-gray-800 dark:text-gray-300",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/abdulkabir-musa",
    icon: Linkedin,
    description: "Professional network",
    color: "bg-blue-600 hover:bg-blue-700",
    textColor: "text-blue-600 dark:text-blue-400",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/aieradev",
    icon: Twitter,
    description: "Follow my thoughts",
    color: "bg-sky-500 hover:bg-sky-600",
    textColor: "text-sky-600 dark:text-sky-400",
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@aieradev",
    icon: Youtube,
    description: "Watch my tutorials",
    color: "bg-red-600 hover:bg-red-700",
    textColor: "text-red-600 dark:text-red-400",
  },
  {
    name: "FreeCodeCamp",
    href: "https://freecodecamp.org/aieradev",
    icon: Code,
    description: "My coding journey",
    color: "bg-green-600 hover:bg-green-700",
    textColor: "text-green-600 dark:text-green-400",
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 relative">
        Contact
        <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-blue-600 dark:bg-blue-400"></div>
      </h2>

      <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
        Let's connect and build intelligent solutions together in the AI era.
      </p>

      {/* Primary Contact Button */}
      <div className="mb-8">
        <a
          href="mailto:abdulkabir@aieradev.com"
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg group"
        >
          <Mail className="mr-2 h-5 w-5 group-hover:animate-bounce" />
          Get in touch
          <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
        </a>
      </div>

      {/* Social Links Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {contactLinks.map((link, index) => {
          const IconComponent = link.icon
          return (
            <a
              key={link.name}
              href={link.href}
              className="group p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg hover:bg-white dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-md animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-col items-center text-center">
                <div
                  className={`p-3 rounded-full ${link.color} text-white mb-3 group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent className="h-5 w-5" />
                </div>
                <h3
                  className={`font-semibold ${link.textColor} mb-1 group-hover:scale-105 transition-transform duration-300`}
                >
                  {link.name}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                  {link.description}
                </p>
              </div>
            </a>
          )
        })}
      </div>

      {/* Quick Stats */}
      <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">4+</div>
            <div className="text-xs text-gray-600 dark:text-gray-300">Years Experience</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">35+</div>
            <div className="text-xs text-gray-600 dark:text-gray-300">Projects Completed</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">24h</div>
            <div className="text-xs text-gray-600 dark:text-gray-300">Response Time</div>
          </div>
        </div>
      </div>
    </section>
  )
}
