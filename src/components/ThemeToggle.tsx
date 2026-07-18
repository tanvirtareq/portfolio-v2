"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    const initial =
      stored === "light" || stored === "dark"
        ? stored
        : window.matchMedia("(prefers-color-scheme: light)").matches
          ? "light"
          : "dark";
    // Syncs local state from localStorage/matchMedia once on mount; the
    // <html> data-theme attribute is already set synchronously by the
    // inline script in layout.tsx, so only this icon can briefly mismatch.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(initial as "dark" | "light");
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    window.localStorage.setItem("theme", next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle color theme"
      className="chip !rounded-full !p-2.5 cursor-pointer"
      suppressHydrationWarning
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
