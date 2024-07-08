"use client";

import { useTheme } from "@/context/theme-context";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="text-red-600">
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
