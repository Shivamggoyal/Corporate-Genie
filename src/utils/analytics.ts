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

export const trackEvent = (
  eventName: string,
  params?: Record<string, string | number | boolean>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  } else {
    // Log to console in development if GA is not initialized
    if (import.meta.env.DEV) {
      console.log(`[Analytics] Event: ${eventName}`, params);
    }
  }
};

export const trackWhatsAppClick = (location: string, product?: string) => {
  trackEvent('conversion', {
    'send_to': 'AW-CONVERSION_ID/LABEL', // Placeholder for Google Ads Conversion ID
    'event_category': 'lead',
    'event_label': location,
    'value': 1,
    'product_name': product || 'General Inquiry'
  });
  
  // Also track as a standard GA4 event
  trackEvent('whatsapp_click', {
    location,
    product: product || 'General'
  });
};
