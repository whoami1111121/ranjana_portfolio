"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full    z-50 transition-all duration-300
        ${scrolled ? "bg-cardbg backdrop-blur-md" : "bg-transparent"}
      `}
    >
      <nav className="relative flex items-center justify-between container_my py-4">
        {/* Logo */}
        <div className="text-white font-bold text-xl">Ranjana</div>

        {/* Menu */}
        <div className="  gap-6 text-white hidden md:flex">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Static border */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-[#041930e0]" />

        {/* Glowing moving light */}
        <div className="absolute bottom-0 left-0 w-full h-px overflow-hidden">
          <span className="glow-line" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
