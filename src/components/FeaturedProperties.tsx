"use client";

import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const BedIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/></svg>
);

const BathIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-1C4.3 2.4 3 3.5 3 4.8V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8.4c0-1.3-1.3-2.4-2.5-2.3-1 0-1.5.5-2 1L14 11"/><path d="M3 14h18"/></svg>
);

const SquareIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/></svg>
);

interface Property {
  id: number;
  image: string;
  price: string;
  status: "FOR SALE" | "FOR RENT";
  isNew?: boolean;
  address: string;
  beds: number;
  baths: number;
  sqft: string;
  size: "large" | "small";
}

const properties: Property[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    price: "$1,250,000",
    status: "FOR SALE",
    address: "123 Maple Street",
    beds: 4,
    baths: 3,
    sqft: "2,400",
    size: "large",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600",
    price: "$875,000",
    status: "FOR SALE",
    address: "456 Oak Avenue",
    beds: 3,
    baths: 2,
    sqft: "1,800",
    size: "small",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600",
    price: "$4,500/mo",
    status: "FOR RENT",
    address: "789 Pine Lane",
    beds: 2,
    baths: 2,
    sqft: "1,200",
    size: "small",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
    price: "$2,100,000",
    status: "FOR SALE",
    isNew: true,
    address: "101 River Drive",
    beds: 5,
    baths: 4,
    sqft: "3,800",
    size: "large",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800",
    price: "$995,000",
    status: "FOR SALE",
    address: "202 Cedar Way",
    beds: 3,
    baths: 3,
    sqft: "2,100",
    size: "large",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800",
    price: "$6,200/mo",
    status: "FOR RENT",
    address: "303 Birch Court",
    beds: 3,
    baths: 2,
    sqft: "1,600",
    size: "small",
  },
];

const HeartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-colors duration-300 hover:fill-red-500 hover:stroke-red-500">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

function PropertyCard({ property }: { property: Property }) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="group relative bg-card rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-700 border border-foreground/5 hover:border-brand/30">
      {/* Image Container */}
      <div className="relative h-[280px] overflow-hidden">
        <Image
          src={property.image}
          alt={property.address}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        {/* Badges */}
        <div className="absolute top-6 left-6 flex gap-2">
          <div className="bg-foreground/80 backdrop-blur-md text-background px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase border border-white/10">
            {property.status}
          </div>
          {property.isNew && (
            <div className="bg-brand text-white px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-lg">
              NEW
            </div>
          )}
        </div>
        {/* Wishlist Button */}
        <button 
          onClick={() => setIsFavorite(!isFavorite)}
          className={cn(
            "absolute top-6 right-6 backdrop-blur-sm p-3 rounded-full shadow-lg transition-all duration-300",
            isFavorite ? "bg-red-500 text-white" : "bg-background/90 text-foreground hover:bg-brand hover:text-white"
          )}
        >
          <HeartIcon />
        </button>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <div className="text-left">
            <h3 className="text-2xl font-heading text-foreground font-bold tracking-tight mb-1">
              {property.price}
            </h3>
            <p className="text-sm font-body text-muted-foreground flex items-center gap-1">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>
              {property.address}
            </p>
          </div>
        </div>
        
        {/* Stats Row */}
        <div className="flex items-center gap-6 py-6 border-t border-foreground/5 mt-4">
          <div className="flex items-center gap-2.5 text-foreground/70">
            <div className="text-brand opacity-80"><BedIcon /></div>
            <span className="text-[13px] font-semibold">{property.beds} <span className="text-[11px] font-normal text-muted-foreground">Beds</span></span>
          </div>
          <div className="flex items-center gap-2.5 text-foreground/70">
            <div className="text-brand opacity-80"><BathIcon /></div>
            <span className="text-[13px] font-semibold">{property.baths} <span className="text-[11px] font-normal text-muted-foreground">Baths</span></span>
          </div>
          <div className="flex items-center gap-2.5 text-foreground/70 ml-auto">
            <div className="text-brand opacity-80"><SquareIcon /></div>
            <span className="text-[13px] font-semibold">{property.sqft} <span className="text-[11px] font-normal text-muted-foreground">sqft</span></span>
          </div>
        </div>

        <a 
          href="#valuation" 
          className="mt-2 flex items-center justify-center w-full py-4 rounded-2xl bg-brand text-[13px] font-bold text-white hover:bg-brand/90 transition-all duration-300 group/link shadow-md"
        >
          Inquire Now
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 transition-transform duration-300 group-hover/link:translate-x-1"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
        </a>
      </div>
    </div>
  );
}

export function FeaturedProperties() {
  const [filter, setFilter] = useState("All");

  const filteredProperties = properties.filter((p) => {
    if (filter === "All") return true;
    if (filter === "For Sale") return p.status === "FOR SALE";
    if (filter === "For Rent") return p.status === "FOR RENT";
    if (filter === "New Listing") return p.isNew;
    return true;
  });

  return (
    <section id="properties" className="py-32 px-6 md:px-24 bg-muted/30 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl text-left">
            <span className="inline-block text-brand text-[11px] uppercase tracking-[0.3em] font-bold mb-4">
              ✦ EXCLUSIVE LISTINGS
            </span>
            <h2 className="text-foreground text-5xl md:text-7xl font-heading leading-[1.1] tracking-tight">
              Curated <span className="italic font-light">Excellence.</span>
            </h2>
          </div>
          
          {/* Filters */}
          <div className="flex gap-2 bg-card p-1.5 rounded-full border border-foreground/5 shadow-sm">
            {["All", "For Sale", "For Rent"].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={cn(
                  "px-8 py-2.5 rounded-full text-[12px] font-bold tracking-tight uppercase transition-all duration-500",
                  filter === tab
                    ? "bg-brand text-white shadow-lg"
                    : "bg-transparent text-muted-foreground hover:text-brand"
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Structured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <div className="flex justify-center mt-24">
          <a 
            href="#properties" 
            className="group flex items-center gap-4 px-14 py-5 rounded-full bg-foreground text-background text-[13px] font-bold tracking-widest uppercase hover:bg-brand hover:text-white transition-all duration-500"
          >
            Refresh Portfolio
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}

