import Image from "next/image";
import React from 'react'
import {a} from '../assets/images/alumni'
const Alumni = () => {
  return (
    <div className='flex flex-col justify-center items-center min-s-screen'>
    <p className='text-4xl p-10 non-italic font-bold '>Notable Alumni</p>
    <p className='px-8 text-center mb-16 font-Montserrat text-2xl'>The alumni of Kalyani Government Engineering College have made their mark on various government, academia and corporate fronts. Meet some of our alumni who we are proud of producing.</p>
      <div className='p-10'>
      <div className="w-full flex flex-row flex-wrap justify-center items-center h-fit gap-10">
  {a.map((item, index) => {
    return (
      <div className="relative group flex flex-col items-center" key={index}>
        <a href={item.linkedin} target="_blank" rel="noopener noreferrer" className="relative">
          <Image
            src={item.pic}
            alt={item.name}
            className="transition-transform transform group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity rounded-full">
          <Image src="./linkedin.svg" alt="LinkedIn" width={40} height={40} className="text-white"/>
          </div>
        </a>
        <p className="text-center text-balance  font-medium w-60">{item.name}</p>
        <p className="italic text-center text-balance  font-light w-60">{item.company}</p>
        
      </div>
    );
  })}
</div>

      </div>
      
  </div>
  )
}

export default Alumni
