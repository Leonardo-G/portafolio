'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Copy, Check } from 'lucide-react';

const EMAIL = 'leoguanucodev@gmail.com';

export default function Contacto() {
  const [isCopied, setIsCopied] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(EMAIL);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <section
      ref={containerRef}
      className='relative flex min-h-[80vh] w-full items-center justify-center overflow-hidden p-4 md:p-8'
      id='contacto'
    >
      <div className='absolute inset-0 bg-gradient-to-br from-white to-orange-50 dark:from-gray-950 dark:to-gray-900/80'></div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.5 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className='absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-orange-400/10 blur-3xl dark:bg-orange-500/10'
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.3 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className='absolute right-1/4 bottom-1/4 h-80 w-80 rounded-full bg-orange-400/10 blur-3xl dark:bg-orange-500/10'
      />

      <div className='relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className='mb-16'
        >
          <h2 className='mb-3 text-center text-5xl font-extralight tracking-[0.2em] text-gray-800 dark:text-gray-100'>
            CONTACTO
          </h2>
          <div className='mx-auto h-1 w-24 rounded-full bg-orange-400 dark:bg-orange-500'></div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='mb-8 max-w-xl text-center text-gray-600 dark:text-gray-300'
        >
          ¿Quieres ponerte en contacto conmigo? Puedes escribirme a:
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className='group relative'
        >
          <a
            href={`mailto:${EMAIL}`}
            className='text-3xl font-light text-gray-800 transition-colors duration-300 hover:text-orange-500 md:text-5xl lg:text-6xl dark:text-gray-100 dark:hover:text-orange-400'
          >
            {EMAIL}
          </a>
          <div className='mt-2 h-px w-0 bg-orange-400 transition-all duration-500 group-hover:w-full dark:bg-orange-500'></div>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          onClick={copyToClipboard}
          className='mt-8 flex items-center gap-2 rounded-full bg-white px-6 py-3 text-gray-700 shadow-md transition-all duration-300 hover:shadow-lg dark:bg-gray-800 dark:text-gray-200'
        >
          {isCopied ? (
            <>
              <Check size={18} className='text-green-500' />
              <span>Copiado al portapapeles</span>
            </>
          ) : (
            <>
              <Copy
                size={18}
                className='text-orange-400 dark:text-orange-500'
              />
              <span>Copiar email</span>
            </>
          )}
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className='mt-12 flex gap-6'
        >
          {[
            { name: 'GitHub', url: 'https://github.com/Leonardo-G' },
            {
              name: 'LinkedIn',
              url: 'https://www.linkedin.com/in/leonardo-guanuco-javascript-typescript/',
            },
          ].map((social) => (
            <a
              key={social.name}
              href={social.url}
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-600 transition-colors duration-300 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400'
            >
              {social.name}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
