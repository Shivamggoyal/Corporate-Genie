import React from 'react';
import { Sparkles, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer id="footer" className="bg-gradient-to-br from-gray-900 via-cyan-900 to-blue-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img
                src={`${import.meta.env.BASE_URL}assets/logo.jpeg`}
                alt="Corporate Genie Logo"
                className="h-12 w-12 md:h-14 md:w-14 object-contain"
              />
              <span className="text-2xl">Corporate Genie</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Your trusted partner for premium branded merchandise. We transform your brand identity with high-quality custom products that leave a lasting impression.
            </p>
            <div className="flex gap-4">
              <a
                href="https://wa.me/9205356196"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="mailto:amang.goyal007@gmail.com"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="mb-4">Products</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button className="hover:text-white transition-colors">
                  Desktop Essentials
                </button>
              </li>
              <li>
                <button className="hover:text-white transition-colors">
                  Employee Joining Kits
                </button>
              </li>
              <li>
                <button className="hover:text-white transition-colors">
                  Custom T-Shirts
                </button>
              </li>
              <li>
                <button className="hover:text-white transition-colors">
                  Trophies & Awards
                </button>
              </li>
              <li>
                <button className="hover:text-white transition-colors">
                  Custom Medals
                </button>
              </li>
              <li>
                <button className="hover:text-white transition-colors">
                  Water Bottles
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4">Contact Us</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>+91 9205356196</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>amang.goyal007@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>619, Sadar Main Bazar, New Delhi, 110006</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Corporate Genie. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
