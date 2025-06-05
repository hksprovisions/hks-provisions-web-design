
import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const products = [
    { name: 'Tea', href: '/products/tea' },
    { name: 'Rice', href: '/products/rice' },
    { name: 'Wheat', href: '/products/wheat', component: 'Wheat' },
    { name: 'Spices', href: '/products/spices', component: 'Spices' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg border-b border-purple-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/ad705d13-8959-4a70-a1d6-5494972129a5.png" 
              alt="HKS Provisions Logo" 
              className="h-16 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Home</a>
            <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">About Us</a>
            
            {/* Products Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 transition-colors font-medium"
              >
                <span>Products</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {isProductsOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl z-50 border border-purple-100">
                  {products.map((product) => (
                    <a
                      key={product.name}
                      href={product.href}
                      className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                      onClick={() => setIsProductsOpen(false)}
                    >
                      {product.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#quality" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Quality & Process</a>
            <a href="#certifications" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Certifications</a>
            <a href="#why-hks" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Why HKS?</a>
            <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Contact</a>
            
            <Button 
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-all transform hover:scale-105"
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
          <div className="lg:hidden py-4 border-t border-purple-100">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-purple-600 transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors">About Us</a>
              <div className="space-y-2">
                <span className="font-semibold text-gray-700">Products:</span>
                {products.map((product) => (
                  <a
                    key={product.name}
                    href={product.href}
                    className="block pl-4 text-gray-700 hover:text-purple-600 transition-colors"
                  >
                    {product.name}
                  </a>
                ))}
              </div>
              <a href="#quality" className="text-gray-700 hover:text-purple-600 transition-colors">Quality & Process</a>
              <a href="#certifications" className="text-gray-700 hover:text-purple-600 transition-colors">Certifications</a>
              <a href="#why-hks" className="text-gray-700 hover:text-purple-600 transition-colors">Why HKS?</a>
              <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">Contact</a>
              <Button 
                className="bg-purple-600 hover:bg-purple-700 text-white mt-4"
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
