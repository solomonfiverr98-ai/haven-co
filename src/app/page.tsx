import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeaturedProperties } from "@/components/FeaturedProperties";
import { StatsTrust } from "@/components/StatsTrust";
import { Services } from "@/components/Services";
import { Team } from "@/components/Team";
import { Testimonials } from "@/components/Testimonials";
import { ValuationForm } from "@/components/ValuationForm";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";

export default function Home() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID || "";

  return (
    <main className="min-h-screen relative overflow-hidden bg-background">
      {/* Dynamic Background Glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-brand/5 blur-[120px] animate-pulse" />
        <div className="absolute top-[20%] right-[-5%] w-[30%] h-[50%] rounded-full bg-brand-accent/5 blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[30%] rounded-full bg-brand/5 blur-[140px]" />
      </div>

      <div className="relative z-10">
        <GoogleAnalytics gaId={gaId} />
        <Navbar />
        <Hero />
        <FeaturedProperties />
        <StatsTrust />
        <Services />
        <Team />
        <Testimonials />
        <ValuationForm />
        <FAQ />
        <Footer />
      </div>
    </main>
  );
}
