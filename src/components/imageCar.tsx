/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import Image, { StaticImageData } from 'next/image';

type ImageCarouselProps = {
  images: StaticImageData[];
  interval?: number;
};

const ImageCar: React.FC<ImageCarouselProps> = ({ images, interval = 2000 }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const slideInterval = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoplay = useCallback(() => {
    stopAutoplay();
    slideInterval.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);
  }, [interval, images.length]);

  const stopAutoplay = useCallback(() => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  }, []);

  useEffect(() => {
    startAutoplay();
    return () => {
      stopAutoplay();
    };
  }, [startAutoplay, stopAutoplay]);

  return (
    <div>
      <div className='relative w-full overflow-hidden blur-sm opacity-85'>
        <div
          className='flex transition-transform duration-500'
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <div
              className='flex-shrink-0 w-full h-[70vh] relative'
              key={index}
            >
              <Image
                src={src}
                alt={`Slide ${index}`}
                layout='fill'
                objectFit='cover'
              />
            </div>
          ))}
        </div>
      </div>
      <div className='mr-auto ml-auto gradient-hero absolute -bottom-4 h-[130px] w-screen   ' />
    </div>
  );
};

export default ImageCar;
