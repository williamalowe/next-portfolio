"use client";
import { motion } from "framer-motion";

export default function SectionStep() {
  return (
    <motion.div
      className="bg-zinc-200 my-4 h-16 w-1 rounded-md sm:block dark:bg-opacity-20"
      initial={{
        opacity: 0,
        y: 100,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.35,
      }}
    />
  );
}
