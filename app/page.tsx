import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import AboutSection from "@/components/sections/AboutSection";
import ProductsMarquee from "@/components/sections/ProductsMarquee";
import MarketsBento from "@/components/sections/MarketsBento";
import Innovation from "@/components/sections/Innovation";
import BrandsMarquee from "@/components/sections/BrandsMarquee";
import CTASection from "@/components/sections/CTASection";
import ScrollBackground from "@/components/ScrollBackground";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Aditya Chemicals | Global API & Chelated Minerals Manufacturer & Exporter",
  description: "Aditya Chemicals is a leading GMP-certified API & bulk Chelated Minerals manufacturer. Supplying high-purity chemicals, excipients, and amino acids to the USA, UK, Europe, and globally. Operating under FDA registration & REACH compliance with localized warehousing in Boca Raton, Florida.",
  keywords: "chemical manufacturer, API manufacturing company, bulk chelated minerals supplier, amino acids exporter, GMP certified factory, FDA registered chemical plant, USA chemical supplier, Europe chemical exporter, UK compliant chemical manufacturing, chemical factory in USA, chemical factory in UK, chemical factory in Europe, REACH registered chemical company, bulk excipients manufacturer USA, pharma chemicals UK, chelated minerals factory Europe, zinc ascorbate manufacturer USA, manganese gluconate supplier UK, glycine factory Europe, essential amino acids bulk exporter, chemical factory, chemical industry, USA chemical factory, UK chemical factory, Europe chemical factory, USA chemical industry, UK chemical industry, Europe chemical industry",
  alternates: {
    canonical: "https://www.adityachemicals.com",
    languages: {
      "en-US": "https://www.adityachemicals.com",
      "en-GB": "https://www.adityachemicals.com",
      "en-DE": "https://www.adityachemicals.com",
      "en-NL": "https://www.adityachemicals.com",
      "en-FR": "https://www.adityachemicals.com"
    }
  }
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Aditya Chemicals",
              "url": "https://www.adityachemicals.com",
              "logo": "https://www.adityachemicals.com/logos/LOGO.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-79-26854545",
                "contactType": "sales",
                "areaServed": ["US", "GB", "EU", "IN"],
                "availableLanguage": "en"
              },
              "description": "Aditya Chemicals is a leading global API & Chelated Minerals manufacturer. FDA-registered & GMP-certified bulk supplier of Amino Acids, Excipients, and Vitamins to the USA, UK, Europe, and Asia."
            },
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Aditya Chemicals Corporate Office",
              "image": "https://www.adityachemicals.com/logos/LOGO.png",
              "telephone": "+91-79-26854545",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "204, President Plaza, Nr. Thaltej Cross Road, S. G. Highway",
                "addressLocality": "Ahmedabad",
                "addressRegion": "Gujarat",
                "postalCode": "380054",
                "addressCountry": "IN"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "09:30",
                "closes": "18:00"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Aditya Chemicals USA Warehouse",
              "image": "https://www.adityachemicals.com/logos/LOGO.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "6550 E Roger Cir",
                "addressLocality": "Boca Raton",
                "addressRegion": "FL",
                "postalCode": "33487",
                "addressCountry": "US"
              }
            }
          ])
        }}
      />

      {/* Scroll Background Observer */}
      <ScrollBackground />

      {/* Landing Page Sections with Target Scroll Colors */}
      <div data-bg-color="#faf8ff">
        <Hero />
      </div>

      <div data-bg-color="#ffffff">
        <ScrollReveal>
          <ProductsMarquee />
        </ScrollReveal>
      </div>

      <div data-bg-color="#faf8ff">
        <ScrollReveal>
          <AboutSection />
        </ScrollReveal>
      </div>

      <div data-bg-color="#eef2ff">
        <ScrollReveal>
          <MarketsBento />
        </ScrollReveal>
      </div>

      <div data-bg-color="#f2f3ff">
        <ScrollReveal>
          <Innovation />
        </ScrollReveal>
      </div>

      <div data-bg-color="#ffffff">
        <ScrollReveal>
          <BrandsMarquee />
        </ScrollReveal>
      </div>

      <div data-bg-color="#faf8ff">
        <ScrollReveal>
          <CTASection />
        </ScrollReveal>
      </div>
    </>
  );
}
