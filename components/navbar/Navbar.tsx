'use client';

import Link from 'next/link';
import { AnimatePresence, motion } from 'motion/react';
import { usePathname } from 'next/navigation';
import RocketAnimate from './RocketAnimate';
import { FaXmark, FaBars } from 'react-icons/fa6';
import { useState } from 'react';

const navItems = [
  { name: 'inicio', href: '/' },
  { name: 'proyectos', href: '/proyectos' },
  { name: 'contacto', href: '#contacto', page: '/' },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleToogleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className='mx-auto max-w-[1280px]'>
        <motion.button
          onClick={handleToogleMenu}
          className={`bg-orange-primary fixed top-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl`}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className='cursor-pointer'
          >
            {isOpen ? (
              <FaXmark className='h-6 w-6 text-gray-800 text-white' />
            ) : (
              <FaBars className='h-6 w-6 text-gray-800 text-white' />
            )}
          </motion.div>
        </motion.button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{
                clipPath: 'circle(28px at 52px 52px)',
                background: '#f97316',
              }}
              animate={{
                clipPath: 'circle(150% at 52px 52px)',
                background: '#FFFFFF',
              }}
              exit={{
                clipPath: 'circle(28px at 52px 52px)',
                background: '#f97316',
              }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className='fixed inset-0 z-40 h-full w-full bg-white'
            ></motion.div>
          )}
        </AnimatePresence>
        <nav className='hidden w-full items-center justify-between py-4 lg:flex'>
          <div>
            <p className='font-open-sans text-xl font-semibold'>LeoG.</p>
          </div>
          <div className='flex'>
            {navItems.map((item) => (
              <div className='relative' key={item.name}>
                <Link
                  href={
                    pathname !== '/' && item.href.startsWith('#')
                      ? (item.page ?? '/') + item.href
                      : item.href
                  }
                >
                  <p className='font-roboto px-5 py-2 text-sm capitalize'>
                    {item.name}
                  </p>
                </Link>
                <AnimatePresence mode='wait'>
                  {pathname === item.href && (
                    <motion.div
                      className='-bottom absolute left-[50%] h-[5px] w-[5px] rounded-full bg-black'
                      transition={{ type: 'spring', duration: 0.6 }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: -8 }}
                      exit={{
                        opacity: 0,
                        y: 10,
                      }}
                    ></motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
          <div>
            <RocketAnimate />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
