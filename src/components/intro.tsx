"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <motion.div
          className="relative"
          whileHover={{
            scale: 1.5,
          }}
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              type: "tween",
            }}
          >
            <Image
              src="/profile.jpg"
              alt="william lowe photo"
              width={192}
              height={192}
              quality={95}
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem]
              border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            className="text-3xl absolute right-0 bottom-0"
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              type: "spring",
              delay: 0.5,
            }}
          >
            &#x270C;
          </motion.span>
        </motion.div>
      </div>
      <motion.p className="mb-10 mt-4 px-4 text-2xl !leading-[1.5]"
        initial={{
          opacity: 0,
          y: 100
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
      >
        <span className="font-bold">Hi there, I&apos;m William Lowe.</span> Just
        a soon-to-graduate <span className="font-bold">Computer Science</span>{" "}
        student, fresh <span className="font-bold">frontend developer</span>,
        and classic <span className="font-bold">big nerd</span>. I spend my days
        and nights building and iterating on a number of projects,{" "}
        <span className="italic">learning</span>,{" "}
        <span className="italic">practicing</span> and{" "}
        <span className="italic">evolving</span> my skills so that I can become
        the <span className="underline">best developer</span> that I can be.
      </motion.p>

      <motion.div 
        className="flex flex-col sm:flex-row gap-2 px-4 items-center justify-center text-lg font-medium"
        initial={{
          opacity: 0,
          y: 100
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          delay: 0.1
        }}
      >
        <Link href='#contact' className=" group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-110 hover:bg-gray-950 active:scale-105 transition">
          Get in touch <BsArrowRight  className="opacity-70 group-hover:translate-x-2 transition"/>
        </Link>
        <a href="/cv.pdf" download={true} className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10">
          Download CV <HiDownload   className="opacity-70 group-hover:translate-y-1 transition"/>
        </a>
        <a href="https://www.linkedin.com/in/william-lowe-b08707297/" target="_blank" className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10"><BsLinkedin/></a>
        <a href="https://github.com/williamalowe" target="_blank" className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10"><BsGithub/></a>
      </motion.div>
    </section>
  );
}
