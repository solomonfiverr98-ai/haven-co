"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Properties", href: "#properties" },
  { name: "About", href: "#team" },
  { name: "Services", href: "#services" },
  { name: "Testimonials", href: "#testimonials" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        "w-[95%] max-w-6xl px-2 py-2 rounded-full border border-border/40",
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-lg py-3"
          : "bg-background/40 backdrop-blur-sm py-4"
      )}
    >
      <div className="grid grid-cols-3 items-center px-6">
        {/* Left: Menu Trigger (Desktop & Mobile) */}
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="sm" 
            className="rounded-full px-4 gap-2 hover:bg-black/5 dark:hover:bg-white/5 text-muted-foreground hover:text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            <span className="hidden sm:inline-block text-xs font-bold tracking-widest uppercase">Menu</span>
          </Button>

          {/* Desktop Links (Next to Menu) - Subtle alternative placement */}
          <div className="hidden lg:flex items-center gap-6 ml-4">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[10px] font-bold tracking-[0.2em] uppercase transition-colors hover:text-brand-blue text-muted-foreground/60"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Center: Logo */}
        <div className="flex justify-center">
          <Link 
            href="/" 
            className="font-heading text-xl font-bold tracking-tighter whitespace-nowrap text-foreground flex items-center gap-2 group"
          >
            <span className="text-brand-blue transition-transform duration-500 group-hover:rotate-45">✦</span> 
            HAVEN <span className="text-muted-foreground/40 px-1 font-light">&</span> CO
          </Link>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center justify-end gap-2 md:gap-4">
          <div className="hidden lg:flex items-center gap-6 mr-4">
            {navLinks.slice(2).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[10px] font-bold tracking-[0.2em] uppercase transition-colors hover:text-brand-blue text-muted-foreground/60"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <ThemeToggle />
          <Button
            asChild
            className="hidden sm:flex rounded-full bg-brand-blue hover:bg-brand-blue/90 text-white border-0 px-6 font-bold text-[10px] tracking-widest uppercase shadow-md shadow-brand-blue/20"
          >
            <Link href="#valuation">Inquire</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
