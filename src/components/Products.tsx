
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Products = () => {
  const products = [
    {
      id: 'tea',
      name: 'Premium Tea',
      description: 'Hand-picked tea leaves from the finest gardens. Available in various grades including CTC, Orthodox, and specialty blends.',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      varieties: ['CTC Tea', 'Orthodox Tea', 'Green Tea', 'Specialty Blends'],
      whatsappText: 'Hi%2C%20I%20want%20a%20quote%20for%20Premium%20Tea%20from%20HKS%20Provisions'
    },
    {
      id: 'rice',
      name: 'Quality Rice',
      description: 'Premium rice varieties including Basmati, Non-Basmati, Parboiled, and specialty rice for domestic and export markets.',
      image: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      varieties: ['Basmati Rice', 'IR64 Parboiled', 'Sona Masoori', 'Broken Rice'],
      whatsappText: 'Hi%2C%20I%20want%20a%20quote%20for%20Quality%20Rice%20from%20HKS%20Provisions'
    },
    {
      id: 'wheat',
      name: 'Premium Wheat',
      description: 'High-grade wheat for flour mills and food processing. Available in different protein content and milling quality.',
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      varieties: ['Durum Wheat', 'Soft Wheat', 'Hard Wheat', 'Organic Wheat'],
      whatsappText: 'Hi%2C%20I%20want%20a%20quote%20for%20Premium%20Wheat%20from%20HKS%20Provisions'
    },
    {
      id: 'spices',
      name: 'Aromatic Spices',
      description: 'Fresh and aromatic spices sourced from the best regions. Whole spices and ground spices for culinary and industrial use.',
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      varieties: ['Turmeric', 'Coriander', 'Cumin', 'Red Chili'],
      whatsappText: 'Hi%2C%20I%20want%20a%20quote%20for%20Aromatic%20Spices%20from%20HKS%20Provisions'
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-white to-[#DEDDF5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#2A2A6F] mb-4">
            Our Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of premium agricultural products, 
            carefully sourced and quality-tested for your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A2A6F]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#2A2A6F] mb-3 group-hover:text-[#5353AB] transition-colors">
                  {product.name}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {product.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-[#362F6F] mb-2 text-sm">Varieties:</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {product.varieties.map((variety, idx) => (
                      <span key={idx} className="text-xs bg-[#DEDDF5] px-2 py-1 rounded text-[#2A2A6F]">
                        {variety}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-[#5353AB] hover:bg-[#362F6F] text-white transition-all duration-300 transform group-hover:scale-105"
                  onClick={() => window.open(`https://wa.me/917397248389?text=${product.whatsappText}`, '_blank')}
                >
                  Get Latest Quote
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
