'use client';

import Title from '@/components/UI/Title';
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
    <section className='relative mx-auto w-full max-w-6xl overflow-hidden px-4 py-24'>
      <Title title='Proyectos' />
      <motion.div
        key='project-list-frontend'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
      >
        <div className='mt-20 grid w-full auto-rows-[70px] grid-cols-12 gap-x-10 gap-y-4'>
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
