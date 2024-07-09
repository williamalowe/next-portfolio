"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsDownload, BsGithub, BsLinkedin } from "react-icons/bs";

export default function Intro() {
  return (
    <section className="flex flex-col items-center gap-y-4">
      <motion.div
        className="flex flex-col items-center gap-4 sm:flex-row"
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.15,
        }}
      >
        <Image
          src="/profile.jpg"
          alt="William Lowe profile picture"
          width={192}
          height={192}
          quality={95}
          priority={true}
          className="w-32 h-32 rounded-full object-cover border-[0.3rem] border-white shadow-xl dark:border-black/20 hover:scale-125 transition"
        />
        <div className="text-center sm:text-left">
          <h5>Hi, I&apos;m</h5>
          <h1 className="text-4xl font-bold">William Lowe</h1>
        </div>
      </motion.div>
      <motion.p
        className="px-8 mt-8 text-center max-w-[800px] leading-relaxed"
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.25,
        }}
      >
        Just a soon-to-graduate{" "}
        <span className="font-bold">Computer Science</span> student, fresh{" "}
        <span className="italic">frontend developer</span>, and classic{" "}
        <span className="italic">big nerd</span> with a focus on{" "}
        <span className="font-bold">React & Next.js</span>. Looking to grow as a{" "}
        <span className="font-bold">professional</span>, and continue to improve
        as a <span className="font-bold">developer</span>.
      </motion.p>
      <motion.div
        className="flex flex-col gap-2 items-center justify-center sm:flex-row"
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.25,
        }}
      >
        <Link
          href="#"
          className="group flex bg-zinc-900 text-white px-7 py-3 items-center gap-2 rounded-md border border-black hover:scale-110 hover:z-20 hover:bg-zinc-950 active:scale-95 transition"
        >
          Wanna get in touch?{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-2 transition" />
        </Link>
        <a
          href="/cv.pdf"
          download
          className="group bg-white px-7 py-3 flex items-center gap-x-2 rounded-md outline-none hover:scale-110 active:scale-95 hover:z-20 transition cursor-pointer border backdrop-blur-[0.5rem] dark:bg-white/20 dark:text-white/80"
        >
          Download CV{" "}
          <BsDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <div className="flex gap-x-4">
        <a
          href="https://www.linkedin.com/in/william-lowe-b08707297/"
          target="_blank"
          className="bg-white p-4 text-zinc-700 hover:text-zinc-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border backdrop-blur-[0.5rem] dark:bg-white/20 dark:text-white/80"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/williamalowe"
          target="_blank"
          className="bg-white p-4 text-zinc-700 hover:text-zinc-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border backdrop-blur-[0.5rem] dark:bg-white/20 dark:text-white/80"
        >
          <BsGithub />
        </a>
        </div>
      </motion.div>
    </section>
  );
}
