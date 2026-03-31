"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Home, DollarSign } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function Hero() {
  const headingRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Headline Animation
      gsap.from(".hero-line", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out",
      });

      // Search Bar Animation
      gsap.from(searchRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.8,
        ease: "power3.out",
      });

      // Stats Animation
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
              <MapPin className="text-[#B8965A] w-5 h-5" />
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
              <Home className="text-[#B8965A] w-5 h-5" />
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
              <DollarSign className="text-[#B8965A] w-5 h-5" />
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
              Search Properties <Search className="ml-2 w-4 h-4" />
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
