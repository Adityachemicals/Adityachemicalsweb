export interface Product {
  name: string;
  slug: string;
  casNumber: string;
  categoryTag: string;
  parentCategorySlug: string;
  subCategorySlug?: string;
  imagePath: string;
  description?: string;
  details?: {
    formula?: string;
    weight?: string;
    shelfLife?: string;
    grade?: string;
  };
  specifications?: {
    iupacName?: string;
    solubility?: string;
    physicalForm?: string;
    assay?: string;
    storage?: string;
    zincContent?: string;
    methionineContent?: string;
  };
  features?: string[];
  applications?: string[];
  regionalContent?: {
    us?: { intro: string; complianceNote: string; shippingNote: string };
    uk?: { intro: string; complianceNote: string; shippingNote: string };
    eu?: { intro: string; complianceNote: string; shippingNote: string };
  };
}

export interface Category {
  slug: string;
  name: string;
  parentCategorySlug?: string;
  description: string;
  bannerPath: string;
  cardImagePath?: string;
}

export const productCategories: Category[] = [
  {
    slug: "amino-acids-derivatives",
    name: "Amino Acids and Derivatives",
    description: "High-purity essential and non-essential amino acids for pharmaceutical formulations, clinical nutrition, and dietary supplements.",
    bannerPath: "/aditya chemicals images/Amino Acids and Derivatives/Amino Acids & Derivatives Page Hero Banner.png",
    cardImagePath: "/aditya chemicals images/product page/product cards/Amino Acids & Derivatives.png"
  },
  {
    slug: "minerals",
    name: "Chelated Minerals",
    description: "Highly bioavailable mineral glycinates and chelates engineered for optimal absorption, stability, and digestive tolerance.",
    bannerPath: "/aditya chemicals images/Chelated Minerals/Chelated Minerals Page Hero Banner.png",
    cardImagePath: "/aditya chemicals images/product page/product cards/Chelated Minerals.png"
  },
  {
    slug: "calcium",
    name: "Calcium",
    parentCategorySlug: "minerals",
    description: "Premium bioavailable Calcium mineral chelates and salts.",
    bannerPath: "/aditya chemicals images/Calcium/Calcium Category Hero Banner.png",
    cardImagePath: "/aditya chemicals images/Chelated Minerals/product cads/Calcium.png"
  },
  {
    slug: "copper",
    name: "Copper",
    parentCategorySlug: "minerals",
    description: "Premium bioavailable Copper mineral chelates and salts.",
    bannerPath: "/aditya chemicals images/Copper/Copper Category Hero Banner.png",
    cardImagePath: "/aditya chemicals images/Chelated Minerals/product cads/Copper.png"
  },
  {
    slug: "ferrous",
    name: "Iron",
    parentCategorySlug: "minerals",
    description: "Premium bioavailable Iron mineral chelates and salts.",
    bannerPath: "/aditya chemicals images/Ferrous/Ferrous Category Hero Banner.png",
    cardImagePath: "/aditya chemicals images/Chelated Minerals/product cads/ferrous.png"
  },
  {
    slug: "magnesium",
    name: "Magnesium",
    parentCategorySlug: "minerals",
    description: "Premium bioavailable Magnesium mineral chelates and salts.",
    bannerPath: "/aditya chemicals images/Magnesium/Magnesium Category Hero Banner.png",
    cardImagePath: "/aditya chemicals images/Chelated Minerals/product cads/magnesium.png"
  },
  {
    slug: "manganese",
    name: "Manganese",
    parentCategorySlug: "minerals",
    description: "Premium bioavailable Manganese mineral chelates and salts.",
    bannerPath: "/aditya chemicals images/Manganese/Manganese Category Hero Banner.png",
    cardImagePath: "/aditya chemicals images/Chelated Minerals/product cads/Manganese.png"
  },
  {
    slug: "potassium",
    name: "Potassium",
    parentCategorySlug: "minerals",
    description: "Premium bioavailable Potassium mineral chelates and salts.",
    bannerPath: "/aditya chemicals images/Potassium/Potassium Category Hero Banner.png",
    cardImagePath: "/aditya chemicals images/Chelated Minerals/product cads/Potassium.png"
  },
  {
    slug: "zinc",
    name: "Zinc",
    parentCategorySlug: "minerals",
    description: "Premium bioavailable Zinc mineral chelates and salts.",
    bannerPath: "/aditya chemicals images/Zinc/Zinc Category Hero Banner.png",
    cardImagePath: "/aditya chemicals images/Chelated Minerals/product cads/zinc.png"
  },
  {
    slug: "creatine",
    name: "Creatine",
    parentCategorySlug: "minerals",
    description: "Premium bioavailable Creatine mineral formulations and salts.",
    bannerPath: "/aditya chemicals images/Chelated Minerals/Chelated Minerals Page Hero Banner.png",
    cardImagePath: "/aditya chemicals images/product page/product cards/Chelated Minerals.png"
  },
  {
    slug: "vitamins-derivatives",
    name: "Vitamins & Derivatives",
    description: "Premium stable vitamin derivatives and premixes for food fortification, beverages, and therapeutic pharmaceuticals.",
    bannerPath: "/aditya chemicals images/Vitamins & derivatives/Vitamins & Derivatives Hero Banner.png",
    cardImagePath: "/aditya chemicals images/product page/product cards/Vitamins & Derivatives.png"
  },
  {
    slug: "excipients",
    name: "Excipients",
    description: "Pharmaceutical grade binders, lubricants, and stabilizers that ensure formulation uniformity, tableting durability, and controlled API release.",
    bannerPath: "/aditya chemicals images/Excipients/Excipients Category Hero Banner.png",
    cardImagePath: "/aditya chemicals images/product page/product cards/Excipients.png"
  }
];

export const products: Product[] = [
  {
    "name": "DL-Methionine",
    "slug": "dl-methionine-2",
    "casNumber": "59-51-8",
    "categoryTag": "Amino Acids and Derivatives",
    "parentCategorySlug": "amino-acids-derivatives",
    "imagePath": "/aditya chemicals images/Amino Acids and Derivatives/product cards/DL Methionine.png",
    "description": "Aditya Chemicals is a GMP-certified manufacturer and global exporter of DL-Methionine (CAS 59-51-8), an essential sulfur-containing amino acid supplied in bulk quantities to feed manufacturers, pharmaceutical formulators, and nutraceutical brands across Europe, the United Kingdom, and the United States. Every batch is produced under strict quality-controlled conditions and backed by full documentation (COA, MSDS, and regulatory certificates) to support smooth import and customs clearance in your region. Available in feed grade and BP/USP pharmaceutical grade, our DL-Methionine is trusted by animal nutrition companies, dietary supplement brands, and pharmaceutical manufacturers who require consistent purity, reliable particle size, and dependable, on-time global logistics.",
    "details": {
      "formula": "C₅H₁₁NO₂S",
      "weight": "149.21 g/mol",
      "shelfLife": "5 Years",
      "grade": "Feed Grade, BP, USP, FCC"
    },
    "specifications": {
      "iupacName": "2-amino-4-(methylsulfanyl)butanoic acid",
      "solubility": "Sparingly soluble in water; slightly soluble in ethanol; soluble in dilute mineral acids and dilute alkali hydroxide solutions",
      "physicalForm": "White to almost white crystalline powder or flakes",
      "assay": "99.0% – 101.0% (Dried Basis)",
      "storage": "Store in a well-closed, dry container away from direct sunlight and moisture"
    },
    "features": [
      "Consistent, Pharma-Grade Purity: Manufactured to a minimum assay of 99.0–101.0% (dried basis), meeting BP, USP, and FCC pharmacopeial standards for both feed and pharmaceutical applications.",
      "GMP & FSSC-Certified Manufacturing: Produced in an ISO 9001:2015 and FSSC 22000-certified facility, with GMP, HALAL, and KOSHER certification available on request.",
      "Engineered Particle Consistency: Uniform crystalline particle distribution ensures excellent flowability, reduced caking, and accurate weight uniformity during high-speed feed and tablet production.",
      "Full Regulatory Documentation: Every shipment includes a Certificate of Analysis (COA), Safety Data Sheet (SDS/MSDS), and origin documentation to support REACH (EU), FDA (USA), and UK regulatory compliance.",
      "Established Export Infrastructure: With a dedicated USA warehouse in Boca Raton, Florida, alongside direct export from our Gujarat, India manufacturing plant, we offer shorter lead times and flexible shipment sizes for buyers across North America and Europe.",
      "Scalable Bulk Supply: From trial-order quantities to full container loads (FCL), our production capacity is built to support both growing brands and established multinational buyers."
    ],
    "applications": [
      "Animal & Poultry Nutrition (Feed Grade): The largest global application for DL-Methionine. Used as an essential feed additive in poultry, swine, aquaculture, and livestock diets to correct methionine deficiency, improve feed conversion ratio, support lean muscle development, and enhance overall growth performance.",
      "Pharmaceutical Formulations: Used as an active ingredient in amino acid infusions, tablets, capsules, and oral powder formulations, including hepatoprotective (liver-support) preparations where methionine's lipotropic activity assists in regulating fat metabolism within the liver.",
      "Nutraceuticals & Dietary Supplements: Incorporated into multivitamin and amino acid supplement blends aimed at supporting liver detoxification pathways, glutathione production, and general metabolic wellness.",
      "Sports Nutrition: Included in amino acid and protein-blend formulations designed for active lifestyle and performance nutrition products.",
      "Cosmetic & Personal Care Formulations: Used in select topical and hair-care formulations for its role in supporting keratin synthesis and as a mild antioxidant ingredient.",
      "Functional Foods & Fortified Beverages: Suitable for use in fortified food products and nutritional beverages requiring amino acid enrichment."
    ],
    "regionalContent": {
      "us": {
        "intro": "Aditya Chemicals is a leading bulk supplier of high-purity DL-Methionine to the USA market, serving animal nutrition, supplement, and pharmaceutical formulation sectors.",
        "complianceNote": "Our DL-Methionine meets USP/FCC standards. We support US buyers with full FDA registration compliance and complete regulatory dossiers (MSDS, COA).",
        "shippingNote": "Shipped from our FDA-registered Gujarat facility or distributed locally from our Boca Raton, Florida warehouse to ensure rapid US shipping."
      },
      "uk": {
        "intro": "For the UK market, Aditya Chemicals supplies bulk DL-Methionine tailored to animal feed and pharmaceutical applications.",
        "complianceNote": "Complies with BP pharmacopeial standards. We provide complete UK-REACH regulatory support and batch trace certificates.",
        "shippingNote": "Shipped directly to major UK hubs, with flexible freight options available for British distributors."
      },
      "eu": {
        "intro": "Aditya Chemicals provides European buyers with premium bulk DL-Methionine for feed enrichment and pharmaceutical use.",
        "complianceNote": "Fully REACH registered and compliant with European Union regulations. Meets EP (European Pharmacopoeia) specifications.",
        "shippingNote": "Supplied through our European logistics network with complete customs and import clearance."
      }
    }
  },
  {
    "name": "L-Carnitine Fumarate",
    "slug": "l-carnitine-fumarate-ih",
    "casNumber": "90471-79-7",
    "categoryTag": "Amino Acids and Derivatives",
    "parentCategorySlug": "amino-acids-derivatives",
    "imagePath": "/aditya chemicals images/Amino Acids and Derivatives/product cards/L Carnitine Fumarate.png",
    "description": "Aditya Chemical offers a high-quality and stable L-Carnitine fumarate, which is specifically a salt of L-carnitine and fumaric acid, that can be used as a dietary supplement. It is primarily used for its potential cardiovascular support, endurance enhancement, and involvement in energy production. L-carnitine plays a key role in transporting fatty acids into the mitochondria, where they can be burned for energy.",
    "details": {
      "formula": "C₁₁H₁₉NO₇",
      "weight": "276.26 g/mol",
      "shelfLife": "3 years",
      "grade": "IH"
    },
    "specifications": {
      "iupacName": "(E)-but-2-enedioate;[(2R)-3-carboxy-2-hydroxypropyl]-trimethylazanium",
      "solubility": "Sparingly soluble in water, very slightly soluble in alcohol, It dissolves in dilute acids and in dilute solution of the alkali hydroxides.",
      "physicalForm": "Almost white crystalline powder or small flakes",
      "assay": "99.0% to 101.0% on dried basis",
      "storage": "Store in well closed container"
    },
    "features": [
      "Nutritional additives: Supports fat metabolism and energy production, making it a valuable component in products designed for weight management and athletic performance.",
      "Treatment for Fatigue and Metabolic Disorders: Addresses chronic fatigue, hypothyroidism, and muscle disorders by restoring impaired fat metabolism and enhancing mitochondrial cellular function.",
      "Anti-Aging & Skin Repair: Boosts collagen production and improves skin elasticity when formulated into advanced anti-aging topical creams and restorative serums.",
      "Hair & Scalp Care: Stimulates hair growth, improves follicle health, and reduces localized scalp inflammation and dandruff in hair care treatments.",
      "Dual-Action Synergistic Adenosine Triphosphate (ATP) Production: Shuttles long-chain fatty acids into mitochondria for $\\beta$-oxidation while providing fumaric acid directly to the Krebs cycle for enhanced respiration.",
      "Rapid, High-Yield Water Dissolution: Exhibits excellent aqueous solubility, dissolving quickly and cleanly without requiring excessive heat, mechanics, or strong chemical solvents.",
      "Optimized Powder Flow Mechanics: Precipitates into a uniform, non-cohesive crystal shape that resists environmental moisture to ensure smooth, high-speed industrial processing."
    ],
    "applications": [
      "Sports Nutrition: Widely used in pre-workout, endurance, recovery, and performance nutrition formulations for active lifestyle products.",
      "Energy & Wellness: Commonly added to daily wellness supplements designed for energy and nutritional support applications.",
      "Weight Management Formulation: Used in fitness and weight management formulations focused on fat metabolism and body composition support.",
      "Men’s Wellness Supplements: Included in men’s health and fertility support formulations for nutritional wellness applications.",
      "Nutritional Supplement Blends: Suitable for combination formulations with amino acids, vitamins, minerals, and wellness ingredients.",
      "Functional Beverage: Can be incorporated into nutritional drink mixes, health beverages, and wellness drink formulations.",
      "Pharmaceutical Use: Used in health care and clinical goods that require high-quality carnitine ingredients.",
      "Protein & Fitness Nutrition: Are able to be used in combination formulations with vitamins, standardized amino acids, minerals and general wellness ingredients.",
      "L Carnitine L Aspartate",
      "URL: https://www.adityachemicals.in/l-carnitine-fumarate-manufacturer/",
      "Meta Title: L-Carnitine Fumarate Manufacturer & Bulk Supplier",
      "Meta Description: Leading L-Carnitine Fumarate manufacturer offers high-purity ingredients for sports nutrition, wellness, energy & dietary supplement formulations worldwide."
    ],
    "regionalContent": {
      "us": {
        "intro": "Aditya Chemicals supplies high-purity L-Carnitine Fumarate to the US dietary supplement and sports nutrition industries.",
        "complianceNote": "Manufactured under strict cGMP guidelines, complying with FDA regulations and USP standards.",
        "shippingNote": "Available for rapid shipping from our Boca Raton, Florida warehouse or direct bulk export from India."
      },
      "uk": {
        "intro": "We provide premium L-Carnitine Fumarate to UK brands for active lifestyle and health formulations.",
        "complianceNote": "BP compliant and supported by complete UK-REACH documentation.",
        "shippingNote": "Direct delivery to UK locations with structured shipping schedules and comprehensive customs support."
      },
      "eu": {
        "intro": "Aditya Chemicals is a leading exporter of L-Carnitine Fumarate to the European health and wellness sector.",
        "complianceNote": "REACH registered and EP compliant, meeting strict EU purity and quality regulations.",
        "shippingNote": "Shipped directly to European distributors, complete with import declaration support."
      }
    }
  },
  {
    "name": "Glycine",
    "slug": "glycine",
    "casNumber": "56-40-6",
    "categoryTag": "Amino Acids and Derivatives",
    "parentCategorySlug": "amino-acids-derivatives",
    "imagePath": "/aditya chemicals images/Amino Acids and Derivatives/product cards/Glycine.png",
    "description": "Aditya Chemicals is a trusted glycine manufacturer in India, supplying high-quality glycine for pharmaceutical, nutraceutical, food, personal care, and industrial applications. As a reliable glycine supplier and exporter, we provide a versatile amino acid known for its excellent solubility, formulation compatibility, and importance in protein and collagen synthesis. With a strong focus on quality, consistency, and global supply, Aditya Chemicals supports manufacturers seeking dependable glycine for diverse formulation requirements.",
    "details": {
      "formula": "C₂H₅NO₂",
      "weight": "75.07 g/mol",
      "shelfLife": "5 years",
      "grade": "IP/BP/EP/USP/FCC/INJ/IH/Tech"
    },
    "specifications": {
      "iupacName": "2-Aminoacetic acid",
      "solubility": "Freely soluble in water; very slightly soluble in ethanol (95%); practically insoluble in ether",
      "physicalForm": "White, odourless crystalline powder",
      "assay": "98.5% to 101.5%; BP specification 98.5% to 101.0%",
      "storage": "Preserve in a well-closed container at room temperature"
    },
    "features": [
      "Nutritional Supplement: Acts as an essential amino acid source in energy drinks and protein powders to drive muscle growth and tissue repair.",
      "Amino Acid Therapy: Serves as a foundational component in clinical intravenous solutions for patients requiring total parenteral nutrition.",
      "Skin Conditioning Agent: Improves skin hydration, tone, and elasticity when formulated into advanced topical creams, lotions, and anti-aging serums.",
      "Rapid Aqueous Solubilization: Dissolves rapidly and completely in water, producing crystal clear liquid formulations with absolutely no sediment.",
      "Dual-Action Inhibitory Neurotransmission: Calms the central nervous system by regulating motor and sensory pathways to naturally support healthy sleep architectures.",
      "Non-Hygroscopic Crystalline Stability: Resists environmental moisture absorption to prevent powder caking, ensuring smooth industrial flow and an extended shelf-life.",
      "Collagen & Joint Health: Supplies the primary molecular building block required to maintain structural elasticity and strength in skin, tendons, and cartilage.",
      "Antioxidant Production: Acts as a mandatory raw material for synthesizing glutathione, the body's master antioxidant that shields cells from oxidative stress."
    ],
    "applications": [
      "Pharmaceutical Formulations : Used in tablets, capsules, oral liquids, injectables, and amino acid-based pharmaceutical products.",
      "Nutraceutical Products: Incorporated into dietary supplements, wellness formulations, and nutritional blends.",
      "Sports Nutrition: Applied in protein powders, amino acid blends, and active lifestyle formulations.",
      "Functional Foods & Beverages: Suitable for fortified foods, nutritional beverages, and specialty food products.",
      "Collagen & Protein Formulations: Used in collagen-based and protein-enriched product concepts.",
      "Animal Nutrition: Applicable in feed additives and nutritional products for animal health applications.",
      "DL-Methionine",
      "URL: https://www.adityachemicals.in/dl-methionine-manufacturer",
      "Meta Title: DL-Methionine Manufacturer in India | Global Supplier",
      "Meta Description: Trusted DL-Methionine manufacturer providing high-purity amino acid ingredients for pharmaceutical, nutraceutical, food, and animal nutrition products."
    ],
    "regionalContent": {
      "us": {
        "intro": "Aditya Chemicals manufactures premium-grade Glycine, serving as a trusted supplier for US pharma and food formulations.",
        "complianceNote": "Produced in our FDA-registered facility, fully compliant with USP/FCC standards.",
        "shippingNote": "Distributed locally from our Florida warehouse, offering flexible quantities and prompt transit."
      },
      "uk": {
        "intro": "We supply high-purity bulk Glycine to the UK for clinical nutrition, pharmaceutical, and cosmetic formulations.",
        "complianceNote": "Meets BP standards and aligns with UK-REACH requirements for chemical safety.",
        "shippingNote": "Shipped from our India manufacturing hub with direct routes to UK shipping terminals."
      },
      "eu": {
        "intro": "Aditya Chemicals delivers bulk Glycine to European pharmaceutical and food processing companies.",
        "complianceNote": "REACH registered, ensuring compliance with European chemical import regulations and EP standards.",
        "shippingNote": "Managed by our EU logistics partners, offering hassle-free customs clearance and direct delivery."
      }
    }
  },
  {
    "name": "L-Carnitine L-Tartrate",
    "slug": "l-carnitine-l-tartrate-ih",
    "casNumber": "36687-82-8",
    "categoryTag": "Amino Acids and Derivatives",
    "parentCategorySlug": "amino-acids-derivatives",
    "imagePath": "/aditya chemicals images/Amino Acids and Derivatives/product cards/L Carnitine L Tartrate.png",
    "description": "Aditya Chemical’s L-Carnitine L-Tartrate (LCLT) is a highly bioavailable form of L-carnitine, commonly used as a dietary supplement to support energy production, athletic performance, and recovery. It helps transport fatty acids into the mitochondria for energy metabolism, making it popular among athletes and fitness enthusiasts for reducing muscle soreness and enhancing endurance. Additionally, it supports overall metabolic health, fat utilization, and cellular energy balance, contributing to its use in weight management and wellness supplements.",
    "details": {
      "formula": "C₁₈H₃₆N₂O₁₂",
      "weight": "472.49 g/mol",
      "shelfLife": "3 Years",
      "grade": "IH"
    },
    "specifications": {
      "iupacName": "Bis[[(R)-3-carboxy-2-hydroxypropyl| trimethylammonium] L-Tartrate.",
      "solubility": "highly water-soluble and readily dissolves in water at room temperature",
      "physicalForm": "White to off-white crystalline, highly hygroscopic powder",
      "assay": "NLT 98.0%",
      "storage": "Highly hygroscopic powder. Store in a cool, dry place"
    },
    "features": [
      "Enhances nutrient absorption & bioavailability: Highly water-soluble due to the tartrate bond, preventing premature breakdown by gut bacteria. This structural stability ensures maximum absorption into the bloodstream.",
      "Muscle-Tissue Specificity: Uniquely drawn to skeletal muscle rather than the brain, making it the industry standard for athletic performance and recovery.",
      "High Bioavailability: Resists premature breakdown by gut bacteria, ensuring a larger percentage of the active dose safely reaches your muscles.",
      "Chronic Fatigue Syndrome: Supports cellular energy metabolism to directly reduce persistent fatigue and improve overall physical stamina.",
      "Post-Surgical Recovery: Boosts cellular energy availability to promote faster healing and physical recovery following major surgeries.",
      "Cognitive Function & Mental Health: Offers potential applications in improving mental alertness, overall brain health, and supporting neurodegenerative care.",
      "Supports hormonal balance: Increases androgen receptor density in muscle cells, making them more sensitive to testosterone. This helps your body utilize natural hormones more effectively for repair.",
      "Promotes cardiovascular health & heart function: Supplies crucial fatty-acid energy to the hard-working cardiac muscle. It improves blood flow and acts as a gentle vasodilator to reduce the heart's workload."
    ],
    "applications": [
      "Sports Nutrition: Used in athletic nutrition products such as powders, dietary supplements, and performance-oriented supplement formulations.",
      "Dietary Supplements: Suitable for use in dietary supplement products across various dosage formats.",
      "Nutritional Drink Formulations: Works well in nutritional beverages and drink mix products.",
      "Tablet & Capsule Formulations: Easy to incorporate into solid dosage product development.",
      "Wellness Products: Suitable for health and active lifestyle product categories.",
      "Functional Nutrition Products: Used across modern nutritional product formulations.",
      "Pharmaceutical Formulations: Suitable for selected pharmaceutical and nutritional product development.",
      "L-CARNITINE OROTATE",
      "URL: https://www.adityachemicals.in//l-carnitine-orotate-manufacturer/",
      "Meta Title: L Carnitine Orotate Manufacturer | Nutraceutical Grade",
      "Meta Description: L Carnitine Orotate supports cellular energy and mitochondrial function. Ideal ingredient for advanced nutraceutical and performance formulas."
    ],
    "regionalContent": {
      "us": {
        "intro": "Aditya Chemicals provides bulk L-Carnitine L-Tartrate to the US market for sports nutrition and fat recovery formulations.",
        "complianceNote": "Meets USP/FCC specifications, manufactured in our FDA-approved facility.",
        "shippingNote": "Fast delivery within the US via our Boca Raton, Florida warehouse."
      },
      "uk": {
        "intro": "We supply premium L-Carnitine L-Tartrate to the UK for sports supplements and clinical nutrition.",
        "complianceNote": "Fully compliant with BP standards and UK-REACH regulations.",
        "shippingNote": "Regular air and sea freight routes to the UK, ensuring reliable stock availability."
      },
      "eu": {
        "intro": "Aditya Chemicals exports high-grade L-Carnitine L-Tartrate to European food and supplement manufacturers.",
        "complianceNote": "Active REACH registration, conforming to EP quality standards.",
        "shippingNote": "Distributed to EU locations with complete customs handling and logistics tracking."
      }
    }
  },
  {
    "name": "L-Arginine L-Aspartate",
    "slug": "arginine-aspartate-2",
    "casNumber": "7675-83-4",
    "categoryTag": "Amino Acids and Derivatives",
    "parentCategorySlug": "amino-acids-derivatives",
    "imagePath": "/aditya chemicals images/Amino Acids and Derivatives/product cards/Arginine Aspartate.png",
    "description": "Aditya chemicals offers a high purity L-Arginine L-aspartate it is a salt composed of L-Arginine  combined with Aspartic Acid, it is intended for the dietary management of metabolic disorders,  including creatine kinase deficiency, this product also has clinical properties that can be used to treat  skin conditions such as dryness and ichthyosis. Aditya chemical’s Arginine aspartate is a  globally trusted ingredient, manufactured with strict quality standards to meet the requirements of  advanced nutraceutical, dietary ingredients, food and pharmaceutical applications."
  },
  {
    "name": "L-Carnitine Orotate",
    "slug": "l-carnitine-orotate-2",
    "casNumber": "160468-17-7",
    "categoryTag": "Amino Acids and Derivatives",
    "parentCategorySlug": "amino-acids-derivatives",
    "imagePath": "/aditya chemicals images/Amino Acids and Derivatives/product cards/L Carnitine Orotate.png",
    "description": "L-Carnitine Orotate is a specialized carnitine salt that combines the metabolic benefits of L-Carnitine with Orotic Acid. It is widely used in sports nutrition, cardiovascular health, and energy-support formulations, where efficient fatty acid metabolism, cellular energy production, and overall metabolic performance are desired. Its favorable stability and formulation compatibility make it suitable for tablets, capsules, powders, sachets, and functional nutrition products.",
    "details": {
      "formula": "C₁₂H₁₉N₃O₇",
      "weight": "317.3 g/mol",
      "shelfLife": "5 years",
      "grade": "IH"
    },
    "specifications": {
      "iupacName": "(2R)-3-Carboxy-2-hydroxy-N,N,N-trimethylpropan-1-aminium 1,2,3,6-tetrahydro-2,6-dioxo-4-pyrimidinecarboxylate",
      "solubility": "Easily soluble in water and ethanol; almost insoluble in acetone or ethyl acetate",
      "physicalForm": "White to off-white crystalline powder",
      "assay": "using High-Performance Liquid Chromatography (HPLC) to quantify the active ingredients, or via Non-Aqueous Titration for raw bulk purity.",
      "storage": "Store at room temperature. Protect the product from freezing and excessive heat."
    },
    "features": [
      "Enhances nutrient absorption & bioavailability: Highly water-soluble due to the tartrate bond, preventing premature breakdown by gut bacteria. This structural stability ensures maximum absorption into the bloodstream.",
      "Muscle-Tissue Specificity: Uniquely drawn to skeletal muscle rather than the brain, making it the industry standard for athletic performance and recovery.",
      "High Bioavailability: Resists premature breakdown by gut bacteria, ensuring a larger percentage of the active dose safely reaches your muscles.",
      "Chronic Fatigue Syndrome: Supports cellular energy metabolism to directly reduce persistent fatigue and improve overall physical stamina.",
      "Post-Surgical Recovery: Boosts cellular energy availability to promote faster healing and physical recovery following major surgeries.",
      "Cognitive Function & Mental Health: Offers potential applications in improving mental alertness, overall brain health, and supporting neurodegenerative care.",
      "Supports hormonal balance: Increases androgen receptor density in muscle cells, making them more sensitive to testosterone. This helps your"
    ],
    "applications": [
      "Sports & Performance Nutrition: Used in sports and performance-oriented nutritional products developed for active lifestyle categories.",
      "Daily Wellness Supplements: Suitable for wellness formulations designed for routine nutritional product portfolios.",
      "Advanced Nutraceutical Products: Applied across modern nutraceutical developments where formulation flexibility is important.",
      "Nutritional Powder & Sachet Formulations: Works effectively in powder blends and convenient single-serve nutritional formats.",
      "Capsule & Tablet Manufacturing: Suitable for solid dosage product development due to formulation compatibility.",
      "Functional nutrition products: Used in value-added nutritional formulations developed for evolving market needs.",
      "L-LYSINE MONOHYDROCHLORIDE",
      "Url: /l-lysine-monohydrochloride-manufacturer/",
      "Meta title: L-Lysine Monohydrochloride Manufacturer",
      "Meta description: High-purity L-Lysine Monohydrochloride manufacturer and supplier for pharmaceutical, nutraceutical, food, and animal nutrition applications with consistent quality."
    ]
  },
  {
    "name": "L-Carnitine L-Aspartate",
    "slug": "l-carnitine-l-aspartate",
    "casNumber": "20323-95-5",
    "categoryTag": "Amino Acids and Derivatives",
    "parentCategorySlug": "amino-acids-derivatives",
    "imagePath": "/aditya chemicals images/Amino Acids and Derivatives/product cards/Glycine.png",
    "description": "L-Carnitine L-Aspartate is a high-quality ingredient designed for sports nutrition and dietary supplement formulations. Its excellent water solubility, stable powder properties, and versatile processing compatibility make it suitable for tablets, capsules, powders, sachets, and beverage applications. Manufactured under controlled conditions, it delivers consistent quality, reliable batch-to-batch performance, and dependable global supply for commercial-scale production.",
    "details": {
      "formula": "C₇H₁₅NO₃·C₄H₇NO₄ or C₁₁H₂₂N₂O₇",
      "weight": "294.30 g/mol (calculated)",
      "shelfLife": "5 years",
      "grade": "IH"
    },
    "specifications": {
      "iupacName": "(3R)-3-Hydroxy-4-(trimethylazaniumyl)butanoate; (S)-2-Aminobutanedioate",
      "solubility": "highly water-soluble and readily dissolves in water at room temperature",
      "physicalForm": "white, highly water-soluble crystalline powder",
      "assay": "NLT 98.0%",
      "storage": "should be stored in a cool, dry place, ideally at temperatures below 25°C (77°F)"
    },
    "features": [
      "Sports Nutrition & Performance Support: Supports energy metabolism and endurance by promoting efficient fatty acid transport and cellular energy production, making it an ideal ingredient for sports nutrition, recovery, and active lifestyle formulations.",
      "Fat Metabolism & Cellular Energy: Helps transport long-chain fatty acids into the mitochondria for β-oxidation while supporting normal metabolic processes, contributing to efficient energy utilization and reduced physical fatigue.",
      "Muscle Recovery & Reduced Fatigue: L-Aspartic Acid plays a role in amino acid metabolism and energy pathways, supporting post-exercise recovery, muscle function, and reduced exercise-induced fatigue in performance-focused formulations.",
      "Dual-Action Mitochondrial Energy Enhancement: Combines the fatty acid transport capabilities of L-Carnitine with the metabolic support of L-Aspartic Acid, enhancing ATP generation through complementary mitochondrial energy pathways.",
      "Excellent Water Solubility: Dissolves rapidly in aqueous systems, enabling easy incorporation into powders, effervescent tablets, sachets, nutritional beverages, and liquid supplement formulations without complex processing.",
      "Superior Manufacturing Compatibility: Offers excellent flowability, blending uniformity, and stability during processing, ensuring consistent performance across tablets, capsules, stick packs, and powdered nutritional products.",
      "Versatile Formulation Flexibility: Suitable for a wide range of applications including dietary supplements, sports nutrition, functional beverages, medical nutrition, and wellness products, with reliable processing characteristics for large-scale manufacturing."
    ],
    "applications": [
      "Sports Nutrition Products: Widely used across sports and performance nutrition product categories.",
      "Dietary Supplements: Suitable for supplement formulations developed in tablet, capsule, sachet, and powder formats for daily nutritional applications.",
      "Nutraceutical & Beverage: Used across nutraceutical products, nutritional beverages, drink mixes, and ready-to-mix formulations for modern nutrition and wellness categories.",
      "Functional Nutrition Products: Suitable for advanced nutrition formulations developed for changing consumer and market requirements.",
      "Pharmaceutical Applications: Suitable for selected pharmaceutical product categories based on development requirements.",
      "Functional Food & Beverage Products:",
      "Suitable for nutritional beverages, drink mixes, fortified foods, and other functional nutrition applications.",
      "L Carnitine L Tartrate",
      "URL: https://www.adityachemicals.in/l-carnitine-l-tartrate-manufacturer/",
      "Meta Title: L Carnitine L Tartrate Manufacturer & Supplier | Aditya Chemicals",
      "Meta Description: L Carnitine L Tartrate manufacturer supplying nutraceutical-grade ingredients for sports nutrition, dietary supplements, wellness, and functional nutrition products."
    ]
  },
  {
    "name": "L-Lysine Monohydrochloride",
    "slug": "l-lysine-hcl",
    "casNumber": "657-27-2",
    "categoryTag": "Amino Acids and Derivatives",
    "parentCategorySlug": "amino-acids-derivatives",
    "imagePath": "/aditya chemicals images/Amino Acids and Derivatives/product cards/L Lysine HCL.png",
    "description": "Aditya Chemical is a manufacturer of L-Lysine hydrochloride is a vital amino acid compound that plays a crucial role in various biological processes. As a key building block of proteins, it is essential for growth, tissue repair, and the production of hormones and enzymes. This compound is particularly beneficial in the pharmaceutical and nutritional industries, where it is commonly used as a dietary supplement to support muscle recovery and enhance overall health. L-Lysine hydrochloride is also recognized for its potential in improving calcium absorption, which is vital for bone health, making it an excellent choice for formulations aimed at promoting skeletal strength. Product Name: L-Lysine MonohydrochlorideMolecular Formula: C₆H₁₄N₂O₂·HClMolecular Weight: 182.7 g/molCAS No.: 657-27-2Shelf Life: 5 Years",
    "details": {},
    "specifications": {
      "iupacName": "(2S)-2,6-Diaminohexanoic acid hydrochloride",
      "solubility": "highly soluble in water",
      "physicalForm": "White or almost white crystalline powder, or colourless crystals",
      "assay": "98.5% to 101.5% on a dried basis",
      "storage": "Preserve in a well-closed container and protect from light"
    },
    "features": [
      "Excellent Solubility & Stability: It appears as a white crystalline powder that is freely and clearly soluble in water. The hydrochloride salt form offers improved stability.",
      "Nutritional Supplements: Often used to support muscle recovery, boost immune function, and promote calcium absorption",
      "High-Density Compactability for Compression: Compresses into highly dense tablet cores without fracturing or capping, minimizing the need for large filler excipients.",
      "Advanced Wound Healing & Surgical Recovery Matrices: Drives the cross-linking process of collagen to accelerate deep wound healing and tissue repair post-surgery.",
      "Protein & Collagen Synthesis: It acts as a foundational building block for tissue growth and repair, playing a critical role in the production of collagen for healthy skin, tendons, and bones.",
      "Controlled Bioavailability: Upon ingestion, the compound rapidly dissociates in gastric juices. This ensures immediate absorption through the small intestine for direct distribution to bodily tissues"
    ],
    "applications": [
      "Dietary Supplements: Multivitamin and amino acid supplements, immune health products, bone health formulations, and general wellness supplements.",
      "Sports Nutrition: Protein supplements, muscle recovery products, performance nutrition, and post-workout formulations.",
      "Pharmaceutical Formulations: Nutritional therapies, amino acid preparations, and clinical nutrition products.",
      "Functional Foods & Beverages: Protein-fortified foods, nutritional drinks, meal replacement products, and fortified health beverages.",
      "Clinical & Medical Nutrition: Enteral nutrition, specialized nutritional formulations, and products designed to address amino acid deficiencies.",
      "Animal Nutrition: Premixes, livestock feed, poultry nutrition, aquaculture, and pet food formulations to support optimal growth and protein utilization."
    ]
  },
  {
    "name": "Calcium L-5 Methyltetrahydrofolate",
    "slug": "l-methyl-folate-calcium",
    "casNumber": "151533-22-1",
    "categoryTag": "Vitamins & Derivatives",
    "parentCategorySlug": "vitamins-derivatives",
    "imagePath": "/aditya chemicals images/Vitamins & derivatives/product card/Calcium L-5 Methyltetrahydrofolate.png"
  },
  {
    "name": "Riboflavin Sodium 5 - Phosphate",
    "slug": "riboflavin-sodium-5phosphate",
    "casNumber": "130-40-5",
    "categoryTag": "Vitamins & Derivatives",
    "parentCategorySlug": "vitamins-derivatives",
    "imagePath": "/aditya chemicals images/Vitamins & derivatives/product card/Riboflavin Sodium 5' Phosphate.png"
  },
  {
    "name": "Riboflavin",
    "slug": "riboflavin",
    "casNumber": "83-88-5",
    "categoryTag": "Vitamins & Derivatives",
    "parentCategorySlug": "vitamins-derivatives",
    "imagePath": "/aditya chemicals images/Vitamins & derivatives/product card/Riboflavin.png"
  },
  {
    "name": "Disodium Edetate",
    "slug": "disodium-edetate",
    "casNumber": "6381-92-6",
    "categoryTag": "Excipients",
    "parentCategorySlug": "excipients",
    "imagePath": "/aditya chemicals images/Excipients/product card/Disodium Edetate.png"
  },
  {
    "name": "Tetrasodium Edetate",
    "slug": "tetrasodium-edetate",
    "casNumber": "13235-36-4",
    "categoryTag": "Excipients",
    "parentCategorySlug": "excipients",
    "imagePath": "/aditya chemicals images/Excipients/product card/Disodium Edetate.png"
  },
  {
    "name": "Boron Citrate",
    "slug": "boron-citrate",
    "casNumber": "7440-42-8",
    "categoryTag": "Excipients",
    "parentCategorySlug": "excipients",
    "imagePath": "/aditya chemicals images/Excipients/product card/Disodium Edetate.png"
  },
  {
    "name": "Boron Glycinate",
    "slug": "boron-glycinate",
    "casNumber": "14281-83-5",
    "categoryTag": "Excipients",
    "parentCategorySlug": "excipients",
    "imagePath": "/aditya chemicals images/Excipients/product card/Disodium Edetate.png"
  },
  {
    "name": "Magnesium Aspartate",
    "slug": "magnesium-aspartate",
    "casNumber": "18962-61-3",
    "categoryTag": "Magnesium (Chelated Minerals)",
    "parentCategorySlug": "minerals",
    "subCategorySlug": "magnesium",
    "imagePath": "/aditya chemicals images/Magnesium/product card/Magnesium Bis Glycinate.png",
    "description": "Aditya Chemicals offers magnesium aspartate, a mineral compound formed from magnesium and aspartic acid, known for its superior absorption and bioavailability. It is commonly used in advanced nutraceutical, dietary, and food formulations. Aditya Chemical’s Magnesium Aspartate is trusted by formulators for its consistent high quality and reliable performance across a wide range of nutritional applications where effective magnesium delivery is essential.",
    "details": {
      "formula": "C₈H₁₂MgN₂O₈·2H₂O",
      "weight": "324.5 g/mol",
      "shelfLife": "5 Years"
    },
    "specifications": {
      "iupacName": "Magnesium; (3S)-3-amino-4-hydroxy 4-oxobutanoate",
      "physicalForm": "White or almost white crystalline powder or colorless crystals",
      "assay": "10.0% to 16.0%",
      "storage": "Highly hygroscopic, store in a cool and dry place in an airtight container. If exposed to atmospheric humidity, the material will create hard lumps."
    },
    "features": [
      "Nutritional Supplement: Prevents deficiencies causing muscle cramps, fatigue, and nerve issues.",
      "Bioavailability Enhancer: Superior digestive absorption and solubility compared to other magnesium forms.",
      "Skin Care Products: Hydrates, soothes, and supports natural skin repair in anti-aging creams.",
      "Chelating Agent: Stabilizes metal ions to prevent unwanted reactions in water and metal treatment.",
      "Anti-Fatigue Agent: Relaxes sore muscles and relieves stress in bath salts and recovery lotions.",
      "Synergistic Effects: Combines magnesium and aspartic acid to optimize cellular and metabolic functions.",
      "Energy Production Support: Powers ATP (the body's energy molecule) to combat fatigue.",
      "Muscle Function Benefits: Regulates muscle contraction and relaxation to stop spasms and cramps.",
      "Nervous System Support: Aids neurotransmission to regulate nerve impulses, reducing stress and anxiety."
    ],
    "applications": [
      "Dietary Supplements: Used in magnesium supplements formulated to support daily nutritional intake, muscle function, and overall wellness.",
      "Sports Nutrition: Incorporated into pre-workout, post-workout, hydration, and recovery formulations to support electrolyte balance and physical performance.",
      "Pharmaceutical Formulations: Utilized in magnesium-based pharmaceutical and therapeutic products requiring high-quality, bioavailable magnesium.",
      "Functional Foods & Beverages: Suitable for fortified beverages, nutritional powders, meal replacements, and functional food products.",
      "Medical Nutrition: Included in clinical nutrition and specialized dietary formulations designed to help meet increased magnesium requirements.",
      "Electrolyte & Hydration Products: Used in electrolyte powders, oral rehydration formulations, and hydration beverages to help maintain normal electrolyte balance.",
      "Wellness & Preventive Nutrition: Applied in products targeting bone health, cardiovascular wellness, nerve function, and overall metabolic support.",
      "Custom Nutraceutical Formulations: Ideal for tablets, capsules, sachets, stick packs, effervescent tablets, and powdered blends due to its excellent formulation compatibility.",
      "Magnesium Bis Glycinate",
      "URL: /magnesium-bisglycinate-manufacturer",
      "Meta Title: Magnesium Bis Glycinate for Superior Absorption",
      "Meta Description: Magnesium bis-glycinate provides superior absorption for relaxation, sleep, and muscle support. It is ideal for premium nutraceuticals. Inquire now."
    ]
  },
  {
    "name": "Magnesium Bis Glycinate",
    "slug": "magnesium-bis-glycinate",
    "casNumber": "14783-68-7",
    "categoryTag": "Magnesium (Chelated Minerals)",
    "parentCategorySlug": "minerals",
    "subCategorySlug": "magnesium",
    "imagePath": "/aditya chemicals images/Magnesium/product card/Magnesium Bis Glycinate.png",
    "description": "Our fully reacted Magnesium Bisglycinate is a premium, high-quality form of magnesium designed for maximum results. Our magnesium is naturally bonded with amino acids. This makes it incredibly easy for your body to absorb and 100% gentle on your stomach. It has a Superior Bioavailability. Magnesium glycinate is a premium organo-mineral compound widely considered the gold standard for magnesium supplementation. It consists of one elemental magnesium ion chemically bound (chelated) to two molecules of glycine, the simplest amino acid.",
    "details": {
      "formula": "C₄H₈MgN₂O₄",
      "weight": "172.42 g/mol",
      "shelfLife": "5 Years"
    },
    "specifications": {
      "physicalForm": "White to almost white hygroscopic powder",
      "assay": "NLT 22.00% on dried basis",
      "storage": "Preserve in a well-closed container"
    },
    "features": [
      "Superior Bioavailability via Peptide Pathways: Magnesium bisglycinate utilizes intestinal peptide pathways (PEPT1) for absorption, avoiding pH degradation and mineral competition to deliver significantly higher cellular uptake than inorganic magnesium.",
      "Exceptional Gastrointestinal Tolerance: Unlike inorganic salts, stable magnesium bisglycinate bypasses standard ion channels and avoids mineral competition by utilizing intestinal peptide pathways (PEPT1) for absorption. This unique metabolic route ensures significantly higher cellular uptake without relying on stomach acid breakdown.",
      "Synergistic Calming & Neurological Profile: The glycine ligand crosses the blood-brain barrier to promote GABA release and inhibit NMDA receptors. This dual action with magnesium provides targeted support for sleep, stress, anxiety, and muscle relaxation",
      "High Chemical Stability: As a stable, fully reacted heterocyclic ring, this true chelate prevents magnesium from binding with dietary phytates, oxalates, or tannins, protecting the mineral from being blocked or wasted in the digestive tract.",
      "Excellent Formulation Stability:",
      "Reliable Compressibility",
      "Fully Chelated with Structural Characterization"
    ],
    "applications": [
      "Dietary Supplements: Widely used in premium magnesium supplements formulated for daily nutritional support and overall wellness.",
      "Sports Nutrition: Incorporated into pre-workout, post-workout, recovery, and hydration formulations to support muscle function and electrolyte balance.",
      "Pharmaceutical Formulations: Suitable for magnesium-based pharmaceutical products and specialized therapeutic formulations requiring highly bioavailable magnesium.",
      "Functional Foods & Beverages: Used in fortified beverages, nutrition powders, meal replacement products, and functional food applications.",
      "Clinical & Medical Nutrition: Included in clinical nutrition and specialized dietary products designed to support individuals with increased magnesium requirements.",
      "Sleep & Relaxation Formulations: Commonly formulated into products focused on relaxation, stress management, and healthy sleep support.",
      "Bone & Muscle Health Products: Applied in formulations supporting bone strength, normal muscle function, and neuromuscular health.",
      "Premium Nutraceutical Products: Ideal for tablets, capsules, sachets, stick packs, gummies, and powdered formulations due to its excellent stability and formulation compatibility.",
      "Magnesium Citrate",
      "URL: /magnesium-citrate-supplier",
      "Meta Title:Magnesium Citrate for Relaxation & Digestive Support",
      "Meta Description: Magnesium citrate promotes relaxation, supports digestion, & enhances muscle wellness with optimal absorption. Perfect for nutraceutical applications."
    ],
    "regionalContent": {
      "us": {
        "intro": "Aditya Chemicals is a leading manufacturer of Magnesium Bis Glycinate, offering highly bioavailable chelated magnesium to the USA.",
        "complianceNote": "Fully compliant with FDA dietary supplement regulations and USP specifications.",
        "shippingNote": "Stocked at our US warehouse in Florida, enabling rapid, cost-effective shipping across North America."
      },
      "uk": {
        "intro": "We supply premium Magnesium Bis Glycinate to UK nutraceutical brands for sleep and muscle support formulas.",
        "complianceNote": "Conforms to BP pharmacopeia standards with full UK-REACH regulatory backing.",
        "shippingNote": "Shipped directly to UK ports with standard customs clearing documentation."
      },
      "eu": {
        "intro": "Aditya Chemicals supplies high-absorption Magnesium Bis Glycinate to European supplement brands.",
        "complianceNote": "REACH compliant, conforming to EU food supplement regulations and EP specifications.",
        "shippingNote": "Delivered door-to-door within Europe via our trusted European shipping partners."
      }
    }
  },
  {
    "name": "Magnesium Citrate",
    "slug": "magnesium-citrate",
    "casNumber": "3344-18-1",
    "categoryTag": "Magnesium (Chelated Minerals)",
    "parentCategorySlug": "minerals",
    "subCategorySlug": "magnesium",
    "imagePath": "/aditya chemicals images/Magnesium/product card/Magnesium Citrate.png",
    "description": "Aditya Chemicals offers Magnesium Citrate, a magnesium salt of citric acid widely recognized for its excellent bioavailability. It is used in various nutraceutical and dietary supplement applications,  particularly in formulations promoting digestive, muscular, and metabolic health. Aditya Chemical’s Magnesium Citrate is a trusted choice among industry professionals for its high-quality consistency and formulation versatility.",
    "details": {
      "formula": "C₁₂H₁₀Mg₃O₁₄",
      "weight": "451.11 g/mol",
      "shelfLife": "5 Years"
    },
    "specifications": {
      "iupacName": "Trimagnesium 2-hydroxypropane 1,2,3-tricarboxylate",
      "physicalForm": "White or almost white, fine, slightly hygroscopic Crystalline powder.",
      "assay": "15.0% to 16.5%",
      "storage": "Preserve in a non-metallic, airtight container."
    },
    "features": [
      "Acid-Reactive Gastric Dissolution: Shows excellent solubility in acidic media, reacting smoothly with gastric HCl upon ingestion to release highly bioavailable free magnesium ions in the upper GI  tract.",
      "Excellent Solid Dosage Stability: Features a highly reliable crystalline structure that resists moisture absorption from the air, preventing clumping and ensuring high stability during dry blending processes.",
      "Low Chemical Reactivity in Dry Mixes: Prevents premature chemical or degradation reactions when blended with water-sensitive vitamins or active botanicals in a dry matrix.",
      "Neutral, Clean Taste Profile: Because it does not dissolve instantly on the tongue, it completely avoids the bitter, astringent metallic taste common to highly soluble salts, making it very easy to flavour.",
      "Superior Powder Flow & Processing: Offers a predictable particle flow that resists caking,  guaranteeing perfect mass uniformity and smooth running during high-speed encapsulation and tableting."
    ],
    "applications": [
      "Dietary Supplements: Widely used in magnesium supplements formulated to support daily nutritional intake, overall wellness, and mineral supplementation.",
      "Sports Nutrition: Incorporated into sports nutrition products, hydration formulas, and recovery supplements to support muscle function and electrolyte balance.",
      "Pharmaceutical Formulations: Used in pharmaceutical preparations, including magnesium supplements and digestive health formulations.",
      "Functional Foods & Beverages: Suitable for fortified beverages, nutritional powders, meal replacements, and functional food products requiring magnesium fortification.",
      "Digestive Health Products: Commonly used in formulations designed to support digestive wellness and maintain normal bowel function.",
      "Clinical & Medical Nutrition: Included in clinical nutrition and specialized dietary products to help meet increased magnesium requirements.",
      "Electrolyte & Hydration Formulations: Applied in electrolyte powders, oral rehydration products, and hydration beverages to support mineral replenishment.",
      "Nutraceutical Formulations: Ideal for tablets, capsules, powders, sachets, effervescent tablets, and stick packs due to its excellent water solubility and formulation versatility.",
      "Magnesium Creatine Chelate",
      "URL: /magnesium-creatine-chelate-supplier",
      "Meta Title: Premium Magnesium Creatine Chelate Supplier",
      "Meta Description: Advanced Magnesium Creatine Chelate ingredient for sports nutrition, recovery, and wellness product formulations with consistent quality.Connect Now"
    ]
  },
  {
    "name": "Magnesium Creatine",
    "slug": "magnesium-creatinine-2",
    "casNumber": "290357-35-6",
    "categoryTag": "Magnesium (Chelated Minerals)",
    "parentCategorySlug": "minerals",
    "subCategorySlug": "magnesium",
    "imagePath": "/aditya chemicals images/Magnesium/product card/Magnesium Creatine Chelate.png",
    "description": "Magnesium Creatine Chelate Magnesium Creatine Chelate is a specialized organo-mineral compound engineered primarily for sports nutrition, strength conditioning, and cellular energy metabolism. Unlike standard physical blends of magnesium and creatine, this ingredient represents a fully reacted molecule where elemental magnesium is chemically bound to the organic ergogenic compound creatine.",
    "details": {
      "formula": "C8H16MgN6O4",
      "weight": "284.56 g/mol",
      "shelfLife": "5 Years"
    },
    "specifications": {
      "iupacName": "Magnesium;2-[carbamimidoyl(methyl)amino]acetate",
      "physicalForm": "White to off-white powder",
      "assay": "NLT 7.0%",
      "storage": "Preserve in a well-closed container."
    },
    "features": [
      "Dual-Mechanism ATP Resynthesis",
      "The Creatine Role: It provides the raw substrate necessary for phosphocreatine storage, allowing rapid donation of a phosphate group to turn ADP back into active ATP during high-intensity,  short-duration anaerobic exercise.",
      "The Magnesium Role: ATP cannot function or be synthesized independently; it must exist as a magnesium-ATP complex to be biologically active. By delivering both elements simultaneously, the molecule ensures that newly resynthesized ATP is immediately stabilized and functional.",
      "Mitigation of GI Distress: Smooth Digestion: Unabsorbed free creatine particles in the gut draw water, causing cramping and diarrhea. The high stability and absorption rate of this chelate leave no unreacted particles behind, ensuring excellent gut comfort.",
      "Mitigation of Muscle Cramping & Fasciculations: Beyond just protecting the creatine, the bioavailable magnesium acts directly at the neuromuscular junction. It regulates calcium influx into muscle cells, directly preventing the cramping and involuntary twitching (fasciculations)  often reported by heavy creatine users."
    ],
    "applications": [
      "Sports Nutrition: Widely used in pre-workout, post-workout, strength, endurance, and muscle recovery formulations to support athletic performance.",
      "Performance Supplements: Incorporated into products designed to support ATP production, muscle power, and exercise capacity for active individuals.",
      "Dietary Supplements: Used in premium magnesium and creatine formulations that support muscle function, energy metabolism, and overall wellness.",
      "Muscle Recovery Products: Suitable for recovery supplements formulated to support normal muscle function and reduce post-exercise fatigue.",
      "Functional Foods & Beverages: Applied in sports drinks, protein powders, nutritional beverages, meal replacements, and functional food products.",
      "Clinical & Medical Nutrition: Included in specialized nutritional formulations designed to support muscle health and meet increased nutritional requirements.",
      "Energy & Active Lifestyle Formulations: Used in products targeting sustained energy, physical performance, and fitness-focused nutrition.",
      "Nutraceutical Formulations: Ideal for tablets, capsules, powders, sachets, stick packs, and ready-to-mix formulations due to its excellent processing compatibility and formulation stability.",
      "Magnesium Gluconate",
      "URL: /magnesium-gluconate-supplier",
      "Meta Title: Magnesium Gluconate for Muscle, Energy & Nerve Support",
      "Meta Description: Magnesium gluconate promotes overall wellness, aids muscle recovery, & supports nerve health. It is ideal for use in dietary supplement formulations."
    ]
  },
  {
    "name": "Magnesium Gluconate",
    "slug": "magnesium-gluconate",
    "casNumber": "3632-91-5",
    "categoryTag": "Magnesium (Chelated Minerals)",
    "parentCategorySlug": "minerals",
    "subCategorySlug": "magnesium",
    "imagePath": "/aditya chemicals images/Magnesium/product card/Magnesium Gluconate.png",
    "description": "Aditya Chemical’s Magnesium Gluconate is a highly bioavailable mineral supplement praised for its superior absorption and gentle, stomach-friendly profile. Ideal for nutraceuticals,  pharmaceuticals, and functional foods, it corrects deficiencies without the digestive discomfort common with other magnesium salts.",
    "details": {
      "formula": "C12H22MgO14 (Anhydrous)",
      "weight": "414.60 g/mol (Anhydrous)",
      "shelfLife": "5 years"
    },
    "specifications": {
      "iupacName": "Magnesium bis((2R,3S,4R,5R)-2,3,4,5,6-pentahydroxyhexanoate)",
      "physicalForm": "Colorless crystals or white powder/granules;",
      "assay": "98.0% – 102.0%",
      "storage": "Preserve in a well-closed container"
    },
    "features": [
      "Dietary Supplement: Boosts magnesium levels to treat or prevent deficiency; available in oral tablets, capsules, powders, and liquids.",
      "Nutritional Fortification: Added to foods and beverages to boost magnesium levels and help people meet their daily dietary requirements.",
      "Pharmaceutical Formulations: Used in oral medications for mild magnesium deficiency and intravenous (IV) solutions for severe cases.",
      "Sports Nutrition: Included in energy bars and drinks to support muscle function, electrolyte balance, and athletic recovery.",
      "Cosmetics & Personal Care: Added to skin and hair products to boost hydration, conditioning, and overall skin health.",
      "Medicinal Uses: Used in alternative medicine to help manage muscle cramps, migraines, high blood pressure, and PMS symptoms."
    ],
    "applications": [
      "Dietary Supplements: Widely used in magnesium supplements formulated to support daily nutritional intake, overall wellness, and mineral supplementation.",
      "Pharmaceutical Formulations: Incorporated into pharmaceutical products requiring a highly soluble magnesium source for nutritional and therapeutic applications.",
      "Functional Foods & Beverages: Suitable for fortified beverages, nutritional powders, meal replacements, and functional food products enriched with magnesium.",
      "Clinical & Medical Nutrition: Used in specialized nutritional formulations and clinical nutrition products to help meet increased magnesium requirements.",
      "Bone & Muscle Health Products: Applied in formulations supporting normal muscle function, bone health, and neuromuscular wellness.",
      "Electrolyte & Hydration Products: Included in electrolyte powders, hydration beverages, and oral rehydration formulations to support mineral balance.",
      "Pediatric & Geriatric Nutrition: Suitable for nutritional products developed for children and older adults due to its good solubility and formulation versatility.",
      "Nutraceutical Formulations: Ideal for tablets, capsules, powders, sachets, syrups, and liquid formulations, offering excellent compatibility with a wide range of manufacturing processes.",
      "Magnesium L-Pidolate",
      "URL: /magnesium-pidolate-supplier",
      "Meta Title: Global Magnesium Pidolate Ingredient Supplier",
      "Meta Description: Export-quality Magnesium Pidolate manufactured for nutraceutical and pharmaceutical applications with trusted quality standards.conect with us."
    ]
  },
  {
    "name": "Magnesium L-Pidolate",
    "slug": "magnesium-pidolate",
    "casNumber": "135701-98-3",
    "categoryTag": "Magnesium (Chelated Minerals)",
    "parentCategorySlug": "minerals",
    "subCategorySlug": "magnesium",
    "imagePath": "/aditya chemicals images/Magnesium/product card/Magnesium Pidolate.png",
    "description": "Magnesium pidolate, a compound where magnesium is chelated with pidolic acid (also known as pyroglutamic acid), unlike other magnesium salts, has a unique chemical structure that allows for enhanced bioavailability and physiological activity, making it a preferred choice in various therapeutic applications. One of the standout features of magnesium pidolate is its superior bioavailability compared to other magnesium compounds. Bioavailability refers to the proportion of a nutrient that is digested, absorbed, and made available for the body. Its high bioavailability means that it can be more efficiently utilized by the body, enhancing its therapeutic effects",
    "details": {
      "formula": "C10H12N2O6 Mg",
      "weight": "280.5 g/mol",
      "shelfLife": "5 Years"
    },
    "specifications": {
      "iupacName": "Magnesium bis[(2S)-5-oxopyrrolidine-2-carboxylatel",
      "physicalForm": "White to off-white fine powder",
      "assay": "8.0 % to 9.5 % (as Mg.) (on dried basis) w/w",
      "storage": "In an airtight container"
    },
    "features": [
      "Neurological & Cellular Penetration: Pyroglutamate utilizes highly efficient active transport systems. It possesses a profound affinity for crossing the blood-brain barrier and quickly accessing intracellular environments, which makes it remarkably rapid at restoring systemic magnesium deficits.",
      "Headache & Neuro-Prophylaxis: its fast-acting efficacy in reducing the intensity, duration, and overall frequency of migraines and tension headaches.",
      "Stable Elemental Yield: Delivers a highly reliable, premium 8.0% to 9.5 % elemental magnesium payload, ensuring exact dosing for high-end neurological and cognitive formulations.",
      "Ultimate Bioavailability Kinetics: Formulated to maximize cellular uptake, Magnesium Pidolate utilizes specialized active transport pathways to deliver superior and rapid absorption compared to traditional mineral salts."
    ],
    "applications": [
      "Dietary Supplements: Widely used in magnesium supplements formulated to support daily nutritional intake, overall wellness, and mineral supplementation.",
      "Pharmaceutical Formulations: Incorporated into pharmaceutical and therapeutic products requiring a highly bioavailable source of magnesium.",
      "Clinical & Medical Nutrition: Used in specialized nutritional formulations and clinical nutrition products to help address increased magnesium requirements.",
      "Neuromuscular Health Products: Applied in formulations designed to support normal nerve transmission, muscle function, and neuromuscular health.",
      "Stress & Wellness Formulations: Included in products focused on relaxation, stress management, and overall mental well-being.",
      "Functional Foods & Beverages: Suitable for fortified beverages, nutritional powders, meal replacements, and functional food products enriched with magnesium.",
      "Women's Health Products: Used in formulations supporting women's nutritional needs, including products for general wellness and muscle health.",
      "Nutraceutical Formulations: Ideal for tablets, capsules, powders, sachets, stick packs, and liquid formulations due to its excellent formulation compatibility and manufacturing performance.",
      "Magnesium Lactate",
      "URL: /magnesium-lactate-supplier",
      "Meta Title: Magnesium Lactate Supplier for Nutraceuticals",
      "Meta Description: Magnesium lactate aids in muscle function and maintains hydration balance, making it ideal for dietary supplement formulations. Inquire now."
    ]
  },
  {
    "name": "Magnesium Glycerophosphate",
    "slug": "magnesium-glycerophosphate",
    "casNumber": "927-20-8",
    "categoryTag": "Magnesium (Chelated Minerals)",
    "parentCategorySlug": "minerals",
    "subCategorySlug": "magnesium",
    "imagePath": "/aditya chemicals images/Magnesium/product card/Magnesium Bis Glycinate.png"
  },
  {
    "name": "Magnesium Lactate",
    "slug": "magnesium-lactate",
    "casNumber": "18917-93-6",
    "categoryTag": "Magnesium (Chelated Minerals)",
    "parentCategorySlug": "minerals",
    "subCategorySlug": "magnesium",
    "imagePath": "/aditya chemicals images/Magnesium/product card/Magnesium Lactate.png",
    "description": "Magnesium Lactate is a gentle, efficiently absorbed magnesium salt widely recognized for its excellent tolerability and metabolic support. It is valued in nutraceutical, dietary, and functional health formulations for its role in muscle function, electrolyte balance, and energy production. Aditya Chemical’s Magnesium Lactate ensures flexibility for various dosage forms and compatibility with tablets, capsules, liquids, beverages, and powdered blends. With reliable purity, superior stability, and consistent performance, it remains a preferred choice for premium-quality magnesium formulations.",
    "details": {
      "formula": "C₆H₁₀MgO₆·2H₂O (dihydrate)",
      "weight": "238.5 g/mol (dihydrate)",
      "shelfLife": "5 Years"
    },
    "specifications": {
      "iupacName": "Magnesium bis(2-hydroxypropanoate)",
      "physicalForm": "White to almost white crystalline or granular powder",
      "assay": "98.0% to 102.0% on dried basis",
      "storage": "Preserve in a well-closed container"
    },
    "features": [
      "Exceptional GI Delicacy: It stands out as one of the most naturally gentle organic salts on the human digestive tract, making it the preferred choice for sustained-release pharmaceutical tablets or patients requiring high chronic dosing.",
      "Fortification Staple: Extensively utilized in food, infant formula, and beverage fortification due to its smooth flavor profile and neutral impact on product mouthfeel.",
      "Elemental Yield: Provides ~12% elemental magnesium in its dihydrate form.",
      "Gentle on the Stomach: It is highly bioavailable and exceptionally gentle on the digestive tract, minimizing the laxative side effects common with other magnesium forms.",
      "Ideal for Sustained Release: Because of its smooth, steady absorption rate, it is the industry standard for long-lasting, time-released pharmaceutical tablets and chronic high dosing."
    ],
    "applications": [
      "Dietary Supplements: Widely used in magnesium supplements formulated to support daily nutritional intake, overall wellness, and mineral supplementation.",
      "Pharmaceutical Formulations: Incorporated into pharmaceutical products requiring a highly bioavailable and well-tolerated source of magnesium.",
      "Clinical & Medical Nutrition: Used in specialized nutritional formulations and clinical nutrition products to help meet increased magnesium requirements.",
      "Bone & Muscle Health Products: Applied in formulations that support normal muscle function, bone health, and neuromuscular performance.",
      "Sports Nutrition: Included in sports nutrition, hydration, and recovery products to support electrolyte balance and physical performance.",
      "Functional Foods & Beverages: Suitable for fortified beverages, nutritional powders, meal replacements, dairy products, and functional food applications.",
      "Electrolyte & Hydration Formulations: Used in electrolyte powders, oral rehydration solutions, and hydration beverages to support mineral replenishment.",
      "Nutraceutical Formulations: Ideal for tablets, capsules, powders, sachets, stick packs, and liquid formulations, offering excellent processing compatibility and formulation flexibility.",
      "Magnesium Malate",
      "URL: /magnesium-malate-supplier",
      "Meta Title: Premium Magnesium Malate for Muscle Recovery",
      "Meta Description: Magnesium malate supports muscle function and energy production with high absorption. Ideal for dietary supplement use. Contact us today."
    ]
  },
  {
    "name": "Magnesium Malate",
    "slug": "magnesium-malate",
    "casNumber": "869-06-7",
    "categoryTag": "Magnesium (Chelated Minerals)",
    "parentCategorySlug": "minerals",
    "subCategorySlug": "magnesium",
    "imagePath": "/aditya chemicals images/Magnesium/product card/Magnesium Malate.png",
    "description": "Aditya Chemicals offers Magnesium Malate, a compound formed from magnesium and malic acid,  offering excellent bioavailability and gastrointestinal tolerance. It is often included in nutraceutical and food formulations targeting energy production, muscle recovery, and metabolic health. Aditya Chemical’s Magnesium Malate is a trusted raw material known for its consistent high quality,  optimal particle size and density, and superior compatibility with various delivery formats.",
    "details": {
      "formula": "C₄H₄MgO₅",
      "weight": "156.38 g/mol",
      "shelfLife": "5 Years"
    },
    "specifications": {
      "iupacName": "Magnesium (2+) 2-hydroxybutanedioate",
      "physicalForm": "White to off-white fine powder.",
      "assay": "14.3% to 15.8%",
      "storage": "Preserve in a well-closed container"
    },
    "features": [
      "The Fibromyalgia & Fatigue Benchmark: Plays a vital role in the mitochondrial malate-aspartate shuttle, clinically favored for easing muscle pain, tenderness, and exhaustion associated with chronic fatigue.",
      "Prolonged Muscle Endurance: Actively helps clear lactic acid buildup from muscle tissues during physical exertion, drastically reducing muscle cramps and post-workout soreness.",
      "Precise Elemental Yield: Delivers a highly predictable, stable payload of ~14.3 % to 15.8 %  elemental magnesium in its premium trihydrate crystalline matrix."
    ],
    "applications": [
      "Dietary Supplements: Widely used in magnesium supplements formulated to support daily nutritional intake, overall wellness, and mineral supplementation.",
      "Sports Nutrition: Incorporated into pre-workout, post-workout, endurance, and recovery formulations to support energy metabolism and muscle performance.",
      "Energy & Wellness Products: Used in products designed to support cellular energy production, reduce fatigue, and promote an active lifestyle.",
      "Pharmaceutical Formulations: Suitable for magnesium-based pharmaceutical products and specialized therapeutic formulations.",
      "Clinical & Medical Nutrition: Included in clinical nutrition and specialized dietary formulations to help meet increased magnesium requirements.",
      "Functional Foods & Beverages: Applied in fortified beverages, nutritional powders, meal replacements, and functional food products enriched with magnesium.",
      "Bone & Muscle Health Products: Used in formulations supporting normal muscle function, bone health, and neuromuscular wellness.",
      "Nutraceutical Formulations: Ideal for tablets, capsules, powders, sachets, stick packs, effervescent tablets, and ready-to-mix formulations due to its excellent formulation compatibility and processing stability.",
      "Magnesium Orotate",
      "URL: /magnesium-orotate-supplier",
      "Meta Title: Magnesium Orotate for Cellular Wellness | Aditya Chemicals",
      "Meta Description: Magnesium orotate enhances cellular energy production and promotes heart health. It is an excellent choice for dietary supplement formulations. Inquire now."
    ]
  },
  {
    "name": "Magnesium Orotate",
    "slug": "magnesium-orotate-2",
    "casNumber": "34717-03-8",
    "categoryTag": "Magnesium (Chelated Minerals)",
    "parentCategorySlug": "minerals",
    "subCategorySlug": "magnesium",
    "imagePath": "/aditya chemicals images/Magnesium/product card/Magnesium Orotate.png",
    "description": "Aditya Chemicals offers Magnesium Malate, a compound formed from magnesium and malic acid,  offering excellent bioavailability and gastrointestinal tolerance. It is often included in nutraceutical and food formulations targeting energy production, muscle recovery, and metabolic health. Aditya Chemical’s Magnesium Malate is a trusted raw material known for its consistent high quality,  optimal particle size and density, and superior compatibility with various delivery formats.",
    "details": {
      "formula": "C₄H₄MgO₅",
      "weight": "156.38 g/mol",
      "shelfLife": "5 Years"
    },
    "specifications": {
      "iupacName": "Magnesium (2+) 2-hydroxybutanedioate",
      "physicalForm": "White to off-white fine powder",
      "assay": "14.3% to 15.8%",
      "storage": "Preserve in a well-closed container"
    },
    "features": [
      "The Fibromyalgia & Fatigue Benchmark: Plays a vital role in the mitochondrial malate-aspartate shuttle, clinically favored for easing muscle pain, tenderness, and exhaustion associated with chronic fatigue.",
      "Prolonged Muscle Endurance: Actively helps clear lactic acid buildup from muscle tissues during physical exertion, drastically reducing muscle cramps and post-workout soreness.",
      "Precise Elemental Yield: Delivers a highly predictable, stable payload of ~14.3 % to 15.8 %  elemental magnesium in its premium trihydrate crystalline matrix."
    ],
    "applications": [
      "Dietary Supplements: Widely used in premium magnesium supplements formulated to support daily nutritional intake, overall wellness, and mineral supplementation.",
      "Cardiovascular Health Products: Incorporated into formulations designed to support heart health, healthy circulation, and normal cardiovascular function.",
      "Sports Nutrition: Used in endurance, performance, and recovery products to support energy metabolism, muscle function, and physical performance.",
      "Energy & Wellness Formulations: Applied in products focused on cellular energy production, vitality, and active lifestyle support.",
      "Pharmaceutical Formulations: Suitable for magnesium-based pharmaceutical products and specialized therapeutic formulations requiring high-quality magnesium sources.",
      "Clinical & Medical Nutrition: Included in clinical nutrition and specialized dietary products to help meet increased magnesium requirements.",
      "Functional Foods & Beverages: Used in fortified beverages, nutritional powders, meal replacements, and functional food products enriched with magnesium.",
      "Bone & Muscle Health Products: Incorporated into formulations supporting normal muscle function, neuromuscular health, and bone maintenance.",
      "Nutraceutical Formulations: Ideal for tablets, capsules, powders, sachets, stick packs, and advanced nutritional delivery systems due to its excellent formulation compatibility and stability.",
      "Magnesium Succinate",
      "URL: /magnesium-succinate-supplier",
      "Meta Title: Magnesium Succinate for Muscle & Metabolic Support",
      "Meta Description: Supplier of premium magnesium succinate for advanced nutraceutical formulations that support energy, muscle health, and overall wellness applications."
    ]
  },
  {
    "name": "Magnesium Succinate",
    "slug": "magnesium-succinate-2",
    "casNumber": "556-32-1",
    "categoryTag": "Magnesium (Chelated Minerals)",
    "parentCategorySlug": "minerals",
    "subCategorySlug": "magnesium",
    "imagePath": "/aditya chemicals images/Magnesium/product card/Magnesium Succinate.png",
    "description": "Our Magnesium Succinate is a stable, bioavailable form of magnesium chelated with succinic acid. It is widely used in formulations focused on metabolic balance, cellular energy cycles, and oxidative stress management. Aditya Chemical’s Magnesium Succinate is a globally trusted ingredient, manufactured with strict quality standards to meet the requirements of advanced nutraceutical, dietary ingredients, food, and pharmaceutical applications.",
    "details": {
      "formula": "C4H4MgO4",
      "weight": "140.38 g/mol",
      "shelfLife": "5 Years"
    },
    "specifications": {
      "iupacName": "Magnesium butanedioate",
      "physicalForm": "White to almost white hygroscopic powder.",
      "assay": "NLT 17.00%",
      "storage": "Preserve in a well-closed container."
    },
    "features": [
      "Cellular Energy Kinetics: Because succinate bypasses the initial rate-limiting steps of the Krebs cycle, entering directly via complex II (succinate dehydrogenase), this form is exceptionally efficient for revitalizing mitochondrial ATP production.",
      "Targeted Metabolic Support: Ideal for premium formulations focusing on cellular energy, fatigue recovery, metabolic balance, and muscle wellness.",
      "Stress & Oxidative Support: Aids the body during periods of physical exhaustion by supporting stress reduction pathways and assisting in cellular antioxidant management. Suitable for tablets, capsules, and effervescent powders.",
      "Excellent Formulation Versatility: Possesses a highly stable crystalline matrix with great solubility, making it perfectly suited for manufacturing high-quality tablets, standard capsules, and fast-dissolving effervescent powders."
    ],
    "applications": [
      "Dietary Supplements: Widely used in magnesium supplements formulated to support daily nutritional intake, overall wellness, and mineral supplementation.",
      "Energy & Metabolic Support Products: Incorporated into formulations designed to support cellular energy metabolism and healthy mitochondrial function.",
      "Sports Nutrition: Used in pre-workout, post-workout, endurance, and recovery products to support muscle function, energy production, and physical performance.",
      "Pharmaceutical Formulations: Suitable for magnesium-based pharmaceutical products and specialized therapeutic formulations requiring a high-quality magnesium source.",
      "Clinical & Medical Nutrition: Included in specialized nutritional formulations and clinical nutrition products to help meet increased magnesium requirements.",
      "Functional Foods & Beverages: Applied in fortified beverages, nutritional powders, meal replacements, and functional food products enriched with magnesium.",
      "Bone & Muscle Health Products: Used in formulations supporting normal muscle function, bone health, and neuromuscular wellness.",
      "Electrolyte & Hydration Products: Incorporated into electrolyte powders, hydration beverages, and oral rehydration formulations to support mineral balance.",
      "Nutraceutical Formulations: Ideal for tablets, capsules, powders, sachets, stick packs, and ready-to-mix formulations due to its excellent formulation compatibility and processing stability.",
      "Magnesium Taurinate/Taurate",
      "URL: /magnesium-taurinate-supplier",
      "Meta Title: High Bioavailability Magnesium Taurinate for Supplements",
      "Meta Description: Magnesium taurinate promotes relaxation, supports cardiovascular health, and enhances wellness formulations. It is ideal for dietary supplements. Inquire now."
    ]
  },
  {
    "name": "Magnesium Taurinate/taurate",
    "slug": "magnesium-taurinate",
    "casNumber": "334824-43-0",
    "categoryTag": "Magnesium (Chelated Minerals)",
    "parentCategorySlug": "minerals",
    "subCategorySlug": "magnesium",
    "imagePath": "/aditya chemicals images/Magnesium/product card/Magnesium Taurinate.png",
    "description": "Magnesium Taurinate (often referred to as Magnesium Taurate) is a highly specialized organo-mineral complex designed primarily for cardiovascular and neurological applications. It is formed by chemically bonding elemental magnesium with taurine, a sulfur-containing amino acid (amino sulfonic acid) that plays a critical role in cellular osmotic regulation and ion transport.",
    "specifications": {
      "iupacName": "Magnesium;2-aminoethanesulfonate",
      "physicalForm": "White to off-white powder.",
      "storage": "Preserve in a well-closed container."
    },
    "features": [
      "Dual-Action Cardiovascular Support",
      "Vascular Tone: Both act as natural calcium channel blockers, relaxing blood vessels to support healthy blood pressure.",
      "Heart Rhythm: Taurine regulates potassium currents and stabilizes heart cell membranes, complementing magnesium's role in maintaining steady cardiac rhythms.",
      "Amino Acid Bioavailability: Bypasses inefficient mineral channels by using specialized intestinal amino acid pathways, ensuring maximum absorption and higher blood magnesium levels.",
      "Blood-Brain Barrier Penetration: Taurine acts as a carrier molecule, easily guiding magnesium across the blood-brain barrier to calm excitotoxicity and protect neural pathways.",
      "Superior GI Tolerance: No Laxative Effect: Highly stable and cleanly absorbed, leaving no unreacted magnesium in the gut to draw water. This completely avoids cramping, gas, or loose stools."
    ],
    "applications": [
      "Dietary Supplements: Widely used in premium magnesium supplements formulated to support daily nutritional intake, overall wellness, and mineral supplementation.",
      "Cardiovascular Health Products: Incorporated into formulations designed to support heart health, healthy blood pressure, and normal cardiovascular function.",
      "Stress & Relaxation Formulations: Used in products focused on relaxation, stress management, and nervous system support.",
      "Sleep Support Products: Included in sleep and nighttime wellness formulations to promote relaxation and healthy sleep quality.",
      "Sports Nutrition: Applied in sports nutrition, recovery, and hydration products to support muscle function, electrolyte balance, and physical performance.",
      "Clinical & Medical Nutrition: Used in specialized nutritional formulations and clinical nutrition products to help meet increased magnesium requirements.",
      "Functional Foods & Beverages: Suitable for fortified beverages, nutritional powders, meal replacements, and functional food products enriched with magnesium.",
      "Pharmaceutical Formulations: Incorporated into magnesium-based pharmaceutical products and specialized therapeutic formulations.",
      "Nutraceutical Formulations: Ideal for tablets, capsules, powders, sachets, stick packs, and advanced nutritional delivery systems due to its excellent formulation compatibility and manufacturing performance.",
      "Magnesium Fumarate",
      "URL: /magnesium-fumarate-supplier",
      "Meta Title: Trusted Magnesium Fumarate Manufacturer",
      "Meta Description: Reliable Magnesium Fumarate ingredient supplier for advanced nutraceutical and pharmaceutical product development applications worldwide.call now"
    ]
  },
  {
    "name": "Magnesium Fumarate",
    "slug": "magnesium-fumarate",
    "casNumber": "7395-92-8",
    "categoryTag": "Magnesium (Chelated Minerals)",
    "parentCategorySlug": "minerals",
    "subCategorySlug": "magnesium",
    "imagePath": "/aditya chemicals images/Magnesium/product card/Magnesium Bis Glycinate.png",
    "description": "Magnesium fumarate is a highly bioavailable mineral salt used to prevent deficiency, support bone density, and aid in muscle and nerve function. It provides two essential components: elemental magnesium and fumaric acid, the latter being a cellular metabolite that assists the body's energy production cycles.",
    "details": {},
    "specifications": {
      "iupacName": "Magnesium;(E)-but-2-enedioate",
      "physicalForm": "White to off-white fine powder",
      "assay": "NLT 17.0%",
      "storage": "Preserve in a well-closed container."
    },
    "features": [
      "Mitochondrial Energy Resiliency: Enters the cellular Krebs cycle directly to maintain ATP  energy production and cell homeostasis during metabolic stress or low-oxygen conditions.",
      "Superior Industrial Stability: A highly stable, non-hygroscopic powder that resists clumping,  ensuring an exceptional shelf life and smooth running through high-speed tableting machinery.",
      "High Elemental Payload: Delivers a powerful ~ 17.0% elemental magnesium yield, allowing formulators to hit therapeutic targets with smaller capsule sizes or lower tablet weights.",
      "Rapid Gastrointestinal Dissolution: Dissolves rapidly upon contact with stomach acid, ensuring the free magnesium ions are quickly freed up for fast systemic absorption in the upper digestive tract.",
      "Anti-Stress & Fatigue Formulations: Ideal for premium therapeutic products targeting physical exhaustion, fibromyalgia support, and chronic fatigue recovery."
    ],
    "applications": [
      "Dietary Supplements: Widely used in magnesium supplements formulated to support daily nutritional intake, overall wellness, and mineral supplementation.",
      "Sports Nutrition: Incorporated into pre-workout, post-workout, endurance, and recovery formulations to support muscle function, energy metabolism, and exercise performance.",
      "Energy & Wellness Products: Used in products designed to support cellular energy production and healthy metabolic function for active lifestyles.",
      "Pharmaceutical Formulations: Suitable for magnesium-based pharmaceutical products and therapeutic formulations requiring a high-quality magnesium source.",
      "Clinical & Medical Nutrition: Included in specialized nutritional formulations and clinical nutrition products to help meet increased magnesium requirements.",
      "Functional Foods & Beverages: Applied in fortified beverages, nutritional powders, meal replacements, and functional food products enriched with magnesium.",
      "Bone & Muscle Health Products: Used in formulations supporting normal muscle function, bone health, and neuromuscular performance.",
      "Electrolyte & Hydration Products: Incorporated into electrolyte powders, hydration beverages, and oral rehydration formulations to support mineral replenishment and electrolyte balance.",
      "Nutraceutical Formulations: Ideal for tablets, capsules, powders, sachets, stick packs, and effervescent formulations due to its excellent formulation compatibility and manufacturing performance.",
      "Magnesium Oxide",
      "URL:/magnesium-oxide-supplier",
      "Meta Title: Pharmaceutical Grade Magnesium Oxide for Supplements",
      "Meta Description: Magnesium Oxide manufacturer offering superior purity, formulation compatibility, and consistent quality for supplement applications.connect now."
    ]
  },
  {
    "name": "Creatine Malate",
    "slug": "creatine-malate",
    "casNumber": "160468-17-8",
    "categoryTag": "Creatine (Chelated Minerals)",
    "parentCategorySlug": "minerals",
    "subCategorySlug": "creatine",
    "imagePath": "/aditya chemicals images/Magnesium/product card/Magnesium Creatine Chelate.png"
  },
  {
    "name": "Creatine Gluconate",
    "slug": "creatine-gluconate",
    "casNumber": "123-45-6",
    "categoryTag": "Creatine (Chelated Minerals)",
    "parentCategorySlug": "minerals",
    "subCategorySlug": "creatine",
    "imagePath": "/aditya chemicals images/Magnesium/product card/Magnesium Creatine Chelate.png"
  },
  {
    "name": "Creatine Citrate",
    "slug": "creatine-citrate",
    "casNumber": "17050-09-8",
    "categoryTag": "Creatine (Chelated Minerals)",
    "parentCategorySlug": "minerals",
    "subCategorySlug": "creatine",
    "imagePath": "/aditya chemicals images/Magnesium/product card/Magnesium Creatine Chelate.png"
  },
  {
    "name": "Creatine Orotate",
    "slug": "creatine-orotate",
    "casNumber": "123-45-7",
    "categoryTag": "Creatine (Chelated Minerals)",
    "parentCategorySlug": "minerals",
    "subCategorySlug": "creatine",
    "imagePath": "/aditya chemicals images/Magnesium/product card/Magnesium Creatine Chelate.png"
  },
  {
    "name": "Ferrous Asparto Glycinate",
    "slug": "ferrous-asparto-glycinate",
    "casNumber": "404-84-4",
    "categoryTag": "Iron (Chelated Minerals)",
    "parentCategorySlug": "minerals",
    "subCategorySlug": "ferrous",
    "imagePath": "/aditya chemicals images/Ferrous/product cards/Ferrous Asparto Glycinate.png"
  },
  {
    "name": "Ferrous L-Pidolate",
    "slug": "ferrous-l-pidolate",
    "casNumber": "113479-54-4",
    "categoryTag": "Iron (Chelated Minerals)",
    "parentCategorySlug": "minerals",
    "subCategorySlug": "ferrous",
    "imagePath": "/aditya chemicals images/Ferrous/product cards/Ferrous Bis Glycinate.png"
  },
  {
    "name": "Ferrous Bis Glycinate",
    "slug": "ferrous-bis-glycinate-ih",
    "casNumber": "20150-34-9",
    "categoryTag": "Iron (Chelated Minerals)",
    "parentCategorySlug": "minerals",
    "subCategorySlug": "ferrous",
    "imagePath": "/aditya chemicals images/Ferrous/product cards/Ferrous Bis Glycinate.png"
  },
  {
    "name": "Ferrous Lactate",
    "slug": "ferrous-lactate",
    "casNumber": "5905-52-2",
    "categoryTag": "Iron (Chelated Minerals)",
    "parentCategorySlug": "minerals",
    "subCategorySlug": "ferrous",
    "imagePath": "/aditya chemicals images/Ferrous/product cards/Ferrous Lactate.png"
  },
  {
    "name": "Ferrous Gluconate",
    "slug": "ferrous-gluconate",
    "casNumber": "299-29-6",
    "categoryTag": "Iron (Chelated Minerals)",
    "parentCategorySlug": "minerals",
    "subCategorySlug": "ferrous",
    "imagePath": "/aditya chemicals images/Ferrous/product cards/Ferrous Bis Glycinate.png"
  },
  {
    "name": "Sodium Ferric EDTA",
    "slug": "sodium-ferric-edta",
    "casNumber": "15708-41-5",
    "categoryTag": "Iron (Chelated Minerals)",
    "parentCategorySlug": "minerals",
    "subCategorySlug": "ferrous",
    "imagePath": "/aditya chemicals images/Ferrous/product cards/Sodium Ferric EDTA.png"
  },
  {
    "name": "Calcium Aspartate",
    "slug": "calcium-aspartate",
    "casNumber": "10389-09-0",
    "categoryTag": "Calcium (Chelated Minerals)",
    "parentCategorySlug": "minerals",
    "subCategorySlug": "calcium",
    "imagePath": "/aditya chemicals images/Calcium/product card/Calcium Aspartate.png",
    "description": "Aditya Chemical’s Calcium aspartate is a stable, organic calcium with an extraordinarily high rate of absorption. It is a calcium salt of the amino acid aspartic acid, and has a neutral reaction in the body. It is an industrial-grade, non-hygroscopic powder engineered for flawless manufacturing. With superior direct-compression properties, excellent high-speed flowability, and natural binding strength, it enables brands to create highly potent.",
    "details": {
      "formula": "(C4H5NO4)2Ca",
      "weight": "304.16 g/mol",
      "shelfLife": "5 Years"
    },
    "specifications": {
      "iupacName": "Calcium; (2S)-2-aminobutanedioate",
      "physicalForm": "White to off-white crystalline hygroscopic powder.",
      "assay": "98.0 % to 101.0 %",
      "storage": "Preserve in a well-closed container"
    },
    "features": [
      "Targeted Bone & Structural Density: Formulated specifically to optimize skeletal uptake. It accelerates bone mineralization and maintains skeletal structural integrity, drastically reducing the risk of age-related bone loss and osteoporosis.",
      "Advanced Muscle & Athletic Performance: Directly fuels muscle fiber contraction, rapid relaxation, and neuromuscular response. It prevents performance-limiting cramps, making it ideal for elite sports and physical recovery blends.",
      "Deep Enamel & Dental Reinforcement: Contributes directly to jawbone stability and tooth density. It fortifies enamel against daily wear and decay while protecting the foundational jaw structure that prevents adult tooth loss."
    ],
    "applications": [
      "Dietary Supplements: Widely used in calcium supplements formulated to support daily nutritional intake, bone health, and overall wellness.",
      "Bone & Joint Health Products: Incorporated into formulations designed to support bone mineralization, skeletal strength, and healthy connective tissues.",
      "Sports Nutrition: Used in sports nutrition and recovery products to support muscle function, electrolyte balance, and physical performance.",
      "Pharmaceutical Formulations: Suitable for calcium-based pharmaceutical products and specialized therapeutic formulations requiring a high-quality calcium source.",
      "Clinical & Medical Nutrition: Included in specialized nutritional formulations and clinical nutrition products to help meet increased calcium requirements.",
      "Functional Foods & Beverages: Applied in fortified beverages, nutritional powders, dairy alternatives, meal replacements, and functional food products enriched with calcium.",
      "Women's Health Products: Used in formulations supporting women's nutritional needs, particularly for bone health during different life stages.",
      "Pediatric & Geriatric Nutrition: Incorporated into nutritional products developed for children and older adults to help maintain healthy bone development and mineral balance.",
      "Nutraceutical Formulations: Ideal for tablets, capsules, powders, sachets, stick packs, and effervescent formulations due to its excellent formulation compatibility and manufacturing performance.",
      "CALCIUM BIS GLYCINATE",
      "URL : /calcium-bisglycinate-manufacturer",
      "Meta Title: Calcium Bis Glycinate for Maximum Absorption",
      "Meta Description: High-bioavailability calcium bisglycinate for superior absorption and nutraceutical formulations. Suitable for premium supplements. Connect Now"
    ]
  },
  {
    "name": "Calcium L-Pidolate",
    "slug": "calcium-l-pidolate",
    "casNumber": "31377-05-6",
    "categoryTag": "Calcium (Chelated Minerals)",
    "parentCategorySlug": "minerals",
    "subCategorySlug": "calcium",
    "imagePath": "/aditya chemicals images/Calcium/product card/Calcium Bis Glycinate.png"
  },
  {
    "name": "Calcium Bis Glycinate",
    "slug": "calcium-bis-glycinate",
    "casNumber": "35947-07-0",
    "categoryTag": "Calcium (Chelated Minerals)",
    "parentCategorySlug": "minerals",
    "subCategorySlug": "calcium",
    "imagePath": "/aditya chemicals images/Calcium/product card/Calcium Bis Glycinate.png",
    "description": "Calcium Bis Glycinate is a chelated form of calcium where the mineral is bound to the amino acid glycine, resulting in enhanced bioavailability and superior digestive tolerance. It is especially suited for advanced formulations where efficient calcium delivery and reduced gastric irritation are key. Aditya Chemicals supplies high-purity Calcium Glycinate, optimized for use in tablets, capsules, and mineral-rich wellness blends. Its chelated structure ensures reliable performance in complex formulations targeting bone, nerve, and muscular support.",
    "details": {
      "formula": "C4H8CaN2O4",
      "weight": "188.20 g/mol",
      "shelfLife": "5 Years"
    },
    "specifications": {
      "iupacName": "Calcium;2-aminoacetate",
      "physicalForm": "White to yellowish-white hygroscopic powder",
      "assay": "NLT 20.0% w/w",
      "storage": "Store in a well-closed container."
    },
    "features": [
      "Dual-Mechanism Skeletal & Cellular Synergy: Calcium bisglycinate delivers a two-in-one benefit for structural and physiological health:",
      "The Glycine Carrier: This small amino acid accelerates mineral delivery into the bone matrix and supports collagen synthesis.",
      "The Calcium Foundation: Provides the raw building blocks for bone",
      "Superior Gastric Stability: Standard calcium degrades in stomach acid. The chelated bisglycinate shield passes intact through the stomach, maximizing the active dose entering the bloodstream.",
      "Targeted Cellular Uptake: Prevents unabsorbed calcium from building up outside cells (which risks kidney stress or calcification). It uses amino acid pathways to pull calcium directly inside bone and muscle cells for optimal recovery.",
      "Zero GI Distress: Unabsorbed calcium causes bloating, gas, and constipation. Calcium bisglycinate absorbs so efficiently that it leaves no unreacted particles behind, ensuring excellent stomach tolerance.",
      "Formulation Friendly: High-purity powder optimized for seamless blending into tablets, capsules, and premium nutritional mixes."
    ],
    "applications": [
      "Premium Mineral Supplements: Preferred for high-end calcium formulations where enhanced mineral absorption and superior bioavailability are key formulation objectives.",
      "Women's Health Nutrition: Extensively used in prenatal, postnatal, and menopausal nutritional products to help support calcium intake during different life stages.",
      "Bone Density Formulations: Incorporated into advanced bone health products formulated alongside Vitamin D3, Vitamin K2, and magnesium to support skeletal wellness.",
      "Healthy Aging Products: Applied in formulations designed for older adults to help maintain bone strength and support long-term mobility.",
      "Functional Nutrition Blends: Used in complete mineral complexes, daily wellness formulas, and multinutrient supplements for balanced nutritional support.",
      "Fortified Food & Beverage Applications: Suitable for protein powders, nutrition shakes, meal replacement beverages, cereal fortification, and dairy alternative products.",
      "Medical & Specialized Nutrition: Utilized in specialized nutrition products requiring a gentle, highly bioavailable calcium source for targeted nutritional support.",
      "Advanced Nutraceutical Delivery: Compatible with capsules, tablets, gummies, stick packs, sachets, chewable tablets, and ready-to-drink nutritional formulations due to its excellent stability and processing characteristics.",
      "CALCIUM CITRATE",
      "URL : /calcium-citrate-manufacturer/",
      "Meta Title: Calcium Citrate for High Absorption Supplements",
      "Meta Description: Aditya Chemicals offers calcium citrate for high absorption and bone health support. Ideal for nutraceutical and digestive-friendly formulations."
    ],
    "regionalContent": {
      "us": {
        "intro": "Aditya Chemicals manufactures highly bioavailable Calcium Bis Glycinate, serving the US bone health supplement market.",
        "complianceNote": "Conforms to USP/FCC guidelines, manufactured in an FDA-inspected facility.",
        "shippingNote": "Distributed locally from our Boca Raton, Florida warehouse to ensure rapid delivery."
      },
      "uk": {
        "intro": "We supply high-purity Calcium Bis Glycinate to UK infant nutrition and health supplement manufacturers.",
        "complianceNote": "Complies with BP specifications and has full UK-REACH registration status.",
        "shippingNote": "Direct supply routes from India to major UK locations with complete export documentation."
      },
      "eu": {
        "intro": "Aditya Chemicals delivers premium bulk Calcium Bis Glycinate to European dietary supplement brands.",
        "complianceNote": "Fully REACH registered and EP compliant for distribution across the European Union.",
        "shippingNote": "Shipped through our European logistical networks, offering door-to-door delivery with customs cleared."
      }
    }
  },
  {
    "name": "Calcium Lactate Gluconate",
    "slug": "calcium-lactate-gluconate-ih",
    "casNumber": "11116-97-5",
    "categoryTag": "Calcium (Chelated Minerals)",
    "parentCategorySlug": "minerals",
    "subCategorySlug": "calcium",
    "imagePath": "/aditya chemicals images/Calcium/product card/Calcium Lactate Gluconate.png",
    "description": "Aditya Chemical’s Calcium Lactate Gluconate is a highly soluble salt of calcium, lactic acid and gluconic acid used in effervescent calcium tablets. In pharmaceuticals, it is widely used as a pharmaceutical calcium source with excellent bioavailability. In food and beverages, the outstanding characteristics of calcium lactate gluconate, combining high solubility and neutral taste, lead to new applications in a wide range of premium products.",
    "details": {
      "formula": "C₉H₁₆CaO₁₀",
      "weight": "324.3 g/mol",
      "shelfLife": "5 Years"
    },
    "specifications": {
      "iupacName": "Calcium; 2-hydroxypropanoate; (2R,3S,4R,5R)-2,3,4,5,6-pentahydroxyhexanoate",
      "physicalForm": "White to off-white crystalline or granular powder",
      "assay": "96.0 % to 102.0 %",
      "storage": "Store in a well-closed container"
    },
    "features": [
      "High Bioavailability: The synergistic combination of lactate and gluconate ions enhances calcium absorption in the human gastrointestinal tract.",
      "Neutral Taste Profile: It has a clean, virtually tasteless profile with no chalky or bitter aftertaste, which is crucial for compliance in pediatric and geriatric oral formulations.",
      "Excellent Gastric Tolerance: It is highly gentle on the stomach and does not typically cause the bloating, gas, or constipation associated with heavier calcium salts.",
      "Effervescent Tablets: calcium lactate gluconate’s high solubility allows for crystal-clear dissolution without leaving a gritty residue at the bottom of the glass.",
      "Chewable & Orodispersible Tablets (ODTs): Because it lacks a bitter taste, it requires less flavour-masking, reducing production costs and tablet size.",
      "Pediatric & Geriatric Calcium Syrups: Ideal for formulating stable, high-concentration oral liquids without crystallization issues over time.",
      "Fortified Ready-to-Drink (RTD) Beverages: Broadening the scope into medical nutrition and functional wellness drinks.",
      "Antacid Formulations: Leveraging its gastric tolerance for rapid-acting, non-irritating stomach acid neutralization products."
    ],
    "applications": [
      "Calcium-Fortified Beverages: Widely used in fruit juices, dairy alternatives, nutritional drinks, and functional beverages due to its excellent water solubility and mild taste profile.",
      "Functional Food Fortification: Incorporated into cereals, confectionery, bakery products, dairy products, and other fortified foods to enhance calcium content without significantly affecting flavor.",
      "Dietary Supplements: Used in premium calcium supplements formulated to support daily calcium intake and overall nutritional wellness.",
      "Infant & Pediatric Nutrition: Suitable for specialized nutritional products developed to support healthy growth and bone development in infants and children.",
      "Clinical & Medical Nutrition: Applied in enteral nutrition, medical foods, and specialized nutritional formulations requiring a highly soluble calcium source.",
      "Women's Health Products: Included in prenatal, postnatal, and menopausal nutrition formulations to help meet increased calcium requirements.",
      "Pharmaceutical Formulations: Utilized in calcium-based pharmaceutical preparations and oral nutritional products requiring consistent quality and formulation stability.",
      "Versatile Nutraceutical Applications: Ideal for tablets, chewable tablets, capsules, powders, sachets, gummies, syrups, and liquid formulations, offering excellent formulation compatibility and manufacturing performance.",
      "CALCIUM MALATE",
      "URL : /calcium-malate-manufacturer",
      "Meta Title: Calcium Malate for Nutraceutical & Supplement Formulations",
      "Meta Description: Calcium malate is a dual-support calcium for energy production and bone health. Ideal for supplement and nutraceutical use. Get a quote today"
    ]
  },
  {
    "name": "Calcium Citrate",
    "slug": "calcium-citrate",
    "casNumber": "813-94-5",
    "categoryTag": "Calcium (Chelated Minerals)",
    "parentCategorySlug": "minerals",
    "subCategorySlug": "calcium",
    "imagePath": "/aditya chemicals images/Calcium/product card/Calcium Citrate.png",
    "description": "Calcium Citrate is a widely used calcium salt offering excellent solubility and bioavailability, especially in individuals with low stomach acid. It is a preferred calcium source in nutraceuticals aimed at bone health, mineral supplementation, and senior wellness. Aditya Chemicals supplies high-purity Calcium Citrate tailored for use in tablets, capsules, powders, and fortified food and beverage systems. Our material is known for its superior flow properties and formulation compatibility, ensuring dependable performance across product formats.",
    "details": {
      "formula": "C12H10Ca3O14.4H2O",
      "weight": "570.49 g/mol",
      "shelfLife": "5 Years"
    },
    "specifications": {
      "iupacName": "1,2,3-Propanetricarboxylic acid, 2-hydroxy-, calcium salt (2:3), tetrahydrate",
      "physicalForm": "White, odorless, crystalline powder",
      "assay": "98.0% to 102.0%",
      "storage": "Preserve in a well-closed container"
    },
    "features": [
      "Acid-Independent Absorption: Absorbs efficiently on an empty stomach or in low-acid environments. It is the premier choice for seniors (with low stomach acid) and users on antacids or PPIs.",
      "High Bioavailability: An organic, highly soluble mineral salt that bypasses the breakdown barriers of inorganic minerals for rapid systemic delivery.",
      "All-Weather Dosing Flexibility: Can be taken anytime—with or without food—without losing potency or causing stomach upset.",
      "Advanced Formulation Stability: Resists binding with dietary fibers or phytates in the gut, ensuring the user actually absorbs the full functional dose.",
      "Premium Processing Utility: Excellent solubility and neutral taste profile, optimized for tablets, chewables, premium drink mixes, and fortified foods."
    ],
    "applications": [
      "Bone Health Supplements: Commonly used in calcium formulations developed to support bone mineralization, skeletal integrity, and long-term bone health.",
      "Daily Nutritional Supplements: Incorporated into multivitamin and mineral supplements to help meet recommended daily calcium intake.",
      "Digestive-Friendly Formulations: Preferred in products designed for individuals seeking a calcium source that is well tolerated and suitable for a wide range of consumers.",
      "Healthy Aging Nutrition: Used in formulations developed for older adults to support nutritional needs related to bone and muscle health.",
      "Functional Food Fortification: Applied in fortified dairy alternatives, nutritional beverages, meal replacement products, cereals, and health-focused food applications.",
      "Pharmaceutical Preparations: Suitable for calcium-based pharmaceutical products and nutritional formulations requiring consistent quality and purity.",
      "Specialized Nutrition Products: Included in prenatal, postnatal, pediatric, and geriatric nutritional formulations to support varying calcium requirements.",
      "Flexible Nutraceutical Formulations: Ideal for tablets, chewable tablets, capsules, powders, sachets, effervescent products, and liquid nutritional formulations due to its excellent formulation versatility.",
      "CALCIUM CITRATE MALATE",
      "URL : /calcium-citrate-malate-supplier/",
      "Meta Title: Calcium Citrate Malate for Bone Density & Mineral Support",
      "Meta Description: Get Calcium Citrate Malate from Aditya Chemicals for advanced calcium supplements. Designed for better absorption and bone health applications."
    ]
  },
  {
    "name": "Calcium Malate",
    "slug": "calcium-malate",
    "casNumber": "17482-42-7",
    "categoryTag": "Calcium (Chelated Minerals)",
    "parentCategorySlug": "minerals",
    "subCategorySlug": "calcium",
    "imagePath": "/aditya chemicals images/Calcium/product card/Calcium Malate.png",
    "description": "Calcium Malate is a calcium salt of malic acid known for its good bioavailability, mild taste, and gentle impact on the digestive system. It is used in dietary and nutraceutical formulations supporting bone health, muscle function, and overall mineral balance. Aditya Chemicals supplies premium-grade Calcium Malate suitable for use in capsules, tablets, powdered supplements, and functional beverages. Its favourable absorption profile and formulation versatility make it a dependable choice for modern calcium delivery systems.",
    "details": {
      "formula": "C₄H₄CaO₅",
      "weight": "172.1 g/mol",
      "shelfLife": "5 Years"
    },
    "specifications": {
      "iupacName": "Calcium 2-hydroxybutanedioate",
      "physicalForm": "White, colourless powder or granules",
      "assay": "NLT 97.5%",
      "storage": "Preserve in a well-closed container"
    },
    "features": [
      "Superior Bioavailability: The organic malic acid bound to the calcium optimises absorption pathways within the intestinal tract, ensuring highly efficient uptake by the body.",
      "Excellent Water Solubility: It exhibits rapid and complete dissolution in water, making it highly versatile for transparent liquid formulations and quick-dissolving tablets.",
      "Exceptional Gastric Tolerance: It dissolves easily in the gastrointestinal tract without requiring high stomach acidity. It can be taken comfortably with or without food, ensuring zero digestive discomfort.",
      "High Structural Stability: It maintains its chemical integrity across a wide pH range, allowing it to stay completely dissolved in acidic liquid formulations without precipitating or settling.",
      "Synergistic Combinations: It acts as a highly compatible molecular anchor in multi-ingredient bone-density formulas, pairing seamlessly with Vitamin D3, Vitamin K2 (MK-7), and Magnesium.",
      "Chewable & Gummies: Its natural malic acid backbone complements fruit flavour profiles perfectly, eliminating chalkiness to deliver a smooth mouthfeel in chewable tablets, melts, and gummies.",
      "Effervescent and ODTs: Its formulation profile enables crystal-clear, clean-dissolving effervescent and orally disintegrating tablets (ODTs) that leave absolutely no gritty or sandy residue."
    ],
    "applications": [
      "Bone Health Supplements: Widely used in calcium formulations developed to support bone strength, bone mineralization, and long-term skeletal health.",
      "Daily Wellness Products: Incorporated into multivitamin and mineral supplements to help meet everyday calcium requirements and support overall nutritional balance.",
      "Sports & Active Nutrition: Used in sports nutrition products to support normal muscle function, bone integrity, and recovery for physically active individuals.",
      "Healthy Aging Formulations: Applied in nutritional products designed for older adults to support mobility, bone maintenance, and active aging.",
      "Functional Foods & Beverages: Suitable for fortified nutritional drinks, meal replacements, dairy alternatives, cereals, and other calcium-enriched food applications.",
      "Clinical & Specialized Nutrition: Included in medical nutrition and specialized dietary formulations for individuals with increased calcium requirements.",
      "Pharmaceutical Preparations: Utilized in calcium-based pharmaceutical products requiring consistent quality, stability, and formulation performance.",
      "Flexible Nutraceutical Formulations: Ideal for tablets, capsules, powders, sachets, chewable tablets, stick packs, and effervescent products due to its excellent processing characteristics and formulation versatility.",
      "CALCIUM OROTATE",
      "URL : /calcium-orotate-manufacturer",
      "Meta Title: Calcium Orotate Manufacturer",
      "Meta Description: High-bioavailability calcium orotate for cellular absorption and bone health support. Suitable for premium supplement formulations. Contact us."
    ]
  },
  {
    "name": "Calcium Citrate Malate",
    "slug": "calcium-citrate-malate",
    "casNumber": "142606-53-9",
    "categoryTag": "Calcium (Chelated Minerals)",
    "parentCategorySlug": "minerals",
    "subCategorySlug": "calcium",
    "imagePath": "/aditya chemicals images/Calcium/product card/Calcium Citrate Malate.png",
    "description": "Calcium Citrate Malate is a water-soluble calcium compound combining the benefits of both citrate and malate anions, offering superior bioavailability and absorption. It is widely preferred in premium nutraceutical formulations targeting bone density, skeletal strength, and mineral support. Aditya Chemicals supplies high-grade Calcium Citrate Malate with excellent flowability and solubility, making it ideal for use in tablets, capsules, effervescent, and fortified beverages. Our product meets strict quality standards for use in advanced nutritional systems.",
    "details": {
      "formula": "Ca3(C6H5O7)2. 3CaC4H4O5.6H2O",
      "weight": "1123.00 g/mol",
      "shelfLife": "5 Years"
    },
    "specifications": {
      "iupacName": "Tetracalcium 2-hydroxybutanedioatebis(2-hydroxypropane-1,2,3-tricarboxylate)",
      "physicalForm": "A white or almost white odorless, crystalline powder.",
      "assay": "23.0 % to 24.2 %",
      "storage": "Store protected from moisture"
    },
    "features": [
      "Acid-Independent Absorption: Dissolves completely regardless of stomach pH. It absorbs perfectly on an empty stomach, making it ideal for seniors with low stomach acid or consumers taking antacids.",
      "Flawless Stomach Tolerance: Leaves no unreacted, chalky residue in the gut. This ensures a near-zero incidence of bloating, gas, and severe constipation common with cheap calcium salts.",
      "Clean Taste: It delivers a clean mouthfeel, making it the premier choice for RTD beverages, fortified juices, and effervescent tablets.",
      "Multi-Mineral Synergy: Maintains an optimal ionization rate in the digestive tract that prevents it from blocking or competing with the absorption of companion nutrients like Magnesium, Zinc, or Iron.",
      "Sustained Cellular Retention: Unlike regular calcium that is quickly excreted in urine, Calcium Citrate Malate has high tissue retention. This means a larger percentage of the absorbed calcium stays locked inside the body's skeletal matrix."
    ],
    "applications": [
      "High-Bioavailability Calcium Supplements: Widely used in premium calcium formulations where efficient calcium absorption and utilization are primary formulation goals.",
      "Bone Development & Skeletal Health: Incorporated into products designed to support healthy bone growth, bone density, and long-term skeletal maintenance across all age groups.",
      "Children's & Adolescent Nutrition: Applied in pediatric supplements and fortified nutrition products to support healthy growth and bone development during formative years.",
      "Women's Health Formulations: Used in prenatal, postnatal, and menopausal nutritional products to address increased calcium requirements during different life stages.",
      "Functional Food & Beverage Fortification: Suitable for calcium-fortified juices, dairy alternatives, nutrition drinks, meal replacements, and functional food applications due to its good solubility.",
      "Clinical & Medical Nutrition: Included in specialized nutrition products for individuals requiring highly bioavailable calcium as part of balanced nutritional support.",
      "Healthy Aging Products: Used in formulations targeting bone strength, mobility, and active aging for older adults.",
      "Advanced Nutraceutical Delivery Systems: Compatible with tablets, capsules, powders, sachets, stick packs, chewable tablets, and ready-to-drink nutritional formulations, offering excellent processing and formulation flexibility.",
      "CALCIUM LACTATE GLUCONATE",
      "URL : /calcium-lactate-gluconate-manufacturer",
      "Meta Title: Calcium Citrate Malate Manufacturer",
      "Meta Description: Calcium lactate gluconate offers excellent solubility and absorption for fortified nutrition and supplement formulations. Enquire for pricing."
    ]
  },
  {
    "name": "Calcium Orotate",
    "slug": "calcium-orotate-2",
    "casNumber": "22454-86-0",
    "categoryTag": "Calcium (Chelated Minerals)",
    "parentCategorySlug": "minerals",
    "subCategorySlug": "calcium",
    "imagePath": "/aditya chemicals images/Calcium/product card/Calcium Orotate.png",
    "description": "Calcium Orotate is a highly bioavailable calcium salt of orotic acid, valued for its ability to deliver calcium at a cellular level. Its superior absorption profile makes it a preferred choice for advanced bone health and metabolic support formulations. Aditya Chemicals supplies Calcium Orotate with excellent chemical stability, ideal for use in capsules, tablets, and fortified blends. Our material meets the quality standards required for high-performance health supplements.",
    "details": {
      "formula": "(C5H3O4)2. Ca",
      "weight": "350.3 g/mol",
      "shelfLife": "3 Years"
    },
    "specifications": {
      "iupacName": "Calcium 2,6-dioxo-1,2,3,6-tetrahydropyrimidine-4-carboxylate",
      "physicalForm": "White to almost white crystalline powder.",
      "assay": "98.0% to 102.0%",
      "storage": "Store protected from moisture at a temperature not exceeding 30°C."
    },
    "features": [
      "Cardiovascular Safety Shield: Rapid intracellular uptake ensures calcium goes straight into bones and muscles, eliminating the risk of arterial calcification or kidney tissue stress",
      "Blood-Brain Barrier Penetration: The only form of calcium capable of crossing into the central nervous system, offering unique neuroprotective and nerve-signaling benefits.",
      "Zero Nutrient Competition: Does not bind to or block other critical minerals like Iron or Magnesium in the gut, making it perfect for premium multi-nutrient blends.",
      "Absolute Gastric Comfort: Dissolves smoothly without requiring heavy stomach acid, completely eliminating the bloating, gas, and constipation of cheap calcium forms."
    ],
    "applications": [
      "Premium Calcium Supplements: Widely used in advanced calcium formulations designed to support daily calcium intake and long-term nutritional wellness.",
      "Bone & Skeletal Health Products: Incorporated into formulations that support bone mineralization, bone density, and overall skeletal strength.",
      "Cardiovascular Wellness Formulations: Applied in nutritional products developed to support normal cardiovascular function as part of a balanced mineral nutrition program.",
      "Sports & Active Lifestyle Nutrition: Used in sports nutrition products to support normal muscle function, physical performance, and post-exercise recovery.",
      "Healthy Aging Products: Included in formulations designed for older adults to help maintain bone health, mobility, and overall vitality.",
      "Clinical & Medical Nutrition: Suitable for specialized nutritional products intended for individuals with increased calcium requirements.",
      "Functional Foods & Beverages: Used in fortified beverages, nutritional powders, meal replacements, and functional food products requiring calcium enrichment.",
      "Advanced Nutraceutical Formulations: Ideal for tablets, capsules, powders, sachets, stick packs, chewable tablets, and combination mineral formulations due to its excellent formulation compatibility and manufacturing consistency.",
      "Calcium Glycerophosphate",
      "Calcium L-Pidolate",
      "Zinc",
      "Zinc Bis Glycinate",
      "URL : /zinc-bis-glycinate-supplier",
      "Meta Title: Zinc Bis Glycinate Manufacturer & Supplier",
      "Meta Description: Aditya Chemicals manufactures premium-quality Zinc Bis Glycinate for pharmaceutical, nutraceutical, food, and dietary supplement applications with consistent quality and reliable global supply."
    ]
  },
  {
    "name": "Calcium Glycerophosphate",
    "slug": "calcium-glycerophosphate",
    "casNumber": "27214-00-2",
    "categoryTag": "Calcium (Chelated Minerals)",
    "parentCategorySlug": "minerals",
    "subCategorySlug": "calcium",
    "imagePath": "/aditya chemicals images/Calcium/product card/calcium-glycerophosphate-structure.jpg",
    "description": "Calcium Glycerophosphate is an organic calcium salt of glycerophosphoric acid that delivers both calcium and phosphorus in a single, well-tolerated compound. Valued for its high bioavailability and gentle gastrointestinal profile compared to less soluble calcium salts, it is a preferred calcium source for formulators seeking dependable mineral delivery without compromising on tolerability. Aditya Chemical's Calcium Glycerophosphate is manufactured to consistent quality standards, supporting nutraceutical, dietary, and pharmaceutical applications worldwide.",
    "details": {
      "formula": "C₃H₇CaO₆P",
      "weight": "210.14 g/mol",
      "shelfLife": "3 Years",
      "grade": "BP/EP/USP/FCC"
    },
    "specifications": {
      "physicalForm": "White or almost white powder, hygroscopic",
      "assay": "18.6% to 19.4% Ca, calculated on the dried substance (complexometric/EDTA titration)",
      "solubility": "Sparingly soluble in water; practically insoluble in ethanol (96%); solubility improves at lower temperature and in the presence of citric acid",
      "storage": "Store in a well-closed, airtight container, protected from moisture"
    },
    "features": [
      "Dual Mineral Delivery: Supplies both elemental calcium and phosphorus in one molecule, reducing the need for a separate phosphorus source in multi-mineral formulations.",
      "High Bioavailability: Recognised for improved absorption relative to less soluble calcium salts, supporting efficient calcium uptake.",
      "Gentle Gastrointestinal Tolerance: Sparingly soluble, buffered release profile helps minimise gastric irritation, supporting comfortable daily use.",
      "Bone & Skeletal Mineralisation Support: Contributes both calcium and phosphate, two minerals directly involved in bone matrix formation and skeletal strength.",
      "Dental & Oral Care Compatibility: Recognised for a role in remineralisation-focused oral care formulations, supporting enamel health alongside fluoride or magnesium actives.",
      "Stable Powder Handling: Consistent particle characteristics support reliable blending, though the hygroscopic nature calls for airtight, moisture-protected storage during processing."
    ],
    "applications": [
      "Dietary Supplements: Used in supplements for bone health, general wellness, and daily nutritional support.",
      "Sports Nutrition: Incorporated in recovery and performance formulations to support electrolyte balance and bone health.",
      "Pharmaceutical Formulations: Suitable for products aimed at preventing or treating calcium deficiency with good tolerability.",
      "Functional Foods & Beverages: Ideal for fortified beverages, nutritional powders, and functional foods enriched with calcium.",
      "Clinical & Medical Nutrition: Included in specialised formulations for individuals with increased calcium and phosphorus requirements.",
      "Oral & Dental Care Formulations: Used in toothpaste and oral care products targeting enamel remineralisation and dental health.",
      "Bone & Skeletal Health Products: Supports skeletal mineralisation and maintenance of healthy bone density.",
      "Nutraceutical Formulations: Ideal for tablets, capsules, powders, and sachets due to its stable handling characteristics and formulation compatibility."
    ],
    "regionalContent": {
      "us": {
        "intro": "Aditya Chemicals is a premier manufacturer of Calcium Glycerophosphate, delivering highly bioavailable calcium and phosphorus to the US market.",
        "complianceNote": "Fully compliant with USP standards and FDA regulations, backed by complete DMF documentation for dietary supplements.",
        "shippingNote": "Distributed from our US warehouse in Boca Raton, Florida, for fast inland shipping across all states."
      },
      "uk": {
        "intro": "We supply premium Calcium Glycerophosphate to UK pharmaceutical and infant nutrition manufacturers.",
        "complianceNote": "Meets BP standards and complies with UK health and safety regulations, supported by UK-REACH verification.",
        "shippingNote": "Direct sea/air logistics to the UK with complete customs documentation for seamless clearance."
      },
      "eu": {
        "intro": "Supplying bulk Calcium Glycerophosphate to European pharmaceutical, dental care, and infant formula brands.",
        "complianceNote": "Fully REACH registered for the EU market, meeting EP and food-grade compliance criteria.",
        "shippingNote": "Shipped directly from our certified facilities to European distribution centers with door-to-door tracking."
      }
    }
  },
  {
    "name": "Zinc Bis Glycinate",
    "slug": "zinc-bis-glycinate",
    "casNumber": "14281-83-5",
    "categoryTag": "Zinc (Chelated Minerals)",
    "parentCategorySlug": "minerals",
    "subCategorySlug": "zinc",
    "imagePath": "/aditya chemicals images/Zinc/product card/Zinc Bis Glycinate.png",
    "description": "Zinc Bis glycinate is a chelated form of zinc, where zinc is bound to the amino acid glycine, resulting in enhanced bioavailability and gentle gastrointestinal tolerance. It is widely used in nutraceutical and dietary formulations aimed at supporting immune function, skin health, and enzymatic activity. Aditya Chemicals offers high-purity Zinc Bis glycinate, ideal for premium formulations where superior absorption and reduced gastric irritation are key requirements. Its stability and efficacy make it suitable for a wide range of advanced health supplements.",
    "details": {
      "formula": "C₄H₈N₂O₄Zn",
      "weight": "213.5 g/mol",
      "shelfLife": "5 Years"
    },
    "specifications": {
      "iupacName": "zinc (II) glycinate",
      "physicalForm": "White to off-white, odourless crystalline powder",
      "assay": "NLT 30.0% w/w",
      "storage": "Preserve in a well-closed container."
    },
    "features": [
      "Improved Zinc Absorption: The amino acid chelation in zinc bis glycinate significantly enhances its bioavailability, ensuring farm animals absorb and utilize this essential mineral more efficiently.",
      "Supports Immune Function: Zinc is crucial for a robust immune system, helping animals fight infections and maintain overall health.",
      "Enhances Skin and Hoof Health: Adequate zinc levels are vital for healthy skin, coat, and strong hooves, preventing conditions like dermatitis and lameness.",
      "Promotes Growth and Development: By supporting protein synthesis and cell division, zinc contributes to healthy growth rates and proper development in young animals.",
      "Boosts Reproductive Performance: Optimal zinc levels support reproductive health in breeding animals, improving fertility and overall efficiency.",
      "Prevents Zinc Deficiency: Supplementing with zinc bis glycinate prevents deficiencies that cause poor growth, weak immunity, and skin lesions. Our formulation is also optimized to minimize potential side effects."
    ],
    "applications": [
      "Dietary Supplements: Widely used in tablets, capsules, powders, gummies, and sachets for zinc supplementation.",
      "Nutraceuticals: Incorporated into immune health, wellness, and daily nutrition formulations.",
      "Sports Nutrition: Used in performance nutrition products, recovery formulas, and mineral-fortified protein supplements.",
      "Functional Foods & Beverages: Added to fortified foods, nutrition bars, meal replacement products, and functional beverages for mineral enrichment.",
      "Pharmaceuticals: Used in mineral formulations and specialty nutritional preparations requiring highly bioavailable zinc.",
      "Premixes & Customized Blends: Suitable for vitamin-mineral premixes and customized nutritional formulations for commercial-scale manufacturing.",
      "Zinc Citrate",
      "URL :",
      "Meta Title: Zinc Citrate Manufacturer & Supplier",
      "Meta Description: Aditya Chemicals manufactures high-quality Zinc Citrate for pharmaceutical, nutraceutical, food, and dietary supplement applications with consistent quality and reliable global supply."
    ],
    "regionalContent": {
      "us": {
        "intro": "Aditya Chemicals provides bulk Zinc Bis Glycinate to the US market for immune support and mineral enrichment.",
        "complianceNote": "Meets USP standards, produced in our FDA-registered, cGMP-certified plant.",
        "shippingNote": "Available for direct dispatch from our Florida warehouse, reducing lead times."
      },
      "uk": {
        "intro": "We supply premium chelated Zinc Bis Glycinate to UK pharmaceutical and supplement formulators.",
        "complianceNote": "Conforms to BP requirements and supported by full UK-REACH documentation.",
        "shippingNote": "Efficient sea and air logistics directly to the UK, ensuring consistent inventory."
      },
      "eu": {
        "intro": "Aditya Chemicals is a trusted supplier of Zinc Bis Glycinate to European wellness and nutritional brands.",
        "complianceNote": "EU REACH registered and EP compliant, assuring compliance with European safety criteria.",
        "shippingNote": "Shipped directly to EU hubs with complete import clearance handling."
      }
    }
  },
  {
    "name": "Zinc L-Pidolate",
    "slug": "zinc-l-pidolate",
    "casNumber": "15454-75-8",
    "categoryTag": "Zinc (Chelated Minerals)",
    "parentCategorySlug": "minerals",
    "subCategorySlug": "zinc",
    "imagePath": "/aditya chemicals images/Zinc/product card/Zinc Bis Glycinate.png"
  },
  {
    "name": "Zinc Citrate",
    "slug": "zinc-citrate",
    "casNumber": "546-46-3",
    "categoryTag": "Zinc (Chelated Minerals)",
    "parentCategorySlug": "minerals",
    "subCategorySlug": "zinc",
    "imagePath": "/aditya chemicals images/Zinc/product card/Zinc Citrate.png",
    "description": "Zinc Citrate is a well-absorbed form of zinc commonly used in nutraceutical and dietary formulations. Known for its high bioavailability and mild taste profile, Zinc Citrate supports immune health, enzymatic functions, and antioxidant defence. Aditya Chemicals offers premium-grade Zinc Citrate that is suitable for a wide range of nutritional applications, including immune support supplements, wellness blends, and functional beverages. Its excellent stability and compatibility make it a preferred choice for advanced formulation systems.",
    "details": {
      "formula": "C12H14O16Zn3",
      "weight": "610.36 g/mol",
      "shelfLife": "5 Years"
    },
    "specifications": {
      "iupacName": "Trizinc bis(2-hydroxypropane-1,2,3-tricarboxylate); dihydrate",
      "physicalForm": "A white or almost white powder",
      "assay": "NLT 31.3%",
      "storage": "Store protected from moisture"
    },
    "features": [
      "High Bioavailability & Absorption: As an organic salt bonded with citric acid, Zinc Citrate has a highly compatible molecular structure, allowing faster and more efficient absorption compared to inorganic forms like zinc oxide.",
      "Potent Immune System Support: It plays a foundational role in developing and activating T lymphocytes, acting as a powerful line of defence against viral and bacterial infections.",
      "Premium Oral Health and Dental Care: Widely recognized for its antimicrobial role in oral hygiene, it actively inhibits dental plaque, reduces calculus build-up, and neutralizes bad breath.",
      "Cellular Growth and Tissue Repair: Acting as a critical cofactor for over 300 enzymes, it drives DNA synthesis and cell division, making it essential for rapid wound healing and skin integrity.",
      "Excellent Sensory Profile (Neutral Taste): Unlike other zinc sources with a harsh, metallic aftertaste, its smooth, neutral flavor makes it ideal for chewable gummies, lozenges, and animal feeds.",
      "High Zinc Content concentration: Containing roughly 31.3 % elemental zinc, its high concentration allows manufacturers to achieve effective therapeutic doses using less raw material."
    ],
    "applications": [
      "Nutraceuticals & Dietary Supplements: Used in tablets, capsules, powders, gummies, and sachets for zinc supplementation.",
      "Pharmaceuticals: Incorporated into mineral supplements, multivitamin formulations, and therapeutic nutritional products.",
      "Functional Foods & Beverages: Applied in fortified foods, nutritional drinks, meal replacement products, and health beverages.",
      "Oral Care: Commonly used in toothpaste, mouthwash, and oral hygiene formulations.",
      "Sports Nutrition: Included in electrolyte blends, protein supplements, and performance nutrition products requiring mineral fortification.",
      "Animal Nutrition: Used in feed supplements and veterinary formulations to provide zinc in balanced nutritional products.",
      "Zinc Gluconate",
      "URL : /zinc-gluconate-supplier",
      "Meta Title: Zinc Gluconate Manufacturer & Supplier",
      "Meta Description: Aditya Chemicals manufactures premium-quality Zinc Gluconate for pharmaceutical, nutraceutical, food, and dietary supplement applications with consistent quality and reliable global supply."
    ]
  },
  {
    "name": "Zinc Lactate",
    "slug": "zinc-lactate",
    "casNumber": "16039-53-5",
    "categoryTag": "Zinc (Chelated Minerals)",
    "parentCategorySlug": "minerals",
    "subCategorySlug": "zinc",
    "imagePath": "/aditya chemicals images/Zinc/product card/Zinc Lactate.png"
  },
  {
    "name": "Zinc Gluconate",
    "slug": "zinc-gluconate",
    "casNumber": "4468-02-4",
    "categoryTag": "Zinc (Chelated Minerals)",
    "parentCategorySlug": "minerals",
    "subCategorySlug": "zinc",
    "imagePath": "/aditya chemicals images/Zinc/product card/Zinc Gluconate.png",
    "description": "Aditya Chemical’s Zinc Gluconate is a widely used, highly bioavailable zinc salt known for its role in supporting immune health, wound healing, and cellular function. It is gentle on the stomach and commonly used in pharmaceutical, nutraceutical, and personal care formulations. Our high-purity Zinc Gluconate ensures effective absorption and consistent therapeutic benefits.",
    "details": {
      "formula": "C12H22O14Zn",
      "weight": "455.67 g/mol",
      "shelfLife": "5 Years ZINC MONOMETHIONINE URL : Meta Title: Meta Description"
    },
    "specifications": {
      "iupacName": "Zinc(2+) bis[(2R,3S,4R,5R)-2,3,4,5,6-pentahydroxyhexanoate]",
      "solubility": "",
      "physicalForm": "",
      "assay": "",
      "storage": ""
    },
    "features": [],
    "applications": []
  },
  {
    "name": "Zinc Monomethionine",
    "slug": "zinc-monomethionine",
    "casNumber": "",
    "categoryTag": "Zinc (Chelated Minerals)",
    "parentCategorySlug": "minerals",
    "subCategorySlug": "zinc",
    "imagePath": "/aditya chemicals images/Zinc/product card/Zinc Bis Glycinate.png",
    "description": "Aditya Chemicals produces premium-grade Zinc Monomethionine, a highly bioavailable chelate that combines elemental zinc with the amino acid L-methionine. It is widely used in nutraceuticals, sports nutrition, and immune-support formulations.",
    "details": {
      "formula": "C5H10NO2SZn",
      "weight": "213.6 g/mol",
      "shelfLife": "5 years"
    },
    "specifications": {
      "iupacName": "Zinc (2S)-2-amino-4-methylsulfanylbutanoate",
      "physicalForm": "White crystalline, free-flowing powder.",
      "zincContent": "NLT 20.0% w/w and NMT 22.1% w/w. (On dried basis)",
      "methionineContent": "NLT 40.0% w/w and NMT 45.0% w/w. (On dried basis)",
      "storage": "Store in a well-closed container."
    },
    "features": [
      "Targeted L-Methionine Transport Pathway: Because zinc is chemically bound to methionine, the body absorbs the complex via specialized amino acid transporters instead of crowded mineral pathways, delivering optimal physiological absorption and cellular retention.",
      "Exceptional Gastrointestinal Comfort: The molecular stability of the chelate prevents the premature dissociation of free zinc ions in stomach acid, eliminating the nausea, cramping, and metallic reflux typical of standard mineral options.",
      "Excellent Free-Flow Crystalline Purity: The API maintains a highly uniform, free-flowing crystalline structure that resists room-temperature moisture clumping, ensuring seamless handling and processing during manufacturing.",
      "Acne & Inflammation Management: This compound is ideal for prescription-grade dermatological tablets targeting severe acne, tissue repair, and chronic wound healing by efficiently supporting natural collagen synthesis.",
      "Orally Disintegrating Tablets (ODTs) & Melts: The mild, non-metallic profile of this chelate requires minimal flavor-masking, making it perfect for smooth, consumer-friendly chewable tablets, melts, and therapeutic throat lozenges."
    ],
    "applications": []
  },
  {
    "name": "Zinc L-Carnosine",
    "slug": "zinc-l-carnosine",
    "casNumber": "107667-60-7",
    "categoryTag": "Zinc (Chelated Minerals)",
    "parentCategorySlug": "minerals",
    "subCategorySlug": "zinc",
    "imagePath": "/aditya chemicals images/Zinc/product card/Zinc Bis Glycinate.png"
  },
  {
    "name": "Zinc Orotate",
    "slug": "zinc-orotate",
    "casNumber": "60388-02-5",
    "categoryTag": "Zinc (Chelated Minerals)",
    "parentCategorySlug": "minerals",
    "subCategorySlug": "zinc",
    "imagePath": "/aditya chemicals images/Zinc/product card/Zinc Bis Glycinate.png"
  },
  {
    "name": "Potassium Bis Glycinate",
    "slug": "potassium-bis-glycinate",
    "casNumber": "15708-41-6",
    "categoryTag": "Potassium (Chelated Minerals)",
    "parentCategorySlug": "minerals",
    "subCategorySlug": "potassium",
    "imagePath": "/aditya chemicals images/Potassium/product card/Potassium Magnesium Citrate.png"
  },
  {
    "name": "Potassium Magnesium Citrate",
    "slug": "potassium-magnesium-citrate",
    "casNumber": "137590-34-2",
    "categoryTag": "Potassium (Chelated Minerals)",
    "parentCategorySlug": "minerals",
    "subCategorySlug": "potassium",
    "imagePath": "/aditya chemicals images/Potassium/product card/Potassium Magnesium Citrate.png"
  },
  {
    "name": "Potassium Citrate",
    "slug": "potassium-citrate",
    "casNumber": "6100-05-6",
    "categoryTag": "Potassium (Chelated Minerals)",
    "parentCategorySlug": "minerals",
    "subCategorySlug": "potassium",
    "imagePath": "/aditya chemicals images/Potassium/product card/Potassium Magnesium Citrate.png"
  },
  {
    "name": "Potassium Gluconate",
    "slug": "potassium-gluconate",
    "casNumber": "299-27-4",
    "categoryTag": "Potassium (Chelated Minerals)",
    "parentCategorySlug": "minerals",
    "subCategorySlug": "potassium",
    "imagePath": "/aditya chemicals images/Potassium/product card/Potassium Gluconate.png"
  },
  {
    "name": "Potassium Magnesium Aspartate",
    "slug": "potassium-magnesium-aspartate-2",
    "casNumber": "67528-13-6",
    "categoryTag": "Potassium (Chelated Minerals)",
    "parentCategorySlug": "minerals",
    "subCategorySlug": "potassium",
    "imagePath": "/aditya chemicals images/Potassium/product card/Potassium Magnesium Aspartate.png"
  },
  {
    "name": "Copper Bis Glycinate",
    "slug": "copper-bis-glycinate",
    "casNumber": "13479-54-4",
    "categoryTag": "Copper (Chelated Minerals)",
    "parentCategorySlug": "minerals",
    "subCategorySlug": "copper",
    "imagePath": "/aditya chemicals images/Copper/product card/Copper Bis Glycinate.png"
  },
  {
    "name": "Copper Gluconate",
    "slug": "copper-gluconate",
    "casNumber": "527-09-3",
    "categoryTag": "Copper (Chelated Minerals)",
    "parentCategorySlug": "minerals",
    "subCategorySlug": "copper",
    "imagePath": "/aditya chemicals images/Copper/product card/Copper Gluconate.png"
  },
  {
    "name": "Manganese Bis Glycinate",
    "slug": "manganese-bis-glycinate",
    "casNumber": "14281-77-7",
    "categoryTag": "Manganese (Chelated Minerals)",
    "parentCategorySlug": "minerals",
    "subCategorySlug": "manganese",
    "imagePath": "/aditya chemicals images/Manganese/product card/Manganese Bis Glycinate.png"
  },
  {
    "name": "Manganese Gluconate",
    "slug": "manganese-gluconate",
    "casNumber": "6485-39-8",
    "categoryTag": "Manganese (Chelated Minerals)",
    "parentCategorySlug": "minerals",
    "subCategorySlug": "manganese",
    "imagePath": "/aditya chemicals images/Manganese/product card/Manganese Gluconate.png"
  }
];





export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return productCategories.find(c => c.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter(p => p.parentCategorySlug === categorySlug || p.subCategorySlug === categorySlug);
}