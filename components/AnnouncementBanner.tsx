"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import EventCountdown from "./EventCountdown";

const events = [
  { name: "Vitafoods Asia 2026", date: "2026-09-02T09:00:00", country: "Thailand", flag: "🇹🇭" },
  { name: "SupplySide Global 2026", date: "2026-10-28T09:00:00", country: "USA", flag: "🇺🇸" },
  { name: "CPHI & PMEC India 2026", date: "2026-11-23T09:00:00", country: "India", flag: "🇮🇳" },
  { name: "CPhI North America 2027", date: "2027-05-12T09:00:00", country: "USA", flag: "🇺🇸" },
];

export default function AnnouncementBanner() {
  const [upcomingEvent, setUpcomingEvent] = useState<any>(null);
  const [daysLeft, setDaysLeft] = useState<number>(0);

  useEffect(() => {
    const today = new Date();

    // Find the next upcoming event within 10 days
    for (const event of events) {
      const eventDate = new Date(event.date);
      const diffTime = eventDate.getTime() - today.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays >= 0 && diffDays <= 10) {
        setUpcomingEvent(event);
        setDaysLeft(diffDays);
        break;
      }
    }
  }, []);

  if (!upcomingEvent) return null;

  return (
    <div className="bg-vibrant-azure text-white text-xs md:text-sm font-medium py-2 px-4 text-center z-50 relative">
      <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
        <Link href="/events" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <span className="material-symbols-outlined text-[16px]">campaign</span>
          <span>
            Upcoming Exhibition: <strong>{upcomingEvent.name}</strong> ({upcomingEvent.country} {upcomingEvent.flag})
          </span>
        </Link>
        <EventCountdown startDate={upcomingEvent.date} />
        <Link href="/events" className="underline hidden lg:inline hover:text-white/80 transition-colors">
          Meet us there
        </Link>
      </div>
    </div>
  );
}
