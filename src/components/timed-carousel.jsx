'use client';

import { useState, useEffect, useCallback, useRef, memo } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ThreeDModelCarousel } from '../clothing-store-landing/3d-model-carousel';
import { motion } from 'framer-motion';

const slides = [
  {
    id: 1,
    title: 'Discover Your Style',
    description: 'Explore our latest collection and find your perfect look.',
    buttonText: 'Shop Now',
    modelIndex: 0,
    duration: 5000,
  },
  {
    id: 2,
    title: 'Summer Collection',
    description: 'Beat the heat with our cool and comfortable summer wear.',
    buttonText: 'View Collection',
    modelIndex: 1,
    duration: 5000,
  },
  {
    id: 3,
    title: 'Accessories Galore',
    description: 'Complete your look with our stunning accessories.',
    buttonText: 'Shop Accessories',
    modelIndex: 2,
    duration: 5000,
  },
];
export default function TimedCarousel() {
  const [api, setApi] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);

  const goToNextSlide = useCallback(() => {
    if (api) {
      const nextIndex = (currentSlide + 1) % slides.length;
      api.scrollTo(nextIndex);
    }
  }, [api, currentSlide]);

  const startTimer = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    const slideDuration = slides[currentSlide].duration;

    intervalRef.current = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(intervalRef.current);
          return 100; // Stop at 100% and let useEffect handle the transition
        }
        return prevProgress + 100 / (slideDuration / 100);
      });
    }, 100);
  }, [currentSlide]);

  useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      setCurrentSlide(api.selectedScrollSnap());
      setProgress(0);
    };

    api.on('select', handleSelect);

    return () => {
      api.off('select', handleSelect);
    };
  }, [api]);

  useEffect(() => {
    if (isHovered) {
      if (intervalRef.current) clearInterval(intervalRef.current);
    } else {
      startTimer();
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered, startTimer]);

  useEffect(() => {
    startTimer();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [currentSlide, startTimer]);

  useEffect(() => {
    if (progress >= 100) {
      goToNextSlide();
      setProgress(0); // Reset progress after transitioning
    }
  }, [progress, goToNextSlide]);

  const goToSlide = (index) => {
    api?.scrollTo(index);
    setProgress(0);
  };

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  return (
    <div className="w-full h-full flex flex-col mx-auto mb-4">
      <Carousel
        setApi={setApi}
        opts={{
          watchDrag: false,
        }}
        className="w-full h-full"
      >
        <CarouselContent
          className="relative top-[100%] -translate-y-[50%]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {slides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div className="flex flex-col-reverse md:flex-row items-center justify-between h-full ">
                <div className="md:w-1/2 z-10 select-none">
                  <motion.h2
                    className="text-4xl md:text-6xl font-bold mb-4 text-primary"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    {slide.title}
                  </motion.h2>
                  <motion.p
                    className="text-xl mb-8 text-primary/90"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    {slide.description}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <Button size="lg">{slide.buttonText}</Button>
                  </motion.div>
                </div>
                <div className="md:w-1/2">
                  <ThreeDModelCarousel initialSlide={slide.modelIndex} />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex justify-center mt-4 mb-4 space-x-2 md:w-1/2 mx-auto">
        {slides.map((_, index) => (
          <Button
            key={index}
            variant=""
            size="sm"
            className={`w-[40px] flex justify-start h-1 p-0 hover:bg-primary-foreground ${
              currentSlide === index ? 'bg-primary' : ''
            }`}
            onClick={() => goToSlide(index)}
          >
            {currentSlide === index && <ProgressBar progress={progress} />}
          </Button>
        ))}
      </div>
    </div>
  );
}
const ProgressBar = ({ progress }) => (
  <div
    className="bg-background border h-full transition-all duration-100 ease-linear"
    style={{ width: `${progress}%` }}
  />
);

ProgressBar.displayName = 'ProgressBar';
