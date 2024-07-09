import About from "@/components/about";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionStep from "@/components/section-step";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-y-12">
      <Intro />
      <SectionStep />
      <About />
      <Projects />
      <Skills />
    </main>
  );
}
