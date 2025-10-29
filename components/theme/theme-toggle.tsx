"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Before mount, don't render theme-dependent text to avoid hydration mismatch
  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        className="rounded-[--radius] border border-border px-3 py-2 text-sm hover:bg-accent"
        // keep a stable title; no theme-dependent text yet
        title="Toggle theme"
      >
        {/* simple placeholder; no text that could mismatch */}
        <span className="sr-only">Toggle theme</span>🌓
      </button>
    );
  }

  const next = resolvedTheme === "dark" ? "light" : "dark";
  return (
    <button
      onClick={() => setTheme(next)}
      aria-label="Toggle theme"
      className="rounded-[--radius] border border-border px-3 py-2 text-sm hover:bg-accent"
      title={`Switch to ${next} mode`}
    >
      {resolvedTheme === "dark" ? "Light" : "Dark"}
    </button>
  );
}
