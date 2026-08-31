export interface EventDetails {
  slug: string;
  name: string;
  date: string;
  venue: string;
  location: string;
  websiteUrl?: string;
  purpose: string;
  images: string[];
  // Rich SEO content
  titleSEO?: string;
  descriptionSEO?: string;
  longDescription?: string[];
  highlights?: { title: string; description: string }[];
  keyTakeaways?: string[];
}

export const eventsData: Record<string, EventDetails> = {
  "ift-first-2026": {
    slug: "ift-first-2026",
    name: "IFT FIRST Chicago 2026",
    date: "July 12–15, 2026",
    venue: "McCormick Place",
    location: "Chicago, IL, USA",
    websiteUrl: "https://www.ift.org/ift-first-event/",
    purpose: "Showcase our portfolio of specialty minerals and vitamins, secure new global partnerships, and provide customized ingredient solutions for food and nutrition product manufacturers.",
    images: [
      "/news/WhatsApp Image 2026-07-17 at 11.53.06 AM (2).jpeg",
      "/news/WhatsApp Image 2026-07-17 at 11.53.07 AM (1).jpeg",
      "/news/IMG_20260717_131523.jpg.jpeg",
      "/news/IMG_20260717_132407.jpg.jpeg"
    ],
    titleSEO: "Aditya Chemicals Showcases Premium Food & Nutraceutical Ingredients at IFT FIRST 2026 Chicago",
    descriptionSEO: "Learn about Aditya Chemicals' participation at IFT FIRST 2026 in Chicago. We exhibited our premium bioavailable chelated minerals, specialty vitamins, and custom ingredient solutions.",
    longDescription: [
      "Aditya Chemicals, a leading FDA-registered and GMP-certified manufacturer, participated in the prestigious IFT FIRST 2026 annual event and food expo held at McCormick Place in Chicago, Illinois. As one of the world's premier food science and ingredient events, IFT FIRST provided the ideal global stage for us to connect with developers, researchers, and nutrition manufacturers seeking high-purity specialty ingredients.",
      "During the three-day exhibition, our representatives engaged with international brand owners and product developers to address the industry's evolving needs for clean-label, bioavailable, and highly soluble ingredients. We discussed custom formulation technologies and showcased how our advanced manufacturing standards comply with USP, FCC, EP, and FDA guidelines, ensuring maximum quality assurance for global distribution channels."
    ],
    highlights: [
      {
        title: "Bioavailable Chelated Minerals Showcase",
        description: "We presented our comprehensive portfolio of bulk organic mineral chelates, including Calcium Bisglycinate, Magnesium Bisglycinate, Zinc Glycinate, and Ferrous Bisglycinate. Engineered for high bioavailability and neutral taste profile, these chelates are widely utilized in infant nutrition, beverage fortification, and functional foods."
      },
      {
        title: "Tailored Custom Ingredient Solutions",
        description: "Our technical team highlighted custom solution capabilities, such as particle size distribution (PSD) optimization, granulated formats for direct compression, and customized mineral-vitamin premixes designed to streamline operations and solve tableting and dissolution issues."
      },
      {
        title: "Global Supply Chain & FL Warehouse Efficiency",
        description: "We briefed clients on our robust logistics infrastructure, specifically emphasizing our US warehouse facility in Boca Raton, Florida. This allows us to hold safety stock and distribute minerals and excipients rapidly to North American and European manufacturers."
      }
    ],
    keyTakeaways: [
      "Demonstrated our capabilities in producing high-purity, bioavailable food and nutraceutical minerals.",
      "Addressed critical solubility and processing challenges for functional beverages and direct-compression tablets.",
      "Discussed long-term global supply partnerships with leading food and dietary supplement brands.",
      "Exhibited full compliance capabilities across FDA, USP, FCC, and European Pharmacopoeia (EP) regulations."
    ]
  },
  "vitafoods-europe-2026": {
    slug: "vitafoods-europe-2026",
    name: "Vitafoods Europe 2026",
    date: "May 5–7, 2026",
    venue: "Fira Barcelona Gran Via",
    location: "barcelona, spain",
    websiteUrl: "https://www.vitafoodseurope.com/en/home.html",
    purpose: "Exhibit our premium bioavailable chelated minerals, specialty vitamins, and excipient solutions, connect with European dietary supplement formulators, and expand our global supply partnerships.",
    images: [
      "/news/vitafoods-europe-1.jpg",
      "/news/vitafoods-europe-2.jpg",
      "/news/vitafoods-europe-3.jpg",
      "/news/vitafoods-europe-4.jpg",
      "/news/vitafoods-europe-5.jpg",
      "/news/vitafoods-europe-6.jpg"
    ],
    titleSEO: "Aditya Chemicals Exhibits Premium Minerals & Nutraceuticals at Vitafoods Europe 2026",
    descriptionSEO: "Read about Aditya Chemicals at Vitafoods Europe 2026 in Barcelona, Spain. We exhibited our high-purity chelated minerals, vitamins, and custom premix solutions for European markets.",
    longDescription: [
      "Aditya Chemicals, a leading FDA-registered and GMP-certified manufacturer of APIs and chelated minerals, participated in Vitafoods Europe 2026. The event was held at the Fira Barcelona Gran Via in barcelona, spain, serving as the premier annual gathering for the global nutraceutical, functional food, and dietary supplement industries.",
      "At our exhibition stand, our technical and business development teams presented our extensive range of mineral chelates and excipients designed to meet the rigorous quality standards of the European market. We discussed compliance with EP and USP guidelines and established new collaborative channels with global brand owners and formulators looking for reliable, high-purity bulk ingredient suppliers."
    ],
    highlights: [
      {
        title: "High-Absorption Mineral Chelates",
        description: "Featured our organic mineral bisglycinates, including Magnesium Bisglycinate, Calcium Bisglycinate, and Zinc Bisglycinate. These ingredients offer superior bioavailability and gentle gastrointestinal tolerance, making them ideal for premium dietary supplements."
      },
      {
        title: "European Regulatory Compliance",
        description: "Highlighted our strict manufacturing adherence to European Pharmacopoeia (EP) standards, ISO certifications, and GMP guidelines, giving European formulators complete regulatory confidence."
      },
      {
        title: "Custom Formulation & Granulation",
        description: "Discussed our customized granulation services for direct compression tableting, customized particle size configurations, and specialized premixes designed to solve complex manufacturing issues."
      }
    ],
    keyTakeaways: [
      "Exhibited our advanced portfolio of high-purity minerals and vitamins to the European health and nutrition sector.",
      "Addressed compliance standards for European Pharmacopoeia (EP) and USP guidelines.",
      "Fostered key partnerships with global supplement brands and contract manufacturers.",
      "Shared logistics capabilities for rapid distribution across Europe and the UK."
    ]
  },
  "fi-india-2026": {
    slug: "fi-india-2026",
    name: "Fi India 2026",
    date: "August 26–28, 2026",
    venue: "Bombay Exhibition Centre (BEC)",
    location: "Mumbai, India",
    websiteUrl: "https://www.figlobal.com/india/en/home.html",
    purpose: "Exhibited our premium portfolio of specialty minerals, amino acids, and active pharmaceutical ingredients (APIs), meeting with top industry leaders, formulators, and global partners at Fi India 2026 in Mumbai.",
    images: [
      "/FiIndia2026/875A7062.JPG",
      "/FiIndia2026/875A7073.JPG",
      "/FiIndia2026/875A7128.JPG",
      "/FiIndia2026/875A7280.JPG",
      "/FiIndia2026/875A7400.JPG"
    ],
    titleSEO: "Aditya Chemicals at Fi India 2026 Mumbai | Exhibition Gallery & Highlights",
    descriptionSEO: "Highlights and photo gallery of Aditya Chemicals at Fi India 2026 held at Bombay Exhibition Centre, Mumbai. Exhibiting bioavailable mineral chelates and custom ingredient solutions.",
    longDescription: [
      "Aditya Chemicals participated in Fi India 2026, held at the Bombay Exhibition Centre (BEC) in Mumbai, India from 26 to 28 August 2026. As one of South Asia's premier trade platforms for food ingredients, health supplements, and pharmaceutical excipients, the exhibition brought together leading industry experts, technical formulators, and global supply chain executives.",
      "At our booth (4F85), Aditya Chemicals presented an extensive portfolio of high-purity chelated minerals, active pharmaceutical ingredients (APIs), and specialized excipients. Our technical sales team engaged with product developers to demonstrate how our advanced mineral chelates—including Magnesium Bisglycinate, Calcium Citrate Malate, Zinc Monomethionine, and Ferrous Bisglycinate—deliver superior bioavailability and physical stability across solid dose and liquid formulations."
    ],
    highlights: [
      {
        title: "Bioavailable Mineral Chelates Showcase",
        description: "Featured our high-purity organic mineral complexes engineered for superior gut absorption, excellent powder flowability, and clean taste profiles for nutraceutical and pharmaceutical applications."
      },
      {
        title: "Custom Premixes & Technical Formulations",
        description: "Demonstrated custom granulation, particle size customization, and tailored premixing capabilities designed to streamline tableting, capsule filling, and beverage fortification."
      },
      {
        title: "Global Compliance & Strategic Supply",
        description: "Highlighted our full regulatory compliance (GMP, ISO 9001:2015, FSSC 22000, HALAL, KOSHER, PDA Member) and seamless supply chain capabilities serving the US, Europe, UK, and Asian markets."
      }
    ],
    keyTakeaways: [
      "Successfully showcased our specialized APIs and organic mineral chelates to key Indian and international decision-makers.",
      "Engaged with food science innovators to resolve formulation, solubility, and tableting challenges.",
      "Strengthened strategic supply partnerships across North America, Europe, and Asia-Pacific markets.",
      "Reaffirmed our commitment to world-class manufacturing, quality assurance, and regulatory compliance."
    ]
  }
};
