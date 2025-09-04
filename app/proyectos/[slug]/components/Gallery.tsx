'use client';

import { cn } from '@/utils/cn';
import { motion } from 'motion/react';
import Image from 'next/image';
import { FaExternalLinkAlt } from 'react-icons/fa';
interface IProps {
  title: string;
  images: string[];
}

export default function Gallery({ title, images }: IProps) {
  const classPositionGrid = [
    'col-span-2 row-span-2',
    'row-span-1',
    'row-span-1',
    'col-span-2 row-span-2',
    'row-span-2',
  ];

  return (
    <div className='grid h-[60vh] grid-cols-3 grid-rows-4 gap-4'>
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={cn(
            'group relative cursor-pointer overflow-hidden rounded-lg',
            classPositionGrid[index],
          )}
        >
          <Image
            src={image || '/placeholder.svg'}
            alt={`${title} - Vista ${index + 1}`}
            fill
            className='object-cover transition-all duration-300 ease-out group-hover:scale-105 group-hover:brightness-75'
          />

          <div className='absolute top-1/2 left-1/2 z-10 flex -translate-1/2 items-center justify-center rounded-full bg-black/50 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
            <FaExternalLinkAlt className='h-4 w-4 text-gray-300' />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
