import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { MessageCircle, Send } from 'lucide-react';
import { trackEvent, trackWhatsAppClick } from '../utils/analytics';

type FormValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
  website?: string;
};

export function ContactForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (data: FormValues) => {
    if (data.website) {
      reset();
      return;
    }
    setSubmitting(true);
    const subject = encodeURIComponent(`New inquiry from ${data.name}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\n\nMessage:\n${data.message}\n\nSource: Contact Form`
    );
    trackEvent('contact_submit', { location: 'Contact Form' });
    trackEvent('generate_lead', { location: 'Contact Form', value: 1 });
    window.location.href = `mailto:info@corportaegenie.co.in?subject=${subject}&body=${body}`;
    setTimeout(() => setSubmitting(false), 800);
    reset();
  };

  const whatsappPrefill = (data?: Partial<FormValues>) => {
    const text = encodeURIComponent(
      `Hello Corporate Genie,\n\nI would like to inquire about corporate merchandise.\n` +
      (data?.name ? `Name: ${data.name}\n` : '') +
      (data?.phone ? `Phone: ${data.phone}\n` : '') +
      (data?.message ? `Details:\n${data.message}\n` : '') +
      `\nThanks.`
    );
    trackWhatsAppClick('Contact Form');
    window.open(`https://wa.me/919205356196?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold">
            <span className="bg-gradient-to-r from-cyan-700 to-blue-700 bg-clip-text text-transparent">Contact Us</span>
          </h2>
          <p className="mt-2 text-gray-700">Share your requirements and we will respond quickly.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <form onSubmit={handleSubmit(onSubmit)} className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-gray-200/60">
            <input type="text" className="hidden" tabIndex={-1} autoComplete="off" {...register('website')} />
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm text-gray-700 mb-1">Name</label>
                <input
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-600"
                  {...register('name', { required: true, minLength: 2 })}
                  placeholder="Your name"
                />
                {errors.name && <span className="text-xs text-red-600">Please enter your name</span>}
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">Email</label>
                <input
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-600"
                  {...register('email', { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
                  placeholder="you@example.com"
                />
                {errors.email && <span className="text-xs text-red-600">Enter a valid email</span>}
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">Phone</label>
                <input
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-600"
                  {...register('phone', { required: true, minLength: 8 })}
                  placeholder="+91 9XXXXXXXXX"
                />
                {errors.phone && <span className="text-xs text-red-600">Enter a valid phone</span>}
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">Message</label>
                <textarea
                  rows={5}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-600"
                  {...register('message', { required: true, minLength: 10 })}
                  placeholder="Tell us about the products, quantities, timelines, and branding."
                />
                {errors.message && <span className="text-xs text-red-600">Please add a few details</span>}
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-xl shadow-sm hover:shadow-md transition-all disabled:opacity-60"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Email</span>
                </button>
                <button
                  type="button"
                  onClick={() => whatsappPrefill()}
                  className="inline-flex items-center gap-2 border border-cyan-600 text-cyan-700 px-6 py-3 rounded-xl hover:bg-cyan-50 transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat on WhatsApp</span>
                </button>
              </div>
            </div>
          </form>

          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-gray-200/60">
            <h3 className="text-xl font-medium text-gray-900 mb-3">Contact Details</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Email: info@corportaegenie.co.in</li>
              <li>WhatsApp: +91 9205356196</li>
              <li>Location: Delhi NCR, India</li>
            </ul>
            <div className="mt-6">
              <button
                type="button"
                onClick={() => whatsappPrefill()}
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl shadow-sm transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Start WhatsApp Chat</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
