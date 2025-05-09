'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <main className='relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-white p-4 dark:bg-gray-950'>
      <div className='pointer-events-none absolute inset-0 opacity-5 dark:opacity-10'>
        <div className="bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4xNSI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2MWgtMXYtMXptLTIgMmgxdjFoLTF2LTF6bS0yLTJoMXYxaC0xdi0xem0yLTJoMXYxaC0xdi0xem0tMiAyaDF2MWgtMXYtMXptLTItMmgxdjFoLTF2LTF6bTIgMGgxdjFoLTF2LTF6bS0yIDRoMXYxaC0xdi0xem0yIDBo'+ 'MXYxaC0xdi0xem0tMi0yaDF2MWgtMXYtMXptMiAwaDJ2MWgtMnYtMXptLTIgMmgxdjFoLTF2LTF6bTQtMmgxdjFoLTF2LTF6bTIgMGgxdjFoLTF2LTF6bS0yIDJoMXYxaC0xdi0xem0yIDBo'+ 'MXYxaC0xdi0xem0tMi0yaDF2MWgtMXYtMXptMiAwaDJ2MWgtMnYtMXptLTIgMmgxdjFoLTF2LTF6Ii8+PC9nPjwvZz48L3N2Zz4=')] dark:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xNSI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2MWgtMXYtMXptLTIgMmgxdjFoLTF2LTF6bS0yLTJoMXYxaC0xdi0xem0yLTJoMXYxaC0xdi0xem0tMiAyaDF2MWgtMXYtMXptLTItMmgxdjFoLTF2LTF6bTIgMGgxdjFoLTF2LTF6bS0yIDRoMXYxaC0xdi0xem0yIDBo'+ 'MXYxaC0xdi0xem0tMi0yaDF2MWgtMXYtMXptMiAwaDJ2MWgtMnYtMXptLTIgMmgxdjFoLTF2LTF6bTQtMmgxdjFoLTF2LTF6bTIgMGgxdjFoLTF2LTF6bS0yIDJoMXYxaC0xdi0xem0yIDBo'+ 'MXYxaC0xdi0xem0tMi0yaDF2MWgtMXYtMXptMiAwaDJ2MWgtMnYtMXptLTIgMmgxdjFoLTF2LTF6Ii8+PC9nPjwvZz48L3N2Zz4=')] absolute inset-0"></div>
      </div>

      <motion.div
        animate={{
          x: [0, 10, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: 'reverse',
        }}
        className='absolute top-1/4 left-1/4 h-32 w-32 rounded-full bg-orange-400/10 blur-xl dark:bg-orange-500/10'
      />

      <motion.div
        animate={{
          x: [0, -15, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 7,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: 'reverse',
        }}
        className='absolute right-1/4 bottom-1/4 h-40 w-40 rounded-full bg-orange-400/10 blur-xl dark:bg-orange-500/10'
      />

      <div className='relative z-10 w-full max-w-3xl text-center'>
        <div
          ref={containerRef}
          className='relative mb-8 inline-block'
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <motion.h1
            className='text-[12rem] leading-none font-bold text-gray-900 select-none md:text-[16rem] dark:text-gray-100'
            animate={isHovering ? { scale: 1.05 } : { scale: 1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
          >
            404
          </motion.h1>

          <motion.div
            className='absolute inset-0 rounded-full bg-orange-400 opacity-20 mix-blend-multiply blur-3xl dark:bg-orange-500 dark:mix-blend-screen'
            animate={{
              scale: isHovering ? [1, 1.2, 1] : 1,
              opacity: isHovering ? [0.2, 0.3, 0.2] : 0.2,
            }}
            transition={{
              duration: 2,
              repeat: isHovering ? Number.POSITIVE_INFINITY : 0,
              repeatType: 'reverse',
            }}
          />
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className='mb-6 text-3xl font-light text-gray-800 md:text-4xl dark:text-gray-200'
        >
          Página no encontrada
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className='mx-auto mb-10 max-w-lg text-lg text-gray-600 dark:text-gray-400'
        >
          Territorio desconocido. La página que buscas ha desaparecido o nunca
          existió.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Link
            href='/'
            className='inline-flex items-center gap-2 rounded-full bg-orange-400 px-6 py-3 text-white shadow-lg shadow-orange-400/20 transition-colors duration-300 hover:bg-orange-500 dark:bg-orange-500 dark:shadow-orange-500/20 dark:hover:bg-orange-600'
          >
            <ArrowLeft size={18} />
            Volver al inicio
          </Link>
        </motion.div>
      </div>

      {/* Cursor */}
      <motion.div
        className='pointer-events-none fixed z-50 hidden h-6 w-6 rounded-full border-2 border-orange-400 md:block dark:border-orange-500'
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ duration: 0.2 }}
      />
    </main>
  );
}
