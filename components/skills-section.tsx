"use client"

import { useState } from "react"
import { Globe, Server, Terminal } from "lucide-react"

const skillCategories = {
  Frontend: {
    icon: Globe,
    skills: [
      { name: "React", level: 92, icon: "⚛️" },
      { name: "Next.js", level: 88, icon: "▲" },
      { name: "TypeScript", level: 85, icon: "📘" },
      { name: "Tailwind CSS", level: 90, icon: "🎨" },
      { name: "Vanilla JS", level: 100, icon: "🟨" },
      { name: "HTML/CSS", level: 95, icon: "🌐" },
    ],
  },
  Backend: {
    icon: Server,
    skills: [
      { name: "Node.js", level: 88, icon: "🟢" },
      { name: "Express.js", level: 90, icon: "🚀" },
      { name: "Deno", level: 75, icon: "🦕" },
      { name: "PostgreSQL", level: 78, icon: "🐘" },
      { name: "MongoDB", level: 85, icon: "🍃" },
      { name: "Prisma ORM", level: 82, icon: "🔷" },
      { name: "REST APIs", level: 90, icon: "🔗" },
    ],
  },
  "AI & Tools": {
    icon: Terminal,
    skills: [
      { name: "OpenAI API", level: 85, icon: "🤖" },
      { name: "Git", level: 88, icon: "📝" },
      { name: "Docker", level: 75, icon: "🐳" },
      { name: "AWS", level: 70, icon: "☁️" },
      { name: "Vercel", level: 90, icon: "▲" },
      { name: "TensorFlow", level: 65, icon: "🧠" },
      { name: "Parcel", level: 88, icon: "📦" },
    ],
  },
}

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("Frontend")

  return (
    <section id="skills" className="mb-20">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 relative">
        Skills
        <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-blue-600 dark:bg-blue-400"></div>
      </h2>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {Object.entries(skillCategories).map(([category, data]) => {
          const IconComponent = data.icon
          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                activeCategory === category
                  ? "bg-blue-600 text-white shadow-lg scale-105"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              <IconComponent className="h-4 w-4" />
              {category}
            </button>
          )
        })}
      </div>

      {/* Skills Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
          <div
            key={skill.name}
            className="group p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg hover:bg-white dark:hover:bg-gray-800 hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{skill.icon}</span>
              <span className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {skill.name}
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-1000 ease-out"
                style={{
                  width: `${skill.level}%`,
                  transform:
                    activeCategory ===
                    Object.keys(skillCategories).find((cat) =>
                      skillCategories[cat as keyof typeof skillCategories].skills.includes(skill),
                    )
                      ? "scaleX(1)"
                      : "scaleX(0)",
                  transformOrigin: "left",
                }}
              ></div>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 text-right">{skill.level}%</div>
          </div>
        ))}
      </div>
    </section>
  )
}
