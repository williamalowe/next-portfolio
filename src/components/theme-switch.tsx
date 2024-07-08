"use client";

import { useTheme } from "@/context/theme-context";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="fixed bottom-4 right-4 w-12 h-12 bg-zinc-900/10 flex items-center justify-center rounded-md text-xl dark:bg-zinc-50/10">
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
