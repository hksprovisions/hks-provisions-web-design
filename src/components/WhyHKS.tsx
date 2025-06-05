
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Truck, DollarSign, Clock, Globe, Award } from 'lucide-react';

const WhyHKS = () => {
  const benefits = [
    {
      icon: <Shield className="w-12 h-12 text-purple-200" />,
      title: 'Quality Assurance',
      description: 'Rigorous quality control at every step ensures premium products that meet international standards.',
      details: ['FSSAI Certified', 'Lab Tested', 'ISO Compliant', 'Traceability'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Truck className="w-12 h-12 text-purple-200" />,
      title: 'Reliable Logistics',
      description: 'Efficient supply chain management with timely delivery to any destination worldwide.',
      details: ['Global Shipping', 'Cold Storage', 'Real-time Tracking', 'Secure Packaging'],
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: <DollarSign className="w-12 h-12 text-purple-200" />,
      title: 'Competitive Pricing',
      description: 'Direct sourcing and efficient operations allow us to offer the best prices in the market.',
      details: ['Direct Sourcing', 'Bulk Discounts', 'Flexible Payment', 'Price Matching'],
      gradient: 'from-purple-500 to-violet-500'
    },
    {
      icon: <Clock className="w-12 h-12 text-purple-200" />,
      title: 'Quick Response',
      description: '24/7 customer support with rapid response times for all your business needs.',
      details: ['24/7 Support', 'Quick Quotes', 'Fast Processing', 'Emergency Orders'],
      gradient: 'from-violet-500 to-purple-500'
    },
    {
      icon: <Globe className="w-12 h-12 text-purple-200" />,
      title: 'Global Reach',
      description: 'Extensive network spanning 50+ countries with local understanding of markets.',
      details: ['50+ Countries', 'Local Expertise', 'Market Knowledge', 'Cultural Understanding'],
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      icon: <Award className="w-12 h-12 text-purple-200" />,
      title: 'Trusted Partner',
      description: 'Building long-term relationships through transparency, reliability, and excellence.',
      details: ['500+ Clients', 'Repeat Business', 'References Available', 'Industry Recognition'],
      gradient: 'from-pink-500 to-purple-500'
    }
  ];

  return (
    <section id="why-hks" className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
              Why Choose HKS Provisions?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          </div>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mt-6">
            We combine decades of experience with modern technology to deliver 
            exceptional value to our partners across the globe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="group relative bg-white/5 backdrop-blur-lg border border-white/10 hover:border-purple-400/30 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-purple-500/25 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Animated border */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              <div className="absolute inset-[1px] bg-purple-900/90 rounded-lg"></div>
              
              <CardContent className="relative p-8 text-center h-full flex flex-col">
                {/* Icon with glow effect */}
                <div className="flex justify-center mb-6 relative">
                  <div className="absolute inset-0 bg-purple-500/30 rounded-full blur-xl group-hover:bg-purple-400/50 transition-all duration-500"></div>
                  <div className="relative p-4 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full border border-purple-400/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    {benefit.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-200 transition-colors duration-300">
                  {benefit.title}
                </h3>
                
                <p className="text-white/80 mb-6 leading-relaxed flex-grow">
                  {benefit.description}
                </p>
                
                <div className="space-y-3">
                  {benefit.details.map((detail, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center justify-center text-sm group-hover:transform group-hover:translate-x-1 transition-transform duration-300"
                      style={{ transitionDelay: `${idx * 50}ms` }}
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                      <span className="text-white/70 group-hover:text-white/90 transition-colors duration-300">{detail}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center mt-20">
          <div className="relative bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-lg rounded-3xl p-10 max-w-4xl mx-auto border border-purple-400/20 hover:border-purple-400/40 transition-all duration-500 group">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
                Ready to Partner with Us?
              </h3>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Join hundreds of satisfied clients who trust HKS Provisions for their agricultural trading needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 border border-purple-400/30"
                  onClick={() => window.open('https://wa.me/917397248389?text=Hi%2C%20I%20want%20to%20partner%20with%20HKS%20Provisions', '_blank')}
                >
                  Get Started Today
                </button>
                <button 
                  className="border-2 border-purple-400 text-purple-200 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHKS;
