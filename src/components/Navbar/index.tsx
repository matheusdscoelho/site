"use client";

import Link from "next/link";
import { Sun, Moon, Rabbit, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  if (!theme) return null;

  return (
    <header className="w-full p-4 transition-all duration-200 bg-gray-200 text-gray-900 dark:bg-zinc-900 dark:text-white">
      <nav className="max-w-6xl mx-auto flex justify-between items-center border-b-2 pb-2">
        <div className="flex items-center space-x-4">
          <Image
            src="/avatar2.jpg"
            alt="Avatar"
            className="w-12 h-12 rounded-full bg-rose-400"
            width={48}
            height={48}
          />
          <div className="text-lg font-bold">
            Matheus <br />
            <span className="flex gap-2 items-center">
              <Rabbit size={20} /> Coelho
            </span>
          </div>
        </div>

        <button
          className="md:hidden p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className="hidden md:flex items-center space-x-6">
          <Link href="#about" className="hover:underline hover:text-rose-400">
            About
          </Link>
          <Link href="#workExperience" className="hover:underline hover:text-rose-400">
            Skills
          </Link>
          <Link href="#workExperience" className="hover:underline hover:text-rose-400">
            Work
          </Link>
          <Link href="#contact" className="hover:underline hover:text-rose-400">
            Contact
          </Link>
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-2 rounded-full transition-colors duration-300 bg-gray-800 text-white dark:bg-gray-200 dark:text-gray-800"
            aria-label="Change Mode"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          className="fixed top-0 left-0 w-64 h-full z-1 bg-gray-900 text-white dark:bg-zinc-800 shadow-lg flex flex-col items-start p-6 space-y-6"
        >
          <button
            className="self-end p-2 rounded-full hover:bg-gray-700 transition"
            onClick={() => setMenuOpen(false)}
          >
            <X size={24} />
          </button>

          <Link href="#about" className="text-lg hover:text-rose-400" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link href="#workExperience" className="text-lg hover:text-rose-400" onClick={() => setMenuOpen(false)}>
            Skills
          </Link>
          <Link href="#workExperience" className="text-lg hover:text-rose-400" onClick={() => setMenuOpen(false)}>
            Work
          </Link>
          <Link href="#contact" className="text-lg hover:text-rose-400" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>

          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-2 mt-4 rounded-full transition-colors duration-300 bg-gray-800 text-white dark:bg-gray-200 dark:text-gray-800"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </motion.div>
      )}
    </header>
  );
}
