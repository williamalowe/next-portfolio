"use client";

import { useTheme } from "@/context/theme-context";
import { motion } from "framer-motion";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed bottom-4 right-4 w-8 h-8 bg-zinc-50 bg-opacity-80 shadow-lg shadow-black/[0.03] 
      border border-black/20 border-opacity-40 backdrop-blur-[0.5rem] flex items-center justify-center 
      rounded-md dark:bg-zinc-900 dark:border-black/40 dark:bg-opacity-75 sm:w-12 sm:h-12 sm:text-xl"
      initial={{
        opacity: 0,
        y: 100,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </motion.button>
  );
}
