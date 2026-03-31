"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const CircleCheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold w-5 h-5 flex-shrink-0">
    <circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" />
  </svg>
);

export function MeetTheAgent() {
  return (
    <section id="about" className="py-32 bg-[#F5F2EE] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20 px-16">

        {/* Left: Agent Photo */}
        <div className="relative w-full lg:w-1/2 h-[600px] rounded-3xl overflow-hidden shadow-2xl group">
          <Image
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600"
            alt="Solomon - Principal Agent"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gold/10 mix-blend-overlay" />

          <div className="absolute bottom-6 right-6">
            <Badge className="bg-gold text-white px-6 py-3 text-sm rounded-full shadow-lg border-0 font-semibold tracking-wide">
              ✦ Licensed Principal Agent
            </Badge>
          </div>
        </div>

        {/* Right: Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <span className="text-gold text-[11px] uppercase tracking-[0.25em] font-medium mb-6 block">
            YOUR AGENT
          </span>

          <h2 className="text-dark-text text-5xl font-heading leading-[1.1] mb-8">
            Trusted expertise. <br />
            Personal service.
          </h2>

          <p className="text-dark-text/80 text-xl font-heading italic leading-relaxed mb-8 border-l-2 border-gold pl-6">
            &ldquo;With over 15 years of experience in premium real estate, we understand that buying or selling a home is one of life&apos;s most significant decisions. That&apos;s why we deliver a personal, expert service that puts your needs first.&rdquo;
          </p>

          <p className="text-muted-text text-md font-body leading-relaxed mb-12 max-w-lg">
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
                <CircleCheckIcon />
                <span className="text-sm font-semibold tracking-wide text-dark-text uppercase">
                  {text}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <a
              href="#valuation"
              className="inline-block px-10 py-4 bg-dark-text text-white rounded-full font-semibold text-sm hover:bg-dark-text/90 transition-all shadow-xl"
            >
              Get in Touch →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
