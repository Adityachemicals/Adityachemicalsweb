import ContactForm from "@/components/ContactForm";

interface PageProps {
  searchParams: Promise<{
    product?: string;
  }>;
}

export const metadata = {
  title: "Contact Aditya Chemicals | Global Sales Office & USA Warehouse",
  description: "Get in touch with Aditya Chemicals' sales team. Contact our headquarters in India, manufacturing plant, or Boca Raton, FL (USA) warehouse for bulk orders & sample requests.",
};

export default async function ContactPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const initialProduct = params.product || "";

  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 space-y-16">
      {/* Header Title & Intro */}
      <div className="border-b border-surface-container-highest pb-8">
        <h1 className="font-display-lg-mobile md:font-display-lg text-deep-navy">
          Contact <span className="text-primary italic">Us</span>
        </h1>
        <p className="font-body-lg text-on-surface-variant max-w-3xl mt-4 leading-relaxed">
          Whether you have a question about our products, need assistance with a custom order, or want to explore potential partnerships – our team at Aditya Chemicals is ready to support you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Side: Contact Form Card */}
        <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-2xl border border-surface-container-highest shadow-sm space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-deep-navy">Inquiry Form</h2>
            <p className="text-on-surface-variant text-sm font-medium">
              Have a question or request? Fill out the form below, and we&apos;ll get back to you within 24 hours.
            </p>
          </div>
          <ContactForm initialProduct={initialProduct} />
        </div>

        {/* Right Side: Contact Coordinates */}
        <div className="lg:col-span-5 space-y-6">
          {/* Corporate Office */}
          <div className="bg-surface-container-low p-8 rounded-2xl border border-surface-container-highest space-y-4">
            <h3 className="text-lg font-bold text-deep-navy flex items-center gap-2">
              <span className="material-symbols-outlined text-primary select-none">corporate_fare</span>
              Office Address
            </h3>
            <p className="text-on-surface-variant text-sm font-semibold leading-relaxed">
              Aditya Chemicals
              <br />
              204, President Plaza, Nr. Thaltej Cross Road, S. G. Highway, Ahmedabad, Gujarat, 380054, India.
            </p>
          </div>

          {/* Phone & Operation Hours */}
          <div className="bg-surface-container-low p-8 rounded-2xl border border-surface-container-highest space-y-4">
            <h3 className="text-lg font-bold text-deep-navy flex items-center gap-2">
              <span className="material-symbols-outlined text-primary select-none">call</span>
              Phone & Hours
            </h3>
            <div className="text-on-surface-variant text-sm font-semibold space-y-1">
              <p className="text-primary text-base font-bold">079 2685 4545</p>
              <p className="text-xs font-normal">Hours: Monday to Saturday | 9:30 AM – 6:00 PM IST</p>
            </div>
          </div>

          {/* Email Addresses */}
          <div className="bg-surface-container-low p-8 rounded-2xl border border-surface-container-highest space-y-4">
            <h3 className="text-lg font-bold text-deep-navy flex items-center gap-2">
              <span className="material-symbols-outlined text-primary select-none">mail</span>
              Email
            </h3>
            <div className="text-on-surface-variant text-sm space-y-2">
              <div>
                <span className="font-semibold block text-xs uppercase text-deep-navy/70">General Enquiries</span>
                <a href="mailto:info@adityachemicals.com" className="text-primary font-bold hover:underline">
                  info@adityachemicals.com
                </a>
              </div>
              <div>
                <span className="font-semibold block text-xs uppercase text-deep-navy/70">Sales & Support</span>
                <a href="mailto:sales01@adityachemicals.com" className="text-primary font-bold hover:underline">
                  sales01@adityachemicals.com
                </a>
              </div>
            </div>
          </div>

          {/* Manufacturing Plant */}
          <div className="bg-surface-container-low p-8 rounded-2xl border border-surface-container-highest space-y-4">
            <h3 className="text-lg font-bold text-deep-navy flex items-center gap-2">
              <span className="material-symbols-outlined text-primary select-none">factory</span>
              Manufacturing Plant
            </h3>
            <p className="text-on-surface-variant text-sm font-semibold leading-relaxed">
              24-25, Ajanta Industrial Estate, At. Vasna - Iyava, Tal. Sanand, Dist.: Ahmedabad - 382110, Gujarat, INDIA
            </p>
          </div>

          {/* USA Warehouse */}
          <div className="bg-surface-container-low p-8 rounded-2xl border border-surface-container-highest space-y-4">
            <h3 className="text-lg font-bold text-deep-navy flex items-center gap-2">
              <span className="material-symbols-outlined text-primary select-none">warehouse</span>
              USA Warehouse
            </h3>
            <p className="text-on-surface-variant text-sm font-semibold leading-relaxed">
              6550 E Roger Cir, Boca Raton, FL 33487, USA
            </p>
          </div>
        </div>
      </div>

      {/* Manufacturing Plant Location Map */}
      <div className="space-y-6">
        <div className="border-b border-surface-container-highest pb-4">
          <h2 className="text-2xl font-bold text-deep-navy uppercase tracking-wider flex items-center gap-2">
            <span className="material-symbols-outlined text-primary select-none">location_on</span>
            Manufacturing Plant Location
          </h2>
          <p className="text-on-surface-variant text-sm mt-1">
            Ajanta Industrial Estate, Sanand, Gujarat, India
          </p>
        </div>
        <div className="w-full h-[400px] rounded-[2rem] overflow-hidden border border-surface-container-highest shadow-sm bg-white">
          <iframe
            src="https://maps.google.com/maps?q=Ajanta%20Industrial%20Estate,%20Vasna%20Iyava,%20Sanand,%20Gujarat,%20India&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Aditya Chemicals Manufacturing Plant Map"
          ></iframe>
        </div>
      </div>

      {/* CTA Footer Banner */}
      <div className="bg-deep-navy text-white rounded-[3rem] p-10 md:p-16 relative overflow-hidden shadow-xl text-center md:text-left">
        <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-container rounded-full blur-[100px]"></div>
        </div>
        <div className="relative z-10 max-w-4xl space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold font-headline-md leading-snug">
            Partnering for a Purer Future
          </h2>
          <p className="text-white/80 font-body-lg leading-relaxed">
            From APIs to specialty chemicals, our commitment to quality, consistency, and compliance is what makes us a trusted name across industries. We look forward to building a long-lasting relationship with you.
          </p>
        </div>
      </div>
    </div>
  );
}
