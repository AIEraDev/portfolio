"use client"

import { Mail, Github, Twitter, Linkedin, Youtube, Code, ExternalLink } from "lucide-react"

const contactLinks = [
  {
    name: "Email",
    href: "mailto:abdulkabir@aieradev.com",
    icon: Mail,
    description: "Get in touch",
    gradient: "from-red-500 to-pink-500",
    textColor: "text-red-600 dark:text-red-400",
  },
  {
    name: "GitHub",
    href: "https://github.com/aieradev",
    icon: Github,
    description: "View my code",
    gradient: "from-gray-700 to-gray-900",
    textColor: "text-gray-800 dark:text-gray-300",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/abdulkabir-musa",
    icon: Linkedin,
    description: "Professional network",
    gradient: "from-blue-600 to-blue-800",
    textColor: "text-blue-600 dark:text-blue-400",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/aieradev",
    icon: Twitter,
    description: "Follow my thoughts",
    gradient: "from-sky-400 to-blue-500",
    textColor: "text-sky-600 dark:text-sky-400",
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@aieradev",
    icon: Youtube,
    description: "Watch my tutorials",
    gradient: "from-red-500 to-red-700",
    textColor: "text-red-600 dark:text-red-400",
  },
  {
    name: "FreeCodeCamp",
    href: "https://freecodecamp.org/aieradev",
    icon: Code,
    description: "My coding journey",
    gradient: "from-green-500 to-emerald-600",
    textColor: "text-green-600 dark:text-green-400",
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 relative">
        Contact
        <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full"></div>
      </h2>

      <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
        Let's connect and build{" "}
        <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-semibold">
          intelligent solutions
        </span>{" "}
        together in the AI era.
      </p>

      {/* Primary Contact Button with Rainbow Border */}
      <div className="mb-8">
        <div className="p-1 rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 via-blue-500 to-cyan-500 inline-block">
          <a
            href="mailto:abdulkabir@aieradev.com"
            className="inline-flex items-center px-6 py-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg group font-semibold"
          >
            <Mail className="mr-2 h-5 w-5 group-hover:animate-bounce" />
            Get in touch
            <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </a>
        </div>
      </div>

      {/* Social Links Grid with Colorful Gradients */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {contactLinks.map((link, index) => {
          const IconComponent = link.icon
          return (
            <a
              key={link.name}
              href={link.href}
              className="group p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg hover:bg-white dark:hover:bg-gray-800 border border-gray-200/50 dark:border-gray-700/50 hover:border-transparent transition-all duration-300 hover:-translate-y-1 hover:shadow-md animate-fade-in relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* Gradient border on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${link.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg`}
              >
                <div className="absolute inset-[2px] bg-white dark:bg-gray-800 rounded-lg"></div>
              </div>

              <div className="relative z-10 flex flex-col items-center text-center">
                <div
                  className={`p-3 rounded-full bg-gradient-to-r ${link.gradient} text-white mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
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

      {/* Quick Stats with Colorful Background */}
      <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              4+
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-300">Years Experience</div>
          </div>
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              35+
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-300">Projects Completed</div>
          </div>
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              24h
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-300">Response Time</div>
          </div>
        </div>
      </div>
    </section>
  )
}
