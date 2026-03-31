"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Home, Award } from "lucide-react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      
      tl.from(".hero-text > *", {
        y: 60,
        opacity: 0,
        duration: 1.5,
        stagger: 0.3,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[110vh] w-full overflow-hidden flex flex-col items-center justify-center px-6"
    >
      {/* High-Impact Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=2000"
          alt="Luxury House"
          fill
          priority
          className="object-cover transition-all duration-700 brightness-[0.55] dark:brightness-[0.35] scale-105"
          onLoadingComplete={(img) => {
            gsap.to(img, {
              scale: 1,
              duration: 2.5,
              ease: "power2.out",
            });
          }}
        />
        {/* Fixed dark gradient overlay to prevent washout in light mode */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/70 pointer-events-none" />
      </div>

      {/* Centered Hero Content */}
      <div className="relative z-20 text-center max-w-5xl hero-text space-y-10 px-4 mt-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light dark:glass-dark border border-white/20">
          <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
          <span className="text-foreground text-[10px] font-bold uppercase tracking-[0.25em]">Bespoke Real Estate Collective</span>
        </div>
        
        <h1 className="text-foreground text-7xl md:text-[115px] leading-[0.82] tracking-tighter font-heading font-medium drop-shadow-sm">
          More <span className="italic font-light text-brand-blue">Comfortable.</span> <br /> 
          More <span className="italic font-light text-brand-blue">Classy.</span>
        </h1>
        
        <p className="text-foreground/80 dark:text-foreground/60 text-lg md:text-2xl max-w-2xl mx-auto font-body leading-relaxed md:pt-4">
          Discover a curation of the world&apos;s most exceptional architectural 
          masterpieces, tailored specifically for the refined few.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8">
          <Button asChild className="bg-brand-blue hover:bg-brand-blue/90 text-white rounded-full px-14 py-8 text-sm font-bold tracking-[0.15em] uppercase transition-all duration-500 hover:scale-105 shadow-2xl">
            <a href="#properties">
              Explore Collection <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
          <a 
            href="#valuation"
            className="group flex items-center gap-2 text-foreground/70 hover:text-foreground text-xs font-bold tracking-[0.2em] uppercase transition-colors"
          >
            Digital Valuation
            <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
