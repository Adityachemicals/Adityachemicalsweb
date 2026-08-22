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
    [key: string]: string | undefined;
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
    "description": "Aditya Chemicals offers a high-quality DL-Methionine, which is a vital amino acid that plays a crucial role in various biological processes. As a sulfur-containing amino acid, it is essential for protein synthesis and serves as a precursor for other important biomolecules. This compound is widely utilized in the food and feed industries as a dietary supplement to enhance growth and improve overall health in livestock and poultry. Its antioxidant properties also make it beneficial in reducing oxidative stress",
    "details": {
      "formula": "C₅H₁₁NO₂S",
      "shelfLife": "5 years"
    },
    "specifications": {
      "physicalForm": "Almost white crystalline powder or small flakes",
      "assay": "99.0% to 101.0% on dried basis",
      "storage": "Store in a well-closed container and protect from light",
      "iupacName": "2-Amino-4-(methylsulfanyl)butanoic acid DL-"
},
    "features": [
      "Liver Detoxification & Hepatic Health: Supports liver function by aiding detoxification, protecting against fatty liver disease, and assisting in the treatment of liver cirrhosis and hepatitis.",
      "Antioxidant & Free Radical Scavenger: Acts as a direct precursor for glutathione, a powerful antioxidant that protects cells from oxidative stress, reduces inflammation, and supports immune function.",
      "Anti-Aging: Boosts collagen synthesis and skin repair in anti-aging topicals while acting as a natural detoxifying agent to shield skin from environmental pollutants.",
      "UV Protection & Sunscreens: Helps mitigate UV-induced skin damage by neutralizing free radicals generated by sun exposure.",
      "Hair & Scalp Care: Strengthens hair structure by directly supporting keratin production, actively preventing hair loss, brittleness, and breakage",
      "Strong Metabolic Lipotropic Activity: Regulates lipid metabolism by facilitating choline and lecithin synthesis, helping to mobilize and break down fats within hepatic tissues.",
      "Predictable Crystalline Particle Distribution: Engineered with uniform crystal sizes to resist packing and density shifts, ensuring excellent flowability and absolute weight uniformity in production hoppers."
]
  },
  {
    "name": "L-Carnitine Fumarate",
    "slug": "l-carnitine-fumarate-ih",
    "casNumber": "90471-79-7",
    "categoryTag": "Amino Acids and Derivatives",
    "parentCategorySlug": "amino-acids-derivatives",
    "imagePath": "/aditya chemicals images/Amino Acids and Derivatives/product cards/L Carnitine Fumarate.png",
    "description": "Aditya Chemical offers a high-quality and stable L-Carnitine fumarate, which is specifically a salt of L- carnitine and fumaric acid, that can be used as a dietary supplement. It is primarily used for its potential cardiovascular support, endurance enhancement, and involvement in energy production. L-carnitine plays a key role in transporting fatty acids into the mitochondria, where they can be burned for energy",
    "details": {
      "formula": "C₁₁H₁₉NO₇",
      "shelfLife": "3 years"
    },
    "specifications": {
      "physicalForm": "White to off-white crystalline, highly hygroscopic powder",
      "assay": "Not less than 98.0% on dried basis",
      "lCarnitineContent": "58.5 ± 2.0%",
      "fumaricAcidContent": "41.5 ± 2.0%",
      "storage": "Store in a tightly closed container in a cool, dry place. Handle and dispense only in a humidity-controlled environment.",
      "iupacName": "L-Carnitine Fumarate L-CARNITINE"
},
    "features": [
      "Nutritional additives: Supports fat metabolism and energy production, making it a valuable component in products designed for weight management and athletic performance.",
      "Treatment for Fatigue and Metabolic Disorders: Addresses chronic fatigue, hypothyroidism, and muscle disorders by restoring impaired fat metabolism and enhancing mitochondrial cellular function.",
      "Anti-Aging & Skin Repair: Boosts collagen production and improves skin elasticity when formulated into advanced anti-aging topical creams and restorative serums.",
      "Hair & Scalp Care: Stimulates hair growth, improves follicle health, and reduces localized scalp inflammation and dandruff in hair care treatments.",
      "Dual-Action Synergistic Adenosine Triphosphate (ATP) Production: Shuttles long-chain fatty acids into mitochondria for $\\beta$-oxidation while providing fumaric acid directly to the Krebs cycle for enhanced respiration.",
      "Optimized Powder Flow Mechanics: Precipitates into a uniform, non-cohesive crystal shape that resists environmental moisture to ensure smooth, high-speed industrial processing."
]
  },
  {
    "name": "Glycine",
    "slug": "glycine",
    "casNumber": "56-40-6",
    "categoryTag": "Amino Acids and Derivatives",
    "parentCategorySlug": "amino-acids-derivatives",
    "imagePath": "/aditya chemicals images/Amino Acids and Derivatives/product cards/Glycine.png",
    "description": "Aditya chemical offer high quality Glycine it is one of the most widely used ingredients across food, pharmaceutical, and personal care industries Glycine is a simple yet versatile amino acid that plays a crucial role in various biological processes. As the smallest amino acid, it is a key building block for proteins and is essential for the synthesis of important biomolecules, including collagen and neurotransmitters Its mild sweet taste, and compatibility across formulations make it a practical and versatile ingredient for manufacturers across multiple sectors.",
    "details": {
      "formula": "C₂H₅NO₂",
      "shelfLife": "5 years"
    },
    "specifications": {
      "physicalForm": "White, odourless crystalline powder",
      "assay": "98.5% to 101.5%; BP specification 98.5% to 101.0%",
      "storage": "Preserve in a well-closed container at room temperature",
      "iupacName": "2-Aminoacetic acid"
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
]
  },
  {
    "name": "L-Carnitine L-Tartrate",
    "slug": "l-carnitine-l-tartrate-ih",
    "casNumber": "36687-82-8",
    "categoryTag": "Amino Acids and Derivatives",
    "parentCategorySlug": "amino-acids-derivatives",
    "imagePath": "/aditya chemicals images/Amino Acids and Derivatives/product cards/L Carnitine L Tartrate.png",
    "description": "Aditya chemical’s L-Carnitine L-Tartrate (LCLT) is a highly bioavailable form of L-carnitine, commonly used as a dietary supplement to support energy production, athletic performance, and recovery. It helps transport fatty acids into the mitochondria for energy metabolism, making it popular among athletes and fitness enthusiasts for reducing muscle soreness and enhancing endurance. Additionally, it supports overall metabolic health, fat utilization, & cellular energy balance, contributing to its use in weight management and wellness supplements.",
    "details": {
      "formula": "C H N O18 36 2 12",
      "shelfLife": "3 years"
    },
    "specifications": {
      "physicalForm": "White to off-white crystalline, highly hygroscopic powder",
      "assay": "NLT 98.0%",
      "lCarnitineonanhydrousbasis": "67.2% to 69.2 %",
      "lTartariconanhydrousbasis": "30.8% to 32.8 %",
      "storage": "Highly hygroscopic powder. Store in a cool, dry place",
      "iupacName": "Bis[[(R)-3-carboxy-2-hydroxypropyl]trimethylammonium]L-tartrate L-CARNITINE L-TARTRATE"
},
    "features": [
      "Enhances nutrient absorption & bioavailability: Highly water-soluble due to the tartrate bond, preventing premature breakdown by gut bacteria. This structural stability ensures maximum absorption into the bloodstream.",
      "Muscle-Tissue Specificity: Uniquely drawn to skeletal muscle rather than the brain, making it the industry standard for athletic performance and recovery.",
      "High Bioavailability: Resists premature breakdown by gut bacteria, ensuring a larger percentage of the active dose safely reaches your muscles.",
      "Chronic Fatigue Syndrome: Supports cellular energy metabolism to directly reduce persistent fatigue and improve overall physical stamina.",
      "Post-Surgical Recovery: Boosts cellular energy availability to promote faster healing and physical recovery following major surgeries.",
      "Cognitive Function & Mental Health: Offers potential applications in improving mental alertness, overall brain health, and supporting neurodegenerative care.",
      "Supports hormonal balance: Increases androgen receptor density in muscle cells, making them more sensitive to testosterone. This helps your body utilize natural hormones more effectively for repair."
]
  },
  {
    "name": "L-Arginine L-Aspartate",
    "slug": "arginine-aspartate-2",
    "casNumber": "7675-83-4",
    "categoryTag": "Amino Acids and Derivatives",
    "parentCategorySlug": "amino-acids-derivatives",
    "imagePath": "/aditya chemicals images/Amino Acids and Derivatives/product cards/Arginine Aspartate.png",
    "description": "Aditya chemicals offers a high purity L-Arginine L-aspartate it is a salt composed of L-Arginine combined with Aspartic Acid, it is intended for the dietary management of metabolic disorders, including creatine kinase deficiency, this product also has clinical properties that can be used to treat skin conditions such as dryness and ichthyosis. Aditya chemical’s Arginine aspartate is a globally trusted ingredient, manufactured with strict quality standards to meet the requirements of advanced nutraceutical, dietary ingredients, food and pharmaceutical applications.",
    "details": {
      "formula": "C₁₀H₂₁N₅O₆",
      "shelfLife": "5 years"
    },
    "specifications": {
      "physicalForm": "White or almost white granules or powder",
      "assay": "99.0% to 101.0% on dried basis",
      "storage": "Preserve in a well-closed container",
      "iupacName": "(2S)-2-Amino-5-guanidinopentanoic acid (2S)-2-atninobutanedioate"
},
    "features": [
      "Cardiovascular Support: Regulates blood pressure and improves vascular endothelial health by driving nitric oxide production for enhanced vasodilation.",
      "Dual-Cycle Metabolic Synergy (Urea & Krebs Cycles): Drives the urea cycle to clear toxic ammonia while simultaneously feeding the Krebs cycle to regenerate cellular energy.",
      "Enhanced Aqueous Dissolution Velocity: Exhibits an advanced water dissolution rate compared to free bases, enabling rapid, sediment-free liquid formulations.",
      "Superior Crystalline Stability & Reduced Hygroscopicity: Organizes into a robust, moisture- resistant crystal lattice that eliminates powder caking and structural degradation.",
      "High-Density Granular Compressibility: Compacts cleanly into hard, durable tablet cores at lower pressures, preventing common defects like capping, lamination, and edge fracturing"
]
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
    "description": "Aditya Chemical is a manufacturer of L-Lysine hydrochloride is a vital amino acid compound that plays a crucial role in various biological processes. As a key building block of proteins, it is essential for growth, tissue repair, and the production of hormones and enzymes. This compound is particularly beneficial in the pharmaceutical and nutritional industries, where it is commonly used as a dietary supplement to support muscle recovery and enhance overall health. L-Lysine hydrochloride is also recognized for its potential in improving calcium absorption, which is vital for bone health, making it an excellent choice for formulations aimed at promoting skeletal strength.",
    "details": {
      "formula": "C₆H₁₄N₂O₂·HCl",
      "shelfLife": "5 years"
    },
    "specifications": {
      "physicalForm": "White or almost white crystalline powder, or colourless crystals",
      "assay": "98.5% to 101.5% on a dried basis",
      "chlorideContent": "19.0% to 19.6%",
      "storage": "Preserve in a well-closed container and protect from light",
      "iupacName": "(2S)-2,6-Diaminohexanoic acid hydrochloride L-LYSINE"
},
    "features": [
      "Excellent Stability: The hydrochloride salt form offers improved stability.",
      "Nutritional Supplements: Often used to support muscle recovery, boost immune function, and promote calcium absorption",
      "High-Density Compactability for Compression: Compresses into highly dense tablet cores without fracturing or capping, minimizing the need for large filler excipients.",
      "Advanced Wound Healing & Surgical Recovery Matrices: Drives the cross-linking process of collagen to accelerate deep wound healing and tissue repair post-surgery.",
      "Protein & Collagen Synthesis: It acts as a foundational building block for tissue growth and repair, playing a critical role in the production of collagen for healthy skin, tendons, and bones.",
      "Controlled Bioavailability: Upon ingestion, the compound rapidly dissociates in gastric juices. This ensures immediate absorption through the small intestine for direct distribution to bodily tissues"
]
  },
  {
    "name": "Calcium L-5 Methyltetrahydrofolate",
    "slug": "l-methyl-folate-calcium",
    "casNumber": "151533-22-1",
    "categoryTag": "Vitamins & Derivatives",
    "parentCategorySlug": "vitamins-derivatives",
    "imagePath": "/aditya chemicals images/Vitamins & derivatives/product card/Calcium L-5 Methyltetrahydrofolate.png",
    "description": "Aditya Chemicals supplies premium Calcium L-5-Methyltetrahydrofolate for pharmaceutical and nutraceutical applications, including prenatal care and functional foods. This highly bioavailable API offers clinical utility in preventing neural tube defects and managing high-risk pregnancies. The compound effectively reduces cardiovascular risks by lowering homocysteine levels, treats megaloblastic anemia, and supports peripheral nerve health in diabetics. Additionally, it boosts neurotransmitter synthesis, serving as an adjuvant therapy for depression, schizophrenia, and cognitive decline.",
    "details": {
      "formula": "C₂₀H₂₃CaN₇O₆ – Anhydrous",
      "shelfLife": "3 years"
    },
    "specifications": {
      "physicalForm": "Off-white to pale-yellow powder",
      "assay": "95.0% to 102.0% on an anhydrous and solvent-free basis",
      "calciumContent": "7.0% to 8.5% on an anhydrous and solvent-free basis",
      "storage": "Store in a tightly closed container in a cool and dry place",
      "iupacName": "calcium 2- [[4- [(2-amino-5-methyl-4-oxo-3, 6, 7, 8-tetrahydropteridin-6-yl) methylamino, benzoyl, amino]pentanedioate"
},
    "features": [
      "100% Biologically Active: Unlike synthetic folic acid, this is the body's natural, crystallized form of Vitamin B9. It works instantly at the cellular level with no conversion or waiting time.",
      "Deep Neurotransmitter Support (Crosses the Blood-Brain Barrier): It effortlessly enters the central nervous system to directly fuel the production of key mood-boosting chemicals: Serotonin, Dopamine, and Norepinephrine.",
      "Premium Prenatal Protection: The gold standard for embryonic spine and brain development. It actively prevents Neural Tube Defects (NTDs) and offers unmatched protection for high-risk pregnancies.",
      "Maximum Bioavailability & Cellular Absorption: By bypassing the liver’s complex 4-step breakdown process, it delivers drastically higher absorption and faster system uptake than standard B9 supplements.",
      "Superior Crystalline Stability & Shelf-Life: The advanced calcium salt bond shields the folate molecule from environmental breakdown, ensuring excellent physical stability, minimal degradation, and a reliable shelf-life.",
      "Smart Nutritional Fortification: An ideal, high-end upgrade for functional foods, premium infant formulas, and multivitamins that safely avoids masking dangerous Vitamin B12 deficiencies.",
      "Versatile Pharmaceutical Adaptability: It is highly compatible with veggie capsules, film-coated tablets, and dry powders, making it easy to formulate alongside stability-boosting antioxidants like Vitamin C."
]
  },
  {
    "name": "Riboflavin Sodium 5 - Phosphate",
    "slug": "riboflavin-sodium-5phosphate",
    "casNumber": "130-40-5",
    "categoryTag": "Vitamins & Derivatives",
    "parentCategorySlug": "vitamins-derivatives",
    "imagePath": "/aditya chemicals images/Vitamins & derivatives/product card/Riboflavin Sodium 5' Phosphate.png",
    "description": "our premium Riboflavin 5’-Phosphate Sodium is a highly bioavailable, water-soluble Vitamin B2 derivative engineered for rapid cellular absorption. It instantly converts into crucial FMN and FAD coenzymes to power cellular respiration, optimize macronutrient metabolism, and boost red blood cell and antibody production. This essential, growth-promoting nutrient guaranteeing radiant skin, strong nails, and vibrant hair growth. Perfectly optimized for the pharmaceutical, nutraceutical, food, and cosmetic industries,",
    "details": {
      "formula": "C₁₇H₂₀N₄NaO₉P – Anhydrous",
      "shelfLife": "3 years"
    },
    "specifications": {
      "physicalForm": "Yellow to orange-yellow, fine crystalline hygroscopic powder with a slight odour",
      "assay": "73.0% to 79.0% on dried basis",
      "inorganicFreePhosphate": "Not more than 1.0% to 1.5%",
      "hazardIdentification": "Non-hazardous",
      "storage": "Store in an airtight, tightly closed, light-resistant container and protect from light and moistur",
      "iupacName": "Sodium [(2R,3S,4S)-5-(7,8-dimethyl-2,4-dioxobenzo[g]pteridin-10-yl)- 2,3,4-trihydroxypentyl] hydrogen phosphate"
},
    "features": [
      "Pre-Activated Bioavailability: Bypasses complex gut and liver conversions to deliver instant, maximum cellular absorption compared to standard Vitamin B2 (Riboflavin USP).",
      "Dual Coenzyme Precursor: Acts as the direct precursor for both FMN and FAD, the precise molecules the body requires to unlock and trigger biological energy output.",
      "Multifunctional Industrial Grade: Versatile asset optimized as a pharmaceutical API, premium nutraceutical active, clean-label natural food colorant (E101a), and cosmetic cell rejuvenator.",
      "High-Purity Stability: Manufactured under rigorous Aditya Chemicals quality standards, offering excellent heat stability and a long shelf-life that maximizes final product potency.",
      "Antioxidant Support: Directly drives the production of reduced glutathione—one of the body's primary antioxidant enzymes—to aggressively combat oxidative stress.",
      "Eye & Vision Health: Clinically protects vision and serves as a vital therapeutic agent in specialized ophthalmic procedures, including corneal cross-linking."
]
  },
  {
    "name": "Riboflavin",
    "slug": "riboflavin",
    "casNumber": "83-88-5",
    "categoryTag": "Vitamins & Derivatives",
    "parentCategorySlug": "vitamins-derivatives",
    "imagePath": "/aditya chemicals images/Vitamins & derivatives/product card/Riboflavin.png",
    "description": "Manufactured to elite quality standards by Aditya Chemicals, our premium Riboflavin (Vitamin B2) is an exceptionally pure, vibrant yellow-orange micronutrient foundational to human vitality. As a principal growth- promoting factor, it serves as the irreplaceable backbone for energy production, macronutrient metabolism, and tissue repair. Engineered for superior stability and long commercial shelf life, our Riboflavin consistently delivers excellent performance in solid dosage forms, premixes, and fortified food matrices. It serves as a dietary supplement or nutritional ingredient, helping to transform proteins, fats, and carbohydrates into energy",
    "details": {
      "formula": "C₁₇H₂₀N₄O₆",
      "shelfLife": "5 years"
    },
    "specifications": {
      "physicalForm": "Yellow to orange-yellow crystalline powder with a slight odour",
      "assay": "97.0% to 103.0%, depending on the applicable standard",
      "storage": "Preserve in an airtight, tightly closed, light-resistant container and protect from light and moisture",
      "iupacName": "Sodium [(2R,3S,4S)-5-(7,8-dimethyl-2,4-dioxobenzo[g]pteridin-10-yl)- 2,3,4-trihydroxypentyl] hydrogen phosphate"
},
    "features": [
      "Essential Energy Catalyst: Forms the structural core of FMN and FAD coenzymes, unlocking vital cellular energy by rapidly metabolising fats, carbs, and proteins.",
      "Vital Growth Regulation: Acts as the body's principal growth-promoting factor, mandatory for healthy cell respiration, antibody production, and reproduction.",
      "Rapid Mucosal Membrane Repair: Accelerates the natural healing of painful mouth ulcers (canker sores) by stimulating rapid cellular renewal in the sensitive lining of the oral cavity.",
      "Optimised Particle Uniformity: Engineered by Aditya Chemicals with precise particle size distribution to ensure excellent powder flowability, preventing batch segregation during high-speed blending and tabletting.",
      "Natural Beauty Asset: Powers the continuous cellular turnover and repair required to maintain radiant skin, strong nails, and healthy hair growth.",
      "Advanced Neuro & Vision Support: Reduces migraine frequency by boosting brain cell mitochondrial energy, protects the eyes against cataracts, and relieves severe light sensitivity."
]
  },
  {
    "name": "Disodium Edetate",
    "slug": "disodium-edetate",
    "casNumber": "6381-92-6",
    "categoryTag": "Excipients",
    "parentCategorySlug": "excipients",
    "imagePath": "/aditya chemicals images/Excipients/product card/Disodium Edetate.png",
    "description": "Aditya Chemicals supplies ultra-pure Disodium Edetate, a versatile, high-stability excipient trusted across the pharma, biopharma, and cosmetic industries. This premium chelating agent, it acts as a powerful stabiliser that prevents oxidative degradation and protects sensitive active ingredients. It ensures maximum safety. Aditya Chemicals guarantees the highest standards of formulation clarity, purity, and extended product shelf-life.",
    "details": {
      "formula": "C₁₀H₁₄N₂Na₂O₈·2H₂O",
      "shelfLife": "5 years"
    },
    "specifications": {
      "physicalForm": "White or almost white, odourless crystalline powder",
      "assay": "98.5% to 101.0%; USP specification 99.0% to 101.0%",
      "storage": "Preserve in a well-closed container at room temperature and protect from light where applicable",
      "iupacName": "Disodium 2-[2-(bis(carboxymethyl)amino) ethyl-(carboxymethyl)amino] acetate} dihydrate"
},
    "features": [
      "High-Affinity Hexadentate Chelator: Possesses six binding sites (four carboxyl groups and two nitrogen atoms) to form incredibly tight, claw-like bonds around free metal ions.",
      "Synergistic Compounding Agent: Enhances the performance of secondary antioxidants and antimicrobial preservatives without interacting or degrading them.",
      "Anti-Oxidative Stabiliser: Blocks trace metals (like iron or copper) from triggering oxidation loops, preventing active pharmaceutical ingredients (APIs) and oils from breaking down.",
      "Shelf-Life Extender: Acts as a vital protective shield for complex cosmetic and biopharma matrices, significantly freezing physical and chemical degradation over long storage periods."
]
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
    "casNumber": "74231-02-0",
    "categoryTag": "Excipients",
    "parentCategorySlug": "excipients",
    "imagePath": "/aditya chemicals images/Excipients/product card/Disodium Edetate.png",
    "description": "Aditya Chemicals offers ultra-pure Boron Citrate, a highly bioavailable trace mineral excipient engineered for advanced nutraceutical and dietary supplement formulations. It acts as a highly stable, non-reactive excipient carrier that integrates flawlessly into complex vitamin matrices without degrading neighboring active components. On the production floor, this superior citrate chelate resists moisture and prevents clumping, ensuring excellent powder flow and perfect weight uniformity during capsule and tablet pressing.",
    "details": {
      "formula": "C₆H₅BO₇",
      "shelfLife": "5 years"
    },
    "specifications": {
      "physicalForm": "White or almost white crystalline powder",
      "boronContent": "5.0% to 7.0% on a dried basis",
      "storage": "Preserve in a well-closed container",
      "iupacName": "Boron [2-hydroxy-1, 2, 3-propanetricarboxylato (3-)]"
},
    "features": [
      "Bone Health: Used in supplements to strengthen bones, aiding in the treatment and prevention of osteoporosis.",
      "Hormonal Balance: Assists in regulating the levels of sex hormones, including estrogen and testosterone, in the body.",
      "Anti-Inflammatory Properties: Utilized for its potential anti-inflammatory effects, beneficial in conditions like arthritis.",
      "Mineral Metabolism: Helps in the metabolism of minerals that are crucial for bone health, such as calcium, magnesium, and phosphorus.",
      "Nutrient Absorption: Enhances the absorption of other nutrients, which can be beneficial in multivitamin/mineral supplements.",
      "Enhanced Nutrient Bio-Availability: Works synergistically within multivitamin and mineral matrices to actively boost the absorption rates of neighboring nutrients."
]
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
    "casNumber": "72231-13-1",
    "categoryTag": "Magnesium (Chelated Minerals)",
    "parentCategorySlug": "minerals",
    "subCategorySlug": "magnesium",
    "imagePath": "/aditya chemicals images/Magnesium/product card/Magnesium Bis Glycinate.png",
    "description": "Aditya chemicals offers magnesium aspartate a mineral compound formed from magnesium and aspartic acid known for its superior absorption and bioavailability, it is commonly used in advanced nutraceutical and dietary and food formulations. Aditya chemical’s magnesium aspartate is trusted by formulators for its consistent high quality and reliable performance across a wide range of nutritional applications where effective magnesium delivery is essential.",
    "details": {
      "formula": "C₈H₁₂MgN₂O₈·2H₂O",
      "shelfLife": "5 Years"
    },
    "specifications": {
      "physicalForm": "White or almost white crystalline powder or colorless crystals",
      "assay": "98.0% to 102.0%",
      "storage": "Preserve in well closed container",
      "iupacName": "Magnesium; (3S)-3-amino-4-hydroxy 4-oxobutanoate"
},
    "features": [
      "Nutritional Supplement: Prevents deficiencies causing muscle cramps, fatigue, and nerve issues.",
      "Skin Care Products: Hydrates, soothes, and supports natural skin repair in anti-aging creams.",
      "Chelating Agent: Stabilizes metal ions to prevent unwanted reactions in water and metal treatment.",
      "Anti-Fatigue Agent: Relaxes sore muscles and relieves stress in bath salts and recovery lotions.",
      "Synergistic Effects: Combines magnesium and aspartic acid to optimize cellular and metabolic functions.",
      "Energy Production Support: Powers ATP (the body's energy molecule) to combat fatigue.",
      "Muscle Function Benefits: Regulates muscle contraction and relaxation to stop spasms and cramps.",
      "Nervous System Support: Aids neurotransmission to regulate nerve impulses, reducing stress & anxiety."
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
    "description": "Our fully reacted Magnesium Bisglycinate chelated —is a premium, high-quality form of magnesium designed for maximum results. our magnesium is naturally bonded with amino acids. This makes it incredibly easy for your body to absorb and 100% gentle on your stomach. It has a Superior Bioavailability. magnesium glycinate is a premium organo-mineral compound widely considered the gold standard for magnesium supplementation. It consists of one elemental magnesium ion chemically bound (chelated) to two molecules of glycine, the simplest amino acid.",
    "details": {
      "formula": "C₄H₈MgN₂O₄",
      "shelfLife": "5 Years"
    },
    "specifications": {
      "physicalForm": "White to off-white powde",
      "magnesiumContentonDriedBasis": "13.8%–15.0% w/w",
      "glycineonDriedBasis": "NLT 80%",
      "storage": "Preserve in a well-closed container",
      "iupacName": "Magnesium bis(aminoacetate)"
},
    "features": [
      "Superior Bioavailability via Peptide Pathways: Magnesium bisglycinate utilizes intestinal peptide pathways (PEPT1) for absorption, avoiding pH degradation and mineral competition to deliver significantly higher cellular uptake than inorganic magnesium.",
      "Exceptional Gastrointestinal Tolerance: Unlike inorganic salts, stable magnesium bisglycinate bypasses standard ion channels and avoids mineral competition by utilizing intestinal peptide pathways (PEPT1) for absorption. This unique metabolic route ensures significantly higher cellular uptake without relying on stomach acid breakdown.",
      "Synergistic Calming & Neurological Profile: he glycine ligand crosses the blood-brain barrier to promote GABA release and inhibit NMDA receptors. This dual action with magnesium provides targeted support for sleep, stress, anxiety, and muscle relaxation",
      "High Chemical Stability: As a stable, fully reacted heterocyclic ring, this true chelate prevents magnesium from binding with dietary phytates, oxalates, or tannins, protecting the mineral from being blocked or wasted in the digestive tract.",
      "Excellent Formulation Stability: True chelates are chemically neutral and highly stable. Because they do not easily react with other ingredients (like vitamins C or B), they prevent degradation, off-flavors, and color changes—significantly extending your product's shelf-life.",
      "Reliable Compressibility: Unlike abrasive, unchelated mineral mixes, a fully chelated bis glycinate features a unique crystalline structure that binds beautifully under pressure. This ensures a smoother manufacturing run with less machine friction and fewer tablet defects like capping or laminating.",
      "The Ultimate GLP-1 Combination Support: Magnesium Bis glycinate Chelate mimics a protein to glide past your slowed stomach, safely relieving GLP-1 constipation without causing nausea or cramping. Once absorbed, it splits to instantly stop the leg cramps caused by rapid weight loss while calming your brain for deep sleep."
]
  },
  {
    "name": "Magnesium Citrate",
    "slug": "magnesium-citrate",
    "casNumber": "59-51-8",
    "categoryTag": "Magnesium (Chelated Minerals)",
    "parentCategorySlug": "minerals",
    "subCategorySlug": "magnesium",
    "imagePath": "/aditya chemicals images/Magnesium/product card/Magnesium Citrate.png",
    "description": "Aditya chemicals offers magnesium citrate a magnesium salt of citric acid widely recognized for its excellent bioavailability. It is used in various nutraceutical & dietary supplement applications, particularly in formulations promoting digestive, muscular, & metabolic health. Aditya chemical’s magnesium citrate is a trusted choice among industry professionals for its high-quality consistency, and formulation versatility.",
    "details": {
      "formula": "C₁₂H₁₀Mg₃O₁₄",
      "shelfLife": "5 Years"
    },
    "specifications": {
      "physicalForm": "White or almost white, fine, slightly hygroscopic Crystalline powder.",
      "assay": "15.0% to 16.5%",
      "storage": "Preserve in non-metallic, airtight container.",
      "iupacName": "Trimagnesium 2-hydroxypropane-1,2,3-tricarboxylate"
},
    "features": [
      "Acid-Reactive Gastric Dissolution: Reacting smoothly with gastric HCl upon ingestion to release highly bioavailable free magnesium ions in the upper GI tract.",
      "Excellent Solid Dosage Stability: Features a highly reliable crystalline structure that resists moisture absorption from the air, preventing clumping and ensuring high stability during dry blending processes.",
      "Low Chemical Reactivity in Dry Mixes: Prevents premature chemical or degradation reactions when blended with water-sensitive vitamins or active botanicals in a dry matrix.",
      "Neutral, Clean Taste Profile: Because it does not dissolve instantly on the tongue, it completely avoids the bitter, astringent metallic taste common to highly soluble salts, making it very easy to flavour.",
      "Superior Powder Flow & Processing: Offers a predictable particle flow that resists caking, guaranteeing perfect mass uniformity and smooth running during high-speed encapsulation and tableting."
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
    "description": "Magnesium creatine is a specialized organo-mineral compound engineered primarily for sports nutrition, strength conditioning, and cellular energy metabolism. Unlike standard physical blends of magnesium and creatine, this ingredient represents a fully reacted molecule where elemental magnesium is chemically bound to the organic ergogenic compound creatine.",
    "details": {
      "formula": "C H MgN O8 16 6 4",
      "shelfLife": "5 Years"
    },
    "specifications": {
      "physicalForm": "White to off-white powder.",
      "assay": "NLT 7.0%",
      "creatine": "NLT 90.0%",
      "storage": "Preserve in a well-closed container.",
      "iupacName": "Magnesium;2-[carbamimidoyl(methyl)amino]acetate"
},
    "features": [
      "Dual-Mechanism ATP Resynthesis: It provides the raw substrate necessary for phosphocreatine storage, allowing",
      "The Creatine Role: rapid donation of a phosphate group to turn ADP back into active ATP during high-intensity, short- duration anaerobic exercise. ATP cannot function or be synthesized independently; it must exist as a",
      "The Magnesium Role: magnesium-ATP complex to be biologically active. By delivering both elements simultaneously, the molecule ensures that newly resynthesized ATP is immediately stabilized and functional.",
      "Mitigation of GI Distress: Smooth Digestion: Unabsorbed free creatine particles in the gut draw water, causing cramping and diarrhea. The high stability and absorption rate of this chelate leave no unreacted particles behind, ensuring excellent gut comfort.",
      "Mitigation of Muscle Cramping & Fasciculations: Beyond just protecting the creatine, the bioavailable magnesium acts directly at the neuromuscular junction. It regulates calcium influx into muscle cells, directly preventing the cramping and involuntary twitching (fasciculations) often reported by heavy creatine users."
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
    "description": "Aditya chemical’s magnesium gluconate is a highly bioavailable mineral supplement praised for its superior absorption and gentle, stomach-friendly profile. Ideal for nutraceuticals, pharmaceuticals, and functional foods, it corrects deficiencies without the digestive discomfort common with other magnesium salts.",
    "details": {
      "formula": "C H MgO 12 22 14",
      "shelfLife": "5 Years"
    },
    "specifications": {
      "physicalForm": "Colorless crystals or white powder/granules; odorless and tasteless",
      "assay": "98.0% – 102.0%",
      "storage": "Preserve in well-closed container",
      "iupacName": "magnesium bis((2R,3S,4R,5R)-2,3,4,5,6-pentahydroxyhexanoate)"
},
    "features": [
      "Dietary Supplement: Boosts magnesium levels to treat or prevent deficiency; available in oral tablets, capsules, powders, and liquids.",
      "Nutritional Fortification: Added to foods and beverages to boost magnesium levels and help people meet their daily dietary requirements.",
      "Pharmaceutical Formulations: Used in oral medications for mild magnesium deficiency and intravenous (IV) solutions for severe cases.",
      "Sports Nutrition: Included in energy bars and drinks to support muscle function, electrolyte balance, and athletic recovery.",
      "Cosmetics & Personal Care: Added to skin and hair products to boost hydration, conditioning, and overall skin health.",
      "Medicinal Uses: Used in alternative medicine to help manage muscle cramps, migraines, high blood pressure, and PMS symptoms."
]
  },
  {
    "name": "Magnesium L-Pidolate",
    "slug": "magnesium-pidolate",
    "casNumber": "62003-27-4",
    "categoryTag": "Magnesium (Chelated Minerals)",
    "parentCategorySlug": "minerals",
    "subCategorySlug": "magnesium",
    "imagePath": "/aditya chemicals images/Magnesium/product card/Magnesium Pidolate.png",
    "description": "Magnesium pidolate, a compound where magnesium is chelated with pidolic acid (also known as pyroglutamic acid), unlike other magnesium salts, its unique chemical structure allows for enhanced bioavailability and physiological activity, making it a preferred choice in various therapeutic applications. One of the standout features of magnesium pidolate is its superior bioavailability compared to other magnesium compounds. Bioavailability refers to the proportion of a nutrient digested, absorbed, and made available for the body. Its high bioavailability means that it can be more efficiently utilized by the body, enhancing its therapeutic effects",
    "details": {
      "formula": "C H N O Mg10 12 2 6",
      "shelfLife": "5 Years"
    },
    "specifications": {
      "physicalForm": "White to off white fine powder.",
      "assay": "8.0 % to 9.5 % (as Mg.) (on dried basis) w/w",
      "storage": "Preserve in well closed container",
      "iupacName": "MAGNESIUM L-PIDOLATE Magnesium bis[(2S)-5-oxopyrrolidine-2-carboxylatel"
},
    "features": [
      "Neurological & Cellular Penetration: Pyroglutamate utilizes highly efficient active transport systems. It possesses a profound affinity for crossing the blood-brain barrier and quickly accessing intracellular environments, which makes it remarkably rapid at restoring systemic magnesium deficits.",
      "Headache & Neuro-Prophylaxis: its fast-acting efficacy in reducing the intensity, duration, and overall frequency of migraines and tension headaches.",
      "Stable Elemental Yield: Delivers a highly reliable, premium 8.0% to 9.5 % elemental magnesium payload, ensuring exact dosing for high-end neurological and cognitive formulations.",
      "Ultimate Bioavailability Kinetics: Formulated to maximize cellular uptake, Magnesium Pidolate utilizes specialized active transport pathways to deliver superior and rapid absorption compared to traditional mineral salts."
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
    "casNumber": "18917-93-6 (dihydrate)",
    "categoryTag": "Magnesium (Chelated Minerals)",
    "parentCategorySlug": "minerals",
    "subCategorySlug": "magnesium",
    "imagePath": "/aditya chemicals images/Magnesium/product card/Magnesium Lactate.png",
    "description": "Magnesium lactate is a gentle, efficiently absorbed magnesium salt widely recognized for its excellent tolerability and metabolic support. It is valued in nutraceutical, dietary, and functional health formulations for its role in muscle function, electrolyte balance, and energy production. Aditya chemical’s magnesium lactate is ensuring flexibility for various dosage forms and compatibility with tablets, capsules, liquids, beverages, and powdered blends. With reliable purity, superior stability, and consistent performance, it remains a preferred choice for premium-quality magnesium formulations.",
    "details": {
      "formula": "C₆H₁₀MgO₆·2H₂O (dihydrate)",
      "shelfLife": "5 Years"
    },
    "specifications": {
      "physicalForm": "White to almost white crystalline or granular powder",
      "assay": "98.0% to 102.0% (on dried basis)",
      "storage": "Preserve in a well-closed container",
      "iupacName": "MAGNESIUM"
},
    "features": [
      "Exceptional GI Delicacy: It stands out as one of the most naturally gentle organic salts on the human digestive tract, making it the preferred choice for sustained-release pharmaceutical tablets or patients requiring high chronic dosing.",
      "Fortification Staple: Extensively utilized in food, infant formula, and beverage fortification due to its smooth flavor profile and neutral impact on product mouthfeel.",
      "Elemental Yield: Provides ~12% elemental magnesium in its dihydrate form.",
      "Gentle on the Stomach: It is highly bioavailable and exceptionally gentle on the digestive tract, minimizing the laxative side effects common with other magnesium forms.",
      "Ideal for Sustained Release: Because of its smooth, steady absorption rate, it is the industry standard for long-lasting, time-released pharmaceutical tablets and chronic high dosing."
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
    "description": "Aditya chemicals offers magnesium malate a compound formed from magnesium and malic acid, offering excellent bioavailability and gastrointestinal tolerance. It is often included in nutraceutical and food formulations targeting energy production, muscle recovery, and metabolic health. Aditya chemical’s magnesium malate is a trusted raw material known for its consistent high quality, optimal particle size and density, and superior compatibility with various delivery formats.",
    "details": {
      "formula": "C H MgO4 4 5",
      "shelfLife": "5 Years"
    },
    "specifications": {
      "physicalForm": "White to off-white fine powder.",
      "assay": "14.3% to 15.8%",
      "storage": "Preserve in a well-closed container.",
      "iupacName": "Magnesium (2+) 2-hydroxybutanedioate"
},
    "features": [
      "The Fibromyalgia & Fatigue Benchmark: Plays a vital role in the mitochondrial malate- aspartate shuttle, clinically favored for easing muscle pain, tenderness, and exhaustion associated with chronic fatigue.",
      "Prolonged Muscle Endurance: Actively helps clear lactic acid buildup from muscle tissues during physical exertion, drastically reducing muscle cramps and post-workout soreness.",
      "Precise Elemental Yield: Delivers a highly predictable, stable payload of ~14.3 % to 15.8 % elemental magnesium in its premium crystalline matrix."
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
    "description": "Aditya chemicals offers high-purity magnesium orotate, a highly bioavailable mineral complex formed from magnesium & orotic acid. Recognized for its superior absorption & role in supporting cellular energy production, cardiovascular function, & healthy metabolism, magnesium orotate is widely used in advanced nutraceutical formulations. Produced under stringent quality standards, aditya chemical’s magnesium orotate ensures exceptional consistency, purity, & performance for global supplement, functional nutrition.",
    "details": {
      "formula": "C H MgN O10 6 4 8",
      "shelfLife": "3 Years"
    },
    "specifications": {
      "physicalForm": "White to almost white crystalline powder.",
      "assay": "98.0% to 101.0%",
      "magnesiumContentww": "NLT 6.0% w/w",
      "storage": "Store in a well-closed container.",
      "iupacName": "Magnesium;2,4-dioxo-(1H)-pyrimidine-6-carboxylate"
},
    "features": [
      "Myocardial Tissue Affinity: Orotic acid acts as an exceptional vehicle, carrying magnesium deeply into compromised myocardial (heart muscle) cells. It supports the synthesis of glycogen and ATP stores within cardiac tissue under stress",
      "Supports heart health: Magnesium orotate is often used to support heart function and muscle health, making it popular in supplements aimed at cardiovascular wellness.",
      "Energy production: Plays a role in the production of ATP, the body’s primary energy source",
      "Bone health supplements: Magnesium plays a critical role in bone health, and Magnesium Orotate is often used in formulations designed to support strong bones and prevent osteoporosis.",
      "Sports nutrition: Due to its ability to aid in muscle recovery and reduce cramps, Magnesium Orotate is popular in sports nutrition supplements aimed at athletes and active individuals."
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
    "description": "Our magnesium succinate a stable, bioavailable form of magnesium chelated with succinic acid. It is widely used in formulations focused on metabolic balance, cellular energy cycles, and oxidative stress management. Aditya chemical’s magnesium succinate is a globally trusted ingredient, manufactured with strict quality standards to meet the requirements of advanced nutraceutical, dietary ingredients, food and pharmaceutical applications.",
    "details": {
      "formula": "C H MgO4 4 4",
      "shelfLife": "5 Years"
    },
    "specifications": {
      "physicalForm": "White to almost white hygroscopic powder.",
      "magnesiumContentww": "NLT 17.00%",
      "storage": "Preserve in a well-closed container.",
      "iupacName": "Magnesium butanedioate"
},
    "features": [
      "Cellular Energy Kinetics: Because succinate bypasses the initial rate-limiting steps of the Krebs cycle, entering directly via complex II (succinate dehydrogenase), this form is exceptionally efficient for revitalizing mitochondrial ATP production.",
      "Targeted Metabolic Support: Ideal for premium formulations focusing on cellular energy, fatigue recovery, metabolic balance, and muscle wellness.",
      "Stress & Oxidative Support: Aids the body during periods of physical exhaustion by supporting stress reduction pathways and assisting in cellular antioxidant management. Suitable for tablets, capsules, and effervescent powders.",
      "Excellent Formulation Versatility: Possesses a highly stable crystalline matrix making it perfectly suited for manufacturing high-quality tablets, standard capsules, and fast- dissolving effervescent powders."
]
  },
  {
    "name": "Magnesium Taurinate/taurate",
    "slug": "magnesium-taurinate",
    "casNumber": "334824-43-0 / 92785-94-9",
    "categoryTag": "Magnesium (Chelated Minerals)",
    "parentCategorySlug": "minerals",
    "subCategorySlug": "magnesium",
    "imagePath": "/aditya chemicals images/Magnesium/product card/Magnesium Taurinate.png",
    "description": "Magnesium taurinate (often referred to as magnesium taurate) is a highly specialized organo- mineral complex designed primarily for cardiovascular and neurological applications. It is formed by chemically bonding elemental magnesium with taurine, a sulfur-containing amino acid (amino sulfonic acid) that plays a critical role in cellular osmotic regulation and ion transport.",
    "details": {
      "formula": "C H MgN O S4 12 2 6 2",
      "shelfLife": "5 Years"
    },
    "specifications": {
      "physicalForm": "White to off-white powder.",
      "magnesiumww": "8.0% to 10.3%",
      "storage": "Preserve in a well-closed container.",
      "iupacName": "Magnesium;2-aminoethanesulfonate"
},
    "features": [
      "Dual-Action Cardiovascular Support Both act as natural calcium channel blockers, relaxing blood vessels to Support",
      "Vascular Tone: healthy blood pressure. Taurine regulates potassium currents and stabilizes heart cell membranes,",
      "Heart Rhythm: complementing magnesium's role in maintaining steady cardiac rhythms.",
      "Amino Acid Bioavailability: Bypasses inefficient mineral channels by using specialized intestinal amino acid pathways, ensuring maximum absorption and higher blood magnesium levels.",
      "Blood-Brain Barrier Penetration: Taurine acts as a carrier molecule, easily guiding magnesium across the blood-brain barrier to calm excitotoxicity and protect neural pathways.",
      "Superior GI Tolerance: No Laxative Effect: Highly stable and cleanly absorbed, leaving no unreacted magnesium in the gut to draw water. This completely avoids cramping, gas, or loose stools."
]
  },
  {
    "name": "Magnesium Fumarate",
    "slug": "magnesium-fumarate",
    "casNumber": "7704-71-4",
    "categoryTag": "Magnesium (Chelated Minerals)",
    "parentCategorySlug": "minerals",
    "subCategorySlug": "magnesium",
    "imagePath": "/aditya chemicals images/Magnesium/product card/Magnesium Bis Glycinate.png",
    "description": "Magnesium fumarate is a highly bioavailable mineral salt used to prevent deficiency, support bone density, and aid in muscle and nerve function. It provides two essential components: elemental magnesium and fumaric acid, the latter being a cellular metabolite that assists the body's energy production cycles.",
    "details": {
      "formula": "C H MgO4 2 4",
      "shelfLife": "5 Years"
    },
    "specifications": {
      "physicalForm": "White to off-white fine powder",
      "assay": "NLT 17.0%",
      "storage": "Preserve in a well- closed container.",
      "iupacName": "Magnesium;(E)-but-2-enedioate"
},
    "features": [
      "Mitochondrial Energy Resiliency: Enters the cellular Krebs cycle directly to maintain ATP energy production and cell homeostasis during metabolic stress or low-oxygen conditions.",
      "Superior Industrial Stability: A highly stable, non-hygroscopic powder that resists clumping, ensuring an exceptional shelf life and smooth running through high-speed tableting machinery.",
      "High Elemental Payload: Delivers a powerful ~ 17.0% elemental magnesium yield, allowing formulators to hit therapeutic targets with smaller capsule sizes or lower tablet weights.",
      "Rapid Gastrointestinal Dissolution: Dissolves rapidly upon contact with stomach acid, ensuring the free magnesium ions are quickly freed up for fast systemic absorption in the upper digestive tract.",
      "Anti-Stress & Fatigue Formulations: Ideal for premium therapeutic products targeting physical exhaustion, fibromyalgia support, and chronic fatigue recovery."
]
  },
  {
    "name": "Creatine Malate",
    "slug": "creatine-malate",
    "casNumber": "686351-75-7",
    "categoryTag": "Creatine (Chelated Minerals)",
    "parentCategorySlug": "minerals",
    "subCategorySlug": "creatine",
    "imagePath": "/aditya chemicals images/Magnesium/product card/Magnesium Creatine Chelate.png",
    "description": "Creatine malate is a compound formed by the combination of creatine, a naturally occurring amino acid derivative, and malic acid, which is involved in the Krebs cycle and energy production. This substance is often used as a dietary supplement, particularly among athletes and bodybuilders, Creatine malate is believed to offer advantages over other forms of creatine, such as improved solubility and absorption, which may lead to better bioavailability.",
    "details": {
      "formula": "C H N O8 15 3 7",
      "shelfLife": "5 years"
    },
    "specifications": {
      "physicalForm": "Fine, white crystalline powder.",
      "assay": "98.0% to 102.0%.",
      "storage": "Preserve in a well- closed container.",
      "iupacName": "2-(Carbamimidoyl(methyl)amino)acetic acid; 2-hydroxybutanedioic acid"
},
    "features": [
      "Dual-Mechanism ATP Support It provides the raw substrate necessary for phosphocreatine storage, allowing rapid donation",
      "The Creatine Role: of a phosphate group to turn ADP back into active ATP during high-intensity, short-duration anaerobic exercise. Malate is involved in the energy-producing Krebs cycle, supporting cellular energy metabolism",
      "The Malate Role: and helping complement creatine’s role in performance nutrition.",
      "Superior Cellular Absorption: The ester-like chemical bond with malic acid significantly improves the compound's stability in the stomach’s acidic environment and enhances intestinal permeability.",
      "Improved Solubility and Mixability: This form is known for good water solubility, making it convenient for powder blends, pre-workouts, and flavored supplement products.",
      "Supports Training Recovery: By helping maintain energy availability during intense exercise, it is often positioned as an ingredient for workout support and recovery-focused products.",
      "Minimal Water Retention: Unlike standard monohydrate, creatine malate is absorbed more efficiently by muscle tissues, drastically reducing extracellular water retention (subcutaneous bloating). This makes it highly favored by athletes trying to maintain strict weight classes."
]
  },
  {
    "name": "Creatine Gluconate",
    "slug": "creatine-gluconate",
    "casNumber": "306274-45-3",
    "categoryTag": "Creatine (Chelated Minerals)",
    "parentCategorySlug": "minerals",
    "subCategorySlug": "creatine",
    "imagePath": "/aditya chemicals images/Magnesium/product card/Magnesium Creatine Chelate.png",
    "description": "Aditya Chemicals offers premium-grade Creatine Gluconate, a sophisticated compound formed by bonding creatine with gluconic acid. This innovative ingredient is engineered for rapid absorption, superior solubility, and enhanced cellular transport. It is a preferred choice for advanced sports nutrition, high-intensity performance supplements, and cognitive health formulations. Aditya Chemical’s Creatine Gluconate stands out as a trusted raw material, characterized by its consistent high quality, excellent powder flow, and superior compatibility with diverse delivery formats, including pre-workout powders and ready-to-drink beverages.",
    "details": {
      "formula": "C H O ·C H N O6 11 7 4 10 3 2",
      "shelfLife": "5 Years"
    },
    "specifications": {
      "physicalForm": "White to off-white crystalline powder.",
      "pH": "5.0 to 7.0 (in 1% aqueous solution)",
      "assay": "≥ 99.0% (on dried basis)",
      "storage": "Preserve in a well-closed, moisture-proof container.",
      "iupacName": "2-[carbamimidoyl(methyl)amino]acetic acid; (2R,3S,4R,5R)-2,3,4,5,6-pentahydroxyhexanoic acid"
},
    "features": [
      "Optimized Cellular Transport: Leverages the unique properties of gluconic acid to facilitate the efficient entry of creatine into muscle cells, potentially utilizing insulin-dependent pathways to maximize saturation without the need for high-glycemic sugar spikes.",
      "Superior Cellular Hydration & Power: Promotes ideal intracellular fluid balance, providing the necessary environment for peak muscle volumization, explosive strength output, and increased work capacity during strenuous training.",
      "High-Solubility Performance: Designed for excellent water solubility, ensuring rapid dispersion and assimilation. This characteristic minimizes the common digestive discomfort often associated with traditional creatine forms, making it ideal for comfortable, high-potency dosing.",
      "Enhanced Metabolic Flux: Gluconate acts as a metabolic intermediate that helps maintain steady energy levels, allowing for more consistent performance output throughout prolonged high-intensity training cycles.",
      "Improved Taste and Palatability: Due to its superior solubility and cleaner taste profile, it requires less artificial masking in flavored RTDs (Ready-to-Drink) and powdered drink mixes compared to grit-prone alternatives.",
      "Minimal Gastrointestinal Stress: By providing a highly soluble, bioavailable complex, it significantly reduces the likelihood of osmotic bloating or cramping, ensuring a more comfortable experience for sensitive users.",
      "High-Potency Formulation Efficiency: Its stable molecular structure allows for the creation of concentrated, multi-ingredient performance blends without compromising the integrity or solubility of the final product."
]
  },
  {
    "name": "Creatine Citrate",
    "slug": "creatine-citrate",
    "casNumber": "177024-62-3",
    "categoryTag": "Creatine (Chelated Minerals)",
    "parentCategorySlug": "minerals",
    "subCategorySlug": "creatine",
    "imagePath": "/aditya chemicals images/Magnesium/product card/Magnesium Creatine Chelate.png",
    "description": "Creatine Citrate is a compound that combines creatine and citric acid. It is commonly used as a dietary supplement in sports nutrition due to its potential benefits in enhancing athletic performance and muscle strength",
    "details": {
      "formula": "C H N O10 17 3 9",
      "shelfLife": "5 years"
    },
    "specifications": {
      "physicalForm": "Fine, white crystalline powder.",
      "creatineContent": "66.50% ~ 67.50%Citrate Content: 32.50% ~ 33.50%pH (5% solution): 2.0 ~ 4.0",
      "iupacName": "2-(1-methylguanidino)acetic acid; 2-hydroxypropane-1,2,3-tricarboxylic acid."
},
    "features": [
      "Gastric Comfort & Bioavailability: Because it completely dissolves prior to ingestion, it minimizes the osmotic draw of water into the intestinal lumen. This highly reduces common side effects like stomach cramping and bloating.",
      "Acidic Stability: The built-in citric acid acts as a natural buffer, slightly lowering the pH of the solution, which can help stabilize the creatine molecule in liquids before consumption.",
      "Nutraceuticals & Sports Supplements: Used in premium pre-workout powders, intra-workout mixes, and effervescent recovery tablets where instant solubility and transparency of liquid are required.",
      "Functional Foods & Beverages: Incorporated into ready-to-drink (RTD) fitness beverages, wellness shots, and fortified food formulations where standard creatine would precipitate out and ruin product texture.",
      "Muscular Dystrophies & Atrophy: To support muscle preservation."
]
  },
  {
    "name": "Creatine Orotate",
    "slug": "creatine-orotate",
    "casNumber": "768386-54-5",
    "categoryTag": "Creatine (Chelated Minerals)",
    "parentCategorySlug": "minerals",
    "subCategorySlug": "creatine",
    "imagePath": "/aditya chemicals images/Magnesium/product card/Magnesium Creatine Chelate.png",
    "description": "Aditya Chemicals offers premium-grade Creatine Orotate is the orotate salt of creatine, a specialized complex formed by bonding creatine with orotic acid (Vitamin B13). This innovative combination is designed to bridge the gap between traditional phosphocreatine replenishment and enhanced nucleic acid metabolism. It is highly valued in elite sports nutrition and longevity-focused nutraceuticals for supporting sustained energy, structural muscle integrity, and metabolic efficiency. Aditya Chemical’s Creatine Orotate is a trusted raw material known for its consistent high purity, excellent stability in complex formulations, and superior physiological integration.",
    "details": {
      "formula": "C H N O9 13 5 6",
      "shelfLife": "5 Years"
    },
    "specifications": {
      "physicalForm": "White crystalline powder",
      "assay": "≥ 99.0% (on dried basis)",
      "storage": "Preserve in a well- closed, light-resistant container.",
      "iupacName": "2-(1-methylguanidino)acetic acid; 2,6-dioxo-1,3-dihydropyrimidine-4-carboxylic acid"
},
    "features": [
      "Synergistic Metabolic Power: Combines creatine’s muscle-power benefits with orotic acid, a key nucleotide precursor that drives cellular regeneration and energy efficiency.",
      "Enhanced Structural Integrity: Supports the preservation of cellular machinery, offering a next- generation choice for performance longevity and structural recovery.",
      "Optimized Absorption Kinetics: Ensures high stability across the gastrointestinal tract for targeted muscle uptake while minimizing osmotic digestive distress.",
      "Superior Cellular Volumization: Maintains healthy intracellular osmotic pressure to enhance muscle fullness and hydration, optimizing the power-to-weight ratio.",
      "Mitochondrial Support: Leverages orotic acid as a key mediator in mitochondrial health, sustaining high-intensity ATP production for longer durations",
      "Formulation Stability: Resists degradation in powder form and throughout manufacturing, guaranteeing a precise, full-potency dose in the final product.",
      "Enhanced Bio-availability Pathway: Utilizes independent transport mechanisms to bypass digestive competition, ensuring a highly consistent plasma concentration curve."
]
  },
  {
    "name": "Ferrous Asparto Glycinate",
    "slug": "ferrous-asparto-glycinate",
    "casNumber": "404-84-4",
    "categoryTag": "Iron (Chelated Minerals)",
    "parentCategorySlug": "minerals",
    "subCategorySlug": "ferrous",
    "imagePath": "/aditya chemicals images/Ferrous/product cards/Ferrous Asparto Glycinate.png",
    "description": "Ferrous bis glycinate is an iron amino acid chelate, used as a source of dietary iron. It is formed by the reaction of ferrous iron with two molecules of the amino acid glycine by a covalent bond in a process called chelation. Aditya Chemical’s Ferrous bis glycinate is a trusted choice among industry professionals for its high-quality consistency and formulation versatility.",
    "details": {
      "formula": "C H FeN O6 10 2 6",
      "shelfLife": "5 years"
    },
    "specifications": {
      "physicalForm": "Off-white to light brown color, free-flowing powder with occasional friable lumps.",
      "ferrouscontentAsisbasis": "NLT 20.0%",
      "storage": "Store in well-closed containers in a dry and cool place",
      "iupacName": "Iron(2+); 2-aminoacetate; (2S)-2-aminobutanedioate"
},
    "features": [
      "No GI Distress: Because it doesn't break down into free reactive iron in the stomach, it completely avoids the nausea, cramping, and constipation common with standard iron.",
      "Iron Deficiency Anemia (IDA): Rapidly restores hemoglobin levels to eliminate fatigue and weakness.",
      "Target Demographics: Ideal for pregnant/postpartum women, heavy menstruation, vegans/vegetarians, and pediatric patients.",
      "Excellent Flowability & Compression: High-quality ferrous bisglycinate is manufactured with uniform particle size distribution. It features excellent free-flowing properties, making it highly efficient for high-speed tablet compression and automatic capsule filling without clogging machinery",
      "Food and Beverage Industry Fortification: Added to food and beverage products to enhance their iron content, especially in products aimed at populations prone to iron deficiency, such as infants, children, and women of childbearing age."
]
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
    "imagePath": "/aditya chemicals images/Ferrous/product cards/Ferrous Bis Glycinate.png",
    "description": "Ferrous bis glycinate is an iron amino acid chelate, used as a source of dietary iron. It is formed by the reaction of ferrous iron with two molecules of the amino acid glycine by a covalent bond in a process called chelation. Aditya Chemical’s Ferrous bis glycinate is a trusted choice among industry professionals for its high-quality consistency and formulation versatility.",
    "details": {
      "formula": "C H FeN O4 8 2 4",
      "shelfLife": "5 years"
    },
    "specifications": {
      "physicalForm": "Pale grey to light brown powder with no metallic taste",
      "ferrousContent": "20.0% to 22.0%. (On anhydrous basis)",
      "storage": "Store in well-closed containers",
      "iupacName": "Bis(2-aminoacetato)iron(2+)"
},
    "features": [
      "No GI Distress: Because it doesn't break down into free reactive iron in the stomach, it completely avoids the nausea, cramping, and constipation common with standard iron.",
      "Iron Deficiency Anemia (IDA): Rapidly restores hemoglobin levels to eliminate fatigue and weakness.",
      "Target Demographics: Ideal for pregnant/postpartum women, heavy menstruation, vegans/vegetarians, and pediatric patients.",
      "Excellent Flowability & Compression: High-quality ferrous bisglycinate is manufactured with uniform particle size distribution. It features excellent free-flowing properties, making it highly efficient for high-speed tablet compression and automatic capsule filling without clogging machinery",
      "Food and Beverage Industry Fortification: Added to food and beverage products to enhance their iron content, especially in products aimed at populations prone to iron deficiency, such as infants, children, and women of childbearing age."
]
  },
  {
    "name": "Ferrous Lactate",
    "slug": "ferrous-lactate",
    "casNumber": "5905-52-25",
    "categoryTag": "Iron (Chelated Minerals)",
    "parentCategorySlug": "minerals",
    "subCategorySlug": "ferrous",
    "imagePath": "/aditya chemicals images/Ferrous/product cards/Ferrous Lactate.png",
    "description": "Ferrous Lactate is a highly bioavailable organic iron (II) salt of lactic acid widely used in pharmaceutical, nutraceutical, and food fortification applications. Known for its excellent tolerability, mild taste, and efficient iron absorption, it is commonly used to support iron supplementation and nutritional fortification in dairy, beverage, & infant nutrition formulations",
    "details": {
      "formula": "C H FeO6 10 6",
      "shelfLife": "5 years"
    },
    "specifications": {
      "physicalForm": "Greenish-white powder or crystals.",
      "assay": "97.0% to 100.5% w/w",
      "storage": "Store in tight containers.",
      "iupacName": "Iron(2+) bis(2-hydroxypropanoate)"
},
    "features": [
      "High Bioavailability: The body natively absorbs iron in the ferrous ($Fe^{2+}$) state much more efficiently than the ferric state. Because ferrous lactate dissolves readily in the digestive tract, it provides high systemic absorption.",
      "Gentler on the Stomach: Traditional iron supplements like ferrous sulfate frequently cause harsh gastrointestinal side effects. Ferrous lactate is more stable and less oxidatively reactive in the gut, making it significantly more tolerable with lower rates of cramping and nausea.",
      "Infant Nutrition & Pediatric Formulas: Because of its exceptional purity, safety profile, and gentle nature on developing digestive systems, ferrous lactate is a premier ingredient used to fortify infant formulas and follow-on milks. It ensures growing infants meet their rapid iron requirements without disrupting their fragile gut microbiomes.",
      "Color Retention & Stabilization: It is widely used as a color stabilizer in specific food processing industries. For example, it is the primary agent used to safely darken and retain the deep black color of canned black olives."
]
  },
  {
    "name": "Ferrous Gluconate",
    "slug": "ferrous-gluconate",
    "casNumber": "12389-15-0",
    "categoryTag": "Iron (Chelated Minerals)",
    "parentCategorySlug": "minerals",
    "subCategorySlug": "ferrous",
    "imagePath": "/aditya chemicals images/Ferrous/product cards/Ferrous Bis Glycinate.png",
    "description": "Aditya Chemical’s ferrous gluconate has consistent purity and stability. where ferrous iron is combined with Glucono delta-lactone (GDL), offers excellent stability and bioavailability. Known for its effectiveness in iron fortification, Ferrous Gluconate helps support nutritional needs while ensuring high quality and consistency.",
    "details": {
      "formula": "C H FeO ·2H O12 22 14 2",
      "shelfLife": "5 years"
    },
    "specifications": {
      "physicalForm": "A Yellowish grey or pale greenish-yellow, fine powder or granules,",
      "limitofFerricIron": "NMT 1.0 %",
      "assay": "95% to 102%",
      "ironIIContent": "11.8% to 12.5%. (On dried basis, as per BP specification)",
      "storage": "Store Protected from Light",
      "iupacName": "Bis(D-gluconato-O1,O2)iron"
},
    "features": [
      "Effective Iron Supplementation: Ferrous Gluconate is commonly used in oral iron supplements to treat and prevent iron deficiency anemia.",
      "Gentle on the Stomach: Known for causing fewer gastrointestinal side effects such as constipation, nausea, and stomach discomfort, Ferrous Gluconate is a suitable option for long-term supplementation. This enhances patient compliance and overall treatment success.",
      "Supports Haemoglobin and Red Blood Cell Production: Iron is a critical component of haemoglobin, the protein in red blood cells responsible for transporting oxygen throughout the body. Adequate iron levels are essential for maintaining energy levels, cognitive function, and overall health.",
      "Treatment of Specific Health Conditions: Ferrous Gluconate is often prescribed for individuals with conditions leading to chronic blood loss, such as gastrointestinal bleeding or heavy menstrual periods.",
      "Prenatal and Postnatal Care: Iron requirements increase during pregnancy and breastfeeding. Ferrous Gluconate is frequently recommended for pregnant and nursing women to support maternal health and proper fetal development, ensuring the well-being of both mother and child.",
      "Dual-Industry Value: Widely used as a gentle active pharmaceutical ingredient (API) in supplements, and globally approved as a food fortifier and color stabilizer"
]
  },
  {
    "name": "Sodium Ferric EDTA",
    "slug": "sodium-ferric-edta",
    "casNumber": "15708-41-5",
    "categoryTag": "Iron (Chelated Minerals)",
    "parentCategorySlug": "minerals",
    "subCategorySlug": "ferrous",
    "imagePath": "/aditya chemicals images/Ferrous/product cards/Sodium Ferric EDTA.png",
    "description": "Aditya Chemical’s Sodium Ferric EDTA (Ferric Sodium Ethylenediaminetetraacetate) is a highly stable, water-soluble chelated iron compound recognized globally for its superior bioavailability in iron fortification programs, particularly effective in high-phytate food matrices.",
    "details": {
      "formula": "C H N O FeNa, H O10 12 2 8 3 2",
      "shelfLife": "5 years"
    },
    "specifications": {
      "physicalForm": "A yellow or yellowish brown, crystalline powder.",
      "assay": "98.0% – 102.0%",
      "storage": "Store in an airtight container.",
      "iupacName": "Iron(III) Sodium Ethylenediaminetetraacetate Trihydrate"
},
    "features": [
      "High Stability (Chelation): The EDTA molecule acts like a \"claw,\" tightly wrapping around the iron ion. This prevents the iron from reacting prematurely with other chemicals or precipitating out of solution.",
      "Resistance to Dietary Inhibitors: In the gut, standard iron supplements often bind with dietary phytates, polyphenols (found in tea/coffee), or calcium, which ruins their absorption. The chelated structure of Sodium Ferric EDTA shields the iron from these inhibitors.",
      "Fewer Gastrointestinal Side Effects: Because the iron is securely bound until absorption, it causes significantly less stomach irritation, nausea, cramping, or constipation compared to traditional iron salts like ferrous sulfate.",
      "No Metallic Taste: It minimizes the harsh, astringent metallic taste usually associated with iron, making it ideal for fortified foods and liquid paediatric medications.",
      "Micronutrient Fertilizer: It is used to treat iron chlorosis (iron deficiency) in crops, which causes leaves to yellow due to a lack of chlorophyll. The chelated iron remains available to the plant even in alkaline soils where free iron would typically get locked up and become unusable."
]
  },
  {
    "name": "Calcium Aspartate",
    "slug": "calcium-aspartate",
    "casNumber": "10389-09-0",
    "categoryTag": "Calcium (Chelated Minerals)",
    "parentCategorySlug": "minerals",
    "subCategorySlug": "calcium",
    "imagePath": "/aditya chemicals images/Calcium/product card/Calcium Aspartate.png",
    "description": "Aditya Chemical’s Calcium aspartate is a stable, organic calcium with an extraordinarily high rate of absorption. It is a calcium salt of the amino acid aspartic acid, and has a neutral reaction in the body. It is an industrial-grade, non-hygroscopic powder engineered for flawless manufacturing. With superior direct- compression properties, excellent high-speed flowability, and natural binding strength, it enables brands to create highly potent.",
    "details": {
      "formula": "(C H NO ) Ca4 5 4 2",
      "shelfLife": "5 years"
    },
    "specifications": {
      "physicalForm": "White to off-white crystalline hygroscopic powder.",
      "assay": "98.0 % to 101.0 %",
      "storage": "Preserve in a well-closed container.",
      "iupacName": "Calcium; (2S)-2-aminobutanedioate"
},
    "features": [
      "Targeted Bone & Structural Density: Formulated specifically to optimize skeletal uptake. It accelerates bone mineralization and maintains skeletal structural integrity, drastically reducing the risk of age-related bone loss and osteoporosis.",
      "Advanced Muscle & Athletic Performance: Directly fuels muscle fiber contraction, rapid relaxation, and neuromuscular response. It prevents performance-limiting cramps, making it ideal for elite sports and physical recovery blends.",
      "Deep Enamel & Dental Reinforcement: Contributes directly to jawbone stability and tooth density. It fortifies enamel against daily wear and decay while protecting the foundational jaw structure that prevents adult tooth loss.",
      "Neurological Mood Regulation: Maintains proper cellular calcium balance, which is vital for neurotransmitter stability, helping to manage mood swings and support emotional well- being"
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
    "description": "Calcium Bis Glycinate is a chelated form of calcium where the mineral is bound to the amino acid glycine, resulting in enhanced bioavailability and superior digestive tolerance. It is especially suited for advanced formulations where efficient calcium delivery & reduced gastric irritation are key. Aditya Chemicals supplies high- purity Calcium Glycinate, optimized for use in tablets, capsules, & mineral-rich wellness blends. Its chelated structure ensures reliable performance in complex formulations targeting bone, nerve, & muscular support.",
    "details": {
      "formula": "C H CaN O4 8 2 4",
      "shelfLife": "5 years"
    },
    "specifications": {
      "physicalForm": "White to yellowish-white hygroscopic powder",
      "calciumContent": "NLT 20.0% w/w",
      "storage": "Store in a well-closed container.",
      "iupacName": "Calcium;2-aminoacetate"
},
    "features": [
      "Dual-Mechanism Skeletal & Cellular Synergy: Calcium bisglycinate delivers a two-in-one benefit for structural and physiological health:",
      "The Glycine Carrier: This small amino acid accelerates mineral delivery into the bone matrix and supports collagen synthesis.",
      "The Calcium Foundation: Provides the raw building blocks for bone",
      "Superior Gastric Stability: Standard calcium degrades in stomach acid. The chelated bisglycinate shield passes intact through the stomach, maximizing the active dose entering the bloodstream.",
      "Targeted Cellular Uptake: Prevents unabsorbed calcium from building up outside cells (which risks kidney stress or calcification). It uses amino acid pathways to pull calcium directly inside bone and muscle cells for optimal recovery.",
      "Zero GI Distress: Unabsorbed calcium causes bloating, gas, and constipation. Calcium bisglycinate absorbs so efficiently that it leaves no unreacted particles behind, ensuring excellent stomach tolerance.",
      "Formulation Friendly: High-purity powder optimized for seamless blending into tablets, capsules, and premium nutritional mixes."
]
  },
  {
    "name": "Calcium Lactate Gluconate",
    "slug": "calcium-lactate-gluconate-ih",
    "casNumber": "11116-97-5",
    "categoryTag": "Calcium (Chelated Minerals)",
    "parentCategorySlug": "minerals",
    "subCategorySlug": "calcium",
    "imagePath": "/aditya chemicals images/Calcium/product card/Calcium Lactate Gluconate.png",
    "description": "Aditya Chemical’s Calcium Lactate Gluconate is a highly soluble salt of calcium, lactic acid and gluconic acid used in effervescent calcium tablets. In pharmaceuticals, it is widely used as a pharmaceutical calcium source with excellent bioavailability. In food and beverages, the outstanding characteristics of calcium lactate gluconate, neutral taste, lead to new applications in a wide range of premium products.",
    "details": {
      "formula": "C₉H₁₆CaO₁₀",
      "shelfLife": "5 years"
    },
    "specifications": {
      "physicalForm": "White to off-white crystalline or granular powder",
      "calciumcontent": "12.4 % to 13.2 %",
      "storage": "Store in a well-closed container",
      "iupacName": "Calcium; 2-hydroxypropanoate; (2R,3S,4R,5R)-2,3,4,5,6-pentahydroxyhexanoate"
},
    "features": [
      "High Bioavailability: The synergistic combination of lactate and gluconate ions enhances calcium absorption in the human gastrointestinal tract.",
      "Neutral Taste Profile: It has a clean, virtually tasteless profile with no chalky or bitter aftertaste, which is crucial for compliance in pediatric and geriatric oral formulations.",
      "Excellent Gastric Tolerance: It is highly gentle on the stomach and does not typically cause the bloating, gas, or constipation associated with heavier calcium salts.",
      "Effervescent Tablets: calcium lactate gluconate’s allows for crystal-clear dissolution without leaving a gritty residue at the bottom of the glass.",
      "Chewable & Orodispersible Tablets (ODTs): Because it lacks a bitter taste, it requires less flavour-masking, reducing production costs and tablet size.",
      "Pediatric & Geriatric Calcium Syrups: Ideal for formulating stable, high-concentration oral liquids without crystallization issues over time.",
      "Fortified Ready-to-Drink (RTD) Beverages: Broadening the scope into medical nutrition & functional wellness drinks.",
      "Antacid Formulations: Leveraging its gastric tolerance for rapid-acting, non-irritating stomach acid neutralization products."
]
  },
  {
    "name": "Calcium Citrate",
    "slug": "calcium-citrate",
    "casNumber": "5785-44-4",
    "categoryTag": "Calcium (Chelated Minerals)",
    "parentCategorySlug": "minerals",
    "subCategorySlug": "calcium",
    "imagePath": "/aditya chemicals images/Calcium/product card/Calcium Citrate.png",
    "description": "Calcium Citrate is a widely used calcium salt offering excellent bioavailability, especially in individuals with low stomach acid. It is a preferred calcium source in nutraceuticals aimed at bone health, mineral supplementation, and senior wellness. Aditya Chemicals supplies high-purity Calcium Citrate tailored for use in tablets, capsules, powders, and fortified food and beverage systems. Our material is known for its superior flow properties and formulation compatibility, ensuring dependable performance across product formats.",
    "details": {
      "formula": "C H Ca O . H O12 10 3 14 4 2",
      "shelfLife": "5 years"
    },
    "specifications": {
      "physicalForm": "White, odorless, crystalline powder",
      "assay": "98.0% to 102.0%",
      "storage": "Preserve in a well-closed container.",
      "iupacName": "1,2,3-Propanetricarboxylic acid, 2-hydroxy-, calcium salt (2:3), tetrahydrate"
},
    "features": [
      "Acid-Independent Absorption: Absorbs efficiently on an empty stomach or in low-acid environments. It is the premier choice for seniors (with low stomach acid) and users on antacids or PPIs.",
      "High Bioavailability: An organic, highly soluble mineral salt that bypasses the breakdown barriers of inorganic minerals for rapid systemic delivery.",
      "All-Weather Dosing Flexibility: Can be taken anytime—with or without food—without losing potency or causing stomach upset.",
      "Advanced Formulation Stability: Resists binding with dietary fibers or phytates in the gut, ensuring the user actually absorbs the full functional dose.",
      "Premium Processing Utility: Neutral taste profile, optimized for tablets, chewables, premium drink mixes, and fortified foods."
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
      "shelfLife": "5 years"
    },
    "specifications": {
      "physicalForm": "White, colourless powder or granules",
      "calciumcontent": "20.0% to 24.0%",
      "assay": "NLT 97.5%",
      "storage": "Preserve in a well-closed container",
      "iupacName": "Calcium 2-hydroxybutanedioate"
},
    "features": [
      "Superior Bioavailability: The organic malic acid bound to the calcium optimises absorption pathways within the intestinal tract, ensuring highly efficient uptake by the body.",
      "Exceptional Gastric Tolerance: It dissolves easily in the gastrointestinal tract without requiring high stomach acidity. It can be taken comfortably with or without food, ensuring zero digestive discomfort.",
      "High Structural Stability: It maintains its chemical integrity across a wide pH range, allowing it to stay completely dissolved in acidic liquid formulations without precipitating or settling.",
      "Synergistic Combinations: It acts as a highly compatible molecular anchor in multi-ingredient bone- density formulas, pairing seamlessly with Vitamin D3, Vitamin K2 (MK-7), and Magnesium.",
      "Chewable & Gummies: Its natural malic acid backbone complements fruit flavour profiles perfectly, eliminating chalkiness to deliver a smooth mouthfeel in chewable tablets, melts, and gummies.",
      "Effervescent and ODTs: Its rapid solubility profile enables crystal-clear, clean-dissolving effervescent and orally disintegrating tablets (ODTs) that leave absolutely no gritty or sandy residue."
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
    "description": "Calcium Citrate Malate is a water-soluble calcium compound combining the benefits of both citrate & malate anions, offering superior bioavailability & absorption. It is widely preferred in premium nutraceutical formulations targeting bone density, skeletal strength, & mineral support. Aditya Chemicals supplies high-grade Calcium Citrate Malate with excellent flowability, making it ideal for use in tablets, capsules, effervescent, & fortified beverages. Our product meets strict quality standards for use in advanced nutritional systems.",
    "details": {
      "formula": "Ca (C H O ) . CaC H O . H O3 6 5 7 2 3 4 4 5 6 2",
      "shelfLife": "5 years"
    },
    "specifications": {
      "physicalForm": "A white or almost white odorless, crystalline powder.",
      "assay": "23.0 % to 24.2 %",
      "sumofcitrateandmalate": "NLT 73.0%",
      "storage": "Store protected from moisture",
      "iupacName": "Tetracalcium 2-hydroxybutanedioatebis (2-hydroxypropane-1,2,3-tricarboxylate)"
},
    "features": [
      "Acid-Independent Absorption: Dissolves completely regardless of stomach pH. It absorbs perfectly on an empty stomach, making it ideal for seniors with low stomach acid or consumers taking antacids.",
      "Flawless Stomach Tolerance: Leaves no unreacted, chalky residue in the gut. This ensures a near-zero incidence of bloating, gas, and severe constipation common with cheap calcium salts.",
      "Clean Taste: It delivers a clean mouthfeel, making it the premier choice for RTD beverages, fortified juices, & effervescent tablets.",
      "Multi-Mineral Synergy: Maintains an optimal ionization rate in the digestive tract that prevents it from blocking or competing with the absorption of companion nutrients like Magnesium, Zinc, or Iron.",
      "Sustained Cellular Retention: Unlike regular calcium that is quickly excreted in urine, Calcium Citrate Malate has high tissue retention. This means a larger percentage of the absorbed calcium stays locked inside the body's skeletal matrix."
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
      "formula": "(C H O ) . Ca5 3 4 2",
      "shelfLife": "3 years"
    },
    "specifications": {
      "physicalForm": "White to almost white crystalline powder.",
      "assay": "98.0% to 102.0%",
      "storage": "Store protected from moisture at a temperature not exceeding 30°C.",
      "iupacName": "Calcium 2,6-dioxo-1,2,3,6-tetrahydropyrimidine-4-carboxylate"
},
    "features": [
      "Cardiovascular Safety Shield: Rapid intracellular uptake ensures calcium goes straight into bones and muscles, eliminating the risk of arterial calcification or kidney tissue stress",
      "Blood-Brain Barrier Penetration: The only form of calcium capable of crossing into the central nervous system, offering unique neuroprotective and nerve-signaling benefits.",
      "Zero Nutrient Competition: Does not bind to or block other critical minerals like Iron or Magnesium in the gut, making it perfect for premium multi-nutrient blends.",
      "Absolute Gastric Comfort: Dissolves smoothly without requiring heavy stomach acid, completely eliminating the bloating, gas, and constipation of cheap calcium forms."
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
      "shelfLife": "5 years"
    },
    "specifications": {
      "physicalForm": "White to off-white, odourless crystalline powder",
      "zincContentOnasisbasis": "NLT 30.0% w/w",
      "storage": "Preserve in a well-closed container.",
      "iupacName": "zinc (II) glycinate"
},
    "features": [
      "Improved Zinc Absorption: The amino acid chelation in zinc bis glycinate significantly enhances its bioavailability, ensuring farm animals absorb and utilize this essential mineral more efficiently.",
      "Supports Immune Function: Zinc is crucial for a robust immune system, helping animals fight infections and maintain overall health.",
      "Enhances Skin and Hoof Health: Adequate zinc levels are vital for healthy skin, coat, and strong hooves, preventing conditions like dermatitis and lameness.",
      "Promotes Growth and Development: By supporting protein synthesis and cell division, zinc contributes to healthy growth rates and proper development in young animals.",
      "Boosts Reproductive Performance: Optimal zinc levels support reproductive health in breeding animals, improving fertility and overall efficiency.",
      "Prevents Zinc Deficiency: Supplementing with zinc bis glycinate prevents deficiencies that cause poor growth, weak immunity, and skin lesions. Our formulation is also optimized to minimize potential side effects."
]
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
    "casNumber": "5990-32-9",
    "categoryTag": "Zinc (Chelated Minerals)",
    "parentCategorySlug": "minerals",
    "subCategorySlug": "zinc",
    "imagePath": "/aditya chemicals images/Zinc/product card/Zinc Citrate.png",
    "description": "Zinc Citrate is a well-absorbed form of zinc commonly used in nutraceutical and dietary formulations. Known for its high bioavailability and mild taste profile, Zinc Citrate supports immune health, enzymatic functions, and antioxidant defence. Aditya Chemicals offers premium-grade Zinc Citrate that is suitable for a wide range of nutritional applications, including immune support supplements, wellness blends, and functional beverages. Its excellent stability and compatibility make it a preferred choice for advanced formulation systems.",
    "details": {
      "formula": "C H O Zn12 14 16 3",
      "shelfLife": "5 years"
    },
    "specifications": {
      "physicalForm": "A white or almost white powder",
      "assay": "NLT 31.3%",
      "storage": "Store protected from moisture",
      "iupacName": "Trizinc bis(2-hydroxypropane-1,2,3-tricarboxylate); dihydrate"
},
    "features": [
      "High Bioavailability & Absorption: As an organic salt bonded with citric acid, Zinc Citrate has a highly compatible molecular structure, allowing faster and more efficient absorption compared to inorganic forms like zinc oxide.",
      "Potent Immune System Support: It plays a foundational role in developing and activating T lymphocytes, acting as a powerful line of defence against viral and bacterial infections.",
      "Premium Oral Health and Dental Care: Widely recognized for its antimicrobial role in oral hygiene, it actively inhibits dental plaque, reduces calculus build-up, and neutralizes bad breath.",
      "Cellular Growth and Tissue Repair: Acting as a critical cofactor for over 300 enzymes, it drives DNA synthesis and cell division, making it essential for rapid wound healing and skin integrity.",
      "Excellent Sensory Profile (Neutral Taste): Unlike other zinc sources with a harsh, metallic aftertaste, its smooth, neutral flavor makes it ideal for chewable gummies, lozenges, and animal feeds.",
      "High Zinc Content concentration: Containing roughly 31.3 % elemental zinc, its high concentration allows manufacturers to achieve effective therapeutic doses using less raw material."
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
    "description": "Aditya Chemical’s Zinc Gluconate is a widely used, highly bioavailable zinc salt known for its role in supporting immune health, wound healing, and cellular function. It is gentle on the stomach and commonly used in pharmaceutical, nutraceutical, and personal care formulations. Our high-purity Zinc Gluconate ensures effective absorption and consistent therapeutic benefits",
    "details": {
      "formula": "C H O Zn12 22 14",
      "shelfLife": "5 years"
    },
    "specifications": {
      "physicalForm": "White or almost white, hygroscopic, granular or crystalline powder.",
      "assay": "97.0% to 102.0% (On anhydrous basis)",
      "storage": "Preserve in a well- closed, non-metallic airtight container and protect from moisture.",
      "iupacName": "Zinc(2+) bis[(2R,3S,4R,5R)-2,3,4,5,6-pentahydroxyhexanoate]"
},
    "features": [
      "Nutritional supplements: Formulated into tablets, capsules, or liquids to directly treat and prevent zinc deficiency.",
      "Immune support products: Commonly added to seasonal supplements to boost overall immune function, particularly during cold and flu seasons.",
      "Cardiovascular health supplements: Incorporated into targeted heart-health formulations to support long-term cardiovascular function.",
      "functional foods: Added to fortified foods and beverages to enhance daily nutritional value and provide built-in immune support.",
      "Sports nutrition: Used in pre-workout and post-workout recovery supplements to maintain immune health and support overall performance in athletes.",
      "Clinical nutrition: Integrated into specialized medical formulations for patients with compromised immune systems or those at high risk of nutrient depletion.",
      "Geriatric care products: Tailored into supplements specifically designed for older adults to support aging immune systems and heart health.",
      "Oral care products: Added to toothpastes, mouthwashes, and dental gels for their antimicrobial properties to help reduce plaque, combat bad breath, and maintain oral hygiene"
]
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
      "formula": "C H NO SZn5 10 2",
      "shelfLife": "5 years"
    },
    "specifications": {
      "physicalForm": "White crystalline, free-flowing powder.",
      "zincContent": "NLT 20.0% w/w and NMT 22.1% w/w. (On dried basis)",
      "methionineContent": "NLT 40.0% w/w and NMT 45.0% w/w. (On dried basis)",
      "storage": "Store in a well-closed container.",
      "iupacName": "Zinc (2S)-2-amino-4-methylsulfanylbutanoate"
},
    "features": [
      "Targeted L-Methionine Transport Pathway: Because zinc is chemically bound to methionine, the body absorbs the complex via specialized amino acid transporters instead of crowded mineral pathways, delivering optimal physiological absorption and cellular retention.",
      "Exceptional Gastrointestinal Comfort: The molecular stability of the chelate prevents the premature dissociation of free zinc ions in stomach acid, eliminating the nausea, cramping, and metallic reflux typical of standard mineral options.",
      "Excellent Free-Flow Crystalline Purity: The API maintains a highly uniform, free-flowing crystalline structure that resists room-temperature moisture clumping, ensuring seamless handling and processing during manufacturing.",
      "Acne & Inflammation Management: This compound is ideal for prescription-grade dermatological tablets targeting severe acne, tissue repair, and chronic wound healing by efficiently supporting natural collagen synthesis.",
      "Orally Disintegrating Tablets (ODTs) & Melts: The mild, non-metallic profile of this chelate requires minimal flavor-masking, making it perfect for smooth, consumer-friendly chewable tablets, melts, and therapeutic throat lozenges."
]
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
    "imagePath": "/aditya chemicals images/Potassium/product card/Potassium Magnesium Citrate.png",
    "description": "Potassium Magnesium Citrate is a dual mineral supplement produced by Aditya Chemicals. Known for its excellent bioavailability, this highly soluble, gentle-on-the-stomach powder is widely used in pharmaceutical, food, and nutraceutical formulations to support electrolyte balance, muscle and nerve function, cardiovascular health, and kidney wellness, making it ideal for nutritional and therapeutic applications.",
    "details": {
      "formula": "C₁₂H₁₀K₄MgO₁₄",
      "shelfLife": "5 years"
    },
    "specifications": {
      "physicalForm": "White-coloured powder",
      "magnesiumContent": "4.0% to 4.5% on a dried basis",
      "potassiumContent": "26.0% to 30.0% on a dried basis",
      "citrateContent": "63.0% to 71.0% on dried basis",
      "storage": "Store in a well-closed container",
      "iupacName": "Magnesium; tetrapotassium; 2-hydroxypropane-1,2,3-tricarboxylate"
},
    "features": [
      "Kidney Stone Prevention: It alkalizes urine, which effectively reduces the risk of calcium oxalate and uric acid stone formation while supporting overall kidney health.",
      "Electrolyte Replenishment: It corrects potassium and magnesium deficiencies, making it vital in medications for treating hypokalemia and hypomagnesemia.",
      "Bone and Muscle Health: Used in dietary supplements to improve bone density, support muscle function, and prevent cramping, making it highly popular among athletes.",
      "Blood Pressure Regulation: By replenishing both potassium and magnesium, this compound helps maintain normal blood pressure levels and supports cardiovascular health.",
      "Urinary Health Products: It alkalizes urine to prevent uric acid stones and support bladder function, making it a staple in wellness supplements for urinary health.",
      "Bone and Cardiovascular Support: Available in powders, tablets, and liquids, it supports nerve, bone, and heart health, particularly for aging populations or those at risk for osteoporosis.",
      "Fortified Foods: It is added to functional foods and beverages to boost mineral intake and restore electrolyte balance for general wellness.",
      "Digestive-Friendly Formulations: Sweeter on the stomach than other mineral supplements, it is used in food and drink products tailored for individuals with sensitive digestion."
]
  },
  {
    "name": "Potassium Citrate",
    "slug": "potassium-citrate",
    "casNumber": "6100-05-6",
    "categoryTag": "Potassium (Chelated Minerals)",
    "parentCategorySlug": "minerals",
    "subCategorySlug": "potassium",
    "imagePath": "/aditya chemicals images/Potassium/product card/Potassium Magnesium Citrate.png",
    "description": "Aditya Chemical’s Potassium Citrate is a versatile, high-purity mineral compound primarily used as a urinary alkalizer in pharmaceuticals, and as an acidity regulator, buffering agent, and electrolyte replenisher in foods and beverages. It provides excellent bioavailability and 38.3% potassium by mass.",
    "details": {
      "formula": "C₆H₅K₃O₇·H₂O",
      "shelfLife": "5 years"
    },
    "specifications": {
      "physicalForm": "White granular crystals or crystalline powder; odourless and hygroscopic",
      "assay": "99.0% to 101.0% on an anhydrous basis",
      "storage": "Preserve in a well- closed, airtight container and protect from moisture",
      "iupacName": "Tripotassium 2-hydroxypropane-1,2,3-tricarboxylate hydrate"
},
    "features": [
      "Kidney Stone Prevention: It is the standard treatment for calcium oxalate and uric acid kidney stones. The citrate binds to calcium in the urine, preventing it from crystallizing into stones.",
      "Urinary Alkalinization: Once ingested, the liver metabolizes citrate into bicarbonate. This safely raises the pH of your urine (making it less acidic), which dissolves uric acid crystals.",
      "Potassium Supplementation: It effectively treats and prevents hypokalemia (low blood potassium), which is essential for healthy nerve signals, muscle contractions, and steady heart rhythms",
      "Bone Density Support: By neutralizing metabolic acidity, it decreases the amount of calcium leached from bones and excreted in the urine, helping to preserve bone mineral density.",
      "Optimizing Potassium Citrate Delivery: Potassium citrate formulations are carefully designed to balance stomach protection with patient convenience: offer the easiest Extended-Release Tablets long-term daily routine but must be swallowed whole with food; allow for rapid, custom Oral Liquids dosing but require heavy dilution; and provide the most stomach-friendly option Dissolvable Powders while naturally encouraging the high fluid intake essential for kidney health."
]
  },
  {
    "name": "Potassium Gluconate",
    "slug": "potassium-gluconate",
    "casNumber": "299-27-4",
    "categoryTag": "Potassium (Chelated Minerals)",
    "parentCategorySlug": "minerals",
    "subCategorySlug": "potassium",
    "imagePath": "/aditya chemicals images/Potassium/product card/Potassium Gluconate.png",
    "description": "Potassium Gluconate is a potassium salt of gluconic acid, widely used as a dietary supplement to support electrolyte balance, heart health, and muscle function. It offers high bioavailability and is gentle on the stomach, making it suitable for long-term nutritional use in food and pharmaceutical formulations.",
    "details": {
      "formula": "C₆H₁₁KO₇ – Anhydrous",
      "shelfLife": "5 years"
    },
    "specifications": {
      "physicalForm": "Off-white to brownish or white to yellowish-white crystalline powder or granules",
      "assay": "97.0% to 103.0% on dried basis; FCC specification not less than 98.0%",
      "storage": "Preserve in a well- closed, tightly sealed container",
      "iupacName": "Potassium (2R,3S,4R,5R)-2,3,4,5,6-pentahydroxyhexanoate"
},
    "features": [
      "Treatment of Hypokalemia: Used in pharmaceuticals to quickly treat or prevent low potassium levels caused by medications, illness, or diet, relying on its high bioavailability for rapid replenishment.",
      "Cardiovascular Support: Regulates heart function and maintains electrolyte balance, making it a key ingredient in treatments for patients at risk of hypertension or heart arrhythmias.",
      "Neurological Function: Supports crucial nerve function by aiding in the transmission of nerve impulses, making it valuable for treating conditions that disrupt nerve signalling.",
      "Potassium Supplementation: Highly bioavailable and easily absorbed, making it a preferred form in daily dietary supplements to support overall muscle function, heart health, and fluid balance.",
      "Gentle on Digestion: Uniquely gentle on the stomach, making it the ideal choice for individuals with sensitive digestive systems who experience discomfort with other forms of potassium.",
      "Muscle Health and Cramps Prevention: Included in supplements to regulate muscle contractions and nerve signals, effectively preventing cramps and spasms for athletes and those with electrolyte imbalances."
]
  },
  {
    "name": "Potassium Magnesium Aspartate",
    "slug": "potassium-magnesium-aspartate-2",
    "casNumber": "72231-13-1",
    "categoryTag": "Potassium (Chelated Minerals)",
    "parentCategorySlug": "minerals",
    "subCategorySlug": "potassium",
    "imagePath": "/aditya chemicals images/Potassium/product card/Potassium Magnesium Aspartate.png",
    "description": "Aditya chemicals offers magnesium aspartate a mineral compound formed from magnesium and aspartic acid known for its superior absorption and bioavailability, it is commonly used in advanced nutraceutical and dietary and food formulations. Aditya chemical’s magnesium aspartate is trusted by formulators for its consistent high quality and reliable performance across a wide range of nutritional applications where effective magnesium delivery is essential.",
    "details": {
      "formula": "C₈H₁₂MgN₂O₈·2H₂O",
      "shelfLife": "5 Years"
    },
    "specifications": {
      "physicalForm": "White or almost white crystalline powder or colorless crystals",
      "assay": "98.0% to 102.0%",
      "storage": "Preserve in well closed container",
      "iupacName": "Magnesium; (3S)-3-amino-4-hydroxy 4-oxobutanoate"
},
    "features": [
      "Nutritional Supplement: Prevents deficiencies causing muscle cramps, fatigue, and nerve issues.",
      "Skin Care Products: Hydrates, soothes, and supports natural skin repair in anti-aging creams.",
      "Chelating Agent: Stabilizes metal ions to prevent unwanted reactions in water and metal treatment.",
      "Anti-Fatigue Agent: Relaxes sore muscles and relieves stress in bath salts and recovery lotions.",
      "Synergistic Effects: Combines magnesium and aspartic acid to optimize cellular and metabolic functions.",
      "Energy Production Support: Powers ATP (the body's energy molecule) to combat fatigue.",
      "Muscle Function Benefits: Regulates muscle contraction and relaxation to stop spasms and cramps.",
      "Nervous System Support: Aids neurotransmission to regulate nerve impulses, reducing stress & anxiety."
]
  },
  {
    "name": "Copper Bis Glycinate",
    "slug": "copper-bis-glycinate",
    "casNumber": "13479-54-4",
    "categoryTag": "Copper (Chelated Minerals)",
    "parentCategorySlug": "minerals",
    "subCategorySlug": "copper",
    "imagePath": "/aditya chemicals images/Copper/product card/Copper Bis Glycinate.png",
    "description": "Aditya Chemical’s Copper Bis glycinate is a highly bioavailable chelated form of copper, bound to the amino acid glycine. Known for its superior absorption and gentle gastrointestinal profile, it supports enzymatic functions, iron metabolism, and immune health. Our pharmaceutical-grade Copper Bis glycinate offers optimal purity and stability for therapeutic and nutritional formulations",
    "details": {
      "formula": "C₄H₈CuN₂O₄",
      "shelfLife": "5 years"
    },
    "specifications": {
      "physicalForm": "Blue to bluish-green, free- flowing powder",
      "copperContent": "24.0% to 27.0% on a dried basis",
      "storage": "Preserve in a well-closed container",
      "iupacName": "Bis(glycinato)copper(II)"
},
    "features": [
      "Peptide-Mimetic Absorption Pathway: The body recognizes the glycine-bound complex as an amino acid peptide, absorbing it via specialized peptide transporters to completely bypass highly competitive mineral channels.",
      "Intact Gastric Passage: Strong coordinate covalent bonds keep the complex intact through stomach acid, protecting mucosal linings and eliminating the localized nausea and metallic reflux common to copper salts.",
      "Anti-Oxidative Molecular Stability: The unique chelate ring structure prevents free copper from triggering premature oxidation or reacting with surrounding compounds, maintaining formulation integrity and shelf life.",
      "Phytate and Dietary Shielding: The protective glycine structure shields the copper from binding with dietary fiber, oxalates, or phytic acid, ensuring optimal mineral bio accessibility regardless of food intake.",
      "Non-Hygroscopic Powder Dynamics: It naturally forms a stable, bright blue crystalline structure that resists environmental moisture uptake, preventing powder clumping and ensuring excellent flowability during manufacturing."
]
  },
  {
    "name": "Copper Gluconate",
    "slug": "copper-gluconate",
    "casNumber": "527-09-3",
    "categoryTag": "Copper (Chelated Minerals)",
    "parentCategorySlug": "minerals",
    "subCategorySlug": "copper",
    "imagePath": "/aditya chemicals images/Copper/product card/Copper Gluconate.png",
    "description": "Copper gluconate is a copper salt of gluconic acid. Aditya Chemical’s Copper Gluconate is a bioavailable copper source that supports red blood cell formation, energy metabolism, connective tissue, and immune health, making it effective for addressing copper deficiencies. it is commonly used as a dietary supplement to provide the essential mineral copper to the human body",
    "details": {
      "formula": "C₁₂H₂₂CuO₁₄",
      "shelfLife": "5 years"
    },
    "specifications": {
      "physicalForm": "Light blue to greenish-blue fine powder or granules",
      "assay": "98.0% to 102.0%",
      "sulphates": "Not more than 500 ppm as per IP specification",
      "chloride": "Not more than 0.07% as per USP specification",
      "storage": "Store at room temperature in a dry place, protected from moisture, in a tightly sealed container",
      "iupacName": "Copper(II) bis(D-gluconate)"
},
    "features": [
      "High Cellular Bioavailability: The gluconate organic carrier optimizes the absorption pathways in the small intestine, ensuring highly efficient delivery of elemental copper to target tissues.",
      "Gentle Gastric Tolerance: Its organic structure minimizes localized irritation in the gastrointestinal tract, preventing the nausea and stomach upset frequently triggered by inorganic mineral salts.",
      "Therapeutic Chemical Stability: It maintains a robust, non-reactive profile across a broad pH range and temperature spectrum, ensuring the active mineral does not prematurely oxidize or degrade surrounding ingredients.",
      "Uniform Powder Flowability: copper gluconate is engineered with a consistent crystalline or fine powder particle distribution, designed specifically to prevent caking and optimize blending homogeneity."
]
  },
  {
    "name": "Manganese Bis Glycinate",
    "slug": "manganese-bis-glycinate",
    "casNumber": "14281-77-7",
    "categoryTag": "Manganese (Chelated Minerals)",
    "parentCategorySlug": "minerals",
    "subCategorySlug": "manganese",
    "imagePath": "/aditya chemicals images/Manganese/product card/Manganese Bis Glycinate.png",
    "description": "Aditya Chemical’s Manganese Bis glycinate is an advanced, highly bioavailable form of manganese produced by chelating manganese ions with glycine through a controlled chelation reaction. In this compound, manganese is bound to glycine via coordinate covalent bonds. The chelation with glycine protects manganese from unwanted soil reactions, renders it stable in water-based formulations, and allows it to be transported through pathways in the gastrointestinal wall",
    "details": {
      "formula": "C H MnN O4 8 2 4",
      "shelfLife": "5 years"
    },
    "specifications": {
      "physicalForm": "Off-white to light pink powder.",
      "manganeseContentasisbasis": "NLT 20.0%",
      "storage": "Preserve in a well-closed container.",
      "iupacName": "Manganese(2+) bis(2-aminoacetate)"
},
    "features": [
      "Maximum Bioavailability: Chelated with two glycine amino acids, allowing it to be absorbed rapidly via protein pathways rather than ordinary mineral pathways.",
      "Superior Stability: Resistant to pH fluctuations and antagonist interactions.",
      "Optimal Performance: Proven efficacy in promoting growth, immune function, and reproductive health.",
      "Resists Blockers: Its neutral charge prevents it from binding to dietary inhibitors like phytates or fibers that usually ruin mineral absorption.",
      "Stomach Friendly: Entirely non-irritating to the gut, completely avoiding the nausea or bloating common with cheaper mineral salts.",
      "Bone & Cartilage Health: Acts as a mandatory trigger for enzymes that build the flexible structural scaffolding of bones and joints.",
      "Metabolism & Energy: Fuels the enzymes responsible for breaking down carbs, amino acids, and cholesterol into usable cellular energy."
]
  },
  {
    "name": "Manganese Gluconate",
    "slug": "manganese-gluconate",
    "casNumber": "6485-39-8",
    "categoryTag": "Manganese (Chelated Minerals)",
    "parentCategorySlug": "minerals",
    "subCategorySlug": "manganese",
    "imagePath": "/aditya chemicals images/Manganese/product card/Manganese Gluconate.png",
    "description": "Aditya Chemical’s Manganese Gluconate is a highly bioavailable manganese salt of gluconic acid, essential for enzymatic functions, bone development, and antioxidant support. It is gentle on the digestive system and widely used in pharmaceutical and nutraceutical formulations. Our pharmaceutical-grade Manganese Gluconate ensures consistent quality and optimal absorption.",
    "details": {
      "formula": "C H MnO12 22 14",
      "shelfLife": "5 years"
    },
    "specifications": {
      "physicalForm": "White to pale pink, slightly hygroscopic, crystalline powder.",
      "assay": "98.0% to 102.0%",
      "chloride": "NMT 0.05% or NMT 500 ppm, according to the applicable specification.",
      "sulfate": "NMT 0.2% or NMT 500 ppm, according to the applicable specification.",
      "storage": "Preserve in well-closed containers. For BP specifications, store in a non- metallic, airtight container.",
      "iupacName": "Manganese(2+) bis[(2R,3S,4R,5R)-2,3,4,5,6-pentahydroxyhexanoate]"
},
    "features": [
      "Cellular Energy & Metabolism: Once absorbed, the manganese activates enzymes involved in the breakdown of amino acids, fats, and carbohydrates, helping your body smoothly turn food into active cellular energy.",
      "High Bioavailability: Gluconic acid facilitates excellent absorption in the body, ensuring the trace mineral is effectively utilized",
      "Bone & Joint Support: Essential for normal skeletal development, manganese aids in activating enzymes critical for maintaining bone density and building cartilage.",
      "Enzyme Activation: Acts as a vital catalyst for synthesizing enzymes involved in the metabolism of carbohydrates, amino acids, and cholesterol.",
      "Nutraceuticals & Pharmaceuticals: Utilized in tablets, capsules, and powders to prevent or treat manganese deficiencies"
]
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
