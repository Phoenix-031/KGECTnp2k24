import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import 'tailwindcss/tailwind.css';

function Footer() {
  return (
    <div className='text-white bg-[#0C84AA] w-full px-10 pt-10 pb-4' id='contact-us'>
      <div className='flex flex-row justify-start items-center'>
        <Link href={'/'}>
          <Image
            alt='Navbar Logo'
            src={'/kgec.svg'}
            width={70}
            height={70}
          />
        </Link>
        <div className='ml-7 h-10 border-l border-white'></div>
        <p className='ml-4'>Training and Placement Cell, KGEC</p>
      </div>
      <div className='mt-10'>
        <p>Kalyani Government Engineering College, Kalyani, Nadia, West Bengal, India. </p>
        <p>
          {' '}
          <a href='mailto:tnp_kgec@kgec.edu.in'>tnp_kgec@kgec.edu.in</a>
        </p>
        <p>
          {' '}
          <a href='tel:08016895669'>080168 95669</a>{' '}
        </p>
      </div>
      <hr className='bg-white mt-5' />
      <div className='flex flex-col items-center justify-center mt-5'>
        <a
          className='flex flex-row gap-2'
          href='https://www.linkedin.com/company/tnpkgec/posts/?feedView=all'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image
            alt='LinkedIn Profile'
            src='/linkedin.svg'
            width={20}
            height={20}
          />
          <Image
            alt='Facebook Profile'
            src='/facebook.svg'
            width={30}
            height={30}
          />
        </a>
        <p>&copy; Tnp cell, Kalyani Government Engineering College</p>
      </div>
    </div>
  );
}

export default Footer;
