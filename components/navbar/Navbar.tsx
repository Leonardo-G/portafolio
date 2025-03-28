'use client';

import Link from 'next/link';
import { AnimatePresence, motion } from 'motion/react';
import { usePathname } from 'next/navigation';
import RocketAnimate from './RocketAnimate';

const navItems = [
  { name: 'inicio', href: '/' },
  { name: 'proyectos', href: '/proyectos' },
  { name: 'contacto', href: '/contacto' },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className='mx-auto max-w-6xl'>
      <nav className='flex w-full items-center justify-between py-4'>
        <div>
          <p className='font-open-sans text-xl font-semibold'>LeoG.</p>
        </div>
        <div className='flex'>
          {navItems.map((item) => (
            <div className='relative' key={item.name}>
              <Link href={item.href}>
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
  );
};

export default Navbar;
