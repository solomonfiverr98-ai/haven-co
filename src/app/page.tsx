import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeaturedProperties } from "@/components/FeaturedProperties";
import { StatsTrust } from "@/components/StatsTrust";
import { Services } from "@/components/Services";
import { MeetTheAgent } from "@/components/MeetTheAgent";
import { Testimonials } from "@/components/Testimonials";
import { ValuationForm } from "@/components/ValuationForm";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";

export default function Home() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID || "";

  return (
    <main className="min-h-screen">
      <GoogleAnalytics gaId={gaId} />
      <Navbar />
      <Hero />
      <FeaturedProperties />
      <StatsTrust />
      <Services />
      <MeetTheAgent />
      <Testimonials />
      <ValuationForm />
      <FAQ />
      <Footer />
    </main>
  );
}
