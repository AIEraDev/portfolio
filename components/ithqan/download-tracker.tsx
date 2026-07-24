"use client";

import { useEffect, useState } from "react";
import { Download, ExternalLink, Check, Sparkles } from "lucide-react";

export interface PlatformDownload {
  id: string;
  platform: string;
  detail: string;
  url: string;
  downloads: number;
}

interface ReleaseStats {
  latestVersion: string;
  totalDownloads: number;
  platforms: Record<string, PlatformDownload>;
}

const DEFAULT_PLATFORMS: Record<string, PlatformDownload> = {
  "mac-arm64": {
    id: "mac-arm64",
    platform: "macOS Apple Silicon",
    detail: "M1/M2/M3/M4 DMG",
    url: "https://github.com/AIEraDev/Ithqan/releases/download/v0.1.0/Ithqan_v0.1.0_macos_aarch64.dmg",
    downloads: 0,
  },
  "mac-x64": {
    id: "mac-x64",
    platform: "macOS Intel",
    detail: "x64 DMG",
    url: "https://github.com/AIEraDev/Ithqan/releases/download/v0.1.0/Ithqan_v0.1.0_macos_x64.dmg",
    downloads: 0,
  },
  "win-x64": {
    id: "win-x64",
    platform: "Windows",
    detail: "x64 MSI installer",
    url: "https://github.com/AIEraDev/Ithqan/releases/download/v0.1.0/Ithqan_v0.1.0_windows_x64.msi",
    downloads: 0,
  },
  linux: {
    id: "linux",
    platform: "Linux",
    detail: "x86_64 AppImage",
    url: "https://github.com/AIEraDev/Ithqan/releases/download/v0.1.0/Ithqan_v0.1.0_linux_x86_64.AppImage",
    downloads: 0,
  },
};

export function DownloadTracker() {
  const [stats, setStats] = useState<ReleaseStats>({
    latestVersion: "v0.1.0",
    totalDownloads: 0,
    platforms: DEFAULT_PLATFORMS,
  });
  const [detectedOs, setDetectedOs] = useState<string | null>(null);

  useEffect(() => {
    // 1. Detect user OS & architecture
    if (typeof window !== "undefined") {
      const ua = navigator.userAgent.toLowerCase();
      if (ua.includes("mac")) {
        const isArm =
          (navigator as unknown as { userAgentData?: { architecture?: string } }).userAgentData
            ?.architecture === "arm" ||
          ua.includes("arm") ||
          ua.includes("apple");
        setDetectedOs(isArm ? "mac-arm64" : "mac-arm64");
      } else if (ua.includes("win")) {
        setDetectedOs("win-x64");
      } else if (ua.includes("linux")) {
        setDetectedOs("linux");
      }
    }

    // 2. Fetch live download statistics directly from GitHub Releases API
    fetch("https://api.github.com/repos/AIEraDev/Ithqan/releases", {
      headers: { Accept: "application/vnd.github+json" },
    })
      .then((res) => (res.ok ? res.json() : null))
      .then((releases) => {
        if (!Array.isArray(releases) || releases.length === 0) return;

        let total = 0;
        const updatedPlatforms = JSON.parse(JSON.stringify(DEFAULT_PLATFORMS));
        const latest = releases[0];

        for (const release of releases) {
          if (!release.assets || !Array.isArray(release.assets)) continue;

          for (const asset of release.assets) {
            const count = asset.download_count || 0;
            total += count;
            const name = (asset.name || "").toLowerCase();

            if (name.includes("aarch64.dmg") || name.includes("arm64.dmg")) {
              updatedPlatforms["mac-arm64"].downloads += count;
              if (release === latest) updatedPlatforms["mac-arm64"].url = asset.browser_download_url;
            } else if (name.includes("x64.dmg") || name.includes("intel.dmg")) {
              updatedPlatforms["mac-x64"].downloads += count;
              if (release === latest) updatedPlatforms["mac-x64"].url = asset.browser_download_url;
            } else if (name.includes("windows") || name.includes(".msi") || name.includes("win")) {
              updatedPlatforms["win-x64"].downloads += count;
              if (release === latest) updatedPlatforms["win-x64"].url = asset.browser_download_url;
            } else if (name.includes("linux") || name.includes(".appimage")) {
              updatedPlatforms["linux"].downloads += count;
              if (release === latest) updatedPlatforms["linux"].url = asset.browser_download_url;
            }
          }
        }

        setStats({
          latestVersion: latest.tag_name || "v0.1.0",
          totalDownloads: total,
          platforms: updatedPlatforms,
        });
      })
      .catch(() => {
        // Retain default platforms if GitHub API is unreachable
      });
  }, []);

  const handleDownloadClick = (platformId: string, url: string) => {
    // Professional client-side analytics event dispatcher
    if (typeof window !== "undefined") {
      // Dispatch Vercel Analytics event if present
      if ("va" in window && typeof (window as unknown as { va: (e: string, p: Record<string, string>) => void }).va === "function") {
        (window as unknown as { va: (e: string, p: Record<string, string>) => void }).va("track", {
          name: "Ithqan Download",
          platform: platformId,
          version: stats.latestVersion,
        });
      }
      // Dispatch Google Analytics event if present
      if ("gtag" in window && typeof (window as unknown as { gtag: (e: string, a: string, p: Record<string, string>) => void }).gtag === "function") {
        (window as unknown as { gtag: (e: string, a: string, p: Record<string, string>) => void }).gtag("event", "file_download", {
          file_name: url.split("/").pop() || platformId,
          platform: platformId,
        });
      }
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-6 rounded-lg border border-accent/20 bg-accent/5 p-5 md:flex-row md:items-center md:justify-between md:p-6">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <p className="label-mono">Direct Download</p>
            {stats.totalDownloads > 0 && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/20 px-3 py-0.5 text-xs font-semibold text-accent">
                <Sparkles className="h-3.5 w-3.5" />
                {stats.totalDownloads.toLocaleString()} verified downloads
              </span>
            )}
          </div>
          <h2 className="mt-2 text-2xl font-semibold">Install Ithqan {stats.latestVersion}</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
            Official signed desktop binaries compiled via GitHub Actions CI pipeline.
          </p>
        </div>
        <a
          href="https://github.com/AIEraDev/Ithqan/releases"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit items-center gap-2 rounded-full border border-border/80 px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-accent/50 hover:text-accent"
        >
          <ExternalLink className="h-4 w-4" />
          All Releases
        </a>
      </div>

      <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-4">
        {Object.values(stats.platforms).map((item) => {
          const isRecommended = detectedOs === item.id;

          return (
            <a
              key={item.id}
              href={item.url}
              onClick={() => handleDownloadClick(item.id, item.url)}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative bg-background/95 p-5 transition-colors hover:bg-accent/10 ${
                isRecommended ? "ring-1 ring-accent/40 bg-accent/[0.03]" : ""
              }`}
            >
              {isRecommended && (
                <span className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-accent/20 px-2 py-0.5 text-[10px] font-medium text-accent">
                  <Check className="h-2.5 w-2.5" />
                  Your OS
                </span>
              )}
              <Download className="mb-4 h-5 w-5 text-accent" />
              <h3 className="font-semibold transition-colors group-hover:text-accent">
                {item.platform}
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">{item.detail}</p>
              <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground/80">
                <span>
                  {item.downloads > 0
                    ? `${item.downloads.toLocaleString()} downloads`
                    : "GitHub Release"}
                </span>
                <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                  Download &rarr;
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
