'use client';

import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { IoIosDocument } from 'react-icons/io';
import { studentPhoto } from '@/assets/images';

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    photo: string;
    title: string;
    skills: string;
    domain: string;
    experience: string;
    year: number;
    department: string;
    linkedin: string;
    resume: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn('mr-auto ml-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 w-full rounded-xl', className)}>
      {items.map((item, idx) => (
        <div
          key={idx}
          className='relative group p-2 h-full flex flex-col'
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className='absolute inset-0 h-full w-full bg-blue-200/50 dark:bg-blue-800/[0.8] block  rounded-3xl'
                layoutId='hoverBackground'
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <div className='w-full flex flex-row justify-center items-center text-center'>
              <Image
                src={studentPhoto}
                className='rounded-full sm:w-[21vh] sm:h-[21vh] w-[19vh] h-[19vh]'
                alt={item.title}
              />
            </div>
            <CardTitle className='sm:text-2xl text-lg font-semibold text-black'>{item.title}</CardTitle>
            <div className='sm:text-md text-sm'>
              {item.year}|{item.department}
            </div>
            <div className='sm:text-md text-sm font-sans'>
              <span className='font-bold'>Skill:</span> {item.skills}
            </div>
            <div className='sm:text-md text-sm font-sans'>
              <span className='font-bold'>Domain:</span> {item.domain}
            </div>
            <div className='sm:text-md text-sm font-sans'>
              <span className='font-bold'>Experience:</span> {item.experience}
            </div>
            <div className='mt-5 flex flex-row justify-center items-center sm:gap-6 gap-4 w-full'>
              <Link
                className=' text-blue-500 text-3xl'
                href={item.linkedin}
              >
                <FaLinkedin />
              </Link>
              <Link
                className=' text-blue-500 text-3xl'
                href={item.resume}
              >
                <IoIosDocument />
              </Link>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <div
      className={cn(
        'bg-white bg-gradient-to-b from-blue-300/70 via-blue-200/70 to-blue-100/20 rounded-xl h-full overflow-hidden dark:border-white/[0.2] group-hover:border-blue-300 group-hover:border-2 border-blue-300/40 border-1 relative z-20',
        className
      )}
    >
      <div className='relative z-50'>
        <div className='p-4 flex flex-col justify-center items-center'>{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <h4 className={cn('text-zinc-100 font-bold tracking-wide mt-4', className)}>{children}</h4>;
};
export const CardDescription = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <p className={cn('mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm', className)}>{children}</p>;
};
