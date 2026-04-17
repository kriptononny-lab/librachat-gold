"use client";

import { useEffect } from "react";

const THEMES: Record<string, Record<string, string>> = {
  default: {
    "--t-bg-base":    "#0a0a0e",
    "--t-bg-surface": "#0f0f14",
    "--t-bg-card":    "#161620",
    "--t-bg-card-pop":"#130d1e",
    "--t-brand":      "#7E50E8",
    "--t-brand-light":"#9B72F0",
    "--t-brand-hover":"#9B72F0",
    "--t-brand-glow": "rgba(126,80,232,0.25)",
    "--t-brand-orb":  "rgba(126,80,232,0.11)",
    "--t-border":     "rgba(255,255,255,0.06)",
    "--t-border-pop": "rgba(126,80,232,0.22)",
    "--t-btn-text":   "#ffffff",
    "--t-gradient":   "linear-gradient(135deg,#FF6E3B,#FFD727)",
    "--t-dot":        "#9B72F0",
    "--t-dot-glow":   "rgba(126,80,232,0.5)",
  },
  gold: {
    "--t-bg-base":    "#0a0a0e",
    "--t-bg-surface": "#0f0f14",
    "--t-bg-card":    "#161620",
    "--t-bg-card-pop":"#130d1e",
    "--t-brand":      "#7E50E8",
    "--t-brand-light":"#9B72F0",
    "--t-brand-hover":"#6B42D4",
    "--t-brand-glow": "rgba(126,80,232,0.25)",
    "--t-brand-orb":  "rgba(126,80,232,0.1)",
    "--t-border":     "rgba(255,255,255,0.07)",
    "--t-border-pop": "rgba(126,80,232,0.22)",
    "--t-btn-text":   "#000000",
    "--t-gradient":   "linear-gradient(135deg,#FF6E3B,#FFD727)",
    "--t-dot":        "#7E50E8",
    "--t-dot-glow":   "rgba(126,80,232,0.6)",
  },
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const theme = params.get("theme") ?? "default";
    const vars = THEMES[theme] ?? THEMES.default;
    const root = document.documentElement;
    Object.entries(vars).forEach(([k, v]) => root.style.setProperty(k, v));
  }, []);

  return <>{children}</>;
}
