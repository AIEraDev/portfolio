import { SocialsHeader } from "@/components/redesign/SocialsHeader";
import { Hero } from "@/components/redesign/Hero";
import { Experience } from "@/components/redesign/Experience";
import { SystemItem } from "@/components/redesign/SystemItem";
import { Thinking } from "@/components/redesign/Thinking";
import { Skills } from "@/components/redesign/Skills";
import { Contact } from "@/components/redesign/Contact";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const projects = [
    {
      name: "Clypra",
      description: "Open-source, privacy-first desktop video editor.",
      techStack: ["Tauri", "React", "TypeScript", "FFmpeg", "Rust"],
      repoUrl: "https://github.com/AIEraDev/clypra",
      problem: "Popular desktop video editors enforce cloud dependencies, subscriptions, and raise user privacy concerns.",
      approach: "Architected a native desktop application using Tauri and Rust for efficiency, React for a high-performance multitrack timeline UI, and integrated local FFmpeg for offline, frame-accurate video processing.",
      outcome: "Delivered a free, zero-dependency desktop video editor supporting frame-accurate editing and real-time audio rendering with 100% local processing.",
    },
    {
      name: "Phantom",
      description: "Real-time 1v1 coding battle platform.",
      techStack: [
        "Next.js 14",
        "React 18",
        "TypeScript",
        "TailwindCSS",
        "Monaco Editor",
        "Node.js",
        "Express",
        "Socket.io",
        "PostgreSQL",
        "Redis",
        "Gemini API",
        "Docker",
        "Railway",
      ],
      url: "https://kiroween-phantom.vercel.app/",
      repoUrl: "https://github.com/AIEraDev/phantom",
      problem:
        "Developers lack engaging, real-time environments to practice competitive programming with immediate feedback.",
      approach:
        "Built a low-latency WebSocket architecture using Kiro to synchronize code state and execution results instantly between peers.",
      outcome:
        "Delivered a seamless 1v1 battle experience with <50ms latency, fostering a competitive developer community.",
    },
    {
      name: "StayGoTransit",
      description: "Full-stack transit management solution.",
      techStack: ["TypeScript", "MERN", "Redis"],
      repoUrl: "https://github.com/AIEraDev/staygotransit-mern-stack",
      problem:
        "Fragmented transit data leads to inefficient routing and poor commuter experiences in urban areas.",
      approach:
        "Architected a unified MERN stack platform with Redis caching to aggregate and serve real-time transit schedules.",
      outcome:
        "Reduced route query times by 40% and provided a reliable source of truth for thousands of daily commuters.",
    },
    {
      name: "WorldWise",
      description: "Modern geospatial tracking application.",
      techStack: ["React", "Leaflet", "Context API"],
      repoUrl: "https://github.com/AIEraDev/worldwise",
      problem:
        "Travelers struggle to visualize their journeys and memories in a cohesive, map-based interface.",
      approach:
        "Implemented a responsive React application integrating Leaflet maps and local storage for persistent state management.",
      outcome:
        "Created an intuitive, interactive map journal that allows users to pin and annotate locations effortlessly.",
    },
    {
      name: "Blossom Blend",
      description: "E-commerce platform for botanical products.",
      techStack: ["MERN", "Redux", "Stripe"],
      repoUrl: "https://github.com/AIEraDev/Blossom-Blend",
      problem: "Niche e-commerce sites often suffer from poor performance and clunky checkout flows.",
      approach:
        "Developed a high-performance SPA with Redux for state management and secure Stripe integration for payments.",
      outcome:
        "Achieved a sub-2s load time and a streamlined checkout process, boosting potential conversion rates.",
    },
  ];

  return (
    <main className="min-h-screen text-foreground selection:bg-accent/20 selection:text-accent">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid-shell">
          <header className="section-rule py-4 md:py-6">
            <SocialsHeader />
          </header>

          <section className="section-rule">
            <Hero />
          </section>

          <section className="section-rule">
            <Experience />
          </section>

          <section id="systems" className="section-rule py-24 max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-4 mb-16">
              <div className="h-px bg-border flex-1" />
              <h2 className="label-mono">01. Systems I've Built</h2>
              <div className="h-px bg-border flex-1" />
            </div>

            <div className="space-y-0">
              {projects.map((proj, idx) => (
                <SystemItem key={idx} {...proj} />
              ))}
            </div>

            <div className="mt-12 text-center">
              <a
                href="https://github.com/AIEraDev?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors group"
              >
                Explore more on GitHub
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </section>

          <section className="section-rule">
            <Thinking />
          </section>

          <section className="section-rule">
            <Skills />
          </section>

          <Contact />
        </div>
      </div>
    </main>
  );
}
