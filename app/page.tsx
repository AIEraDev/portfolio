"use client";

import { Layout } from "@/components/layout";
import { Hero } from "@/components/hero";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <ProjectsSection />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SkillsSection />
        <ContactSection />
      </div>
    </Layout>
  );
}
