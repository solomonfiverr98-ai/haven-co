"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    <>
      <nav
        className={cn(
          "fixed top-6 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 font-sans",
          "w-[95%] max-w-6xl px-2 py-2 rounded-full border border-border/40",
          isScrolled
            ? "bg-background/80 backdrop-blur-md shadow-lg py-3"
            : "bg-background/40 backdrop-blur-sm py-4"
        )}
      >
        <div className="grid grid-cols-3 items-center px-6">
          {/* Left: Menu Trigger (Mobile/Tablet Only) */}
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="sm" 
              className="lg:hidden rounded-full px-4 gap-2 hover:bg-black/5 dark:hover:bg-white/5 text-muted-foreground hover:text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              <span className="text-xs font-bold tracking-widest uppercase">Menu</span>
            </Button>

            {/* Desktop Links (Next to Menu position) */}
            <div className="hidden lg:flex items-center gap-6">
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
              className="font-heading text-xl font-bold tracking-tighter whitespace-nowrap text-foreground flex items-center gap-3 group"
            >
              <span className="text-brand-blue group-hover:rotate-[360deg] transition-transform duration-1000">✦</span> 
              <span className="flex items-baseline gap-1">
                HAVEN <span className="text-[10px] text-muted-foreground font-light">&</span> CO
              </span>
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
              className="hidden sm:flex rounded-full bg-brand-blue hover:bg-brand-blue/90 text-white border-0 px-6 font-bold text-[10px] tracking-widest uppercase shadow-md shadow-brand-blue/10"
            >
              <Link href="#valuation">Inquire</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[90] bg-background lg:hidden pt-32 pb-10 px-8 flex flex-col justify-between"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-4xl font-heading font-medium tracking-tight text-foreground hover:text-brand-blue transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="space-y-6">
              <div className="h-px w-full bg-border/40" />
              <div className="flex flex-col gap-4">
                <Button
                  asChild
                  className="w-full rounded-2xl bg-brand-blue hover:bg-brand-blue/90 text-white py-8 text-sm font-bold tracking-widest uppercase"
                >
                  <Link href="#valuation" onClick={() => setMobileMenuOpen(false)}>
                    Get Valuation <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <div className="flex justify-center gap-6 py-4 text-muted-foreground">
                  <span className="text-[10px] font-bold uppercase tracking-widest">Instagram</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest">LinkedIn</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
