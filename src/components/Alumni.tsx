import Image from 'next/image';
import React from 'react';
import { a } from '../assets/images/alumni';
import { studentPhoto } from '@/assets/images';
import { FaLinkedinIn } from 'react-icons/fa';
const Alumni = () => {
  return (
    <div className='flex flex-col justify-center items-center min-s-screen'>
      <p className='text-4xl p-10 non-italic font-bold '>Notable Alumni</p>
      <p className='px-8 text-center mb-16 font-Montserrat text-2xl w-[80vw]'>
        The alumni of Kalyani Government Engineering College have made their mark on various government, academia and
        corporate fronts. Meet some of our alumni who we are proud of producing.
      </p>
      <div className='mb-10 w-full flex flex-col justify-center items-center'>
        <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 row-auto'>
          {a.map((item, index) => {
            return (
              <div
                className='w-fit relative flex flex-col items-center justify-center'
                key={index}
              >
                <a
                  href={item.linkedin}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <div className='relative'>
                    <Image
                      className='bg-blue-300 rounded-full'
                      src={studentPhoto}
                      height={155}
                      width={155}
                      alt={item.name}
                    />
                    <div className='absolute inset-0 flex items-center justify-center bg-blue-500 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity rounded-full'>
                    <FaLinkedinIn className='w-[40px] h-[40px] text-blue-600'/>
                    </div>
                  </div>
                </a>
                <p className='text-center text-balance font-medium'>{item.name}</p>
                <p className='italic text-center text-balance font-light'>{item.company}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Alumni;
