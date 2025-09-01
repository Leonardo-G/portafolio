'use client';
import { useState } from 'react';
import {
  FaCss3Alt,
  FaHtml5,
  FaReact,
  FaNodeJs,
  FaDocker,
} from 'react-icons/fa';
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
import Title from '../UI/Title';
import SkillDescription from '../skills/SkillDescription';
import DotGrid from '../UI/DotGrid';

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
  {
    name: 'Docker',
    icon: FaDocker,
    code: 'extra',
  },
];

const allSkillsTopic = [
  {
    code: 'all',
    description: 'Todas las skills',
  },
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

const SHOW_SKILLS_IN_SECTION = 8;

export default function MySkills() {
  const [skillsTopic, setSkillsTopic] = useState('all');
  const skillDescription = allSkillsTopic.filter(
    (skill) => skill.code === skillsTopic,
  );

  const filteredSkills =
    skillsTopic === 'all'
      ? skills
      : skills.filter((skill) => skill.code === skillsTopic);

  const handleChangeTopic = (topic: string) => {
    setSkillsTopic(topic);
  };
  console.log('filteredSkills', filteredSkills);
  return (
    <div className='mx-auto w-full max-w-[1280px]'>
      <Title title='My skills' />
      <div className='border-orange-primary mt-15 ml-15 border-l-3 pl-3'>
        <p className='text-sm leading-relaxed text-gray-600'>
          {skillDescription[0].description}
        </p>
      </div>
      <div className='relative mt-7 mb-22 grid min-h-[200px] w-full grid-cols-5 pl-[56px]'>
        <div className='absolute top-[50%] flex -translate-x-[100%] -translate-y-[50%] flex-col gap-[12px]'>
          <DotGrid />
        </div>
        <div className='absolute left-[12%] z-0 h-[255px] w-[255px] rounded-full bg-[#F597381F]'></div>
        <div className='col-span-4 grid h-[500px] grid-cols-4 gap-y-20'>
          <AnimatePresence mode='popLayout'>
            {filteredSkills
              .slice(0, SHOW_SKILLS_IN_SECTION)
              .map((skill, idx) => {
                const Icon = skill.icon;
                return (
                  <SkillDescription
                    key={`${skill.name}-${skillsTopic}`}
                    skill={skill}
                    Icon={Icon}
                    idx={idx}
                  />
                );
              })}
          </AnimatePresence>
        </div>
        <div className='relative flex h-full w-full flex-col items-end justify-end gap-6'>
          {allSkillsTopic.map((skillTopic) => (
            <div
              key={skillTopic.code}
              onClick={() => handleChangeTopic(skillTopic.code)}
              className={`group relative w-[250px] cursor-pointer rounded-sm border-l-4 bg-white px-4 py-2 text-gray-500 hover:text-gray-700 ${
                skillsTopic === skillTopic.code
                  ? 'border-orange-secondary font-medium text-gray-700 shadow-lg'
                  : 'border-transparent'
              }`}
            >
              {skillsTopic === skillTopic.code && (
                <motion.div
                  layoutId='circle-highlight'
                  className='bg-orange-secondary absolute top-1/2 right-px z-10 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full'
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                />
              )}

              <p className='relative z-20 text-sm'>{skillTopic.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
