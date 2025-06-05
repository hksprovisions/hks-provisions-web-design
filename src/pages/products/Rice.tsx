
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Package, Globe } from 'lucide-react';
import { getProductsByCategory } from '@/data/products';

const Rice = () => {
  const navigate = useNavigate();
  const riceProducts = getProductsByCategory('rice');

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#2A2A6F] via-[#5353AB] to-[#362F6F] text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Premium Rice Products</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            High-quality rice varieties sourced from India's best rice-growing regions. 
            From aromatic Basmati to versatile non-Basmati varieties, perfect for global markets.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {riceProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300">
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
                        onClick={() => navigate(`/products/rice/${product.subcategory || 'general'}/${product.id}`)}
                      >
                        View Details
                      </Button>
                      <Button 
                        variant="outline"
                        size="icon"
                        className="border-[#5353AB] text-[#5353AB] hover:bg-[#5353AB] hover:text-white"
                        onClick={() => window.open(`https://wa.me/917397248389?text=Hi%2C%20I'm%20interested%20in%20${encodeURIComponent(product.name)}.%20Please%20share%20the%20latest%20quote.`, '_blank')}
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

export default Rice;
