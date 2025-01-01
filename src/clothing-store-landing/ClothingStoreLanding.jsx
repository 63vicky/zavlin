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
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { ThemeProvider } from './Theme-provider';
import { ThemeToggle } from './Theme-toggle';
import Navbar from './Navbar';
import { HeroCarousel } from './HeroCarousel';
import img1 from '../assets/product01.jpg';
import img2 from '../assets/product02.jpg';
import img3 from '../assets/product03.jpg';
import ProductCarousel from './ProductCarousel';

// 3D Model component
function Model() {
  // const { scene } = useGLTF('/assets/3d/duck.glb');
  // return <primitive object={scene} scale={2} />;

  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="white" />
    </mesh>
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/20 z-10"></div>
          <div className="container mx-auto px-4 relative z-20 pt-16">
            <HeroCarousel />
          </div>
        </section>
        {/* Featured Products */}
        <section className="py-16 overflow-x-hidden">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Featured Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5].map((item) => (
                <motion.div
                  key={item}
                  className="overflow-hidden"
                  initial={{
                    opacity: 0,
                    y: 50,
                    ...(item === 1 && {
                      x: -50,
                      y: 0,
                    }),
                    ...(item === 3 && {
                      x: 50,
                      y: 0,
                    }),
                  }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: false }}
                >
                  {/* <img
                    src={`./assets/product0${item}.jpg`}
                    alt={`Product ${item}`}
                    className="w-full h-full object-cover hover:"
                  /> */}
                  {/* <a
                    className="relative flex h-80 w-auto overflow-hidden rounded-xl"
                    href="#"
                  >
                    <img
                      className="peer absolute top-0 right-0 h-full w-full object-cover"
                      src={`./assets/product0${item}.jpg`}
                      alt="product image"
                    />
                    <img
                      className="peer peer-hover:bottom-0 absolute -bottom-[20rem] h-full w-full object-cover transition-all delay-100 duration-1000 hover:bottom-0"
                      src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                      alt="product image"
                    />
                  </a> */}

                  <div className="w-full h-fit group">
                    <div className="relative overflow-hidden">
                      <img
                        className="h-96 w-full object-cover"
                        src={img1}
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
                    <h2 className="mt-1 text-xl capitalize">Straw Hat</h2>
                    <div>
                      <del className="text-red-700 text-lg">$49</del>
                      <p className="text-xl ml-1 inline-block">$35</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <ProductCarousel />
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
                  src="/placeholder.svg?height=400&width=600"
                  alt="About Us"
                  className="rounded-lg shadow-lg"
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
