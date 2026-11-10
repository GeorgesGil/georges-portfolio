"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

export function ThemeToggle({ label }: { label: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false,
  );
  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label={label}
      title={label}
      aria-pressed={isDark}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? (
        <Sun size={16} strokeWidth={1.5} aria-hidden="true" focusable="false" />
      ) : (
        <Moon size={16} strokeWidth={1.5} aria-hidden="true" focusable="false" />
      )}
    </button>
  );
}
