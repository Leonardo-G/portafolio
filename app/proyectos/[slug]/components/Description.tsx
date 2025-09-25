'use client';

import { ITechStack } from '@/interface/projects';
import { motion } from 'motion/react';
import { IoIosCode } from 'react-icons/io';
interface IProps {
  features: string[];
  techStack: ITechStack[];
  longDescription?: string;
}

export default function Description({
  features,
  techStack,
  longDescription,
}: IProps) {
  return (
    <div>
      <div className='mt-10'>
        <h2 className='mb-6 text-3xl font-bold text-gray-900 dark:text-gray-100'>
          Sobre este proyecto
        </h2>
        <p className='text-lg leading-relaxed text-gray-600 dark:text-gray-300'>
          {longDescription}
        </p>
      </div>
      <div className='mt-10 grid-cols-12 gap-5 sm:grid'>
        <div className='col-span-7'>
          <h3 className='mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100'>
            Características principales
          </h3>
          <div className='space-y-2'>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.05 }}
                className='flex items-start gap-4 rounded-xl bg-gray-50 p-2 transition-colors duration-300 hover:bg-gray-100 dark:bg-gray-800/50 dark:hover:bg-gray-800'
              >
                <div className='mt-3 h-2 w-2 flex-shrink-0 rounded-full bg-orange-400 dark:bg-orange-500'></div>
                <span className='leading-relaxed text-gray-700 dark:text-gray-300'>
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
        <div className='col-start-[-5] col-end-[-1] mt-10 sm:mt-0'>
          <h3 className='mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100'>
            Stack tecnológico
          </h3>
          <div className='space-y-5'>
            {techStack.map(({ techs, category }) => (
              <div
                className='space-y-3 rounded-xl border border-gray-100 bg-white p-6 shadow-lg'
                key={category}
              >
                <h4 className='mb-4 flex items-center gap-2 text-sm font-bold tracking-wider text-orange-500 uppercase dark:text-orange-400'>
                  <IoIosCode className='text-xl' />
                  {category}
                </h4>
                {techs.map((tech, index) => (
                  <div
                    key={index}
                    className='rounded-lg bg-gray-50 px-3 py-2 text-sm text-gray-700 transition-colors duration-300 hover:bg-orange-50 hover:text-orange-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-orange-900/20 dark:hover:text-orange-400'
                  >
                    {tech}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
