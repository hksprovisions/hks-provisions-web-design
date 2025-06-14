
import React from 'react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, MessageCircle, Mail } from 'lucide-react';

const DryFruits = () => {
  const dryFruits = [
    {
      name: 'Premium Almonds',
      description: 'High-quality California almonds, rich in nutrients and perfect for snacking or cooking.',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      specifications: ['Size: 18-20mm', 'Moisture: <6%', 'Origin: California', 'Grade: Premium'],
      uses: ['Direct consumption', 'Bakery products', 'Confectionery', 'Health foods']
    },
    {
      name: 'Cashew Nuts',
      description: 'Premium quality cashews sourced from the finest plantations.',
      image: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      specifications: ['Grade: W240/W320', 'Moisture: <5%', 'Origin: India/Vietnam', 'Color: Natural White'],
      uses: ['Snacks', 'Cooking', 'Sweets', 'Trail mixes']
    },
    {
      name: 'Walnuts',
      description: 'Fresh and crunchy walnuts with excellent nutritional value.',
      image: 'https://images.unsplash.com/photo-1553459027-b6c52bbead1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      specifications: ['Size: Large halves', 'Moisture: <8%', 'Origin: Kashmir/California', 'Grade: Premium'],
      uses: ['Direct consumption', 'Baking', 'Desserts', 'Health supplements']
    },
    {
      name: 'Dates',
      description: 'Sweet and nutritious dates, perfect for natural energy boost.',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      specifications: ['Variety: Medjool/Deglet', 'Moisture: 18-23%', 'Origin: Middle East', 'Grade: Premium'],
      uses: ['Direct consumption', 'Natural sweetener', 'Energy bars', 'Traditional sweets']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 mb-6 animate-fade-in">
              Premium Dry Fruits
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto animate-slide-up">
              Discover our exceptional range of premium dry fruits, carefully sourced from the finest orchards 
              to bring you the highest quality nutrition and taste.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dryFruits.map((product, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="p-6 pt-0">
                  <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-slate-700 mb-2 text-sm">Specifications:</h4>
                    <ul className="text-xs text-slate-600 space-y-1">
                      {product.specifications.map((spec, idx) => (
                        <li key={idx}>• {spec}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-slate-700 mb-2 text-sm">Uses:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {product.uses.map((use, idx) => (
                        <span key={idx} className="text-xs bg-blue-100 px-2 py-1 rounded text-blue-700">
                          {use}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full gradient-primary text-white transition-all duration-300 transform hover:scale-105"
                    onClick={() => window.open(`https://wa.me/917397248359?text=Hi%2C%20I%20want%20a%20quote%20for%20${product.name}%20from%20HKS%20Provisions`, '_blank')}
                  >
                    Get Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-slate-800 mb-4">Need More Information?</h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Our dry fruits experts are here to help you find the perfect products for your needs. 
            Contact us today for personalized assistance and bulk pricing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl transition-all transform hover:scale-105"
              onClick={() => window.open('https://wa.me/917397248359?text=Hi%2C%20I%20need%20information%20about%20dry%20fruits%20from%20HKS%20Provisions', '_blank')}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Us
            </Button>
            <Button 
              variant="outline"
              className="border-slate-300 text-slate-700 hover:bg-slate-100 px-6 py-3 rounded-xl transition-all transform hover:scale-105"
              onClick={() => window.open('tel:+917397248359')}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
            <Button 
              variant="outline"
              className="border-slate-300 text-slate-700 hover:bg-slate-100 px-6 py-3 rounded-xl transition-all transform hover:scale-105"
              onClick={() => window.open('mailto:info@hksprovisions.com')}
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DryFruits;
