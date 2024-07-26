import React from 'react'
import 'tailwindcss/tailwind.css';
const Contactinfo = () => {
  return (
    <div className='flex flex-col justify-center items-center min-s-screen'>
      <p className='font-bold text-4xl p-4'>Contact Info</p>
      <div className="bg-[#D9D9D9] font-light p-20 mx-64 mb-28 mt-10 font-Inter text-3xl rounded-xl "> 
        <p className='mb-8'>Training and Placement Cell, KGEC</p>
        <p className='mb-16'>Kalyani Government Engineering College, Kalyani, Nadia, West Bengal, India. </p> 
        <p>  <a href="mailto:tnp_kgec@kgec.edu.in">tnp_kgec@kgec.edu.in</a></p>
        <p>  <a href="tel:08016895669">080168 95669</a> </p>

    </div>
    </div>
  )
}

export default Contactinfo
