
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Tea from "./pages/products/Tea";
import Rice from "./pages/products/Rice";
import Wheat from "./pages/products/Wheat";
import Spices from "./pages/products/Spices";
import ProductDetail from "./pages/products/ProductDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products/tea" element={<Tea />} />
          <Route path="/products/rice" element={<Rice />} />
          <Route path="/products/wheat" element={<Wheat />} />
          <Route path="/products/spices" element={<Spices />} />
          <Route path="/products/:category/:subcategory/:product" element={<ProductDetail />} />
          <Route path="/products/:category/:product" element={<ProductDetail />} />
          <Route path="/products/:category" element={<ProductDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
