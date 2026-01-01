import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X } from 'lucide-react';

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all hover:scale-110"
        >
          <MessageCircle className="w-7 h-7" />
        </button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-6 z-50 bg-white rounded-2xl shadow-2xl p-6 w-80"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-r from-green-500 to-green-600 p-2 rounded-full">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Chat with us</h3>
                  <p className="text-sm text-gray-500">We typically reply instantly</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-gray-600 mb-4">
              Have questions about our products? We're here to help! Click below to start a WhatsApp conversation.
            </p>

            <a
              href="https://wa.me/919205356196?text=Hi! I'm interested in learning more about your corporate merchandise."
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gradient-to-r from-green-500 to-green-600 text-white text-center py-3 rounded-lg hover:shadow-lg transition-shadow"
            >
              Start WhatsApp Chat
            </a>

            <p className="text-xs text-gray-400 mt-3 text-center">WhatsApp</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
