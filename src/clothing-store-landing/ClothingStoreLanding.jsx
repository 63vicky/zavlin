'use client';

import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import {
  ShoppingBag,
  Menu,
  X,
  Instagram,
  Facebook,
  Twitter,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { ThemeProvider } from './Theme-provider';
import Navbar from './Navbar';
import img1 from '../assets/product01.jpg';
import img2 from '../assets/product02.jpg';
import img3 from '../assets/product03.jpg';
import img4 from '../assets/product02.jpg';
import img5 from '../assets/product01.jpg';
import img6 from '../assets/product03.jpg';
import ProductCarousel from './ProductCarousel';
import TimedCarousel from '../components/timed-carousel';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

// 3D Model component
export function Model() {
  const { scene } = useGLTF(
    'src/assets/tripo_pbr_model_df0d8c31-cdd5-4277-b218-64bb8f8d704b.glb'
  );
  return <primitive object={scene} scale={6} />;

  // return (
  //   <mesh>
  //     <boxGeometry args={[1, 1, 1]} />
  //     <meshStandardMaterial color="white" />
  //   </mesh>
  // );
}

const products = [
  {
    id: 1,
    name: 'Product 1',
    image: img1,
    price: '$30',
    salePrice: '$25',
  },
  {
    id: 2,
    name: 'Product 2',
    image: img2,
    price: '$30',
    salePrice: '$25',
  },
  {
    id: 3,
    name: 'Product 3',
    image: img3,
    price: '$30',
    salePrice: '$25',
  },
  {
    id: 4,
    name: 'Product 4',
    image: img4,
    price: '$40',
    salePrice: '$35',
  },
  {
    id: 5,
    name: 'Product 5',
    image: img5,
    price: '$30',
    salePrice: '$25',
  },
  {
    id: 6,
    name: 'Product 6',
    image: img6,
    price: '$60',
    salePrice: '$25',
  },
];

function ChevronLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

export default function ClothingStoreLanding() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="ui-theme">
      <div className="min-h-screen bg-background text-foreground">
        {/* Header */}
        <Navbar />

        {/* Hero Section with 3D Model */}

        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/20 z-10">
            <div className="container h-full mx-auto px-4 relative z-20 pt-16">
              <TimedCarousel />
            </div>
          </div>
        </section>
        {/* Featured Products */}
        <section className="py-16 overflow-x-hidden">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Featured Products
            </h2>
            <div className="">
              <Carousel
                className="w-full mx-auto"
                options={{
                  align: 'center',
                  loop: true,
                  slidesToScroll: 1,
                  slidesToShow: { base: 2, md: 2, lg: 3 },
                  spacing: 16,
                }}
              >
                <CarouselContent>
                  {products.map((item) => (
                    <CarouselItem key={item.id} className="basis-1/3">
                      <Card className="border-0 border-gray-200 dark:border-gray-800">
                        <CardContent className="p-6 flex items-center justify-center aspect-square flex-col">
                          <motion.div
                            className="overflow-hidden"
                            initial={{
                              opacity: 0,
                              y: 50,
                              ...(item.id === 1 && {
                                x: -50,
                                y: 0,
                              }),
                              ...(item.id === 3 && {
                                x: 50,
                                y: 0,
                              }),
                            }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: false }}
                          >
                            <div className="w-full h-fit group">
                              <div className="relative overflow-hidden">
                                <img
                                  className="h-96 w-full object-cover"
                                  src={item.image}
                                  alt=""
                                />
                                <div className="absolute h-auto w-full flex items-end justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                  <button className="text-white py-2 bg-black/40 px-5 w-full">
                                    Add to cart
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="flex justify-between flex-col items-center px-2 py-1">
                              <h2 className="mt-1 text-xl capitalize">
                                {item.name}
                              </h2>
                              <div>
                                <del className="text-red-700 text-lg">
                                  {item.price}
                                </del>
                                <p className="text-xl ml-1 inline-block">
                                  {item.salePrice}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
                  <Button variant="outline" size="icon">
                    <ChevronLeftIcon className="h-6 w-6" />
                    <span className="sr-only">Previous</span>
                  </Button>
                </CarouselPrevious>
                <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10">
                  <Button variant="outline" size="icon">
                    <ChevronRightIcon className="h-6 w-6" />
                    <span className="sr-only">Next</span>
                  </Button>
                </CarouselNext>
              </Carousel>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <motion.div
              className="flex flex-col md:flex-row items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
            >
              <div className="md:w-1/2 mb-8 md:mb-0">
                <img
                  src="../src/assets/06_AboutUs_Fabrics2_410x.webp"
                  alt="About Us"
                  className="rounded-lg shadow-lg max-h-[70vh] w-full object-cover"
                />
              </div>
              <div className="md:w-1/2 md:pl-8">
                <h2 className="text-3xl font-bold mb-4">About FashionFusion</h2>
                <p className="text-lg mb-6">
                  We are passionate about bringing you the latest trends and
                  timeless classics. Our curated collection ensures that you'll
                  always find something to express your unique style.
                </p>
                <Button variant="outline">Learn More</Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Stay Updated
            </h2>
            <form className="max-w-md mx-auto flex gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-grow"
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-muted py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h2 className="text-2xl font-bold">FashionFusion</h2>
                <p className="text-muted-foreground">Your style, your way</p>
              </div>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon">
                  <Instagram className="h-6 w-6" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Facebook className="h-6 w-6" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Twitter className="h-6 w-6" />
                </Button>
              </div>
            </div>
            <div className="mt-8 text-center text-muted-foreground">
              <p>&copy; 2024 FashionFusion. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}
