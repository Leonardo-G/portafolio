'use client';

import { cn } from '@/utils/cn';
import { motion } from 'motion/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
type GridKey = 6 | 7;
interface IProps {
  title: string;
  images: string[];
  gridImages: number;
}

export default function Gallery({ title, images, gridImages = 6 }: IProps) {
  const [zoomOpen, setZoomOpen] = useState(false);
  const [currentIndexImage, setCurrentIndexImage] = useState(0);

  const handleZoomToggle = () => {
    setZoomOpen(!zoomOpen);
  };

  const gridPosition: Record<GridKey, string[]> = {
    6: [
      'col-span-2 row-span-2',
      'row-span-1',
      'row-span-1',
      'col-span-2 row-span-2',
      'row-span-2',
    ],
    7: [
      'col-span-2 row-span-2',
      'row-span-1',
      'row-span-1',
      'col-span-1 row-span-2',
      'row-span-1',
      'col-span-2 row-span-1',
      'row-span-2',
    ],
  };

  const handleNextImage = () => {
    setCurrentIndexImage(
      currentIndexImage === images.length - 1 ? 0 : currentIndexImage + 1,
    );
  };

  const handlePrevImage = () => {
    setCurrentIndexImage(
      currentIndexImage === 0 ? images.length - 1 : currentIndexImage - 1,
    );
  };

  const handleChangeImage = (index: number) => {
    if (index === currentIndexImage) return;
    setCurrentIndexImage(index);
  };

  useEffect(() => {
    if (zoomOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [zoomOpen]);

  return (
    <div className='grid h-[60vh] max-h-[600px] grid-cols-4 grid-rows-3 gap-4'>
      {zoomOpen && (
        <div
          className='scroll-none fixed inset-0 z-50 flex h-full w-full items-center justify-center bg-black/90'
          onClick={handleZoomToggle}
        >
          <div
            className='group fixed top-[5%] right-[2%] z-50 inline-block cursor-pointer rounded-full bg-white/20 p-4 transition duration-300 hover:bg-white/30'
            onClick={handleZoomToggle}
          >
            <RxCross2 className='text-white transition-all duration-300 group-hover:scale-120' />
          </div>
          <div
            className='group top-inset fixed right-[2%] z-50 inline-block cursor-pointer rounded-full bg-white/20 p-4 transition duration-300 hover:bg-white/30'
            onClick={(e) => {
              e.stopPropagation();
              handleNextImage();
            }}
          >
            <FaChevronRight className='text-white transition-all duration-300 group-hover:scale-120' />
          </div>
          <div
            className='group top-inset fixed left-[2%] z-50 inline-block cursor-pointer rounded-full bg-white/20 p-4 transition duration-300 hover:bg-white/30'
            onClick={(e) => {
              e.stopPropagation();
              handlePrevImage();
            }}
          >
            <FaChevronLeft className='text-white transition-all duration-300 group-hover:scale-120' />
          </div>
          <motion.div
            key={currentIndexImage}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className='relative h-[70%] w-[70%]'
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[currentIndexImage] || '/placeholder.svg'}
              alt={`${title} - Vista ${currentIndexImage + 1}`}
              fill
              className='rounded-lg object-contain object-center select-none'
              priority
            />
          </motion.div>
        </div>
      )}
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={cn(
            'group relative cursor-pointer overflow-hidden rounded-lg shadow-xl',
            gridPosition[gridImages as GridKey][index],
          )}
          onClick={() => {
            handleZoomToggle();
            setCurrentIndexImage(index);
          }}
        >
          <Image
            src={image || '/placeholder.svg'}
            alt={`${title} - Vista ${index + 1}`}
            fill
            className='object-cover transition-all duration-300 ease-out select-none group-hover:scale-105 group-hover:brightness-90'
          />

          <div className='absolute top-1/2 left-1/2 z-10 flex -translate-1/2 items-center justify-center rounded-full bg-black/50 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
            <FaExternalLinkAlt className='h-4 w-4 text-gray-300' />
          </div>
        </motion.div>
      ))}
      {zoomOpen && (
        <div className='fixed bottom-10 left-0 z-50 mt-2 flex h-4 w-4 w-full items-center justify-center gap-5 text-center text-sm text-gray-300'>
          {Array.from({ length: images.length }, (_, idx) => idx + 1).map(
            (num) => (
              <div
                onClick={() => handleChangeImage(num - 1)}
                className={cn(
                  'transtion-all rounded-full duration-300',
                  currentIndexImage === num - 1
                    ? 'h-4 w-4 bg-white/80'
                    : 'h-2 w-2 cursor-pointer bg-white/50 hover:scale-150',
                )}
                key={num}
              ></div>
            ),
          )}
        </div>
      )}
    </div>
  );
}
