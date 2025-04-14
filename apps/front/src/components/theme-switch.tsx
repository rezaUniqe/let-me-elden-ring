"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@workspace/ui/components/button";
import { cn } from "@workspace/ui/lib/utils";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = theme === "dark";

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      className={cn(
        "relative h-9 w-16 rounded-full px-0 transition-colors",
        isDark
          ? "bg-slate-800 border-slate-700"
          : "bg-slate-100 border-slate-200",
      )}
    >
      <div
        className={cn(
          "absolute top-1 h-6 w-6 rounded-full flex items-center justify-center transition-all duration-300",
          isDark ? "left-[calc(100%-28px)] bg-slate-950" : "left-1 bg-white",
        )}
      >
        {isDark ? (
          <Moon className="h-4 w-4 text-slate-200" />
        ) : (
          <Sun className="h-4 w-4 text-amber-500" />
        )}
      </div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
