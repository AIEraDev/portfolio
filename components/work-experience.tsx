"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, MapPin, Calendar, Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Sizemug",
    role: "Lead Frontend Developer",
    duration: "Nov 2024 – Oct 2025",
    location: "Remote",
    description: "Lead a high-performance frontend using Next.js (App Router) & TypeScript, integrating microservices and serverless APIs for scalable backend interactions.",
    achievements: ["Implemented NextAuth.js with OAuth and JWT-based session handling, improving authentication security and auditability across services", "Implemented unit and end-to-end testing with Jest and React Testing Library", "Provided technical leadership, mentoring junior developers on React Server Components (RSC) and performance tuning"],
    technologies: ["Next.js", "TypeScript", "NextAuth.js", "OAuth", "JWT", "Jest", "React Testing Library", "Microservices"],
  },
  {
    company: "DataQolo",
    role: "Full Stack Developer",
    duration: "Apr 2024 – Sep 2024",
    location: "Remote",
    description: "Built scalable survey and data-ingestion components with React & Tailwind, implementing secure authentication and optimizing API performance for data collection systems.",
    achievements: ["Reduced client-side load time and improved enumerator dashboard responsiveness (~30%) through code-splitting, critical CSS, and data pagination", "Implemented secure authentication and session handling using JWT and OAuth2 (server-side token flows + client sessions)", "Optimized API performance (REST / GraphQL patterns) and backend data aggregation, improving request efficiency and end-to-end throughput by ~50% for core reporting endpoints", "Developed and tuned serverless/cloud functions and API integrations to process survey responses and perform lightweight ETL", "Collaborated closely with data analysts and product teams to instrument analytics and improve data quality pipelines"],
    technologies: ["React", "Tailwind", "JWT", "OAuth2", "REST", "GraphQL", "Serverless", "AWS Lambda"],
  },
  {
    company: "OIC Hub (OIC Coding School)",
    role: "Instructor / Technical Trainer",
    duration: "Oct 2023 – Oct 2024",
    location: "Onsite",
    description: "Designed and delivered hands-on courses in Full-Stack Web Development (React, Node.js) and Data Science fundamentals, training cohorts of students and junior developers to production-ready standards.",
    achievements: ["Developed practical lab exercises and real-world projects (REST APIs, React SPAs, database integration) that increased student project completion rates", "Built curriculum materials (slides, starter repos, assessments) and a lightweight CI/CD demo that taught students modern development workflows (Git, testing, deployment)", "Mentored students one-on-one during office hours and guided capstone projects — several student projects progressed to live demos used in local community showcases", "Collaborated with OIC product and outreach teams to run weekend bootcamps, teachers' training, and youth tech clubs"],
    technologies: ["React", "Node.js", "REST APIs", "Git", "CI/CD", "Teaching", "Curriculum Development"],
  },
  {
    company: "DeenMinder Ltd.",
    role: "Mobile & Web Frontend Engineer",
    duration: "Oct 2023 – Oct 2024",
    location: "Remote",
    description: "Built and shipped DeenMinder's cross-platform Flutter app (prayer times, adhkar, Quran audio, alarms) and maintained web UIs (Next.js) including a prayer widget and admin dashboards.",
    achievements: ["Implemented reliable background scheduling and cross-device notification handling", "Optimized audio streaming with caching/resume for low-bandwidth users", "Reduced cold-start and page load times by applying lazy-loading and code-splitting", "Improved audio reliability via player/stream fallback strategies", "Owned mobile & web CI/CD automation, crash reporting, and release artifacts"],
    technologies: ["Flutter", "Next.js", "Audio Streaming", "CI/CD", "Mobile Development", "Background Services"],
  },
];

export function WorkExperience() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextExperience = () => {
    setCurrentIndex((prev) => (prev + 1) % experiences.length);
  };

  const prevExperience = () => {
    setCurrentIndex((prev) => (prev - 1 + experiences.length) % experiences.length);
  };

  const currentExp = experiences[currentIndex];

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
              <button key={index} onClick={() => setCurrentIndex(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-blue-600 scale-125" : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"}`} />
            ))}
          </div>
          <div className="flex gap-2">
            <button onClick={prevExperience} className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200" aria-label="Previous experience">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button onClick={nextExperience} className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200" aria-label="Next experience">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Experience Card */}
        <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">{currentExp.role}</h3>
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
                <span key={index} className="px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full border border-blue-200 dark:border-blue-800 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors duration-200">
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
  );
}
