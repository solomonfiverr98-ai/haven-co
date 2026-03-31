"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const stats = [
  { value: 500, label: "Properties Sold", suffix: "+" },
  { value: 2.4, label: "Total Sales Volume", prefix: "$", suffix: "B+" },
  { value: 98, label: "Client Satisfaction", suffix: "%" },
  { value: 15, label: "Years of Excellence", suffix: "+" },
];

export function StatsTrust() {
  const containerRef = useRef<HTMLDivElement>(null);
  const statRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      statRefs.current.forEach((el, index) => {
        if (!el) return;
        const targetValue = stats[index].value;
        const obj = { value: 0 };
        
        gsap.to(obj, {
          value: targetValue,
          duration: 2.5,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          onUpdate: () => {
            if (targetValue % 1 === 0) {
              el.innerText = Math.floor(obj.value).toString();
            } else {
              el.innerText = obj.value.toFixed(1);
            }
          },
        });
      });

      // Divider Animation
      gsap.from(".stat-divider", {
        scaleY: 0,
        duration: 1.5,
        opacity: 0,
        delay: 0.5,
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="py-24 bg-[#F5F2EE] border-y border-[#E5E0D8]"
    >
      <div className="max-w-7xl mx-auto px-16 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-4 text-center">
        {stats.map((stat, index) => (
          <div 
            key={stat.label} 
            className="flex-1 flex flex-col md:flex-row items-center justify-center gap-8 w-full group"
          >
            <div className="flex flex-col items-center">
              <div className="flex items-baseline mb-2">
                {stat.prefix && (
                  <span className="text-4xl md:text-5xl font-heading text-gold">
                    {stat.prefix}
                  </span>
                )}
                <span 
                  ref={(el) => { statRefs.current[index] = el; }}
                  className="stat-number text-7xl md:text-8xl font-heading text-gold font-bold transition-all duration-300"
                >
                  0
                </span>
                {stat.suffix && (
                  <span className="text-4xl md:text-5xl font-heading text-gold">
                    {stat.suffix}
                  </span>
                )}
              </div>
              <p className="text-sm md:text-md font-body text-muted-text uppercase tracking-[0.2em] font-semibold">
                {stat.label}
              </p>
            </div>

            {index < stats.length - 1 && (
              <div className="stat-divider hidden md:block w-px h-24 bg-gold opacity-30 origin-top" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
