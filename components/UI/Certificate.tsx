'use client';
import { ICertificate } from '@/interface/certificate';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { GoPlus } from 'react-icons/go';
import { HiXMark } from 'react-icons/hi2';

interface IProps {
  certificate: ICertificate;
}
export default function Certificate({ certificate }: IProps) {
  const [expandedCert, setExpandedCert] = useState<number | null>(1);

  const toggleCertificate = (id: number) => {
    setExpandedCert(expandedCert === id ? null : id);
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className='group relative mt-10 overflow-hidden rounded-md bg-white shadow-sm transition-all duration-300 hover:shadow-md'
    >
      <div
        className={`flex cursor-pointer items-center justify-between border-l-6 p-8 transition-all duration-300 ${
          expandedCert === certificate.id
            ? 'border-orange-secondary'
            : 'border-transparent group-hover:border-orange-200'
        }`}
        onClick={() => toggleCertificate(certificate.id)}
      >
        <div className='flex-1'>
          <h3 className='text-2xl font-light tracking-wide text-gray-800'>
            {certificate.certificate}
          </h3>
          <div className='mt-3 flex flex-wrap items-center gap-x-8 gap-y-2 text-sm text-gray-500'>
            <span className='flex items-center'>
              <span className='bg-orange-secondary mr-2 h-1.5 w-1.5 rounded-full'></span>
              {certificate.education}
            </span>
            <span className='flex items-center'>
              <span className='bg-orange-secondary mr-2 h-1.5 w-1.5 rounded-full'></span>
              {certificate.type}
            </span>
            <span className='flex items-center'>
              <span className='bg-orange-secondary mr-2 h-1.5 w-1.5 rounded-full'></span>
              {certificate.year}
            </span>
          </div>
        </div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={`rounded-full p-2 text-gray-800 ${
            expandedCert === certificate.id
              ? 'bg-orange-50'
              : 'bg-gray-50 group-hover:bg-orange-50'
          } transition-colors duration-300`}
        >
          {expandedCert === certificate.id ? (
            <HiXMark className='h-6 w-6' />
          ) : (
            <GoPlus className='h-6 w-6' />
          )}
        </motion.button>
      </div>

      <AnimatePresence>
        {expandedCert === certificate.id && (
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
                  <span className='bg-orange-secondary mr-3 h-0.5 w-8'></span>
                  Lo que se aprendió
                </h4>
                <ul className='space-y-3 text-gray-600'>
                  {certificate.knowledge.map((item, index) => (
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
                      <span className='bg-orange-secondary mt-2 mr-3 inline-block h-2 w-2 rounded-full'></span>
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
                      src={certificate.imgCertificate}
                      alt={`Certificado ${certificate.education} ${certificate.certificate}`}
                      className='w-full border border-gray-100 object-cover shadow-sm transition-all duration-300 group-hover:shadow-md'
                    />
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <h4 className='mb-4 flex items-center text-lg font-medium text-gray-700'>
                    <span className='bg-orange-secondary mr-3 h-0.5 w-8'></span>
                    Tecnologías vistas
                  </h4>
                  <div className='flex flex-wrap gap-2'>
                    {certificate.technologies.map((tech, index) => (
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
  );
}
