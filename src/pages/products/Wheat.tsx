
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Package, Globe, Wheat as WheatIcon, Shield } from 'lucide-react';
import { SecurityUtils } from '@/utils/security';
import { ProductionConfig } from '@/config/production';

const Wheat = () => {
  const navigate = useNavigate();
  const [isSecureConnection, setIsSecureConnection] = useState(false);
  const [rateLimiter] = useState(() => SecurityUtils.createRateLimiter(3000, 5));

  useEffect(() => {
    setIsSecureConnection(SecurityUtils.isSecureConnection());
    
    if (SecurityUtils.isProduction()) {
      console.log('Production mode: Security measures active');
    }
  }, []);

  const millingWheat = [
    {
      id: 'lokwan',
      name: 'Lokwan Wheat',
      description: 'Premium quality wheat with excellent milling characteristics and high protein content.',
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      moq: '1 Container (25 MT)',
      port: 'Mundra/JNPT'
    },
    {
      id: 'sharbati',
      name: 'Sharbati Wheat',
      description: 'Golden color wheat with superior milling quality, ideal for chapatis and breads.',
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      moq: '1 Container (25 MT)',
      port: 'Mundra/JNPT'
    },
    {
      id: 'mp-grade-a',
      name: 'MP Grade A',
      description: 'High-grade Madhya Pradesh wheat with consistent quality and good protein levels.',
      image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      moq: '1 Container (25 MT)',
      port: 'Mundra/JNPT'
    },
    {
      id: 'durum-wheat',
      name: 'Durum Wheat',
      description: 'Hard wheat variety perfect for pasta, semolina, and premium food products.',
      image: 'https://images.unsplash.com/photo-1592568544459-2b4f5b2eb7af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      moq: '1 Container (25 MT)',
      port: 'Mundra/JNPT'
    },
    {
      id: 'rajasthan-golden',
      name: 'Rajasthan Golden',
      description: 'Premium golden wheat from Rajasthan with excellent baking properties.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      moq: '1 Container (25 MT)',
      port: 'Mundra/Kandla'
    },
    {
      id: 'gujarat-wheat',
      name: 'Gujarat Wheat',
      description: 'High-quality wheat from Gujarat with good test weight and protein content.',
      image: 'https://images.unsplash.com/photo-1533725797859-97b6fed72a7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      moq: '1 Container (25 MT)',
      port: 'Mundra/Kandla'
    }
  ];

  const processedWheat = [
    {
      id: 'whole-wheat-flour',
      name: 'Whole Wheat Flour (Atta)',
      description: 'Nutritious whole wheat flour retaining all the natural fiber and nutrients.',
      image: 'https://images.unsplash.com/photo-1625869016774-3d015c5d8e3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      moq: '1 MT',
      port: 'Any Major Port'
    },
    {
      id: 'maida',
      name: 'Maida (Refined Flour)',
      description: 'Fine refined flour perfect for bakery products, pastries, and confectionery.',
      image: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      moq: '1 MT',
      port: 'Any Major Port'
    },
    {
      id: 'semolina',
      name: 'Semolina (Sooji/Rawa)',
      description: 'Coarse wheat flour ideal for making pasta, upma, and various Indian dishes.',
      image: 'https://images.unsplash.com/photo-1595505248794-66a3b74a7b97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      moq: '1 MT',
      port: 'Any Major Port'
    },
    {
      id: 'wheat-bran',
      name: 'Wheat Bran',
      description: 'Nutrient-rich outer layer of wheat, excellent for animal feed and health foods.',
      image: 'https://images.unsplash.com/photo-1585418649584-38093da13e10?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      moq: '1 MT',
      port: 'Any Major Port'
    }
  ];

  const handleSecureQuote = (productName: string, description: string) => {
    if (!rateLimiter()) {
      alert('Please wait a moment before sending another message.');
      return;
    }

    const sanitizedName = SecurityUtils.sanitizeInput(productName);
    const sanitizedDescription = SecurityUtils.sanitizeInput(description);

    if (!SecurityUtils.validateForm({ name: sanitizedName }, { name: { required: true, maxLength: 100 } }).isValid) {
      alert('Invalid product name');
      return;
    }

    const whatsappMessage = `Hi HKS Provisions,

I'm interested in your ${sanitizedName}.

${sanitizedDescription}

Please share the latest quote with specifications and pricing.

Thank you!`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${ProductionConfig.api.whatsappNumber}?text=${encodedMessage}`;
    
    if (SecurityUtils.isValidUrl(whatsappUrl, ProductionConfig.security.allowedDomains)) {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    } else {
      SecurityUtils.logError(new Error('Invalid WhatsApp URL generated'), 'Quote generation');
    }
  };

  const renderProductGrid = (products: any[], title: string, subtitle: string) => (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-[#2A2A6F] mb-4">{title}</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-[#5353AB] text-white">{title.split(' ')[0]}</Badge>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold text-[#2A2A6F] mb-3">{product.name}</h4>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Package className="w-4 h-4 mr-2" />
                      MOQ: {product.moq}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Globe className="w-4 h-4 mr-2" />
                      {product.port}
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full bg-[#5353AB] hover:bg-[#2A2A6F] text-white"
                    onClick={() => handleSecureQuote(product.name, product.description)}
                  >
                    Get Quote
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {!isSecureConnection && (
        <div className="bg-yellow-500 text-white p-2 text-center text-sm">
          <Shield className="inline w-4 h-4 mr-2" />
          Notice: This connection is not secure. Please use HTTPS in production.
        </div>
      )}
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#2A2A6F] via-[#5353AB] to-[#362F6F] text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-center mb-6">
            <WheatIcon className="w-16 h-16 text-white mr-4" />
            <h1 className="text-4xl lg:text-5xl font-bold">Premium Wheat Products</h1>
          </div>
          <p className="text-xl opacity-90 max-w-3xl mx-auto text-center">
            High-quality wheat varieties and processed products sourced from India's premier wheat-growing regions. 
            Perfect for flour mills, food processing, and export markets.
          </p>
        </div>
      </section>

      {renderProductGrid(millingWheat, "Milling Wheat", "Premium wheat varieties with excellent milling characteristics and protein content")}
      
      <div className="bg-gray-50">
        {renderProductGrid(processedWheat, "Processed Products", "Value-added wheat products ready for food industry and consumer markets")}
      </div>

      <Footer />
    </div>
  );
};

export default Wheat;
