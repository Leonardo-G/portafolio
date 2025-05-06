import Title from '../UI/Title';
import '../../app/embla.css';
import EmblaCarousel from './Embla';

const jobExperiencie = [
  {
    jobName: 'Software Developer',
    since: 'Septiembre 2023',
    to: 'Abril 2025',
    company: 'Bigger Tech',
    mode: 'Remoto',
    technology: ['React.js', 'Nest.js', 'HTML', 'CSS', 'Tailwind'],
  },
  {
    jobName: 'Desarrollador Backend',
    since: 'Marzo 2023',
    to: 'Agosto 2023',
    company: 'Devocamp',
    mode: 'Remoto - Pasantía',
    technology: ['Typescript', 'Nest.js', 'Node.js', 'Express.js'],
  },
  {
    jobName: 'Desarrollador Frontend',
    since: 'Octubre 2022',
    to: 'Febrero 2023',
    company: 'Freelance',
    mode: 'Remoto',
    technology: ['React.js', 'HTML', 'CSS', 'Tailwind'],
  },
];

export default function Experience() {
  return (
    <section className='mx-auto my-30 w-full max-w-[1280px]'>
      <Title title='Experiencia' />
      <div className='mt-10 space-y-10'>
        {jobExperiencie.map((experiencie) => (
          <div
            key={experiencie.jobName}
            className='text-grey-primary border-grey-badge relative flex w-full items-center justify-between rounded-md py-6 pr-10 pl-15 shadow-sm'
          >
            <div className='absolute top-0 left-0 h-full w-[6px] rounded-l-md bg-[#F59738BD]'></div>
            <div className='w-[40%]'>
              <p className='text-xl tracking-wide text-gray-500'>
                {experiencie.jobName}
              </p>
              <p className='mt-2 text-sm text-gray-500'>
                {experiencie.since} - {experiencie.to}
              </p>
            </div>
            <div className='w-[40%]'>
              <p className='text-xl tracking-wide text-gray-500'>
                {experiencie.company}
              </p>
              <p className='mt-2 text-sm text-gray-500'>{experiencie.mode}</p>
            </div>
            <div className='w-[20%]'>
              <EmblaCarousel slides={experiencie.technology} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
