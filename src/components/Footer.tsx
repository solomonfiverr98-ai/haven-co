"use client";

import Link from "next/link";

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const TwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-[#1A1A1A] pt-24 pb-12 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <Link href="/" className="text-white text-3xl font-heading tracking-[0.1em] mb-8 block">
              HAVEN & CO<span className="text-gold">.</span>
            </Link>
            <p className="text-white/50 text-xl font-body max-w-sm leading-relaxed mb-8">
              Redefining luxury real estate through editorial storytelling, data-driven precision, and an unwavering commitment to discretion.
            </p>
            <div className="flex gap-6">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white/5 rounded-full hover:bg-gold transition-all text-white border border-white/10 hover:border-gold"
              >
                <InstagramIcon />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white/5 rounded-full hover:bg-gold transition-all text-white border border-white/10 hover:border-gold"
              >
                <LinkedinIcon />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white/5 rounded-full hover:bg-gold transition-all text-white border border-white/10 hover:border-gold"
              >
                <FacebookIcon />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white/5 rounded-full hover:bg-gold transition-all text-white border border-white/10 hover:border-gold"
              >
                <TwitterIcon />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-heading text-xl mb-8">Navigation</h4>
            <ul className="space-y-4 font-body">
              <li><Link href="#properties" className="text-white/50 hover:text-gold transition-colors">Featured Listings</Link></li>
              <li><Link href="#services" className="text-white/50 hover:text-gold transition-colors">Our Services</Link></li>
              <li><Link href="#team" className="text-white/50 hover:text-gold transition-colors">Meet the Team</Link></li>
              <li><Link href="#valuation" className="text-white/50 hover:text-gold transition-colors">Property Valuation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-heading text-xl mb-8">Contact</h4>
            <ul className="space-y-4 font-body text-white/50">
              <li>
                <a 
                  href="mailto:concierge@havenandco.com" 
                  className="hover:text-white transition-colors underline underline-offset-4 decoration-gold/30 hover:decoration-gold"
                >
                  concierge@havenandco.com
                </a>
              </li>
              <li className="hover:text-white transition-colors">+1 (212) 888 0000</li>
              <li>700 Fifth Avenue, 18th Floor,<br />New York, NY 10019</li>
            </ul>
          </div>
        </div>

        {/* Brand Watermark for Footer */}
        <div className="border-t border-white/5 pt-12 text-center relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 scale-75 opacity-10 blur-sm pointer-events-none">
            <span className="text-[120px] font-heading text-gold whitespace-nowrap">EXTREME DISCRETION</span>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
            <p className="text-white/30 text-sm font-body tracking-wider">
              © {currentYear} HAVEN & CO REAL ESTATE GROUP. ALL RIGHTS RESERVED.
            </p>
            <div className="flex gap-8 text-[12px] uppercase tracking-[0.2em] font-medium text-white/30">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <button className="hover:text-white transition-colors">Cookie Settings</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
