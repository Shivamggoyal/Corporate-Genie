import React from 'react';
import { motion, useInView } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Product } from '../App';
import { HeicImage } from './HeicImage';

interface ProductCardsProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export function ProductCards({ products, onSelectProduct }: ProductCardsProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="products" ref={ref} className="py-20 px-6 bg-gradient-to-b from-white to-cyan-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-4 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            Our Products
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our range of premium branded merchandise designed to elevate your corporate identity
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <HeicImage
                  src={product.images[0]}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Badge */}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl mb-2 text-gray-900 group-hover:text-cyan-600 transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {product.description}
                </p>

                {/* Button */}
                <button
                  onClick={() => onSelectProduct(product)}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-4"
                >
                  <span>Explore More</span>
                  <ArrowRight className="w-5 h-5 transition-all" />
                </button>
              </div>

              {/* Decorative element */}
              <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-2xl group-hover:w-32 group-hover:h-32 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
