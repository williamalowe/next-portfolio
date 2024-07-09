"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <motion.h3
        className="text-2xl font-bold"
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.45,
        }}
      >
        About Me
      </motion.h3>
      <motion.div
        className="mt-8 flex flex-col gap-y-4"
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.55,
        }}
      >
        <p className="px-8 max-w-[960px] text-center text-sm sm:text-base">
          I am a Computer Science student, aiming to <span className="font-bold">Graduate in 2024</span>. I&apos;ve
          always loved computers, but didn&apos;t start coding until I started
          Uni. I began with Python and C# for Uni classes, but nothing really
          stuck until I began playing with{" "}
          <span className="font-bold">Web Developement</span> for a Capstone
          Unit, after which I picked up elective units in{" "}
          <span className="font-bold">Responsive Web Design</span>, and{" "}
          <span className="font-bold">UI/UX Design</span>. I decided to
          undertake some self-directed learning, completing{" "}
          <span className="font-bold">The Odin Project&apos;s Foundations</span>{" "}
          and{" "}
          <span className="font-bold">JavaScript Full Stack Development</span>{" "}
          course. At it&apos;s core, I love the continually evolving
          technologies, and rewarding creative problem-solving aspects.
        </p>
        <p className="px-8 max-w-[960px] text-center text-sm sm:text-base">
          I have recently transitioned to a core stack of{" "}
          <span className="font-bold">React</span>,{" "}
          <span className="font-bold">Next.js</span>,{" "}
          <span className="font-bold">Node.js</span>, and{" "}
          <span className="font-bold">TypeScript</span>, having previously used{" "}
          <span className="font-bold">JavaScript</span> and{" "}
          <span className="font-bold">CSS Modules</span>. When I&apos;m not
          practicing or learning with new technologies, you&apos;ll usually find
          me longing for a <span className="font-bold">Fishing & Camping</span>{" "}
          trip, <span className="font-bold">Cooking</span>,{" "}
          <span className="font-bold">Longboarding</span>,{" "}
          <span className="font-bold">Watching Movies/TV Shows</span>, or
          playing a wide-variety of{" "}
          <span className="font-bold">Video Games</span>. I love pretty much
          anything outdoors, but also am a classic nerd with all the
          stereotypical interests that come along with it.
        </p>
        <p className="px-8 max-w-[960px] text-center text-sm sm:text-base">
          My current <span className="font-bold">Learning Goals</span> include
          continuing to practice with <span className="font-bold">Next.js</span>{" "}
          and <span className="font-bold">TypeScript</span>, as well as practice
          building more complex{" "}
          <span className="font-bold">Full Stack Applications</span> 
          {" "}with{" "}
          <span className="font-bold">MongoDB</span>. I aim to get my foot in
          the web developement door with a{" "}
          <span className="font-bold">Frontend Developer Junior/Intership</span>{" "}
          role where I can be exposed to a{" "}
          <span className="font-bold">Professional Environment</span>, work on{" "}
          <span className="font-bold">Real-World Projects</span>, and seek{" "}
          <span className="font-bold">Mentorship</span> from experienced
          developers. After some time, I hope to transition fully into{" "}
          <span className="font-bold">Full Stack Development</span>.
        </p>
      </motion.div>
    </div>
  );
}
