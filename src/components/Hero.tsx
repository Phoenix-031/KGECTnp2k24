import Image from 'next/image';
import { bgImg, Image1, Image2 } from '@/assets';
import data from '../data/data.json';

const Hero = () => {
  return (
    <div className='relative'>
      <div className='mt-[-5px]'>
        <div className='flex flex-row items-center justify-center sm:flex-row sm:items-center sm:justify-center pt-20'>
          <Image
            className='m-10'
            src={Image1}
            alt='TNP LOGO'
            width={127}
            height={127}
          />
          <Image
            className='m-10'
            src={Image2}
            alt='KGEC LOGO'
            width={106}
            height={103}
          />
        </div>
        <div className='flex flex-col items-center justify-center mt-16'>
          <h2 className='font-bold mb-0 text-sm lg:text-xl'>TRAINING AND PLACEMENT CELL</h2>
          <h2 className='font-bold mb-0 text-sm lg:text-xl'>KALYANI GOVERNMENT ENGINEERING COLLEGE</h2>
        </div>
        <div className='flex items-center justify-center pt-8'>
          <p className='text-center mx-4'>{data.text}</p>
        </div>
        <div className='flex items-center justify-center mt-16'>
          <button className='w-[230px] h-[50px] bg-custom-blue text-center text-white font-semibold rounded-lg p-2 mb-8 -z-0'>
            DOWNLOAD BROCHURE
          </button>
        </div>
      </div>
      <Image
        src={bgImg}
        alt='background-image'
        fill={true}
        className='object-cover z-[-10]' /*width={1000} height={700}*/
      />
    </div>
  );
};

export default Hero;
