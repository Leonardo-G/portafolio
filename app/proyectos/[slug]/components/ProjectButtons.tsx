'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { LuGithub } from 'react-icons/lu';
import Button from '@/components/button/Button';
import { TfiWorld } from 'react-icons/tfi';
interface IProps {
  githubUrl: string;
  liveUrl?: string;
}

export default function ProjectButtons({ githubUrl, liveUrl }: IProps) {
  return (
    <div className='mt-8 flex justify-center gap-5'>
      <Link href={githubUrl} target='_blank' rel='noopener noreferrer'>
        <motion.div whileHover={{ scale: 1.05 }}>
          <Button variant='orange'>
            <LuGithub className='text-lg' />
            Ver código
          </Button>
        </motion.div>
      </Link>
      {liveUrl && (
        <Link href={liveUrl} target='_blank' rel='noopener noreferrer'>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Button variant='black'>
              <TfiWorld className='text-lg' />
              Ver página
            </Button>
          </motion.div>
        </Link>
      )}
    </div>
  );
}
