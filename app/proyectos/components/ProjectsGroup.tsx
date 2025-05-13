'use client';

import { proyectosDB } from '@/database/proyectos';
import { IProjectType } from '@/interface/proyectos';
import { AnimatePresence, motion } from 'motion/react';
import { MdKeyboardArrowRight } from 'react-icons/md';
interface IProps {
  projectType: IProjectType;
}

export default function ProjectsGroup({ projectType }: IProps) {
  const filteredProjects = proyectosDB.filter(
    (p) => p.structure === projectType,
  );

  return (
    <section className='relative mx-auto w-full max-w-6xl overflow-hidden px-4 py-24'>
      {/* Background elements */}
      <div className='absolute top-1/3 right-0 bottom-1/3 flex flex-col gap-1.5'>
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className='h-1.5 w-1.5 bg-orange-400 dark:bg-orange-500'
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='mb-16'
      >
        <h2 className='mb-3 text-5xl font-extralight tracking-[0.2em] text-gray-800 dark:text-gray-100'>
          PROYECTOS
        </h2>
        <div className='h-1 w-24 rounded-full bg-orange-400 dark:bg-orange-500'></div>
      </motion.div>

      <AnimatePresence mode='wait'>
        (
        <motion.div
          key='project-list'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          {/* Projects list */}
          <div className='space-y-0 divide-y divide-gray-100 dark:divide-gray-800'>
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className='group relative cursor-pointer py-8'
                >
                  <div className='flex flex-col items-start justify-between gap-6 md:flex-row md:items-center'>
                    <div className='flex items-start gap-4'>
                      <div className='text-sm font-light text-gray-300 dark:text-gray-700'>
                        {String(project.id).padStart(2, '0')}
                      </div>
                      <div>
                        <h3 className='mb-2 flex items-center gap-2 text-4xl font-light text-gray-800 dark:text-gray-100'>
                          {project.titulo}
                          <span className='absolute top-0 -left-4 -z-10 text-8xl font-bold text-gray-400 opacity-5 dark:text-gray-600'>
                            {String(project.id).padStart(2, '0')}
                          </span>
                        </h3>
                        {/* <div className='text-sm tracking-wider text-gray-500 uppercase dark:text-gray-400'>
                            {project.tags.join(' / ')}
                          </div> */}
                      </div>
                    </div>

                    <motion.button
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: 'rgba(251, 146, 60, 0.1)',
                      }}
                      whileTap={{ scale: 0.95 }}
                      className='flex items-center gap-2 rounded-full bg-gray-100 px-6 py-3 text-sm font-medium text-gray-800 transition-colors duration-300 hover:text-orange-500 dark:bg-gray-800 dark:text-gray-200 dark:hover:text-orange-400'
                    >
                      VER PROYECTO
                      <MdKeyboardArrowRight size={16} />
                    </motion.button>
                  </div>

                  <div className='mt-8 h-0.5 w-0 bg-orange-400 transition-all duration-300 group-hover:w-full dark:bg-orange-500'></div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
        )
      </AnimatePresence>
    </section>
  );
}
