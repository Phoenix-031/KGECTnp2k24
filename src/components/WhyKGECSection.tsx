import { useEffect, useState } from 'react';
import Image from 'next/image';
import 'tailwindcss/tailwind.css';

interface LogoData {
  image: string;
  title: string;
  description: string;
}

interface SectionData {
  title: string;
  description: string;
  logos: LogoData[];
}

const WhyKGECSection = () => {
  const [sectionData, setSectionData] = useState<SectionData | null>(null);

  useEffect(() => {
    fetch('/sectionData.json') //sectionData.json is the name of the json file here
      .then(response => response.json())
      .then(data => setSectionData(data))
      .catch(error => console.error('Error fetching section data:', error));
  }, []);

  if (!sectionData) return null;

  return (
    <section className="py-12 bg-custom-yellow max-w-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">{sectionData.title}</h2>
        <p className="text-center mb-8">{sectionData.description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sectionData.logos.map((logo, index) => (
            <div key={index} className="text-center">
              <Image
                src={logo.image}
                alt={logo.title}
                width={100}  // Replace with the actual width
                height={100}
                className="w-24 h-24 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">{logo.title}</h3>
              <p className="mt-2">{logo.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyKGECSection;
