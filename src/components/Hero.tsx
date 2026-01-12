"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

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
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      {/* BACK TEXT */}
      <motion.h1
        style={{
          transform: `translate(${mouse.x * -0.02}px, ${mouse.y * -0.02}px)`,
        }}
        className="absolute text-[16rem] font-bold  select-none"
      >
        <span className="uppercase text-transparent [-webkit-text-stroke:4px_white]">
          Backend
        </span>
      </motion.h1>

      {/* IMAGE (NO ANIMATION) */}
      {/* <img src="/hero.png" alt="hero" className="relative z-10 w-80" /> */}
      <Image
        src="/cat.webp"
        alt="hero"
        width={1000}
        height={1000}
        className="relative z-10 w-80"
      />

      {/* FRONT TEXT */}
      <motion.h1
        style={{
          transform: `translate(${mouse.x * 0.04}px, ${mouse.y * 0.04}px)`,
        }}
        className="absolute z-20 text-[10rem] font-bold"
      >
        & Frontend
      </motion.h1>
    </section>
  );
}
