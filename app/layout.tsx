import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { StructuredData } from "./structured-data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Abdulkabir Musa (AIEraDev) - Full-Stack Developer & AI Solutions Expert",
    template: "%s | Abdulkabir Musa - AIEraDev",
  },
  description: "Abdulkabir Musa (AIEraDev) is a passionate full-stack developer with 4+ years of experience crafting intelligent digital solutions. Specializing in React, Next.js, Express.js, Deno, MongoDB, Prisma ORM, and AI integrations including OpenAI API. Available for freelance projects and full-time opportunities.",
  keywords: [
    "Abdulkabir Musa",
    "AIEraDev",
    "full-stack developer",
    "React developer",
    "Next.js expert",
    "Express.js developer",
    "Deno runtime",
    "MongoDB developer",
    "Prisma ORM",
    "AI integration",
    "OpenAI API",
    "JavaScript developer",
    "TypeScript developer",
    "Node.js developer",
    "web developer Nigeria",
    "freelance developer",
    "AI solutions",
    "machine learning integration",
    "modern web development",
    "responsive web design",
    "API development",
    "database design",
    "cloud deployment",
    "Vercel deployment",
    "portfolio website",
    "hire developer",
    "remote developer",
  ],
  authors: [{ name: "Abdulkabir Musa", url: "https://aieradev.vercel.app" }],
  creator: "Abdulkabir Musa (AIEraDev)",
  publisher: "AIEraDev",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aieradev.vercel.app",
    siteName: "AIEraDev - Abdulkabir Musa Portfolio",
    title: "Abdulkabir Musa (AIEraDev) - Full-Stack Developer & AI Solutions Expert",
    description: "Experienced full-stack developer specializing in React, Next.js, Express.js, Deno, MongoDB, Prisma ORM, and AI integrations. 4+ years building intelligent digital solutions.",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/80651195",
        width: 460,
        height: 460,
        alt: "Abdulkabir Musa (AIEraDev) - Full-Stack Developer Profile Photo",
        type: "image/jpeg",
      },
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Abdulkabir Musa (AIEraDev) - Full-Stack Developer Portfolio",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@aieradev",
    creator: "@aieradev",
    title: "Abdulkabir Musa (AIEraDev) - Full-Stack Developer & AI Solutions Expert",
    description: "Experienced full-stack developer specializing in React, Next.js, Express.js, Deno, MongoDB, Prisma ORM, and AI integrations. Available for projects.",
    images: ["https://avatars.githubusercontent.com/u/80651195"],
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://aieradev.vercel.app",
    languages: {
      "en-US": "https://aieradev.vercel.app",
      en: "https://aieradev.vercel.app",
    },
  },
  category: "technology",
  classification: "Portfolio Website",
  referrer: "origin-when-cross-origin",
  generator: "Next.js",
  applicationName: "AIEraDev Portfolio",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/profile-image.jpg", sizes: "16x16", type: "image/png" },
      { url: "/profile-image.jpg", sizes: "32x32", type: "image/png" },
      { url: "/profile-image.jpg", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#3b82f6",
      },
    ],
  },
  other: {
    "msapplication-TileColor": "#3b82f6",
    "theme-color": "#ffffff",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "AIEraDev",
    "application-name": "AIEraDev Portfolio",
    "msapplication-tooltip": "Abdulkabir Musa - Full-Stack Developer Portfolio",
    "msapplication-starturl": "/",
    "msapplication-navbutton-color": "#3b82f6",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <StructuredData />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
