"use client";

import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";

import { Button } from "@/components/ui/button";
import { type ThemeMode } from "@/constants/themes";

const THEME_EVENT = "theme-change";
const THEME_MODE_STORAGE_KEY = "theme-mode";

function subscribe(callback: () => void) {
  window.addEventListener(THEME_EVENT, callback);
  return () => window.removeEventListener(THEME_EVENT, callback);
}

function getSnapshot(): ThemeMode {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function getServerSnapshot(): ThemeMode {
  return "light";
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";

    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    window.localStorage.setItem(THEME_MODE_STORAGE_KEY, nextTheme);
    window.dispatchEvent(new Event(THEME_EVENT));
  }

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className="size-10 rounded-[var(--theme-control-radius)] border border-[var(--brand-border-strong)] bg-[color:var(--brand-surface-strong)] text-[var(--brand-base)] shadow-[var(--brand-shadow)] hover:bg-[color:var(--brand-surface)] hover:text-[var(--brand-soft)]"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </Button>
  );
}
