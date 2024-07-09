import About from "@/components/about";
import Intro from "@/components/intro";
import SectionStep from "@/components/section-step";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Intro />
      <SectionStep />
      <About />
    </main>
  );
}
