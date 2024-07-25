'use client';

// import { studentPhoto } from '@/assets/images';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    photo: string,
    title: string;
    skills: string;
    domain: string;
    experience: string;
    year: number;
    department: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn('mr-auto ml-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 w-full rounded-xl', className)}>
      {items.map((item, idx) => (
        <Link
          href='/'
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
              <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                className='rounded-full bg-blue-300/30 md:h-[21vh] md:w-[21vh] h-[17vh] w-[17vh]'
                alt={item.title}
              />
            </div>
            <CardTitle className='sm:text-2xl text-lg font-semibold text-black'>{item.title}</CardTitle>
            <div className='sm:text-md text-sm'>
              {item.year}|{item.department}
            </div>
            <div className='sm:text-md text-sm'>Skill: {item.skills}</div>
            <div className='sm:text-md text-sm'>Domain: {item.domain}</div>
            <div className='sm:text-md text-sm'>Experience: {item.experience}</div>
          </Card>
        </Link>
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
