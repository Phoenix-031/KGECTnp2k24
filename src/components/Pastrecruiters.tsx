import { company } from '@/assets/images/company';
import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';

const Pastrecruiters = () => {
  return (
    <div
      className='flex flex-col justify-center items-center min-s-screen'
      id='past-recruiters'
    >
      <p className='text-4xl p-4 mb-10 non-italic font-bold'>Past Recruiters</p>
      <div className='relative overflow-hidden w-[100%] flex flex-row justify-center items-center'>
        <div className='absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-slate-400/50 via-slate-300/20 to-white  blur-lg opacity-100'></div>
        <div className='absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-400/50 via-slate-300/20 to-white blur-lg opacity-100'></div>
        <div className='w-[90%]'>
          <Marquee
            gradient={false}
            speed={60}
            pauseOnHover={false}
            direction='right'
          >
            <div className='flex flex-row gap-4 justify-center items-center'>
              {company.map((item, idx) => (
                <div
                  key={idx}
                  className='w-fit h-fit max-w-lg'
                >
                  <Image
                    className='filter grayscale hover:filter-none sm:w-[15vh] w-[10vh]'
                    alt={item.name}
                    src={item.logo}
                  />
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>

      <div className='relative overflow-hidden w-[100%] flex flex-row justify-center items-center'>
        <div className='absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-slate-400/50 via-slate-300/20 to-white  blur-lg opacity-100'></div>
        <div className='absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-400/50 via-slate-300/20 to-white blur-lg opacity-100'></div>
        <div className='w-[90%]'>
          <Marquee
            gradient={false}
            speed={60}
            pauseOnHover={false}
            direction='left'
            loop={0}
          >
            <div className='flex flex-row gap-10 w-full justify-center items-center'>
              {company.map((item, idx) => (
                <div
                  key={idx}
                  className='w-fit h-fit max-w-lg flex-shrink-0'
                >
                  <Image
                    className='filter grayscale hover:filter-none sm:w-[15vh] w-[10vh]'
                    alt={item.name}
                    src={item.logo}
                  />
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Pastrecruiters;
