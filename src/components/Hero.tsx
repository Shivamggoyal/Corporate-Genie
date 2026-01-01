import React, { useEffect, useState } from 'react';
import { Sparkles, Award, Shirt, Package, MessageCircle, ArrowRight } from 'lucide-react';
import { products } from '../data/products';
import { trackWhatsAppClick } from '../utils/analytics';

export function Hero() {
  const sampleImages = products.flatMap(p => p.images.slice(0, 2)).slice(0, 8);
  const base = import.meta.env.BASE_URL;
  const slideshow = [
    `${base}assets/Hero/1.png`,
    `${base}assets/Hero/2.png`,
    `${base}assets/Hero/3.png`,
    `${base}assets/Hero/4.png`,
    `${base}assets/Hero/5.png`,
    `${base}assets/Hero/6.png`,
  ];
  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % slideshow.length);
    }, 6500);
    return () => clearInterval(id);
  }, []);
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-sky-50">
      <div className="absolute inset-0 md:hidden">
        {slideshow.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Hero Background ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1400ms] ${active === i ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[28rem] h-[28rem] rounded-full bg-gradient-to-br from-cyan-200/60 to-blue-200/60 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[36rem] h-[36rem] rounded-full bg-gradient-to-tr from-sky-200/60 to-cyan-200/60 blur-3xl" />
      </div>
      <div className="absolute inset-0 md:hidden backdrop-blur-md bg-white/50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-sm border border-gray-200/60">
              <Sparkles className="w-5 h-5 text-cyan-700" />
              <span className="text-gray-700">Premium Branded Merchandise</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
              <span className="bg-gradient-to-r from-cyan-700 to-blue-700 bg-clip-text text-transparent">Elevate Your Brand</span>
              <br />
              With Stunning Corporate Merchandise
            </h1>

            <p className="text-lg md:text-xl text-gray-700 max-w-xl">
              From desktop essentials to award-winning trophies, we craft memorable branded products that customers love and teams proudly use.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#products" className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-xl shadow-sm hover:shadow-md transition-all">
                <span>Explore Products</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="https://wa.me/919205356196" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-cyan-600 text-cyan-700 px-6 py-3 rounded-xl hover:bg-cyan-50 transition-all">
                <MessageCircle className="w-5 h-5" />
                <span>Get Quote on WhatsApp</span>
              </a>
            </div>

            <div className="flex gap-8 pt-2">
              <div>
                <div className="text-3xl font-semibold bg-gradient-to-r from-cyan-700 to-blue-700 bg-clip-text text-transparent">500+</div>
                <div className="text-gray-600">Products</div>
              </div>
              <div>
                <div className="text-3xl font-semibold bg-gradient-to-r from-cyan-700 to-blue-700 bg-clip-text text-transparent">100+</div>
                <div className="text-gray-600">Clients</div>
              </div>
              <div>
                <div className="text-3xl font-semibold bg-gradient-to-r from-cyan-700 to-blue-700 bg-clip-text text-transparent">Fast</div>
                <div className="text-gray-600">Turnaround</div>
              </div>
            </div>
          </div>

          <div className="relative h-[360px] md:h-[520px] rounded-3xl overflow-hidden hidden md:block">
            {slideshow.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Hero Visual ${i + 1}`}
                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-[1400ms] ${active === i ? 'opacity-100' : 'opacity-0'} p-6`}
              />
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Package, label: 'Desktop Essentials', color: 'from-cyan-500 to-cyan-700' },
              { icon: Shirt, label: 'Custom Apparel', color: 'from-blue-500 to-blue-700' },
              { icon: Award, label: 'Trophies & Medals', color: 'from-sky-500 to-sky-700' },
              { icon: Sparkles, label: 'Premium Quality', color: 'from-cyan-600 to-blue-600' },
            ].map((item, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                <div className={`bg-gradient-to-r ${item.color} w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm text-gray-700 text-center">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
