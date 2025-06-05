import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Wheat, Globe, Award, Truck } from 'lucide-react';

const Rice = () => {
  const riceVarieties = [
    {
      name: 'Basmati Rice',
      description: 'Premium long-grain aromatic rice with distinctive fragrance',
      specifications: ['Length: 6.61mm-7.5mm', 'Moisture: 12-14%', 'Broken: 1-5%']
    },
    {
      name: 'IR64 Parboiled',
      description: 'Non-basmati rice ideal for export with excellent cooking quality',
      specifications: ['Length: 5.8-6.2mm', 'Moisture: 12-14%', 'Broken: 5-25%']
    },
    {
      name: 'Sona Masoori',
      description: 'Medium-grain rice perfect for daily consumption',
      specifications: ['Length: 4.0-5.2mm', 'Moisture: 12-14%', 'Broken: 1-10%']
    },
    {
      name: 'Broken Rice',
      description: 'Economical rice variety for industrial and brewing applications',
      specifications: ['Size: 100% broken', 'Moisture: 12-14%', 'Various grades available']
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
            backgroundImage: `url('https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
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
          <h1 className="text-5xl font-bold text-white mb-4">Quality Rice</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Premium rice varieties sourced from the best growing regions, 
            processed with modern techniques for superior quality.
          </p>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">About Our Rice</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                HKS Provisions offers a comprehensive range of rice varieties suitable for both 
                domestic consumption and international export. Our rice is sourced from premium 
                growing regions and processed using state-of-the-art technology.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <Wheat className="w-6 h-6 text-purple-600 mr-3" />
                  <span className="text-gray-700">Premium Quality</span>
                </div>
                <div className="flex items-center">
                  <Globe className="w-6 h-6 text-purple-600 mr-3" />
                  <span className="text-gray-700">Export Ready</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-6 h-6 text-purple-600 mr-3" />
                  <span className="text-gray-700">FSSAI Certified</span>
                </div>
                <div className="flex items-center">
                  <Truck className="w-6 h-6 text-purple-600 mr-3" />
                  <span className="text-gray-700">Timely Delivery</span>
                </div>
              </div>
              <Button 
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white"
                onClick={() => window.open('https://wa.me/917397248389?text=Hi%2C%20I%20want%20a%20detailed%20quote%20for%20Quality%20Rice%20from%20HKS%20Provisions', '_blank')}
              >
                Get Detailed Quote
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Rice grains"
                className="rounded-lg shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Rice field"
                className="rounded-lg shadow-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Rice Varieties */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Our Rice Varieties</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {riceVarieties.map((variety, index) => (
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
                  <th className="border border-gray-300 px-4 py-3 text-left">Basmati</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">IR64</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Sona Masoori</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-semibold">Moisture Content</td>
                  <td className="border border-gray-300 px-4 py-3">12-14%</td>
                  <td className="border border-gray-300 px-4 py-3">12-14%</td>
                  <td className="border border-gray-300 px-4 py-3">12-14%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-semibold">Average Length</td>
                  <td className="border border-gray-300 px-4 py-3">6.61-7.5mm</td>
                  <td className="border border-gray-300 px-4 py-3">5.8-6.2mm</td>
                  <td className="border border-gray-300 px-4 py-3">4.0-5.2mm</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-semibold">Broken %</td>
                  <td className="border border-gray-300 px-4 py-3">1-5%</td>
                  <td className="border border-gray-300 px-4 py-3">5-25%</td>
                  <td className="border border-gray-300 px-4 py-3">1-10%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-semibold">Packaging</td>
                  <td className="border border-gray-300 px-4 py-3">25kg, 50kg bags</td>
                  <td className="border border-gray-300 px-4 py-3">25kg, 50kg bags</td>
                  <td className="border border-gray-300 px-4 py-3">25kg, 50kg bags</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-semibold">HS Code</td>
                  <td className="border border-gray-300 px-4 py-3">10063010</td>
                  <td className="border border-gray-300 px-4 py-3">10064000</td>
                  <td className="border border-gray-300 px-4 py-3">10064000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Order Quality Rice?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us for competitive pricing, bulk orders, and reliable export solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100"
              onClick={() => window.open('https://wa.me/917397248389?text=Hi%2C%20I%20want%20a%20detailed%20quote%20for%20Quality%20Rice%20from%20HKS%20Provisions', '_blank')}
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

export default Rice;
