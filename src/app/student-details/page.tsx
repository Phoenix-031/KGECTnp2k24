import StudentCard from '@/components/StudentCard';
import { filterText, yearRange } from '@/data/student-detail-page';
import { students } from '@/data/students';
import React from 'react';
import { FaRegArrowAltCircleDown } from 'react-icons/fa';

const page = () => {
  return (
    <div className='mt-10 mr-auto ml-auto flex flex-col justify-center items-center gap-8 w-11/12'>
      <form className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 sm:gap-6 gap-2 w-full'>
        <div className='flex flex-col'>
          <label
            className='sm:text-lg text-md'
            htmlFor='name'
          >
            {filterText[0].text}
          </label>
          <input
            placeholder={filterText[0].placholder}
            className='p-1 border-2 rounded-md border-blue-400'
            type='text'
            name='name'
            id='name'
          />
        </div>
        <div className='flex flex-col '>
          <label
            className='sm:text-lg text-md'
            htmlFor='department'
          >
            {filterText[1].text}
          </label>
          <input
            placeholder={filterText[1].placholder}
            className='p-1 border-2 rounded-md border-blue-400'
            type='text'
            name='department'
            id='department'
          />
        </div>
        <div className='flex flex-col '>
          <label
            className='sm:text-lg text-md'
            htmlFor='domain'
          >
            {filterText[2].text}
          </label>
          <input
            placeholder={filterText[2].placholder}
            className='p-1 border-2 rounded-md border-blue-400'
            type='text'
            name='domain'
            id='domain'
          />
        </div>
        <div className='flex flex-col '>
          <label
            className='sm:text-lg text-md'
            htmlFor='skill'
          >
            {filterText[3].text}
          </label>
          <input
            placeholder={filterText[3].placholder}
            className='p-1 border-2 rounded-md border-blue-400'
            type='text'
            name='skill'
            id='skill'
          />
        </div>
      </form>
      <div className='flex flex-col justify-center items-center w-full gap-6'>
        {yearRange.map((range, idx) => (
          <div
            key={idx}
            className='flex flex-row justify-between items-center bg-light_yellow w-full rounded-lg p-4'
          >
            <span className='text-md lg:text-xl '>{range.range}</span>
            <FaRegArrowAltCircleDown className='h-[30px] w-[30px]' />
          </div>
        ))}
      </div>
      <div className='gap-2 w-full grid grid-cols-5 row-auto'>
        {students.map((student, index) => (
          <StudentCard
            key={index}
            student={student}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
