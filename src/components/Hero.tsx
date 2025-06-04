
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(42, 42, 111, 0.7), rgba(54, 47, 111, 0.8)), url('https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in">
          Essentials That Nourish.
          <br />
          <span className="text-[#DEDDF5]">Quality You Can Trust.</span>
        </h1>
        
        <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto opacity-90 animate-fade-in">
          Premium Tea, Rice, Wheat & Spices sourced directly from trusted farmers. 
          Your reliable partner in agro trading since inception.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button 
            size="lg"
            className="bg-[#5353AB] hover:bg-[#362F6F] text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all transform hover:scale-105 shadow-xl"
            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Products
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-[#2A2A6F] px-8 py-4 text-lg font-semibold rounded-lg transition-all transform hover:scale-105 shadow-xl"
            onClick={() => window.open('https://wa.me/917397248389?text=Hi%2C%20I%20want%20a%20quote%20from%20HKS%20Provisions', '_blank')}
          >
            Get Quote Now
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 animate-fade-in">
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-[#DEDDF5]">500+</div>
            <div className="text-sm lg:text-base opacity-80">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-[#DEDDF5]">50+</div>
            <div className="text-sm lg:text-base opacity-80">Countries Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-[#DEDDF5]">1000+</div>
            <div className="text-sm lg:text-base opacity-80">Tons Traded</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-[#DEDDF5]">99%</div>
            <div className="text-sm lg:text-base opacity-80">Quality Assured</div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
