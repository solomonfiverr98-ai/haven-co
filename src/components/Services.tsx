"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
  </svg>
);

const services = [
  {
    id: 1,
    icon: "🏡",
    title: "Property Sales",
    description: "From listing to closing, we handle every detail of your property sale to maximize your return on investment.",
    size: "large",
    className: "bg-dark-text pt-16 pb-12 px-12 md:col-span-12 lg:col-span-5 text-white rounded-2xl",
    linkText: "Learn More",
    iconSize: "text-5xl",
  },
  {
    id: 2,
    icon: "🔑",
    title: "Property Rentals",
    description: "Finding reliable tenants and managing your rental property with precision. Stress-free passive income starts here.",
    size: "medium",
    className: "bg-white border border-[#E5E0D8] p-10 md:col-span-6 lg:col-span-3 text-dark-text rounded-2xl",
    linkText: "Rentals",
    iconSize: "text-4xl",
  },
  {
    id: 3,
    icon: "📊",
    title: "Property Valuation",
    description: "Get an accurate market valuation of your property — free of charge. No obligation, just expert advice.",
    size: "medium",
    className: "bg-white border-l-4 border-l-gold border border-[#E5E0D8] p-10 md:col-span-6 lg:col-span-4 text-dark-text rounded-2xl",
    linkText: "Get Valuation",
    iconSize: "text-4xl",
  },
];

export function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: index * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" className="py-32 px-16 md:px-24 bg-[#FAFAF8]">
      <div ref={containerRef} className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-gold text-[11px] uppercase tracking-[0.25em] font-medium mb-4 block">
            WHAT WE DO
          </span>
          <h2 className="text-dark-text text-6xl font-heading leading-tight max-w-2xl">
            Complete real estate <br /> services under one roof.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => { cardsRef.current[index] = el; }}
              className={`${service.className} service-card group flex flex-col justify-between hover:shadow-2xl transition-all duration-500`}
            >
              <div>
                <span className={`${service.iconSize} block mb-8 transition-transform group-hover:scale-110 duration-300`}>
                  {service.icon}
                </span>
                <h3 className={`font-heading ${service.size === 'large' ? 'text-4xl' : 'text-2xl'} mb-4 font-bold`}>
                  {service.title}
                </h3>
                <p className={`font-body leading-relaxed ${service.size === 'large' ? 'text-white/60 text-lg' : 'text-muted-text text-md'}`}>
                  {service.description}
                </p>
              </div>

              <div className="mt-12 flex items-center gap-2 group-hover:gap-4 transition-all text-gold font-semibold text-sm cursor-pointer border-t border-white/10 pt-6">
                {service.linkText} <ArrowRightIcon />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
