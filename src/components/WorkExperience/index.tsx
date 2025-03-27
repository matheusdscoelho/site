"use client";

import { sortByYear } from "@/lib/functions";
import { client, urlFor } from "@/services/client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Skill {
  name: string;
  bgColor: string;
  icon: string;
}

interface Experience {
  year: string;
  works: {
    name: string;
    company: string;
    desc: string;
  }[];
}

const WorkExperience = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data: Experience[]) => {
      setExperiences(sortByYear(data));
    });

    client.fetch(skillsQuery).then((data: Skill[]) => {
      setSkills(data);
    });
  }, []);
  return (
    <div className='py-12 px-6 ' id='workExperience'>
      <div className='max-w-500 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 bg-gray-300 dark:bg-zinc-800 p-10 rounded-2xl'>
        <motion.div className='space-y-4'>
          <h2 className='text-4xl md:text-6xl font-bold text-center text-rose-500 dark:text-white mb-8'>
            Skills
          </h2>

          <motion.div className='flex flex-wrap gap-4 justify-center '>
            {skills.map((skill) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 2 }}
                className='flex flex-col items-center'
                key={skill.name}
              >
                <div
                  className='w-30 h-30 rounded-full flex justify-center items-center'
                  style={{ backgroundColor: skill.bgColor }}
                >
                  <Image
                    src={urlFor(skill.icon).url()}
                    alt={skill.name}
                    width={100}
                    height={100}
                  />
                </div>
                <p className=''>{skill.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <div>
          <h2 className='text-4xl md:text-6xl font-bold text-center text-rose-500 dark:text-white mb-8'>
            Work Experiences
          </h2>
          <div className='relative'>
            <div className='absolute left-0 top-0 h-full w-1 bg-rose-500'></div>
            {experiences
              .sort((a, b) => parseInt(b.year) - parseInt(a.year))
              .map((experience) => (
                <motion.div
                  key={experience.year}
                  className='flex justify-start items-center mb-8'
                >
                  <div className='w-2xl h-10 bg-rose-500 text-white flex relative justify-center items-center rounded-full'>
                    <span className='text-sm font-semibold'>
                      {experience.year}
                    </span>
                  </div>
                  {experience.works.map((work) => (
                    <div className='ml-6' key={work.company}>
                      <h3 className='text-xl font-semibold text-rose-500 dark:text-white'>
                        {work.company}
                      </h3>
                      <p className='text-lg text-gray-700 dark:text-gray-300'>
                        {work.name}
                      </p>
                      <p className='text-gray-600 dark:text-gray-400'>
                        {work.desc}
                      </p>
                    </div>
                  ))}
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
