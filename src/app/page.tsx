import Alumni from '@/components/Alumni';
import Footer from '@/components/Footer';
import FromTnPSection from '@/components/FromTNPSection';
import Hero from '@/components/Hero';
import OurTeam from '@/components/OurTeam';
import Pastrecruiters from '@/components/Pastrecruiters';
import PlacementStatistics from '@/components/PlacementStatistics';
import TestimonialSection from '@/components/TestimonialSection';
import WhyKGECSection from '@/components/WhyKGECSection';

function Home() {
  return (
    <main className='custom-scrollbar overflow-y-scroll h-screen  '>
      <div className='custom-scrollbar'>
        <Hero />
        <WhyKGECSection />
        <FromTnPSection />
        <TestimonialSection />
        <PlacementStatistics />
        <Pastrecruiters />
        <OurTeam />
        <Alumni />
        <Footer />
      </div>
    </main>
  );
}

export default Home;
