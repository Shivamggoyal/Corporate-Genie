import React, { useState } from 'react';
import { ArrowLeft, MessageCircle, ZoomIn } from 'lucide-react';
import { Product } from '../App';
import { SEO } from './SEO';

interface ProductGalleryProps {
  product: Product;
  onBack: () => void;
}

export function ProductGallery({ product, onBack }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white pt-24 pb-12 px-6">
      <SEO 
        title={product.title}
        description={product.description}
        image={product.images[0]}
      />
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-700 hover:text-cyan-600 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Products</span>
        </button>

        {/* Header */}
        <div
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-7xl mb-4 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            {product.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            {product.description}
          </p>
          <a
            href="https://wa.me/9205356196"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full hover:shadow-xl transition-shadow"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Inquire on WhatsApp</span>
          </a>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {product.images.map((image, index) => (
            <div key={index} className="flex flex-col gap-2 relative">
              <div
                className="group relative aspect-square overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={`${product.title} ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full">
                    <ZoomIn className="w-5 h-5 text-cyan-600" />
                  </div>
                </div>
              </div>
              
              <a
                href={`https://wa.me/919205356196?text=${encodeURIComponent(
                  `Hello, I am interested in this product: ${product.title}. Please provide a quote.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 flex items-center justify-center gap-1.5 bg-green-500 hover:bg-green-600 text-white py-2 px-3 rounded-lg transition-colors font-medium shadow-sm hover:shadow-md text-xs w-full"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Get Quote</span>
              </a>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div
          className="mt-16 bg-white rounded-3xl shadow-lg p-8 md:p-12"
        >
          <h2 className="text-3xl mb-6 text-center bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            Why Choose Our {product.title}?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">✓</span>
              </div>
              <h3 className="mb-2 text-gray-900">Premium Quality</h3>
              <p className="text-gray-600 text-sm">
                High-quality materials and expert craftsmanship
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">⚡</span>
              </div>
              <h3 className="mb-2 text-gray-900">Fast Delivery</h3>
              <p className="text-gray-600 text-sm">
                Quick turnaround times for urgent orders
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🎨</span>
              </div>
              <h3 className="mb-2 text-gray-900">Custom Branding</h3>
              <p className="text-gray-600 text-sm">
                Personalized designs to match your brand identity
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div
          className="mt-12 text-center bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl p-12 text-white"
        >
          <h2 className="text-4xl mb-4">Ready to Order?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get in touch with us to discuss your requirements and get a custom quote
          </p>
          <a
            href="https://wa.me/9205356196"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-cyan-600 px-8 py-4 rounded-full hover:shadow-2xl transition-shadow"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Start a Conversation</span>
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-cyan-400 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={selectedImage}
            alt="Full size"
            className="max-w-full max-h-full object-contain rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
