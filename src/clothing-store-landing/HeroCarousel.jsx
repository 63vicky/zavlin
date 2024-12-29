'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { ThreeDModelCarousel } from './3d-model-carousel';

const HeroSlide = ({ title, description, buttonText, modelIndex }) => (
  <div className="flex flex-col md:flex-row items-center justify-between h-full">
    <div className="md:w-1/2 z-10 select-none">
      <motion.h2
        className="text-4xl md:text-6xl font-bold mb-4 text-primary-foreground"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {title}
      </motion.h2>
      <motion.p
        className="text-xl mb-8 text-primary-foreground/90"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {description}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Button size="lg">{buttonText}</Button>
      </motion.div>
    </div>
    <div className="md:w-1/2">
      <ThreeDModelCarousel initialSlide={modelIndex} />
    </div>
  </div>
);

export function HeroCarousel() {
  const slides = [
    {
      title: 'Discover Your Style',
      description: 'Explore our latest collection and find your perfect look.',
      buttonText: 'Shop Now',
      modelIndex: 0,
    },
    {
      title: 'Summer Collection',
      description: 'Beat the heat with our cool and comfortable summer wear.',
      buttonText: 'View Collection',
      modelIndex: 1,
    },
    {
      title: 'Accessories Galore',
      description: 'Complete your look with our stunning accessories.',
      buttonText: 'Shop Accessories',
      modelIndex: 2,
    },
  ];

  return (
    <Carousel
      opts={{
        watchDrag: false,
      }}
      className="w-full"
    >
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index}>
            <HeroSlide {...slide} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
