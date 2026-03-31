"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

/* ─── Custom SVG Icons ─── */
const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
  </svg>
);

const MapPinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" />
  </svg>
);

const HomeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
  </svg>
);

const DollarSignIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" x2="12" y1="2" y2="22" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

export function Hero() {
  const headingRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-line", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out",
      });

      gsap.from(searchRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.8,
        ease: "power3.out",
      });

      gsap.from(".hero-stat", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 1.2,
        stagger: 0.1,
        ease: "power2.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative h-screen w-full bg-[#0A0A0A] overflow-hidden flex flex-col justify-end">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600"
          alt="Luxury Home"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />
      </div>

      {/* Content */}
      <div className="relative z-10 pl-16 md:pl-20 pb-24 md:pb-32 max-w-7xl w-full">
        <div className="space-y-4 mb-8">
          <span className="inline-block text-[#B8965A] text-[11px] uppercase tracking-[0.25em] font-medium hero-line">
            ✦ PREMIUM REAL ESTATE
          </span>

          <h1 ref={headingRef} className="text-white text-7xl md:text-[96px] leading-[0.95] tracking-tight font-heading">
            <span className="block hero-line">Find Your</span>
            <span className="block hero-line">Perfect</span>
            <span className="block italic text-[#B8965A] hero-line">Home.</span>
          </h1>

          <p className="text-white/60 text-lg md:text-xl max-w-md mt-6 mb-10 font-body hero-line">
            Exceptional properties. Trusted expertise. Your journey home starts here.
          </p>
        </div>

        {/* Search Bar */}
        <div
          ref={searchRef}
          className="bg-white/10 backdrop-blur-md border border-white/20 p-4 md:p-6 rounded-2xl max-w-4xl shadow-2xl mr-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
            {/* Location */}
            <div className="flex items-center gap-3 px-3 py-2 border-b md:border-b-0 md:border-r border-white/10">
              <span className="text-[#B8965A]"><MapPinIcon /></span>
              <div className="flex flex-col">
                <span className="text-white/40 text-[10px] uppercase tracking-wider">Location</span>
                <Select>
                  <SelectTrigger className="bg-transparent border-0 p-0 text-white h-auto focus:ring-0">
                    <SelectValue placeholder="All Locations" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="downtown">Downtown</SelectItem>
                    <SelectItem value="suburbs">Suburbs</SelectItem>
                    <SelectItem value="coastal">Coastal</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Type */}
            <div className="flex items-center gap-3 px-3 py-2 border-b md:border-b-0 md:border-r border-white/10">
              <span className="text-[#B8965A]"><HomeIcon /></span>
              <div className="flex flex-col">
                <span className="text-white/40 text-[10px] uppercase tracking-wider">Property Type</span>
                <Select>
                  <SelectTrigger className="bg-transparent border-0 p-0 text-white h-auto focus:ring-0">
                    <SelectValue placeholder="All Types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="house">House</SelectItem>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="villa">Villa</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Price Range */}
            <div className="flex items-center gap-3 px-3 py-2">
              <span className="text-[#B8965A]"><DollarSignIcon /></span>
              <div className="flex flex-col">
                <span className="text-white/40 text-[10px] uppercase tracking-wider">Price Range</span>
                <Select>
                  <SelectTrigger className="bg-transparent border-0 p-0 text-white h-auto focus:ring-0">
                    <SelectValue placeholder="All Ranges" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1m">$1M - $2M</SelectItem>
                    <SelectItem value="2m">$2M - $5M</SelectItem>
                    <SelectItem value="5m">$5M+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* CTA */}
            <Button className="bg-[#B8965A] hover:bg-[#C9A86C] text-white rounded-xl py-7 font-semibold transition-all duration-300">
              Search Properties <span className="ml-2"><SearchIcon /></span>
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="flex flex-wrap gap-8 md:gap-16 mt-16 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col hero-stat">
            <span className="text-[#B8965A] text-3xl font-heading">500+</span>
            <span className="text-white/50 text-[11px] uppercase tracking-widest font-medium">Properties Sold</span>
          </div>
          <div className="w-px h-10 bg-[#B8965A]/30 hidden md:block" />
          <div className="flex flex-col hero-stat">
            <span className="text-[#B8965A] text-3xl font-heading">98%</span>
            <span className="text-white/50 text-[11px] uppercase tracking-widest font-medium">Client Satisfaction</span>
          </div>
          <div className="w-px h-10 bg-[#B8965A]/30 hidden md:block" />
          <div className="flex flex-col hero-stat">
            <span className="text-[#B8965A] text-3xl font-heading">15+</span>
            <span className="text-white/50 text-[11px] uppercase tracking-widest font-medium">Years Experience</span>
          </div>
          <div className="w-px h-10 bg-[#B8965A]/30 hidden md:block" />
          <div className="flex flex-col hero-stat">
            <span className="text-[#B8965A] text-3xl font-heading">$2.4B+</span>
            <span className="text-white/50 text-[11px] uppercase tracking-widest font-medium">Total Sales Volume</span>
          </div>
        </div>
      </div>
    </section>
  );
}
