"use client";

import { useState } from "react";
import { Globe, Server, Terminal } from "lucide-react";

const skillCategories = {
  Frontend: {
    icon: Globe,
    skills: [
      { name: "Next.js", level: 95, icon: "▲", color: "from-gray-800 to-gray-600" },
      { name: "React", level: 92, icon: "⚛️", color: "from-blue-500 to-cyan-500" },
      { name: "TypeScript", level: 90, icon: "📘", color: "from-blue-600 to-blue-800" },
      { name: "JavaScript", level: 95, icon: "🟨", color: "from-yellow-500 to-orange-500" },
      { name: "Tailwind CSS", level: 88, icon: "🎨", color: "from-cyan-500 to-blue-500" },
      { name: "Flutter", level: 85, icon: "📱", color: "from-blue-400 to-cyan-400" },
    ],
  },
  Backend: {
    icon: Server,
    skills: [
      { name: "Node.js", level: 90, icon: "🟢", color: "from-green-500 to-emerald-500" },
      { name: "Express", level: 88, icon: "🚀", color: "from-gray-700 to-gray-900" },
      { name: "NestJS", level: 82, icon: "🐈", color: "from-red-500 to-pink-500" },
      { name: "PostgreSQL", level: 80, icon: "🐘", color: "from-blue-600 to-indigo-600" },
      { name: "Redis", level: 85, icon: "⚡", color: "from-red-500 to-orange-500" },
      { name: "REST APIs", level: 92, icon: "🔗", color: "from-teal-500 to-cyan-500" },
      { name: "GraphQL", level: 80, icon: "💎", color: "from-pink-500 to-purple-500" },
    ],
  },
  "DevOps & Tools": {
    icon: Terminal,
    skills: [
      { name: "Docker", level: 78, icon: "🐳", color: "from-blue-500 to-blue-700" },
      { name: "AWS Lambda", level: 75, icon: "☁️", color: "from-yellow-500 to-orange-600" },
      { name: "Git", level: 90, icon: "📝", color: "from-orange-500 to-red-500" },
      { name: "GitHub Actions", level: 85, icon: "⚙️", color: "from-gray-700 to-gray-900" },
      { name: "Jest", level: 82, icon: "🃏", color: "from-red-600 to-pink-600" },
      { name: "Playwright", level: 78, icon: "🎭", color: "from-green-500 to-teal-500" },
      { name: "CI/CD", level: 85, icon: "🔄", color: "from-purple-500 to-indigo-500" },
    ],
  },
};

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("Frontend");

  return (
    <section id="skills" className="mb-20">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 relative">
        Skills
        <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 rounded-full"></div>
      </h2>

      {/* Category Tabs with Rainbow Colors */}
      <div className="flex flex-wrap gap-2 mb-8">
        {Object.entries(skillCategories).map(([category, data], index) => {
          const IconComponent = data.icon;
          const gradients = ["from-pink-500 to-rose-500", "from-blue-500 to-cyan-500", "from-purple-500 to-violet-500"];
          const isActive = activeCategory === category;

          return (
            <button key={category} onClick={() => setActiveCategory(category)} className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${isActive ? `bg-gradient-to-r ${gradients[index]} text-white shadow-lg scale-105` : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"}`}>
              <IconComponent className="h-4 w-4" />
              {category}
            </button>
          );
        })}
      </div>

      {/* Skills Grid with Colorful Progress Bars */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
          <div key={skill.name} className="group p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg hover:bg-white dark:hover:bg-gray-800 hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-fade-in border border-gray-200/50 dark:border-gray-700/50" style={{ animationDelay: `${index * 100}ms` }}>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{skill.icon}</span>
              <span className="font-medium text-gray-900 dark:text-white group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">{skill.name}</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out shadow-sm`}
                style={{
                  width: `${skill.level}%`,
                  transform: activeCategory === Object.keys(skillCategories).find((cat) => skillCategories[cat as keyof typeof skillCategories].skills.includes(skill)) ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: "left",
                }}
              ></div>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 text-right font-medium">{skill.level}%</div>
          </div>
        ))}
      </div>
    </section>
  );
}
