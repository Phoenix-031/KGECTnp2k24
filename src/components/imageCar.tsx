'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import Image, { StaticImageData } from 'next/image';

type ImageCarouselProps = {
  images: StaticImageData[];
  interval?: number;
};

const ImageCar: React.FC<ImageCarouselProps> = ({ images, interval = 2000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoplay = useCallback(() => {
    stopAutoplay();
    slideInterval.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);
  }, [interval, images.length]);

  useEffect(() => {
    startAutoplay();
    return () => {
      stopAutoplay();
    };
  }, [currentIndex, startAutoplay]);

  const stopAutoplay = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };

  return (
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
  );
};

export default ImageCar;
