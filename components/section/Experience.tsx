import Title from '../UI/Title';
import '../../app/embla.css';
import EmblaCarousel from './Embla';

export default function Experience() {
  return (
    <section className='mx-auto my-30 w-full max-w-[1280px]'>
      <Title title='Experiencia' />
      <div className='mt-10'>
        <div className='text-grey-primary font-open-sans relative flex w-full items-center justify-between rounded-md py-6 pr-10 pl-15 tracking-[0.3px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'>
          <div className='absolute top-0 left-0 h-full w-[6px] bg-[#F59738BD]'></div>
          <div>
            <p className='text-xl'>Software Developer</p>
            <p className='mt-2 text-sm'>Septiembre 2023 - Presente</p>
          </div>
          <div>
            <p className='text-xl'>Bigger Tech</p>
            <p className='mt-2 text-sm'>Remoto</p>
          </div>
          <div className='w-[20%]'>
            <EmblaCarousel
              slides={['React.js', 'Nest.js', 'HTML', 'CSS', 'Tailwind']}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
