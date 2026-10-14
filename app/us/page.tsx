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
  title: "Aditya Chemicals USA | FDA Registered & Bulk Excipients Supplier",
  description: "Aditya Chemicals US division supplies high-purity APIs, chelated minerals, and excipients in bulk. Local warehousing in Boca Raton, Florida for fast transit across the United States.",
  keywords: "chemical manufacturer USA, API manufacturing company USA, bulk chelated minerals supplier US, amino acids exporter USA, GMP certified factory USA, FDA registered chemical plant, USA chemical supplier, REACH registered chemical company, bulk excipients manufacturer USA, chelated minerals factory USA, zinc ascorbate manufacturer USA, glycine factory USA",
  alternates: {
    canonical: "https://www.adityachemicals.in/us",
  }
};

export default function USHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Aditya Chemicals USA",
              "url": "https://www.adityachemicals.in/us",
              "logo": "https://www.adityachemicals.in/logos/LOGO.png",
              "description": "Aditya Chemicals is a leading global API & Chelated Minerals manufacturer. Operating under FDA registration & REACH compliance with localized warehousing in Boca Raton, Florida."
            },
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Aditya Chemicals USA Warehouse",
              "image": "https://www.adityachemicals.in/logos/LOGO.png",
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
