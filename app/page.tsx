import Experience from '@/components/section/Experience';
import HeroSection from '@/components/section/HeroSection';
import MySkills from '@/components/section/Skills';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MySkills key={'skills'} />
      <Experience />
    </>
  );
}
