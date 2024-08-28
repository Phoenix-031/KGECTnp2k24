'use client';

import Image from 'next/image';
import React from 'react';
import 'tailwindcss/tailwind.css';
import { st } from '@/assets/images/students';
import { ts } from '@/assets/images/teacher';
const OurTeam = () => {
  return (
    <div className='flex flex-col justify-center items-center min-s-screen '>
      <p className='text-4xl p-10 non-italic font-bold'>Our Team</p>
      <div className='flex flex-col justify-center items-center'>
        <p className='px-8 text-center mb-16 font-Montserrat text-2xl w-[80vw]'>
          Our Training and Placement Cell team is dedicated to guiding students in achieving their career goals. We
          organize training programs, placement drives, and industry interactions to bridge the gap between academic
          learning and professional opportunities.
        </p>
        <p className='font-light text-center text-3xl p-10 pt-0'>Associate Teacher Training and Placements</p>
        <div className=' w-full flex flex-row flex-wrap justify-center items-center h-fit gap-10'>
          {ts.map((item, index) => {
            return (
              <div
                key={index}
                className='relative group flex flex-col items-center overflow-visible'
              >
                <a
                  href={item.linkedin}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='relative'
                >
                  <div className='relative overflow-visible'>
                    <Image
                      width={40}
                      height={40}
                      src={item.image}
                      alt={item.name}
                      className='transform transition-transform duration-300 hover:scale-120 object-cover sm:w-48 sm:h-48 w-52 h-52 rounded-full'
                    />
                  </div>

                  <div className='absolute inset-0 flex items-center justify-center bg-blue-500 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity rounded-full'>
                    <Image
                      src='./linkedin.svg'
                      alt='LinkedIn'
                      width={40}
                      height={40}
                      className='text-white'
                    />
                  </div>
                </a>
                <p className='font-medium'>{item.name}</p>
                <p className='italic text-center text-balance font-light w-64'>{item.designation}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <p className='font-light text-center text-3xl p-10'>Student Placement Coordinators — Y&apos;25</p>
        <div className='w-full flex flex-row flex-wrap justify-center items-center h-fit gap-10'>
          {st.map((item, index) => {
            return (
              <div
                className='relative group flex flex-col items-center'
                key={index}
              >
                <a
                  href={item.linkedin}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='relative'
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    className='object-cover sm:w-48 sm:h-48 w-52 h-52 rounded-full'
                  />
                  <div className='absolute inset-0 flex items-center justify-center bg-blue-500 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity rounded-full'>
                    <Image
                      src='./linkedin.svg'
                      alt='LinkedIn'
                      width={40}
                      height={40}
                      className='text-white'
                    />
                  </div>
                </a>
                <p className='font-medium'>{item.name}</p>
                <p className='italic text-center text-balance  font-light w-64'>{item.designation}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
