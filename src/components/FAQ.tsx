
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqData: FAQItem[] = [
    {
      question: "What types of products does HKS Provisions offer?",
      answer: "We offer a comprehensive range of agricultural products including premium tea (CTC, Orthodox, Green), quality rice varieties (Basmati, Non-Basmati, Parboiled), premium wheat, aromatic spices, and high-quality dry fruits and nuts."
    },
    {
      question: "Do you export internationally?",
      answer: "Yes, we export our products to various countries worldwide. We have experience in international trade and ensure all export documentation and quality standards are met for smooth international transactions."
    },
    {
      question: "What quality certifications do you have?",
      answer: "We maintain strict quality control measures and hold various certifications including food safety standards, organic certifications where applicable, and export quality certifications. All our products undergo rigorous quality testing."
    },
    {
      question: "What is your minimum order quantity?",
      answer: "Minimum order quantities vary by product type and destination. Please contact us through WhatsApp or our inquiry form for specific MOQ details based on your requirements."
    },
    {
      question: "How do you ensure product quality?",
      answer: "We have a comprehensive quality control process that includes sourcing from trusted suppliers, in-house testing facilities, proper storage conditions, and regular quality audits. Each batch is tested before dispatch."
    },
    {
      question: "What are your payment terms?",
      answer: "We offer flexible payment terms depending on the order size and customer relationship. Common options include advance payment, Letter of Credit (L/C), and other mutually agreed terms for international transactions."
    },
    {
      question: "How long does shipping take?",
      answer: "Shipping time depends on the destination and shipping method. Domestic deliveries typically take 3-7 days, while international shipments can take 15-30 days depending on the country and shipping mode."
    },
    {
      question: "Can I get samples before placing a bulk order?",
      answer: "Yes, we provide samples for quality evaluation. Sample costs and shipping charges may apply, which can often be adjusted against future bulk orders."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4 animate-fade-in">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up">
            Find answers to common questions about our products, services, and processes.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <Card 
              key={index} 
              className="overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-800 pr-4">
                  {faq.question}
                </h3>
                {openItems.includes(index) ? (
                  <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openItems.includes(index) && (
                <CardContent className="px-6 pb-6 pt-0">
                  <div className="text-gray-600 leading-relaxed animate-fade-in">
                    {faq.answer}
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
