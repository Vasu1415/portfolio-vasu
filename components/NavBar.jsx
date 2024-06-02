"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navigationLinks = [
  {
    title: "Coursework",
    path: "coursework"
  },
  {
    title: "Experience",
    path: "experience"
  },
  {
    title: "Projects",
    path: "projects"
  },
];

const NavBar = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-black bg-opacity-100">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-4">
        <Link href="/" className="text-2xl md:text-5xl text-white font-semibold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-500 to-yellow-500 font-extrabold">VM</span>
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navBarOpen ? (
            <button
              onClick={() => setNavBarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavBarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navigationLinks.map((link, index) => (
              <li key={index}>
                <ScrollLink
                  to={link.path}
                  smooth={true}
                  duration={500}
                  offset={-80} 
                  className="text-2xl cursor-pointer hover:text-gray-400 text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white"
                  onClick={() => setNavBarOpen(false)}
                >
                  {link.title}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navBarOpen ? <MenuOverlay links={navigationLinks} /> : null}
    </nav>
  );
};

export default NavBar;
