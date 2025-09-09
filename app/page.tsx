import NotificationGroup from '@/components/notification/NotificationGroup';
import CategorySelector from '@/components/section/CategorySelector';
import Certificates from '@/components/section/Certificates';
import Contacto from '@/components/section/Contacto';
import Experience from '@/components/section/Experience';
import HeroSection from '@/components/section/HeroSection';
import MySkills from '@/components/section/Skills';

export default function HomePage() {
  return (
    <main className='mx-auto w-[95%]'>
      <NotificationGroup />
      <HeroSection />
      <MySkills key={'skills'} />
      <CategorySelector />
      <Experience />
      <Certificates />
      <Contacto />
    </main>
  );
}
