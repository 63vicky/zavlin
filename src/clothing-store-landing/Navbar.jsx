'use client';

import { useState, useEffect } from 'react';
import { ShoppingBag, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './Theme-toggle';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-sm shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1
          className={`text-2xl font-bold transition-colors duration-300 ${
            isScrolled ? 'text-foreground' : 'text-primary-foreground'
          }`}
        >
          FashionFusion
        </h1>
        <nav className="hidden md:flex space-x-4">
          {['Home', 'Shop', 'About', 'Contact'].map((item) => (
            <a
              key={item}
              href="#"
              className={`transition-colors duration-300 ${
                isScrolled
                  ? 'text-foreground hover:text-primary'
                  : 'text-primary-foreground hover:text-primary-foreground/80'
              }`}
            >
              {item}
            </a>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <ThemeToggle
            className={isScrolled ? '' : 'text-primary-foreground'}
          />
          <Button
            variant="ghost"
            size="icon"
            className={isScrolled ? '' : 'text-primary-foreground'}
          >
            <ShoppingBag className="h-6 w-6" />
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={`md:hidden ${
                  isScrolled ? '' : 'text-primary-foreground'
                }`}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>Navigate through our store</SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col space-y-4 mt-6">
                {['Home', 'Shop', 'About', 'Contact'].map((item) => (
                  <a key={item} href="#" className="hover:text-primary">
                    {item}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
