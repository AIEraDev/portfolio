"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, MapPin, Calendar, Briefcase } from "lucide-react"

const experiences = [
  {
    company: "AI Solutions Inc",
    role: "Senior Full-Stack Developer",
    duration: "2023 - Present",
    location: "Remote",
    description:
      "Leading development of AI-powered web applications and machine learning integrations. Specializing in creating intelligent user experiences and automated solutions using modern JavaScript runtimes.",
    achievements: [
      "Built AI chatbot system serving 50K+ monthly users with Express.js and Prisma",
      "Migrated legacy Python services to Deno runtime improving performance by 40%",
      "Integrated OpenAI APIs with MongoDB for intelligent data processing",
    ],
    technologies: ["React", "Next.js", "Express.js", "Deno", "Prisma ORM", "MongoDB"],
  },
  {
    company: "TechStart Digital",
    role: "Full-Stack Developer",
    duration: "2021 - 2023",
    location: "Lagos, Nigeria",
    description:
      "Developed scalable web applications for various clients, focusing on modern JavaScript frameworks and efficient database management with ORMs.",
    achievements: [
      "Delivered 20+ client projects using Express.js and Prisma ORM",
      "Implemented automated testing with Deno reducing deployment issues by 45%",
      "Built e-commerce platform with MongoDB handling $500K+ in transactions",
    ],
    technologies: ["Express.js", "Node.js", "MongoDB", "Prisma ORM", "AWS", "Docker"],
  },
  {
    company: "Freelance Developer",
    role: "Web Developer",
    duration: "2020 - 2021",
    location: "Remote",
    description:
      "Started my journey as a freelance developer, building websites and web applications for small businesses using modern JavaScript technologies and database solutions.",
    achievements: [
      "Completed 15+ freelance projects with Express.js backend",
      "Built responsive websites with MongoDB integration improving client engagement by 60%",
      "Established long-term partnerships with 5 recurring clients using Prisma for database management",
    ],
    technologies: ["React", "Express.js", "MongoDB", "Prisma ORM"],
  },
]

export function WorkExperience() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextExperience = () => {
    setCurrentIndex((prev) => (prev + 1) % experiences.length)
  }

  const prevExperience = () => {
    setCurrentIndex((prev) => (prev - 1 + experiences.length) % experiences.length)
  }

  const currentExp = experiences[currentIndex]

  return (
    <section id="experience" className="mb-20">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 relative">
        Work Experience
        <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-blue-600 dark:bg-blue-400"></div>
      </h2>

      <div className="relative">
        {/* Navigation */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-2">
            {experiences.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-blue-600 scale-125"
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              onClick={prevExperience}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              aria-label="Previous experience"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={nextExperience}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              aria-label="Next experience"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Experience Card */}
        <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                {currentExp.role}
              </h3>
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold mb-2">
                <Briefcase className="h-4 w-4" />
                {currentExp.company}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-300">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {currentExp.duration}
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              {currentExp.location}
            </div>
          </div>

          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{currentExp.description}</p>

          <div className="mb-4">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Achievements:</h4>
            <ul className="space-y-1">
              {currentExp.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              {currentExp.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full border border-blue-200 dark:border-blue-800 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Progress indicator */}
        <div className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
          {currentIndex + 1} of {experiences.length}
        </div>
      </div>
    </section>
  )
}
