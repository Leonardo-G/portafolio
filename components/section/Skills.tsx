'use client';
import { FaCss3Alt, FaHtml5, FaReact, FaNodeJs } from 'react-icons/fa';
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiNestjs,
  SiTypeorm,
  SiMysql,
  SiPostgresql,
  SiAmazoncognito,
  SiJest,
  SiCypress,
} from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io5';
import { TbBrandReactNative } from 'react-icons/tb';
import { IconType } from 'react-icons';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

type Skill = {
  name: string;
  icon: IconType;
  code: 'front' | 'back' | 'extra';
};

export const skills: Skill[] = [
  {
    name: 'HTML5',
    icon: FaHtml5,
    code: 'front',
  },
  {
    name: 'CSS3',
    icon: FaCss3Alt,
    code: 'front',
  },
  {
    name: 'Typescript',
    icon: SiTypescript,
    code: 'front',
  },
  {
    name: 'Javascript',
    icon: IoLogoJavascript,
    code: 'front',
  },
  {
    name: 'Next.js',
    icon: SiNextdotjs,
    code: 'front',
  },
  {
    name: 'React.js',
    icon: FaReact,
    code: 'front',
  },
  {
    name: 'Tailwind',
    icon: SiTailwindcss,
    code: 'front',
  },
  {
    name: 'React Native',
    icon: TbBrandReactNative,
    code: 'front',
  },
  {
    name: 'Node.js',
    icon: FaNodeJs,
    code: 'back',
  },
  {
    name: 'Nest.js',
    icon: SiNestjs,
    code: 'back',
  },
  {
    name: 'TypeORM',
    icon: SiTypeorm,
    code: 'back',
  },
  {
    name: 'Mysql',
    icon: SiMysql,
    code: 'back',
  },
  {
    name: 'Postgresql',
    icon: SiPostgresql,
    code: 'back',
  },
  {
    name: 'Cognito AWS',
    icon: SiAmazoncognito,
    code: 'back',
  },
  {
    name: 'Jest',
    icon: SiJest,
    code: 'extra',
  },
  {
    name: 'Cypress',
    icon: SiCypress,
    code: 'extra',
  },
];

const allSkillsTopic = [
  {
    code: 'front',
    description: 'Front-end y lenguajes',
  },
  {
    code: 'back',
    description: 'Backend ',
  },
  {
    code: 'extra',
    description: 'Herramientas y Test',
  },
];

export default function MySkills() {
  const [skillsTopic, setSkillsTopic] = useState('front');
  const skillDescription = allSkillsTopic.filter(
    (skill) => skill.code === skillsTopic,
  );

  const handleChangeTopic = (topic: string) => {
    setSkillsTopic(topic);
  };
  return (
    <div className='mx-auto w-full max-w-[1280px]'>
      <h2 className='text-grey-primary font-roboto tracking-title pl-5 pl-[30px] text-xl font-light uppercase'>
        My skills
      </h2>
      <div className='relative mt-22 mb-22 grid min-h-[200px] w-full grid-cols-5 pl-[56px]'>
        <div className='absolute top-[50%] flex -translate-x-[100%] -translate-y-[50%] flex-col gap-[12px]'>
          {Array.from({ length: 18 }, (_, i) => i + 1).map((value) => (
            <div className='flex gap-[12px]' key={value}>
              <div className='h-[5px] w-[5px] bg-[#D08131]'></div>
              <div className='h-[5px] w-[5px] bg-[#D08131]'></div>
              <div className='h-[5px] w-[5px] bg-[#D08131]'></div>
            </div>
          ))}
        </div>
        <div className='col-span-4 grid h-[500px] grid-cols-4 gap-y-20'>
          <div className='absolute left-[12%] z-0 h-[255px] w-[255px] rounded-full bg-[#F597381F]'></div>
          <AnimatePresence mode='wait'>
            {skills
              .filter((skill) => skill.code === skillsTopic)
              .map((skill, idx) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    drag
                    className='border-grey-secondary z-10 flex h-[200px] w-[200px] flex-col items-center justify-end rounded-2xl border pb-4 transition-shadow hover:shadow-md'
                    transition={{ duration: 0.3, delay: 0.1 * idx }}
                    initial={{ opacity: 0, y: 10 }}
                    whileDrag={{ scale: 1.1, boxShadow: '0px 10px 16px #01' }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{
                      opacity: 0,
                      y: -10,
                    }}
                  >
                    <Icon className='mb-6 h-[75px] w-[75px]' />
                    <p className='font-roboto text-sm font-light tracking-[3px]'>
                      {skill.name}
                    </p>
                  </motion.div>
                );
              })}
          </AnimatePresence>
        </div>
        <div className='flex h-full w-full items-end justify-end'>
          <div>
            <div className='flex w-[150px] gap-2'>
              <div className='bg-black-transparent mb-10 ml-2 h-70 w-[1px]'></div>
              <AnimatePresence>
                <div>
                  <motion.p
                    key={skillDescription[0].description}
                    className='text-xs'
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {skillDescription[0].description}
                  </motion.p>
                </div>
              </AnimatePresence>
            </div>
            <div className='flex gap-10'>
              {allSkillsTopic.map((skillTopic) => (
                <div
                  className='bg-orange-primary relative h-4 w-4 cursor-pointer rounded-full'
                  onClick={() => handleChangeTopic(skillTopic.code)}
                  key={skillTopic.code}
                >
                  {skillTopic.code === skillsTopic && (
                    <motion.div
                      className='absolute top-0 left-0 z-5 h-4 w-4 cursor-pointer rounded-full bg-black'
                      key={skillTopic.code}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      initial={{ opacity: 0, y: 10 }}
                      exit={{ opacity: 0, y: -10 }}
                    ></motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
