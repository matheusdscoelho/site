"use client";

import { client, urlFor } from "@/services/client";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import { motion } from "framer-motion";
import Image from "next/image";

interface Testimonial {
  _id: string;
  name: string;
  company: string;
  feedback: string;
  image: string;
}

const TestimonialCarousel = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    const query = '*[_type == "testimonial"]';

    client.fetch<Testimonial[]>(query).then((data: Testimonial[]) => {
      setTestimonials(data);
      setIsFetching(false);
    });
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const currentTestimonial = testimonials[currentIndex];
  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < testimonials.length - 1;

  return (
    <div className='py-40 px-6 ' id='testimonials'>
      <h2 className='text-3xl font-bold text-center text-rose-500 dark:text-white mb-8'>
        Testimonials
      </h2>

      {isFetching ? (
        <div className='flex justify-center items-center my-30'>
          <BeatLoader
            color='oklch(0.645 0.246 16.439)'
            size={50}
            aria-label='Loading Spinner'
            data-testid='loader'
          />
        </div>
      ) : (
        <motion.div
          className='flex justify-center items-center'
          whileInView={{ opacity: [0, 1] }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: "tween" }}
          key={currentTestimonial.name}
        >
          <div className='flex items-center bg-gray-300 dark:bg-zinc-800 p-20 rounded-lg shadow-lg max-w-4xl mx-auto my-6 md:flex-row flex-col'>
            <div className='flex-shrink-0 mr-6'>
              <Image
                src={urlFor(testimonials[currentIndex].image).toString()}
                alt={testimonials[currentIndex].name}
                className='rounded-full object-cover border-4 border-rose-500 max-md:my-10'
                width={150}
                height={150}
              />
            </div>

            <div>
              <p className='md:text-xl text-md text-gray-700 dark:text-gray-300 mb-4 '>
                {currentTestimonial.feedback}
              </p>
              <p className='text-md font-semibold text-rose-500 dark:text-rose-400'>
                {currentTestimonial.name}
              </p>
            </div>
          </div>
        </motion.div>
      )}

      <div className='flex justify-center space-x-4 mt-6'>
        {canGoPrev && (
          <button
            onClick={prevTestimonial}
            className='bg-rose-400 text-white px-4 py-2 rounded-md hover:bg-rose-500 focus:outline-none'
          >
            <ArrowBigLeft />
          </button>
        )}
        {canGoNext && (
          <button
            onClick={nextTestimonial}
            className='bg-rose-400 text-white px-4 py-2 rounded-md hover:bg-rose-500 focus:outline-none'
          >
            <ArrowBigRight />
          </button>
        )}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
