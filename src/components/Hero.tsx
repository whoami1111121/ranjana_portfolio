"use client";


import Image from "next/image"; 
import BubbleColumn from "./BubbleColumn";
import GlowFlies from "./GlowFlies";
import Navbar from "./Navbar";
import Landing from "./Landing";

export default function Hero() {
  

  return (
    <section className="relative     w-full  ">
      <Image
        src="/banner-shape-light.svg"
        alt="background"
        fill
        className="  absolute z-0  "
      />
      <Navbar />

      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2  w-full">
        <BubbleColumn />
      </div>
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2  w-full">
        <GlowFlies />
      </div>
      <Landing />

      
    </section>
  );
}
