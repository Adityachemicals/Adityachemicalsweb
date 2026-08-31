import Link from "next/link";
import EventCountdown from "@/components/EventCountdown";
import EventLogo from "@/components/EventLogo";

export const metadata = {
  title: "Global Exhibitions & Events | Aditya Chemicals CPhI IFT",
  description: "Stay updated on the international pharma and food ingredient trade shows (CPhI, IFT, Fi Europe) where Aditya Chemicals showcases compliance and manufacturing innovations.",
};

interface EventItem {
  date: string;
  name: string;
  venue: string;
  location: string;
  country: string;
  flag: string;
  logoText: string;
  themeColor: string;
  icon: string;
  type: string;
  slug?: string;
  startDateISO?: string;
  websiteUrl?: string;
  booth?: string;
}

const upcomingEvents: EventItem[] = [
  {
    date: "2-4 Sep 2026",
    name: "Vitafoods Asia 2026",
    venue: "Queen Sirikit National Convention Center (QSNCC)",
    location: "Bangkok, Thailand",
    country: "Thailand",
    flag: "🇹🇭",
    logoText: "Vitafoods",
    themeColor: "bg-blue-50 text-blue-700 border-blue-200",
    icon: "spa",
    type: "vitafoods",
    startDateISO: "2026-09-02T09:00:00",
    websiteUrl: "https://www.vitafoodsasia.com/en/home.html",
    booth: "H6-G49",
  },
  {
    date: "27-30 Oct 2026",
    name: "SupplySide West 2026",
    venue: "Mandalay Bay",
    location: "Las Vegas, NV, USA",
    country: "USA",
    flag: "🇺🇸",
    logoText: "SupplySide",
    themeColor: "bg-purple-50 text-purple-700 border-purple-200",
    icon: "nutrition",
    type: "supplyside",
    startDateISO: "2026-10-27T09:00:00",
    websiteUrl: "https://west.supplysideshow.com/en/home.html",
    booth: "7790",
  },
  {
    date: "23-25 Nov 2026",
    name: "CPHI & PMEC India 2026",
    venue: "India Expo Mart (IEML)",
    location: "Greater Noida, Delhi NCR, India",
    country: "India",
    flag: "🇮🇳",
    logoText: "CPHI",
    themeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    icon: "medical_services",
    type: "cphi",
    startDateISO: "2026-11-23T09:00:00",
    websiteUrl: "https://www.cphi.com/india/en/home.html",
  },
];

const pastEvents: EventItem[] = [
  {
    date: "26-28 Aug 2026",
    name: "Fi India 2026",
    venue: "Bombay Exhibition Centre (BEC)",
    location: "Mumbai, India",
    country: "India",
    flag: "🇮🇳",
    logoText: "Fi",
    themeColor: "bg-teal-50 text-teal-700 border-teal-200",
    icon: "eco",
    type: "fi",
  },
  {
    date: "12-15 July 2026",
    name: "IFT FIRST Chicago 2026",
    venue: "McCormick Place",
    location: "Chicago, IL, USA",
    slug: "ift-first-2026",
    country: "USA",
    flag: "🇺🇸",
    logoText: "IFT",
    themeColor: "bg-orange-50 text-orange-700 border-orange-200",
    icon: "restaurant",
    type: "ift",
  },
  {
    date: "5-7 May 2026",
    name: "Vitafoods Europe 2026",
    venue: "Fira Barcelona Gran Via",
    location: "barcelona, spain",
    country: "barcelona, spain",
    flag: "🇪🇸",
    logoText: "Vitafoods",
    themeColor: "bg-blue-50 text-blue-700 border-blue-200",
    icon: "spa",
    type: "vitafoods",
    slug: "vitafoods-europe-2026",
  },
  {
    date: "29-30 Apr 2026",
    name: "ChemExpo India 2026",
    venue: "Bombay Exhibition Centre",
    location: "Mumbai, India",
    country: "India",
    flag: "🇮🇳",
    logoText: "ChemExpo",
    themeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
    icon: "science",
    type: "chemexpo",
  },
  {
    date: "11-13 Feb 2026",
    name: "Vitafoods India 2026",
    venue: "Pavilion 1-3, Jio World Convention Center",
    location: "Mumbai, India",
    country: "India",
    flag: "🇮🇳",
    logoText: "Vitafoods",
    themeColor: "bg-blue-50 text-blue-700 border-blue-200",
    icon: "spa",
    type: "vitafoods",
  },
  {
    date: "25-27 Nov 2025",
    name: "CPHI PMEC India 2025",
    venue: "India Expo Mart (IEML)",
    location: "Greater Noida, Delhi NCR",
    country: "India",
    flag: "🇮🇳",
    logoText: "CPHI",
    themeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    icon: "medical_services",
    type: "cphi",
  },
  {
    date: "29-30 Oct 2025",
    name: "SupplySide West 2025",
    venue: "Mandalay Bay",
    location: "Las Vegas, NV 89119, USA",
    country: "USA",
    flag: "🇺🇸",
    logoText: "SupplySide",
    themeColor: "bg-purple-50 text-purple-700 border-purple-200",
    icon: "nutrition",
    type: "supplyside",
  },
  {
    date: "17-19 Sep 2025",
    name: "Vitafoods Asia 2025",
    venue: "Queen Sirikit National Convention Centre (QSNCC)",
    location: "Bangkok, Thailand",
    country: "Thailand",
    flag: "🇹🇭",
    logoText: "Vitafoods",
    themeColor: "bg-blue-50 text-blue-700 border-blue-200",
    icon: "spa",
    type: "vitafoods",
  },
  {
    date: "3-5 Sep 2025",
    name: "Fi India 2025",
    venue: "IEML",
    location: "Greater Noida, Delhi NCR, India",
    country: "India",
    flag: "🇮🇳",
    logoText: "Fi",
    themeColor: "bg-teal-50 text-teal-700 border-teal-200",
    icon: "eco",
    type: "fi",
  },
  {
    date: "14-16 July 2025",
    name: "IFT 2025",
    venue: "McCormick Place",
    location: "Chicago, Illinois, USA",
    country: "USA",
    flag: "🇺🇸",
    logoText: "IFT",
    themeColor: "bg-orange-50 text-orange-700 border-orange-200",
    icon: "restaurant",
    type: "ift",
  },
];

export default function EventsPage() {
  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 space-y-16">
      {/* Title Header */}
      <div className="border-b border-surface-container-highest pb-8">
        <h1 className="font-display-lg-mobile md:font-display-lg text-deep-navy">
          Events & <span className="text-primary italic">Exhibitions</span>
        </h1>
        <p className="font-body-lg text-on-surface-variant max-w-2xl mt-4">
          Connect with Aditya Chemicals worldwide. We showcase our latest API developments, food additives, and nutritional formulations at leading global trade shows.
        </p>
      </div>

      {/* Upcoming Events Section */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-deep-navy border-b border-surface-container-highest pb-3">
          Upcoming Exhibitions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingEvents.map((event, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl border border-surface-container-highest shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div className="p-6 space-y-5">
                {/* Logo & Country Row */}
                <div className="flex justify-between items-center flex-wrap gap-2">
                  <EventLogo type={event.type} />
                  <div className="flex items-center gap-1.5">
                    {event.booth && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold border border-primary/20 font-mono">
                        Booth: {event.booth}
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-surface-container-low text-on-surface-variant rounded-full text-xs font-bold border border-surface-container-highest">
                      <span>{event.flag}</span>
                      <span>{event.country}</span>
                    </span>
                  </div>
                </div>

                {/* Event Name */}
                <h3 className="font-bold text-deep-navy text-lg leading-snug group-hover:text-primary transition-colors">
                  {event.name}
                </h3>

                {/* Info Fields */}
                <div className="space-y-2.5 text-sm text-on-surface-variant font-medium">
                  <p className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-base select-none">calendar_today</span>
                    {event.date}
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-base select-none mt-0.5">location_on</span>
                    <span>
                      <strong className="block text-deep-navy font-semibold">{event.venue}</strong>
                      <span className="text-xs text-on-surface-variant/80">{event.location}</span>
                    </span>
                  </p>
                </div>
              </div>

              {/* Countdown & Action Footer */}
              <div className="border-t border-surface-container-highest px-6 py-4 bg-surface-container-low/40 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="space-y-1">
                  <span className="text-[9px] text-on-surface-variant/80 uppercase font-bold tracking-wider block">Starts In</span>
                  {event.startDateISO && <EventCountdown startDate={event.startDateISO} />}
                </div>
                {event.websiteUrl && (
                  <a
                    href={event.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-primary text-white font-button text-xs rounded-xl hover:bg-primary-container transition-all duration-200 text-center shadow-sm select-none font-bold"
                  >
                    Register
                    <span className="material-symbols-outlined text-xs select-none">open_in_new</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Past Events Section */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-deep-navy border-b border-surface-container-highest pb-3">
          Exhibition Archive
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pastEvents.map((event, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl border border-surface-container-highest shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div className="p-6 space-y-5">
                {/* Logo & Country Row */}
                <div className="flex justify-between items-center">
                  <EventLogo type={event.type} />
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-surface-container-low text-on-surface-variant rounded-full text-xs font-bold border border-surface-container-highest">
                    <span>{event.flag}</span>
                    <span>{event.country}</span>
                  </span>
                </div>

                {/* Event Name */}
                <h3 className="font-bold text-deep-navy text-lg leading-snug group-hover:text-primary transition-colors">
                  {event.name}
                </h3>

                {/* Info Fields */}
                <div className="space-y-2.5 text-sm text-on-surface-variant font-medium">
                  <p className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary-fixed text-base select-none">calendar_today</span>
                    {event.date}
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary-fixed text-base select-none mt-0.5">location_on</span>
                    <span>
                      <strong className="block text-deep-navy font-semibold">{event.venue}</strong>
                      <span className="text-xs text-on-surface-variant/80">{event.location}</span>
                    </span>
                  </p>
                </div>
              </div>

              {/* Action Button Footer for Past Events (if they have slugs) */}
              {event.slug && (
                <div className="border-t border-surface-container-highest px-6 py-4 bg-surface-container-low/40">
                  <Link
                    href={`/events/${event.slug}`}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-white font-button text-xs rounded-xl hover:bg-primary-container transition-all duration-200 text-center shadow-sm select-none font-bold"
                  >
                    View Highlights & Gallery
                    <span className="material-symbols-outlined text-sm select-none">arrow_forward</span>
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
