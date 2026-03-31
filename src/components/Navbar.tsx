"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Properties", href: "#properties" },
  { name: "About", href: "#team" },
  { name: "Services", href: "#services" },
  { name: "Testimonials", href: "#testimonials" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 font-sans",
        "w-[95%] max-w-5xl px-2 py-2 rounded-full border",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-border/50 shadow-lg py-3"
          : "bg-background/40 backdrop-blur-sm border-border/20 py-4"
      )}
    >
      <div className="flex items-center justify-between px-4">
        {/* Logo */}
        <Link 
          href="/" 
          className="font-heading text-xl font-bold tracking-tighter whitespace-nowrap text-foreground flex items-center gap-2"
        >
          <span className="text-brand-blue">✦</span> HAVEN & CO
        </Link>

        {/* Nav Links - Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium transition-colors hover:text-brand-blue text-muted-foreground/80 hover:text-foreground"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 md:gap-4">
          <ThemeToggle />
          <Button
            asChild
            className="hidden sm:flex rounded-full bg-brand-blue hover:bg-brand-blue/90 text-white border-0 px-6 font-semibold"
          >
            <Link href="#valuation">Get Valuation</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
