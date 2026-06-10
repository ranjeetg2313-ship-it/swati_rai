"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative flex items-center justify-center w-9 h-9 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors border border-zinc-700"
      aria-label="Toggle theme"
    >
      <Sun className="h-[1.1rem] w-[1.1rem] text-white transition-all scale-100 rotate-0 dark:-rotate-90 dark:scale-0 absolute" />
      <Moon className="h-[1.1rem] w-[1.1rem] text-white transition-all scale-0 rotate-90 dark:rotate-0 dark:scale-100 absolute" />
    </button>
  )
}
