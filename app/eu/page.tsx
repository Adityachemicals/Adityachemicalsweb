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
  title: "Aditya Chemicals Europe | EP Standard & EU-REACH Compliant Chemicals",
  description: "Aditya Chemicals EU division supplies high-purity APIs, chelated minerals, and excipients in bulk. Fully compliant with EP standards and EU REACH registrations.",
  keywords: "chemical manufacturer Europe, API manufacturing company Europe, bulk chelated minerals supplier EU, amino acids exporter Europe, REACH registered chemical company, chelated minerals factory Europe, glycine factory Europe",
  alternates: {
    canonical: "https://www.adityachemicals.in/eu",
  }
};

export default function EUHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Aditya Chemicals Europe",
              "url": "https://www.adityachemicals.in/eu",
              "logo": "https://www.adityachemicals.in/logos/LOGO.png",
              "description": "Aditya Chemicals is a leading global API & Chelated Minerals manufacturer, supplying high-purity chemicals to Europe under REACH compliance."
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
