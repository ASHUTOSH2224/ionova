import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Company from "./pages/Company";
import Demo from "./pages/Demo";
import Resources from "./pages/Resources";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";
import Platform from "./pages/Platform";
import StructuredMandate from "./pages/AddressIntelligence/StructuredMandate";
import BusinessValue from "./pages/AddressIntelligence/BusinessValue";
import Implementation from "./pages/AddressIntelligence/Implementation";
import PurposeBuilt from "./pages/AddressIntelligence/PurposeBuilt";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/company" element={<Company />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/blog/:slug" element={<BlogPost />} />

          {/* Address Intelligence Routes */}
          <Route path="/address-intelligence/structured-address-mandate" element={<StructuredMandate />} />
          <Route path="/address-intelligence/business-value" element={<BusinessValue />} />
          <Route path="/address-intelligence/implementation" element={<Implementation />} />
          <Route path="/address-intelligence/why-purpose-built" element={<PurposeBuilt />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
