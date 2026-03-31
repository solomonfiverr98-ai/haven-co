"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    quote: "Haven & Co found us our forever home in just 3 weeks. The entire process was seamless, professional, and stress-free. We couldn't be happier.",
    name: "Sarah & James M.",
    role: "First-time Buyers",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
  },
  {
    id: 2,
    quote: "We sold our property for 12% above asking price. The market knowledge and negotiation skills of the Haven & Co team are simply unmatched.",
    name: "Robert T.",
    role: "Property Seller",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
  },
  {
    id: 3,
    quote: "As an investor I've worked with many agencies. Haven & Co consistently delivers exceptional results and genuinely cares about your goals.",
    name: "Priya K.",
    role: "Property Investor",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
  },
  {
    id: 4,
    quote: "The rental management service is outstanding. My property is always occupied and I never have to worry about a thing.",
    name: "Michael O.",
    role: "Landlord",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-32 px-16 md:px-24 bg-[#FAFAF8] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="text-gold text-[11px] uppercase tracking-[0.25em] font-medium mb-4 block">
              CLIENT STORIES
            </span>
            <h2 className="text-dark-text text-6xl font-heading leading-tight">
              What our <br /> clients say.
            </h2>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={prev}
              className="w-14 h-14 rounded-full border border-gold flex items-center justify-center text-gold hover:bg-gold hover:text-white transition-all transform hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={next}
              className="w-14 h-14 rounded-full border border-gold flex items-center justify-center text-gold hover:bg-gold hover:text-white transition-all transform hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Carousel Viewport */}
        <div className="relative h-[400px]">
          <AnimatePresence initial={false} mode="wait">
            <motion.div 
              key={currentIndex}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {[0, 1, 2].map((offset) => {
                const item = testimonials[(currentIndex + offset) % testimonials.length];
                return (
                  <div 
                    key={item.id}
                    className="bg-white p-10 rounded-[2rem] border border-[#E5E0D8] shadow-sm flex flex-col justify-between h-[400px] hover:shadow-xl hover:border-gold transition-all duration-500"
                  >
                    <div>
                      {/* Rating */}
                      <div className="flex gap-1 mb-8">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star key={s} className="w-4 h-4 fill-gold text-gold" />
                        ))}
                      </div>
                      
                      <p className="text-lg md:text-xl font-heading italic text-dark-text leading-relaxed">
                        "{item.quote}"
                      </p>
                    </div>

                    <div className="flex items-center gap-4 mt-8 pt-8 border-t border-[#E5E0D8]">
                      <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-gold shadow-md">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-dark-text font-bold text-sm tracking-wide">
                          {item.name}
                        </span>
                        <span className="text-muted-text text-xs uppercase tracking-widest font-semibold mt-1">
                          {item.role}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
