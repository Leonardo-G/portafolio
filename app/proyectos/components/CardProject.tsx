'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { IProject } from '@/interface/projects';
import clsx from 'clsx';
import { FiExternalLink } from 'react-icons/fi';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { PiGithubLogoBold } from 'react-icons/pi';
import Link from 'next/link';
import { BsArrowRightShort } from 'react-icons/bs';
import Image from 'next/image';

interface IProps {
  project: IProject;
  index: number;
  size: 'xl' | 'md';
}

const gridPositions: Record<number, string> = {
  0: 'sm:col-span-6 md:col-span-8 sm:row-span-8',
  1: 'sm:col-span-6 md:col-span-4 sm:row-span-4',
  2: 'sm:col-span-6 md:col-span-4 sm:row-span-4',
};

const VISIBLE = 3;
export default function CardProject({ project, index, size }: IProps) {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [startIndex, setStartIndex] = useState(0);
  const total = project.images.length;
  const canPrev = startIndex > 0;
  const canNext = startIndex < total - VISIBLE;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 + index * 0.2 }}
      className={clsx('group relative', gridPositions[index])}
      onMouseEnter={() => setHoveredProject(project.slug)}
      onMouseLeave={() => setHoveredProject(null)}
    >
      <div className='group relative h-full overflow-hidden rounded-lg bg-white shadow-xl dark:bg-gray-900 dark:shadow-gray-950/30'>
        <div className='relative z-10 h-full p-8 md:p-10'>
          <div className='flex h-full min-h-0 flex-col justify-between lg:justify-center'>
            <div className='mb-4 flex items-center justify-between'>
              <div className='text-xs font-medium tracking-widest text-orange-500 uppercase dark:text-orange-400'>
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className='flex items-center gap-2'>
                <span className='text-xs tracking-wider text-gray-500 uppercase dark:text-gray-400'>
                  {project.year}
                </span>
                <div
                  className={`h-2 w-2 rounded-full ${project.type === 'frontend' ? 'bg-blue-400' : 'bg-green-400'}`}
                />
              </div>
            </div>
            <div className='flex min-h-0 flex-col lg:flex-1'>
              <div className='mb-6'>
                <h4
                  className={clsx(
                    'font-space-grotesk mb-3 leading-tight font-extralight text-gray-800 dark:text-gray-100',
                    size === 'xl' ? 'text-xl md:text-4xl' : 'text-xl',
                  )}
                >
                  {project.title}
                </h4>

                <div
                  className={clsx(
                    'mb-4 tracking-wider text-gray-500 uppercase dark:text-gray-400',
                    size === 'xl' ? 'text-[10px] sm:text-xs' : 'text-[10px]',
                  )}
                >
                  {project.category}
                </div>

                <p
                  className={clsx(
                    'text-sm leading-relaxed text-gray-600 dark:text-gray-300',
                    size === 'xl'
                      ? 'line-clamp-3'
                      : 'line-clamp-3 sm:line-clamp-2',
                  )}
                >
                  {project.description}
                </p>
              </div>

              <div className={clsx(size === 'xl' ? '' : 'sm:hidden')}>
                <div className='mb-6 flex flex-wrap gap-1'>
                  {project.mainSkills.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className='rounded-sm bg-gray-100 px-2 py-1 text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-400'
                    >
                      {tag}
                    </span>
                  ))}
                  {project.mainSkills.length > 3 && (
                    <span className='rounded-sm bg-gray-100 px-2 py-1 text-xs text-gray-500 dark:bg-gray-800 dark:text-gray-400'>
                      +{project.mainSkills.length - 3}
                    </span>
                  )}
                </div>
              </div>

              <div className='mb-6 h-px w-full origin-left scale-x-0 transform bg-gradient-to-r from-transparent via-gray-200 to-transparent transition-transform duration-500 group-hover:scale-x-100 dark:via-gray-700'></div>

              {size === 'xl' && (
                <div className='relative hidden min-h-0 flex-1 lg:block'>
                  <button
                    type='button'
                    onClick={() => setStartIndex((s) => Math.max(0, s - 1))}
                    disabled={!canPrev}
                    className='hover:bg-orange-primary transition-300 absolute top-1/2 left-5 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-gray-200 p-2 shadow transition-all disabled:opacity-30'
                    aria-label='Anterior'
                  >
                    <FaChevronLeft />
                  </button>
                  <button
                    type='button'
                    onClick={() =>
                      setStartIndex((s) => Math.min(total - VISIBLE, s + 1))
                    }
                    disabled={!canNext}
                    className='hover:bg-orange-primary transition-300 absolute top-1/2 right-5 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-gray-200 p-2 shadow transition-all disabled:opacity-30'
                    aria-label='Siguiente'
                  >
                    <FaChevronRight />
                  </button>

                  <div className='h-full w-full overflow-hidden py-10'>
                    <motion.div
                      className='flex h-full'
                      animate={{ x: `-${(startIndex * 100) / total}%` }}
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 30,
                      }}
                      style={{ width: `${(total * 100) / VISIBLE}%` }}
                    >
                      {project.images.map((src, i) => (
                        <div
                          key={i}
                          className='box-border h-full shrink-0 px-1'
                          style={{ width: `${100 / total}%` }}
                        >
                          <div className='relative h-full w-full overflow-hidden rounded-lg border border-gray-100 shadow-sm'>
                            <Image
                              fill
                              src={src}
                              alt={`${project.title} ${i + 1}`}
                              className='object-cover'
                              sizes='(max-width: 768px) 33vw, 20vw'
                              priority={i === 0 && index < 2}
                            />
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              )}
            </div>
            <div className='flex items-center justify-between'>
              <div className='flex gap-3'>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-gray-500 transition-colors duration-300 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400'
                  >
                    <FiExternalLink size={16} />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-gray-500 transition-colors duration-300 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400'
                  >
                    <PiGithubLogoBold size={16} />
                  </a>
                )}
              </div>

              <Link
                href={`/proyectos/${project.slug}`}
                className='flex items-center gap-1 text-sm text-gray-500 transition-colors duration-300 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400'
              >
                <span className='inline-block transition-transform duration-500 group-hover:translate-x-1'>
                  Ver detalles
                </span>
                <BsArrowRightShort size={14} />
              </Link>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: hoveredProject === project.slug ? 1 : 0,
          }}
          className='pointer-events-none absolute inset-0 bg-gradient-to-br from-orange-400/5 to-orange-400/20 dark:from-orange-500/10 dark:to-orange-500/30'
        ></motion.div>

        <div className='pointer-events-none absolute top-1/2 -right-15 text-[200px] font-bold text-orange-400/5 dark:text-orange-500/5'>
          {String(index + 1).padStart(2, '0')}
        </div>
      </div>
    </motion.div>
  );
}
