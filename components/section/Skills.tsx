'use client';
import { FaCss3Alt, FaHtml5, FaReact } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io5';
import { TbBrandReactNative } from 'react-icons/tb';
import { IconType } from 'react-icons';
type Skill = {
  name: string;
  icon: IconType; // <--- Esto le dice a TS que es un componente de ícono válido
};
export const skills: Skill[] = [
  {
    name: 'HTML5',
    icon: FaHtml5,
  },
  {
    name: 'CSS3',
    icon: FaCss3Alt,
  },
  {
    name: 'Typescript',
    icon: SiTypescript,
  },
  {
    name: 'Javascript',
    icon: IoLogoJavascript,
  },
  {
    name: 'Next.js',
    icon: SiNextdotjs,
  },
  {
    name: 'React.js',
    icon: FaReact,
  },
  {
    name: 'Tailwind',
    icon: SiTailwindcss,
  },
  {
    name: 'React Native',
    icon: TbBrandReactNative,
  },
];

export default function MySkills() {
  return (
    <div className='mx-auto w-full max-w-6xl overflow-hidden'>
      <h2 className='text-grey-primary font-roboto tracking-title pl-5 font-light uppercase'>
        My skills
      </h2>
      <div className='mt-22 grid min-h-[200px] w-full grid-cols-5'>
        <div className='col-span-4 grid grid-cols-4 gap-x-20 gap-y-20'>
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className='border-grey-secondary flex h-[200px] w-[200px] flex-col items-center justify-end rounded-2xl border pb-4 transition-shadow hover:shadow-md'
              >
                <Icon className='mb-6 h-[75px] w-[75px]' />
                <p className='font-roboto text-sm font-light tracking-[3px]'>
                  {skill.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* <motion.div
        className='bg-black h-[100px] w-[100px]'
        drag
        whileDrag={{ rotate: 12 }}
      /> */}
    </div>
  );
}
