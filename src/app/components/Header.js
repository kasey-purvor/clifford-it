'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-clifford-navy text-clifford-white shadow-lg' 
          : 'bg-transparent text-clifford-white'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          {/* Logo */}
          <div className="flex items-center">
            <div className="mr-3">
              <Image
                src="/logo_black_no_background.png"
                alt="Clifford IT Logo"
                width={120}
                height={120}
                priority
                className="object-contain filter invert brightness-0 contrast-100"
                style={{
                  filter: 'invert(1) brightness(2) contrast(1)'
                }}
              />
            </div>
            <h1 className="text-xl font-bold">Clifford IT</h1>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a 
              href="#services" 
              className={`transition-colors ${
                isScrolled 
                  ? 'hover:text-clifford-blue' 
                  : 'hover:text-clifford-blue hover:drop-shadow-sm'
              }`}
            >
              Services
            </a>
            <a 
              href="#about" 
              className={`transition-colors ${
                isScrolled 
                  ? 'hover:text-clifford-blue' 
                  : 'hover:text-clifford-blue hover:drop-shadow-sm'
              }`}
            >
              About
            </a>
            <a 
              href="#contact" 
              className={`transition-colors ${
                isScrolled 
                  ? 'hover:text-clifford-blue' 
                  : 'hover:text-clifford-blue hover:drop-shadow-sm'
              }`}
            >
              Contact
            </a>
          </nav>
          
          {/* Mobile menu button */}
          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
} 