"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Home, Award } from "lucide-react";

/* ─── Floating Card Components ─── */

const StatCard = ({ className }: { className?: string }) => (
  <div className={`glass-light dark:glass-dark p-6 rounded-[2rem] w-48 shadow-2xl flex flex-col gap-2 ${className}`}>
    <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue">
      <TrendingUp size={20} />
    </div>
    <div>
      <div className="text-foreground text-2xl font-heading font-bold">$2.4B+</div>
      <div className="text-muted-foreground text-[10px] uppercase tracking-widest font-bold">Sales Volume</div>
    </div>
    <div className="mt-2 h-1 w-full bg-border/20 rounded-full overflow-hidden">
      <div className="h-full bg-brand-blue w-[85%]" />
    </div>
  </div>
);

const MarketCard = ({ className }: { className?: string }) => (
  <div className={`glass-light dark:glass-dark p-6 rounded-[2rem] w-56 shadow-2xl ${className}`}>
    <div className="flex justify-between items-start mb-4">
      <div>
        <div className="text-foreground text-xl font-heading font-bold">12.5%</div>
        <div className="text-muted-foreground text-[10px] uppercase tracking-widest font-bold">Annual Appreciation</div>
      </div>
      <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-500">
        <TrendingUp size={16} />
      </div>
    </div>
    <div className="flex items-end gap-1 h-12">
      {[40, 70, 45, 90, 65, 80, 100].map((h, i) => (
        <div 
          key={i} 
          className="flex-1 bg-brand-blue/20 rounded-t-sm transition-all duration-500 hover:bg-brand-blue" 
          style={{ height: `${h}%` }} 
        />
      ))}
    </div>
  </div>
);

const TeamCard = ({ className }: { className?: string }) => (
  <div className={`glass-light dark:glass-dark p-4 rounded-[2rem] shadow-2xl flex items-center gap-4 ${className}`}>
    <div className="flex -space-x-3">
      {["https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100", 
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100", 
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100"].map((src, i) => (
        <div key={i} className="w-10 h-10 rounded-full border-2 border-background overflow-hidden relative">
          <Image src={src} alt="Agent" fill className="object-cover grayscale" />
        </div>
      ))}
    </div>
    <div>
      <div className="text-foreground text-sm font-bold">Elite Partners</div>
      <div className="text-brand-blue text-[10px] uppercase tracking-widest font-bold">The Collective</div>
    </div>
  </div>
);

const ListingCard = ({ className }: { className?: string }) => (
  <div className={`glass-light dark:glass-dark p-3 rounded-[1.5rem] w-64 shadow-2xl flex gap-3 items-center ${className}`}>
    <div className="w-16 h-16 rounded-xl overflow-hidden relative flex-shrink-0">
      <Image 
        src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=200" 
        alt="Listing" 
        fill 
        className="object-cover" 
      />
    </div>
    <div className="flex-1 min-w-0">
      <div className="text-foreground text-sm font-bold truncate">Oakwood Estate</div>
      <div className="text-brand-blue text-xs font-medium font-bold">$12,450,000</div>
    </div>
    <div className="w-8 h-8 rounded-full bg-border/20 flex items-center justify-center text-muted-foreground">
      <ArrowRight size={14} />
    </div>
  </div>
);

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const villaRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const card4Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      
      tl.from(".hero-text > *", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
      })
      .from(villaRef.current, {
        y: 60,
        opacity: 0,
        scale: 0.98,
        duration: 1.6,
      }, "-=0.8")
      .from([card1Ref.current, card2Ref.current, card3Ref.current, card4Ref.current], {
        opacity: 0,
        scale: 0.9,
        y: 20,
        duration: 1,
        stagger: 0.1,
      }, "-=1");

      const float = (targets: any, duration: number, y: number) => {
        gsap.to(targets, {
          y: `+=${y}`,
          duration: duration,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      };

      if (card1Ref.current) float(card1Ref.current, 3, 10);
      if (card2Ref.current) float(card2Ref.current, 4, -12);
      if (card3Ref.current) float(card3Ref.current, 3.5, 8);
      if (card4Ref.current) float(card4Ref.current, 4.5, -10);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden flex flex-col items-center pt-40 pb-24 px-6 bg-background"
    >
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-blue/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-blue/5 blur-[120px] rounded-full" />
      </div>

      {/* Centered Hero Content */}
      <div className="relative z-20 text-center max-w-5xl hero-text space-y-8 mb-16 px-4">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-blue/5 border border-brand-blue/10">
          <span className="text-brand-blue text-[9px] font-bold uppercase tracking-[0.25em]">Welcome to Haven & Co Collective</span>
        </div>
        
        <h1 className="text-foreground text-6xl md:text-[100px] leading-[0.85] tracking-tighter font-heading font-medium">
          More <span className="italic font-light text-brand-blue">Comfortable.</span> <br /> 
          More <span className="italic font-light text-brand-blue">Classy.</span>
        </h1>
        
        <p className="text-muted-foreground text-base md:text-xl max-w-2xl mx-auto font-body leading-relaxed md:pt-4">
          The ultimate destination for bespoke architectural masterpieces. 
          Curated listings for those who demand excellence in every square foot.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8">
          <Button asChild className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-12 py-8 text-xs font-bold tracking-widest uppercase transition-all duration-500 hover:scale-105 shadow-xl">
            <a href="#properties">
              Explore Collection <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
          <a 
            href="#valuation"
            className="group flex items-center gap-2 text-muted-foreground hover:text-foreground text-[10px] font-bold tracking-widest uppercase transition-colors"
          >
            Request Private Consultation
            <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* Large Centered Frame Image */}
      <div className="relative w-full max-w-6xl z-10 px-4 md:px-0">
        <div 
          ref={villaRef} 
          className="relative aspect-[21/9] w-full rounded-[2rem] md:rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] dark:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)] group"
        >
          <Image 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=90" 
            alt="Luxury Modern Architecture" 
            fill 
            className="object-cover transition-transform duration-1000 group-hover:scale-105" 
            priority
          />
          {/* Subtle Overlay to ensure readability of overlapping cards if any */}
          <div className="absolute inset-0 bg-black/5 dark:bg-transparent transition-colors duration-500 group-hover:bg-transparent" />
        </div>

        {/* Floating Cards - Repositioned around the frame */}
        <div ref={card1Ref} className="absolute -top-12 -left-8 z-20 hidden xl:block">
          <StatCard />
        </div>
        
        <div ref={card2Ref} className="absolute -top-16 -right-12 z-20 hidden xl:block">
          <MarketCard />
        </div>
        
        <div ref={card3Ref} className="absolute -bottom-10 -left-6 z-20 hidden xl:block">
          <TeamCard />
        </div>
        
        <div ref={card4Ref} className="absolute -bottom-14 -right-10 z-20 hidden xl:block">
          <ListingCard />
        </div>

        {/* Mobile View Stats Row */}
        <div className="mt-12 xl:hidden flex justify-center gap-4 overflow-x-auto pb-4 scrollbar-hide">
          <StatCard className="scale-90 flex-shrink-0" />
          <ListingCard className="scale-90 flex-shrink-0" />
        </div>
      </div>
    </section>
  );
}
