"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const stats = [
  { value: "500+", label: "Properties Sold" },
  { value: "$2.4B+", label: "Total Sales Volume" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "15+", label: "Years of Excellence" },
];

export function StatsTrust() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Staggered entrance for text items
      gsap.from(".stats-content > *", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      });

      // Staggered entrance for stats grid items
      gsap.from(".stat-item", {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".stats-grid",
          start: "top 85%",
        },
      });

      // Image reveal
      gsap.from(".stats-image", {
        clipPath: "inset(100% 0 0 0)",
        opacity: 0,
        duration: 1.5,
        ease: "expo.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="py-32 px-6 md:px-24 bg-[#0A0A0A] text-white overflow-hidden border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Stats & Content */}
          <div className="lg:col-span-6 stats-content">
            <span className="text-gold text-[11px] uppercase tracking-[0.3em] font-light mb-6 block">
              Proven Track Record
            </span>
            <h2 className="text-4xl md:text-5xl font-heading leading-tight mb-8">
              Explore Spaces, <br /> 
              <span className="italic text-white/90">Elevate</span> Your Lifestyle
            </h2>
            <p className="text-white/50 font-body text-lg max-w-xl leading-relaxed mb-16">
              Our commitment to excellence is reflected in every transaction. We don't just sell properties; 
              we curate architectural legacies that define the future of premium living.
            </p>

            <div className="stats-grid grid grid-cols-2 gap-y-12 gap-x-8 md:gap-x-16">
              {stats.map((stat) => (
                <div key={stat.label} className="stat-item">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-heading text-gold font-bold mb-3">
                    {stat.value}
                  </div>
                  <p className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-white/40 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Architectural Detail */}
          <div className="lg:col-span-6 relative aspect-[4/5] stats-image group">
            <Image 
              src="/architectural-detail.png" 
              alt="Luxury Architectural Detail"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
            {/* Minimalist Overlay lines */}
            <div className="absolute inset-0 border border-white/10 m-8 pointer-events-none" />
            <div className="absolute top-0 right-0 p-12">
              <div className="text-white/20 font-mono text-[10px] items-center gap-2 hidden md:flex">
                <div className="w-12 h-px bg-white/20" />
                HAVEN & CO / REF_2026
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
