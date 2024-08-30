import Alumni from '@/components/Alumni';
import Footer from '@/components/Footer';
import FromTnPSection from '@/components/FromTNPSection';
import Hero from '@/components/Hero';
import OurTeam from '@/components/OurTeam';
import Pastrecruiters from '@/components/Pastrecruiters';
import TabSwap from '@/components/TabSwap';
import WhyKGECSection from '@/components/WhyKGECSection';

function Home() {
  return (
    <main className='bg-[#ECDFCC] w-full overflow-x-hidden opacity-0.2'>
      <Hero />
      <WhyKGECSection />
      <FromTnPSection />
      <TabSwap />
      <Pastrecruiters />
      <OurTeam />
      <Alumni />
      <Footer />
    </main>
  );
}

export default Home;
