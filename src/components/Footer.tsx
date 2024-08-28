import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import 'tailwindcss/tailwind.css';

function Footer() {
  return (
    <footer className='text-white-100 bg-[#0C84AA] w-full mb-0'>
      <div className=' w-full px-8 mr-0 text-white flex flex-wrap p-5 flex-col items-between justify-between '>
        {/* <div className='flex justify-between w-full'>
          
        </div> */}
        <div className='grid grid-cols-1 sm:grid-cols-3 mt-10 mb-8'>
          <div className=' font-light px-8 font-Inter text-lg rounded-xl '>
            <Link
              href={'/'}
              className='flex title-font font-extrabold items-center pb-4 text-gray-100'
            >
              <Image
                alt='Navbar Logo'
                src={'/kgec.svg'}
                width={60}
                height={60}
              />
            </Link>
            <p className='mb-4'>Training and Placement Cell, KGEC</p>
            <p className='mb-4'>Kalyani Government Engineering College, Kalyani, Nadia, West Bengal, India. </p>
            <p>
              {' '}
              <a href='mailto:tnp_kgec@kgec.edu.in'>tnp_kgec@kgec.edu.in</a>
            </p>
            <p>
              {' '}
              <a href='tel:08016895669'>080168 95669</a>{' '}
            </p>
          </div>
          <div></div>
          <div className='flex flex-col gap-4 items-start w-full'>
            <p className='flex items-center text-sm text-gray-100 pl-4 sm:border-l-2 sm:border-gray-200 mt-4 '>
              © TnP cell, Kalyani Government Engineering College
            </p>
            {/* <p className='text-lg '>Socials</p> */}
            <a
              className='flex gap-2'
              href='https://www.linkedin.com/company/tnpkgec/posts/?feedView=all'
              target='_blank'
              rel='noopener noreferrer'
            >
              LinkedIn
              <Image
                className=''
                alt='LinkedIn Profile'
                src='/linkedin.svg'
                width={20}
                height={20}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
