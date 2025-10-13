'use client';

import { projects } from '@/database/projects';
import { IProjectType } from '@/interface/proyectos';
import { AnimatePresence, motion } from 'motion/react';
import CardProject from './CardProject';
interface IProps {
  projectType: IProjectType;
}

export default function ProjectsGroup({ projectType }: IProps) {
  const filteredProjects = projects.filter((p) => p.type === projectType);

  return (
    <section className='relative mx-auto w-full max-w-6xl overflow-hidden px-4 py-15'>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className='font-space-grotesk mb-3 text-xl tracking-[0.3em]'
      >
        PROYECTOS
      </motion.h1>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: 'easeInOut' }}
        className='h-[1px] w-full origin-left bg-gray-200'
      />
      <motion.div
        key='project-list-frontend'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
      >
        <div className='mt-10 grid w-full gap-x-4 gap-y-4 min-[500px]:grid-cols-2 sm:auto-rows-[70px] sm:grid-cols-12 sm:gap-x-10'>
          <AnimatePresence mode='wait'>
            {filteredProjects.map((project, index) => (
              <CardProject
                project={project}
                index={index}
                size={project.sizeCard}
                key={index}
              />
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
