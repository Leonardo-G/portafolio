'use client';
import { FaCss3Alt, FaHtml5, FaReact } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io5';
import { TbBrandReactNative } from 'react-icons/tb';
import { IconType } from 'react-icons';
import { motion } from 'motion/react';

type Skill = {
  name: string;
  icon: IconType;
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
    <div className='mx-auto w-full max-w-[1280px]'>
      <h2 className='text-grey-primary font-roboto tracking-title pl-5 pl-[30px] text-xl font-light uppercase'>
        My skills
      </h2>
      <div className='mt-22 mb-22 grid min-h-[200px] w-full grid-cols-5'>
        <div className='relative col-span-4 grid grid-cols-4 gap-x-20 gap-y-20 pl-[56px]'>
          <div className='absolute left-[12%] z-0 h-[255px] w-[255px] rounded-full bg-[#F597381F]'></div>
          <div className='absolute top-[50%] flex -translate-x-[100%] -translate-y-[50%] flex-col gap-[12px]'>
            {Array.from({ length: 18 }, (_, i) => i + 1).map((value) => (
              <div className='flex gap-[12px]' key={value}>
                <div className='h-[5px] w-[5px] bg-[#D08131]'></div>
                <div className='h-[5px] w-[5px] bg-[#D08131]'></div>
                <div className='h-[5px] w-[5px] bg-[#D08131]'></div>
              </div>
            ))}
          </div>
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                drag
                className='border-grey-secondary z-10 flex h-[200px] w-[200px] flex-col items-center justify-end rounded-2xl border pb-4 transition-shadow hover:shadow-md'
                transition={{ duration: 0.6 }}
                whileDrag={{ scale: 1.1, boxShadow: '0px 10px 16px #01' }}
              >
                <Icon className='mb-6 h-[75px] w-[75px]' />
                <p className='font-roboto text-sm font-light tracking-[3px]'>
                  {skill.name}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
