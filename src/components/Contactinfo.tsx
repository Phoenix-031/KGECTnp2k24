import React from 'react';
import 'tailwindcss/tailwind.css';
const Contactinfo = () => {
  return (
    <div
      className='flex flex-col justify-center items-center min-s-screen'
      id='contact-us'
    >
      <div className='flex flex-col justify-center items-center min-s-screen'>
        <p className='font-bold text-4xl p-4 text-red-900'>Contact Info</p>
        <div className='bg-[#D9D9D9] font-light p-8 mx-64 mb-8 mt-10 font-Inter text-xl rounded-xl '>
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
      </div>
    </div>
  );
};

export default Contactinfo;
