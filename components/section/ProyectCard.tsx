'use client';
import { motion } from 'motion/react';
import Link from 'next/link';
import { useState } from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { PiGithubLogoBold } from 'react-icons/pi';
import { BsArrowRightShort } from 'react-icons/bs';

type FeaturedProject = {
  id: number;
  slug: string;
  title: string;
  description: string;
  type: 'frontend' | 'backend';
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  category: string;
  year: string;
};

const featuredProjects: FeaturedProject[] = [
  {
    id: 1,
    slug: 'mercado-libre-clone',
    title: 'Mercado Libre Clone',
    description:
      'Plataforma de e-commerce similar a Mercado Libre, con búsqueda avanzada y carrito de compras.',
    type: 'frontend',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'API'],
    image: '/placeholder.svg?height=400&width=600',
    githubUrl: 'https://github.com/username/moviehub',
    category: 'Web App',
    year: '2023',
  },
  {
    id: 2,
    slug: 'tecnologia-ecommerce',
    title: 'Tecnología Ecommerce',
    description:
      'Aplicación de ecommerce de productos tecnológicos desarrollada con React y Firebase, con catálogo dinámico, carrito de compras y generación de órdenes de compra.',
    type: 'frontend',
    tags: ['React', 'Next.js', 'Stripe', 'Tailwind Css'],
    image: '/placeholder.svg?height=400&width=600',
    liveUrl: 'https://react-ecommerce-tecnologia.vercel.app/',
    githubUrl: 'https://github.com/Leonardo-G/React-ecommerce-tecnologia',
    category: 'Web App',
    year: '2023',
  },
];

export default function ProyectCard() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <div className='mt-5 grid grid-cols-1 gap-8 md:grid-cols-3'>
      {featuredProjects.map((project, index) => (
        <motion.div
          key={project.id}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 + index * 0.1 }}
          className='group relative'
          onMouseEnter={() => setHoveredProject(project.id)}
          onMouseLeave={() => setHoveredProject(null)}
        >
          <div className='group relative overflow-hidden rounded-lg bg-white shadow-xl dark:bg-gray-900 dark:shadow-gray-950/30'>
            <div className='pointer-events-none absolute inset-0 opacity-5 dark:opacity-10'>
              <div className="bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4xNSI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2MWgtMXYtMXptLTIgMmgxdjFoLTF2LTF6bS0yLTJoMXYxaC0xdi0xem0yLTJoMXYxaC0xdi0xem0tMiAyaDF2MWgtMXYtMXptLTItMmgxdjFoLTF2LTF6bTIgMGgxdjFoLTF2LTF6bS0yIDRoMXYxaC0xdi0xem0yIDBo'+ 'MXYxaC0xdi0xem0tMi0yaDF2MWgtMXYtMXptMiAwaDJ2MWgtMnYtMXptLTIgMmgxdjFoLTF2LTF6bTQtMmgxdjFoLTF2LTF6bTIgMGgxdjFoLTF2LTF6bS0yIDJoMXYxaC0xdi0xem0yIDBo'+ 'MXYxaC0xdi0xem0tMi0yaDF2MWgtMXYtMXptMiAwaDJ2MWgtMnYtMXptLTIgMmgxdjFoLTF2LTF6Ii8+PC9nPjwvZz48L3N2Zz4=')] dark:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xNSI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2MWgtMXYtMXptLTIgMmgxdjFoLTF2LTF6bS0yLTJoMXYxaHQtMXYtMXptMi0yaDF2MWgtMXYtMXptLTIgMmgxdjFoLTF2LTF6bS0yLTJoMXYxaC0xdi0xem0yIDBo'+ 'MXYxaC0xdi0xem0tMiA0aDF2MWgtMXYtMXptMiAwaD'+ 'MXYxaC0xdi0xem0tMi0yaDF2MWgtMXYtMXptMiAwaDJ2MWgtMnYtMXptLTIgMmgxdjFoLTF2LTF6bTQtMmgxdjFoLTF2LTF6bTIgMGgxdjFoLTF2LTF6bS0yIDJoMXYxaC0xdi0xem0yIDBo'+ 'MXYxaC0xdi0xem0tMi0yaDF2MWgtMXYtMXptMiAwaDJ2MWgtMnYtMXptLTIgMmgxdjFoLTF2LTF6Ii8+PC9nPjwvZz48L3N2Zz4=')] absolute inset-0"></div>
            </div>

            <div className='relative z-10 p-8 md:p-10'>
              <div className='flex h-full min-h-[320px] flex-col'>
                <div className='mb-6'>
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

                  <h4 className='mb-3 text-3xl leading-tight font-extralight text-gray-800 md:text-4xl dark:text-gray-100'>
                    {project.title}
                  </h4>

                  <div className='mb-4 text-xs tracking-wider text-gray-500 uppercase dark:text-gray-400'>
                    {project.category}
                  </div>

                  <p className='line-clamp-3 h-15 text-sm leading-relaxed text-gray-600 dark:text-gray-300'>
                    {project.description}
                  </p>
                </div>

                <div className='mt-auto'>
                  <div className='mb-6 flex flex-wrap gap-1'>
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className='rounded-sm bg-gray-100 px-2 py-1 text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-400'
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className='rounded-sm bg-gray-100 px-2 py-1 text-xs text-gray-500 dark:bg-gray-800 dark:text-gray-400'>
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  <div className='mb-6 h-px w-full origin-left scale-x-0 transform bg-gradient-to-r from-transparent via-gray-200 to-transparent transition-transform duration-500 group-hover:scale-x-100 dark:via-gray-700'></div>

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
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
              className='pointer-events-none absolute inset-0 bg-gradient-to-br from-orange-400/5 to-orange-400/20 dark:from-orange-500/10 dark:to-orange-500/30'
            ></motion.div>

            <div className='pointer-events-none absolute -right-4 -bottom-4 text-8xl font-bold text-orange-400/5 dark:text-orange-500/5'>
              {String(index + 1).padStart(2, '0')}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
