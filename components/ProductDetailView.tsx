import Image from "next/image";
import Link from "next/link";
import ScrollBackground from "@/components/ScrollBackground";
import Interactive3DMolecule from "@/components/Interactive3DMolecule";
import { Product, Category } from "@/data/products";

// Crisp Chemical Structure Image for Calcium Glycerophosphate
function CalciumGlycerophosphateStructure() {
  return (
    <div className="flex flex-col items-center justify-center p-2 bg-white border border-surface-container-highest rounded-2xl h-full min-h-[220px]">
      <div className="relative w-full h-[180px] max-w-[340px]">
        <Image
          src="/aditya chemicals images/Calcium/product card/calcium-glycerophosphate-structure.jpg"
          alt="Calcium Glycerophosphate Chemical Structure & Formula"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}

// Crisp Vector Chemical Structure diagram for DL-Methionine
function DLMethionineStructure() {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white border border-surface-container-highest rounded-2xl h-full min-h-[220px] relative">
      <Interactive3DMolecule />
    </div>
  );
}

// Fallback Molecular Art SVG for other products
function GenericMolecularStructure({ formula }: { formula?: string }) {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white border border-surface-container-highest rounded-2xl h-full min-h-[220px]">
      <svg viewBox="0 0 200 120" className="w-28 h-auto opacity-75" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="60" r="16" fill="#015095" opacity="0.8" />
        <circle cx="100" cy="35" r="12" fill="#3B82F6" opacity="0.8" />
        <circle cx="150" cy="60" r="16" fill="#10B981" opacity="0.8" />
        <circle cx="100" cy="85" r="14" fill="#F59E0B" opacity="0.8" />
        <line x1="50" y1="60" x2="100" y2="35" stroke="#64748B" strokeWidth="2" />
        <line x1="100" y1="35" x2="150" y2="60" stroke="#64748B" strokeWidth="2" />
        <line x1="150" y1="60" x2="100" y2="85" stroke="#64748B" strokeWidth="2" />
        <line x1="100" y1="85" x2="50" y2="60" stroke="#64748B" strokeWidth="2" />
      </svg>
      <span className="text-xs font-mono font-bold text-deep-navy mt-4 select-none">
        {formula || "Molecular Structure"}
      </span>
    </div>
  );
}

interface ProductDetailViewProps {
  product: Product;
  parentCat: Category | null | undefined;
  subCat: Category | null | undefined;
  region: 'default' | 'us' | 'uk' | 'eu';
}

export default function ProductDetailView({ product, parentCat, subCat, region }: ProductDetailViewProps) {
  // Extract regional copy if available, otherwise fallback
  const regional = product.regionalContent?.[region as keyof typeof product.regionalContent];
  const introText = regional?.intro || product.description || `Aditya Chemicals offers high-purity ${product.name}, manufactured to consistent quality standards supporting pharmaceutical, nutraceutical, dietary, and commercial applications worldwide.`;
  const complianceText = regional?.complianceNote || "Manufactured under stringent quality control systems in compliance with BP/EP/USP/FCC standards. Each batch is strictly tested to ensure purity, potency, and safety for use in nutraceutical, pharmaceutical, and food formulations worldwide.";
  const shippingNoteText = regional?.shippingNote || "";

  // Dynamic area served string
  const areaServedMap = {
    us: "US",
    uk: "GB",
    eu: "EU",
    default: "IN"
  };
  const areaServed = areaServedMap[region] || "IN";

  // Build chemical-specific JSON-LD Product schema without offers (Step 2 & 5)
  const productSchema: any = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": `https://www.adityachemicals.com${product.imagePath}`,
    "description": introText,
    "category": product.categoryTag,
    "mpn": product.casNumber,
    "brand": {
      "@type": "Brand",
      "name": "Aditya Chemicals"
    },
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "CAS Registry Number",
        "value": product.casNumber
      },
      {
        "@type": "PropertyValue",
        "name": "Target Region",
        "value": areaServed
      }
    ]
  };

  if (product.details?.formula) {
    productSchema.additionalProperty.push({
      "@type": "PropertyValue",
      "name": "Chemical Formula",
      "value": product.details.formula
    });
  }
  if (product.details?.weight) {
    productSchema.additionalProperty.push({
      "@type": "PropertyValue",
      "name": "Molecular Weight",
      "value": product.details.weight
    });
  }
  if (product.details?.grade) {
    productSchema.additionalProperty.push({
      "@type": "PropertyValue",
      "name": "Grades",
      "value": product.details.grade
    });
  }

  // Inject specific LocalBusiness based on region (Step 5)
  let localBusinessSchema: any = null;
  if (region === "us") {
    localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Aditya Chemicals USA Warehouse",
      "image": "https://www.adityachemicals.com/aditya_logo.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "6550 E Roger Cir",
        "addressLocality": "Boca Raton",
        "addressRegion": "FL",
        "postalCode": "33487",
        "addressCountry": "US"
      }
    };
  } else {
    // default, uk, eu
    localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Aditya Chemicals Corporate Office",
      "image": "https://www.adityachemicals.com/aditya_logo.png",
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
    };
  }

  let faqSchema: any = null;
  if (product.slug === "dl-methionine-2") {
    faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is DL-Methionine the same as L-Methionine?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. L-Methionine is the naturally occurring isomer found in food proteins, while DL-Methionine is a racemic mixture of the D- and L-forms produced synthetically. In monogastric animals, the D-form is efficiently converted to the biologically active L-form, making DL-Methionine an effective and widely used substitute in feed formulation."
          }
        },
        {
          "@type": "Question",
          "name": "What is the shelf life of DL-Methionine?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "When stored correctly in a well-closed container away from moisture and direct sunlight, DL-Methionine has a shelf life of 5 years from the date of manufacture."
          }
        },
        {
          "@type": "Question",
          "name": "Do you supply DL-Methionine to the USA, UK, and Europe?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Aditya Chemicals regularly exports DL-Methionine to buyers across North America and Europe, supported by a dedicated warehouse facility in Boca Raton, Florida, USA, in addition to direct exports from our India manufacturing plant."
          }
        },
        {
          "@type": "Question",
          "name": "What packaging options are available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Standard packaging is 25 kg fiber drums or multi-wall paper bags with a PE inner liner. Custom packaging and labeling can be arranged for bulk and private-label orders."
          }
        },
        {
          "@type": "Question",
          "name": "Can you provide a Certificate of Analysis (COA) and MSDS?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, a COA and MSDS/SDS are provided with every shipment, and can also be shared in advance upon request for regulatory or import documentation purposes."
          }
        }
      ]
    };
  }

  // Pre-calculate regional prefix path
  const regionalPath = region === 'default' ? '' : `/${region}`;

  return (
    <>
      <ScrollBackground />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      {localBusinessSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      )}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* PREMIUM FULL-WIDTH LIGHT HERO SECTION */}
      <div className="w-full bg-background text-on-surface pt-28 pb-16 relative overflow-hidden select-none">
        {/* Background Glowing Ambient Orbs */}
        <div className="absolute top-20 right-10 w-[450px] h-[450px] bg-primary/5 rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute -bottom-10 left-10 w-[350px] h-[350px] bg-emerald-500/5 rounded-full blur-[90px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/[0.02] via-transparent to-transparent pointer-events-none" />

        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop space-y-8 relative z-10">

          {/* Breadcrumbs */}
          <nav className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-on-surface-variant font-medium leading-relaxed">
            <Link href={`${regionalPath}/`} className="hover:text-primary transition-colors">Home</Link>
            <span className="material-symbols-outlined text-[10px] md:text-xs text-outline/60">chevron_right</span>
            <Link href={`${regionalPath}/products`} className="hover:text-primary transition-colors">Products</Link>
            <span className="material-symbols-outlined text-[10px] md:text-xs text-outline/60">chevron_right</span>
            {parentCat && (
              <Link href={`${regionalPath}/product-category/${parentCat.slug}`} className="hover:text-primary transition-colors">
                {parentCat.name}
              </Link>
            )}
            {subCat && (
              <>
                <span className="material-symbols-outlined text-[10px] md:text-xs text-outline/60">chevron_right</span>
                <Link href={`${regionalPath}/product-category/${subCat.slug}`} className="hover:text-primary transition-colors">
                  {subCat.name}
                </Link>
              </>
            )}
            <span className="material-symbols-outlined text-[10px] md:text-xs text-outline/60">chevron_right</span>
            <span className="text-on-surface font-bold">{product.name}</span>
          </nav>

          {/* Hero Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-6">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-bold uppercase tracking-wider">
                {product.categoryTag}
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold text-deep-navy tracking-tight leading-none uppercase font-headline-md">
                {product.name}
              </h1>

              {product.slug === "calcium-glycerophosphate" && (
                <p className="text-lg md:text-xl font-semibold text-primary italic">
                  Highly Bioavailable Calcium & Phosphorus for Bone & Dental Health
                </p>
              )}
              {product.slug === "dl-methionine-2" && (
                <p className="text-lg md:text-xl font-semibold text-primary italic">
                  Essential Sulfur-Containing Amino Acid for Feed, Pharma & Nutraceuticals
                </p>
              )}

              <p className="text-on-surface-variant text-base md:text-lg leading-relaxed font-light">
                {introText}
              </p>

              {/* USP Row: Calcium Glycerophosphate */}
              {product.slug === "calcium-glycerophosphate" && (
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-4">
                  <div className="bg-surface-container-low/60 p-3 rounded-2xl border border-surface-container-highest/60 text-center flex flex-col items-center justify-center space-y-2 hover:bg-surface-container-low transition-colors duration-300">
                    <div className="w-10 h-10 md:w-11 md:h-11 bg-white rounded-full flex items-center justify-center overflow-hidden p-1 shadow-sm border border-surface-container-highest/50">
                      <div className="relative w-full h-full mix-blend-multiply">
                        <Image src="/aditya chemicals images/Calcium/logos/logo-bone-dental.png" alt="Bone & Dental Support" fill className="object-contain" />
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-deep-navy leading-snug">Bone & Dental</span>
                  </div>
                  <div className="bg-surface-container-low/60 p-3 rounded-2xl border border-surface-container-highest/60 text-center flex flex-col items-center justify-center space-y-2 hover:bg-surface-container-low transition-colors duration-300">
                    <div className="w-10 h-10 md:w-11 md:h-11 bg-white rounded-full flex items-center justify-center overflow-hidden p-1 shadow-sm border border-surface-container-highest/50">
                      <div className="relative w-full h-full mix-blend-multiply">
                        <Image src="/aditya chemicals images/Calcium/logos/logo-bioavailability.png" alt="High Bioavailability" fill className="object-contain" />
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-deep-navy leading-snug">Bioavailability</span>
                  </div>
                  <div className="bg-surface-container-low/60 p-3 rounded-2xl border border-surface-container-highest/60 text-center flex flex-col items-center justify-center space-y-2 hover:bg-surface-container-low transition-colors duration-300">
                    <div className="w-10 h-10 md:w-11 md:h-11 bg-white rounded-full flex items-center justify-center overflow-hidden p-1 shadow-sm border border-surface-container-highest/50">
                      <div className="relative w-full h-full mix-blend-multiply">
                        <Image src="/aditya chemicals images/Calcium/logos/logo-stomach.png" alt="Gentle on Stomach" fill className="object-contain" />
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-deep-navy leading-snug">Gentle Stomach</span>
                  </div>
                  <div className="bg-surface-container-low/60 p-3 rounded-2xl border border-surface-container-highest/60 text-center flex flex-col items-center justify-center space-y-2 hover:bg-surface-container-low transition-colors duration-300">
                    <div className="w-10 h-10 md:w-11 md:h-11 bg-white rounded-full flex items-center justify-center overflow-hidden p-1 shadow-sm border border-surface-container-highest/50">
                      <div className="relative w-full h-full mix-blend-multiply">
                        <Image src="/aditya chemicals images/Calcium/logos/logo-clean-label.png" alt="Clean Label Friendly" fill className="object-contain" />
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-deep-navy leading-snug">Clean Label</span>
                  </div>
                  <div className="bg-surface-container-low/60 p-3 rounded-2xl border border-surface-container-highest/60 text-center flex flex-col items-center justify-center space-y-2 hover:bg-surface-container-low transition-colors duration-300">
                    <div className="w-10 h-10 md:w-11 md:h-11 bg-white rounded-full flex items-center justify-center overflow-hidden p-1 shadow-sm border border-surface-container-highest/50">
                      <div className="relative w-full h-full mix-blend-multiply">
                        <Image src="/aditya chemicals images/Calcium/logos/logo-easy-formulate.png" alt="Easy to Formulate" fill className="object-contain" />
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-deep-navy leading-snug">Easy Formulate</span>
                  </div>
                </div>
              )}

              {/* USP Row: DL-Methionine */}
              {product.slug === "dl-methionine-2" && (
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-4">
                  <div className="bg-surface-container-low/60 p-3 rounded-2xl border border-surface-container-highest/60 text-center flex flex-col items-center justify-center space-y-2 hover:bg-surface-container-low transition-colors duration-300">
                    <div className="w-10 h-10 md:w-11 md:h-11 rounded-full border border-primary/20 bg-primary/5 flex items-center justify-center text-primary">
                      <svg viewBox="0 0 100 100" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
                        <path d="M50 24C38 24 32 28 32 39c0 16 13 25 18 29 5-4 18-13 18-29 0-11-6-15-18-15z" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinejoin="round" />
                        <path d="M42 46l6 6 10-10" fill="none" stroke="#10b981" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-[10px] font-bold text-deep-navy leading-snug">Pharma Purity</span>
                  </div>
                  <div className="bg-surface-container-low/60 p-3 rounded-2xl border border-surface-container-highest/60 text-center flex flex-col items-center justify-center space-y-2 hover:bg-surface-container-low transition-colors duration-300">
                    <div className="w-10 h-10 md:w-11 md:h-11 rounded-full border border-primary/20 bg-primary/5 flex items-center justify-center text-primary">
                      <svg viewBox="0 0 100 100" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
                        <path d="M35 50a15 15 0 1 1 30 0 15 15 0 0 1-30 0z" fill="none" stroke="currentColor" strokeWidth="4" />
                        <path d="M50 20v15M50 65v15M20 50h15M65 50h15" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
                        <path d="M45 48l4 4 8-8" fill="none" stroke="#10b981" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-[10px] font-bold text-deep-navy leading-snug">GMP & ISO</span>
                  </div>
                  <div className="bg-surface-container-low/60 p-3 rounded-2xl border border-surface-container-highest/60 text-center flex flex-col items-center justify-center space-y-2 hover:bg-surface-container-low transition-colors duration-300">
                    <div className="w-10 h-10 md:w-11 md:h-11 rounded-full border border-primary/20 bg-primary/5 flex items-center justify-center text-primary">
                      <svg viewBox="0 0 100 100" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
                        <path d="M50 25c-8 12-16 20-16 30 0 9 7 16 16 16s16-7 16-16c0-10-8-18-16-30z" fill="none" stroke="currentColor" strokeWidth="4" />
                        <path d="M42 55h16M50 47v16" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
                      </svg>
                    </div>
                    <span className="text-[10px] font-bold text-deep-navy leading-snug">Feed & Animal</span>
                  </div>
                  <div className="bg-surface-container-low/60 p-3 rounded-2xl border border-surface-container-highest/60 text-center flex flex-col items-center justify-center space-y-2 hover:bg-surface-container-low transition-colors duration-300">
                    <div className="w-10 h-10 md:w-11 md:h-11 rounded-full border border-primary/20 bg-primary/5 flex items-center justify-center text-primary">
                      <svg viewBox="0 0 100 100" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
                        <path d="M50 30c-15 0-22 10-22 20s12 22 22 22 22-12 22-22-7-20-22-20z" fill="none" stroke="currentColor" strokeWidth="4" />
                        <path d="M44 48h12M50 42v12" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
                      </svg>
                    </div>
                    <span className="text-[10px] font-bold text-deep-navy leading-snug">Liver Support</span>
                  </div>
                  <div className="bg-surface-container-low/60 p-3 rounded-2xl border border-surface-container-highest/60 text-center flex flex-col items-center justify-center space-y-2 hover:bg-surface-container-low transition-colors duration-300">
                    <div className="w-10 h-10 md:w-11 md:h-11 rounded-full border border-primary/20 bg-primary/5 flex items-center justify-center text-primary">
                      <svg viewBox="0 0 100 100" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30 38l20-10 20 10v24L50 72 30 62V38z" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinejoin="round" />
                        <path d="M30 38l20 10 20-10M50 48v24" stroke="currentColor" strokeWidth="3" />
                      </svg>
                    </div>
                    <span className="text-[10px] font-bold text-deep-navy leading-snug">Bulk Export</span>
                  </div>
                </div>
              )}
            </div>

            {/* Right Stats Column */}
            <div className="lg:col-span-4 flex flex-col space-y-6">
              <div className="w-full bg-surface-container-low/60 border border-surface-container-highest/60 rounded-3xl p-6 md:p-8 flex flex-col gap-6 shadow-sm">
                <h3 className="text-sm font-bold text-deep-navy border-b border-surface-container-highest/60 pb-3 select-none uppercase tracking-wider">
                  Quick Facts
                </h3>
                <div className="flex flex-col gap-4 text-left">
                  {product.casNumber && (
                    <div className="space-y-1">
                      <span className="block text-[10px] uppercase tracking-wider text-on-surface-variant/80 font-semibold">CAS Registry No.</span>
                      <span className="text-sm font-bold text-deep-navy font-mono block">{product.casNumber}</span>
                    </div>
                  )}
                  {product.details?.formula && (
                    <div className="space-y-1">
                      <span className="block text-[10px] uppercase tracking-wider text-on-surface-variant/80 font-semibold">Formula</span>
                      <span className="text-sm font-bold text-deep-navy font-mono block">{product.details.formula}</span>
                    </div>
                  )}
                  {product.details?.weight && (
                    <div className="space-y-1">
                      <span className="block text-[10px] uppercase tracking-wider text-on-surface-variant/80 font-semibold">Molecular Wt.</span>
                      <span className="text-sm font-bold text-deep-navy font-mono block">{product.details.weight}</span>
                    </div>
                  )}
                  {product.details?.grade && (
                    <div className="space-y-1">
                      <span className="block text-[10px] uppercase tracking-wider text-on-surface-variant/80 font-semibold">Grades</span>
                      <span className="text-sm font-bold text-primary leading-tight block">{product.details.grade}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* FULL-WIDTH LIGHT DETAILED CONTENT (BENTO GRID SECTION) */}
      <div className="w-full bg-background py-16">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop space-y-16">

          {/* Section 1: Chemical Identity Panel */}
          <div className="grid grid-cols-1 gap-8 items-stretch max-w-4xl mx-auto">

            {/* Chemical Identity Card */}
            <div className="w-full bg-white rounded-[2rem] p-6 md:p-8 border border-surface-container-highest shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between space-y-6">
              <div>
                <h3 className="text-lg font-bold text-deep-navy border-b border-surface-container-highest pb-2 select-none uppercase tracking-wider">
                  Chemical Identity
                </h3>
                <table className="w-full text-xs md:text-sm text-left border-collapse mt-4">
                  <tbody>
                    <tr className="border-b border-surface-container-highest/60">
                      <td className="py-3.5 font-semibold text-deep-navy uppercase w-[40%]">Product Name</td>
                      <td className="py-3.5 text-on-surface-variant font-bold">{product.name}</td>
                    </tr>
                    {product.details?.formula && (
                      <tr className="border-b border-surface-container-highest/60">
                        <td className="py-3.5 font-semibold text-deep-navy uppercase">Molecular Formula</td>
                        <td className="py-3.5 text-on-surface-variant font-mono font-bold text-primary">{product.details.formula}</td>
                      </tr>
                    )}
                    {product.details?.weight && (
                      <tr className="border-b border-surface-container-highest/60">
                        <td className="py-3.5 font-semibold text-deep-navy uppercase">Molecular Weight</td>
                        <td className="py-3.5 text-on-surface-variant font-medium">{product.details.weight}</td>
                      </tr>
                    )}
                    {product.specifications?.iupacName && (
                      <tr className="border-b border-surface-container-highest/60">
                        <td className="py-3.5 font-semibold text-deep-navy uppercase">IUPAC Name</td>
                        <td className="py-3.5 text-on-surface-variant font-medium">{product.specifications.iupacName}</td>
                      </tr>
                    )}
                    {product.casNumber && (
                      <tr className="border-b border-surface-container-highest/60">
                        <td className="py-3.5 font-semibold text-deep-navy uppercase">CAS Registry No.</td>
                        <td className="py-3.5 text-on-surface-variant font-mono font-bold">{product.casNumber}</td>
                      </tr>
                    )}
                    {product.slug === "calcium-glycerophosphate" && (
                      <tr className="border-b border-surface-container-highest/60">
                        <td className="py-3.5 font-semibold text-deep-navy uppercase">EC / EINECS No.</td>
                        <td className="py-3.5 text-on-surface-variant font-mono">248-328-5</td>
                      </tr>
                    )}
                    {product.details?.shelfLife && (
                      <tr className="border-b border-surface-container-highest/60">
                        <td className="py-3.5 font-semibold text-deep-navy uppercase">Shelf Life</td>
                        <td className="py-3.5 text-on-surface-variant">{product.details.shelfLife}</td>
                      </tr>
                    )}
                    {product.details?.grade && (
                      <tr className="border-b border-surface-container-highest/60">
                        <td className="py-3.5 font-semibold text-deep-navy uppercase">Grades Available</td>
                        <td className="py-3.5 text-on-surface-variant font-semibold text-primary">{product.details.grade}</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Shipping Note Alert Box (Step 3) */}
              {shippingNoteText && (
                <div className="flex items-center gap-3 p-4 bg-primary/5 border border-primary/20 rounded-2xl text-xs text-on-surface-variant font-medium leading-relaxed select-none">
                  <span className="material-symbols-outlined text-primary text-xl select-none flex-shrink-0">
                    local_shipping
                  </span>
                  <span>{shippingNoteText}</span>
                </div>
              )}

              <div className="pt-4 border-t border-surface-container-highest/60">
                <Link href={`${regionalPath}/contact?product=${encodeURIComponent(product.name)}`}>
                  <button className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary hover:bg-vibrant-azure text-white rounded-xl font-button text-xs uppercase hover:scale-[0.99] transition-all duration-200 shadow-sm cursor-pointer font-bold tracking-wider text-center">
                    Request Quote / COA / Samples
                    <span className="material-symbols-outlined text-sm select-none">mail</span>
                  </button>
                </Link>
              </div>
            </div>

          </div>

          {/* Section 2: Technical Specifications & Features Split Bento Box */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Features & Benefits Column */}
            {product.features && product.features.length > 0 && (
              <div className="lg:col-span-6 bg-white rounded-[2rem] p-6 md:p-8 border border-surface-container-highest shadow-sm hover:shadow-md transition-shadow duration-300 space-y-6">
                <h2 className="text-xl font-bold text-deep-navy border-b border-surface-container-highest pb-2 select-none uppercase tracking-wider">
                  Key Features & Benefits
                </h2>
                <ul className="space-y-4">
                  {product.features.map((feature, idx) => {
                    const parts = feature.split(': ', 2);
                    return (
                      <li key={idx} className="flex items-start gap-3 text-sm text-on-surface-variant leading-relaxed">
                        <span className="material-symbols-outlined text-primary text-xl mt-0.5 select-none">
                          check_circle
                        </span>
                        <span>
                          {parts.length === 2 ? (
                            <>
                              <strong className="text-deep-navy font-bold">{parts[0]}:</strong> {parts[1]}
                            </>
                          ) : (
                            feature
                          )}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            {/* Technical Specifications Table Column */}
            <div className="lg:col-span-6 bg-white rounded-[2rem] p-6 md:p-8 border border-surface-container-highest shadow-sm hover:shadow-md transition-shadow duration-300 space-y-6">
              <h2 className="text-xl font-bold text-deep-navy border-b border-surface-container-highest pb-2 select-none uppercase tracking-wider">
                {product.slug === "zinc-monomethionine" ? "Physicochemical Properties" : "Technical Specifications"}
              </h2>
              <table className="w-full text-xs md:text-sm text-left border-collapse">
                <thead>
                  <tr className="border-b border-surface-container-highest font-bold text-deep-navy">
                    <th className="py-2.5 uppercase w-[40%]">Parameter</th>
                    <th className="py-2.5 uppercase">Specification</th>
                  </tr>
                </thead>
                <tbody>
                  {product.specifications?.physicalForm && (
                    <tr className="border-b border-surface-container-highest/60">
                      <td className="py-3 font-semibold text-deep-navy">Appearance</td>
                      <td className="py-3 text-on-surface-variant leading-relaxed">{product.specifications.physicalForm}</td>
                    </tr>
                  )}
                  {product.specifications?.zincContent && (
                    <tr className="border-b border-surface-container-highest/60">
                      <td className="py-3 font-semibold text-deep-navy">Zinc Content</td>
                      <td className="py-3 text-on-surface-variant leading-relaxed">{product.specifications.zincContent}</td>
                    </tr>
                  )}
                  {product.specifications?.methionineContent && (
                    <tr className="border-b border-surface-container-highest/60">
                      <td className="py-3 font-semibold text-deep-navy">Methionine Content</td>
                      <td className="py-3 text-on-surface-variant leading-relaxed">{product.specifications.methionineContent}</td>
                    </tr>
                  )}
                  {product.specifications?.assay && (
                    <tr className="border-b border-surface-container-highest/60">
                      <td className="py-3 font-semibold text-deep-navy">Standard Assay</td>
                      <td className="py-3 text-on-surface-variant leading-relaxed">{product.specifications.assay}</td>
                    </tr>
                  )}
                  {product.slug === "calcium-glycerophosphate" && (
                    <>
                      <tr className="border-b border-surface-container-highest/60">
                        <td className="py-3 font-semibold text-deep-navy">Phosphorus Content</td>
                        <td className="py-3 text-on-surface-variant leading-relaxed">12.0% to 13.0% P</td>
                      </tr>
                      <tr className="border-b border-surface-container-highest/60">
                        <td className="py-3 font-semibold text-deep-navy">Loss on Drying</td>
                        <td className="py-3 text-on-surface-variant leading-relaxed">Maximum 12.0%</td>
                      </tr>
                      <tr className="border-b border-surface-container-highest/60">
                        <td className="py-3 font-semibold text-deep-navy">pH (1% Solution)</td>
                        <td className="py-3 text-on-surface-variant leading-relaxed">6.0 – 8.5</td>
                      </tr>
                      <tr className="border-b border-surface-container-highest/60">
                        <td className="py-3 font-semibold text-deep-navy">Heavy Metals (as Pb)</td>
                        <td className="py-3 text-on-surface-variant leading-relaxed">Maximum 10 ppm</td>
                      </tr>
                      <tr className="border-b border-surface-container-highest/60">
                        <td className="py-3 font-semibold text-deep-navy">Arsenic (As)</td>
                        <td className="py-3 text-on-surface-variant leading-relaxed">Maximum 2 ppm</td>
                      </tr>
                      <tr className="border-b border-surface-container-highest/60">
                        <td className="py-3 font-semibold text-deep-navy">Fluoride (F)</td>
                        <td className="py-3 text-on-surface-variant leading-relaxed">Maximum 50 ppm</td>
                      </tr>
                    </>
                  )}
                  {product.slug === "dl-methionine-2" && (
                    <>
                      <tr className="border-b border-surface-container-highest/60">
                        <td className="py-3 font-semibold text-deep-navy">Loss on Drying</td>
                        <td className="py-3 text-on-surface-variant leading-relaxed">&le; 0.5%</td>
                      </tr>
                      <tr className="border-b border-surface-container-highest/60">
                        <td className="py-3 font-semibold text-deep-navy">Heavy Metals</td>
                        <td className="py-3 text-on-surface-variant leading-relaxed">Complies with BP/USP limits</td>
                      </tr>
                      <tr className="border-b border-surface-container-highest/60">
                        <td className="py-3 font-semibold text-deep-navy">Packaging</td>
                        <td className="py-3 text-on-surface-variant leading-relaxed">25 kg fiber drums / multi-wall paper bags with inner PE liner (custom packaging available)</td>
                      </tr>
                    </>
                  )}
                  {product.specifications?.solubility && (
                    <tr className="border-b border-surface-container-highest/60">
                      <td className="py-3 font-semibold text-deep-navy">Solubility</td>
                      <td className="py-3 text-on-surface-variant leading-relaxed">{product.specifications.solubility}</td>
                    </tr>
                  )}
                  {product.specifications?.storage && (
                    <tr>
                      <td className="py-3 font-semibold text-deep-navy">Storage</td>
                      <td className="py-3 text-on-surface-variant leading-relaxed">{product.specifications.storage}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

          </div>

          {/* Section 3: Physical Properties & Target Applications split */}
          {product.slug !== "zinc-monomethionine" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

              {/* Properties Column */}
              <div className="lg:col-span-5 bg-white rounded-[2rem] p-6 md:p-8 border border-surface-container-highest shadow-sm hover:shadow-md transition-shadow duration-300 space-y-6">
                <h2 className="text-xl font-bold text-deep-navy border-b border-surface-container-highest pb-2 select-none uppercase tracking-wider">
                  Physical & Chemical Properties
                </h2>
                <table className="w-full text-xs md:text-sm text-left border-collapse">
                  <thead>
                    <tr className="border-b border-surface-container-highest font-bold text-deep-navy">
                      <th className="py-2.5 uppercase w-[40%]">Property</th>
                      <th className="py-2.5 uppercase">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-surface-container-highest/60">
                      <td className="py-3 font-semibold text-deep-navy">Physical Form</td>
                      <td className="py-3 text-on-surface-variant">{product.specifications?.physicalForm || "White powder"}</td>
                    </tr>
                    <tr className="border-b border-surface-container-highest/60">
                      <td className="py-3 font-semibold text-deep-navy">Odor</td>
                      <td className="py-3 text-on-surface-variant">{product.slug === "dl-methionine-2" ? "Odorless, or with a faint characteristic odor" : "Odorless"}</td>
                    </tr>
                    <tr className="border-b border-surface-container-highest/60">
                      <td className="py-3 font-semibold text-deep-navy">Taste</td>
                      <td className="py-3 text-on-surface-variant">{product.slug === "dl-methionine-2" ? "Slightly bitter to bland" : "Slightly saline / bland"}</td>
                    </tr>
                    {product.slug === "calcium-glycerophosphate" && (
                      <>
                        <tr className="border-b border-surface-container-highest/60">
                          <td className="py-3 font-semibold text-deep-navy">Melting Point</td>
                          <td className="py-3 text-on-surface-variant">Decomposes</td>
                        </tr>
                        <tr className="border-b border-surface-container-highest/60">
                          <td className="py-3 font-semibold text-deep-navy">Bulk Density</td>
                          <td className="py-3 text-on-surface-variant">0.4 – 0.7 g/mL (approx.)</td>
                        </tr>
                        <tr className="border-b border-surface-container-highest/60">
                          <td className="py-3 font-semibold text-deep-navy">Particle Size</td>
                          <td className="py-3 text-on-surface-variant">90% through 100 mesh</td>
                        </tr>
                      </>
                    )}
                    <tr>
                      <td className="py-3 font-semibold text-deep-navy">Solubility Info</td>
                      <td className="py-3 text-on-surface-variant leading-relaxed">{product.specifications?.solubility ? "Sparingly soluble in water, insoluble in ethanol" : "Available upon request"}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Applications Column */}
              {product.applications && product.applications.length > 0 && (
                <div className="lg:col-span-7 space-y-4">
                  <h2 className="text-xl font-bold text-deep-navy border-b border-surface-container-highest pb-2 select-none uppercase tracking-wider">
                    Target Applications
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {product.applications.map((app, idx) => {
                      const parts = app.split(': ', 2);

                      // Dynamically assign an icon for visual elegance
                      let appIcon = "manufacturing";
                      const lowerName = parts[0].toLowerCase();
                      if (lowerName.includes("supplement") || lowerName.includes("nutraceutical")) appIcon = "pill";
                      else if (lowerName.includes("sport") || lowerName.includes("nutrition")) appIcon = "fitness_center";
                      else if (lowerName.includes("pharmaceutical")) appIcon = "medical_services";
                      else if (lowerName.includes("food") || lowerName.includes("beverage")) appIcon = "restaurant";
                      else if (lowerName.includes("clinical") || lowerName.includes("medical")) appIcon = "clinical_notes";
                      else if (lowerName.includes("oral") || lowerName.includes("dental")) appIcon = "dentistry";
                      else if (lowerName.includes("bone") || lowerName.includes("skeletal")) appIcon = "bone";
                      else if (lowerName.includes("animal") || lowerName.includes("feed") || lowerName.includes("poultry")) appIcon = "grain";
                      else if (lowerName.includes("cosmetic") || lowerName.includes("personal care")) appIcon = "science";

                      return (
                        <div key={idx} className="bg-white p-5 rounded-2xl border border-surface-container-highest shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-300 space-y-2 flex flex-col justify-start">
                          <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary text-xl select-none">
                              {appIcon}
                            </span>
                            <h3 className="font-bold text-deep-navy text-sm leading-snug">
                              {parts.length === 2 ? parts[0] : "Application Area"}
                            </h3>
                          </div>
                          <p className="text-xs text-on-surface-variant leading-relaxed">
                            {parts.length === 2 ? parts[1] : app}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

            </div>
          )}

          {/* Section 4: Quality & Regulatory Compliance Banner */}
          <div className="bg-surface-container-low rounded-[2rem] p-8 md:p-10 border border-surface-container-highest flex flex-col items-center justify-center space-y-6 text-center shadow-inner">
            <div className="space-y-2">
              <h3 className="text-lg md:text-xl font-bold text-deep-navy uppercase tracking-wider">
                Quality & Regulatory Compliance
              </h3>
              <p className="text-xs md:text-sm text-on-surface-variant max-w-3xl leading-relaxed">
                {complianceText}
              </p>
            </div>
            {/* Compliance Badges Container */}
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 pt-2">
              <div className="flex flex-col items-center space-y-1 select-none">
                <div className="w-12 h-12 rounded-full bg-white border border-surface-container-highest flex items-center justify-center text-primary text-xs font-black shadow-sm">GMP</div>
                <span className="text-[9px] font-bold text-on-surface-variant uppercase">Certified</span>
              </div>
              <div className="flex flex-col items-center space-y-1 select-none">
                <div className="w-12 h-12 rounded-full bg-white border border-surface-container-highest flex items-center justify-center text-primary text-xs font-black shadow-sm">ISO</div>
                <span className="text-[9px] font-bold text-on-surface-variant uppercase">9001:2015</span>
              </div>
              <div className="flex flex-col items-center space-y-1 select-none">
                <div className="w-12 h-12 rounded-full bg-white border border-surface-container-highest flex items-center justify-center text-primary text-xs font-black shadow-sm">HALAL</div>
                <span className="text-[9px] font-bold text-on-surface-variant uppercase">Certified</span>
              </div>
              <div className="flex flex-col items-center space-y-1 select-none">
                <div className="w-12 h-12 rounded-full bg-white border border-surface-container-highest flex items-center justify-center text-primary text-xs font-black shadow-sm">KOSHER</div>
                <span className="text-[9px] font-bold text-on-surface-variant uppercase">Certified</span>
              </div>
              <div className="flex flex-col items-center space-y-1 select-none">
                <div className="w-12 h-12 rounded-full bg-white border border-surface-container-highest flex items-center justify-center text-primary text-xs font-black shadow-sm">ISO</div>
                <span className="text-[9px] font-bold text-on-surface-variant uppercase">22000:2018</span>
              </div>
            </div>
          </div>

          {/* Section 5: Frequently Asked Questions */}
          {product.slug === "dl-methionine-2" && (
            <div className="space-y-6 pt-8 border-t border-surface-container-highest">
              <h2 className="text-xl md:text-2xl font-bold text-deep-navy uppercase tracking-wider select-none">
                Frequently Asked Questions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-3xl border border-surface-container-highest shadow-sm hover:shadow transition-shadow duration-300 space-y-2">
                  <h3 className="font-bold text-deep-navy text-sm md:text-base leading-snug">
                    Is DL-Methionine the same as L-Methionine?
                  </h3>
                  <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">
                    No. L-Methionine is the naturally occurring isomer found in food proteins, while DL-Methionine is a racemic mixture of the D- and L-forms produced synthetically. In monogastric animals, the D-form is efficiently converted to the biologically active L-form, making DL-Methionine an effective and widely used substitute in feed formulation.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-3xl border border-surface-container-highest shadow-sm hover:shadow transition-shadow duration-300 space-y-2">
                  <h3 className="font-bold text-deep-navy text-sm md:text-base leading-snug">
                    What is the shelf life of DL-Methionine?
                  </h3>
                  <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">
                    When stored correctly in a well-closed container away from moisture and direct sunlight, DL-Methionine has a shelf life of 5 years from the date of manufacture.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-3xl border border-surface-container-highest shadow-sm hover:shadow transition-shadow duration-300 space-y-2">
                  <h3 className="font-bold text-deep-navy text-sm md:text-base leading-snug">
                    Do you supply DL-Methionine to the USA, UK, and Europe?
                  </h3>
                  <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">
                    Yes. Aditya Chemicals regularly exports DL-Methionine to buyers across North America and Europe, supported by a dedicated warehouse facility in Boca Raton, Florida, USA, in addition to direct exports from our India manufacturing plant.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-3xl border border-surface-container-highest shadow-sm hover:shadow transition-shadow duration-300 space-y-2">
                  <h3 className="font-bold text-deep-navy text-sm md:text-base leading-snug">
                    What packaging options are available?
                  </h3>
                  <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">
                    Standard packaging is 25 kg fiber drums or multi-wall paper bags with a PE inner liner. Custom packaging and labeling can be arranged for bulk and private-label orders.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-3xl border border-surface-container-highest shadow-sm hover:shadow transition-shadow duration-300 space-y-2 col-span-1 md:col-span-2">
                  <h3 className="font-bold text-deep-navy text-sm md:text-base leading-snug">
                    Can you provide a Certificate of Analysis (COA) and MSDS?
                  </h3>
                  <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">
                    Yes, a COA and MSDS/SDS are provided with every shipment, and can also be shared in advance upon request for regulatory or import documentation purposes.
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </>
  );
}
