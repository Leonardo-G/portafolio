'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Title from '../UI/Title';
import ProyectCard from './ProyectCard';

export default function CategorySelector() {
  const [hoveredCategory, setHoveredCategory] = useState<
    'frontend' | 'backend' | null
  >(null);

  return (
    <section className='mx-auto my-30 w-full max-w-[1280px]'>
      <Title title='Proyectos' />
      <ProyectCard />

      <div className='relative mt-10 grid gap-8 md:grid-cols-2 md:gap-12'>
        <div className='absolute top-0 bottom-0 left-1/2 hidden w-px bg-gradient-to-b from-orange-400/0 via-orange-400/50 to-orange-400/0 md:block'></div>
        <div
          className='relative'
          onMouseEnter={() => setHoveredCategory('frontend')}
          onMouseLeave={() => setHoveredCategory(null)}
        >
          <Link href='/proyectos/frontend' className='block' prefetch>
            <div className='group relative overflow-hidden rounded-lg bg-white shadow-xl dark:bg-gray-900 dark:shadow-gray-950/30'>
              <div className='pointer-events-none absolute inset-0 opacity-5 dark:opacity-10'>
                <div className="bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4xNSI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2MWgtMXYtMXptLTIgMmgxdjFoLTF2LTF6bS0yLTJoMXYxaC0xdi0xem0yLTJoMXYxaC0xdi0xem0tMiAyaDF2MWgtMXYtMXptLTItMmgxdjFoLTF2LTF6bTIgMGgxdjFoLTF2LTF6bS0yIDRoMXYxaC0xdi0xem0yIDBo'+ 'MXYxaC0xdi0xem0tMi0yaDF2MWgtMXYtMXptMiAwaDJ2MWgtMnYtMXptLTIgMmgxdjFoLTF2LTF6bTQtMmgxdjFoLTF2LTF6bTIgMGgxdjFoLTF2LTF6bS0yIDJoMXYxaC0xdi0xem0yIDBo'+ 'MXYxaC0xdi0xem0tMi0yaDF2MWgtMXYtMXptMiAwaDJ2MWgtMnYtMXptLTIgMmgxdjFoLTF2LTF6Ii8+PC9nPjwvZz48L3N2Zz4=')] dark:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xNSI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2MWgtMXYtMXptLTIgMmgxdjFoLTF2LTF6bS0yLTJoMXYxaC0xdi0xem0yLTJoMXYxaC0xdi0xem0tMiAyaDF2MWgtMXYtMXptLTItMmgxdjFoLTF2LTF6bTIgMGgxdjFoLTF2LTF6bS0yIDRoMXYxaC0xdi0xem0yIDBo'+ 'MXYxaC0xdi0xem0tMi0yaDF2MWgtMXYtMXptMiAwaDJ2MWgtMnYtMXptLTIgMmgxdjFoLTF2LTF6bTQtMmgxdjFoLTF2LTF6bTIgMGgxdjFoLTF2LTF6bS0yIDJoMXYxaC0xdi0xem0yIDBo'+ 'MXYxaC0xdi0xem0tMi0yaDF2MWgtMXYtMXptMiAwaDJ2MWgtMnYtMXptLTIgMmgxdjFoLTF2LTF6Ii8+PC9nPjwvZz48L3N2Zz4=')] absolute inset-0"></div>
              </div>
              <div className='relative z-10 p-10 md:p-12'>
                <div className='flex h-full flex-col'>
                  <div className='mb-6'>
                    <div className='mb-2 text-xs font-medium tracking-widest text-orange-500 uppercase dark:text-orange-400'>
                      01
                    </div>
                    <h3 className='mb-4 text-5xl font-extralight text-gray-800 md:text-6xl dark:text-gray-100'>
                      Frontend
                    </h3>
                    <div className='text-sm tracking-wider text-gray-500 uppercase dark:text-gray-400'>
                      REACT / NEXT.JS
                    </div>
                  </div>

                  <div className='mt-auto'>
                    <div className='mb-8 h-px w-full origin-left scale-x-0 transform bg-gradient-to-r from-transparent via-gray-200 to-transparent transition-transform duration-500 group-hover:scale-x-100 dark:via-gray-700'></div>

                    <div className='flex items-center justify-between'>
                      <div className='text-sm text-gray-500 dark:text-gray-400'>
                        <span className='inline-block transition-transform duration-500 group-hover:translate-x-2'>
                          Explorar proyectos
                        </span>
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className='flex h-12 w-12 items-center justify-center rounded-full bg-orange-400 text-white shadow-lg shadow-orange-400/20 dark:bg-orange-500 dark:shadow-orange-500/20'
                      >
                        <ArrowRight size={18} />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredCategory === 'frontend' ? 1 : 0 }}
                className='pointer-events-none absolute inset-0 bg-gradient-to-br from-orange-400/5 to-orange-400/20 dark:from-orange-500/10 dark:to-orange-500/30'
              ></motion.div>

              <div className='pointer-events-none absolute -right-4 -bottom-4 text-9xl font-bold text-orange-400/10 dark:text-orange-500/10'>
                {'</>'}
              </div>
            </div>
          </Link>
        </div>

        <div
          className='relative'
          onMouseEnter={() => setHoveredCategory('backend')}
          onMouseLeave={() => setHoveredCategory(null)}
        >
          <Link href='/proyectos/backend' className='block'>
            <div className='group relative overflow-hidden rounded-lg bg-white shadow-xl dark:bg-gray-900 dark:shadow-gray-950/30'>
              <div className='relative z-10 p-10 md:p-12'>
                <div className='flex h-full flex-col'>
                  <div className='mb-6'>
                    <div className='mb-2 text-xs font-medium tracking-widest text-orange-500 uppercase dark:text-orange-400'>
                      02
                    </div>
                    <h3 className='mb-4 text-5xl font-extralight text-gray-800 md:text-6xl dark:text-gray-100'>
                      Backend
                    </h3>
                    <div className='text-sm tracking-wider text-gray-500 uppercase dark:text-gray-400'>
                      NODE.JS / API / DATABASES
                    </div>
                  </div>

                  <div className='mt-auto'>
                    <div className='mb-8 h-px w-full origin-left scale-x-0 transform bg-gradient-to-r from-transparent via-gray-200 to-transparent transition-transform duration-500 group-hover:scale-x-100 dark:via-gray-700'></div>

                    <div className='flex items-center justify-between'>
                      <div className='text-sm text-gray-500 dark:text-gray-400'>
                        <span className='inline-block transition-transform duration-500 group-hover:translate-x-2'>
                          Explorar proyectos
                        </span>
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className='flex h-12 w-12 items-center justify-center rounded-full bg-orange-400 text-white shadow-lg shadow-orange-400/20 dark:bg-orange-500 dark:shadow-orange-500/20'
                      >
                        <ArrowRight size={18} />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredCategory === 'backend' ? 1 : 0 }}
                className='pointer-events-none absolute inset-0 bg-gradient-to-br from-orange-400/5 to-orange-400/20 dark:from-orange-500/10 dark:to-orange-500/30'
              ></motion.div>

              <div className='pointer-events-none absolute -right-4 -bottom-4 text-9xl font-bold text-orange-400/10 dark:text-orange-500/10'>
                {'{...}'}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
