import { DownloadTracker } from "@/components/ithqan/download-tracker";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  AudioLines,
  Bookmark,
  Database,
  Download,
  ExternalLink,
  Gauge,
  Github,
  Grid3X3,
  HardDriveDownload,
  Layers3,
  Play,
  Repeat2,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Ithqan — Local-First Quran Review App for Desktop",
  description:
    "Free local-first desktop app for Quran muraja'ah: repeat by ayah or page, track retention heatmaps, play offline. macOS, Windows, Linux.",
  keywords: [
    "Ithqan",
    "Quran review app",
    "Quran desktop app",
    "Quran memorization tool",
    "Muraja'ah app",
    "EveryAyah audio looper",
    "Quran retention heatmap",
    "Tauri Quran app",
    "macOS Quran app",
    "Windows Quran app",
    "Linux Quran app",
    "Abdulkabir Musa",
  ],
  alternates: {
    canonical: "https://abdulkabirmusa.com/ithqan/",
  },
  openGraph: {
    title: "Ithqan - Cross-Platform Desktop Quran Review Companion",
    description:
      "A local-first cross-platform desktop application for macOS, Windows, and Linux built with Tauri v2, React, Rust, SQLite, and Tailwind CSS for structured Quran review.",
    url: "https://abdulkabirmusa.com/ithqan/",
    siteName: "Abdulkabir Musa Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://abdulkabirmusa.com/projects/ithqan/looper-tab.jpg",
        width: 1200,
        height: 900,
        alt: "Ithqan Cross-Platform Desktop Quran Review Companion Interface",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ithqan - Cross-Platform Desktop Quran Review Companion",
    description:
      "Structured Quran repetition, retention heatmaps, and offline reciter audio caching for macOS, Windows & Linux.",
    creator: "@aieradev",
    images: ["https://abdulkabirmusa.com/projects/ithqan/looper-tab.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Ithqan",
  applicationCategory: "EducationalApplication",
  operatingSystem: "macOS, Windows, Linux",
  description:
    "A local-first cross-platform desktop application for Quran muraja'ah — structured audio repetition by ayah, page, or surah, with retention heatmaps, bookmarks, and offline reciter audio caching.",
  softwareVersion: "0.1.0",
  url: "https://abdulkabirmusa.com/ithqan/",
  downloadUrl: "https://github.com/AIEraDev/Ithqan/releases",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  author: {
    "@type": "Person",
    name: "Abdulkabir Musa",
    url: "https://abdulkabirmusa.com/",
  },
  sameAs: "https://github.com/AIEraDev/Ithqan",
};

const stack = ["Tauri v2", "React 19", "TypeScript", "Rust", "SQLite", "Zustand", "Tailwind CSS"];

const metrics = [
  { value: "604", label: "Quran pages tracked" },
  { value: "20", label: "EveryAyah reciters" },
  { value: "380x560", label: "Native popover surface" },
  { value: "Alt", label: "Global shortcut layer" },
];

const features = [
  {
    icon: Repeat2,
    title: "Granular Repetition Engine",
    description:
      "Queue review by ayah, range, page, pages, or surah, then repeat by ayah, page, chunk, or full block with configurable silence gaps.",
  },
  {
    icon: Grid3X3,
    title: "Retention Heatmap",
    description:
      "A 604-page visual review map categorizes every page as fresh, moderate, or overdue based on last review history.",
  },
  {
    icon: Bookmark,
    title: "Session Bookmarks",
    description:
      "Saved review targets preserve page, ayah, reciter, and range context so difficult passages can be restarted instantly.",
  },
  {
    icon: HardDriveDownload,
    title: "Offline Audio Cache",
    description:
      "EveryAyah MP3 files are downloaded atomically into app data storage, converted through Tauri asset URLs, and reused offline.",
  },
  {
    icon: AudioLines,
    title: "Double-Buffered Playback",
    description:
      "Two HTML audio elements alternate between active and standby tracks so upcoming ayahs can be preloaded before transitions.",
  },
  {
    icon: Gauge,
    title: "Native Tray Control",
    description:
      "Tray menu actions and global shortcuts emit a single event channel for play/pause, replay, next unit, and previous unit.",
  },
];

const screens = [
  {
    title: "Looper",
    label: "Primary workflow",
    image: "/projects/ithqan/looper-tab.jpg",
    description:
      "The main control surface for configuring review units, reciters, repeat count, silence gaps, and active playback.",
  },
  {
    title: "Review",
    label: "Retention overview",
    image: "/projects/ithqan/review-heatmap.jpg",
    description:
      "A dense heatmap turns long-term muraja'ah into a scannable dashboard and queues the most overdue pages.",
  },
  {
    title: "Saved",
    label: "Fast restart",
    image: "/projects/ithqan/saved-bookmarks.jpg",
    description:
      "Bookmarks capture current or custom revision targets with one-click playback for recurring daily review sessions.",
  },
  {
    title: "Settings",
    label: "Local defaults",
    image: "/projects/ithqan/settings-cache.jpg",
    description:
      "Defaults, wake behavior, playback speed, and cache storage are managed from a compact desktop settings view.",
  },
];

const architecture = [
  {
    icon: Layers3,
    title: "React popover UI",
    detail: "Compact tabbed interface tuned for native desktop menu bar & system tray usage across macOS, Windows, and Linux.",
  },
  {
    icon: Gauge,
    title: "Tray and hotkey bridge",
    detail: "Tauri tray menu actions and Alt-based global shortcuts emit playback commands into the React queue store.",
  },
  {
    icon: Database,
    title: "Rust + SQLite backend",
    detail: "Tauri commands persist review logs, bookmarks, settings, and cache metadata without sending user data out.",
  },
  {
    icon: AudioLines,
    title: "Review scheduler",
    detail: "Decay scoring prioritizes unreviewed and overdue pages, then feeds the most urgent material into the looper.",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-10 flex items-center gap-4">
      <div className="h-px flex-1 bg-border" />
      <p className="label-mono">{children}</p>
      <div className="h-px flex-1 bg-border" />
    </div>
  );
}

export default function IthqanPage() {
  return (
    <main className="min-h-screen text-foreground selection:bg-accent/20 selection:text-accent">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid-shell">
          <header className="section-rule px-5 py-4 md:px-8 md:py-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to portfolio
            </Link>
          </header>

          <section className="section-rule px-5 py-16 md:px-8 md:py-24">
            <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="space-y-8">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                    <Sparkles className="h-3.5 w-3.5" />
                    Cross-Platform Desktop Quran Review Companion
                  </span>
                  <span className="label-mono">Case Study</span>
                </div>

                <div className="space-y-5">
                  <h1 className="text-5xl font-bold tracking-tight md:text-7xl">Ithqan</h1>
                  <p className="max-w-2xl text-xl leading-relaxed text-muted-foreground md:text-2xl">
                    A local-first cross-platform desktop companion (macOS, Windows, Linux) for Huffaz and Quran students to structure repetition,
                    track retention, and keep review sessions moving without desktop friction.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border/80 bg-background/70 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-5 pt-2">
                  <a
                    href="https://github.com/AIEraDev/Ithqan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-accent"
                  >
                    <Github className="h-4 w-4" />
                    View Source
                  </a>
                  <a
                    href="#download"
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent/80"
                  >
                    <Download className="h-4 w-4" />
                    Download Desktop App
                  </a>
                  <a
                    href="#interface"
                    className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Explore Interface
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-6 rounded-[2rem] bg-accent/20 blur-3xl" />
                <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-card/80 shadow-2xl shadow-accent/10 backdrop-blur-sm">
                  <div className="flex items-center gap-2 border-b border-border/70 bg-muted/20 px-4 py-3">
                    <span className="h-3 w-3 rounded-full bg-red-400/80" />
                    <span className="h-3 w-3 rounded-full bg-amber-300/80" />
                    <span className="h-3 w-3 rounded-full bg-accent/80" />
                    <span className="ml-3 text-xs text-muted-foreground">Ithqan popover preview</span>
                  </div>
                  <Image
                    src="/projects/ithqan/looper-tab.jpg"
                    alt="Ithqan looper tab showing Quran audio repetition controls"
                    width={1280}
                    height={960}
                    priority
                    className="h-auto w-full"
                  />
                </div>
              </div>
            </div>
          </section>

          <section id="download" className="section-rule px-5 py-12 md:px-8">
            <div className="mx-auto max-w-6xl">
              <DownloadTracker />
            </div>
          </section>

          <section className="section-rule px-5 py-12 md:px-8">
            <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-4">
              {metrics.map((metric) => (
                <div key={metric.label} className="bg-background/95 p-5 md:p-7">
                  <p className="text-3xl font-semibold text-accent md:text-4xl">{metric.value}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{metric.label}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="section-rule px-5 py-20 md:px-8">
            <div className="mx-auto max-w-6xl">
              <SectionLabel>Problem And Product Direction</SectionLabel>
              <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
                <div>
                  <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
                    Review discipline needed a purpose-built desktop workflow.
                  </h2>
                </div>
                <div className="space-y-5 text-base leading-8 text-muted-foreground md:text-lg">
                  <p>
                    Standard audio players loop whole tracks, paper logs are difficult to maintain,
                    and browser-based Quran tools add context switching during focused memorization.
                    Ithqan narrows the surface area to the actual review job inside a 380x560
                    transparent native popover: select material, repeat deliberately, track decay,
                    and restart frequent sessions quickly.
                  </p>
                  <p>
                    The design follows the app itself: compact, dark, quiet, and operational. The
                    popover UI keeps controls close, uses emerald as active state feedback, and
                    avoids decorative weight that would compete with recitation.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="interface" className="section-rule px-5 py-20 md:px-8">
            <div className="mx-auto max-w-6xl">
              <SectionLabel>Core Capabilities</SectionLabel>
              <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2">
                {features.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <article key={feature.title} className="bg-background/95 p-6 md:p-8">
                      <Icon className="mb-6 h-6 w-6 text-accent" />
                      <h3 className="text-xl font-semibold">{feature.title}</h3>
                      <p className="mt-3 leading-7 text-muted-foreground">{feature.description}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="section-rule px-5 py-20 md:px-8">
            <div className="mx-auto max-w-6xl">
              <SectionLabel>Interface Walkthrough</SectionLabel>
              <div className="grid gap-6 md:grid-cols-2">
                {screens.map((screen) => (
                  <article
                    key={screen.title}
                    className="overflow-hidden rounded-lg border border-border/80 bg-card/70"
                  >
                    <Image
                      src={screen.image}
                      alt={`Ithqan ${screen.title} screen`}
                      width={1280}
                      height={960}
                      className="h-auto w-full border-b border-border/70"
                    />
                    <div className="space-y-3 p-5">
                      <p className="label-mono">{screen.label}</p>
                      <h3 className="text-2xl font-semibold">{screen.title}</h3>
                      <p className="leading-7 text-muted-foreground">{screen.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="section-rule px-5 py-20 md:px-8">
            <div className="mx-auto max-w-6xl">
              <SectionLabel>Architecture</SectionLabel>
              <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
                <div className="space-y-5">
                  <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
                    Native shell, reactive UI, local data.
                  </h2>
                  <p className="text-lg leading-8 text-muted-foreground">
                    Ithqan uses Tauri for the desktop boundary, React for the popover interface,
                    Zustand for queue and player state, Rust-backed SQLite for review data, and
                    EveryAyah audio caching for low-friction offline playback across macOS, Windows, and Linux.
                  </p>
                </div>
                <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
                  {architecture.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="bg-background/95 p-6">
                        <Icon className="mb-5 h-5 w-5 text-accent" />
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.detail}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          <section className="px-5 py-16 md:px-8 md:py-20">
            <div className="mx-auto flex max-w-6xl flex-col gap-6 rounded-lg border border-border/80 bg-card/70 p-6 md:flex-row md:items-center md:justify-between md:p-8">
              <div>
                <p className="label-mono mb-3">Outcome</p>
                <h2 className="text-2xl font-semibold md:text-3xl">
                  A focused review companion designed around repetition, retention, and recall.
                </h2>
              </div>
              <Link
                href="/#systems"
                className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/30 bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
              >
                <Play className="h-4 w-4" />
                View More Systems
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
