"use client";

import { ArrowUpCircle, Linkedin, Github, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className='w-full py-4 transition-all duration-200 bg-gray-200 text-gray-900 dark:bg-zinc-900 dark:text-white'>
      <div className='max-w-4xl mx-auto flex justify-between items-center'>
        <div className='text-sm'>
          <p>&copy; 2025 - All Rights Reserved Coelho</p>
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className='p-2 rounded-full text-white bg-rose-400 hover:bg-rose-500 transition-colors hidden sm:block'
          aria-label='Scroll to top'
        >
          <ArrowUpCircle size={24} />
        </button>

        <div className='flex space-x-4'>
          <a
            href='https://www.linkedin.com/in/matheus-coelho-90b494168/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-600 dark:text-white hover:text-blue-600 dark:hover:text-blue-400'
          >
            <Linkedin size={24} />
          </a>
          <a
            href='https://github.com/matheusdscoelho'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-600 dark:text-white hover:text-gray-800 dark:hover:text-gray-400'
          >
            <Github size={24} />
          </a>
          <a
            href='https://www.instagram.com/matheusdscoelho/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-600 dark:text-white hover:text-pink-600 dark:hover:text-pink-400'
          >
            <Instagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
