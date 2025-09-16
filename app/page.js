import Carousel from '@/Components/Carousel';
import Stats from '@/Components/Stats';
import Hero from '@/Components/Hero'
import ProjectSection from '@/Components/ProjectSection';
import ProjectGallery from '@/Components/ProjectGallery';
import PartnerClient from '@/Components/PartnerClient';
import Ready from '@/Components/Ready';


export default function Home() {
  return(
     <main className="min-h-screen">
      <Carousel />
      <Stats />
      <Hero />
      <ProjectSection />
      <ProjectGallery />
      <PartnerClient />
      <Ready />
      
     </main>
  );
};


