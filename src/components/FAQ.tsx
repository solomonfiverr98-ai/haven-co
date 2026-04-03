import { useEffect, useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const FAQS = [
  {
    question: "How do you determine the valuation of my luxury property?",
    answer: "We use a multi-factor approach: high-end comparable sales, current market demand, unique architectural features, renovation quality, and localized neighborhood trends. Our valuations are far more precise than automated online tools."
  },
  {
    question: "What is your commission structure for high-end listings?",
    answer: "Our commissions are competitive and tailored to the level of service required. For premium properties, we offer tiered structures that cover world-class global marketing, professional cinematography, and private network exposure."
  },
  {
    question: "Do you handle international buyers?",
    answer: "Absolutely. Over 40% of our luxury transactions involve international high-net-worth individuals. We have a robust global network and dedicated translators to facilitate seamless cross-border acquisitions."
  },
  {
    question: "How long does a typical luxury sale take?",
    answer: "Premium properties often have a longer gestation period. However, with our targeted global marketing strategy, 85% of our listings receive a qualified offer within the first 45 days."
  },
  {
    question: "What privacy measures do you take for high-profile clients?",
    answer: "Discretion is our hallmark. We offer 'off-market' listing options, non-disclosure agreements for all viewings, and full anonymity for buyers and sellers whenever requested."
  }
];

export function FAQ() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".faq-header > *", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".faq-header",
          start: "top 85%",
        },
      });

      gsap.from(".faq-item", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".faq-accordion",
          start: "top 80%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="faq" className="py-24 bg-muted/30 transition-colors duration-500">
      <div ref={containerRef} className="max-w-4xl mx-auto px-6 md:px-16">
        <div className="text-center mb-16 faq-header">
          <span className="text-brand text-[11px] uppercase tracking-[0.25em] font-medium mb-4 block">
            COMMON QUESTIONS
          </span>
          <h2 className="text-foreground text-3xl md:text-5xl font-heading leading-tight mb-6">
            Expertly answered, <br />
            <span className="italic text-brand font-light">transparently delivered.</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4 faq-accordion">
          {FAQS.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="faq-item bg-card border border-foreground/5 rounded-2xl px-8 py-2 shadow-sm transition-all hover:shadow-md"
            >
              <AccordionTrigger className="text-foreground font-heading text-xl text-left hover:no-underline py-6 data-[state=open]:text-brand transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-body text-lg leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
