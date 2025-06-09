import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight, Package, Globe, Leaf, Coffee, Blend, Sparkles } from 'lucide-react';
import { getProductsByCategory } from '@/data/products';

const Tea = () => {
  const navigate = useNavigate();
  const teaProducts = getProductsByCategory('tea');
  const [customBlend, setCustomBlend] = useState({ name: '', description: '', requirements: '' });

  const ctcGrades = [
    { 
      id: 'bp', 
      name: 'BP (Broken Pekoe)', 
      description: 'Large leaf grade with excellent brewing strength',
      color: 'bg-amber-500'
    },
    { 
      id: 'bop', 
      name: 'BOP (Broken Orange Pekoe)', 
      description: 'Premium grade with bold granules and malty flavor',
      color: 'bg-orange-500'
    },
    { 
      id: 'bps', 
      name: 'BPS (Broken Pekoe Souchong)', 
      description: 'Medium grade with good color and strength',
      color: 'bg-yellow-600'
    },
    { 
      id: 'bopsm', 
      name: 'BOPSM (BOP Small Medium)', 
      description: 'Small-medium grade perfect for quick brewing',
      color: 'bg-red-500'
    },
    { 
      id: 'pd', 
      name: 'PD (Pekoe Dust)', 
      description: 'Fine grade ideal for strong milk tea',
      color: 'bg-brown-500'
    },
    { 
      id: 'dust', 
      name: 'Dust Grade', 
      description: 'Finest grade for instant color and strength',
      color: 'bg-gray-600'
    }
  ];

  const blends = [
    {
      id: 'lite',
      name: 'Lite Blend',
      description: 'Light and refreshing blend perfect for everyday consumption',
      features: ['Mild strength', 'Golden color', 'Smooth taste'],
      color: 'bg-green-500'
    },
    {
      id: 'gold',
      name: 'Gold Blend',
      description: 'Premium balanced blend with rich aroma and full body',
      features: ['Medium strength', 'Rich golden brew', 'Aromatic'],
      color: 'bg-yellow-500'
    },
    {
      id: 'premium',
      name: 'Premium Blend',
      description: 'Superior quality blend for connoisseurs and export markets',
      features: ['Full strength', 'Deep amber color', 'Complex flavor'],
      color: 'bg-purple-600'
    }
  ];

  const handleCustomBlendQuote = () => {
    if (!customBlend.name || !customBlend.description) {
      alert('Please fill in the blend name and description');
      return;
    }

    const whatsappMessage = `Hi HKS Provisions,

I would like to get a quote for a Custom Tea Blend:

Blend Name: ${customBlend.name}
Description: ${customBlend.description}
${customBlend.requirements ? `Special Requirements: ${customBlend.requirements}` : ''}

Please provide pricing and minimum order quantity details.

Thank you!`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/917397248359?text=${encodedMessage}`, '_blank');
  };

  const handleGradeQuote = (grade: any) => {
    const whatsappMessage = `Hi HKS Provisions,

I'm interested in your ${grade.name} tea grade.

${grade.description}

Please share the latest quote with specifications and pricing.

Thank you!`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/917397248359?text=${encodedMessage}`, '_blank');
  };

  const handleBlendQuote = (blend: any) => {
    const whatsappMessage = `Hi HKS Provisions,

I'm interested in your ${blend.name}.

${blend.description}

Please share the latest quote with specifications and pricing.

Thank you!`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/917397248359?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#DEDDF5] to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#2A2A6F] via-[#5353AB] to-[#362F6F] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
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
                  <div className={`${grade.color} h-2 w-full`}></div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-[#2A2A6F] mb-3">{grade.name}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{grade.description}</p>
                    
                    <div className="flex items-center text-sm text-gray-500 mb-6">
                      <Package className="w-4 h-4 mr-2" />
                      <span>Available in bulk quantities</span>
                    </div>
                    
                    <Button 
                      className="w-full bg-[#5353AB] hover:bg-[#2A2A6F] text-white py-3 font-semibold"
                      onClick={() => handleGradeQuote(grade)}
                    >
                      Get Quote for {grade.name}
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
                  <div className={`${blend.color} h-3 w-full`}></div>
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
                      onClick={() => handleBlendQuote(blend)}
                    >
                      Get Quote for {blend.name}
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
            <Card className="shadow-2xl border-0 bg-white">
              <CardContent className="p-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
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
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-[#5353AB] to-[#362F6F] text-white p-8 rounded-lg">
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
                    
                    <div className="mt-8 p-4 bg-white/20 rounded-lg">
                      <p className="text-sm font-medium">Minimum Order Quantity</p>
                      <p className="text-2xl font-bold">1 MT</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <Button 
                    onClick={handleCustomBlendQuote}
                    className="bg-[#5353AB] hover:bg-[#2A2A6F] text-white px-12 py-4 text-lg font-semibold"
                  >
                    Get Custom Blend Quote
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Existing Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2A2A6F] mb-4">Our Tea Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our current selection of premium tea products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teaProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 border-0">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={product.images[0]} 
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-[#5353AB] text-white">{product.subcategory || product.category}</Badge>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#2A2A6F] mb-3">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.shortDescription}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <Package className="w-4 h-4 mr-2" />
                        MOQ: {product.moq}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Globe className="w-4 h-4 mr-2" />
                        {product.tradeInfo.port}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button 
                        className="flex-1 bg-[#5353AB] hover:bg-[#2A2A6F] text-white"
                        onClick={() => navigate(`/products/tea/${product.subcategory || 'general'}/${product.id}`)}
                      >
                        View Details
                      </Button>
                      <Button 
                        variant="outline"
                        size="icon"
                        className="border-[#5353AB] text-[#5353AB] hover:bg-[#5353AB] hover:text-white"
                        onClick={() => window.open(`https://wa.me/917397248359?text=Hi%2C%20I'm%20interested%20in%20${encodeURIComponent(product.name)}.%20Please%20share%20the%20latest%20quote.`, '_blank')}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tea;
