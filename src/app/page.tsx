import AboutMe from "@/components/AboutMe";
import Hero from "@/components/Hero";
import MySkill from "@/components/MySkill";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <div className="bg-background font-instrument ">
        <Hero />
        <AboutMe />
        <Services />
        <MySkill />

        <div className="h-screen bg-amber-200"></div>
        <div className="h-screen bg-amber-200"></div>
        <div className="h-screen bg-amber-200"></div>
      </div>
    </>
  );
}
