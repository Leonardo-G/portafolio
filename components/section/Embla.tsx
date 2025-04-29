'use client';
import React from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';

type PropType = {
  slides: string[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides } = props;
  const [emblaRef] = useEmblaCarousel();

  return (
    <section className='embla'>
      <div className='overflow-hidden' ref={emblaRef}>
        <div className='font-open-sans flex gap-x-3'>
          {slides.map((value) => (
            <div className='bg-grey-badge rounded-[30px] px-4 py-1' key={value}>
              <p className='text-xs'>{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
