"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-center items-center text-block p-4 shadow-md bg-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1">Harsh</span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
            .dev
          </span>
        </Link>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            className="text-black focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`md:flex md:space-x-8 items-center ${
            isOpen ? "block" : "hidden"
          } md:block absolute md:static top-16 left-0 bg-white w-full md:w-auto shadow-lg md:shadow-none rounded-md md:rounded-none z-10 p-4 md:p-0`}
        >
          <li className="border-b md:border-none">
            <Link
              href="/"
              className="block py-2 md:py-0 hover:text-gray-400 text-gray-700"
            >
              Home
            </Link>
          </li>
          <li className="border-b md:border-none">
            <Link
              href="#experince"
              className="block py-2 md:py-0 hover:text-gray-400 text-gray-700"
            >
              Experince
            </Link>
          </li>
          <li className="border-b md:border-none">
            <Link
              href="#projects"
              className="block py-2 md:py-0 hover:text-gray-400 text-gray-700"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="block py-2 md:py-0 hover:text-gray-400 text-gray-700"
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
