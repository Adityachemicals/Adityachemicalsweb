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
  title: "Aditya Chemicals UK | BP Standard & UK-REACH Compliant Chemicals",
  description: "Aditya Chemicals UK division supplies high-purity APIs, chelated minerals, and excipients in bulk. Fully compliant with BP standards and UK-REACH regulations.",
  keywords: "chemical manufacturer UK, API manufacturing company UK, bulk chelated minerals supplier UK, amino acids exporter UK, GMP certified factory UK, BP compliant chemical manufacturing, UK-REACH registered chemical company, bulk excipients manufacturer UK, pharma chemicals UK, manganese gluconate supplier UK",
  alternates: {
    canonical: "https://www.adityachemicals.in/uk",
  }
};

export default function UKHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Aditya Chemicals UK",
              "url": "https://www.adityachemicals.in/uk",
              "logo": "https://www.adityachemicals.in/logos/LOGO.png",
              "description": "Aditya Chemicals is a leading global API & Chelated Minerals manufacturer, supplying high-purity chemicals to the United Kingdom under BP standard compliance."
            },
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Aditya Chemicals Corporate Office",
              "image": "https://www.adityachemicals.in/logos/LOGO.png",
              "telephone": "+91-79-26854545",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "204, President Plaza, Nr. Thaltej Cross Road, S. G. Highway",
                "addressLocality": "Ahmedabad",
                "addressRegion": "Gujarat",
                "postalCode": "380054",
                "addressCountry": "IN"
              }
            }
          ])
        }}
      />

      {/* Scroll Background Observer */}
      <ScrollBackground />

      {/* Landing Page Sections (Exact Same Premium Design as Global/India) */}
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
