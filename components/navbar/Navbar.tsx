"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "inicio", href: "/" },
  { name: "proyectos", href: "/proyectos" },
  { name: "contacto", href: "/contacto" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="max-w-6xl  mx-auto">
      <nav className="w-full flex justify-around">
        <div>
          <p>LeoG.</p>
        </div>
        <div className="flex gap-5">
          {navItems.map((item) => (
            <div className="relative" key={item.name}>
              <Link href={item.href}>
                <p>{item.name}</p>
              </Link>
                <AnimatePresence mode="wait">
              {pathname === item.href && (
                  <motion.div
                    className="absolute -bottom left-[50%] rounded-full h-[5px] w-[5px] bg-black"
                    transition={{ type: "spring", duration: 0.6 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ 
                      opacity: 0,
                      y: 10,}}
                  ></motion.div>
                )}
                </AnimatePresence>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
