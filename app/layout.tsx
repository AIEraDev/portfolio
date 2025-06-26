import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Abdulkabir Musa (AIEraDev) - Full-Stack Developer",
  description:
    "Personal portfolio of Abdulkabir Musa (AIEraDev), a passionate full-stack developer with 4+ years of experience crafting intelligent digital solutions.",
  keywords: ["developer", "portfolio", "full-stack", "react", "next.js", "AI", "AIEraDev", "Abdulkabir Musa"],
  authors: [{ name: "Abdulkabir Musa" }],
  creator: "Abdulkabir Musa (AIEraDev)",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aieradev.com",
    title: "Abdulkabir Musa (AIEraDev) - Full-Stack Developer",
    description:
      "Personal portfolio of Abdulkabir Musa (AIEraDev), a passionate full-stack developer with 4+ years of experience crafting intelligent digital solutions.",
    siteName: "AIEraDev Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdulkabir Musa (AIEraDev) - Full-Stack Developer",
    description:
      "Personal portfolio of Abdulkabir Musa (AIEraDev), a passionate full-stack developer with 4+ years of experience crafting intelligent digital solutions.",
    creator: "@aieradev",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
