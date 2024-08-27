
import Image from "next/image";
import Footer from "@/components/Footer";
import Contactinfo from "@/components/Contactinfo";
import Pastrecruiters from "@/components/Pastrecruiters";
import OurTeam from "@/components/OurTeam";
import Alumni from "@/components/Alumni";
export default function Home() {
  return (
    <main >
      <Pastrecruiters/>
      <Alumni/>
      <OurTeam/>
      <Contactinfo/>
      <Footer/>
    </main>
  );
import Hero from "@/components/Hero";
import PlacementStatistics from "@/components/PlacementStatistics";


export default function Home() {
  return <main>
    <Hero/>
    <PlacementStatistics/>
    </main>;
}
