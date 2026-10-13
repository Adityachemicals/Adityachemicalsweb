import Link from "next/link";
import Image from "next/image";
import ScrollBackground from "@/components/ScrollBackground";

export const metadata = {
  title: "Quality Certifications & Compliance | Aditya Chemicals WHO-GMP ISO",
  description: "Download Aditya Chemicals' official quality and regulatory certifications including WHO-GMP, ISO, Halal, Kosher, and compliance documentation for the USA, EU, and UK.",
};

interface Certificate {
  name: string;
  url: string;
  subtitle: string;
  logo?: string;
}

const certificatesList: Certificate[] = [
  {
    name: "Halal",
    url: "https://adityachemicals.com/wp-content/uploads/2025/07/Halal.pdf",
    subtitle: "Global Dietary Halal Compliance",
    logo: "/certificate%20logo/HALAL.png",
  },
  {
    name: "Kosher",
    url: "https://adityachemicals.com/wp-content/uploads/2025/07/Kosher.pdf",
    subtitle: "Jewish Dietary Laws Certification",
    logo: "/certificate%20logo/k.png",
  },
  {
    name: "FDCA FORM 28",
    url: "https://adityachemicals.com/wp-content/uploads/2025/07/Drug-Licence-FORM-28.pdf",
    subtitle: "State Drug Administration License",
    logo: "/certificate%20logo/FDCA.png",
  },
  {
    name: "ISO 9001-2015",
    url: "https://adityachemicals.com/wp-content/uploads/2025/07/ISO-9001-2015.pdf",
    subtitle: "Quality Management System Standards",
    logo: "/certificate%20logo/ISO.png",
  },
  {
    name: "Good Manufacturing Practices (GMP)",
    url: "https://adityachemicals.com/wp-content/uploads/2025/07/Good-Manufacturing-Practices-GMP.pdf",
    subtitle: "Certified Manufacturing Standard for APIs",
    logo: "/certificate%20logo/GMP.png",
  },
  {
    name: "Good Laboratory Practices (GLP)",
    url: "https://adityachemicals.com/wp-content/uploads/2025/07/Good-Laboratory-Practices-GLP.pdf",
    subtitle: "Certified Quality Control Testing Standards",
    logo: "/certificate%20logo/good-laboratory-practice-glp-grunge-rubber-stamp-white-background-vector-illustration-203672104.webp",
  },
  {
    name: "FSSAI",
    url: "https://adityachemicals.com/wp-content/uploads/2025/07/Food-Safety-and-Standards-Authority-of-India-FSSAI.pdf",
    subtitle: "Food Safety Standards Authority of India License",
    logo: "/certificate%20logo/FSSAI_logo.png",
  },
  {
    name: "Drug Licence FORM 25",
    url: "https://adityachemicals.com/wp-content/uploads/2025/07/Drug-Licence-FORM-25.pdf",
    subtitle: "State Food and Drug Control Administration",
  },
  {
    name: "Food Safety System Certification 22000 (FSSC 22000)",
    url: "https://www.adityachemicals.com/wp-content/uploads/2025/10/FSSC-22000.pdf",
    subtitle: "Global Food Safety Initiative Standard",
    logo: "/certificate%20logo/FSSC22000.png",
  },
  {
    name: "ICH Q7 Good Manufacturing Practices for APIs",
    url: "https://www.adityachemicals.com/wp-content/uploads/2025/12/SGS_ICH-Q7-GMP-for-APIs_IN2500001008_EN.pdf",
    subtitle: "SGS Certified Active Pharmaceutical Ingredient GMP",
    logo: "/certificate%20logo/ICH.png",
  },
];

export default function CertificatesPage() {
  return (
    <>
      <ScrollBackground />

      {/* Page Header */}
      <div data-bg-color="#faf8ff" className="py-20 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto space-y-4 text-center md:text-left">
          <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-xs font-label-caps uppercase select-none">
            Regulatory Compliance
          </span>
          <h1 className="font-display-lg-mobile md:font-display-lg text-deep-navy tracking-tight mt-4">
            Certificates &amp; <span className="text-primary italic">Licensing</span>
          </h1>
          <p className="font-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
            Aditya Chemicals is committed to maintaining the highest global standards in quality and safety. We hold all necessary drug manufacturing, laboratory, food safety, and dietary compliance credentials.
          </p>
        </div>
      </div>

      {/* Grid List */}
      <div data-bg-color="#ffffff" className="py-12 bg-white px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto space-y-12">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificatesList.map((cert, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-surface-container-highest shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="space-y-4">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-primary/5 text-primary flex items-center justify-center relative overflow-hidden p-2 flex-shrink-0">
                    {cert.logo ? (
                      <Image
                        src={cert.logo}
                        alt={cert.name}
                        fill
                        className="object-contain p-1"
                        sizes="(max-width: 768px) 80px, 96px"
                      />
                    ) : (
                      <span className="material-symbols-outlined text-4xl md:text-5xl select-none">verified</span>
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-deep-navy">{cert.name}</h3>
                    <p className="text-xs text-on-surface-variant font-medium mt-1 leading-relaxed">{cert.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Compliance CTA */}
          <div className="bg-surface-container-low p-8 md:p-12 rounded-3xl border border-surface-container-highest flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="space-y-2 text-center md:text-left max-w-2xl">
              <h3 className="text-xl font-bold text-deep-navy">Looking for specific documentation?</h3>
              <p className="text-on-surface-variant text-sm font-medium">
                If you require Batch Certificates of Analysis (COA), Allergen Statements, GMO declarations, or specific Technical Dossiers (DMF), please connect directly with our compliance desk.
              </p>
            </div>
            <Link href="/contact?request=compliance">
              <button className="px-8 py-4 bg-primary text-white rounded-full font-button text-button uppercase hover:scale-[0.98] transition-all duration-250 shadow-md cursor-pointer font-bold tracking-wider whitespace-nowrap">
                Contact Compliance
              </button>
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}
