'use client';

import { useState, useEffect } from 'react';
import { ShoppingBag, Menu, Heart, User } from 'lucide-react';
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
import Logo from '../assets/zavlish-removebg-preview.png';
import LogoVid from '../assets/LogoV.mp4';

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
            isScrolled ? 'text-foreground' : 'text-foreground'
          }`}
        >
          {isScrolled ? (
            <video
              width={'50'}
              height={50}
              muted
              playsInline
              autoPlay="true"
              loading="lazy"
            >
              <source src={LogoVid} type="video/mp4" />
            </video>
          ) : (
            <img
              src={Logo}
              className="max-w-[150px] dark:invert"
              loading="lazy"
            />
          )}
          {/* {isScrolled ? '' : 'Zevlin'} */}
        </h1>
        <nav className="hidden md:flex space-x-4">
          {['Home', 'Shop', 'About', 'Contact'].map((item) => (
            <div key={item} className="relative group">
              <a
                href="#"
                className={`transition-colors duration-300 font-semibold ${
                  isScrolled
                    ? 'text-foreground hover:text-primary/70'
                    : 'text-foreground/70 hover:text-foreground'
                }`}
              >
                {item}
                <span
                  className={`block max-w-0 group-hover:max-w-full transition-all duration-500 h-[2px] ${
                    isScrolled
                      ? 'bg-foreground group-hover:bg-primary/70'
                      : 'bg-foreground/70 group-hover:bg-foreground'
                  }`}
                ></span>
              </a>
            </div>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <ThemeToggle
            className={isScrolled ? 'text-foreground' : 'text-foreground/70'}
          />
          <Button
            variant="ghost"
            size="icon"
            className={`md:flex hidden ${
              isScrolled ? 'text-foreground' : 'text-foreground/70'
            }`}
          >
            <ShoppingBag className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={`md:flex hidden ${
              isScrolled ? 'text-foreground' : 'text-foreground/70'
            }`}
          >
            <Heart className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={`md:flex hidden ${
              isScrolled ? 'text-foreground' : 'text-foreground/70'
            }`}
          >
            <User className="h-6 w-6" />
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={`md:hidden ${
                  isScrolled ? 'text-foreground' : 'text-foreground/70'
                }`}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>
                  <Button
                    variant="ghost"
                    size="icon"
                    className={
                      isScrolled ? 'text-foreground' : 'text-foreground/70'
                    }
                  >
                    <ShoppingBag className="h-6 w-6" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className={
                      isScrolled ? 'text-foreground' : 'text-foreground/70'
                    }
                  >
                    <Heart className="h-6 w-6" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className={
                      isScrolled ? 'text-foreground' : 'text-foreground/70'
                    }
                  >
                    <User className="h-6 w-6" />
                  </Button>
                </SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col space-y-4 mt-6">
                {['Home', 'Shop', 'About', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="hover:text-primary relative group w-fit mx-auto"
                  >
                    {item}
                    <span
                      className={`block max-w-0 group-hover:max-w-full transition-all duration-500 h-[2px] ${
                        isScrolled
                          ? 'bg-foreground group-hover:bg-primary/70'
                          : 'bg-foreground/70 group-hover:bg-foreground'
                      }`}
                    ></span>
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
