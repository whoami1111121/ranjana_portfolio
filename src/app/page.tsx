import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import MySkill from "@/components/MySkill";
import Projects from "@/components/Projects";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <div className="bg-background font-instrument ">
        <Hero />
        <AboutMe />
        <Services />
        <MySkill />
        <Projects />
        <Contact />

        <div className="h-screen bg-amber-200"></div>
        <div className="h-screen bg-amber-200"></div>
        <div className="h-screen bg-amber-200"></div>
      </div>
    </>
  );
}
