"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Properties", href: "#properties" },
  { name: "About", href: "#team" },
  { name: "Services", href: "#services" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500",
        "w-[90%] max-w-4xl px-4 py-2 rounded-full border",
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-border/50 shadow-sm py-3"
          : "bg-black/20 backdrop-blur-sm border-white/10 py-4"
      )}
    >
      <div className="flex items-center justify-between px-4">
        {/* Logo */}
        <Link 
          href="/" 
          className={cn(
            "font-heading text-xl font-medium tracking-tight whitespace-nowrap",
            isScrolled ? "text-dark-text" : "text-white"
          )}
        >
          ✦ HAVEN & CO
        </Link>

        {/* Nav Links - Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-gold",
                isScrolled ? "text-muted-text" : "text-white/70"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <Button
            asChild
            className="rounded-full bg-gold hover:bg-gold/90 text-white border-0 px-6 font-semibold"
          >
            <Link href="#valuation">Get Valuation →</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
