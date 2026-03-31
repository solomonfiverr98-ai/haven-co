import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-[#FCFAF7]">
      <Navbar />
      
      <div className="pt-40 pb-32 px-6 md:px-24">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block text-[#B8965A] text-[11px] uppercase tracking-[0.4em] font-bold mb-6">
            ✦ SERVICE AGREEMENT
          </span>
          <h1 className="text-[#0A0A0A] text-5xl md:text-6xl font-heading mb-12 tracking-tight">
            Terms of <span className="italic font-light">Service.</span>
          </h1>
          
          <div className="prose prose-slate prose-lg max-w-none font-body text-[#0A0A0A]/70 leading-relaxed space-y-8">
            <p>
              By accessing Haven & Co, you agree to the following terms and conditions. Our commitment to excellence is matched by your adherence to these professional guidelines.
            </p>
            
            <section>
              <h2 className="text-2xl font-heading text-[#0A0A0A] mb-4">Service Use</h2>
              <p>
                The content provided on Haven & Co is for informational purposes only. It does not constitute a legal offer for sale or lease. Property valuations are estimates and should be confirmed with our specialists.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-heading text-[#0A0A0A] mb-4">Intellectual Property</h2>
              <p>
                All visual assets, editorial copy, and brand marks are the exclusive property of Haven & Co Real Estate Group. Unauthorized duplication or redistribution is strictly prohibited.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-heading text-[#0A0A0A] mb-4">Inquiry Accuracy</h2>
              <p>
                Clients are responsible for providing accurate property details and contact information. We reserve the right to decline inquiries that do not meet our luxury service criteria.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-heading text-[#0A0A0A] mb-4">Liability</h2>
              <p>
                Haven & Co is not liable for fluctuations in market data or errors in property descriptions provided by third-party sources. We strive for precision but recommend professional consultation for all high-value transactions.
              </p>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
