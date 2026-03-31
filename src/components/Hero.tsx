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
    <section className="relative min-h-screen w-full bg-[#0A0A0A] overflow-hidden flex flex-col items-center justify-center pt-24 pb-16 px-6">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1600"
          alt="Luxury Architecture"
          fill
          className="object-cover opacity-50 contrast-125"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/80 via-transparent to-[#0A0A0A]" />
      </div>

      {/* Content Stack */}
      <div className="relative z-10 max-w-5xl w-full text-center flex flex-col items-center">
        <div className="space-y-6 mb-12">
          <span className="inline-block text-[#B8965A] text-[12px] uppercase tracking-[0.4em] font-semibold hero-line">
            ✦ THE APEX OF LUXURY LIVING
          </span>

          <h1 ref={headingRef} className="text-white text-6xl md:text-[110px] leading-[0.9] tracking-tighter font-heading">
            <span className="block hero-line">Redefining</span>
            <span className="block italic text-[#B8965A] hero-line translate-y-2 md:translate-y-4">Luxury Real Estate.</span>
          </h1>

          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mt-8 mb-12 font-body hero-line">
            Curated collections of the world&apos;s most exceptional properties. Where vision meets architectural excellence.
          </p>
        </div>

        {/* Floating Search/Valuation Card */}
        <div
          ref={searchRef}
          className="bg-white border border-[#E5E0D8] p-6 md:p-8 rounded-[32px] w-full max-w-5xl shadow-[0_32px_64px_-12px_rgba(0,0,0,0.5)] transform -translate-y-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
            {/* Location */}
            <div className="flex items-start gap-4 px-4 py-2 border-b md:border-b-0 md:border-r border-[#E5E0D8]">
              <span className="text-[#B8965A] mt-1"><MapPinIcon /></span>
              <div className="flex flex-col text-left flex-1">
                <span className="text-slate-400 text-[11px] uppercase tracking-widest font-bold">Location</span>
                <Select>
                  <SelectTrigger className="bg-transparent border-0 p-0 text-slate-900 h-auto focus:ring-0 font-semibold text-base mt-0.5">
                    <SelectValue placeholder="Beverly Hills, CA" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beverly-hills">Beverly Hills, CA</SelectItem>
                    <SelectItem value="miami">Miami, FL</SelectItem>
                    <SelectItem value="ny">Manhattan, NY</SelectItem>
                    <SelectItem value="london">Mayfair, London</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Type */}
            <div className="flex items-start gap-4 px-4 py-2 border-b md:border-b-0 md:border-r border-[#E5E0D8]">
              <span className="text-[#B8965A] mt-1"><HomeIcon /></span>
              <div className="flex flex-col text-left flex-1">
                <span className="text-slate-400 text-[11px] uppercase tracking-widest font-bold">Property Type</span>
                <Select>
                  <SelectTrigger className="bg-transparent border-0 p-0 text-slate-900 h-auto focus:ring-0 font-semibold text-base mt-0.5">
                    <SelectValue placeholder="Estate / Villa" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="estate">Luxury Estate</SelectItem>
                    <SelectItem value="penthouse">Penthouse</SelectItem>
                    <SelectItem value="waterfront">Waterfront Villa</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Price Range */}
            <div className="flex items-start gap-4 px-4 py-2">
              <span className="text-[#B8965A] mt-1"><DollarSignIcon /></span>
              <div className="flex flex-col text-left flex-1">
                <span className="text-slate-400 text-[11px] uppercase tracking-widest font-bold">Price Range</span>
                <Select>
                  <SelectTrigger className="bg-transparent border-0 p-0 text-slate-900 h-auto focus:ring-0 font-semibold text-base mt-0.5">
                    <SelectValue placeholder="$5M - $25M+" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5m">$5M - $10M</SelectItem>
                    <SelectItem value="10m">$10M - $25M</SelectItem>
                    <SelectItem value="25m">$25M+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* CTA Button */}
            <Button className="bg-[#B8965A] hover:bg-[#C9A86C] text-white rounded-2xl py-8 px-8 font-bold text-lg shadow-xl transition-all duration-500 hover:scale-[1.02]">
              Search Estates <span className="ml-3"><SearchIcon /></span>
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div
          ref={statsRef}
          className="flex flex-wrap justify-center gap-x-12 gap-y-6 mt-16 pb-8"
        >
          <div className="flex flex-col items-center hero-stat">
            <span className="text-white text-3xl font-heading font-medium tracking-tight">500+</span>
            <span className="text-[#B8965A] text-[10px] uppercase tracking-[0.3em] font-bold mt-1">Properties Sold</span>
          </div>
          <div className="w-px h-10 bg-white/20 hidden md:block" />
          <div className="flex flex-col items-center hero-stat">
            <span className="text-white text-3xl font-heading font-medium tracking-tight">98%</span>
            <span className="text-[#B8965A] text-[10px] uppercase tracking-[0.3em] font-bold mt-1">Satisfied Clients</span>
          </div>
          <div className="w-px h-10 bg-white/20 hidden md:block" />
          <div className="flex flex-col items-center hero-stat">
            <span className="text-white text-3xl font-heading font-medium tracking-tight">$2.4B+</span>
            <span className="text-[#B8965A] text-[10px] uppercase tracking-[0.3em] font-bold mt-1">Sales Volume</span>
          </div>
        </div>
      </div>
    </section>
  );
}
