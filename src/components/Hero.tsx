"use client";

import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import Image from "next/image";
import { useEffect, useState } from "react";
import WavingHand from "./WavingHand";

export default function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX - window.innerWidth / 2;
      const y = e.clientY - window.innerHeight / 2;
      setMouse({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="bg-red-600  py-12 ">
      <div className="w-[90%] md:w-[75%] mx-auto">
        <div className="flex gap-4 items-center justify-center">
          <WavingHand />
          <h1 className="text-[clamp(1rem,3vw,1.75rem)] text-white">
            My name is Ranjana Tamang a Fullstack Developer.
          </h1>
        </div>
      </div>
      <section className="relative   flex   justify-center overflow-hidden   text-white">
        <motion.h1
          style={{
            transform: `translate(${mouse.x * -0.02}px, ${mouse.y * -0.02}px)`,
          }}
          className="absolute   h-[80%]   font-bold  select-none"
        >
          <span className="uppercase text-transparent [-webkit-text-stroke:4px_white] text-[clamp(4rem,16vw,12rem)]">
            Backend
          </span>
        </motion.h1>

        {/* <img src="/hero.png" alt="hero" className="relative z-10 w-80" /> */}
        <Image
          src="/cat.webp"
          alt="hero"
          width={1000}
          height={1000}
          className="relative z-10 w-70 md:w-120 mt-12"
        />

        <motion.h1
          style={{
            transform: `translate(${mouse.x * 0.04}px, ${mouse.y * 0.04}px)`,
          }}
          className="absolute z-20 h-full   font-bold flex items-end    "
        >
          <span className="text-[clamp(4rem,16vw,12rem)]">& Frontend</span>
        </motion.h1>
      </section>
    </div>
  );
}
