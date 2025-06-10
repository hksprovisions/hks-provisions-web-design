
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Package, Globe, Flower, Shield } from 'lucide-react';
import { SecurityUtils } from '@/utils/security';
import { ProductionConfig } from '@/config/production';

const Spices = () => {
  const navigate = useNavigate();
  const [isSecureConnection, setIsSecureConnection] = useState(false);
  const [rateLimiter] = useState(() => SecurityUtils.createRateLimiter(3000, 5));

  useEffect(() => {
    setIsSecureConnection(SecurityUtils.isSecureConnection());
    
    if (SecurityUtils.isProduction()) {
      console.log('Production mode: Security measures active');
    }
  }, []);

  const wholeSpices = [
    {
      id: 'cumin-seeds',
      name: 'Cumin Seeds (Jeera)',
      description: 'Premium quality cumin seeds with rich aroma and flavor, essential for Indian cuisine.',
      // image: 'https://images.unsplash.com/photo-1609501676725-7186f734a4b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      moq: '1 MT',
      port: 'Mundra/Chennai'
    },
    {
      id: 'fennel-seeds',
      name: 'Fennel Seeds (Saunf)',
      description: 'Sweet aromatic fennel seeds, excellent for digestive health and culinary applications.',
      // image: 'https://images.unsplash.com/photo-1575514927003-8b5b6dc88a45?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      moq: '1 MT',
      port: 'Mundra/Chennai'
    },
    {
      id: 'coriander-seeds',
      name: 'Coriander Seeds',
      description: 'High-quality coriander seeds with fresh citrusy aroma, perfect for spice blends.',
      // image: 'https://images.unsplash.com/photo-1572613978277-58d8b6c0f446?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      moq: '1 MT',
      port: 'Mundra/Chennai'
    },
    {
      id: 'black-pepper',
      name: 'Black Pepper',
      description: 'Premium black pepper with high piperine content, the king of spices.',
      // image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      moq: '1 MT',
      port: 'Cochin/Chennai'
    },
    {
      id: 'cardamom',
      name: 'Cardamom (Green/Black)',
      description: 'Premium cardamom pods with intense aroma, queen of spices for premium applications.',
      // image: 'https://images.unsplash.com/photo-1607984272913-a55e15dae84e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      moq: '100 Kg',
      port: 'Cochin/Chennai'
    },
    {
      id: 'mustard-seeds',
      name: 'Mustard Seeds',
      description: 'Yellow, black, and brown mustard seeds with pungent flavor and oil content.',
      // image: 'https://images.unsplash.com/photo-1578849278619-e73505e9610f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      moq: '1 MT',
      port: 'Mundra/Kandla'
    }
  ];

  const groundSpices = [
    {
      id: 'turmeric-powder',
      name: 'Turmeric Powder',
      description: 'High curcumin content turmeric powder with bright yellow color and medicinal properties.',
      // image: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      moq: '1 MT',
      port: 'Chennai/Tuticorin'
    },
    {
      id: 'red-chilli-powder',
      name: 'Red Chilli Powder',
      description: 'Premium red chilli powder with high color value and balanced heat levels.',
      // image: 'https://images.unsplash.com/photo-1583221861045-4fe2e056b0a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      moq: '1 MT',
      port: 'Chennai/Guntur'
    },
    {
      id: 'coriander-powder',
      name: 'Coriander Powder',
      description: 'Finely ground coriander powder with fresh aroma and natural oil content.',
      // image: 'https://images.unsplash.com/photo-1606406132267-a4c45b9a117b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      moq: '1 MT',
      port: 'Mundra/Chennai'
    },
    {
      id: 'garam-masala',
      name: 'Garam Masala',
      description: 'Traditional blend of warming spices, expertly balanced for authentic Indian flavor.',
      // image: 'https://images.unsplash.com/photo-1626132647228-fa5666d2b39d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      moq: '500 Kg',
      port: 'Any Major Port'
    },
    {
      id: 'cumin-powder',
      name: 'Cumin Powder',
      description: 'Fresh ground cumin powder with strong aroma and earthy flavor profile.',
      // image: 'https://images.unsplash.com/photo-1608940085509-0c4c8ac59a5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      moq: '1 MT',
      port: 'Mundra/Chennai'
    }
  ];

  const blendedSpices = [
    {
      id: 'chhole-masala',
      name: 'Chhole Masala',
      description: 'Authentic chickpea curry spice blend with perfect balance of flavors.',
      // image: 'https://images.unsplash.com/photo-1611417968270-b4cdb8e70f7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      moq: '500 Kg',
      port: 'Any Major Port'
    },
    {
      id: 'pav-bhaji-masala',
      name: 'Pav Bhaji Masala',
      description: 'Special blend for the popular Mumbai street food with rich color and taste.',
      // image: 'https://images.unsplash.com/photo-1630363525148-d1bfb01cc37b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      moq: '500 Kg',
      port: 'Any Major Port'
    },
    {
      id: 'meat-masala',
      name: 'Meat Masala',
      description: 'Premium meat spice blend with warming spices for authentic non-vegetarian dishes.',
      // image: 'https://images.unsplash.com/photo-1626132646924-4b557b1b8c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      moq: '500 Kg',
      port: 'Any Major Port'
    },
    {
      id: 'biryani-masala',
      name: 'Biryani Masala',
      description: 'Aromatic spice blend specially crafted for premium biryani preparations.',
      // image: 'https://images.unsplash.com/photo-1627546186797-35c8e30b7af1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      moq: '500 Kg',
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
            <Flower className="w-16 h-16 text-white mr-4" />
            <h1 className="text-4xl lg:text-5xl font-bold">Aromatic Spices Collection</h1>
          </div>
          <p className="text-xl opacity-90 max-w-3xl mx-auto text-center">
            Premium quality spices sourced from India's finest spice-growing regions. 
            Fresh, aromatic, and perfect for culinary and industrial applications.
          </p>
        </div>
      </section>

      {renderProductGrid(wholeSpices, "Whole Spices", "Premium whole spices with natural oils and authentic flavors")}
      
      <div className="bg-gray-50">
        {renderProductGrid(groundSpices, "Ground Spices", "Freshly ground spices with maximum flavor retention and purity")}
      </div>
      
      {renderProductGrid(blendedSpices, "Blended Spices", "Expertly crafted spice blends for authentic Indian cuisine")}

      <Footer />
    </div>
  );
};

export default Spices;
