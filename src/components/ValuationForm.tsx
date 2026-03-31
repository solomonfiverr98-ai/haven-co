"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { captureLead } from "@/app/actions/lead-capture";

/* ─── Custom Toast ─── */
function Toast({
  message,
  type,
  onClose,
}: {
  message: string;
  type: "success" | "error";
  onClose: () => void;
}) {
  useEffect(() => {
    const timer = setTimeout(onClose, 6000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`fixed bottom-8 right-8 z-[100] max-w-sm px-6 py-4 rounded-2xl shadow-2xl border backdrop-blur-md transition-all duration-500 animate-slide-up ${
        type === "success"
          ? "bg-green-950/90 border-green-500/30 text-green-100"
          : "bg-red-950/90 border-red-500/30 text-red-100"
      }`}
    >
      <div className="flex items-start gap-3">
        <span className="text-2xl mt-0.5">{type === "success" ? "✓" : "✕"}</span>
        <div className="flex-1">
          <p className="font-semibold text-sm mb-0.5">
            {type === "success" ? "Request Sent" : "Something Went Wrong"}
          </p>
          <p className="text-xs opacity-80">{message}</p>
        </div>
        <button
          onClick={onClose}
          className="opacity-50 hover:opacity-100 transition-opacity text-lg leading-none"
        >
          ×
        </button>
      </div>
    </div>
  );
}

export function ValuationForm() {
  const [isPending, setIsPending] = useState(false);
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsPending(true);
    setToast(null);

    const formData = new FormData(event.currentTarget);
    const result = await captureLead(formData);

    setIsPending(false);
    if (result.success) {
      setToast({
        type: "success",
        message:
          "Your valuation request has been received. We'll contact you within 24 hours.",
      });
      (event.target as HTMLFormElement).reset();
    } else {
      setToast({
        type: "error",
        message: result.error || "Please try again later.",
      });
    }
  }

  return (
    <>
      <section
        id="valuation"
        className="relative py-24 bg-[#1A1A1A] overflow-hidden"
      >
        {/* Background with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600"
            alt="Luxury Property Interior"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-[#1A1A1A]/90" />
        </div>

        {/* Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
          <span className="text-[20vw] font-heading text-gold opacity-5 select-none tracking-[0.2em] pointer-events-none">
            HAVEN
          </span>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-16 text-center">
          <div className="mb-16">
            <span className="text-gold text-[11px] uppercase tracking-[0.25em] font-medium mb-4 block">
              FREE PROPERTY VALUATION
            </span>
            <h2 className="text-[#F5F5F5] text-7xl font-heading leading-tight mb-6">
              How much is your <br />
              <span className="italic text-gold">property worth?</span>
            </h2>
            <p className="text-white/50 text-xl font-body max-w-2xl mx-auto leading-relaxed">
              Get an accurate, no-obligation valuation from our expert team.
              Most valuations completed within 24 hours.
            </p>
          </div>

          {/* Valuation Form Card */}
          <div className="bg-white rounded-[2.5rem] p-12 max-w-2xl mx-auto shadow-2xl border border-[#E5E0D8]">
            <form onSubmit={handleSubmit} className="space-y-8 text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <Label
                    htmlFor="name"
                    className="text-xs uppercase tracking-widest font-bold text-muted-text"
                  >
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="John Doe"
                    className="border-0 border-b border-muted-text/30 rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-gold transition-all bg-transparent"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-xs uppercase tracking-widest font-bold text-muted-text"
                  >
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="border-0 border-b border-muted-text/30 rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-gold transition-all bg-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <Label
                    htmlFor="phone"
                    className="text-xs uppercase tracking-widest font-bold text-muted-text"
                  >
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="border-0 border-b border-muted-text/30 rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-gold transition-all bg-transparent"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="property_address"
                    className="text-xs uppercase tracking-widest font-bold text-muted-text"
                  >
                    Property Address *
                  </Label>
                  <Input
                    id="property_address"
                    name="property_address"
                    type="text"
                    required
                    placeholder="123 Luxury Way, Highstreet"
                    className="border-0 border-b border-muted-text/30 rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-gold transition-all bg-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <Label
                    htmlFor="property_type"
                    className="text-xs uppercase tracking-widest font-bold text-muted-text"
                  >
                    Property Type
                  </Label>
                  <Select name="property_type" defaultValue="House">
                    <SelectTrigger className="border-0 border-b border-muted-text/30 rounded-none px-0 py-2 shadow-none focus:ring-0 focus:border-gold h-auto bg-transparent">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="House">House</SelectItem>
                      <SelectItem value="Apartment">Apartment</SelectItem>
                      <SelectItem value="Villa">Villa</SelectItem>
                      <SelectItem value="Commercial">Commercial</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="size_sqft"
                    className="text-xs uppercase tracking-widest font-bold text-muted-text"
                  >
                    Approximate Size (sqft)
                  </Label>
                  <Input
                    id="size_sqft"
                    name="size_sqft"
                    type="number"
                    placeholder="2,500"
                    className="border-0 border-b border-muted-text/30 rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-gold transition-all bg-transparent"
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={isPending}
                className="w-full bg-gold hover:bg-gold/90 text-white rounded-full py-8 text-xl font-heading shadow-xl transition-all disabled:opacity-50"
              >
                {isPending ? "Sending..." : "Request Free Valuation →"}
              </Button>

              <p className="text-center text-[12px] font-body text-muted-text mt-4">
                🔒 Your details are completely confidential. No obligation. No
                pressure.
              </p>
            </form>
          </div>
        </div>
      </section>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </>
  );
}
