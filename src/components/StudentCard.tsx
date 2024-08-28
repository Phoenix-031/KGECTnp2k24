import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';
import { IoIosDocument } from 'react-icons/io';
import { studentPhoto } from '@/assets/images';
import Image from 'next/image';

interface Student {
  title: string;
  year: number;
  department: string;
  skills: string;
  domain: string;
  experience: string;
  linkedin: string;
  resume: string;
}
const StudentCard = ({ student }: { student: Student }) => {
  return (
    <div className='rounded-xl px-2 py-5 flex flex-col justify-center items-center bg-gradient-to-b from-blue-300 to-white'>
      <div className='w-full flex flex-row justify-center students-center text-center'>
        <Image
          src={studentPhoto}
          className='rounded-full sm:w-[21vh] sm:h-[21vh] w-[19vh] h-[19vh]'
          alt={student.title}
        />
      </div>
      <span className='sm:text-2xl text-lg font-semibold text-black'>{student.title}</span>
      <div className='sm:text-md text-sm'>
        year-{student.year}|{student.department}
      </div>
      <div className='flex flex-col'>
        <div className='sm:text-md text-sm font-sans'>
          <span className='font-bold'>Skill:</span> {student.skills}
        </div>
        <div className='sm:text-md text-sm font-sans'>
          <span className='font-bold'>Domain:</span> {student.domain}
        </div>
        <div className='sm:text-md text-sm font-sans'>
          <span className='font-bold'>Experience:</span> {student.experience}
        </div>
      </div>
      <div className='mt-5 flex flex-row justify-center students-center sm:gap-6 gap-4 w-full'>
        <Link
          className=' text-blue-500 text-3xl'
          href={student.linkedin}
        >
          <FaLinkedin />
        </Link>
        <Link
          className=' text-blue-500 text-3xl'
          href={student.resume}
        >
          <IoIosDocument />
        </Link>
      </div>
    </div>
  );
};
export default StudentCard;
