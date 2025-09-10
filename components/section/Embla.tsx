'use client';
import React, { useCallback } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

type PropType = {
  slides: string[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const handleScrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const handleScrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  return (
    <div className='flex items-center gap-x-2'>
      <div className='cursor-pointer' onClick={handleScrollPrev}>
        <IoIosArrowBack />
      </div>
      <section className='embla overflow-hidden'>
        <div className='overflow-hidden' ref={emblaRef}>
          <div className='font-open-sans flex gap-x-3'>
            {slides.map((value) => (
              <div
                className='bg-grey-badge rounded-[30px] px-4 py-1'
                key={value}
              >
                <div className='text-xs select-none'>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className='cursor-pointer' onClick={handleScrollNext}>
        <IoIosArrowForward />
      </div>
    </div>
  );
};

export default EmblaCarousel;
