'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

interface IProps {
  title: string;
  images: string[];
}

export default function ImageGrid({ title, images }: IProps) {
  return (
    <div className='grid h-[60vh] grid-cols-3 gap-4'>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className='relative col-span-2 overflow-hidden rounded-lg'
      >
        <Image
          src={images[0] || '/placeholder.svg'}
          alt={`${title} - Vista principal`}
          fill
          className='object-cover'
        />
      </motion.div>
      <div className='flex flex-col gap-4'>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='relative flex-1 overflow-hidden rounded-lg'
        >
          <Image
            src={images[1] || '/placeholder.svg'}
            alt={`${title} - Vista 2`}
            fill
            className='object-cover'
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='relative flex-1 overflow-hidden rounded-lg'
        >
          <Image
            src={images[2] || '/placeholder.svg'}
            alt={`${title} - Vista 3`}
            fill
            className='object-cover'
          />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className='relative col-span-2 overflow-hidden rounded-lg'
      >
        <Image
          src={images[3] || '/placeholder.svg'}
          alt={`${title} - Vista 4`}
          fill
          className='object-cover'
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className='relative overflow-hidden rounded-lg'
      >
        <Image
          src={images[4] || '/placeholder.svg'}
          alt={`${title} - Vista 5`}
          fill
          className='object-cover'
        />
      </motion.div>
    </div>
  );
}
