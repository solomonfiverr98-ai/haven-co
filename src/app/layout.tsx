import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Swapping to Inter
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://haven-co.re"),
  title: "Haven & Co | Premium Luxury Real Estate",
  description:
    "Exceptional properties. Trusted expertise. Haven & Co delivers a bespoke real estate experience for discerning buyers, sellers, and investors.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "luxury real estate",
    "premium properties",
    "property valuation",
    "luxury homes for sale",
    "Haven and Co",
    "real estate agent",
    "architectural real estate",
  ],
  openGraph: {
    title: "Haven & Co | Premium Luxury Real Estate",
    description:
      "Exceptional properties. Trusted expertise. Your journey home starts here with Haven & Co.",
    type: "website",
    locale: "en_US",
    siteName: "Haven & Co",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1200&h=630",
        width: 1200,
        height: 630,
        alt: "Haven & Co | Premium Luxury Real Estate",
      },
    ],
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased font-sans transition-colors duration-300`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
