'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Faculty } from '../components/types';

const FromTnPSection = () => {
  const [faculties, setFaculties] = useState<Faculty[]>([]);

  useEffect(() => {
    fetch('/fromTnp.json')
      .then((response) => response.json())
      .then((data) => setFaculties(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <section className="py-12 bg-white">
      <div className="mx-5 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">From TnP</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {faculties.map((faculty, index) => (
            <div
              key={index}
              className="p-6 bg-custom-gray2 shadow-md flex flex-col items-center lg:flex-row lg:items-start sm:flex-col sm:items-center sm:mb-[50px] md:flex-col md:items-center md:mb-[50px]"
            >
              <Image
                src={faculty.image}
                alt={faculty.name}
                width={100}
                height={100}
                className="w-24 h-24 mb-4 mr-[10px] sm:mb-4 md:mb-6 lg:mb-0"
              />
              <div className="text-center sm:text-left md:text-center lg:text-left md:mt-4 lg:mt-0">
                <h3 className="text-xl font-semibold">{faculty.name}</h3>
                <p className="text-gray-600">{faculty.designation}</p>
                <p className="text-gray-700 mt-2">{faculty.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FromTnPSection;
