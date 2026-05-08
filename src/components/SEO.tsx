import { useEffect } from 'react';

export default function SEO() {
  useEffect(() => {
    // 添加结构化数据
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "阿楊命理",
      "alternateName": "A Yang Fortune Telling",
      "description": "專業八字排盤、紫微斗數、風水命理諮詢服務。香港台灣客戶信賴之選。",
      "url": window.location.href,
      "telephone": "+852-9123-4567",
      "email": "master@ayang.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "廣東道100號",
        "addressLocality": "尖沙咀",
        "addressRegion": "九龍",
        "addressCountry": "HK"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "22.3",
        "longitude": "114.17"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "10:00",
        "closes": "22:00"
      },
      "priceRange": "$$",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "500"
      },
      "sameAs": [
        "https://wa.me/85291234567"
      ]
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}
