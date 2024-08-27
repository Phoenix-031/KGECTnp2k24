import Alumni from '@/components/Alumni';
// import Contactinfo from '@/components/Contactinfo';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import OurTeam from '@/components/OurTeam';
import Pastrecruiters from '@/components/Pastrecruiters';
import PlacementStatistics from '@/components/PlacementStatistics';

export default function Home() {
  return (
    <main>
      <Hero />
      <PlacementStatistics />
      <Pastrecruiters/>
      <OurTeam/>
      <Alumni/>
      <Footer/>
    </main>
  );
}
