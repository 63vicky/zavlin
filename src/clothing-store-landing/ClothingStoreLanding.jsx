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
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Featured Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <motion.div
                  key={item}
                  className="bg-background rounded-lg shadow-lg overflow-hidden"
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
                  <img
                    src={`./assets/product0${item}.jpg`}
                    alt={`Product ${item}`}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4 text-card-foreground">
                    <h3 className="text-xl font-semibold mb-2">
                      Product {item}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <Button>Add to Cart</Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16">
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
