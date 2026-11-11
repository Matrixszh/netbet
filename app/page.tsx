"use client";

import { useState } from "react";

const navLinks = [
  "Auralis Studio",
  "Auralis Agents",
  "Auralis API",
  "Resources",
  "Enterprise",
  "Pricing",
];

const trustedLogos = [
  { name: "LUMINA", icon: "sparkle" },
  { name: "STACK", icon: "layers" },
  { name: "QUANTA", icon: "atom" },
  { name: "ORBITAL", icon: "orbit" },
  { name: "CARNEGIE", icon: "building" },
  { name: "NEXUS", icon: "link" },
];

const studioTabs = ["AI Voice Generator", "Text to Speech", "Music", "Sound Effects", "Voice Cloning"];

const features = [
  { label: "Music", icon: "music" },
  { label: "SFX", icon: "sfx" },
  { label: "Voices", icon: "voices" },
  { label: "Image & Video", icon: "media" },
];

function LogoIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
    </svg>
  );
}

function PlayIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function SparkleIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l1.8 4.6L18 9.5l-4.2 1.9L12 16l-1.8-4.6L6 9.5l4.2-1.9z" />
    </svg>
  );
}

function LayersIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l9 5-9 5-9-5 9-5z" />
      <path d="M3 12l9 5 9-5M3 17l9 5 9-5" />
    </svg>
  );
}

function AtomIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="1.5" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" />
    </svg>
  );
}

function OrbitIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="2.5" />
      <ellipse cx="12" cy="12" rx="10" ry="4" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
    </svg>
  );
}

function BuildingIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <path d="M8 7h2M8 11h2M8 15h2M14 7h2M14 11h2M14 15h2" />
    </svg>
  );
}

function LinkIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 14a5 5 0 007 0l3-3a5 5 0 00-7-7l-1 1" />
      <path d="M14 10a5 5 0 00-7 0l-3 3a5 5 0 007 7l1-1" />
    </svg>
  );
}

function MusicIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  );
}

function SfxIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12h2M7 8v8M11 5v14M15 9v6M19 11v2" />
    </svg>
  );
}

function VoicesIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c0-3 3-5 6-5s6 2 6 5" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M15 20c0-2 2-3.5 4-3.5s3 1.5 3 3.5" />
    </svg>
  );
}

function MediaIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="14" height="11" rx="1" />
      <path d="M17 8l4-2v9l-4-2" />
    </svg>
  );
}

function DownloadIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v12m0 0l-4-4m4 4l4-4" />
      <path d="M5 21h14" />
    </svg>
  );
}

function FullscreenIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" />
    </svg>
  );
}

function MicIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M5 11a7 7 0 0014 0M12 18v3" />
    </svg>
  );
}

function getLogoIcon(name: string, className: string) {
  switch (name) {
    case "sparkle": return <SparkleIcon className={className} />;
    case "layers": return <LayersIcon className={className} />;
    case "atom": return <AtomIcon className={className} />;
    case "orbit": return <OrbitIcon className={className} />;
    case "building": return <BuildingIcon className={className} />;
    case "link": return <LinkIcon className={className} />;
    default: return null;
  }
}

function getFeatureIcon(name: string, className: string) {
  switch (name) {
    case "music": return <MusicIcon className={className} />;
    case "sfx": return <SfxIcon className={className} />;
    case "voices": return <VoicesIcon className={className} />;
    case "media": return <MediaIcon className={className} />;
    default: return null;
  }
}

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200/60 bg-[#fafaf9]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <div className="flex items-center gap-2">
          <LogoIcon className="h-5 w-5 text-neutral-900" />
          <span className="text-base font-semibold tracking-tight text-neutral-900">Auralis</span>
        </div>
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm text-neutral-600 transition-colors hover:text-neutral-900"
            >
              {link}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button className="hidden rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-800 sm:block">
            Signup
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 text-neutral-700 lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="border-t border-neutral-200 bg-[#fafaf9] lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                onClick={() => setMobileOpen(false)}
                className="border-b border-neutral-100 py-3 text-sm text-neutral-600 transition-colors hover:text-neutral-900 last:border-0"
              >
                {link}
              </a>
            ))}
            <button className="mt-3 rounded-full bg-neutral-900 px-4 py-2.5 text-sm font-medium text-white">
              Signup
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-12 pb-8 sm:px-6 sm:pt-16 sm:pb-10">
      <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-start lg:gap-8">
        <div className="max-w-xl">
          <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
            AI audio that sounds human
          </h1>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-neutral-500 lg:pt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>
      </div>
      <div className="mt-6 flex flex-col items-stretch gap-3 sm:mt-8 sm:flex-row sm:items-center">
        <button className="w-full rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-800 sm:w-auto">
          Sign up
        </button>
        <button className="w-full rounded-full border border-neutral-300 bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 sm:w-auto">
          Contact sales
        </button>
      </div>
    </section>
  );
}

function ProductShowcase() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 sm:pb-20">
      <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)] sm:rounded-3xl">
        <div className="flex flex-col gap-3 px-4 pt-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:pt-5">
          <div className="-mx-1 flex items-center gap-1 overflow-x-auto rounded-full bg-neutral-100 p-1">
            {["Auralis Studio", "Auralis Agents", "Auralis API"].map((tab, i) => (
              <button
                key={tab}
                className={`whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors ${
                  i === 0 ? "bg-white text-neutral-900 shadow-sm" : "text-neutral-500 hover:text-neutral-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="flex w-fit items-center gap-1.5 rounded-full bg-neutral-50 px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span className="text-xs font-medium text-neutral-600">AI Voice Generator</span>
          </div>
        </div>

        <div className="relative flex h-56 items-center justify-center overflow-hidden sm:h-80">
          <div className="gradient-blob absolute h-48 w-48 rounded-full opacity-90 sm:h-64 sm:w-64" />
          <button className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg ring-1 ring-black/5 transition-transform hover:scale-105 sm:h-14 sm:w-14">
            <PlayIcon className="ml-0.5 h-5 w-5 text-neutral-900" />
          </button>
        </div>

        <div className="flex flex-col gap-3 border-t border-neutral-100 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-6">
          <div className="-mx-1 flex items-center gap-4 overflow-x-auto px-1">
            {studioTabs.map((tab, i) => (
              <span
                key={tab}
                className={`whitespace-nowrap text-xs ${i === 0 ? "font-semibold text-neutral-900" : "text-neutral-400"}`}
              >
                {tab}
              </span>
            ))}
          </div>
          <button className="w-full rounded-full bg-neutral-900 px-4 py-1.5 text-xs font-medium text-white transition-colors hover:bg-neutral-800 sm:w-auto">
            Start no
          </button>
        </div>
      </div>
    </section>
  );
}

function TrustedBy() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12">
      <p className="mx-auto max-w-md text-center text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-400">
        Trusted by teams building modern audio experiences
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-6 sm:gap-x-12">
        {trustedLogos.map((logo) => (
          <div key={logo.name} className="flex items-center gap-2 text-neutral-400">
            {getLogoIcon(logo.icon, "h-4 w-4")}
            <span className="text-sm font-semibold tracking-wider">{logo.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function TwoSystems() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
          Two systems, one shared intelligence layer
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-neutral-500 sm:mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 md:grid-cols-2">
        <div className="card-purple rounded-2xl p-5 sm:p-6">
          <DownloadIcon className="h-4 w-4 text-neutral-500" />
          <div className="mt-12 sm:mt-16">
            <p className="text-sm font-medium text-neutral-800">Soft Editor UI</p>
            <p className="mt-1 text-xs text-neutral-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div className="card-mint rounded-2xl p-5 sm:p-6">
          <FullscreenIcon className="h-4 w-4 text-neutral-500" />
          <div className="mt-12 sm:mt-16">
            <p className="text-sm font-medium text-neutral-800">Transcript Panel</p>
            <p className="mt-1 text-xs text-neutral-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>

      <div className="relative mt-8 sm:mt-10">
        <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-gradient-to-b from-neutral-100 to-neutral-200 p-2 sm:rounded-3xl">
          <div className="overflow-hidden rounded-xl bg-neutral-900 p-2 sm:rounded-[20px] sm:p-3">
            <div className="flex items-center gap-1.5 px-2 pb-2">
              <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
            </div>
            <div className="relative overflow-hidden rounded-lg bg-white p-3 pb-40 sm:rounded-xl sm:p-4 sm:pb-44">
              <div className="grid grid-cols-12 gap-2 sm:gap-3">
                <div className="col-span-4 space-y-2">
                  <div className="h-3 w-16 rounded bg-neutral-200" />
                  <div className="h-3 w-12 rounded bg-neutral-100" />
                  <div className="mt-4 flex h-16 items-end gap-1 rounded-lg bg-neutral-50 p-2 sm:h-20">
                    {[40, 65, 30, 80, 50, 70, 45, 60].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-sm bg-orange-300"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
                <div className="col-span-8 space-y-2">
                  <div className="flex h-20 items-end justify-between gap-1 rounded-lg bg-neutral-50 p-3 sm:h-28">
                    {[30, 55, 40, 70, 45, 85, 60, 75, 50, 65, 40, 80, 55, 70].map((h, i) => (
                      <div
                        key={i}
                        className="w-1.5 rounded-full bg-sky-300"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                  <div className="flex h-8 items-end justify-between gap-1 rounded-lg bg-neutral-50 p-2 sm:h-10">
                    {[45, 60, 35, 70, 50, 40, 65, 55, 75, 45, 60, 38, 52, 68, 42, 58].map((h, i) => (
                      <div
                        key={i}
                        className="w-1 rounded-full bg-neutral-200"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute bottom-3 left-1/2 w-[calc(100%-1.5rem)] max-w-sm -translate-x-1/2 sm:bottom-4 sm:w-auto">
                <div className="rounded-xl bg-white/90 p-3 shadow-xl ring-1 ring-black/5 backdrop-blur sm:rounded-2xl sm:p-4">
                  <div className="flex items-center justify-between gap-3 sm:gap-6">
                    <div>
                      <p className="text-[10px] font-medium text-neutral-500">
                        NEURAL ENGINE v3.2 — PRO
                      </p>
                      <p className="mt-0.5 text-xs font-semibold text-neutral-900">
                        Real-Time Synthesis Active
                      </p>
                    </div>
                    <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-600">
                      STUDIO MODE
                    </span>
                  </div>
                  <div className="mt-3 flex h-10 items-end justify-between gap-0.5">
                    {[20, 45, 30, 70, 55, 85, 40, 65, 90, 50, 75, 35, 60, 80, 45, 70].map((h, i) => (
                      <div
                        key={i}
                        className="w-1 rounded-full bg-gradient-to-t from-violet-400 to-sky-400"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                  <div className="mt-3 grid grid-cols-3 gap-3 text-center">
                    <div>
                      <p className="text-[9px] uppercase tracking-wide text-neutral-400">Latency</p>
                      <p className="text-sm font-semibold text-neutral-900">24<span className="text-[10px] text-neutral-400">ms</span></p>
                    </div>
                    <div>
                      <p className="text-[9px] uppercase tracking-wide text-neutral-400">Confidence</p>
                      <p className="text-sm font-semibold text-neutral-900">99.6<span className="text-[10px] text-neutral-400">%</span></p>
                    </div>
                    <div>
                      <p className="text-[9px] uppercase tracking-wide text-neutral-400">Stability</p>
                      <p className="text-sm font-semibold text-neutral-900">0.02<span className="text-[10px] text-neutral-400">var</span></p>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button className="flex h-7 w-7 items-center justify-center rounded-full bg-neutral-900 text-white">
                        <PlayIcon className="ml-0.5 h-3 w-3" />
                      </button>
                      <span className="text-[10px] text-neutral-400">00:42 / 01:30</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="rounded bg-neutral-100 px-1.5 py-0.5 text-[9px] text-neutral-500">WAV</span>
                      <span className="rounded bg-neutral-100 px-1.5 py-0.5 text-[9px] text-neutral-500">48kHz</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StudioSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20">
      <div className="mb-2">
        <span className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-[11px] font-medium text-neutral-600">
          Auralis Studio
        </span>
      </div>
      <div className="mt-5 grid grid-cols-1 gap-4 sm:mt-6 sm:gap-8 lg:grid-cols-2 lg:items-start">
        <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
          Create, refine, & scale audio in one place
        </h2>
        <p className="text-sm leading-relaxed text-neutral-500 lg:pt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 md:grid-cols-2">
        <div className="card-dark overflow-hidden rounded-2xl">
          <div className="p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span className="text-[11px] text-neutral-400">RECORDING · 00:42</span>
              </div>
              <span className="text-[11px] text-neutral-500">Track 01</span>
            </div>
            <div className="mt-4 space-y-2">
              {[1, 2, 3].map((t) => (
                <div key={t} className="flex items-center gap-2 rounded-md bg-neutral-800/60 px-2 py-1.5">
                  <span className="text-[9px] text-neutral-500">V{t}</span>
                  <div className="flex h-5 flex-1 items-center gap-px overflow-hidden">
                    {[35, 55, 25, 70, 45, 60, 30, 80, 50, 40, 65, 35, 75, 55, 45, 60, 30, 70, 50, 40, 65, 35, 75, 55, 45, 60, 30, 70, 50, 40, 65, 35, 75, 55, 45, 60, 30, 70, 50, 40].map((h, i) => (
                      <div
                        key={i}
                        className="w-px rounded-full bg-cyan-400/70"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="border-t border-neutral-800 p-5">
            <p className="text-sm font-medium text-white">Soft Editor UI</p>
            <p className="mt-1 text-xs text-neutral-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>

        <div className="flex flex-col rounded-2xl border border-neutral-200 bg-white">
          <div className="flex items-center justify-between p-5">
            <FullscreenIcon className="h-4 w-4 text-neutral-400" />
            <span className="text-[11px] text-neutral-400">Live</span>
          </div>
          <div className="mt-auto p-5">
            <p className="text-sm font-medium text-neutral-900">Transcript Panel</p>
            <p className="mt-1 text-xs text-neutral-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-4">
        {features.map((f) => (
          <div
            key={f.label}
            className="flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-3 py-3 sm:gap-3 sm:rounded-2xl sm:px-5 sm:py-4"
          >
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-neutral-600">
              {getFeatureIcon(f.icon, "h-4 w-4")}
            </div>
            <span className="text-xs font-medium text-neutral-700 sm:text-sm">{f.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function AgentsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20">
      <div className="mb-2">
        <span className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-[11px] font-medium text-neutral-600">
          Auralis Agents
        </span>
      </div>
      <div className="mt-5 grid grid-cols-1 gap-4 sm:mt-6 sm:gap-8 lg:grid-cols-2 lg:items-start">
        <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
          Build agents that listen, respond, and act
        </h2>
        <p className="text-sm leading-relaxed text-neutral-500 lg:pt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 md:grid-cols-2">
        <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white">
          <div className="px-5 pt-5">
            <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-[11px] font-medium text-neutral-600">
              Voice-based agents
            </span>
          </div>
          <div className="relative flex h-40 items-center justify-center overflow-hidden sm:h-52">
            <div className="gradient-blob-soft absolute h-32 w-32 rounded-full opacity-70 sm:h-40 sm:w-40" />
          </div>
          <div className="p-5">
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-neutral-900 text-white">
                <MicIcon className="h-4 w-4" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs text-neutral-500">Hello, how can I assist you today?</p>
                <div className="mt-2 flex items-center gap-2">
                  <div className="flex min-h-7 items-center rounded-2xl bg-neutral-900 px-3 py-1.5 text-[11px] font-medium leading-tight text-white">
                    I need help checking my deployment status.
                  </div>
                  <span className="flex-shrink-0 text-neutral-300">↑</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white">
          <div className="px-5 pt-5">
            <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-[11px] font-medium text-neutral-600">
              Analytics
            </span>
          </div>
          <div className="relative flex h-40 items-center justify-center overflow-hidden sm:h-52">
            <div className="gradient-blob-soft absolute h-32 w-32 rounded-full opacity-70 sm:h-40 sm:w-40" />
          </div>
          <div className="p-5">
            <div className="rounded-xl border border-neutral-100 bg-white p-4 shadow-sm">
              <p className="text-sm font-medium text-neutral-900">Deep Insights</p>
              <p className="mt-1 text-xs text-neutral-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
              </p>
              <div className="mt-3 flex h-8 items-end gap-1">
                {[30, 55, 40, 70, 45, 85, 60, 75, 50, 65, 40, 80].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm bg-neutral-200"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-24">
      <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
        The future of voice starts here
      </h2>
      <div className="mt-6 flex flex-col items-stretch gap-3 sm:mt-8 sm:flex-row sm:items-center sm:justify-center">
        <button className="w-full rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-800 sm:w-auto">
          Get started
        </button>
        <button className="w-full rounded-full border border-neutral-300 bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 sm:w-auto">
          Talk to sales
        </button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-neutral-200">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 px-4 py-8 sm:flex-row sm:items-center sm:gap-6 sm:px-6">
        <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:gap-6">
          <div className="flex items-center gap-2">
            <LogoIcon className="h-4 w-4 text-neutral-900" />
            <span className="text-sm font-semibold tracking-tight text-neutral-900">Auralis</span>
          </div>
          <p className="text-xs text-neutral-400">© 2024 Auralis AI. Engineered for precision.</p>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {["Twitter", "GitHub", "Terms", "Privacy"].map((link) => (
            <a key={link} href="#" className="text-xs text-neutral-400 transition-colors hover:text-neutral-700">
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="flex flex-1 flex-col overflow-x-hidden">
      <Header />
      <Hero />
      <ProductShowcase />
      <TrustedBy />
      <TwoSystems />
      <StudioSection />
      <AgentsSection />
      <CTA />
      <Footer />
    </main>
  );
}
