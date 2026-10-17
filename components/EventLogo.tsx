import React from "react";

interface EventLogoProps {
  type: string;
  name?: string;
  className?: string;
}

export default function EventLogo({ type, name = "", className = "" }: EventLogoProps) {
  const normalizedName = name.toLowerCase();

  switch (type) {
    case "cphi":
      return (
        <div className={`flex items-center h-8 md:h-9 ${className}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/event-logos/cphi.png"
            alt="CPHI & PMEC India"
            className="h-full w-auto max-w-[150px] object-contain object-left select-none"
            loading="lazy"
          />
        </div>
      );

    case "vitafoods": {
      let src = "/event-logos/vitafoods.png";
      let alt = "Vitafoods";
      if (normalizedName.includes("europe")) {
        src = "/event-logos/vitafoods-europe.png";
        alt = "Vitafoods Europe";
      } else if (normalizedName.includes("india")) {
        src = "/event-logos/vitafoods-india.png";
        alt = "Vitafoods India";
      } else if (normalizedName.includes("asia")) {
        src = "/event-logos/vitafoods-asia.png";
        alt = "Vitafoods Asia";
      }
      return (
        <div className={`flex items-center h-8 md:h-9 ${className}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            className="h-full w-auto max-w-[150px] object-contain object-left select-none"
            loading="lazy"
          />
        </div>
      );
    }

    case "supplyside":
      return (
        <div className={`flex items-center h-8 md:h-9 ${className}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/event-logos/supplyside.png"
            alt="SupplySide Global"
            className="h-full w-auto max-w-[140px] object-contain object-left select-none"
            loading="lazy"
          />
        </div>
      );

    case "fi":
      return (
        <div className={`flex items-center h-8 md:h-9 ${className}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/event-logos/fi-india.png"
            alt="Fi India"
            className="h-full w-auto max-w-[110px] object-contain object-left select-none"
            loading="lazy"
          />
        </div>
      );

    case "ift":
      return (
        <div className={`flex items-center h-7 md:h-8 ${className}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/event-logos/ift-first.svg"
            alt="IFT FIRST"
            className="h-full w-auto max-w-[130px] object-contain object-left select-none"
            loading="lazy"
          />
        </div>
      );

    case "chemexpo":
      return (
        <div className={`flex items-center h-8 md:h-9 ${className}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/event-logos/chemexpo.png"
            alt="ChemExpo India"
            className="h-full w-auto max-w-[150px] object-contain object-left select-none"
            loading="lazy"
          />
        </div>
      );

    default:
      return (
        <div className={`flex items-center h-8 md:h-9 ${className}`}>
          <span className="text-sm font-bold text-deep-navy">{name || "Event"}</span>
        </div>
      );
  }
}
