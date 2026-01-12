import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex gap-4">
      <Link href={"/"}>Home</Link>
      <Link href={"/about"}>about</Link>
      <Link href={"/contact"}>contact</Link>
      <Link href={"/experience"}>experience</Link>
      <Link href={"/projects"}>projects</Link>
      <Link href={"/services"}>services</Link>
    </div>
  );
};

export default Navbar;
