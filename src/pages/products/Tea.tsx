
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Leaf, Globe, Award, Truck } from 'lucide-react';

const Tea = () => {
  const teaVarieties = [
    {
      name: 'CTC Tea',
      description: 'Crush, Tear, Curl tea perfect for strong, full-bodied brews',
      specifications: ['Grade: BP, BOP, BOPF', 'Moisture: 4-6%', 'Packaging: 25kg, 50kg bags']
    },
    {
      name: 'Orthodox Tea',
      description: 'Traditional hand-processed tea with superior flavor and aroma',
      specifications: ['Grade: OP, PEKOE, SOUCHONG', 'Moisture: 5-7%', 'Packaging: 25kg, 50kg bags']
    },
    {
      name: 'Green Tea',
      description: 'Unfermented tea rich in antioxidants and natural flavors',
      specifications: ['Grade: Gunpowder, Sencha', 'Moisture: 3-5%', 'Packaging: 25kg bags']
    },
    {
      name: 'Specialty Blends',
      description: 'Custom blends tailored to specific market requirements',
      specifications: ['Custom formulations', 'Variable moisture content', 'Flexible packaging']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
          }}
        />
        <div className="relative z-10 container mx-auto px-4">
          <Button
            variant="ghost"
            className="text-white mb-4 hover:bg-white/20"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Button>
          <h1 className="text-5xl font-bold text-white mb-4">Premium Tea</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Hand-picked tea leaves from the finest gardens, processed with traditional methods 
            to deliver exceptional quality and taste.
          </p>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">About Our Tea</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                HKS Provisions sources premium tea directly from renowned tea gardens across India. 
                Our tea varieties are carefully selected and processed to maintain their natural 
                flavor, aroma, and nutritional benefits.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <Leaf className="w-6 h-6 text-purple-600 mr-3" />
                  <span className="text-gray-700">Fresh & Natural</span>
                </div>
                <div className="flex items-center">
                  <Globe className="w-6 h-6 text-purple-600 mr-3" />
                  <span className="text-gray-700">Export Quality</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-6 h-6 text-purple-600 mr-3" />
                  <span className="text-gray-700">FSSAI Certified</span>
                </div>
                <div className="flex items-center">
                  <Truck className="w-6 h-6 text-purple-600 mr-3" />
                  <span className="text-gray-700">Global Shipping</span>
                </div>
              </div>
              <Button 
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white"
                onClick={() => window.open('https://wa.me/917397248389?text=Hi%2C%20I%20want%20a%20detailed%20quote%20for%20Premium%20Tea%20from%20HKS%20Provisions', '_blank')}
              >
                Get Detailed Quote
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Tea plantation"
                className="rounded-lg shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1597318181409-cf64991608d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Tea processing"
                className="rounded-lg shadow-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tea Varieties */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Our Tea Varieties</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teaVarieties.map((variety, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{variety.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{variety.description}</p>
                  <div className="space-y-2">
                    {variety.specifications.map((spec, idx) => (
                      <div key={idx} className="text-sm text-gray-500 flex items-center">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mr-2"></div>
                        {spec}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Table */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Technical Specifications</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-purple-600 text-white">
                  <th className="border border-gray-300 px-4 py-3 text-left">Parameter</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">CTC Tea</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Orthodox Tea</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Green Tea</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-semibold">Moisture Content</td>
                  <td className="border border-gray-300 px-4 py-3">4-6%</td>
                  <td className="border border-gray-300 px-4 py-3">5-7%</td>
                  <td className="border border-gray-300 px-4 py-3">3-5%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-semibold">Total Ash</td>
                  <td className="border border-gray-300 px-4 py-3">5-7%</td>
                  <td className="border border-gray-300 px-4 py-3">4-6%</td>
                  <td className="border border-gray-300 px-4 py-3">4-6%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-semibold">Water Soluble Ash</td>
                  <td className="border border-gray-300 px-4 py-3">45-50%</td>
                  <td className="border border-gray-300 px-4 py-3">40-45%</td>
                  <td className="border border-gray-300 px-4 py-3">40-50%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-semibold">Crude Fiber</td>
                  <td className="border border-gray-300 px-4 py-3">12-16%</td>
                  <td className="border border-gray-300 px-4 py-3">10-14%</td>
                  <td className="border border-gray-300 px-4 py-3">8-12%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-semibold">Packaging</td>
                  <td className="border border-gray-300 px-4 py-3">25kg, 50kg bags</td>
                  <td className="border border-gray-300 px-4 py-3">25kg, 50kg bags</td>
                  <td className="border border-gray-300 px-4 py-3">25kg bags</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Order Premium Tea?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us for competitive pricing, custom blends, and reliable supply chain solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100"
              onClick={() => window.open('https://wa.me/917397248389?text=Hi%2C%20I%20want%20a%20detailed%20quote%20for%20Premium%20Tea%20from%20HKS%20Provisions', '_blank')}
            >
              Get Quote on WhatsApp
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Sales Team
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tea;
