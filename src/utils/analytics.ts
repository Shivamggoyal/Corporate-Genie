// Utility to handle Google Analytics events safely

declare global {
  interface Window {
    gtag: (
      command: 'event' | 'config' | 'js',
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
    dataLayer: any[];
  }
}

export const trackEvent = (eventName: string, params?: Record<string, string | number | boolean>) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  } else if (import.meta.env.DEV) {
    console.log(`[Analytics] Event: ${eventName}`, params);
  }
};

export const trackWhatsAppClick = (location: string, product?: string) => {
  trackEvent('generate_lead', {
    location,
    product: product || 'General Inquiry',
    value: 1
  });
  trackEvent('whatsapp_click', {
    location,
    product: product || 'General'
  });
};
