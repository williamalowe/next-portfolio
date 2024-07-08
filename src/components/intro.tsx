import Image from "next/image";

export default function Intro() {
  return (
    <section>
      <div className="flex flex-col items-center gap-4 sm:flex-row">
        <Image 
          src='/profile.jpg'
          alt="William Lowe profile picture"
          width={192}
          height={192}
          quality={95}
          priority={true}
          className="w-32 h-32 rounded-full object-cover border-[0.3rem] border-white shadow-xl dark:border-black/20"
        />
        <div className="text-center sm:text-left">
          <h5>Hi, I&apos;m</h5>
          <h1 className="text-4xl font-bold">William Lowe</h1>
        </div>
      </div>
      <div></div>
    </section>
  )
}
