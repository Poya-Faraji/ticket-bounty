"use client";

import { LucideMoon, LucideSun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeSwitcherComponent() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="relative hover:cursor-pointer"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <LucideSun className="absolute inset-0 m-auto h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <LucideMoon className="absolute inset-0 m-auto h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />

      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
