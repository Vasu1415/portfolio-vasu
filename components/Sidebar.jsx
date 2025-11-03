"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FaBook, FaProjectDiagram, FaBriefcase, FaHome, FaSun, FaMoon } from 'react-icons/fa';

const links = [
  { title: 'Home', href: '/' , icon: FaHome},
  { title: 'Experience', href: '/experience', icon: FaBriefcase },
  { title: 'Projects', href: '/projects', icon: FaProjectDiagram },
  { title: 'Notes', href: '/coursework', icon: FaBook },
];

const Sidebar = () => {
  // Sidebar state
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Initialize theme from localStorage or system preference
    try {
      const stored = localStorage.getItem('theme');
      if (stored) {
        setIsDark(stored === 'dark');
        document.documentElement.classList.toggle('dark', stored === 'dark');
      } else {
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        setIsDark(prefersDark);
        document.documentElement.classList.toggle('dark', prefersDark);
      }
    } catch (e) {
      // ignore
    }
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light');
    } catch (e) {}
    document.documentElement.classList.toggle('dark', next);
  };

  return (
    <>
      {/* Mobile overlay removed: the slim rail will be visible on small screens (icons only). */}

      {/* Sidebar: slim rail on small screens (icons only), full sidebar on md+ */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-40 flex flex-col
          bg-white dark:bg-black text-black dark:text-white border-r border-black dark:border-white
          transition-all duration-300 ease-in-out
          w-16 md:w-64
        `}
      >
        <div className="flex h-full flex-col">
          <div className="flex flex-col gap-4 px-4 py-6 border-b border-black dark:border-white">
            <Link href="/" className="flex items-center gap-3">
              <span className="text-xl font-extrabold text-black dark:text-white">
                <span className="hidden md:inline-block">Vasu Mittal</span>
                <span className="md:hidden">VM</span>
              </span>
            </Link>
          </div>

          <nav className="flex-1 overflow-y-auto px-4 py-6">
            <ul className="space-y-2">
              {links.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`
                        flex items-center gap-3 px-4 py-3 rounded-lg
                        transition-colors duration-200
                        justify-center md:justify-start
                        hover:bg-transparent hover:border hover:rounded-lg hover:border-black dark:hover:border-white
                        text-black dark:text-white
                      `}
                    >
                      <div className="flex items-center justify-center w-6 h-6 text-black dark:text-white">
                        <Icon />
                      </div>
                      <span className={`font-medium hidden md:inline-block ml-2`}>{link.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* footer: theme toggle */}
          <div className="px-2 md:px-4 py-4 border-t border-black dark:border-white">
            <div className="flex items-center justify-center md:justify-between gap-3 w-full">
              <div className="hidden md:flex items-center gap-2">
                <span className="text-sm text-black dark:text-white">Theme</span>
              </div>

              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                title="Toggle light / dark"
                className="inline-flex items-center justify-center gap-2 px-2 py-2 text-sm border border-black dark:border-white rounded w-full md:w-auto"
              >
                {isDark ? <FaSun /> : <FaMoon />}
                <span className="hidden md:inline-block ml-1">{isDark ? 'Light' : 'Dark'}</span>
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
