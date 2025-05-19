'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Plus,
  MapPin,
  Calendar,
  Briefcase,
  ChevronRight,
} from 'lucide-react';
import Title from '../UI/Title';

const jobs = [
  {
    id: 'biggertech',
    title: 'Software Developer',
    company: 'Bigger Tech',
    location: 'Remoto',
    period: 'Septiembre 2023 - Abril 2025',
    technologies: [
      'React.js',
      'React Native',
      'Next.js',
      'Nest.js',
      'TypeScript',
      'Node.js',
      'AWS cognito',
      'Docker',
      'HTML',
      'CSS',
      'Jest',
      'Cypress',
      'Redux.js',
    ],
    description: [
      'Desarrollo de aplicaciones web desde 0, utilizando React.js y Next.js',
      'Desarrollo de aplicaciones Android desde 0, con React Native',
      'Desarrollo e implementación de APIs RESTful',
      'Colaboración en equipos ágiles utilizando metodologías Scrum, con sprints de dos semanas para cumplir con los objetivos',
      'Integración con servicios de terceros y APIs externas, como Open AI, Stripe',
      'Mantenimiento y mejora de aplicaciones existentes',
    ],
  },
  {
    id: 'devocamp',
    title: 'Desarrollador Backend',
    company: 'Devocamp',
    location: 'Remoto - Pasantía',
    period: 'Marzo 2023 - Agosto 2023',
    technologies: [
      'TypeScript',
      'Next.js',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Prisma',
      'Docker',
      'Jest',
    ],
    description: [
      'Desarrollo de APIs RESTful utilizando Nest.js',
      'Implementación de TypeORM con bases de datos relacionales con PostgreSQL',
      'Creación de pruebas end to end (e2e) y de integración con Jest',
      'Configuración de entornos de desarrollo con Docker. Ejemplo: aws cognito, S3',
    ],
  },
  {
    id: 'freelance',
    title: 'Desarrollador Frontend',
    company: 'Freelance',
    location: 'Remoto',
    period: 'Octubre 2022 - Febrero 2023',
    technologies: [
      'HTML',
      'CSS',
      'SASS',
      'JavaScript',
      'React.js',
      'Figma',
      'Git',
    ],
    description: [
      'Desarrollo de interfaces de usuario responsivas',
      'Implementación de diseños desde Figma a código funcional',
      'Optimización de rendimiento y accesibilidad web',
      'Colaboración directa con clientes para entender sus necesidades',
      'Creación de componentes reutilizables',
    ],
  },
];

export default function Experiencia() {
  const [expandedJob, setExpandedJob] = useState<string | null>(null);

  const toggleJob = (id: string) => {
    setExpandedJob(expandedJob === id ? null : id);
  };

  return (
    <section className='mx-auto w-full max-w-[1280px]'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='mb-16'
      >
        <Title title='Experiencia' />
      </motion.div>

      <div className='relative'>
        <div className='absolute top-0 bottom-0 left-0 w-px transform bg-gray-200 md:left-1/2 md:translate-x-[-0.5px] dark:bg-gray-700'></div>
        <div className='relative space-y-12'>
          {jobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`relative ${index % 2 === 0 ? 'md:pr-12' : 'md:ml-auto md:pl-12'} md:w-1/2`}
            >
              <div
                className={`bg-orange-secondary absolute top-6 left-[-8px] z-10 h-4 w-4 rounded-full border-4 border-white shadow-sm ${index % 2 === 0 ? 'md:right-[-8px] md:left-auto' : 'md:right-auto md:left-[-8px]'} dark:bg-orange-primary dark:border-gray-900`}
              ></div>

              <div
                className={`ml-6 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-6' : 'md:ml-6'
                } group relative overflow-hidden rounded-sm bg-white shadow-sm transition-all duration-300 hover:shadow-md dark:bg-gray-900 dark:shadow-gray-950/50`}
              >
                <div
                  className={`cursor-pointer border-t-4 p-6 transition-all duration-300 ${
                    expandedJob === job.id
                      ? 'border-orange-secondary dark:border-orange-500'
                      : 'border-transparent group-hover:border-orange-200 dark:group-hover:border-orange-800/50'
                  }`}
                  onClick={() => toggleJob(job.id)}
                >
                  <div className='mb-4 flex items-start justify-between'>
                    <h3 className='text-2xl font-light tracking-wide text-gray-800 dark:text-gray-100'>
                      {job.title}
                    </h3>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`rounded-full p-2 text-gray-800 dark:text-gray-200 ${
                        expandedJob === job.id
                          ? 'bg-orange-50 dark:bg-orange-900/20'
                          : 'bg-gray-50 group-hover:bg-orange-50 dark:bg-gray-800 dark:group-hover:bg-orange-900/20'
                      } ml-2 flex-shrink-0 transition-colors duration-300`}
                    >
                      {expandedJob === job.id ? (
                        <X className='h-5 w-5' />
                      ) : (
                        <Plus className='h-5 w-5' />
                      )}
                    </motion.button>
                  </div>
                  <div className='mb-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500 dark:text-gray-400'>
                    <span className='flex items-center'>
                      <Briefcase className='text-orange-secondary mr-1 h-4 w-4 dark:text-orange-500' />
                      {job.company}
                    </span>
                    <span className='flex items-center'>
                      <MapPin className='text-orange-secondary mr-1 h-4 w-4 dark:text-orange-500' />
                      {job.location}
                    </span>
                    <span className='flex items-center'>
                      <Calendar className='text-orange-secondary mr-1 h-4 w-4 dark:text-orange-500' />
                      {job.period}
                    </span>
                  </div>
                  <div className='flex flex-wrap gap-2'>
                    {job.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className='rounded-sm border border-gray-100 bg-gray-50 px-3 py-1 text-sm text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300'
                      >
                        {tech}
                      </span>
                    ))}
                    {job.technologies.length > 3 && (
                      <span className='flex items-center rounded-sm border border-gray-100 bg-gray-50 px-3 py-1 text-sm text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400'>
                        +{job.technologies.length - 3}
                        <ChevronRight className='ml-1 h-3 w-3' />
                      </span>
                    )}
                  </div>
                  <AnimatePresence>
                    {expandedJob === job.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                        className='overflow-hidden'
                      >
                        <div className='mt-6 grid gap-8 border-t border-gray-100 pt-6 dark:border-gray-800'>
                          <div>
                            <h4 className='mb-4 flex items-center text-lg font-medium text-gray-700 dark:text-gray-200'>
                              <span className='bg-orange-secondary mr-3 h-0.5 w-8 dark:bg-orange-500'></span>
                              Responsabilidades
                            </h4>
                            <ul className='space-y-3 text-gray-600 dark:text-gray-300'>
                              {job.description.map((item, index) => (
                                <motion.li
                                  key={index}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{
                                    duration: 0.3,
                                    delay: 0.1 + index * 0.05,
                                  }}
                                  className='flex items-start'
                                >
                                  <span className='bg-orange-secondary mt-2 mr-3 inline-block h-2 w-2 rounded-full dark:bg-orange-500'></span>
                                  <span>{item}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className='mb-4 flex items-center text-lg font-medium text-gray-700 dark:text-gray-200'>
                              <span className='bg-orange-secondary mr-3 h-0.5 w-8 dark:bg-orange-500'></span>
                              Tecnologías utilizadas
                            </h4>
                            <div className='flex flex-wrap gap-2'>
                              {job.technologies.map((tech, index) => (
                                <motion.span
                                  key={index}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{
                                    duration: 0.3,
                                    delay: 0.2 + index * 0.03,
                                  }}
                                  className='rounded-sm border border-gray-100 bg-gray-50 px-3 py-1 text-sm text-gray-700 transition-colors duration-300 hover:border-orange-100 hover:bg-orange-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-orange-800/50 dark:hover:bg-orange-900/20'
                                >
                                  {tech}
                                </motion.span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
