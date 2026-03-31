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
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600",
    price: "$6,200/mo",
    status: "FOR RENT",
    address: "303 Birch Court",
    beds: 3,
    baths: 2,
    sqft: "1,600",
    size: "small",
  },
];

function PropertyCard({ property }: { property: Property }) {
  return (
    <div className="group relative bg-white border border-[#E5E0D8] rounded-2xl overflow-hidden shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-500 hover:border-gold">
      <div className={cn("relative overflow-hidden", property.size === "large" ? "h-[320px]" : "h-[220px]")}>
        <Image
          src={property.image}
          alt={property.address}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <Badge className="bg-gold text-white border-0 px-3 py-1 text-[11px] font-semibold rounded-full">
            {property.status}
          </Badge>
          {property.isNew && (
            <Badge className="bg-dark-text text-white border-0 px-3 py-1 text-[11px] font-semibold rounded-full">
              NEW
            </Badge>
          )}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-3xl font-heading text-dark-text font-bold leading-none mb-2">
          {property.price}
        </h3>
        <p className="text-sm font-body text-muted-text">{property.address}</p>
        
        <div className="flex items-center gap-2 mt-4 pt-4 border-t border-[#E5E0D8]">
          <div className="flex items-center gap-2">
            <BedIcon />
            <span>{property.beds}</span>
          </div>
          <div className="flex items-center gap-2">
            <BathIcon />
            <span>{property.baths}</span>
          </div>
          <div className="flex items-center gap-4">
            <SquareIcon />
            <span>{property.sqft} sqft</span>
          </div>
        </div>

        <a href="#valuation" className="mt-6 inline-block text-[13px] font-semibold text-gold hover:underline transition-all">
          View Property →
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
    <section id="properties" className="py-32 px-16 md:px-24 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-gold text-[11px] uppercase tracking-[0.25em] font-medium mb-4 block">
            FEATURED PROPERTIES
          </span>
          <h2 className="text-dark-text text-6xl font-heading leading-tight">
            Handpicked for you.
          </h2>
        </div>

        {/* Filters */}
        <div className="flex gap-4 mb-16 overflow-x-auto pb-4 scrollbar-hide">
          {["All", "For Sale", "For Rent", "New Listing"].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={cn(
                "px-8 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border",
                filter === tab
                  ? "bg-dark-text text-white border-dark-text"
                  : "bg-transparent text-muted-text border-[#E5E0D8] hover:border-gold"
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-8">
          {/* Row 1: Large (6) + Small (4) */}
          <div className="md:col-span-6">
            {filteredProperties[0] && <PropertyCard property={filteredProperties[0]} />}
          </div>
          <div className="md:col-span-4">
            {filteredProperties[1] && <PropertyCard property={filteredProperties[1]} />}
          </div>

          {/* Row 2: Small (4) + Large (6) */}
          <div className="md:col-span-4">
            {filteredProperties[2] && <PropertyCard property={filteredProperties[2]} />}
          </div>
          <div className="md:col-span-6">
            {filteredProperties[3] && <PropertyCard property={filteredProperties[3]} />}
          </div>

          {/* Additional rows if needed */}
          <div className="md:col-span-6">
            {filteredProperties[4] && <PropertyCard property={filteredProperties[4]} />}
          </div>
          <div className="md:col-span-4">
            {filteredProperties[5] && <PropertyCard property={filteredProperties[5]} />}
          </div>
        </div>

        <div className="flex justify-center mt-20">
          <a href="#valuation" className="px-12 py-4 rounded-full border border-gold text-gold text-sm font-semibold hover:bg-gold hover:text-white transition-all duration-500 inline-block">
            Get Started →
          </a>
        </div>
      </div>
    </section>
  );
}
