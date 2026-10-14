import type { Metadata } from "next";
import { Manrope, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import Footer from "@/components/Footer";
import Script from "next/script";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.adityachemicals.in"),
  title: {
    default: "Aditya Chemicals | GMP Certified API & Chelated Minerals Manufacturer",
    template: "%s | Aditya Chemicals"
  },
  description: "Aditya Chemicals is a leading global API & Chelated Minerals manufacturer. FDA-registered & GMP-certified bulk supplier of Amino Acids, Excipients, and Vitamins to the USA, UK, Europe, and Asia.",
  keywords: [
    "chemical manufacturer", "API manufacturing company", "bulk chelated minerals supplier",
    "amino acids exporter", "GMP certified factory", "FDA registered chemical plant",
    "USA chemical supplier", "Europe chemical exporter", "UK compliant chemical manufacturing",
    "chemical factory in USA", "chemical factory in UK", "chemical factory in Europe",
    "REACH registered chemical company", "WHO-GMP minerals manufacturer", "bulk drug substance supplier US EU",
    "chemical factory", "chemical industry", "USA chemical factory", "UK chemical factory",
    "Europe chemical factory", "USA chemical industry", "UK chemical industry", "Europe chemical industry"
  ],
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "en-GB": "/",
      "en-DE": "/",
      "en-NL": "/",
      "en-FR": "/"
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${hankenGrotesk.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <meta name="google-site-verification" content="GOOGLE_SITE_VERIFICATION_PLACEHOLDER" />
      </head>
      <body className="min-h-full flex flex-col bg-background text-on-surface">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GA4_MEASUREMENT_ID_PLACEHOLDER"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GA4_MEASUREMENT_ID_PLACEHOLDER');
          `}
        </Script>
        <AnnouncementBanner />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
