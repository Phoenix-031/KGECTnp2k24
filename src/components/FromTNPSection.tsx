import Image from 'next/image';
import { faculties } from '@/data/fromTNP';

const FromTnPSection = () => {
  return (
    <section className='py-12 bg-white flex flex-col justify-center items-center' id='tnp'>
      <div className='mx-5 px-4'>
        <h2 className='text-3xl font-bold text-center mb-8'>From TnP</h2>
        <div className='w-[90vw] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {faculties.map((faculty, index) => (
            <div
              key={index}
              className='w-full justify-center p-6 bg-custom-gray2 shadow-md flex items-center lg:items-start flex-col sm:items-center sm:mb-[50px] md:flex-col md:items-center md:mb-[50px]'
            >
              <Image
                src={faculty.image}
                alt={faculty.name}
                width={100}
                height={100}
                className='mr-auto ml-auto w-24 h-24 mb-4'
              />
              <div className='flex flex-col justify-center items-center'>
                <h3 className='text-xl font-semibold'>{faculty.name}</h3>
                <p className='text-gray-600'>{faculty.designation}</p>
                <p className='text-gray-700 mt-2'>{faculty.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FromTnPSection;
