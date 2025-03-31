'use client';
import { AnimatePresence, motion } from 'motion/react';
import { FaGithub } from 'react-icons/fa6';
import { IoLogoLinkedin } from 'react-icons/io5';

export default function HeroSection() {
  return (
    <div className='relative mx-auto flex min-h-[800px] w-full max-w-6xl items-center justify-between'>
      <motion.div
        className='z-10 h-fit'
        initial={{ opacity: 0, x: -50 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.8,
            ease: 'easeOut',
          },
        }}
      >
        <motion.p
          className='text-grey-primary font-roboto tracking-title pl-5 font-light uppercase'
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.3,
              duration: 0.6,
            },
          }}
        >
          Software developer
        </motion.p>
        <motion.h1
          className='leading-title text-grey-primary mt-10 text-9xl'
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 0.5,
              duration: 0.8,
              staggerChildren: 0.1,
            },
          }}
        >
          <motion.span
            initial={{ y: 40, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                delay: 0.6,
                duration: 0.6,
                type: 'spring',
                stiffness: 100,
              },
            }}
            className='inline-block'
          >
            Leonardo
          </motion.span>
          <br />
          <motion.span
            initial={{ y: 40, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                delay: 0.8,
                duration: 0.6,
                type: 'spring',
                stiffness: 100,
              },
            }}
            className='inline-block'
          >
            Guanuco
          </motion.span>
        </motion.h1>
      </motion.div>
      <AnimatePresence>
        <motion.div
          initial={{
            scale: 0,
            opacity: 0.8,
          }}
          animate={{
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.2,
              type: 'spring',
              stiffness: 50,
              damping: 15,
              duration: 0.8,
            },
          }}
          className='absolute left-[50%] h-[512px] w-[512px] -translate-x-[63%] rounded-full bg-[#F59738]'
        ></motion.div>
      </AnimatePresence>
      <motion.div
        className='flex flex-col items-center gap-y-3'
        initial={{ opacity: 0, y: 30 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 1,
            duration: 0.6,
            ease: 'easeOut',
          },
        }}
      >
        <motion.div
          className='bg-black-transparent h-[251px] w-px'
          initial={{ scaleY: 0 }}
          animate={{
            scaleY: 1,
            transition: {
              delay: 1.2,
              duration: 0.8,
              ease: 'easeOut',
            },
          }}
        ></motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{
            scale: 1,
            transition: {
              delay: 1.4,
              type: 'spring',
              stiffness: 200,
              damping: 10,
            },
          }}
          whileHover={{
            scale: 1.2,
            rotate: 5,
            transition: { duration: 0.2 },
          }}
        >
          <FaGithub className='h-10 w-10 cursor-pointer' />
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{
            scale: 1,
            transition: {
              delay: 1.6,
              type: 'spring',
              stiffness: 200,
              damping: 10,
            },
          }}
          whileHover={{
            scale: 1.2,
            rotate: -5,
            transition: { duration: 0.2 },
          }}
        >
          <IoLogoLinkedin className='h-10 w-10 cursor-pointer' />
        </motion.div>
      </motion.div>
    </div>
  );
}
