"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const CircleCheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold w-5 h-5 flex-shrink-0">
    <circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" />
  </svg>
);

export function MeetTheAgent() {
  return (
    <section id="about" className="py-32 bg-background transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20 px-6 md:px-16">

        {/* Left: Agent Photo */}
        <div className="relative w-full lg:w-1/2 h-[600px] rounded-3xl overflow-hidden shadow-2xl group">
          <Image
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600"
            alt="Solomon - Principal Agent"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-brand/10 mix-blend-overlay" />

          <div className="absolute bottom-6 right-6">
            <Badge className="bg-brand text-white px-6 py-3 text-sm rounded-full shadow-lg border-0 font-semibold tracking-wide">
              ✦ Licensed Principal Agent
            </Badge>
          </div>
        </div>

        {/* Right: Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <span className="text-brand text-[11px] uppercase tracking-[0.25em] font-medium mb-6 block">
            YOUR AGENT
          </span>

          <h2 className="text-foreground text-3xl sm:text-4xl md:text-5xl font-heading leading-[1.1] mb-8">
            Trusted expertise. <br />
            Personal service.
          </h2>

          <div className="relative mb-8">
            <div className="absolute -left-6 top-0 bottom-0 w-1 bg-brand rounded-full" />
            <p className="text-foreground/90 text-xl font-heading italic leading-relaxed pl-4">
              &ldquo;With over 15 years of experience in premium real estate, we understand that buying or selling a home is one of life&apos;s most significant decisions. That&apos;s why we deliver a personal, expert service that puts your needs first.&rdquo;
            </p>
          </div>

          <p className="text-muted-foreground text-md font-body leading-relaxed mb-12 max-w-lg">
            We combine deep market knowledge with genuine care for our clients — ensuring every transaction is smooth, transparent, and successful.
          </p>

          {/* Trust Badges */}
          <div className="space-y-4">
            {[
              "500+ Properties Sold",
              "$2.4B+ in Transactions",
              "98% Client Satisfaction",
            ].map((text) => (
              <div key={text} className="flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand w-5 h-5 flex-shrink-0">
                  <circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" />
                </svg>
                <span className="text-sm font-semibold tracking-wide text-foreground uppercase">
                  {text}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-8">
            <a
              href="#valuation"
              className="inline-block px-10 py-4 bg-brand text-white rounded-full font-semibold text-sm hover:bg-brand/90 transition-all shadow-xl"
            >
              Get in Touch →
            </a>
            
            <div className="flex items-center gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-foreground/5 text-foreground hover:bg-brand hover:text-white transition-all border border-foreground/10">
                <InstagramIcon />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-foreground/5 text-foreground hover:bg-brand hover:text-white transition-all border border-foreground/10">
                <LinkedinIcon />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-foreground/5 text-foreground hover:bg-brand hover:text-white transition-all border border-foreground/10">
                <FacebookIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
