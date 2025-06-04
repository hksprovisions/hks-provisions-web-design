
import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const products = [
    { name: 'Tea', href: '#tea' },
    { name: 'Rice', href: '#rice' },
    { name: 'Wheat', href: '#wheat' },
    { name: 'Spices', href: '#spices' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#2A2A6F] text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-[#5353AB] rounded-lg flex items-center justify-center font-bold text-xl">
              HKS
            </div>
            <span className="text-xl font-bold">HKS Provisions</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="hover:text-[#DEDDF5] transition-colors">Home</a>
            <a href="#about" className="hover:text-[#DEDDF5] transition-colors">About Us</a>
            
            {/* Products Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className="flex items-center space-x-1 hover:text-[#DEDDF5] transition-colors"
              >
                <span>Products</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {isProductsOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white text-[#2A2A6F] rounded-lg shadow-xl z-50">
                  {products.map((product) => (
                    <a
                      key={product.name}
                      href={product.href}
                      className="block px-4 py-3 hover:bg-[#DEDDF5] transition-colors"
                      onClick={() => setIsProductsOpen(false)}
                    >
                      {product.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#quality" className="hover:text-[#DEDDF5] transition-colors">Quality & Process</a>
            <a href="#certifications" className="hover:text-[#DEDDF5] transition-colors">Certifications</a>
            <a href="#why-hks" className="hover:text-[#DEDDF5] transition-colors">Why HKS?</a>
            <a href="#contact" className="hover:text-[#DEDDF5] transition-colors">Contact</a>
            
            <Button 
              className="bg-[#5353AB] hover:bg-[#362F6F] text-white px-6 py-2 rounded-lg transition-all transform hover:scale-105"
              onClick={() => window.open('https://wa.me/917397248389?text=Hi%2C%20I%20want%20a%20quote%20from%20HKS%20Provisions', '_blank')}
            >
              Get Quote
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[#5353AB]">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="hover:text-[#DEDDF5] transition-colors">Home</a>
              <a href="#about" className="hover:text-[#DEDDF5] transition-colors">About Us</a>
              <div className="space-y-2">
                <span className="font-semibold">Products:</span>
                {products.map((product) => (
                  <a
                    key={product.name}
                    href={product.href}
                    className="block pl-4 hover:text-[#DEDDF5] transition-colors"
                  >
                    {product.name}
                  </a>
                ))}
              </div>
              <a href="#quality" className="hover:text-[#DEDDF5] transition-colors">Quality & Process</a>
              <a href="#certifications" className="hover:text-[#DEDDF5] transition-colors">Certifications</a>
              <a href="#why-hks" className="hover:text-[#DEDDF5] transition-colors">Why HKS?</a>
              <a href="#contact" className="hover:text-[#DEDDF5] transition-colors">Contact</a>
              <Button 
                className="bg-[#5353AB] hover:bg-[#362F6F] text-white mt-4"
                onClick={() => window.open('https://wa.me/917397248389?text=Hi%2C%20I%20want%20a%20quote%20from%20HKS%20Provisions', '_blank')}
              >
                Get Quote
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
