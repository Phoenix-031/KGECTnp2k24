import Image from 'next/image';
import React from 'react';
import 'tailwindcss/tailwind.css';
import { placementCoordinators } from '@/data/placement-coordinators';
import { teachersData } from '@/data/teachers';

import { FaLinkedin } from 'react-icons/fa';
const OurTeam = () => {
  return (
    <div className='flex flex-col justify-center items-center min-s-screen '>
      <p className='text-4xl p-10 non-italic font-bold'>Our Team</p>
      <div className='flex flex-col justify-center items-center'>
        <p className=' text-center mb-16 font-Montserrat w-[90%] text-lg'>
          Our Training and Placement Cell team is dedicated to guiding students in achieving their career goals. We
          organize training programs, placement drives, and industry interactions to bridge the gap between academic
          learning and professional opportunities.
        </p>
        <p className='font-medium text-center text-3xl p-10 pt-0'>Associate Teacher Training and Placements</p>
        <div className='w-full flex flex-row flex-wrap justify-center items-center h-fit gap-10'>
          {teachersData.map((item, index) => {
            return (
              <div
                key={index}
                className='relative group flex flex-col h-[18rem] items-center justify-between overflow-visible gap-4'
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
                    <FaLinkedin className='w-[40px] h-[40px] text-blue-600' />
                  </div>
                </a>
                <div className='flex justify-start items-center flex-col h-full'>
                  <p className='font-medium'>{item.name}</p>
                  <p className='italic text-center text-balance font-light w-64'>{item.designation}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <p className='font-medium text-center text-3xl p-10'>Student Placement Coordinators — Y&apos;25</p>
        <div className='w-full flex flex-row flex-wrap justify-center items-center h-fit gap-10'>
          {placementCoordinators.map((item, index) => {
            return (
              <div
                className='relative group flex flex-col items-center h-[20rem] gap-2'
                key={index}
              >
                <a
                  href={item.linkedin}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='relative overflow-hidden'
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    className='transform transition-transform duration-300 hover:scale-120 object-cover sm:w-48 sm:h-48 w-52 h-52 rounded-full'
                  />
                  <div className='absolute sm:w-48 sm:h-48 w-52 h-52 inset-0 flex items-center justify-center bg-blue-500 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity rounded-full'>
                    <FaLinkedin className='w-[40px] h-[40px] text-blue-600' />
                  </div>
                </a>
                <div className='flex flex-col justify-start items-center'>
                  <p className='font-medium'>{item.name}</p>
                  <p className='italic text-center text-balance  font-light w-64'>{item.designation}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
