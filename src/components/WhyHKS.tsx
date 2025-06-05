
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Truck, DollarSign, Clock, Globe, Award } from 'lucide-react';

const WhyHKS = () => {
  const benefits = [
    {
      icon: <Shield className="w-12 h-12 text-blue-200" />,
      title: 'Quality Assurance',
      description: 'Rigorous quality control at every step ensures premium products that meet international standards.',
      details: ['FSSAI Certified', 'Lab Tested', 'ISO Compliant', 'Traceability']
    },
    {
      icon: <Truck className="w-12 h-12 text-blue-200" />,
      title: 'Reliable Logistics',
      description: 'Efficient supply chain management with timely delivery to any destination worldwide.',
      details: ['Global Shipping', 'Cold Storage', 'Real-time Tracking', 'Secure Packaging']
    },
    {
      icon: <DollarSign className="w-12 h-12 text-blue-200" />,
      title: 'Competitive Pricing',
      description: 'Direct sourcing and efficient operations allow us to offer the best prices in the market.',
      details: ['Direct Sourcing', 'Bulk Discounts', 'Flexible Payment', 'Price Matching']
    },
    {
      icon: <Clock className="w-12 h-12 text-blue-200" />,
      title: 'Quick Response',
      description: '24/7 customer support with rapid response times for all your business needs.',
      details: ['24/7 Support', 'Quick Quotes', 'Fast Processing', 'Emergency Orders']
    },
    {
      icon: <Globe className="w-12 h-12 text-blue-200" />,
      title: 'Global Reach',
      description: 'Extensive network spanning 50+ countries with local understanding of markets.',
      details: ['50+ Countries', 'Local Expertise', 'Market Knowledge', 'Cultural Understanding']
    },
    {
      icon: <Award className="w-12 h-12 text-blue-200" />,
      title: 'Trusted Partner',
      description: 'Building long-term relationships through transparency, reliability, and excellence.',
      details: ['500+ Clients', 'Repeat Business', 'References Available', 'Industry Recognition']
    }
  ];

  return (
    <section id="why-hks" className="py-20 bg-gradient-to-br from-blue-600 to-teal-600 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Why Choose HKS Provisions?
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            We combine decades of experience with modern technology to deliver 
            exceptional value to our partners across the globe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-200 transition-colors">
                  {benefit.title}
                </h3>
                
                <p className="text-white/80 mb-6 leading-relaxed">
                  {benefit.description}
                </p>
                
                <div className="space-y-2">
                  {benefit.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center justify-center text-sm">
                      <div className="w-2 h-2 bg-blue-300 rounded-full mr-2"></div>
                      <span className="text-white/70">{detail}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-white/20">
            <h3 className="text-3xl font-bold mb-4">Ready to Partner with Us?</h3>
            <p className="text-xl opacity-90 mb-6">
              Join hundreds of satisfied clients who trust HKS Provisions for their agricultural trading needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-xl"
                onClick={() => window.open('https://wa.me/917397248389?text=Hi%2C%20I%20want%20to%20partner%20with%20HKS%20Provisions', '_blank')}
              >
                Get Started Today
              </button>
              <button 
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHKS;
