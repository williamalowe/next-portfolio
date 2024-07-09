import { skillsList } from "@/lib/data";

export default function Skills() {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <h3 className="text-2xl font-bold">Skills</h3>
      <ul className="mt-8 flex flex-wrap max-w-[800px] gap-4 justify-center">
        {
          skillsList.map((skill) => 
          <li key={skill} className="p-2 bg-zinc-900 text-white rounded-md text-center shadow text-sm sm:w-32 sm:text-base">{skill}</li>
          )
        }
      </ul>
    </div>
  )
}
