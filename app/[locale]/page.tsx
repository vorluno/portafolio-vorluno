import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Universe from '@/components/sections/Universe';
import Projects from '@/components/sections/Projects';
import Certifications from '@/components/sections/Certifications';
import Skills from '@/components/sections/Skills';
import Contact from '@/components/sections/Contact';
import SectionDivider from '@/components/ui/SectionDivider';

export default function Home() {
  return (
    <>
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider flip />
      <Projects />
      <SectionDivider />
      <Certifications />
      <SectionDivider flip />
      <Universe />
      <SectionDivider />
      <Skills />
      <SectionDivider flip />
      <Contact />
    </>
  );
}
