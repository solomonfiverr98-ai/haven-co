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
      // Entrance Animations
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      
      tl.from(".hero-content > *", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
      })
      .from(villaRef.current, {
        scale: 0.9,
        opacity: 0,
        duration: 1.8,
      }, "-=0.8")
      .from([card1Ref.current, card2Ref.current, card3Ref.current, card4Ref.current], {
        opacity: 0,
        scale: 0.8,
        y: 30,
        duration: 1,
        stagger: 0.1,
      }, "-=1.2");

      // Continuous Floating Effect
      const float = (targets: any, duration: number, y: number) => {
        gsap.to(targets, {
          y: `+=${y}`,
          duration: duration,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      };

      float(card1Ref.current, 3, 15);
      float(card2Ref.current, 4, -20);
      float(card3Ref.current, 3.5, 12);
      float(card4Ref.current, 4.5, -18);
      float(villaRef.current, 6, 8);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen w-full bg-background bg-grid-slate overflow-hidden flex flex-col items-center pt-32 pb-24 px-6"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-100">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-brand-blue/[0.08] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] border border-brand-blue/[0.04] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[1400px] border border-brand-blue/[0.02] rounded-full" />
        
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/5 blur-[120px] rounded-full" />
      </div>

      {/* Header Content */}
      <div className="relative z-20 text-center max-w-4xl hero-content space-y-8 mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light dark:glass-dark border-border/50">
          <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
          <span className="text-brand-blue text-[10px] font-bold uppercase tracking-[0.2em]">The Future of Luxury Real Estate</span>
        </div>
        
        <h1 className="text-foreground text-6xl md:text-[90px] leading-[0.9] tracking-tighter font-heading font-medium">
          Discover Your <span className="italic font-light text-brand-blue">Bespoke</span> <br /> Haven Today.
        </h1>
        
        <p className="text-muted-foreground text-lg max-w-xl mx-auto font-body leading-relaxed">
          Access the world&apos;s most exclusive architectural masterpieces. 
          Bespoke property search tailored to your refined lifestyle.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
          <Button className="bg-brand-blue hover:bg-brand-blue/90 text-white rounded-full px-10 py-7 text-sm font-bold tracking-widest uppercase transition-all duration-500 hover:scale-105 shadow-[0_20px_40px_-10px_rgba(102,141,173,0.3)]">
            Explore Collection <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <button className="text-muted-foreground hover:text-foreground text-xs font-bold tracking-widest uppercase transition-colors">
            View Market Intelligence
          </button>
        </div>
      </div>

      {/* Central Interactive Composition */}
      <div className="relative w-full max-w-6xl aspect-[16/9] mt-8 flex items-center justify-center">
        {/* The Villa Model */}
        <div ref={villaRef} className="relative w-[80%] aspect-square max-w-[800px] z-10 transition-all duration-1000">
          <Image 
            src="/hero-villa.png" 
            alt="Luxury Villa Architectural Model" 
            fill 
            className="object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.2)] dark:drop-shadow-[0_40px_80px_rgba(0,0,0,0.8)] filter brightness-110" 
            priority
          />
        </div>

        {/* Floating Cards - Desktop Positioning */}
        <div ref={card1Ref} className="absolute top-[10%] left-[5%] z-20 hidden lg:block">
          <StatCard />
        </div>
        
        <div ref={card2Ref} className="absolute top-[15%] right-[5%] z-20 hidden lg:block">
          <MarketCard />
        </div>
        
        <div ref={card3Ref} className="absolute bottom-[20%] left-[8%] z-20 hidden lg:block">
          <TeamCard />
        </div>
        
        <div ref={card4Ref} className="absolute bottom-[10%] right-[8%] z-20 hidden lg:block">
          <ListingCard />
        </div>

        {/* Mobile View - Single Stat Row */}
        <div className="absolute -bottom-10 left-0 right-0 lg:hidden flex justify-center px-4 overflow-x-auto gap-4 py-8">
          <StatCard className="scale-90 flex-shrink-0" />
          <TeamCard className="scale-90 flex-shrink-0" />
        </div>
      </div>
    </section>
  );
}
