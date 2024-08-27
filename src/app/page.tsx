
import FromTnPSection from '../components/FromTnPSection';
import WhyKGECSection from '../components/WhyKGECSection';
import TestimonialSection from '../components/TestimonialSection';
import Hero from "@/components/Hero";
import PlacementStatistics from "@/components/PlacementStatistics";


export default function Home() {
  return <main>
    <Hero/>
    <PlacementStatistics/>
     <WhyKGECSection />
      <FromTnPSection />
      <TestimonialSection />
    </main>;
}
