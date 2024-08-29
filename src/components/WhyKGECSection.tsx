import { whyKgecData } from "@/data/sectionData";
import Image from "next/image";

const WhyKGECSection = () => {
  return (
    <section className='py-12 bg-custom-yellow max-w-screen'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center mb-8'>{whyKgecData.title}</h2>
        <p className='text-center mb-8'>{whyKgecData.description}</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {whyKgecData.logos.map((logo, index) => (
            <div
              key={index}
              className='text-center'
            >
              <Image
                src={logo.image}
                alt={logo.title}
                width={100}
                height={100}
                className='w-24 h-24 mx-auto mb-4'
              />
              <h3 className='text-xl font-semibold'>{logo.title}</h3>
              <p className='mt-2'>{logo.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyKGECSection;
