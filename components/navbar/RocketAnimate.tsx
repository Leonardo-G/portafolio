"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Rocket } from "lucide-react";

export default function RocketAnimate() {
  const [isLaunching, setIsLaunching] = useState(false);

  const handleRocketClick = () => {
    if (!isLaunching) {
      setIsLaunching(true);
      setTimeout(() => {
        setIsLaunching(false);
      }, 2000);
    }
  };
  return (
    <div
      className="p-2 rounded-full hover:bg-muted transition-colors cursor-pointer relative"
      onClick={handleRocketClick}
    >
      <motion.div
        animate={
          isLaunching
            ? {
                y: [-5, -20, -5],
                rotate: [0, 10, -10, 0],
                scale: [1, 1.2, 1],
              }
            : {}
        }
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.5, 1],
        }}
        className="relative"
      >
        <Rocket className="h-5 w-5 text-primary" />

        {isLaunching && (
          <motion.div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-4 z-[-1]"
            initial={{ opacity: 0, y: 0 }}
            animate={{
              opacity: [0, 1, 0.8, 0],
              y: [0, 4, 8, 12],
              width: [3, 5, 3, 1],
            }}
            transition={{
              repeat: 3,
              duration: 0.6,
              ease: "easeOut",
            }}
          >
            <div className="w-full h-full bg-gradient-to-t from-orange-500 via-yellow-400 to-transparent rounded-full" />
          </motion.div>
        )}
      </motion.div>

      {/* Humo */}
      {isLaunching && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[-1]">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gray-200/70"
              initial={{
                width: 3,
                height: 3,
                x: 0,
                y: 0,
                opacity: 0,
              }}
              animate={{
                width: [3, 6, 8],
                height: [3, 6, 8],
                x: [0, (i % 2 === 0 ? 5 : -5) * (i + 1)],
                y: [0, 10 + i * 3],
                opacity: [0, 0.7, 0],
              }}
              transition={{
                delay: i * 0.1,
                duration: 1.5,
                ease: "easeOut",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
