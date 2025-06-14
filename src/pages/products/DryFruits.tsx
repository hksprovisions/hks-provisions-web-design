
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Phone, MessageCircle, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const DryFruits = () => {
  const [customOrder, setCustomOrder] = useState({
    productName: '',
    quantity: '',
    specifications: '',
    contactInfo: ''
  });

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

  const handleCustomOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hi, I want to place a custom order for dry fruits:%0A%0AProduct: ${customOrder.productName}%0AQuantity: ${customOrder.quantity}%0ASpecifications: ${customOrder.specifications}%0AContact: ${customOrder.contactInfo}`;
    window.open(`https://wa.me/917397248359?text=${whatsappMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-orange-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 text-orange-600 hover:text-orange-700">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
            <h1 className="text-2xl font-bold text-gray-800">Premium Dry Fruits</h1>
            <div className="flex space-x-2">
              <Button 
                size="sm" 
                className="bg-orange-600 hover:bg-orange-700"
                onClick={() => window.open('tel:+917397248359')}
              >
                <Phone className="w-4 h-4 mr-1" />
                Call
              </Button>
              <Button 
                size="sm" 
                variant="outline"
                onClick={() => window.open('https://wa.me/917397248359?text=Hi%2C%20I%20want%20information%20about%20dry%20fruits', '_blank')}
              >
                <MessageCircle className="w-4 h-4 mr-1" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {dryFruits.map((product, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-w-16 aspect-h-12">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg text-orange-700">{product.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2">Specifications:</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {product.specifications.map((spec, idx) => (
                      <li key={idx}>• {spec}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2">Uses:</h4>
                  <div className="flex flex-wrap gap-1">
                    {product.uses.map((use, idx) => (
                      <span key={idx} className="text-xs bg-orange-100 px-2 py-1 rounded text-orange-700">
                        {use}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-orange-600 hover:bg-orange-700"
                  onClick={() => window.open(`https://wa.me/917397248359?text=Hi%2C%20I%20want%20a%20quote%20for%20${product.name}%20from%20HKS%20Provisions`, '_blank')}
                >
                  Get Quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Custom Order Section */}
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center text-orange-700">Custom Dry Fruits Order</CardTitle>
            <p className="text-center text-gray-600">
              Looking for specific dry fruits or custom packaging? Let us know your requirements!
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleCustomOrderSubmit} className="space-y-4">
              <div>
                <Label htmlFor="productName">Product Name</Label>
                <Input
                  id="productName"
                  value={customOrder.productName}
                  onChange={(e) => setCustomOrder({...customOrder, productName: e.target.value})}
                  placeholder="e.g., Premium Mixed Dry Fruits"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="quantity">Quantity Required</Label>
                <Input
                  id="quantity"
                  value={customOrder.quantity}
                  onChange={(e) => setCustomOrder({...customOrder, quantity: e.target.value})}
                  placeholder="e.g., 100 kg, 50 boxes"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="specifications">Special Requirements</Label>
                <Textarea
                  id="specifications"
                  value={customOrder.specifications}
                  onChange={(e) => setCustomOrder({...customOrder, specifications: e.target.value})}
                  placeholder="Please specify packaging, quality grade, origin preferences, etc."
                  className="min-h-[100px]"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="contactInfo">Your Contact Information</Label>
                <Input
                  id="contactInfo"
                  value={customOrder.contactInfo}
                  onChange={(e) => setCustomOrder({...customOrder, contactInfo: e.target.value})}
                  placeholder="Your name, company, phone number"
                  required
                />
              </div>
              
              <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700">
                <MessageCircle className="w-4 h-4 mr-2" />
                Send Custom Order via WhatsApp
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Need More Information?</h3>
          <p className="text-gray-600 mb-6">
            Our dry fruits experts are here to help you find the perfect products for your needs.
          </p>
          <div className="flex justify-center space-x-4">
            <Button 
              className="bg-green-600 hover:bg-green-700"
              onClick={() => window.open('https://wa.me/917397248359?text=Hi%2C%20I%20need%20information%20about%20dry%20fruits%20from%20HKS%20Provisions', '_blank')}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp Us
            </Button>
            <Button 
              variant="outline"
              onClick={() => window.open('tel:+917397248359')}
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
            <Button 
              variant="outline"
              onClick={() => window.open('mailto:info@hksprovisions.com')}
            >
              <Mail className="w-4 h-4 mr-2" />
              Email Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DryFruits;
