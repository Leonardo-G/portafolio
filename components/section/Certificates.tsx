'use client';

import { AnimatePresence, motion } from 'motion/react';
import { GoPlus } from 'react-icons/go';
import { HiXMark } from 'react-icons/hi2';
import Title from '../UI/Title';
import { useState } from 'react';

export default function Certificates() {
  const [expandedCert, setExpandedCert] = useState<string | null>('fullstack');

  const toggleCertificate = (id: string) => {
    setExpandedCert(expandedCert === id ? null : id);
  };

  return (
    <section className='mx-auto my-30 w-full max-w-[1280px]'>
      <Title title='Certificados' />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className='group relative mt-10 overflow-hidden rounded-md bg-white shadow-sm transition-all duration-300 hover:shadow-md'
      >
        <div
          className={`flex cursor-pointer items-center justify-between border-l-6 p-8 transition-all duration-300 ${
            expandedCert === 'fullstack'
              ? 'border-[#F59738BD]'
              : 'border-transparent group-hover:border-orange-200'
          }`}
          onClick={() => toggleCertificate('fullstack')}
        >
          <div className='flex-1'>
            <h3 className='text-2xl font-light tracking-wide text-gray-800'>
              Desarrollador Full Stack
            </h3>
            <div className='mt-3 flex flex-wrap items-center gap-x-8 gap-y-2 text-sm text-gray-500'>
              <span className='flex items-center'>
                <span className='mr-2 h-1.5 w-1.5 rounded-full bg-orange-400'></span>
                CoderHouse
              </span>
              <span className='flex items-center'>
                <span className='mr-2 h-1.5 w-1.5 rounded-full bg-orange-400'></span>
                Certificado
              </span>
              <span className='flex items-center'>
                <span className='mr-2 h-1.5 w-1.5 rounded-full bg-orange-400'></span>
                2021-2022
              </span>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`rounded-full p-2 text-gray-800 ${
              expandedCert === 'fullstack'
                ? 'bg-orange-50'
                : 'bg-gray-50 group-hover:bg-orange-50'
            } transition-colors duration-300`}
          >
            {expandedCert === 'fullstack' ? (
              <HiXMark className='h-6 w-6' />
            ) : (
              <GoPlus className='h-6 w-6' />
            )}
          </motion.button>
        </div>

        <AnimatePresence>
          {expandedCert === 'fullstack' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className='overflow-hidden'
            >
              <div className='grid gap-12 border-t border-gray-100 p-8 pt-0 md:grid-cols-2'>
                <div className='mt-3'>
                  <h4 className='mb-6 flex items-center text-lg font-medium text-gray-700'>
                    <span className='mr-3 h-0.5 w-8 bg-orange-400'></span>
                    Lo que se aprendió
                  </h4>
                  <ul className='space-y-3 text-gray-600'>
                    {[
                      'Crear un sitio web sumergiéndote en las mejores prácticas del diseño web responsive',
                      'Programación con Javascript',
                      'React JS, que te permitirá realizar sitios más complejos, dinámicos y escalables',
                      'Aplicaciones modernas con Node.js y MongoDB',
                      'Bases de datos SQL y NoSQL',
                      'Material UI',
                      'Introducción a Next UI',
                      'Y más...',
                    ].map((item, index) => (
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
                        <span className='mt-2 mr-3 inline-block h-2 w-2 rounded-full bg-orange-400'></span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className='mb-8'
                  >
                    <div className='group relative overflow-hidden rounded-sm'>
                      <img
                        src='/placeholder.svg?height=220&width=380'
                        alt='Certificado CoderHouse Full Stack'
                        className='w-full border border-gray-100 object-cover shadow-sm transition-all duration-300 group-hover:shadow-md'
                      />
                      <div className='bg-opacity-0 group-hover:bg-opacity-10 absolute inset-0 bg-orange-400 transition-all duration-300'></div>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <h4 className='mb-4 flex items-center text-lg font-medium text-gray-700'>
                      <span className='mr-3 h-0.5 w-8 bg-orange-400'></span>
                      Tecnologías vistas
                    </h4>
                    <div className='flex flex-wrap gap-2'>
                      {[
                        'HTML5',
                        'CSS3',
                        'SASS',
                        'JavaScript',
                        'React.js',
                        'Node.js',
                        'Express.js',
                        'MongoDB',
                        'Mongoose',
                        'MySQL',
                        'Sequelize',
                        'JWT',
                        'Sockets',
                        'NPM',
                        'GIT',
                        'GITHUB',
                      ].map((tech, index) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.3,
                            delay: 0.2 + index * 0.03,
                          }}
                          className='rounded-sm border border-gray-100 bg-gray-50 px-3 py-1 text-sm text-gray-700 transition-colors duration-300 hover:border-orange-100 hover:bg-orange-50'
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
