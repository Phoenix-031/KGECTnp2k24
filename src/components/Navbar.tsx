'use client';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const navbarRef = useRef<HTMLDivElement>(null);

  function getMenuClasses() {
    let menuClasses = [];

    if (isOpen) {
      menuClasses = [
        'flex',
        'absolute',
        'top-[60px]',
        'bg-custom-blue',
        'w-full',
        'left-1/2',
        'p-4',
        'gap-10',
        'flex-col',
        'z-10',
      ];
    } else {
      menuClasses.push('hidden', 'md:flex');
    }

    return menuClasses.join(' ');
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset;

      if (currentScrollTop > lastScrollTop) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      ref={navbarRef}
      className={`z-10 bg-custom-blue text-white font-semibold text-sm py-4 sm:p-6 md:flex md:justify-between sticky top-0 md:items-center transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className='container flex justify-between items-center'>
        <a
          href='#'
          className='text-2xl font-bold ml-[-14px]'
        >
          <Image
            alt='Navbar Logo'
            src={'/kgec.svg'}
            width={40}
            height={40}
          />
        </a>
        <div className={`${getMenuClasses()} pl-4`}>
          <Link
            href='/'
            className='mx-3 hover:text-gray-300'
          >
            HOME
          </Link>
          <Link
            onClick={() => scrollToSection('')}
            href='/'
            className='mx-3 hover:text-gray-300'
          >
            WHY RECRUIT US
          </Link>
          <Link
            onClick={() => scrollToSection('placement-statistics')}
            href='/'
            className='mx-3 hover:text-gray-300'
          >
            FROM T&P CELL
          </Link>
          <Link
            onClick={() => scrollToSection('placement-statistics')}
            href='/'
            className='mx-3 hover:text-gray-300'
          >
            PLACEMENT STATISTICS
          </Link>
          <Link
            onClick={() => scrollToSection('past-recruiters')}
            href='/'
            className='mx-3 hover:text-gray-300'
          >
            PAST RECRUITERS
          </Link>
          <Link
            onClick={() => scrollToSection('contact-us')}
            href='/'
            className='mx-3 hover:text-gray-300'
          >
            CONTACT US
          </Link>
          <Link
            
            href='/student-details'
            className='mx-3 hover:text-gray-300'
          >
            STUDENT DETAILS
          </Link>
          <Link
            
            href='/signup'
            className='mx-3 hover:text-gray-300'
          >
            STUDENT LOGIN
          </Link>
        </div>
        <div className='md:hidden flex items-center mr-[-14px]'>
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className='hamburger-menu'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              style={{ cursor: 'pointer' }}
            >
              <g id='Icon/Outline/menu'>
                {isOpen ? (
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289Z'
                    fill='#ffffff'
                  />
                ) : (
                  <path
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
