import AboutMe from "@/components/AboutMe";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <div className="bg-background font-instrument ">
        {/* <Hero /> */}
        <AboutMe />

        <div className="h-screen bg-amber-200"></div>
        <div className="h-screen bg-amber-200"></div>
        <div className="h-screen bg-amber-200"></div>
      </div>
    </>
  );
}
