"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { client, urlFor } from "@/services/client";
import Image from "next/image";

interface About {
  title: string;
  description: string;
  imgUrl: string;
}

export const About = () => {
  const [abouts, setAbouts] = useState<About[]>([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data: About[]) => {
      setAbouts(data);
    });
  }, []);

  return (
    <div className='py-4 px-10' id='about'>
      <h2 className='text-[2.75rem] text-center font-medium lg:text-[4rem] xs:text-[1.5rem]'>
        I Know that <span className='text-rose-500'>Good Design</span> <br />
        means <span className='text-rose-500'>Good Business</span>
      </h2>

      <div className='flex justify-start items-start mt-10 gap:5 lg:gap-10 flex-col lg:flex-row'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className=' p-10 flex justify-center flex-col items-center my-10 bg-gray-300 dark:bg-zinc-800 rounded-2xl'
            key={about.title + index}
          >
            <Image
              height={400}
              width={400}
              className="object-contain h-100 w-100"
              src={urlFor(about.imgUrl).toString()}
              alt={about.title}
            />
            <h2 className='font-bold text-xl' style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p
              className='lg:text-lg sm:text-md text-left leading-7'
              style={{ marginTop: 10 }}
            >
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
