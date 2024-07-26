"use client";

import type { NextPage } from 'next';
import WhyKGECSection from '../components/WhyKGECSection';
import TestimonialSection from '../components/TestimonialSection';
import FromTnPSection from '../components/FromTnPSection';

const Home: NextPage = () => {
  return (
    <div>
      <main>
        <WhyKGECSection />
        <FromTnPSection />
        <TestimonialSection />
      </main>
    </div>
  );
};

export default Home;
