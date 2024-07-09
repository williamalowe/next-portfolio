"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

type ProjectProps = {
  title: string,
  description: string,
  tags: string[],
  imgURL: string,
  demoURL: string,
  repoURL: string,
  isAlt: boolean,
}

export default function ProjectCard({ title, description, tags, imgURL, demoURL, repoURL, isAlt }: ProjectProps) {
  const projectRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: projectRef,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProg = useTransform(scrollYProgress, [0, 1], [0.8,1])
  const opacityProg = useTransform(scrollYProgress, [0, 1], [0.6,1])

  return (
    <motion.div 
      className={`${isAlt && 'flex-row-reverse'} relative flex bg-zinc-100 max-w-[42rem] h-[20rem] border border-black/5 rounded-md overflow-hidden dark:bg-zinc-700`}
      ref={projectRef}
      style={{
        scale: scaleProg,
        opacity: opacityProg,
      }}
    >
      <section className="flex flex-col gap-y-2 h-full p-6 flex-1 w-1/2">
        <h5 className="text-xl font-bold">Title Here</h5>
        <p className="leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos est dolor ullam mollitia fuga temporibus! Earum non enim iusto nihil! Totam cumque facilis quaerat debitis. Sequi illum vel in distinctio!</p>
        <ul className="flex flex-wrap gap-1 mt-auto">
          <li className="bg-black/[70] px-3 py-1 text-xs uppercase tracking-wider text-white rounded-full">HTML</li>
          <li className="bg-black/[70] px-3 py-1 text-xs uppercase tracking-wider text-white rounded-full">CSS</li>
          <li className="bg-black/[70] px-3 py-1 text-xs uppercase tracking-wider text-white rounded-full">JavaScript</li>
          <li className="bg-black/[70] px-3 py-1 text-xs uppercase tracking-wider text-white rounded-full">TypeScript</li>
          <li className="bg-black/[70] px-3 py-1 text-xs uppercase tracking-wider text-white rounded-full">HTML</li>
        </ul>
      </section>
      <div className="relative flex-1">
      <Image 
        src='/profile.jpg'
        alt="Image alt text here"
        width={480}
        height={480}
        quality={95}
        className={`${isAlt ? '-left-1' : '-right-1'} w-[30rem] h-[30rem] object-cover absolute top-8 rounded-md`}
      />
      </div>
        <div className={`${isAlt ? 'left-2' : 'right-2'} absolute top-2 flex gap-x-2`}>
          <a href="#" className="text-sm bg-zinc-900 text-white p-2 flex items-center gap-x-2 rounded-md outline-none hover:scale-110 active:scale-95 hover:z-20 transition cursor-pointer border backdrop-blur-[0.5rem] dark:bg-white/20 dark:text-white/80">Demo Link</a>
          <a href="#" className="text-sm bg-white p-2 flex items-center gap-x-2 rounded-md outline-none hover:scale-110 active:scale-95 hover:z-20 transition cursor-pointer border backdrop-blur-[0.5rem] dark:bg-white/20 dark:text-white/80">Repo Link</a>
        </div>
    </motion.div>
  )
}
