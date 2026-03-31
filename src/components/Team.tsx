"use client";

import Image from "next/image";

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const agents = [
  {
    name: "Solomon Haven",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800",
    bio: "With over 15 years in luxury real estate, Solomon has brokered some of the most significant architectural estates in the country.",
  },
  {
    name: "Elena Sterling",
    role: "Executive Partner",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800",
    bio: "Elena specializes in international waterfront properties and is known for her discreet, high-stakes negotiation skills.",
  },
  {
    name: "Marcus Vane",
    role: "Director of Acquisitions",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800",
    bio: "Marcus brings a background in residential development and finance to help clients identify long-term architectural value.",
  },
];

export function Team() {
  return (
    <section id="team" className="py-32 px-6 md:px-24 bg-background transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="inline-block text-brand text-[11px] uppercase tracking-[0.4em] font-bold mb-4">
            ✦ THE HAVEN COLLECTIVE
          </span>
          <h2 className="text-foreground text-3xl sm:text-4xl md:text-7xl font-heading leading-tight tracking-tighter">
            Elite Expertise. <span className="italic font-light text-brand">Personalized.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {agents.map((agent, index) => (
            <div key={index} className="group relative flex flex-col items-center">
              {/* Image with Border Frame */}
              <div className="relative w-full aspect-[4/5] mb-8 overflow-hidden rounded-[40px] border border-foreground/5 p-2 transition-all duration-700 hover:border-brand/50">
                <div className="relative w-full h-full overflow-hidden rounded-[32px]">
                  <Image
                    src={agent.image}
                    alt={agent.name}
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-110"
                  />
                  {/* Overlay Grad */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
                  
                  {/* Floating Socials */}
                  <div className="absolute bottom-8 right-8 flex flex-col gap-3 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <button className="bg-foreground/10 backdrop-blur-md p-3 rounded-full text-foreground border border-foreground/10 hover:bg-brand hover:text-white transition-colors">
                      <LinkedInIcon />
                    </button>
                    <button className="bg-foreground/10 backdrop-blur-md p-3 rounded-full text-foreground border border-foreground/10 hover:bg-brand hover:text-white transition-colors">
                      <InstagramIcon />
                    </button>
                  </div>
                </div>
              </div>

              {/* Text Info */}
              <div className="text-center">
                <h3 className="text-foreground text-2xl font-heading font-medium tracking-tight mb-2">
                  {agent.name}
                </h3>
                <span className="text-brand text-[11px] uppercase tracking-[0.2em] font-bold block mb-4">
                  {agent.role}
                </span>
                <p className="text-muted-foreground text-sm font-body max-w-[280px] mx-auto leading-relaxed">
                  {agent.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Global CTA */}
        <div className="mt-24 border-t border-foreground/10 pt-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-muted-foreground text-lg md:text-xl max-w-xl text-center md:text-left">
            Ready to work with the industry&apos;s most dedicated luxury specialists?
          </p>
          <a
            href="#valuation"
            className="group flex items-center gap-4 px-12 py-4 rounded-full border border-brand text-brand text-[12px] font-bold tracking-widest uppercase hover:bg-brand hover:text-white transition-all duration-500"
          >
            Connect With Us
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
