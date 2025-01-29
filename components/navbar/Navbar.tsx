'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isDark, setIsDark] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  const navItems = [
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ]

  const DesktopNav = () => (
    <nav className="hidden md:flex items-center justify-center gap-12">
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="relative group"
          onMouseEnter={() => setHoveredItem(item.name)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <motion.span
            className={`text-sm relative z-10 transition-colors duration-300
              ${pathname === item.href 
                ? 'text-gray-900 dark:text-white' 
                : 'text-gray-600 dark:text-gray-400'}`}
          >
            {item.name}
          </motion.span>

          <AnimatePresence>
            {hoveredItem === item.name && (
              <motion.span
                className="absolute -inset-x-4 -inset-y-2 bg-gray-100 dark:bg-gray-800 rounded-full z-0"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
          </AnimatePresence>

          {pathname === item.href && (
            <motion.span
              layoutId="activeIndicator"
              className="absolute -bottom-1 left-0 right-0 h-px bg-gray-900 dark:bg-white"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
        </Link>
      ))}
    </nav>
  )

  const MobileNav = () => (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="absolute top-full left-0 right-0 bg-white dark:bg-gray-950 py-4 px-6 shadow-lg"
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`block py-2 text-lg ${
                pathname === item.href
                  ? 'text-gray-900 dark:text-white font-medium'
                  : 'text-gray-600 dark:text-gray-400'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </motion.nav>
      )}
    </AnimatePresence>
  )

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center h-20 px-6 md:px-12"
    >
      <div className="absolute inset-0 bg-white/50 dark:bg-gray-950/50 backdrop-blur-md" />
      
      <Link href="/" className="relative z-10 text-xl font-bold text-gray-900 dark:text-white">
        LG
      </Link>

      <DesktopNav />
      
      <div className="relative z-10 flex items-center gap-4">
        <motion.button
          onClick={() => setIsDark(!isDark)}
          className={`relative w-8 h-8 rounded-full flex items-center justify-center
            ${isDark 
              ? 'bg-gray-800 text-yellow-400' 
              : 'bg-yellow-400 text-gray-900'}`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={isDark ? 'moon' : 'sun'}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ duration: 0.2 }}
            >
              {isDark ? <Moon size={16} /> : <Sun size={16} />}
            </motion.span>
          </AnimatePresence>
        </motion.button>

        <motion.button
          className="md:hidden text-gray-900 dark:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      <MobileNav />
    </motion.header>
  )
}

export default Navbar

