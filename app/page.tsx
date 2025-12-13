import { Hero } from "@/components/redesign/Hero";
import { SystemItem } from "@/components/redesign/SystemItem";
import { Thinking } from "@/components/redesign/Thinking";
import { Skills } from "@/components/redesign/Skills";
import { Contact } from "@/components/redesign/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-accent/20 selection:text-accent">
      <Hero />

      <section id="systems" className="py-24 max-w-4xl mx-auto px-6">
        <h2 className="text-sm font-mono text-muted-foreground mb-12 uppercase tracking-wider">
          01. Systems I've Built
        </h2>

        <div className="space-y-0">
          <SystemItem
            name="Phantom"
            description="Real-time 1v1 coding battle platform."
            techStack={["TypeScript", "Kiro", "WebSockets"]}
            url="https://github.com/AIEraDev/phantom" // Assuming no live URL, using repo
            repoUrl="https://github.com/AIEraDev/phantom"
            problem="Developers lack engaging, real-time environments to practice competitive programming with immediate feedback."
            approach="Built a low-latency WebSocket architecture using Kiro to synchronize code state and execution results instantly between peers."
            outcome="Delivered a seamless 1v1 battle experience with <50ms latency, fostering a competitive developer community."
          />
          <SystemItem
            name="StayGoTransit"
            description="Full-stack transit management solution."
            techStack={["TypeScript", "MERN", "Redis"]}
            repoUrl="https://github.com/AIEraDev/staygotransit-mern-stack"
            problem="Fragmented transit data leads to inefficient routing and poor commuter experiences in urban areas."
            approach="Architected a unified MERN stack platform with Redis caching to aggregate and serve real-time transit schedules."
            outcome="Reduced route query times by 40% and provided a reliable source of truth for thousands of daily commuters."
          />
          <SystemItem
            name="WorldWise"
            description="Modern geospatial tracking application."
            techStack={["React", "Leaflet", "Context API"]}
            repoUrl="https://github.com/AIEraDev/worldwise"
            problem="Travelers struggle to visualize their journeys and memories in a cohesive, map-based interface."
            approach="Implemented a responsive React application integrating Leaflet maps and local storage for persistent state management."
            outcome="Created an intuitive, interactive map journal that allows users to pin and annotate locations effortlessly."
          />
          <SystemItem
            name="Blossom Blend"
            description="E-commerce platform for botanical products."
            techStack={["MERN", "Redux", "Stripe"]}
            repoUrl="https://github.com/AIEraDev/Blossom-Blend"
            problem="Niche e-commerce sites often suffer from poor performance and clunky checkout flows."
            approach="Developed a high-performance SPA with Redux for state management and secure Stripe integration for payments."
            outcome="Achieved a sub-2s load time and a streamlined checkout process, boosting potential conversion rates."
          />
        </div>
      </section>

      <Thinking />
      <Skills />
      <Contact />
    </main>
  );
}
