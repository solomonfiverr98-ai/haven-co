import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Haven & Co | Premium Luxury Real Estate",
  description:
    "Exceptional properties. Trusted expertise. Haven & Co delivers a bespoke real estate experience for discerning buyers, sellers, and investors.",
  keywords: [
    "luxury real estate",
    "premium properties",
    "property valuation",
    "luxury homes for sale",
    "Haven and Co",
    "real estate agent",
  ],
  openGraph: {
    title: "Haven & Co | Premium Luxury Real Estate",
    description:
      "Exceptional properties. Trusted expertise. Your journey home starts here with Haven & Co.",
    type: "website",
    locale: "en_US",
    siteName: "Haven & Co",
  },
  twitter: {
    card: "summary_large_image",
    title: "Haven & Co | Premium Luxury Real Estate",
    description:
      "Exceptional properties. Trusted expertise. Your journey home starts here with Haven & Co.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${plusJakarta.variable}`}>
      <body className="antialiased font-body bg-[#FAFAF8] text-[#1A1A1A]">
        {children}
      </body>
    </html>
  );
}
