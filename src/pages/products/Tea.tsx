
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight, Package, Globe, Leaf, Coffee, Blend, Sparkles, Shield } from 'lucide-react';
import { SecurityUtils } from '@/utils/security';
import { ProductionConfig } from '@/config/production';

const Tea = () => {
  const navigate = useNavigate();
  const [customBlend, setCustomBlend] = useState({ name: '', description: '', requirements: '' });
  const [isSecureConnection, setIsSecureConnection] = useState(false);
  const [rateLimiter] = useState(() => SecurityUtils.createRateLimiter(3000, 5));

  useEffect(() => {
    setIsSecureConnection(SecurityUtils.isSecureConnection());
    
    if (SecurityUtils.isProduction()) {
      console.log('Production mode: Security measures active');
    }
  }, []);

  const ctcGrades = [
    { 
      id: 'bp', 
      name: 'BP (Broken Pekoe)', 
      description: 'Large leaf grade with excellent brewing strength',
      color: 'bg-amber-500',
      image: 'https://images.unsplash.com/photo-1597318285942-38d93c7fad7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    { 
      id: 'bop', 
      name: 'BOP (Broken Orange Pekoe)', 
      description: 'Premium grade with bold granules and malty flavor',
      color: 'bg-orange-500',
      image: 'https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    { 
      id: 'bps', 
      name: 'BPS (Broken Pekoe Souchong)', 
      description: 'Medium grade with good color and strength',
      color: 'bg-yellow-600',
      image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    { 
      id: 'of', 
      name: 'OF (Orange Fannings)', 
      description: 'Small grade particles perfect for strong quick brewing',
      color: 'bg-orange-600',
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    { 
      id: 'bopsm', 
      name: 'BOPSM (BOP Small Medium)', 
      description: 'Small-medium grade perfect for quick brewing',
      color: 'bg-red-500',
      image: 'https://images.unsplash.com/photo-1597318281675-17516f892648?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    { 
      id: 'pd', 
      name: 'PD (Pekoe Dust)', 
      description: 'Fine grade ideal for strong milk tea',
      color: 'bg-brown-500',
      image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    { 
      id: 'dust', 
      name: 'Dust Grade', 
      description: 'Finest grade for instant color and strength',
      color: 'bg-gray-600',
      image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const blends = [
    {
      id: 'lite',
      name: 'Lite Blend',
      description: 'Light and refreshing blend perfect for everyday consumption',
      features: ['Mild strength', 'Golden color', 'Smooth taste'],
      color: 'bg-green-500',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'gold',
      name: 'Gold Blend',
      description: 'Premium balanced blend with rich aroma and full body',
      features: ['Medium strength', 'Rich golden brew', 'Aromatic'],
      color: 'bg-yellow-500',
      image: 'https://images.unsplash.com/photo-1564890716881-4b5862ff3d5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'premium',
      name: 'Premium Blend',
      description: 'Superior quality blend for connoisseurs and export markets',
      features: ['Full strength', 'Deep amber color', 'Complex flavor'],
      color: 'bg-purple-600',
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
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

  const handleCustomBlendQuote = () => {
    const sanitizedName = SecurityUtils.sanitizeInput(customBlend.name);
    const sanitizedDescription = SecurityUtils.sanitizeInput(customBlend.description);
    const sanitizedRequirements = SecurityUtils.sanitizeInput(customBlend.requirements);

    const validation = SecurityUtils.validateForm(
      { name: sanitizedName, description: sanitizedDescription },
      { 
        name: { required: true, maxLength: 100 },
        description: { required: true, maxLength: 500 }
      }
    );

    if (!validation.isValid) {
      alert(validation.errors.join(', '));
      return;
    }

    if (!rateLimiter()) {
      alert('Please wait a moment before sending another message.');
      return;
    }

    const whatsappMessage = `Hi HKS Provisions,

I would like to get a quote for a Custom Tea Blend:

Blend Name: ${sanitizedName}
Description: ${sanitizedDescription}
${sanitizedRequirements ? `Special Requirements: ${sanitizedRequirements}` : ''}

Please provide pricing and minimum order quantity details.

Thank you!`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${ProductionConfig.api.whatsappNumber}?text=${encodedMessage}`;
    
    if (SecurityUtils.isValidUrl(whatsappUrl, ProductionConfig.security.allowedDomains)) {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#DEDDF5] to-white">
      <Header />
      
      {!isSecureConnection && (
        <div className="bg-yellow-500 text-white p-2 text-center text-sm">
          <Shield className="inline w-4 h-4 mr-2" />
          Notice: This connection is not secure. Please use HTTPS in production.
        </div>
      )}

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#2A2A6F] via-[#5353AB] to-[#362F6F] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-center mb-6">
            <Leaf className="w-16 h-16 text-white mr-4" />
            <h1 className="text-5xl lg:text-6xl font-bold">Premium Tea Collection</h1>
          </div>
          <p className="text-xl opacity-90 max-w-4xl mx-auto text-center leading-relaxed">
            Discover our finest quality tea sourced from renowned gardens across India. 
            From robust CTC grades to expertly crafted blends and custom solutions for your unique requirements.
          </p>
        </div>
      </section>

      {/* CTC Grades Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Coffee className="w-10 h-10 text-[#5353AB] mr-3" />
              <h2 className="text-4xl font-bold text-[#2A2A6F]">CTC Grades</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Premium Crush, Tear, Curl grades offering varying strengths and brewing characteristics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ctcGrades.map((grade) => (
              <Card key={grade.id} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={grade.image} 
                      alt={grade.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent`}></div>
                    <div className={`${grade.color} h-2 w-full absolute bottom-0`}></div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-[#2A2A6F] mb-3">{grade.name}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{grade.description}</p>
                    
                    <div className="flex items-center text-sm text-gray-500 mb-6">
                      <Package className="w-4 h-4 mr-2" />
                      <span>Available in bulk quantities</span>
                    </div>
                    
                    <Button 
                      className="w-full bg-[#5353AB] hover:bg-[#2A2A6F] text-white py-3 font-semibold"
                      onClick={() => handleSecureQuote(grade.name, grade.description)}
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

      {/* Blends Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Blend className="w-10 h-10 text-[#5353AB] mr-3" />
              <h2 className="text-4xl font-bold text-[#2A2A6F]">Signature Blends</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expertly crafted blends to suit different taste preferences and market segments
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {blends.map((blend) => (
              <Card key={blend.id} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={blend.image} 
                      alt={blend.name}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent`}></div>
                    <div className={`${blend.color} h-3 w-full absolute bottom-0`}></div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-[#2A2A6F] mb-3">{blend.name}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{blend.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      {blend.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-[#5353AB] rounded-full mr-3"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      className="w-full bg-[#5353AB] hover:bg-[#2A2A6F] text-white py-3 font-semibold"
                      onClick={() => handleSecureQuote(blend.name, blend.description)}
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

      {/* Custom Blend Section */}
      <section className="py-20 bg-gradient-to-br from-[#DEDDF5] to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="w-10 h-10 text-[#5353AB] mr-3" />
              <h2 className="text-4xl font-bold text-[#2A2A6F]">Custom Blend</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Create your own unique tea blend tailored to your specific requirements and taste preferences
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="shadow-2xl border-0 bg-white overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-10">
                    <h3 className="text-2xl font-bold text-[#2A2A6F] mb-6">Design Your Blend</h3>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Blend Name *
                        </label>
                        <Input
                          value={customBlend.name}
                          onChange={(e) => setCustomBlend(prev => ({ ...prev, name: e.target.value }))}
                          placeholder="e.g., Morning Glory Blend"
                          className="border-[#DEDDF5] focus:border-[#5353AB] py-3"
                          maxLength={100}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Blend Description *
                        </label>
                        <Textarea
                          value={customBlend.description}
                          onChange={(e) => setCustomBlend(prev => ({ ...prev, description: e.target.value }))}
                          placeholder="Describe your ideal blend - strength, flavor profile, intended use..."
                          rows={4}
                          className="border-[#DEDDF5] focus:border-[#5353AB]"
                          maxLength={500}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Special Requirements
                        </label>
                        <Textarea
                          value={customBlend.requirements}
                          onChange={(e) => setCustomBlend(prev => ({ ...prev, requirements: e.target.value }))}
                          placeholder="Any specific grades, packaging, or quality requirements..."
                          rows={3}
                          className="border-[#DEDDF5] focus:border-[#5353AB]"
                          maxLength={500}
                        />
                      </div>
                    </div>
                    
                    <div className="mt-8 text-center">
                      <Button 
                        onClick={handleCustomBlendQuote}
                        className="bg-[#5353AB] hover:bg-[#2A2A6F] text-white px-12 py-4 text-lg font-semibold w-full"
                      >
                        Get Custom Blend Quote
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="relative bg-gradient-to-br from-[#5353AB] to-[#362F6F] text-white p-8 lg:p-10">
                    <div className="absolute inset-0 opacity-20">
                      <img 
                        src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Custom tea blending"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative z-10">
                      <h4 className="text-xl font-bold mb-4">Why Choose Custom Blends?</h4>
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>Tailored to your exact taste preferences</span>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>Perfect for your target market</span>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>Competitive pricing for bulk orders</span>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>Quality assurance and consistency</span>
                        </div>
                      </div>
                      
                      <div className="mt-8 p-4 bg-white/20 rounded-lg backdrop-blur-sm">
                        <p className="text-sm font-medium">Minimum Order Quantity</p>
                        <p className="text-2xl font-bold">1 MT</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tea;
