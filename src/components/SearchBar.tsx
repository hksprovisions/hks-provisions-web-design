
import React, { useState, useEffect } from 'react';
import { Search, Loader, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

interface SearchResult {
  title: string;
  description: string;
  category: string;
  link: string;
}

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const searchData: SearchResult[] = [
    { title: 'Premium Tea', description: 'Hand-picked tea leaves from finest gardens', category: 'Products', link: '/products/tea' },
    { title: 'Quality Rice', description: 'Premium rice varieties including Basmati', category: 'Products', link: '/products/rice' },
    { title: 'Premium Wheat', description: 'High-grade wheat for flour mills', category: 'Products', link: '/products/wheat' },
    { title: 'Aromatic Spices', description: 'Fresh spices from best regions', category: 'Products', link: '/products/spices' },
    { title: 'Premium Dry Fruits', description: 'High-quality dry fruits and nuts', category: 'Products', link: '/products/dry-fruits' },
    { title: 'About Us', description: 'Learn about HKS Provisions history', category: 'Company', link: '#about' },
    { title: 'Quality & Process', description: 'Our quality control and certifications', category: 'Quality', link: '#certifications' },
    { title: 'Contact', description: 'Get in touch with us', category: 'Contact', link: '#contact' },
  ];

  useEffect(() => {
    if (query.length > 2) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        const filtered = searchData.filter(item =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filtered);
        setIsLoading(false);
        setShowResults(true);
      }, 500);

      return () => clearTimeout(timer);
    } else {
      setResults([]);
      setShowResults(false);
      setIsLoading(false);
    }
  }, [query]);

  const handleResultClick = (link: string) => {
    if (link.startsWith('#')) {
      const element = document.getElementById(link.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = link;
    }
    setShowResults(false);
    setQuery('');
  };

  const clearSearch = () => {
    setQuery('');
    setResults([]);
    setShowResults(false);
  };

  return (
    <div className="relative w-full max-w-md">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input
          type="text"
          placeholder="Search products, services..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-10 pr-10 bg-white/80 backdrop-blur-sm border-gray-200 focus:border-blue-500"
        />
        {query && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {showResults && (
        <Card className="absolute top-full left-0 right-0 mt-2 z-50 shadow-lg max-h-80 overflow-y-auto">
          <CardContent className="p-0">
            {isLoading ? (
              <div className="flex items-center justify-center p-4">
                <Loader className="w-4 h-4 animate-spin mr-2" />
                <span className="text-sm text-gray-600">Searching...</span>
              </div>
            ) : results.length > 0 ? (
              <div className="divide-y divide-gray-100">
                {results.map((result, index) => (
                  <button
                    key={index}
                    onClick={() => handleResultClick(result.link)}
                    className="w-full text-left p-3 hover:bg-gray-50 transition-colors"
                  >
                    <div className="font-medium text-gray-900">{result.title}</div>
                    <div className="text-sm text-gray-600">{result.description}</div>
                    <div className="text-xs text-blue-600 mt-1">{result.category}</div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="p-4 text-sm text-gray-600 text-center">
                No results found for "{query}"
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SearchBar;
