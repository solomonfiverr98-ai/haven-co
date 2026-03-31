import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#FCFAF7]">
      <Navbar />
      
      <div className="pt-40 pb-32 px-6 md:px-24">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block text-[#B8965A] text-[11px] uppercase tracking-[0.4em] font-bold mb-6">
            ✦ LEGAL COMPLIANCE
          </span>
          <h1 className="text-[#0A0A0A] text-5xl md:text-6xl font-heading mb-12 tracking-tight">
            Privacy <span className="italic font-light">Policy.</span>
          </h1>
          
          <div className="prose prose-slate prose-lg max-w-none font-body text-[#0A0A0A]/70 leading-relaxed space-y-8">
            <p>
              At Haven & Co, your privacy is our highest priority. This policy outlines how we collect, use, and protect your information when you engage with our luxury real estate services.
            </p>
            
            <section>
              <h2 className="text-2xl font-heading text-[#0A0A0A] mb-4">Information Collection</h2>
              <p>
                We collect personal information that you provide voluntarily through our property valuation forms, including your name, email address, phone number, and property details. We also collect non-personal data such as browser type and IP address via Google Analytics to improve our service excellence.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-heading text-[#0A0A0A] mb-4">Data Usage</h2>
              <p>
                Your data is used exclusively to provide the real estate services you request, including property valuations and personalized market analysis. We do not sell or share your data with third-party marketing firms.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-heading text-[#0A0A0A] mb-4">Client Discretion</h2>
              <p>
                As a luxury group, discretion is our hallmark. All communication and data exchange are handled with the utmost confidentiality, adhering to the highest standards of the real estate industry.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-heading text-[#0A0A0A] mb-4">Contact</h2>
              <p>
                For questions regarding your data or to request its removal from our systems, please contact our concierge at <a href="mailto:concierge@havenandco.com" className="text-[#B8965A] underline">concierge@havenandco.com</a>.
              </p>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
