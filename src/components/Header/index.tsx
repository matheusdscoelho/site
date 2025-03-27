/* eslint-disable react/no-unescaped-entities */

"use client";

import {
  ArrowRight,
  ArrowDown,
  Linkedin,
  Github,
  Instagram,
} from "lucide-react";
import React, { useState } from "react";
import localFont from "next/font/local";
import { motion } from "framer-motion";

const kumarOneOutline = localFont({
  src: "../../../public/fonts/Gampolins.otf",
  weight: "500",
  style: "bold",
});

function Header() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className='flex flex-col gap-5 md:gap-10 items-center justify-center py-20'>
      <div className='flex flex-col md:flex-row items-center justify-center px-10 py-20 gap-10 md:gap-20'>
        <motion.p
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          className={`text-6xl font-bold text-center dark:text-white ${kumarOneOutline.className}`}
        >
          Hello World 😁, I'm <br />
          <span className='text-rose-500'>Matheus Coelho</span>
        </motion.p>

        <div className='md:hidden'>
          <ArrowDown className='relative top-5' size={100} />
        </div>
        <div className='hidden md:block'>
          <ArrowRight className='relative top-10' size={100} />
        </div>

        <motion.p
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          className={`relative text-5xl text-center md:top-14 ${kumarOneOutline.className}`}
        >
          Developer <br /> <span className='text-rose-500'>Engineer</span>{" "}
          <br /> Master’s student
        </motion.p>
      </div>

      <div className='grid grid-cols-3 grid-rows-2 gap-4 p-10 m-10 bg-gray-300 dark:bg-zinc-800 rounded-2xl relative'>
        <div className='self-start justify-self-start max-w-sm hidden md:block'>
          <p className='text-2xl dark:text-white font-bold mb-5'>About Me 🤩</p>
          <p className='text-lg dark:text-white'>
            I'm a front-end developer passionate about building innovative and
            efficient web solutions. I hold a degree in Computer Engineering and
            am currently pursuing a master's in Mathematical and Computational
            Modeling.
          </p>
        </div>

        <div className='col-span-3 md:col-span-1 sm:col-span-3 row-span-2 flex flex-col justify-center items-center'>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              src={flipped ? "/easter-egg.png" : "/avatar2.jpg"}
              alt='Avatar'
              className='w-40 h-40 sm:w-120 sm:h-150 object-contain rounded-4xl'
              animate={{ rotateY: flipped ? 180 : 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => setFlipped(!flipped)}
            />
            {flipped && (
              <p className='mt-4 text-2xl text-center dark:text-white'>
                You've found the{" "}
                <span className='text-rose-500'>easter egg</span>
              </p>
            )}
          </motion.div>

          <div className='mt-4 text-center dark:text-white block md:hidden'>
            <p className='text-lg'>
              I'm a <span className='text-rose-500'>front-end developer</span> passionate about building innovative and
              efficient web solutions, currently pursuing a master's in
              Mathematical and Computational Modeling.
            </p>
          </div>
        </div>

        <div className='self-start justify-self-end max-w-sm text-right hidden md:block'>
          <p className='text-2xl dark:text-white font-bold mb-5'>What I Do 🫡</p>
          <p className='text-lg dark:text-white'>
            I create modern, user-friendly websites and solve complex problems
            through code, always aiming for efficiency and great user
            experience.
          </p>
        </div>

        <div className='self-end justify-self-start max-w-sm hidden md:block'>
          <p className='text-2xl dark:text-white font-bold mb-5'>Contact Me</p>
          <p className='text-lg dark:text-white'>
            📍 Belo Horizonte, Brazil
            <br />
            📧 matheuscoelho060@gmail.com
            <br />
            📞 +55 31 99529-1319
          </p>
        </div>

        <div className='self-end justify-self-end max-w-sm text-right hidden md:block'>
          <p className='text-2xl dark:text-white font-bold mb-5'>Social</p>
          <div className='flex space-x-4 justify-end'>
            <a
              href='https://www.linkedin.com/in/matheus-coelho-90b494168/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-600 dark:text-white hover:text-blue-600 dark:hover:text-blue-400'
            >
              <Linkedin size={50} />
            </a>
            <a
              href='https://github.com/matheusdscoelho'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-600 dark:text-white hover:text-gray-800 dark:hover:text-gray-400'
            >
              <Github size={50} />
            </a>
            <a
              href='https://www.instagram.com/matheusdscoelho/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-600 dark:text-white hover:text-pink-600 dark:hover:text-pink-400'
            >
              <Instagram size={50} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
