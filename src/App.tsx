import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { SEO } from './components/SEO';
import { Hero } from './components/Hero';
import { ProductCards } from './components/ProductCards';
import { ProductGallery } from './components/ProductGallery';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { products } from './data/products';
import { Search, PenTool, CheckCircle, Truck, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { trackWhatsAppClick } from './utils/analytics';

export interface Product {
  id: string;
  title: string;
  description: string;
  images: string[];
}

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  if (selectedProduct) {
    return (
      <>
        <Navigation onLogoClick={() => setSelectedProduct(null)} />
        <ProductGallery 
          product={selectedProduct} 
          onBack={() => setSelectedProduct(null)} 
        />
        <Footer />
        <WhatsAppButton />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <SEO />
      <Navigation />
      <Hero />
      <ProductCards products={products} onSelectProduct={setSelectedProduct} />
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-sm border border-gray-200/60">
              <span className="text-gray-700">Simple, fast and quality-first</span>
            </div>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold">
              <span className="bg-gradient-to-r from-cyan-700 to-blue-700 bg-clip-text text-transparent">How It Works</span>
            </h2>
            <p className="mt-2 text-gray-700 max-w-2xl">
              A clear 4-step process from idea to delivery, tailored for corporate merchandise.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
              <div className="bg-gradient-to-r from-cyan-500 to-cyan-700 w-12 h-12 rounded-xl flex items-center justify-center mb-3">
                <Search className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-medium text-gray-900">Share Requirements</h3>
              <p className="text-sm text-gray-700 mt-1">Send logos, quantities, timelines and budget.</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
              <div className="bg-gradient-to-r from-blue-500 to-blue-700 w-12 h-12 rounded-xl flex items-center justify-center mb-3">
                <PenTool className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-medium text-gray-900">Design & Mockups</h3>
              <p className="text-sm text-gray-700 mt-1">We craft options and share realistic previews.</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
              <div className="bg-gradient-to-r from-sky-500 to-sky-700 w-12 h-12 rounded-xl flex items-center justify-center mb-3">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-medium text-gray-900">Approve & Finalize</h3>
              <p className="text-sm text-gray-700 mt-1">Lock specs, materials, finish and delivery dates.</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
              <div className="bg-gradient-to-r from-cyan-600 to-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mb-3">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-medium text-gray-900">Produce & Deliver</h3>
              <p className="text-sm text-gray-700 mt-1">Quality production with on-time doorstep delivery.</p>
            </div>
          </div>
          <div className="mt-8">
            <a
              href="https://wa.me/919205356196?text=Hi%20Corporate%20Genie%2C%20I%27d%20like%20to%20start%20a%20merch%20order."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('Home Page - Start Project')}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-xl shadow-sm hover:shadow-md transition-all"
            >
              <span>Start a Project on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
