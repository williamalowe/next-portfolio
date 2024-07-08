"use client"
import { motion } from "framer-motion"

export default function Background() {
  return (
    <div className="fixed top-0 left-0  -z-10 w-screen h-screen overflow-hidden">
      <motion.div 
        className="absolute inset-0 -z-10 h-[200vh] w-[200vw] bg-white 
        bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] 
        bg-[size:6rem_6rem] dark:bg-zinc-800 dark:bg-[linear-gradient(to_right,#3a3a3a_1px,transparent_1px),linear-gradient(to_bottom,#3a3a3a_1px,transparent_1px)] " 
        initial={{
          x: 0,
          y: 0,
        }}
        animate={{
          x: '-100vw',
          y: '-100vh'
        }}
        transition={{
          duration: 100,
          repeat: Infinity,
          repeatType: "reverse"
        }}  
        />
    </div>
  )
}
