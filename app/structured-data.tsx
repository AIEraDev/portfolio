export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://aieradev.vercel.app/#person",
        name: "Abdulkabir Musa",
        alternateName: "AIEraDev",
        description: "Full-stack developer with 4+ years of experience specializing in React, Next.js, Express.js, Deno, MongoDB, Prisma ORM, and AI integrations",
        url: "https://aieradev.vercel.app",
        image: {
          "@type": "ImageObject",
          url: "https://avatars.githubusercontent.com/u/80651195",
          width: 460,
          height: 460,
        },
        sameAs: ["https://github.com/aieradev", "https://linkedin.com/in/abdulkabir-musa", "https://twitter.com/aieradev", "https://youtube.com/@aieradev", "https://freecodecamp.org/aieradev"],
        jobTitle: "Full-Stack Developer",
        worksFor: {
          "@type": "Organization",
          name: "AI Solutions Inc",
        },
        knowsAbout: ["React", "Next.js", "Express.js", "Deno", "MongoDB", "Prisma ORM", "Node.js", "TypeScript", "JavaScript", "AI Integration", "OpenAI API", "Web Development", "Full-Stack Development"],
        email: "abdulkabir@aieradev.com",
        nationality: "Nigerian",
        alumniOf: {
          "@type": "Organization",
          name: "FreeCodeCamp",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://aieradev.vercel.app/#website",
        url: "https://aieradev.vercel.app",
        name: "AIEraDev - Abdulkabir Musa Portfolio",
        description: "Professional portfolio of Abdulkabir Musa, a full-stack developer specializing in modern web technologies and AI integrations",
        publisher: {
          "@id": "https://aieradev.vercel.app/#person",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: "https://aieradev.vercel.app/?s={search_term_string}",
          "query-input": "required name=search_term_string",
        },
        inLanguage: "en-US",
      },
      {
        "@type": "WebPage",
        "@id": "https://aieradev.vercel.app/#webpage",
        url: "https://aieradev.vercel.app",
        name: "Abdulkabir Musa (AIEraDev) - Full-Stack Developer & AI Solutions Expert",
        description: "Experienced full-stack developer with 4+ years building intelligent digital solutions using React, Next.js, Express.js, Deno, MongoDB, and AI technologies",
        isPartOf: {
          "@id": "https://aieradev.vercel.app/#website",
        },
        about: {
          "@id": "https://aieradev.vercel.app/#person",
        },
        datePublished: "2024-01-01",
        dateModified: "2024-12-26",
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://aieradev.vercel.app",
            },
          ],
        },
        mainEntity: {
          "@id": "https://aieradev.vercel.app/#person",
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://aieradev.vercel.app/#service",
        name: "Full-Stack Development Services",
        description: "Professional web development services specializing in React, Next.js, Express.js, Deno, MongoDB, Prisma ORM, and AI integrations",
        provider: {
          "@id": "https://aieradev.vercel.app/#person",
        },
        areaServed: "Worldwide",
        serviceType: ["Web Development", "Full-Stack Development", "AI Integration", "Database Design", "API Development", "Frontend Development", "Backend Development"],
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceRange: "$$",
        },
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />;
}
