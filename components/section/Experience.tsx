import Title from '../UI/Title';

export default function Experience() {
  return (
    <section className='mx-auto my-30 w-full max-w-[1280px]'>
      <Title title='Experiencia' />
      <div>
        <div className='text-grey-primary font-open-sans flex w-full justify-between px-10 py-4 tracking-[0.3px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'>
          <div>
            <p className='text-xl'>Software Developer</p>
            <p className='mt-2 text-sm'>Septiembre 2023 - Presente</p>
          </div>
          <div>
            <p className='text-xl'>Bigger Tech</p>
            <p className='mt-2 text-sm'>Remoto</p>
          </div>
          <div className='w-[30%]'></div>
        </div>
      </div>
    </section>
  );
}
