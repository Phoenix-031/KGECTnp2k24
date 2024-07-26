"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Testimonial } from './types';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.3 } },
};

const TestimonialSection = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    fetch('/testimonials.json')  //testimonials.json is the name of the json file here
      .then(response => response.json())
      .then(data => setTestimonials(data))
      .catch(error => console.error('Error fetching testimonials:', error));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevCurrent) => (prevCurrent + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  if (testimonials.length === 0) return null;

  return (
    <section className="py-12 bg-custom-gray">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-3">Testimonials</h2>
        <div className="relative w-full flex items-center justify-center h-80">
          <AnimatePresence>
            {testimonials.map((testimonial, index) => (
              index === current && (
                <motion.div
                  key={index}
                  className="absolute w-full max-w-lg p-6 bg-white rounded-lg shadow-lg"
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={100}  // Replace with the actual width
                    height={100}
                    className="w-16 h-16 rounded-full mx-auto"
                  />
                  <h3 className="mt-4 text-xl font-semibold text-center">
                    {testimonial.name}
                  </h3>
                  <p className="mt-2 text-gray-600 text-center">{testimonial.role}</p>
                  <p className="mt-4 text-gray-700 text-center">
                  &quot;{testimonial.testimonial}&quot;
                  </p>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
