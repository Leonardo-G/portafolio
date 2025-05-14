'use client';

import Title from '@/components/UI/Title';
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
      <Title title='Proyectos' />

      <AnimatePresence mode='wait'>
        (
        <motion.div
          key='project-list'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <div className='mt-20'>
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className='group relative mt-5 cursor-pointer'
                >
                  <div className='flex flex-col items-start justify-between gap-6 py-8 shadow-xs md:flex-row md:items-center'>
                    <div className='flex items-start gap-4'>
                      <div className='text-sm font-light text-gray-300 dark:text-gray-700'>
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <div>
                        <h3 className='mb-2 flex items-center gap-2 text-2xl font-light text-gray-800 dark:text-gray-100'>
                          {project.titulo}
                          <span className='absolute top-0 -left-4 -z-10 text-8xl font-bold text-gray-400 opacity-5 dark:text-gray-600'>
                            {String(index + 1).padStart(2, '0')}
                          </span>
                        </h3>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: 'rgba(251, 146, 60, 0.1)',
                      }}
                      whileTap={{ scale: 0.95 }}
                      className='flex cursor-pointer items-center gap-2 rounded-full bg-gray-100 px-6 py-3 text-sm font-medium text-gray-800 transition-colors duration-300 hover:text-orange-500 dark:bg-gray-800 dark:text-gray-200 dark:hover:text-orange-400'
                    >
                      VER PROYECTO
                      <MdKeyboardArrowRight size={16} />
                    </motion.button>
                  </div>

                  <div className='h-0.5 w-0 bg-orange-400 transition-all duration-300 group-hover:w-full dark:bg-orange-500'></div>
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
