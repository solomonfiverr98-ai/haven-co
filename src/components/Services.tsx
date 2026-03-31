"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    id: 1,
    title: "Property Sales",
    description: "From luxury listings to high-stakes closing, we handle every detail of your property sale to maximize your return on investment and ensure a seamless transition of legacy assets.",
    category: "01 / TRANSACTIONAL",
  },
  {
    id: 2,
    title: "Property Rentals",
    description: "Curating elite tenant portfolios and managing premium rental properties with clinical precision. Our goal is to secure high-yield, low-maintenance passive income for our clients.",
    category: "02 / PORTFOLIO",
  },
  {
    id: 3,
    title: "Property Valuation",
    description: "Leverage our proprietary market analysis tools for an accurate valuation. We provide deep-dive insights into neighborhood appreciation and long-term investment viability.",
    category: "03 / ANALYTICS",
  },
];

export function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const lineRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Animate left section title
      gsap.from(".services-title", {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      });

      // Animate service items
      itemsRef.current.forEach((item, index) => {
        if (!item) return;
        gsap.fromTo(
          item,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: index * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
            },
          }
        );
      });

      // Animate decorative lines
      lineRef.current.forEach((line, index) => {
        if (!line) return;
        gsap.fromTo(
          line,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.5,
            delay: index * 0.2,
            ease: "expo.out",
            transformOrigin: "left",
            scrollTrigger: {
              trigger: line,
              start: "top 90%",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" className="py-32 px-6 md:px-24 bg-background text-foreground transition-colors duration-500">
      <div ref={containerRef} className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Side: Strategic Branding */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit">
            <div className="services-title text-left">
              <span className="text-brand text-[11px] uppercase tracking-[0.3em] font-medium mb-6 block border-l-2 border-brand pl-4">
                What We Do
              </span>
              <h2 className="text-4xl md:text-6xl font-heading leading-[1.1] mb-8 text-foreground">
                Complete real estate <br /> 
                <span className="italic text-foreground/80">services</span> under <br /> 
                one roof.
              </h2>
              <p className="text-muted-foreground font-body text-lg max-w-sm leading-relaxed">
                We bridge the gap between luxury living and architectural precision, 
                providing a boutique experience for the discerning investor.
              </p>
            </div>
          </div>

          {/* Right Side: Detailed Service List */}
          <div className="lg:col-span-7 flex flex-col">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                ref={(el) => { itemsRef.current[index] = el; }}
                className="group py-12 first:pt-0 last:pb-0"
              >
                <div 
                  ref={(el) => { lineRef.current[index] = el; }}
                  className="h-[1px] bg-foreground/10 w-full mb-12 origin-left"
                />
                <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-16">
                  <span className="text-brand text-[10px] font-mono tracking-widest pt-2">
                    {service.category}
                  </span>
                  <div className="text-left">
                    <h3 className="text-2xl md:text-3xl font-heading font-bold italic mb-6 group-hover:text-brand transition-colors duration-500 text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground font-body text-lg leading-relaxed max-w-xl">
                      {service.description}
                    </p>
                    <div className="mt-8 overflow-hidden">
                      <button className="flex items-center gap-2 text-foreground/40 hover:text-brand text-sm uppercase tracking-widest font-medium transition-all duration-300">
                        Explore Service
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="translate-y-[-1px]">
                          <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="h-[1px] bg-foreground/10 w-full mt-12" />
          </div>

        </div>
      </div>
    </section>
  );
}
