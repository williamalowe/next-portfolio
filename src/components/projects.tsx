import ProjectCard from "./project-card";

export default function Projects() {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <h3 className="text-2xl font-bold">Personal Projects</h3>
      <div className="flex flex-col gap-y-2 mt-8">
        <ProjectCard />
        <ProjectCard 
          isAlt={true}
        />
        <ProjectCard />
        <ProjectCard 
          isAlt={true}
        />
        <ProjectCard />
      </div>
    </div>
  )
}
