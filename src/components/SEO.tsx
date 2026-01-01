import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = "Corporate Genie - Premium Corporate Gifts & Custom Merchandise India | Delhi NCR",
  description = "Leading corporate gifts supplier in India. Custom merchandise, employee welcome kits, branded apparel, trophies & awards. Fast delivery across Delhi NCR. Premium quality guaranteed.",
  keywords = "corporate gifts India, custom merchandise Delhi, employee joining kits, branded t-shirts, corporate trophies, custom medals, promotional products India, business gifts NCR, branded water bottles, desk essentials",
  image = "/assets/logo.jpeg",
  url = "https://corporategenie.co.in/",
  type = "website"
}) => {
  const siteTitle = title === "Corporate Genie - Premium Corporate Gifts & Merchandise" 
    ? title 
    : `${title} | Corporate Genie`;

  const fullImageUrl = image.startsWith('http') 
    ? image 
    : `${import.meta.env.BASE_URL}${image.startsWith('/') ? image.slice(1) : image}`;

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Corporate Genie" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:site_name" content="Corporate Genie" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullImageUrl} />
    </Helmet>
  );
};
