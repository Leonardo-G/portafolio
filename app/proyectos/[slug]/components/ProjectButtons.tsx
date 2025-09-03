'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { LuGithub } from 'react-icons/lu';
import Button from '@/components/button/Button';

interface IProps {
  githubUrl: string;
}

export default function ProjectButtons({ githubUrl }: IProps) {
  return (
    <div className='mt-8 flex justify-center'>
      <Link href={githubUrl} target='_blank' rel='noopener noreferrer'>
        <motion.div whileHover={{ scale: 1.05 }}>
          <Button variant='orange'>
            <LuGithub className='text-lg' />
            Ver código
          </Button>
        </motion.div>
      </Link>
    </div>
  );
}
