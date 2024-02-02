"use client";

// Navbar.tsx
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "Home" },
    { id: 2, link: "About" },
    { id: 3, link: "Summary" },
    { id: 4, link: "Projects" },
    { id: 5, link: "Experience" },
    { id: 6, link: "Contact" },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-black bg-blue-500 sticky top-0 z-10">
      <div>
        <h1 className="text-5xl font-serif ml-2">
          <Link href="/" className="link-underline link-underline-black">Portfolio
          </Link>
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-semibold font-serif text-neutral-950 hover:scale-105 hover:text-white duration-200 link-underline"
          >
            <Link href={`#${id}`} onClick={() => setNav(!nav)}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      {/* <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl">
              <Link href={`#${id}`} onClick={() => setNav(!nav)}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )} */}
    </div>
  );
};

export default Navbar;

