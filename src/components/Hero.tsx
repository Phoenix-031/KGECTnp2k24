import ImageCar from './imageCar';
import Image from 'next/image';
import { Image1, Image2 } from '@/assets';
import { heroSlides } from '@/assets/images/slides';

const Hero = () => {
  return (
    <div className='w-[100%] relative'>
      <ImageCar images={heroSlides} />
      <div className='top-[25vh] gap-4 flex flex-col justify-center items-center w-full absolute -translate-y-8'>
        <div className='w-20 sm:w-20 md:w-28 lg:w-40 gap-8 flex flex-row items-center justify-center '>
          <Image
            src={Image1}
            alt='TNP LOGO'
            width={125}
          />
          <Image
            src={Image2}
            alt='KGEC LOGO'
            width={125}
          />
        </div>
        <div className='flex flex-col justify-center items-center'>
          <div className='flex flex-col items-center justify-center'>
            <h2 className='font-bold  text-xs sm:text-sm md:text-md lg:text-xl text-center'>
              TRAINING AND PLACEMENT CELL
            </h2>
            <h2 className='font-bold text-xs sm:text-sm md:text-md lg:text-xl text-center pb-10'>
              KALYANI GOVERNMENT ENGINEERING COLLEGE
            </h2>
          </div>
          <div className='flex items-center justify-center'>
            {/* <p className='text-center mx-4 font-semibold'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nam voluptatem obcaecati suscipit ducimus
              et repellendus, laudantium odio a deserunt amet labore dolores perferendis impedit, quis distinctio sequi
              in libero.
            </p> */}
          </div>
        </div>
        <button className='w-[230px] text-sm sm:text-sm md:text-md h-[50px] bg-red-600 text-center text-white font-semibold rounded-lg p-2'>
          DOWNLOAD BROCHURE
        </button>
      </div>
    </div>
  );
};

export default Hero;
