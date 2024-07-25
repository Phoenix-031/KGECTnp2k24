'use client';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { Image1 } from '../assets/index';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function getMenuClasses() {
    let menuClasses = [];

    if (isOpen) {
      menuClasses = [
        'flex',
        'absolute',
        'top-[60px]',
        'bg-custom-blue',
        'w-1/2',
        'left-0',
        'p-4',
        'gap-10',
        'flex-col',
      ];
    } else {
      menuClasses.push('hidden', 'md:flex');
    }

    return menuClasses.join(' ');
  }

  return (
    <nav className='bg-custom-blue text-white font-semibold text-sm py-4 sm:p-6 md:flex md:justify-between md:items-center'>
      <div className='container flex justify-between items-center'>
        <a
          href=''
          className='text-2xl font-bold ml-[-14px]'
        >
          <Image src={Image1} alt="Logo" width={40} height={40} />
        </a>
        <div className={`${getMenuClasses()} pl-4`}>
          <Link
            href='/'
            className='mx-3 hover:text-gray-300'
          >
             HOME
          </Link>
          <Link
            href='/'
            className='mx-3 hover:text-gray-300'
          >
            WHY RECRUIT US
          </Link>
          <Link
            href='/'
            className='mx-3 hover:text-gray-300'
          >
            FROM T&P CELL
          </Link>
          <Link
            href='/'
            className='mx-3 hover:text-gray-300'
          >
            PLACEMENT STATISTICS
          </Link>
          <Link
            href='/'
            className='mx-3 hover:text-gray-300'
          >
            PAST RECRUITERS
          </Link>
          <Link
            href='/'
            className='mx-3 hover:text-gray-300'
          >
            CONTACT US
          </Link>
          <Link
            href='/'
            className='mx-3 hover:text-gray-300'
          >
            STUDENT DETAILS
          </Link>
          <Link
            href='/'
            className='mx-3 hover:text-gray-300'
          >
            STUDENT LOGIN
          </Link>
        </div>
        <div className='md:hidden flex items-center mr-[-14px] z-10'>
          <button onClick={() => setIsOpen(!isOpen)} >
            <svg
              className='hamburger-menu'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              onClick={() => setIsOpen(!isOpen)} 
              style={{ cursor: 'pointer' }} 
            >
              <g id='Icon/Outline/menu'>
                {isOpen ? (
               
                  <path
                    id='Mask'
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289Z'
                    fill='#ffffff' 
                  />
                ) : (
                  
                  <path
                    id='Mask'
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M4 6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7H5C4.44772 7 4 6.55228 4 6ZM5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H5ZM5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19H19C19.5523 19 20 18.5523 20 18C20 17.4477 19.5523 17 19 17H5Z'
                    fill='#ffffff' 
                  />
                )}
              </g>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};
